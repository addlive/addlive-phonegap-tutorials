(function () {
  'use strict';

  // Imports
  var Log;

  // Consts

  var APP_ID = NaN,
      API_KEY = '';

  function _onDeviceReady() {
    Log = ADL.Log;
    ADL.initStdLogging(true);
    Log.d('Got platform ready');

    // Step 1 - create the PlatformInitListener and overwrite it's methods.
    var initListener = new ADL.PlatformInitListener();

    // Define the handler for initialization state changes
    initListener.onInitStateChanged = function (e) {
      _updateState(e.state);
      if (e.state == ADL.InitState.INITIALIZED) {
        _onPlatformReady();
      } else {
        Log.d("Got init state: " + JSON.stringify(e));
      }
    };

    // Step 2. Actually trigger the asynchronous initialization of the AddLive SDK.
    ADL.initPlatform(initListener, {apiKey: API_KEY, applicationId: APP_ID});
  }

  function _onPlatformReady() {
    Log.d("Got platform ready");
    _populateVersion();
  }

  function _populateVersion() {

    // The responder for the getVersion call.
    var onV = function (version) {
      $('#sdkVersionLbl').text(version);
      _updateState('Platform Ready');
    };

    // get Version of the AddLive Service.
    ADL.getService().getVersion(ADL.r(onV));
  }


  function _updateState(state) {
    $('#stateLbl').text(state);
  }

  /**
   * Register the document ready handler.
   */
  document.addEventListener('deviceready', _onDeviceReady, false);

}());
