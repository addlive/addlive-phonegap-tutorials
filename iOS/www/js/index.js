/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

//function AddLivePlugin() {
//}
//
//function onVersion(val) {
//    $('#sdkVersionLbl').text(val);
//}
//
//function onDevices(devs) {
//    var $devicesSelect = $('#devicesSelect');
//    $devicesSelect.html('');
//    $('#devsRawLbl').text(JSON.stringify(devs));
//    $.each(devs, function (k, v) {
//        $('<option value="' + k + '">' + v + '</option>').appendTo($devicesSelect);
//    });
//
//    setTimeout(function () {
//        Cordova.exec(_nop, _nop, "AddLive", "setVideoCaptureDevice", [$devicesSelect.val()]);
//    }, 100);
//    $devicesSelect.change(function () {
//        Cordova.exec(_nop, _nop, "AddLive", "setVideoCaptureDevice", [$(this).val()]);
//    });
//}
//
//function renderSink(sinkId, containerId) {
//    var renderRequest = getPosition(containerId);
//    renderRequest.sinkId = sinkId;
//    renderRequest.containerId = containerId;
//    console.log('Rendering sink with details: ' + JSON.stringify(renderRequest));
//    Cordova.exec(_nop, _nop, "AddLive", "renderSink", [renderRequest]);
//}
//
//function getPosition(containerId) {
//    var iterLeft, iterTop, height, container, width;
//    container = document.getElementById(containerId);
//    width = container.style.width;
//    height = container.style.height;
//    iterTop = iterLeft = 0;
//    if (container.offsetParent) {
//        iterLeft += container.offsetLeft;
//        iterTop += container.offsetTop;
//        while ((container = container.offsetParent)) {
//            iterLeft += container.offsetLeft;
//            iterTop += container.offsetTop;
//        }
//    }
//    try {
//        console.log('Border w: ' + container.style.borderTopWidth);
////        iterTop += container.style.borderTopWidth;
////        iterLeft += container.style.borderLeftWidth;
//
//    } catch (e) {
//        console.log("Got an error: " + e);
//    }
//    iterTop += 1;
//    iterLeft += 1;
//    return {
//        top: iterTop,
//        left: iterLeft,
//        width: width,
//        height: height
//    };
//}
//
//var localVideoSink;
//
//function onLocalVideo(sinkId) {
////    alert('Local video started. Sink id: ' + sinkId);
//    localVideoSink = sinkId;
//    setTimeout(function () {
//        renderSink(sinkId, 'localPreviewRenderer');
//    }, 100);
//}
//
//function onLocalVideoEnded() {
//    console.log('Got local video ended');
//    setTimeout(function () {
//        console.log('Disposing renderer: localPreviewRenderer');
//        Cordova.exec(_nop, _nop, "AddLive", "disposeRenderer", ['localPreviewRenderer']);
//    }, 100);
//}
//
//function moveRender5pxRight() {
//    Cordova.exec(_nop, _nop, "AddLive", "disposeRenderer", ['localPreviewRenderer']);
//    var $localPreviewRenderer = $('#localPreviewRenderer');
//    var left = parseInt($localPreviewRenderer.css('left'), 10);
//    left += 5;
//    console.log('New left: ' + left);
//    $localPreviewRenderer.css('left', left + 'px');
//    renderSink(localVideoSink, 'localPreviewRenderer');
//}
//
//
//var scopeId = 'PhoneGapTestScope';
//function connect() {
//    var descr = {
//        scopeId: scopeId,
//        autopublishVideo: false,
//        autopublishAudio: false,
//        authDetails: {
//            userId: 123,
//            salt: '',
//            signature: '',
//            expires: new Date().getTime() + 15 * 60
//        }
//    };
//    Cordova.exec(onConnect, _nop, "AddLive", "connect", [descr]);
//}
//
//function eventsHandler(e) {
//    console.log('Got an event: ' + JSON.stringify(e));
//}
//
//function serviceReady() {
//    Cordova.exec(eventsHandler, _nop, "AddLive", "addServiceListener", []);
//    Cordova.exec(onVersion, _nop, "AddLive", "getVersion", []);
//    Cordova.exec(onDevices, _nop, "AddLive", "getVideoCaptureDeviceNames", []);
//    setTimeout(function () {
//        connect();
//    }, 1000);
//
//    $('#localPreviewChckbox').change(onLocalVideoCheckbox);
//    $('#publishAudioChckbox').change(onAudioPublish);
//    $('#publishVideoChckbox').change(onVideoPublish);
//    $('#render5pxRightBtn').click(moveRender5pxRight);
//    $('#sendMsgBtn').click(sendMessage);
//
//    $('#statsChckbox').change(onStatsChckbx);
//
//}
//
//function onLocalVideoCheckbox() {
//    if ($(this).is(':checked')) {
//        Cordova.exec(onLocalVideo, _nop, "AddLive", "startLocalVideo", []);
//    } else {
//        Cordova.exec(onLocalVideoEnded, _nop, "AddLive", "stopLocalVideo", []);
//    }
//}
//
//function onAudioPublish() {
//    if ($(this).is(':checked')) {
//        Cordova.exec(_nop, _nop, "AddLive", "publish", [scopeId, 'audio']);
//    } else {
//        Cordova.exec(_nop, _nop, "AddLive", "unpublish", [scopeId, 'audio']);
//    }
//}
//
//function onVideoPublish() {
//    if ($(this).is(':checked')) {
//        Cordova.exec(_nop, _nop, "AddLive", "publish", [scopeId, 'video']);
//    } else {
//        Cordova.exec(_nop, _nop, "AddLive", "unpublish", [scopeId, 'video']);
//    }
//}
//
//function onStatsChckbx() {
//    if ($(this).is(':checked')) {
//        Cordova.exec(_nop, _nop, "AddLive", "startMeasuringStats", [scopeId, 1]);
//    } else {
//        Cordova.exec(_nop, _nop, "AddLive", "stopMeasuringStats", [scopeId]);
//    }
//}
//
//function sendMessage() {
//    var msg = JSON.stringify({
//        text: 'Some message content',
//        direct: false
//    });
//    Cordova.exec(_nop, _nop, "AddLive", "sendMessage", [scopeId, msg]);
//}
//
//function onConnect() {
//    console.log('Connected!!!!');
//}
//
//function _nop(arg) {
//    console.error("Got an error: " + JSON.stringify(arg));
//}

