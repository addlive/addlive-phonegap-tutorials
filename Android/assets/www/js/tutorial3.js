(function () {
  'use strict';
  // Imports
  var Log;

  // Consts

  var APP_ID = NaN,
      API_KEY = '';

  // Variables
  var localRenderEnabled = false,
      remoteRenderEnabled = false,
      previewSinkId,
      availCams = [], currentCamIdx,

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
    if (remoteRenderEnabled) {
      ADL.relocateRenderer('remoteRenderer');
    }
  }

  function _onAppPause() {
    Log.d('Got app pause - suspending functionality');
    ADL.disposeRenderer('localRenderer');
    ADL.disposeRenderer('remoteRenderer');

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
        ADL.renderSink({containerId: 'remoteRenderer', sinkId: e.videoSinkId});
        remoteRenderEnabled = true;
      } else {

        // Disposes a renderer.
        ADL.disposeRenderer('remoteRenderer');
        remoteRenderEnabled = false;
      }
    };

    // Notifies about media streaming status change for given remote user.
    listener.onMediaStreamEvent = function (e) {
      Log.d('Got Media Stream event');
      switch (e.mediaType) {
        case ADL.MediaType.VIDEO:
          if (e.videoPublished) {
            remoteRenderEnabled = true;

            // Renders a video sink.
            ADL.renderSink({containerId: 'remoteRenderer', sinkId: e.videoSinkId});
          } else {

            // Disposes a renderer.
            ADL.disposeRenderer('remoteRenderer');
            remoteRenderEnabled = false;
          }
      }
    };

    // Registers a AddLive Service listener.
    ADL.getService().addServiceListener(ADL.r(), listener);
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
    ADL.disposeRenderer('remoteRenderer');

    // Responder for the disconnect event.
    var onD = function () {
      activeConnection = undefined;
      $('.hidden-on-start').hide();
      $('#scopeIdInp').removeAttr('disabled');
      $('#connectBtn').show();
      remoteRenderEnabled = false;
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
