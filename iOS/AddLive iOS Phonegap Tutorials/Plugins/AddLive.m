//
//  AddLive.m
//  PhoneGapLab
//
//  Created by Tadeusz Kozak on 5/16/13.
//
//

#import <QuartzCore/QuartzCore.h>
#import "AddLive.h"

@interface _ResponderAdapter : NSObject

@property CDVInvokedUrlCommand *_srcCommand;
@property(nonatomic, weak) id <CDVCommandDelegate> _commandDelegate;
@property NSString *methodName;

+ (void)init;

- (id)initWithCommand:(CDVInvokedUrlCommand *)cmd delegate:(id <CDVCommandDelegate>)delegate methodName:(NSString *)methodName;

- (void)dispatchResult:(CDVPluginResult *)result;


@end

@interface _StringResponder : _ResponderAdapter

- (void)result:(ALError *)error result:(NSString *)result;

@end


@interface _VoidResponder : _ResponderAdapter

- (void)result:(ALError *)error;

@end

@interface _DevicesResponder : _ResponderAdapter

- (void)result:(ALError *)error result:(NSArray *)result;

@end

@class ALCordovaRenderSupport;

@interface AddLiveServiceListenerAdapter : NSObject <ALServiceListener>
@property(nonatomic, weak) id <CDVCommandDelegate> _commandDelegate;
@property(nonatomic, weak) ALCordovaRenderSupport *_renderSupport;

- (id)initWithDelegate:(id <CDVCommandDelegate>)delegate;

- (void)addJSListener:(NSString *)callbackId;

- (void)_dispatchEvent:(NSDictionary *)event;

- (NSMutableDictionary *)_userEvent2Dictionary:(ALUserStateChangedEvent *)event;

- (void)videoFrameSizeChanged:(ALVideoFrameSizeChangedEvent *)event;

- (void)onSpeechActivity:(ALSpeechActivityEvent *)event;

- (void)connectionLost:(ALConnectionLostEvent *)event;

- (void)userEvent:(ALUserStateChangedEvent *)event;

- (void)mediaStream:(ALUserStateChangedEvent *)event;

- (void)mediaStats:(ALMediaStatsEvent *)event;

- (void)message:(ALMessageEvent *)event;

- (void)mediaConnTypeChanged:(ALMediaConnTypeChangedEvent *)event;

- (void)mediaIssue:(ALMediaIssueEvent *)event;

- (void)mediaInterrupt:(ALMediaInterruptEvent *)event;


@end

@interface ALCordovaRenderSupport : NSObject <UIScrollViewDelegate>

@property(nonatomic, weak) UIWebView *_webView;
@property(nonatomic, weak) ALService *_service;
@property(nonatomic, strong) UIScrollView *scrollView;
@property(nonatomic, strong) UIPageControl *pageControl;


- (id)initWithService:(ALService *)service webView:(UIWebView *)webView;

- (void)renderSink:(NSDictionary *)renderRequest;

- (void)videoFrameSizeChanged:(ALVideoFrameSizeChangedEvent *)e;

- (void)disposeRenderer:(NSString *)rendererId;

- (void)relocateRenderer:(NSDictionary *)renderRequest;


@end

@implementation AddLive {
  ALService *_service;
  AddLiveServiceListenerAdapter *_listenerAdapter;
  CDVInvokedUrlCommand *_initCommand;

  ALCordovaRenderSupport *_renderSupport;
}

#pragma mark Platform lifecycle - init/dispose


- (void)initPlatform:(CDVInvokedUrlCommand *)command {
  NSLog(@"[iOS]Initialising the platform");
  [_ResponderAdapter init];
  NSDictionary *initOptions = [command.arguments objectAtIndex:0];
  NSNumber *appId = [initOptions objectForKey:@"applicationId"];
  if ([initOptions objectForKey:@"apiKey"]) {
    _service = [[ALService alloc] initWithAppId:appId
                                         appKey:[initOptions objectForKey:@"apiKey"]];
  } else {
    _service = [[ALService alloc] initWithAppId:appId];
  }

  _listenerAdapter = [[AddLiveServiceListenerAdapter alloc] initWithDelegate:self.commandDelegate];
  _renderSupport = [[ALCordovaRenderSupport alloc] initWithService:_service webView:self.webView];
  _listenerAdapter._renderSupport = _renderSupport;

  ALInitOptions *options = [[ALInitOptions alloc] init];
  if ([initOptions objectForKey:@"configUrl"]) {
    options.configUrl = [initOptions objectForKey:@"configUrl"];
  }

  _initCommand = command;
  ALResponder *responder = [[ALResponder alloc] initWithSelector:@selector(onPlatformReady:) withObject:self];
  [_service initPlatform:options responder:responder];
}

- (void)releasePlatform:(CDVInvokedUrlCommand *)command {
  NSLog(@"[iOS]Releasing the platform");
  [_service releasePlatform];
  _service = nil;
  _listenerAdapter = nil;
  [[[_VoidResponder alloc]
      initWithCommand:command delegate:self.commandDelegate
           methodName:@"releasePlatform"] result:[ALError alloc]];
}

