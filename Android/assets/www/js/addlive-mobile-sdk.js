/**
 * Created with JetBrains AppCode.
 * User: tkozak
 * Date: 5/21/13
 * Time: 9:25 AM
 * To change this template use File | Settings | File Templates.
 */


(function (w) {
  'use strict';

  // Imports
  var ADL = w.ADL,
      Log;

  var OPTIONS_DEFAULT = {
    initDevices: true,
    streamerEndpointResolver: ADL._STREAMER_ENDPOINT_RESOLVER
  };


  ADL.initPlatform = function (listener, options) {
    Log = ADL.Log;
    Log.i('==================================================================');
    Log.i('Initializing the AddLive Mobile JS SDK v' + ADL.VERSION + ' ' +
        ADL.RELEASE_LEVEL);
    Log.i('==================================================================');
    var mergedOptions = {};

    OPTIONS_DEFAULT.streamerEndpointResolver = ADL._STREAMER_ENDPOINT_RESOLVER;
    ADL.Utils.merge(mergedOptions, OPTIONS_DEFAULT);
    if (!options) {
      listener.onInitStateChanged(
          new ADL.InitStateChangedEvent(
              ADL.InitState.ERROR,
              undefined,
              ADL.ErrorCodes.Logic.INVALID_ARGUMENT,
              'Required options parameter not given'));
      return;
    }
    ADL.Utils.merge(mergedOptions, options || {});
    Log.d('Will init the platform with options: ' + JSON.stringify(mergedOptions));
    ADL.StreamerResolver.init(mergedOptions);
    var succ = function () {
          Log.d("Service initialised.");
          ADL._service = new ADL.AddLiveService(new PhoneGapServiceAdapter());

          _initVideoDeviceMaybe(listener, mergedOptions);
        },
        err = function () {
        };
    Log.d('Calling initPlatform');
    _nativeExec(ADL.r(succ, err), "initPlatform", [mergedOptions]);
  };

  /**
   *
   * @param {ADL.PlatformInitListener}listener
   * @param options
   */
  function _initVideoDeviceMaybe(listener, options) {
    Log.d('Possibly initialising the video device');
    var reportReady = function (vDevFunctional) {
      listener.onInitProgressChanged(new ADL.InitProgressChangedEvent(100));
      var e = new ADL.InitStateChangedEvent(ADL.InitState.INITIALIZED);
      e.audioCaptureDevFunctional = true;
      e.audioOutputDevFunctional = true;
      e.videoCaptureDevFunctional = vDevFunctional;
      listener.onInitStateChanged(e);
    };
    if (!options.initDevices) {
      Log.w('Devices setup was skipped');
      reportReady(false);
      return;
    }
    Log.d('Will setup video device');
    listener.onInitProgressChanged(new ADL.InitProgressChangedEvent(50));
    listener.onInitStateChanged(new ADL.InitStateChangedEvent(ADL.InitState.DEVICES_INIT_BEGIN));
    var camId,
        onDevs = function (devs) {
          listener.onInitProgressChanged(new ADL.InitProgressChangedEvent(75));
          camId = ADL.Storage[ADL._CAM_CONFIG_KEY];
          if (!camId) {
            for (var id in devs) {
              if (Object.prototype.hasOwnProperty.call(devs, id) &&
                  /.*front.*/.test(devs[id])) {
                camId = id;
                break;
              }
            }
          }
          ADL._service.setVideoCaptureDevice(ADL.r(onDev, onDevError), camId);
        },
        onDevsError = function (errCode, errMsg) {
          reportReady(false);
        },
        onDev = function () {
          ADL.Storage[ADL._CAM_CONFIG_KEY] = camId;
          reportReady(true);
        },
        onDevError = function (errCode, errMsg) {
          reportReady(false);
        };
    ADL._service.getVideoCaptureDeviceNames(ADL.r(onDevs, onDevsError));
  }


  function _notImplHandler(responder) {
    responder.error(ADL.ErrorCodes.Logic.PLATFORM_UNSUPPORTED, 'Method not implemented on this platform');
  }

  function PhoneGapServiceAdapter() {
  }

  PhoneGapServiceAdapter.prototype = {
    addAddLiveServiceListener: function (responder, listener) {
      w.Cordova.exec(_getPhoneGapEventsAdapter(listener.listener),
          ADL._nop, 'AddLive', 'addServiceListener', []);
      responder.result();
    },
    connect: function (responder, connDescr) {
      _nativeExec(responder, 'connect', JSON.parse(connDescr));
    },
    disconnect: function (responder, scopeId) {
      _nativeExec(responder, 'disconnect', scopeId);
    },
    fetchConfig: _notImplHandler,
    getAudioCaptureDevice: _notImplHandler,
    setAudioCaptureDevice: _notImplHandler,
    getAudioCaptureDeviceNames: _notImplHandler,
    getVideoCaptureDevice: function (r) {
      _nativeExec(r, 'getVideoCaptureDevice');
    },
    setVideoCaptureDevice: function (r, devId) {
      Log.d('Calling setVideoCaptureDevice');
      _nativeExec(r, 'setVideoCaptureDevice', devId);
    },
    getVideoCaptureDeviceNames: function (r) {
      _nativeExec(r, 'getVideoCaptureDeviceNames');
    },
    getAudioOutputDevice: _notImplHandler,
    setAudioOutputDevice: _notImplHandler,
    getAudioOutputDeviceNames: _notImplHandler,
    getHostCpuDetails: _notImplHandler,
    getMicrophoneVolume: _notImplHandler,
    getSpeakersVolume: _notImplHandler,
    setMicrophoneVolume: _notImplHandler,
    setSpeakersVolume: _notImplHandler,
    getProperty: function (r, key) {
      _nativeExec(r, 'getProperty', key);
    },
    setProperty: function (r, key, value) {
      _nativeExec(r, 'setProperty', [key, value]);
    },
    getScreenCaptureSources: _notImplHandler,
    getVersion: function (r) {
      Log.d('[PhoneGapServiceAdapter] Calling getVersion ');
      _nativeExec(r, 'getVersion');
    },
    monitorMicActivity: _notImplHandler,
    publish: function (r, scopeId, what, how) {
      _nativeExec(r, 'publish', [scopeId, what, how]);
    },
    unpublish: function (r, scopeId, what) {
      _nativeExec(r, 'unpublish', [scopeId, what]);
    },
    broadcast: function (r, scopeId, message, recipientId) {
      _nativeExec(r, 'sendMessage', [scopeId, message, recipientId]);
    },
    setAllowedSenders: function (r, scopeId, senders) {
      _nativeExec(r, 'setAllowedSenders', [scopeId, JSON.parse(senders)]);
    },
    monitorSpeechActivity: function (r, scopeId, enable) {
      _nativeExec(r, 'monitorSpeechActivity', [scopeId, enable]);
    },
    setApplicationId: _notImplHandler,
    startLocalVideo: function (r) {
      _nativeExec(r, 'startLocalVideo');
    },
    stopLocalVideo: function (r) {
      _nativeExec(r, 'stopLocalVideo');
    },
    startMeasuringStatistics: function (r, scopeId, interval) {
      _nativeExec(r, 'startMeasuringStatistics', [scopeId, interval]);
    },
    stopMeasuringStatistics: function (r, scopeId) {
      _nativeExec(r, 'stopMeasuringStatistics', scopeId);
    },
    startPlayingTestSound: _notImplHandler,
    stopPlayingTestSound: _notImplHandler
  };

  var listeners = [];

  function _getPhoneGapEventsAdapter(listener) {
    return function (e) {
      Log.d('Got event: ' + JSON.stringify(e));
      try {
        switch (e._eventType) {
          case 'videoFrameSizeChanged':
            listener.onVideoFrameSizeChanged(
                new ADL.VideoFrameSizeChangedEvent(e.sinkId, e.width, e.height));
            break;
          case 'connectionLost':
            listener.onConnectionLost(
                new ADL.ConnectionLostEvent(e.scopeId, e.errCode, e.errMessage));
            break;
          case 'userEvent':
            listener.onUserEvent(new ADL.UserStateChangedEvent(e.scopeId, e, undefined));
            break;
          case 'mediaStream':
            listener.onMediaStreamEvent(new ADL.UserStateChangedEvent(e.scopeId, e, e.mediaType));
            break;
          case 'speechActivity':
            listener.onSpeechActivity(new ADL.SpeechActivityEvent(e.activeSpeakers, e.scopeId, e.speechActivity));
            break;
          case 'mediaStats':
            listener.onMediaStats(
                new ADL.MediaStatsEvent(e.scopeId, e.mediaType, e, e.remoteUserId));
            break;
          case 'message':
            listener.onMessage(new ADL.MessageEvent(e.srcUserId, e.data));
            break;
          case 'mediaConnTypeChanged':
            listener.onMediaConnTypeChanged(
                new ADL.MediaConnTypeChangedEvent(e.scopeId, e.mediaType, e.connectionType));
            break;
          case 'mediaIssue':
            listener.onMediaIssue(new ADL.MediaIssueEvent(e));
            break;
          case 'mediaInterrupt':
            // TODO handle this.
            break;
          default:
            Log.w('Got an unsupported event: ' + JSON.stringify(e));
        }
      } catch (e) {
        Log.e('Got an error processing the event: ' + e + '\n' + e.stack);
      }
    };
  }


  ADL.renderSink = function (request) {
    Log.d('Rendering sink using request: ' + JSON.stringify(request));
    var renderRequest = _getBlockPosition(request.containerId);
    ADL.Utils.merge(renderRequest, request);
    if (renderRequest.mirror === undefined) {
      renderRequest.mirror = false;
    }
    console.log('Rendering sink with details: ' + JSON.stringify(renderRequest));
    _nativeExec(ADL.r(), 'renderSink', renderRequest);
  };

  ADL.relocateRenderer = function (containerId) {
    var renderRequest = _getBlockPosition(containerId);
    renderRequest.containerId = containerId;
    Log.d('Relocating the renderer to new location: ' + JSON.stringify(renderRequest));
    _nativeExec(ADL.r(), 'relocateRenderer', renderRequest);
  };

  function _getBlockPosition(containerId) {
    var container = document.getElementById(containerId),
        posRect = container.getBoundingClientRect(),
        doc = container.ownerDocument.documentElement,
        zIndex = _getZIndex(container);
    Log.d('Got zIndex:' + zIndex);
    return {
      top: posRect.top + w.pageYOffset - doc.clientTop,
      left: posRect.left + w.pageXOffset - doc.clientLeft,
      width: container.offsetWidth,
      height: container.offsetHeight,
      zIndex: zIndex
    };
  }

  function _getZIndex(node) {
    var val;
    while ((node != null)) {
      val = document.defaultView.getComputedStyle(node, null).getPropertyValue('z-index');
      if (parseInt(val)) {
        return val;
      }
      node = node.offsetParent;
    }
    return 0;
  }


  ADL.disposeRenderer = function (rendererId) {
    _nativeExec(ADL.r(), 'disposeRenderer', rendererId);
  };

  // Mock BugReporting module.
  ADL.BugReporting = {
    reportBug: ADL._nop,
    reportCrash: ADL._nop,
    init: ADL._nop,
    postDevices: ADL._nop,
    postLogs: ADL._nop
  };

  ADL._pluginInstance = {
    getLogFileByTag: function () {
      return {rawLength: 0, content: ''}
    },
    getLogFileTag: function () {
      return '';
    }

  };


  /**
   *
   * @param {ADL.Responder}responder
   * @param {String}method
   * @param {Array}[args]
   */
  function _nativeExec(responder, method, args) {
//    Log.d("Calling method: " + method + ' with args: ' + args);
    if (args === undefined) {
      args = [];
    }
    if (!(args instanceof Array)) {
      args = [args];
    }
    Log.d("Calling method: " + method + ' with args: ' + args);
    var succHandler = function (result) {
          responder.result(result);
        },
        errHandler = function (errArray) {
          responder.error(errArray[0], errArray[1]);
        };
    Cordova.exec(succHandler, errHandler, 'AddLive', method, args);
  }


}(window));