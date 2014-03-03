//
//  AddLive.h
//  PhoneGapLab
//
//  Created by Tadeusz Kozak on 5/16/13.
//
//

#import <Cordova/CDVPlugin.h>
#import <AddLive/AddLiveAPI.h>

@interface AddLive : CDVPlugin


- (void)initPlatform:(CDVInvokedUrlCommand*)command;

- (void)releasePlatform:(CDVInvokedUrlCommand*)command;

- (void)getVersion:(CDVInvokedUrlCommand*)command;

- (void)addServiceListener:(CDVInvokedUrlCommand*)command;

- (void)getVideoCaptureDeviceNames:(CDVInvokedUrlCommand*)command;

- (void)setVideoCaptureDevice:(CDVInvokedUrlCommand*)command;

- (void)getVideoCaptureDevice:(CDVInvokedUrlCommand*)command;

- (void)startLocalVideo:(CDVInvokedUrlCommand*)command;

- (void)stopLocalVideo:(CDVInvokedUrlCommand*)command;

- (void)renderSink:(CDVInvokedUrlCommand*)command;

- (void)disposeRenderer:(CDVInvokedUrlCommand*)command;

- (void)relocateRenderer:(CDVInvokedUrlCommand*)command;

- (void)connect:(CDVInvokedUrlCommand*)command;

- (void)disconnect:(CDVInvokedUrlCommand*)command;

- (void)setAllowedSenders:(CDVInvokedUrlCommand*)command;

- (void)monitorSpeechActivity:(CDVInvokedUrlCommand *)command;

- (void)publish:(CDVInvokedUrlCommand*)command;

- (void)unpublish:(CDVInvokedUrlCommand*)command;

- (void)sendMessage:(CDVInvokedUrlCommand*)command;

- (void)startMeasuringStatistics:(CDVInvokedUrlCommand*)command;

- (void)stopMeasuringStatistics:(CDVInvokedUrlCommand*)command;

- (void)setProperty:(CDVInvokedUrlCommand*)command;

- (void)getProperty:(CDVInvokedUrlCommand*)command;

- (void)onPlatformReady:(ALError *)error;


@end