#pragma mark API Methods - basics

- (void)getVersion:(CDVInvokedUrlCommand *)command {
  NSLog(@"[iOS]Calling getVersion");
  _StringResponder *adapter = [[_StringResponder alloc] initWithCommand:command delegate:self.commandDelegate methodName:@"getVersion"];
  ALResponder *responder = [[ALResponder alloc] initWithSelector:@selector(result:result:) withObject:adapter];
  [_service getVersion:responder];
}

- (void)addServiceListener:(CDVInvokedUrlCommand *)command {
  NSLog(@"[iOS]Adding service listener");
  [_listenerAdapter addJSListener:command.callbackId];
  CDVPluginResult *result = nil;

  result = [CDVPluginResult
      resultWithStatus:CDVCommandStatus_OK
   messageAsDictionary:[NSDictionary dictionaryWithObject:@"ListenerRegistered" forKey:@"_eventType"]];
  [result setKeepCallbackAsBool:YES];
  [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];

}

#pragma mark API Methods - Devices, rendering


- (void)getVideoCaptureDeviceNames:(CDVInvokedUrlCommand *)command {
  NSLog(@"[iOS]Calling getVideoCaptureDeviceNames");
  _DevicesResponder *adapter = [[_DevicesResponder alloc] initWithCommand:command delegate:self.commandDelegate methodName:@"getVideoCaptureDeviceNames"];
  ALResponder *responder = [[ALResponder alloc] initWithSelector:@selector(result:result:) withObject:adapter];
  [_service getVideoCaptureDeviceNames:responder];

}

- (void)setVideoCaptureDevice:(CDVInvokedUrlCommand *)command {
  NSString *device = [command.arguments objectAtIndex:0];
  NSLog(@"[iOS]Calling setVideoCaptureDevice with device: %@", device);
  _VoidResponder *adapter = [[_VoidResponder alloc] initWithCommand:command delegate:self.commandDelegate methodName:@"setVideoCaptureDevice"];
  ALResponder *responder = [[ALResponder alloc] initWithSelector:@selector(result:) withObject:adapter];
  [_service setVideoCaptureDevice:device responder:responder];
}

- (void)getVideoCaptureDevice:(CDVInvokedUrlCommand *)command {
  NSLog(@"[iOS]Calling getVideoCaptureDevice");
  _StringResponder *adapter = [[_StringResponder alloc] initWithCommand:command
                                                               delegate:self.commandDelegate
                                                             methodName:@"getVideoCaptureDevice"];
  ALResponder *responder = [[ALResponder alloc] initWithSelector:@selector(result:result:) withObject:adapter];
  [_service getVideoCaptureDevice:responder];
}

- (void)startLocalVideo:(CDVInvokedUrlCommand *)command {
  NSLog(@"[iOS]Calling startLocalVideo");
  _StringResponder *adapter = [[_StringResponder alloc] initWithCommand:command
                                                               delegate:self.commandDelegate
                                                             methodName:@"startLocalVideo"];
  ALResponder *responder = [[ALResponder alloc] initWithSelector:@selector(result:result:) withObject:adapter];
  [_service startLocalVideo:responder];
}

- (void)stopLocalVideo:(CDVInvokedUrlCommand *)command {
  NSLog(@"[iOS]Calling stopLocalVideo");
  _VoidResponder *adapter = [[_VoidResponder alloc] initWithCommand:command delegate:self.commandDelegate methodName:@"stopLocalVideo"];
  ALResponder *responder = [[ALResponder alloc] initWithSelector:@selector(result:) withObject:adapter];
  [_service stopLocalVideo:responder];
}

- (void)renderSink:(CDVInvokedUrlCommand *)command {
  NSLog(@"[iOS]Calling renderSink");
  NSDictionary *request = [command.arguments objectAtIndex:0];
  [_renderSupport renderSink:request];
}

- (void)disposeRenderer:(CDVInvokedUrlCommand *)command {
  NSString *rendererId = [command.arguments objectAtIndex:0];
  NSLog(@"[iOS]Calling disposeRenderer with rendererId: %@", rendererId);
  [_renderSupport disposeRenderer:rendererId];
}

- (void)relocateRenderer:(CDVInvokedUrlCommand *)command {
  NSLog(@"[iOS]Calling relocateRenderer");
  [_renderSupport relocateRenderer:[command.arguments objectAtIndex:0]];
}


#pragma mark API Methods - Connectivity