(function () {
  'use strict';

  // imports
  var Log;

  function _onDeviceReady() {
    Log = ADL.Log;

    $('#deviceready .listening').hide();
    $('#deviceready .received').show();
    console.log('Got platform ready');

    ADL.initStdLogging(true);
    console.log('Logging ready');
    Log.d('Got platform ready');
    var initListener = new ADL.PlatformInitListener();

    /**
     *
     * @param {ADL.InitStateChangedEvent}e
     */
    initListener.onInitStateChanged = function (e) {
      if (e.state == ADL.InitState.INITIALIZED) {
        _onPlatformReady();
      } else {
        Log.d("Got init state: " + JSON.stringify(e));
      }
    };
    ADL.initPlatform(initListener, {apiKey: 'CloudeoTestAccountSecret', applicationId: 1});

  }

  function _onPlatformReady() {

    Log.d("Got platform ready");
    _initUIPostPlatform();
    _populateVersion();
    _populateDevices()
  }

  function _initUIPostPlatform() {
    $('#devicesSelect').change(function () {
      ADL.getService().setVideoCaptureDevice(ADL.r(), $(this).val());
    });
    $('#localPreviewChckbox').change(function () {
      var onStarted = function (sink) {
            ADL.renderSink({
              containerId: 'localPreviewRenderer',
              sinkId: sink,
              mirror: true
            });
          },
          onStopped = function () {
            ADL.disposeRenderer('localPreviewRenderer');
          };
      if ($(this).is(':checked')) {
        ADL.getService().startLocalVideo(ADL.r(onStarted));
      } else {
        ADL.getService().stopLocalVideo(ADL.r(onStopped));
      }

    });

  }

  function _populateVersion() {
    var onV = function (version) {
      $('#sdkVersionLbl').text(version);
    };
    ADL.getService().getVersion(ADL.r(onV));
  }

  function _populateDevices() {
    var $devicesSelect = $('#devicesSelect'),
        onDevs = function (devs) {
          Log.d('Got Devices: ' + JSON.stringify(devs));

          $devicesSelect.html('');
          $.each(devs, function (k, v) {
            $('<option value="' + k + '">' + v + '</option>').appendTo($devicesSelect);
          });
          ADL.getService().getVideoCaptureDevice(ADL.r(onDev));
        }, onDev = function (dev) {
          Log.d("Got device: " + dev);
          $devicesSelect.val(dev);
        };
    ADL.getService().getVideoCaptureDeviceNames(ADL.r(onDevs));
  }


  document.addEventListener('deviceready', _onDeviceReady, false);

//  var app = {
//    // Application Constructor
//    initialize: function () {
//      this.bindEvents();
//    },
//    // Bind Event Listeners
//    //
//    // Bind any events that are required on startup. Common events are:
//    // 'load', 'deviceready', 'offline', and 'online'.
//    bindEvents: function () {
//      document.addEventListener('deviceready', this.onDeviceReady, false);
//    },
//    // deviceready Event Handler
//    //
//    // The scope of 'this' is the event. In order to call the 'receivedEvent'
//    // function, we must explicity call 'app.receivedEvent(...);'
//    onDeviceReady: function () {
//      app.receivedEvent('deviceready');
//      _onDeviceReady();
//    },
//    // Update DOM on a Received Event
//    receivedEvent: function (id) {
//      var parentElement = document.getElementById(id);
//      var listeningElement = parentElement.querySelector('.listening');
//      var receivedElement = parentElement.querySelector('.received');
//
//      listeningElement.setAttribute('style', 'display:none;');
//      receivedElement.setAttribute('style', 'display:block;');
//    }
//  };
//

}());

