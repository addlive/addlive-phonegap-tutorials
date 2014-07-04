/**
 * @fileoverview
 *
 * Contains implementation of logic required by the Tutorial 5.
 *
 * @author Juan Docal
 * @date 21-02-2013 23:35
 */
(function () {
  'use strict';
  // Imports
  var Log;

  // Consts

  var APP_ID = NaN,
      API_KEY = '';

  // Variables
  var localRenderEnabled = false,
      previewSinkId,
      availCams = [], currentCamIdx,
      screenSharedSinkId,
      userIdWithNewScreenSize,
      videoSinkIdArray = [],
      speechActivityArray = [],
      currentVideoSinkerId,
      currentVideoUserId,

      /**
       * @type {ADL.MediaConnection}
       */
      activeConnection;


  function _onDeviceReady() {
    Log = ADL.Log;
    _onOrientationChanged();
    ADL.initStdLogging(true);
    Log.d('Got platform ready');

    // Step 1 - create the PlatformInitListener and overwrite it's methods.
    var initListener = new ADL.PlatformInitListener();

    // Define the handler for initialization state changes
    initListener.onInitStateChanged = function (e) {
      if (e.state == ADL.InitState.INITIALIZED) {
        _onPlatformReady();
      } else {
        Log.d("Got init state: " + JSON.stringify(e));
      }
    };
    setTimeout(function () {

      // Step 2. Actually trigger the asynchronous initialization of the AddLive SDK.
      ADL.initPlatform(initListener, {apiKey: API_KEY, applicationId: APP_ID});
    }, 100);

  }

  function _onOrientationChanged() {
    if (_isInLandscape()) {
      Log.d('Got an orientation changed to landscape');
      $(document.body).addClass('landscape');
    } else {
      Log.d('Got an orientation changed to portrait');
      $(document.body).removeClass('landscape');
    }
    if (localRenderEnabled) {
      ADL.relocateRenderer('localRenderer');
    }
  }

  function _onAppPause() {
    Log.d('Got app pause - suspending functionality');
    ADL.disposeRenderer('localRenderer');

    // Stops previewing local video feed of the user.
    ADL.getService().stopLocalVideo(ADL.r());

    // Disconnects previously established connection to the streaming server.
    activeConnection.disconnect(ADL.r());
  }

  function _onAppResume() {
    _startLocalVideo();
    _connect();
  }


  function _onPlatformReady() {
    Log.d("Got platform ready");
    _setupListener();
    _populateVersion();
    _getCams();
    _startLocalVideo();
    _initUI();
  }

  function _populateVersion() {
    Log.d('Populating version');

    // The responder for the getVersion call.
    var onV = function (version) {
      $('#sdkVersionLbl').text(version);
    };

    // get Version of the AddLive Service.
    ADL.getService().getVersion(ADL.r(onV));
  }

  function _setupListener() {
    Log.d('Setting up listener');

    // Defines all methods expected by the AddLiveService to dispatch notifications.
    var listener = new ADL.AddLiveServiceListener();

    // Notifies about a change in connectivity status of a remote participant.
    listener.onUserEvent = function (e) {
      Log.d('Got user event');
      if (e.isConnected && e.videoPublished) {
        // Renders a video sink.
        onUserJoined(e);

      } else if(e.screenPublished){

        // Renders a screen share.
        onUserScreenShared(e);

      } else {

        // Disposes a renderer.
        console.log("User with id: " + e.userId + ' left the media scope');

        // Remove html tag.
        $('#renderingWidget' + e.userId).parent().remove();

        // Disposes a renderer.
        ADL.disposeRenderer('renderingWidget' + e.userId);

        // Update the scroll element
        new IScroll('#wrapper', { scrollX: true, scrollY: false, mouseWheel: false, bounce: false });
      }
    };

    // Notifies about media streaming status change for given remote user.
    listener.onMediaStreamEvent = function (e) {
      Log.d('Got Media Stream event');
      var id = 'renderingWidget' + e.userId;
      switch (e.mediaType) {
        case ADL.MediaType.VIDEO:
          if (e.videoPublished) {

            // Renders a video sink.
            ADL.renderSink({containerId: id, sinkId: e.videoSinkId});
          } else {

            // Disposes a renderer.
            ADL.disposeRenderer(id);
          }
          break;
        case ADL.MediaType.SCREEN:
          if(e.screenPublished){
            screenSharedSinkId = e.screenSinkId;
            userIdWithNewScreenSize = e.userId;
          } else if (!e.screenPublished && e.videoPublished) {
            // Dispose previous render
            ADL.disposeRenderer(id);

            $.each(videoSinkIdArray, function(ev, video){
              if(video.userId == e.userId){
                ADL.renderSink({containerId: id, sinkId: video.videoSinkId});
              }
            });

          } else {
            // Dispose previous render
            ADL.disposeRenderer(id);
          }
          break;
      }
    };

    // Notifies about change of spatial resolution of video feed.
    listener.onVideoFrameSizeChanged = function (e) {

      // If the change is related to a screen share feed
      if(e.sinkId === screenSharedSinkId){

        // Setting the widget id.
        var id = 'renderingWidget' + userIdWithNewScreenSize;

        // Dispose previous render
        ADL.disposeRenderer(id);

        // Reisize in order to get an optimal size for the screen
        $('#'+id).css(fitDims(e.width, e.height, 320, 480));

        // Render the sink if the video stream is being published.
        ADL.renderSink({
          sinkId:e.sinkId,
          containerId:id
        });

        screenSharedSinkId = null;
        userIdWithNewScreenSize = "";
      }
    };

    // Reports speech activity within given scope.
    listener.onSpeechActivity = function (e) {
      onSpeechActivity(e);
    };

    // Registers a AddLive Service listener.
    ADL.getService().addServiceListener(ADL.r(), listener);
  }

  function onUserJoined(e) {
    console.log("Got new user with id: " + e.userId);

    videoSinkIdArray.push(e);

    if(!currentVideoSinkerId){

      currentVideoSinkerId = e.videoSinkId;
      currentVideoUserId = e.userId;

      // Setting the widget id.
      var id = 'renderingWidget' + e.userId;

      // Append it to the rendering area.
      $('#renderers').append('<li><div id="' + id + '"></div></li>');

      if (e.videoPublished) {
        // Render the sink if the video stream is being published.
        ADL.renderSink({
          sinkId:e.videoSinkId,
          containerId:id
        });
      }

      // Update the scroll element
      new IScroll('#wrapper', { scrollX: true, scrollY: false, mouseWheel: false, bounce: false });
    }
  }

  function onSpeechActivity(e) {

    // Speech activity for each user connected to the session.
    $.each(e.speechActivity, function(ev, item){

      // If it's not myself.
      if(item.userId != -1){
        Log.d('userId: ' + item.userId + ' activity: ' + (item.activity * 100 / 255));

        // Get the current activity value.
        var activityValue = parseInt(item.activity,10);

        // Get the previous activity value.
        var prevActivityValue = 0;
        $.each(speechActivityArray, function(ev, speech){
          if(speech.userId == item.userId){
            prevActivityValue = parseInt(speech.activity,10);
          }
        });

        // Accumulate the activity to set the video of the user with more activity (this is restart it each 2 seconds).
        activityValue = activityValue + prevActivityValue;

        // Save the values.
        var exist = false;
        $.each(speechActivityArray, function(ev, speech){
          if(speech.userId == item.userId){
            speech.activity = activityValue;
            exist = true;
          }
        });
        if(!exist){
          var obj = {
              userId: item.userId,
              activity: activityValue
          };
          speechActivityArray.push(obj);
        }
      }
    });
  }

  function checkActivity(){
    setInterval(function(){

      // If there is some activity.
      if(speechActivityArray.length > 0){

        // Getting the user with most activity during interval
        var obj, max = 0;
        $.each(speechActivityArray, function(ev, speech){
          //if(speech.userId == item.userId){
            if(parseInt(speech.activity,10) >= max){
              max = parseInt(speech.activity,10);
              obj = speech;
            }
          //}
        });

        // Restarting the dictionary saving those activities values.
        speechActivityArray = [];

        // If it's a different user as the one feeding video right now.
        if(obj.userId != currentVideoUserId && obj.activity > 0){

          // Dispose previous render
          ADL.disposeRenderer('renderingWidget' + currentVideoUserId);

          // Clean the renderer object
          $('#renderers').empty();

          // Get his userId.
          currentVideoUserId = obj.userId;

          $.each(videoSinkIdArray, function(ev, video){
            if(video.userId == obj.userId){
              currentVideoSinkerId = video.videoSinkId;
            }
          });

          var id = 'renderingWidget' + currentVideoUserId;

          // Append it to the rendering area.
          $('#renderers').append('<li><div id="' + id + '"></div></li>');

          // Render the sink if the video stream is being published.
          ADL.renderSink({
            sinkId:currentVideoSinkerId,
            containerId:id
          });

          // Update the scroll element
          new IScroll('#wrapper', { scrollX: true, scrollY: false, mouseWheel: false, bounce: false });
        }
      }
      // If there is none activity.
      else{
        currentVideoSinkerId = NaN;
        currentVideoUserId = NaN;
      }
    },2000);
  }

  function onUserScreenShared(e) {
    console.log("Got new user screen shared with id: " + e.userId);

    // Setting the widget id.
    var id = 'renderingWidget' + e.userId;

    // Append it to the rendering area.
    $('#renderers').append('<li><div id="' + id + '"></div></li>');

    // Render the sink if the video stream is being published.
    ADL.renderSink({
      sinkId:e.screenSinkId,
      containerId:id
    });

    // Update the scroll element
    new IScroll('#wrapper', { scrollX: true, scrollY: false, mouseWheel: false, bounce: false });
  }

  function _getCams() {
    Log.d('Getting cams');

    // Responder for the getVideoCaptureDeviceNames event.
    var onCams = function (devs) {
      for (var id in devs) {
        availCams.push(id);
      }
      Log.d('Go cameras: ' + JSON.stringify(availCams));

      // Returns the identifier of currently configured video capture device.
      ADL.getService().getVideoCaptureDevice(ADL.r(onCam));

      // Responder for the getVideoCaptureDevice event.
    }, onCam = function (id) {
      currentCamIdx = availCams.indexOf(id);
    };

    // Returns a list of video capture devices plugged in to the user's computer.
    ADL.getService().getVideoCaptureDeviceNames(ADL.r(onCams));
  }

  function _initUI() {
    Log.d('Initialising UI');
    $('#toggleCamBtn').click(_toggleCam);
    $('#connectBtn').click(_connect);
    $('#disconnectBtn').click(_disconnect);
    $('#enableAudioBtn').click(_publishAudio);
    $('#disableAudioBtn').click(_unpublishAudio);
    $('#enableVideoBtn').click(_publishVideo);
    $('#disableVideoBtn').click(_unpublishVideo);
  }

  function _startLocalVideo() {
    Log.d('Starting local video');

    // Responder for the startLocalVideo event.
    var onVStarted = function (sinkId) {
      previewSinkId = sinkId;
      ADL.renderSink({sinkId: sinkId, containerId: 'localRenderer'});
      localRenderEnabled = true;
    };

    // Starts previewing video stream of current user.
    ADL.getService().startLocalVideo(ADL.r(onVStarted));
  }

  function _toggleCam() {
    Log.d('Toggling cam');

    // onSet. Responder for the stopLocalVideo event.
    var nextCamIdx = (currentCamIdx + 1) % availCams.length,
        onSet = function () {
          Log.d('Cam set. Updating camera index to: ' + nextCamIdx);
          currentCamIdx = nextCamIdx;
        };
    var camId = availCams[nextCamIdx];
    Log.d('Trying to set cam: ' + camId);

    // Sets the video capture device to be used by the SDK.
    ADL.getService().setVideoCaptureDevice(ADL.r(onSet), camId);
  }

  function _connect() {
    Log.d('Connecting');
    var scopeId = $('#scopeIdInp').val();

    // Responder for the connect event.
    var onConnected = function (conn) {
      $('#connectBtn').hide();
      $('#disconnectBtn').show();
      $('#disableAudioBtn').show();
      $('#disableVideoBtn').show();
      $('#scopeIdInp').attr('disabled', 'true');

      activeConnection = conn;

      // Responder for the onMonitorSpeech event.
      var onMonitorSpeech = function () {
        Log.d("Monitor speech successfully requested");
      };

      // Activates or deactivates monitoring of the audio mic activity.
      ADL.getService().monitorSpeechActivity(ADL.r(onMonitorSpeech), scopeId, true);

      // Start the checking function in order to set the video feed of the user speaking.
      checkActivity();
    };

    // connectionDescriptor completely describes client requirements on the connection to be established.
    var connDescr = {
      scopeId: scopeId,
      authDetails: {
        userId: _randomUserId(),
        salt: '',
        signature: '',
        expires: new Date().getTime() + (5 * 60)
      }
    };

    // Establishes a connection to the streaming server.
    ADL.getService().connect(ADL.r(onConnected), connDescr);
  }

  function _disconnect() {
    Log.d('Disconnecting from a scope');

    // Responder for the disconnect event.
    var onD = function () {
      activeConnection = undefined;
      $('.hidden-on-start').hide();
      $('#scopeIdInp').removeAttr('disabled');
      $('#connectBtn').show();

      // Get list of rendenring widgets
      var renderList = $("div[id^='renderingWidget']");

      $.each(renderList, function(ev, item){
        // Disposes a renderer.
        ADL.disposeRenderer(item.id);
      });

      $('#renderers').empty();

      // Update the scroll element
      new IScroll('#wrapper', { scrollX: true, scrollY: false, mouseWheel: false, bounce: false });
    };

    // Terminates the connection maintained by this MediaConnection instance.
    activeConnection.disconnect(ADL.r(onD));
  }

  function _publishAudio() {

    // Responder for the publishAudio event.
    var onDone = function () {
      $('#enableAudioBtn').hide();
      $('#disableAudioBtn').show();
    };

    // Publishes the audio stream.
    activeConnection.publishAudio(ADL.r(onDone));
  }

  function _unpublishAudio() {

    // Responder for the unpublishAudio event.
    var onDone = function () {
      $('#enableAudioBtn').show();
      $('#disableAudioBtn').hide();
    };

    // Stops publishing the audio stream.
    activeConnection.unpublishAudio(ADL.r(onDone));
  }

  function _publishVideo() {

    // Responder for the publishVideo event.
    var onDone = function () {
      $('#enableVideoBtn').hide();
      $('#disableVideoBtn').show();
    };

    // Publishes the video stream.
    activeConnection.publishVideo(ADL.r(onDone));
  }

  function _unpublishVideo() {

    // Responder for the unpublishVideo event.
    var onDone = function () {
      $('#enableVideoBtn').show();
      $('#disableVideoBtn').hide();
    };

    // Stops publishing the video stream.
    activeConnection.unpublishVideo(ADL.r(onDone));
  }

  function fitDims (srcW, srcH, targetW, targetH) {
    var srcAR = srcW / srcH;
    var targetAR = targetW / targetH;
    var width, height, padding;

    if (srcW < targetW && srcH < targetH) {
      return {
        width:srcW,
        height:srcH,
        'margin-top':(targetH - srcH) / 2,
        'margin-bottom':(targetH - srcH) / 2,
        'margin-left':(targetW - srcW) / 2
      };
    }
    if (srcAR < targetAR) {
      // match height
      height = targetH;
      width = srcW * targetH / srcH;
      padding = (targetW - width) / 2;
      return {
        width:width,
        height:height,
        'margin-left':padding,
        'margin-right':padding,
        'margin-top':0,
        'margin-bottom':0
      };
    } else {
      // match width
      width = targetW;
      height = targetW * srcH / srcW;
      padding = (targetH - height) / 2;
      return {
        width:width,
        height:height,
        'margin-left':0,
        'margin-right':0,
        'margin-top':padding,
        'margin-bottom':padding
      };

    }
  }

  function _randomUserId() {
    return Math.floor(Math.random() * 1000);
  }

  function _isInLandscape() {
    return window.orientation === 90 || window.orientation === -90;
  }

  // Register the document ready handler.
  document.addEventListener('deviceready', _onDeviceReady, false);

  // Listener for when the orientation change.
  document.addEventListener('orientationchange', _onOrientationChanged, true);

  // Listener for when the App lose it's focus and goes to the background,
  document.addEventListener('pause', _onAppPause, true);

  // Listener for when the App regain the focus and come frome the backgroud.
  document.addEventListener('resume', _onAppResume, true);

  // To avoid the window from moving.
  document.addEventListener('touchmove', function (e) {
    e.preventDefault();
  }, false);

}());