- (void)connect:(CDVInvokedUrlCommand *)command {
  NSLog(@"[iOS]Calling connect");
  NSDictionary *descrRaw = [command.arguments objectAtIndex:0];
  ALConnectionDescriptor *descr = [[ALConnectionDescriptor alloc] init];

  NSLog(@"[iOS]Parsing connection descriptor");
  descr.autopublishAudio = [[descrRaw objectForKey:@"autopublishAudio"] boolValue];
  descr.autopublishVideo = [[descrRaw objectForKey:@"autopublishVideo"] boolValue];
  descr.scopeId = [descrRaw objectForKey:@"scopeId"];
  /*descr.url = [descrRaw objectForKey:@"url"];
  if (!descr.url) {
    descr.url = @"";
  }*/
  if (!descr.scopeId) {
    descr.scopeId = @"";
  }

  if (![descrRaw objectForKey:@"authDetails"]) {
    // TODO report an error here
  }
  NSLog(@"[iOS]Parsing auth details");
  ALAuthDetails *authDetails = [ALAuthDetails alloc];
  NSDictionary *authDetailsRaw = [descrRaw objectForKey:@"authDetails"];
  authDetails.expires = [[authDetailsRaw objectForKey:@"expires"] longLongValue];
  authDetails.salt = [authDetailsRaw objectForKey:@"salt"];
  authDetails.signature = [authDetailsRaw objectForKey:@"signature"];
  authDetails.userId = [[authDetailsRaw objectForKey:@"userId"] longLongValue];
  descr.authDetails = authDetails;

  /*ALVideoStreamDescriptor *vStream = [ALVideoStreamDescriptor alloc];
  if ([descrRaw objectForKey:@"videoStream"]) {
    NSDictionary *highStreamRaw = [descrRaw objectForKey:@"highVideoStream"];
    vStream.maxBitRate = [[highStreamRaw objectForKey:@"maxBitRate"] unsignedIntValue];
    vStream.maxFps = [[highStreamRaw objectForKey:@"maxFps"] unsignedIntValue];
    vStream.maxHeight = [[highStreamRaw objectForKey:@"maxHeight"] unsignedIntValue];
    vStream.maxWidth = [[highStreamRaw objectForKey:@"maxWidth"] unsignedIntValue];
    vStream.publish = [[highStreamRaw objectForKey:@"publish"] boolValue];
    vStream.receive = [[highStreamRaw objectForKey:@"receive"] boolValue];

  } else {
    vStream.maxBitRate = 640;
    vStream.maxFps = 15;
    vStream.maxHeight = 640;
    vStream.maxWidth = 480;
    vStream.publish = YES;
    vStream.receive = YES;
  }

  descr.videoStream = vStream;*/
    
  _VoidResponder *adapter = [[_VoidResponder alloc] initWithCommand:command delegate:self.commandDelegate methodName:@"connect"];
  ALResponder *responder = [[ALResponder alloc] initWithSelector:@selector(result:) withObject:adapter];

  NSLog(@"[iOS]Calling service method");
  [_service connect:descr responder:responder];
  NSLog(@"[iOS]Connection attempt pending");
}

- (void)disconnect:(CDVInvokedUrlCommand *)command {
  NSString *scopeId = [command.arguments objectAtIndex:0];
  NSLog(@"[iOS]Calling disconnect for scope: %@", scopeId);
  _VoidResponder *adapter = [[_VoidResponder alloc] initWithCommand:command delegate:self.commandDelegate methodName:@"disconnect"];
  ALResponder *responder = [[ALResponder alloc] initWithSelector:@selector(result:) withObject:adapter];
  [_service disconnect:scopeId responder:responder];
}

- (void)setAllowedSenders:(CDVInvokedUrlCommand *)command {
  NSString *scopeId = [command.arguments objectAtIndex:0];
  NSArray *senders = [command.arguments objectAtIndex:1];
  NSLog(@"[iOS]Calling setAllowedSenders for scope: %@ and senders: %@",
  scopeId, [senders componentsJoinedByString:@","] );
  _VoidResponder *adapter = [[_VoidResponder alloc] initWithCommand:command delegate:self.commandDelegate methodName:@"setAllowedSenders"];
  ALResponder *responder = [[ALResponder alloc] initWithSelector:@selector(result:) withObject:adapter];
  [_service setAllowedSenders:scopeId mediaType:@"video" userIds:senders responder:responder];
}

- (void)monitorSpeechActivity:(CDVInvokedUrlCommand *)command {
  NSString *scopeId = [command.arguments objectAtIndex:0];
  BOOL enable = [[command.arguments objectAtIndex:1] boolValue];
  NSLog(@"[iOS]Calling monitorSpeechActivity for scope: %@ and enable: %hhd", scopeId, enable);
  _VoidResponder *adapter = [[_VoidResponder alloc] initWithCommand:command delegate:self.commandDelegate methodName:@"monitorSpeechActivity"];
  ALResponder *responder = [[ALResponder alloc] initWithSelector:@selector(result:) withObject:adapter];
  [_service monitorSpeechActivity:scopeId enable:enable responder:responder];
}

- (void)publish:(CDVInvokedUrlCommand *)command {
  NSString *scopeId = [command.arguments objectAtIndex:0];
  NSString *mediaType = [command.arguments objectAtIndex:1];
  NSLog(@"[iOS]Calling publish for scope: %@ and media: %@", scopeId, mediaType);
//    NSDictionary *params = [command.arguments objectAtIndex:2];
  ALMediaPublishOptions *opts = [ALMediaPublishOptions alloc];
  opts.windowId = @"";
  // TODO add parsing of the params, once the screen sharing is enabled on iOS

  _VoidResponder *adapter = [[_VoidResponder alloc] initWithCommand:command delegate:self.commandDelegate methodName:@"publish"];
  ALResponder *responder = [[ALResponder alloc] initWithSelector:@selector(result:) withObject:adapter];
  [_service publish:scopeId what:mediaType options:opts responder:responder];
}

