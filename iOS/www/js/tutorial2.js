(function () {
  'use strict';
  // Imports
  var Log;

  // Consts

  var APP_ID = NaN,
      API_KEY = '';

  // Variables
  var renderStarted = false,
      previewSinkId,
      availCams = [], currentCamIdx;


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

    // Step 2. Actually trigger the asynchronous initialization of the AddLive SDK.
    ADL.initPlatform(initListener, {apiKey: API_KEY, applicationId: APP_ID});
  }

  function _onOrientationChanged() {
    if (_isInLandscape()) {
      $('#renderWrapper').addClass('landscape');
    } else {
      $('#renderWrapper').removeClass('landscape');
    }
    if (renderStarted) {
      ADL.relocateRenderer('localRenderer');
    }
  }

  function _onPlatformReady() {
    Log.d("Got platform ready");
    _populateVersion();
    _getCams();
    _initUI();
  }

  function _populateVersion() {

    // The responder for the getVersion call.
    var onV = function (version) {
      $('#sdkVersionLbl').text(version);
    };

    // get Version of the AddLive Service.
    ADL.getService().getVersion(ADL.r(onV));
  }


  function _getCams() {

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
    $('#startRenderBtn').click(_startLocalVideo);
    $('#stopRenderBtn').click(_stopLocalVideo);
    $('#toggleCamBtn').click(_toggleCam);
  }

  function _startLocalVideo() {

    // Responder for the startLocalVideo event.
    var onVStarted = function (sinkId) {
      previewSinkId = sinkId;
      ADL.renderSink({sinkId: sinkId, containerId: 'localRenderer'});
      renderStarted = true;
      $('#startRenderBtn').hide();
      $('#stopRenderBtn').show();
    };

    // Starts previewing video stream of current user.
    ADL.getService().startLocalVideo(ADL.r(onVStarted));
  }

  function _stopLocalVideo() {

    // Responder for the stopLocalVideo event.
    var onVStopped = function () {
      previewSinkId = undefined;
      ADL.disposeRenderer('localRenderer');
      renderStarted = false;
      $('#startRenderBtn').show();
      $('#stopRenderBtn').hide();
    };

    // Stops previewing local video feed of the user.
    ADL.getService().stopLocalVideo(ADL.r(onVStopped));
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


  function _isInLandscape() {
    return window.orientation === 90 || window.orientation === -90;
  }

  // Register the document ready handler.
  document.addEventListener('deviceready', _onDeviceReady, false);

  // Listener for when the orientation change.
  window.addEventListener('orientationchange', _onOrientationChanged, true);

  // To avoid the window from moving.
  document.addEventListener('touchmove', function (e) {
    e.preventDefault();
  }, false);

}());