- (void)unpublish:(CDVInvokedUrlCommand *)command {
  NSString *scopeId = [command.arguments objectAtIndex:0];
  NSString *mediaType = [command.arguments objectAtIndex:1];
  NSLog(@"[iOS]Calling unpublish for scope: %@ and media: %@", scopeId, mediaType);
  _VoidResponder *adapter = [[_VoidResponder alloc] initWithCommand:command delegate:self.commandDelegate methodName:@"unpublish"];
  ALResponder *responder = [[ALResponder alloc] initWithSelector:@selector(result:) withObject:adapter];
  [_service unpublish:scopeId what:mediaType responder:responder];
}

- (void)sendMessage:(CDVInvokedUrlCommand *)command {
  NSString *scopeId = [command.arguments objectAtIndex:0];
  NSLog(@"[iOS]Calling sendMessage for scope: %@", scopeId);
  NSString *message = [command.arguments objectAtIndex:1];
  NSNumber *targetUserId = nil;
  if (command.arguments.count > 3) {
    targetUserId = [command.arguments objectAtIndex:2];
  }


  _VoidResponder *adapter = [[_VoidResponder alloc] initWithCommand:command delegate:self.commandDelegate methodName:@"sendMessage"];
  ALResponder *responder = [[ALResponder alloc] initWithSelector:@selector(result:) withObject:adapter];
  [_service sendMessage:scopeId
                message:[message dataUsingEncoding:NSUTF8StringEncoding]
            recipientId:targetUserId
              responder:responder];
}

#pragma mark API Methods - Misc

- (void)startMeasuringStatistics:(CDVInvokedUrlCommand *)command {
  NSString *scopeId = [command.arguments objectAtIndex:0];
  NSNumber *interval = [command.arguments objectAtIndex:1];
  NSLog(@"[iOS]Calling startMeasuringStats for scope: %@", scopeId);
  _VoidResponder *adapter = [[_VoidResponder alloc] initWithCommand:command delegate:self.commandDelegate methodName:@"startMeasuringStats"];
  ALResponder *responder = [[ALResponder alloc] initWithSelector:@selector(result:) withObject:adapter];
  [_service startMeasuringStats:scopeId interval:interval responder:responder];
}

- (void)stopMeasuringStatistics:(CDVInvokedUrlCommand *)command {
  NSString *scopeId = [command.arguments objectAtIndex:0];
  NSLog(@"[iOS]Calling startMeasuringStats for scope: %@", scopeId);
  _VoidResponder *adapter = [[_VoidResponder alloc] initWithCommand:command delegate:self.commandDelegate methodName:@"stopMeasuringStats"];
  ALResponder *responder = [[ALResponder alloc] initWithSelector:@selector(result:) withObject:adapter];
  [_service stopMeasuringStats:scopeId responder:responder];
}

- (void)setProperty:(CDVInvokedUrlCommand *)command {
  NSString *key = [command.arguments objectAtIndex:0];
  NSString *value = [command.arguments objectAtIndex:1];
  NSLog(@"[iOS]Calling setProperty: %@ -> %@", key, value);
  _VoidResponder *adapter = [[_VoidResponder alloc] initWithCommand:command delegate:self.commandDelegate methodName:@"setProperty"];
  ALResponder *responder = [[ALResponder alloc] initWithSelector:@selector(result:) withObject:adapter];
  [_service setProperty:key value:value responder:responder];
}

- (void)getProperty:(CDVInvokedUrlCommand *)command {
  NSString *key = [command.arguments objectAtIndex:0];
  NSLog(@"[iOS]Calling getProperty: %@", key);
  _StringResponder *adapter = [[_StringResponder alloc] initWithCommand:command delegate:self.commandDelegate methodName:@"getProperty"];
  ALResponder *responder = [[ALResponder alloc] initWithSelector:@selector(result:result:) withObject:adapter];
  [_service getProperty:key responder:responder];
}

#pragma mark Private helpers

- (void)onPlatformReady:(ALError *)error {
  NSLog(@"[iOS]Platform initialized. Setting internal listener");
  _VoidResponder *adapter = [[_VoidResponder alloc] initWithCommand:_initCommand
                                                           delegate:self.commandDelegate
                                                         methodName:@"addServiceListener"];
  if (error) {
    [adapter result:error];
  } else {
    ALResponder *responder = [[ALResponder alloc] initWithSelector:@selector(result:)
                                                        withObject:adapter];
    [_service addServiceListener:_listenerAdapter responder:responder];
  }
}


@end


@implementation _ResponderAdapter

static NSMutableDictionary *_pendingCalls;

+ (void)init {
  _pendingCalls = [NSMutableDictionary dictionary];
}

- (id)initWithCommand:(CDVInvokedUrlCommand *)cmd delegate:(id <CDVCommandDelegate>)delegate methodName:(NSString *)methodName {
  self = [super init];
  self._srcCommand = cmd;
  self._commandDelegate = delegate;
  self.methodName = methodName;
  [_pendingCalls setObject:self forKey:cmd.callbackId];
  return self;
}


- (void)dispatchResult:(CDVPluginResult *)result {
  [self._commandDelegate sendPluginResult:result callbackId:self._srcCommand.callbackId];
  [_pendingCalls removeObjectForKey:self._srcCommand.callbackId];
}

@end

@implementation _StringResponder

- (void)result:(ALError *)error result:(NSString *)result; {

  NSLog(@"[iOS]Got string result: %@ of method call: %@", result, self.methodName);
  CDVPluginResult *pluginResult = nil;
  if (error) {
    NSArray *message = [NSArray arrayWithObjects:[NSNumber numberWithInt:error.err_code],
                                                 error.err_message, nil];
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR
                                      messageAsArray:message];
  } else {
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:result];
  }
  [self dispatchResult:pluginResult];
}
@end


@implementation _VoidResponder : _ResponderAdapter

- (void)result:(ALError *)error {
  NSLog(@"[iOS]Got void result of method call: %@", self.methodName);
  CDVPluginResult *result;
  if (error) {
    NSArray *message = [NSArray arrayWithObjects:[NSNumber numberWithInt:error.err_code],
                                                 error.err_message, nil];
    result = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR
                                messageAsArray:message];
  } else {
    result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
  }
  [self dispatchResult:result];
}

@end

@implementation _DevicesResponder : _ResponderAdapter

- (void)result:(ALError *)error result:(NSArray *)result {
  CDVPluginResult *pluginResult = nil;
  if (error) {
    NSArray *message = [NSArray arrayWithObjects:[NSNumber numberWithInt:error.err_code],
                                                 error.err_message, nil];
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR
                                      messageAsArray:message];
  } else {
    NSLog(@"[iOS]Got array result: %@ of method: %@", [result componentsJoinedByString:@","], self.methodName);
    NSMutableDictionary *resDict = [NSMutableDictionary dictionary];
    [result enumerateObjectsUsingBlock:^(id object, NSUInteger idx, BOOL *stop) {
      ALDevice *device = object;
      [resDict setValue:device.label forKey:device.id];
    }];
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:resDict];
  }
  [self dispatchResult:pluginResult];
}

@end

@implementation AddLiveServiceListenerAdapter {
  NSMutableArray *_listeners;
}

- (id)initWithDelegate:(id <CDVCommandDelegate>)delegate {
  self = [super init];
  self._commandDelegate = delegate;
  _listeners = [NSMutableArray array];
  return self;
}

- (void)addJSListener:(NSString *)callbackId {
  [_listeners addObject:callbackId];
}

- (void)_dispatchEvent:(NSDictionary *)event {
  NSLog(@"[iOS]Dispatching event %@", [event valueForKey:@"_eventType"]);
  [_listeners enumerateObjectsUsingBlock:^(id callbackId, NSUInteger idx, BOOL *stop) {
    NSLog(@"[iOS]Dispatching event to callback with id: %@", callbackId);
    CDVPluginResult *result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK
                                            messageAsDictionary:event];
    [result setKeepCallbackAsBool:YES];
    [self._commandDelegate sendPluginResult:result callbackId:callbackId];
  }];
}

- (NSMutableDictionary *)_userEvent2Dictionary:(ALUserStateChangedEvent *)event {
  NSMutableDictionary *e = [NSMutableDictionary dictionary];
  [e setValue:event.scopeId forKey:@"scopeId"];
  [e setValue:event.videoSinkId forKey:@"videoSinkId"];
  [e setValue:event.screenSinkId forKey:@"screenSinkId"];
  [e setValue:event.mediaType forKey:@"mediaType"];
  [e setObject:[NSNumber numberWithBool:event.audioPublished] forKey:@"audioPublished"];
  [e setObject:[NSNumber numberWithBool:event.isConnected] forKey:@"isConnected"];
  [e setObject:[NSNumber numberWithBool:event.screenPublished] forKey:@"screenPublished"];
  [e setObject:[NSNumber numberWithBool:event.videoPublished] forKey:@"videoPublished"];
  [e setObject:[NSNumber numberWithLongLong:event.userId] forKey:@"userId"];
  return e;
}

- (void)videoFrameSizeChanged:(ALVideoFrameSizeChangedEvent *)event {
  NSLog(@"[iOS]Got video frame size changed for sink: %@", event.sinkId);
  NSMutableDictionary *e = [NSMutableDictionary dictionary];
  [e setValue:event.sinkId forKey:@"sinkId"];
  [e setValue:@"videoFrameSizeChanged" forKey:@"_eventType"];
  [e setObject:[NSNumber numberWithInt:event.width] forKey:@"width"];
  [e setObject:[NSNumber numberWithInt:event.height] forKey:@"height"];
  [self._renderSupport videoFrameSizeChanged:event];
  [self _dispatchEvent:e];
}

- (void)onSpeechActivity:(ALSpeechActivityEvent *)event {
  NSLog(@"[iOS]Got speech activity event for scope: %@ ", event.scopeId);
  NSString *speechActivity = [[event.speechActivity valueForKey:@"description"] componentsJoinedByString:@"|"];
  speechActivity = [speechActivity stringByReplacingOccurrencesOfString:@"userId"
                                                             withString:@"\"userId\""];
  speechActivity = [speechActivity stringByReplacingOccurrencesOfString:@"activity"
                                                             withString:@"\"activity\""];
  NSMutableDictionary *e = [NSMutableDictionary dictionary];
  [e setValue:@"speechActivity" forKey:@"_eventType"];
  [e setObject:event.activeSpeakers forKey:@"activeSpeakers"];
  [e setValue:event.scopeId forKey:@"scopeId"];
    [e setObject:speechActivity forKey:@"speechActivity"];
  [self _dispatchEvent:e];
}

- (void)connectionLost:(ALConnectionLostEvent *)event {
  NSLog(@"[iOS]Got Connection lost notification");
  NSMutableDictionary *e = [NSMutableDictionary dictionary];
  [e setValue:@"connectionLost" forKey:@"_eventType"];
  [e setObject:[NSNumber numberWithInt:event.errCode] forKey:@"errCode"];
  [e setValue:event.errMessage forKey:@"errMessage"];
  [e setValue:event.scopeId forKey:@"scopeId"];
  [self _dispatchEvent:e];
}

- (void)userEvent:(ALUserStateChangedEvent *)event {
  NSLog(@"[iOS]Got userEvent notification");
  NSMutableDictionary *e = [self _userEvent2Dictionary:event];
  [e setValue:@"userEvent" forKey:@"_eventType"];
  [self _dispatchEvent:e];
}

- (void)mediaStream:(ALUserStateChangedEvent *)event {
  NSLog(@"[iOS]Got mediaStream notification");
  NSMutableDictionary *e = [self _userEvent2Dictionary:event];
  [e setValue:@"mediaStream" forKey:@"_eventType"];
  [self _dispatchEvent:e];
}

- (void)mediaStats:(ALMediaStatsEvent *)event {
  NSLog(@"[iOS]Got mediaStats event");
  NSMutableDictionary *e = [NSMutableDictionary dictionary];
  [e setValue:@"mediaStats" forKey:@"_eventType"];
  [e setValue:event.scopeId forKey:@"scopeId"];
  [e setValue:event.mediaType forKey:@"mediaType"];
  [e setObject:[NSNumber numberWithLongLong:event.remoteUserId] forKey:@"remoteUserId"];
  NSMutableDictionary *stats = [NSMutableDictionary dictionary];
  [stats setObject:[NSNumber numberWithFloat:event.stats.avgJitter] forKey:@"avgJitter"];
  [stats setObject:[NSNumber numberWithFloat:event.stats.avOffset] forKey:@"avOffset"];
  [stats setObject:[NSNumber numberWithFloat:event.stats.bitRate] forKey:@"bitRate"];
  [stats setObject:[NSNumber numberWithFloat:event.stats.cpu] forKey:@"cpu"];
  [stats setObject:[NSNumber numberWithFloat:event.stats.fps] forKey:@"fps"];
  [stats setObject:[NSNumber numberWithFloat:event.stats.jbLength] forKey:@"jbLength"];
  [stats setObject:[NSNumber numberWithFloat:event.stats.layer] forKey:@"layer"];
  [stats setObject:[NSNumber numberWithFloat:event.stats.loss] forKey:@"loss"];
  [stats setObject:[NSNumber numberWithFloat:event.stats.maxJitter] forKey:@"maxJitter"];
  [stats setObject:[NSNumber numberWithFloat:event.stats.psnr] forKey:@"psnr"];
  [stats setObject:[NSNumber numberWithFloat:event.stats.quality] forKey:@"quality"];
  [stats setObject:[NSNumber numberWithFloat:event.stats.queueDelay] forKey:@"queueDelay"];
  [stats setObject:[NSNumber numberWithFloat:event.stats.rtt] forKey:@"rtt"];
  [stats setObject:[NSNumber numberWithFloat:event.stats.totalCpu] forKey:@"totalCpu"];
  [stats setObject:[NSNumber numberWithFloat:event.stats.totalLoss] forKey:@"totalLoss"];
  [e setObject:stats forKey:@"stats"];
  [self _dispatchEvent:e];
}

- (void)message:(ALMessageEvent *)event {
  NSLog(@"[iOS]Got message event");
  NSMutableDictionary *e = [NSMutableDictionary dictionary];
  [e setValue:@"message" forKey:@"_eventType"];
  NSString *dataString = [[NSString alloc] initWithData:event.data encoding:NSUTF8StringEncoding];
  if (!dataString) {
    // TODO add conversion to the Base64
  }
  [e setValue:dataString forKey:@"data"];
  [e setObject:[NSNumber numberWithLongLong:event.srcUserId] forKey:@"srcUserId"];
  [self _dispatchEvent:e];
}

- (void)mediaConnTypeChanged:(ALMediaConnTypeChangedEvent *)event {
  NSLog(@"[iOS]Got mediaConnTypeChanged event");
  NSMutableDictionary *e = [NSMutableDictionary dictionary];
  [e setValue:@"mediaConnTypeChanged" forKey:@"_eventType"];
  [e setValue:event.scopeId forKey:@"scopeId"];
  [e setValue:event.connectionType forKey:@"connectionType"];
  [e setValue:event.mediaType forKey:@"mediaType"];
  [self _dispatchEvent:e];
}

- (void)mediaIssue:(ALMediaIssueEvent *)event {
  NSLog(@"[iOS]Got mediaIssue event");
  NSMutableDictionary *e = [NSMutableDictionary dictionary];
  [e setValue:@"mediaIssue" forKey:@"_eventType"];
  [e setValue:event.scopeId forKey:@"scopeId"];
  [e setObject:[NSNumber numberWithBool:event.isStarted] forKey:@"isStarted"];
  [e setObject:event.issueType forKey:@"issueType"];
  [e setObject:event.msg forKey:@"msg"];
  [e setObject:[NSNumber numberWithLongLong:event.userId] forKey:@"userId"];
  [e setValue:event.mediaType forKey:@"mediaType"];
  [self _dispatchEvent:e];
}

- (void)mediaInterrupt:(ALMediaInterruptEvent *)event {
  NSLog(@"[iOS]Got mediaInterrupt event");
  NSMutableDictionary *e = [NSMutableDictionary dictionary];
  [e setValue:@"mediaInterrupt" forKey:@"_eventType"];
  [e setValue:event.mediaType forKey:@"mediaType"];
  [e setObject:[NSNumber numberWithBool:event.interrupt] forKey:@"interrupt"];
  [self _dispatchEvent:e];
}

@end


@implementation ALCordovaRenderSupport {

  NSMutableDictionary /*<NSString*, ALRenderer>*/ *_renderers;

  NSMutableDictionary /*<NSString*, NSMutableArray>*/*_sinkId2Dims;
  NSMutableDictionary /*<NSString*, NSString>*/*_renderer2Sink;
  NSMutableDictionary /*<NSString*, NSMutableArray>*/*_sinkId2Renderers;

}

- (id)initWithService:(ALService *)service webView:(UIWebView *)webView {
  self = [super init];
  self._service = service;
  self._webView = webView;
  _renderers = [NSMutableDictionary dictionary];
  _sinkId2Renderers = [NSMutableDictionary dictionary];
  _renderer2Sink = [NSMutableDictionary dictionary];
  _sinkId2Dims = [NSMutableDictionary dictionary];
    
  self.scrollView = [[UIScrollView alloc] initWithFrame:CGRectZero];
  self.scrollView.backgroundColor = [UIColor blackColor];
  self.scrollView.scrollEnabled = YES;
  self.scrollView.pagingEnabled = YES;
  self.scrollView.delegate = self;
  self.pageControl = [[UIPageControl alloc] initWithFrame:CGRectZero];
  self.pageControl.frame = CGRectMake(133, 540, 50, 20);
  self.pageControl.hidden = YES;
  
  self.pageControl.numberOfPages = 0;
  self.pageControl.currentPage = 0;
    
  [self._webView.superview addSubview:self.scrollView];
  [self._webView.superview addSubview:self.pageControl];
    
  return self;
}

- (void)scrollViewDidScroll:(UIScrollView *)scrollView{
  CGFloat pageWidth = self.scrollView.frame.size.width;
  float fractionalPage = self.scrollView.contentOffset.x / pageWidth;
  NSInteger page = lround(fractionalPage);
  self.pageControl.currentPage = page;
}

- (void)renderSink:(NSDictionary *)request {
  NSNumber *top = [request objectForKey:@"top"];
  NSNumber *left = [request objectForKey:@"left"];
  NSNumber *width = [request objectForKey:@"width"];
  NSNumber *height = [request objectForKey:@"height"];
  NSNumber *zIndex = [request objectForKey:@"zIndex"];
  NSString *sinkId = [request objectForKey:@"sinkId"];
  NSString *containerId = [request objectForKey:@"containerId"];
  NSNumber *mirror = [request objectForKey:@"mirror"];
  NSLog(@"[iOS]Calling renderSink");
  CGRect rect = CGRectMake(left.floatValue, top.floatValue, width.floatValue, height.floatValue);

  NSLog(@"[iOS]Rendering sink at: %f, %f, %f, %f. Sink id: %@",
      rect.origin.x,
      rect.origin.y,
      rect.size.width,
      rect.size.height,
      sinkId
  );
  ALVideoView *videoView = [[ALVideoView alloc] initWithFrame:rect];
  [videoView setupWithService:self._service withSink:sinkId];
  videoView.mirror = [mirror boolValue];
  videoView.layer.zPosition = zIndex.floatValue;
  videoView.backgroundColor = [UIColor blackColor];
  [videoView setSinkId:sinkId];
  if(![containerId isEqualToString:@"localRenderer"]){
    self.scrollView.frame = CGRectMake(0, top.floatValue, 320, height.floatValue);
    videoView.frame = CGRectMake(left.floatValue, 0, width.floatValue, height.floatValue);
    [_renderers setObject:videoView forKey:containerId];
    [self.scrollView setContentSize:CGSizeMake(MAX(1, [_renderers count]) * self.scrollView.frame.size.width, self.scrollView.frame.size.height)];
    [self.scrollView addSubview:videoView];
    [self.scrollView setContentOffset:CGPointMake(320 * ([_renderers count] - 1), 0) animated:YES];
    self.scrollView.hidden = NO;
    self.pageControl.numberOfPages = [_renderers count];
    self.pageControl.currentPage = [_renderers count] - 1;
    if([_renderers count] > 1){
      self.pageControl.hidden = NO;
    } else{
      self.pageControl.hidden = YES;
    }
  }
  else{
    [self._webView.superview addSubview:videoView];
  }
  [videoView start:nil];
  if (![_sinkId2Renderers objectForKey:sinkId]) {
    [_sinkId2Renderers setObject:[NSMutableArray array] forKey:sinkId];
  }
  [[_sinkId2Renderers objectForKey:sinkId] addObject:containerId];
  [_renderer2Sink setObject:sinkId forKey:containerId];
}

- (void)videoFrameSizeChanged:(ALVideoFrameSizeChangedEvent *)e {
  NSLog(@"[iOS]Processing videoFrameSizeChanged event for sink: %@. Setting resolution: %dx%d",
      e.sinkId, e.width, e.height);
  NSArray *rendererIds = [_sinkId2Renderers objectForKey:e.sinkId];
  NSArray *dimsPair = [NSArray arrayWithObjects:[NSNumber numberWithInt:e.width], [NSNumber numberWithInt:e.height], nil];
  [_sinkId2Dims setObject:dimsPair forKey:e.sinkId];
  if (rendererIds) {
    [rendererIds enumerateObjectsUsingBlock:^(id rendererId, NSUInteger idx, BOOL *stop) {
      NSLog(@"[iOS]Updating video feed resolution for renderer: %@", rendererId);
    }];
  }
}

- (void)disposeRenderer:(NSString *)rendererId {
  ALVideoView *videoView = [_renderers objectForKey:rendererId];
  if (!videoView) {
    NSLog(@"[iOS]Got request to dispose already disposed renderer: %@", rendererId);
    return;
  }
  [videoView stop:nil];
  [_renderers removeObjectForKey:rendererId];
  NSMutableArray *sinkRenderers = [_sinkId2Renderers objectForKey:[_renderer2Sink objectForKey:rendererId]];
  [sinkRenderers removeObjectIdenticalTo:rendererId];
  [videoView removeFromSuperview];
  
  int idx = 0;
  for (ALVideoView* videoView in [_renderers allValues])
  {
    [videoView setFrame:[self updateScrollVideoFrame:videoView.frame withIndex:idx]];
    idx++;
  }
  [self.scrollView setContentSize:CGSizeMake(MAX(1, [_renderers count]) * self.scrollView.frame.size.width, self.scrollView.frame.size.height)];
  self.pageControl.numberOfPages = [_renderers count];
  if([_renderers count] > 1){
    self.pageControl.hidden = NO;
  } else if([_renderers count] == 1){
    self.pageControl.hidden = YES;
  } else{
    self.scrollView.hidden = YES;
    self.pageControl.hidden = YES;
  }
}

- (CGRect)updateScrollVideoFrame:(CGRect)frame withIndex:(int)idx{
  CGRect newFrame;
  newFrame.origin.x = (320 * idx) + 0;
  newFrame.origin.y = frame.origin.y;
  newFrame.size.width = frame.size.width;
  newFrame.size.height = frame.size.height;
  return newFrame;
}

- (void)relocateRenderer:(NSDictionary *)request {
  NSNumber *top = [request objectForKey:@"top"];
  NSNumber *left = [request objectForKey:@"left"];
  NSNumber *width = [request objectForKey:@"width"];
  NSNumber *height = [request objectForKey:@"height"];
  NSNumber *zIndex = [request objectForKey:@"zIndex"];
  NSString *containerId = [request objectForKey:@"containerId"];
  NSLog(@"[iOS]Relocating renderer with id: %@", containerId);
  ALVideoView *view = [_renderers objectForKey:containerId];
  CGRect rect = CGRectMake(left.floatValue, top.floatValue, width.floatValue, height.floatValue);

  NSLog(@"[iOS]Relocating renderer to box: %f, %f, %f, %f.",
      rect.origin.x,
      rect.origin.y,
      rect.size.width,
      rect.size.height
  );
  view.frame = rect;
  view.layer.zPosition = zIndex.floatValue;
}

@end