package com.addlive.plugin;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PluginResult;
import org.apache.cordova.PluginResult.Status;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.addlive.platform.*;
import com.addlive.service.*;
import com.addlive.service.listener.*;
import com.addlive.view.*;

import android.app.Activity;
import android.os.Bundle;
import android.os.Environment;
import android.text.TextUtils;
import android.util.Log;
import android.view.SurfaceView;
import android.view.View;
import android.widget.HorizontalScrollView;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.RelativeLayout.LayoutParams;

public class AddLive extends CordovaPlugin {

	private static long ADL_APP_ID = 1;
	private static String ADL_API_KEY = "";
	private static String ADL_SCOPE_ID = "";
	private static final String LOG_TAG = "AddLive";

	/**
	* ===========================================================================
	* Nested classes
	* ===========================================================================
	*/

	class User {
		long userId; 
		boolean isFeeding;
		boolean needsResize;
	    String videoSinkId = "";
	    String screenSinkId = "";
	    String containerId = "";
	    VideoView videoView;

	    User(long userId, boolean isFeeding, boolean needsResize, String videoSinkId, 
	    	String screenSinkId, String containerId, VideoView videoView) {
	    	
	    	this.userId = userId;
	    	this.isFeeding = isFeeding;
	    	this.needsResize = needsResize;
	    	this.videoSinkId = videoSinkId;
	    	this.screenSinkId = screenSinkId;
	    	this.containerId = containerId;
	    	this.videoView = videoView;
	    }
	}
	
	private Map<Long, User> userMap = new HashMap<Long, User>();

	private Activity _activity;
	private CordovaWebView _webView;
	private CallbackContext _callbackCtx;
	private PluginResult _pluginResult;
	private String _eventCallbackId;
	private String _localVideoSink;

	private HorizontalScrollView _hzsc;
	private LinearLayout _ly;
	private RelativeLayout _pv;
	private SurfaceView _local;
	private LayoutParams _params;
	private LayoutParams _hzscParams;
	private LayoutParams _lyParams;
	
	private boolean _avoidDoubleCall = false;
	
	@Override
	public void initialize(CordovaInterface cordova, final CordovaWebView cordovaWebView) {
		super.initialize(cordova, cordovaWebView);
		_activity = cordova.getActivity();
		_webView = cordovaWebView;
		_eventCallbackId = null;
		_callbackCtx = null;
        userMap.clear();

        Runnable runnable = new Runnable(){
            public void run() {
            	_pv = (RelativeLayout) _webView.getParent();
        		_hzsc = new HorizontalScrollView(_activity);
        		_ly = new LinearLayout(_activity);
        	    _ly.setOrientation(LinearLayout.HORIZONTAL);
                
                _hzscParams = new RelativeLayout.LayoutParams(RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
                _pv.addView(_hzsc, _hzscParams);
                
                _lyParams = new RelativeLayout.LayoutParams(LinearLayout.LayoutParams.WRAP_CONTENT, LinearLayout.LayoutParams.WRAP_CONTENT);
                _lyParams.leftMargin = 0;
            	_lyParams.topMargin = 0;
            	_hzsc.addView(_ly, _lyParams);
            }
    	};
    	_activity.runOnUiThread(runnable);
	}
	
	@Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		Log.w(LOG_TAG, "action: " + action); 
		_callbackCtx = callbackContext;
		
        if (action.equals("initPlatform")) {
        	JSONObject json = new JSONObject(args.getString(0));

        	try{
        		ADL_APP_ID = json.getLong("applicationId");
        	} catch (NumberFormatException er) {
        		Log.e(LOG_TAG, "[Android] Please check the APP ID."); 
        		Log.e(LOG_TAG, "[Android] " + er);
        		return true;
        	}

        	if(json.get("apiKey").toString().length() != 0) {
        		ADL_API_KEY = json.getString("apiKey");
        	} else {
        		Log.e(LOG_TAG, "[Android] Please check the API KEY."); 
        		Log.e(LOG_TAG, "[Android] API KEY value empty");
        		return true;
        	}
        
        	initializeAddLive();
            return true;
        } else if (action.equals("getVersion")) {
    		
    	    ADL.getService().getVersion(new UIThreadResponder<String>(_activity) {
    	    	@Override
    	    	protected void handleResult(String version) {
    	    		Log.d(LOG_TAG, "AddLive SDK version: " + version);
    		    	_callback(Status.OK, version);
    	    	}

    	    	@Override
    	    	protected void handleError(int errCode, String errMessage) {
    	    		Log.e(LOG_TAG, "Failed to get version string.");
    		    	_callback(Status.ERROR);
    	    	}
    	    });
    	    return true;
        } else if (action.equals("addServiceListener")) {
        	
    	    ADL.getService().addServiceListener(new Responder<Void>() {
    				@Override
    				public void resultHandler(Void arg0) {
        	    		Log.d(LOG_TAG, "[Android] addServiceListener success");
        	    		_eventCallbackId = _callbackCtx.getCallbackId();
        		    	_callback(Status.OK);
    				}

    	    		@Override
    	    		public void errHandler(int errCode, String errMessage){
        	    		Log.e(LOG_TAG, "[Android] addServiceListener failed");
        		    	_callback(Status.ERROR);
    	    		}
    	    	},
    	        getListener());
        	
    	    return true;
        } else if (action.equals("getVideoCaptureDeviceNames")) {
    		
        	ADL.getService().getVideoCaptureDeviceNames(
        			new UIThreadResponder<List<Device>>(_activity) {
        	    		@Override
        	    		protected void handleResult(List<Device> devices) {
            	    		Log.d(LOG_TAG, "[Android] getVideoCaptureDeviceNames success");
        		        	
							final HashMap<String, String> deviceIds = new HashMap<String, String>();
        		        	for (Device device : devices) {
                	    		deviceIds.put(device.getId(), device.getLabel());
        		        	}
            	    		
            	    		ADL.getService().setVideoCaptureDevice(new Responder<Void>() {
            					@Override
            					public void resultHandler(Void arg0) {
            	    	    		Log.d(LOG_TAG, "[Android] setVideoCaptureDevice success");
                    		    	_callback(Status.OK, new JSONObject(deviceIds));
            					}

            		    		@Override
            		    		public void errHandler(int errCode, String errMessage){
            	    	    		Log.e(LOG_TAG, "[Android] setVideoCaptureDevice failed");
            		    		}
            		    	}, VideoCaptureDevice.BACK_CAMERA.getId());
        	    		}

        	    		@Override
        	    		protected void handleError(int errCode, String errMessage) { 
            	    		Log.e(LOG_TAG, "[Android] getVideoCaptureDeviceNames failed");
            		    	_callback(Status.ERROR);
        	          	}
        	    	}
        	    );
    	    return true;
        } else if (action.equals("getVideoCaptureDevice")) {
        	
        	/*ADL.getService().getVideoCaptureDevice(new Responder<String>() {
				@Override
				public void resultHandler(String device) {
    	    		Log.d(LOG_TAG, "[Android] getVideoCaptureDevice success");
    		    	_callback(Status.OK, device);
				}

	    		@Override
	    		public void errHandler(int errCode, String errMessage){
    	    		Log.e(LOG_TAG, "[Android] getVideoCaptureDevice failed");
    		    	_callback(Status.ERROR);
	    		}
	    	});*/ 

	    	_callback(Status.OK, VideoCaptureDevice.BACK_CAMERA.getId());
    	    return true;
        } else if (action.equals("startLocalVideo")) {

            _local = new SurfaceView(webView.getContext());
            
        	ADL.getService().startLocalVideo(new UIThreadResponder<String>(_activity) {
    	    	@Override
    	    	protected void handleResult(String videoSinkId) {
    	    		Log.d(LOG_TAG, "[Android] startLocalVideo success");
    	    		_localVideoSink = videoSinkId;
    		    	_callback(Status.OK, videoSinkId);
    	    	}

    	    	@Override
    	    	protected void handleError(int errCode, String errMessage) {
    	    		Log.d(LOG_TAG, "[Android] startLocalVideo failed");
    		    	_callback(Status.ERROR);
    	    	}
    	    }, _local);
    	    return true;
        } else if (action.equals("stopLocalVideo")) {
        	
        	ADL.getService().stopLocalVideo(new Responder<Void>() {
				@Override
				public void resultHandler(Void arg0) {
		    		Log.d(LOG_TAG, "[Android] stopLocalVideo success");
		    		Runnable runnable = new Runnable(){
		                public void run() {
				    		_local.setVisibility(View.GONE);
		                }
		        	};
		        	_activity.runOnUiThread(runnable);
			    	_callback(Status.OK);
				}
	
	    		@Override
	    		public void errHandler(int errCode, String errMessage){
		    		Log.e(LOG_TAG, "[Android] stopLocalVideo failed");
			    	_callback(Status.ERROR);
	    		}
	    	});
    	    return true;
        } else if (action.equals("renderSink")) {
        	final JSONObject json = new JSONObject(args.getString(0));
        	
        	final String mirror = json.getString("mirror");
        	final String sinkId = json.getString("sinkId");
        	final String containerId = json.getString("containerId");
        	
        	final int width = json.getInt("width") * 2;
        	final int height = json.getInt("height") * 2;
        	final int left = json.getInt("left") * 2;
        	final int top = json.getInt("top") * 2;
        	final int zIndex = json.getInt("zIndex");

        	if(sinkId.equals(_localVideoSink)) {
	            Runnable runnable = new Runnable(){
	                public void run() {
	                    _params = new RelativeLayout.LayoutParams(width, height);
	                    _params.leftMargin = left;
	                    _params.topMargin = top;
	                    _pv.addView(_local, _params);
	                }
	        	};
	        	_activity.runOnUiThread(runnable);
        	} else {
	            Runnable runnable = new Runnable(){
	                public void run() {
	                	for (User user : userMap.values()) {
	                		if((user.videoSinkId.equals(sinkId) || 
	                			user.screenSinkId.equals(sinkId)) && 
	                			!user.isFeeding) {
	                			
	                    		_hzscParams.leftMargin = 0;
	                    		_hzscParams.topMargin = top;
	                    		_hzsc.setLayoutParams(_hzscParams);
	                    		_hzsc.invalidate();

	                            _params = new RelativeLayout.LayoutParams(width, height);
	                            _params.leftMargin = left;
	                            _params.topMargin = 0;
	            	    		
	                			user.containerId = containerId;
	                			user.isFeeding = true;
	                			user.needsResize = true;
	                			_ly.addView(user.videoView, _params);
	    	                    user.videoView.stop();
	    	                    user.videoView.setSinkId(sinkId);
	    	                    user.videoView.start();
	                			break;
	                		} else if(user.videoSinkId.equals(sinkId) && 
	                										user.isFeeding) {
	                			return;
	                		}
	          			}
	                }
	        	};
	        	_activity.runOnUiThread(runnable);
        	}
        	_callback(Status.OK);
    	    return true;
        }  else if (action.equals("disposeRenderer")) {
        	final String containerId = args.getString(0);
        	
        	Runnable runnable = new Runnable(){
                public void run() {
                	for (User user : userMap.values()) {
                		if(containerId.equals(user.containerId)) {
                            user.videoView.stop();
                            user.videoView.setSinkId("");
                            user.isFeeding = false;
                            user.needsResize = false;
                            _ly.removeView(user.videoView);
                			break;
                		} 
          			}
                }
        	};
        	_activity.runOnUiThread(runnable);
        	_callback(Status.OK);
    	    return true;
        } else if (action.equals("setVideoCaptureDevice")) {
        	String devId = args.getString(0);
        	
        	ADL.getService().setVideoCaptureDevice(new Responder<Void>() {
				@Override
				public void resultHandler(Void arg0) {
    	    		Log.d(LOG_TAG, "[Android] setVideoCaptureDevice success");
    		    	_callback(Status.OK);
				}

	    		@Override
	    		public void errHandler(int errCode, String errMessage){
    	    		Log.e(LOG_TAG, "[Android] setVideoCaptureDevice failed");
    		    	_callback(Status.ERROR);
	    		}
	    	}, devId);
    	    return true;
        } else if (action.equals("connect")) {
        	final JSONObject json = new JSONObject(args.getString(0));
	    	
    	    ConnectionDescriptor desc = genConnDescriptor(json); 
    	    UIThreadResponder<MediaConnection> connectResponder =
    	    	new UIThreadResponder<MediaConnection>(_activity) {
    	          	@Override
    	          	protected void handleResult(MediaConnection result) {
        	    		Log.d(LOG_TAG, "[Android] connect success");
    	    	    	_callback(Status.OK);
    	          	}

    	          	@Override
    	          	protected void handleError(int errCode, String errMessage) {
        	    		Log.d(LOG_TAG, "[Android] connect failed");
    	    	    	_callback(Status.ERROR);
    	          	}
    	        };
    	    ADL.getService().connect(connectResponder, desc);
    	    return true;
        } else if (action.equals("disconnect")) {
        	
    	    ADL.getService().disconnect(new Responder<Void>() {
				@Override
				public void resultHandler(Void arg0) {
    	    		Log.d(LOG_TAG, "[Android] disconnect success");
    		    	_callback(Status.OK);
				}

	    		@Override
	    		public void errHandler(int errCode, String errMessage){
    	    		Log.e(LOG_TAG, "[Android] disconnect failed");
    		    	_callback(Status.ERROR);
	    		}
	    	}, ADL_SCOPE_ID);
    	    return true;
        } else if (action.equals("publish")) {
        	String scopeId = args.getString(0);
        	String media = args.getString(1);
        	MediaType mediaType = null;
        	
        	if(media.equals("audio")) {
        		mediaType = MediaType.AUDIO;
        	} else if(media.equals("video")) {
        		mediaType = MediaType.VIDEO;
        	} else {
        		mediaType = MediaType.SCREEN;
        	}
        	
    		ADL.getService().publish(new Responder<Void>() {
				@Override
				public void resultHandler(Void arg0) {
    	    		Log.d(LOG_TAG, "[Android] publish success");
    		    	_callback(Status.OK);
				}

	    		@Override
	    		public void errHandler(int errCode, String errMessage){
    	    		Log.e(LOG_TAG, "[Android] publish failed");
    		    	_callback(Status.ERROR);
	    		}
	    	}, scopeId, mediaType);
    	    return true;
        } else if (action.equals("unpublish")) {
        	String scopeId = args.getString(0);
        	String media = args.getString(1);
        	MediaType mediaType = null;
        	
        	if(media.equals("audio")) {
        		mediaType = MediaType.AUDIO;
        	} else if(media.equals("video")) {
        		mediaType = MediaType.VIDEO;
        	} else {
        		mediaType = MediaType.SCREEN;
        	}
        	
    		ADL.getService().unpublish(new Responder<Void>() {
				@Override
				public void resultHandler(Void arg0) {
    	    		Log.d(LOG_TAG, "[Android] unpublish success");
    		    	_callback(Status.OK);
				}

	    		@Override
	    		public void errHandler(int errCode, String errMessage){
    	    		Log.e(LOG_TAG, "[Android] unpublish failed");
    		    	_callback(Status.ERROR);
	    		}
	    	}, scopeId, mediaType);
    	    return true;
        } else if (action.equals("monitorSpeechActivity")) {
        	String scopeId = args.getString(0);
        	boolean enable = args.getBoolean(1);
        	
    		ADL.getService().monitorSpeechActivity(new Responder<Void>() {
				@Override
				public void resultHandler(Void arg0) {
    	    		Log.d(LOG_TAG, "[Android] monitorSpeechActivity success");
    		    	_callback(Status.OK);
				}

	    		@Override
	    		public void errHandler(int errCode, String errMessage){
    	    		Log.e(LOG_TAG, "[Android] monitorSpeechActivity failed");
    		    	_callback(Status.ERROR);
	    		}
	    	}, scopeId, enable);
    	    return true;
        }
        return false;
    }

	private void initializeAddLive(){
		PlatformInitListener listener = new PlatformInitListener(){
			@Override
			public void onInitProgressChanged(InitProgressChangedEvent e) {
				// Actually not used by the platform for now. Just a placeholder.
			}

			@Override
			public void onInitStateChanged(InitStateChangedEvent e) {

				if (e.getState() == InitState.INITIALIZED) {
					onAdlInitialized();
			    } else {
			    	onAdlInitError(e);
			    }
			}
		};
		PlatformInitOptions initOptions = new PlatformInitOptions();
	    String storageDir = Environment.getExternalStorageDirectory().getAbsolutePath();
	    initOptions.setStorageDir(storageDir);
	    initOptions.setApplicationId(ADL_APP_ID);
	    
	    Log.d(LOG_TAG, "Initializing the AddLive SDK.");
	    ADL.init(listener, initOptions, _activity);
	}

	// =========================================================================

	private void onAdlInitialized() {
    	_callback(Status.OK);
		Log.d(LOG_TAG, "[Android] onAdlInitialized success");
	}

	// =========================================================================

	private void onAdlInitError(InitStateChangedEvent e) {
	    String errMessage = "ERROR: (" + e.getErrCode() + ") " +
	        e.getErrMessage();

    	_callback(Status.ERROR);
		Log.d(LOG_TAG, "[Android] onAdlInitError " + errMessage);
	}

	// =========================================================================

	private AddLiveServiceListener getListener() {
	    return new AddLiveServiceListenerAdapter() {
			
		  	@Override
		 	public void onConnectionLost(final ConnectionLostEvent e) {
		        super.onConnectionLost(e);
		      	Log.d(LOG_TAG, "[Android] onConnectionLost Listener triggered");
		      	
		      	Bundle hm = new Bundle();
		      	hm.putString("_eventType", "connectionLost");
		      	hm.putInt("errCode", e.getErrCode());
		      	hm.putString("errMessage", String.valueOf(e.getErrMessage()));
		      	hm.putString("scopeId", String.valueOf(e.getScopeId()));
		      	_dispatchEvent(hm);
		  	}
		 	
			@Override
		 	public void onUserEvent(final UserStateChangedEvent e) {
		        super.onUserEvent(e);
		      	Log.d(LOG_TAG, "[Android] onUserEvent Listener triggered");
		      	
		      	if(e.isConnected()) {
		            Runnable runnable = new Runnable(){
		                public void run() {
		    			    userMap.put(e.getUserId(), 
		    			    			new User(e.getUserId(), 
										false,
										false,
										e.getVideoSinkId(),
										e.getScreenSinkId(),
										"",
										new VideoView(_activity)));
		                }
		        	};
		        	_activity.runOnUiThread(runnable);
		      	}
	        	Bundle hm = new Bundle();
		      	hm.putString("_eventType", "userEvent");
		        _userEventToJson(e, hm, true);
		      	_dispatchEvent(hm);
		 	}
		 	
			@Override
		 	public void onSpeechActivity(final SpeechActivityEvent e) {
		        super.onSpeechActivity(e);
		      	Log.d(LOG_TAG, "[Android] onSpeechActivity Listener triggered");
		      	
	        	Bundle hm = new Bundle();
		      	hm.putString("_eventType", "speechActivity");
		      	hm.putString("scopeId", e.getScopeId());
		      	ArrayList<Integer> arrayList = new ArrayList<Integer>();
		      	for (Long current : e.getActiveSpeakers()) {
		      		arrayList.add(current.intValue());
		      	}
		      	hm.putIntegerArrayList("activeSpeakers", arrayList);
		      	String speechString = TextUtils.join("|", e.getSpeechActivity());
		      	speechString = speechString.replace("userId", "\"userId\"");
		      	speechString = speechString.replace("activity", "\"activity\"");
		      	speechString = speechString.replace("=", ":");
		      	hm.putString("speechActivity", speechString);
		      	_dispatchEvent(hm);
		 	}
	 	
			@Override
		 	public void onMediaStreamEvent(final UserStateChangedEvent e) {
		        super.onMediaStreamEvent(e);
		      	if(_avoidDoubleCall) {
		      		_avoidDoubleCall = false;
		      		return;
		      	}
		      	_avoidDoubleCall = true;
		      	
		      	Log.d(LOG_TAG, "[Android] onMediaStreamEvent Listener triggered");
		      	
		      	User remoteUser = userMap.get(e.getUserId());
		      	if(!remoteUser.videoSinkId.equals(e.getVideoSinkId()) && 
		      											e.isVideoPublished()) { 
		      		remoteUser.videoSinkId = e.getVideoSinkId();
		      		remoteUser.isFeeding = false;
		      	}
		      	if(!remoteUser.screenSinkId.equals(e.getScreenSinkId()) && 
		      											e.isScreenPublished()) {
		      		remoteUser.screenSinkId = e.getScreenSinkId();
		      		remoteUser.isFeeding = false;
		      	}
		      	
	        	Bundle hm = new Bundle();
		      	hm.putString("_eventType", "mediaStream");
		        _userEventToJson(e, hm, false);
		      	_dispatchEvent(hm);
		 	}
	    	
			@Override
		 	public void onVideoFrameSizeChanged(final VideoFrameSizeChangedEvent e) {
		        super.onVideoFrameSizeChanged(e);
		      	if(_avoidDoubleCall) {
		      		_avoidDoubleCall = false;
		      		return;
		      	}
		      	_avoidDoubleCall = true;
		      	
		      	Log.d(LOG_TAG, "[Android] onVideoFrameSizeChanged Listener triggered");

		      	Bundle hm = new Bundle();
		      	hm.putString("_eventType", "videoFrameSizeChanged");
		      	hm.putString("sinkId", e.getSinkId());
		      	hm.putInt("width", e.getWidth());
		      	hm.putInt("height", e.getHeight());
		      	if(!e.getSinkId().equals(_localVideoSink)) {
                	for (User user : userMap.values()) {
                		if((user.videoSinkId.equals(e.getSinkId()) || 
                			user.screenSinkId.equals(e.getSinkId())) && 
                			user.isFeeding) {
                			
                			user.videoView.resolutionChanged(e.getWidth(), e.getHeight());
                			break;
                		}
          			}
		      	}
				_dispatchEvent(hm);
		   	}
	    	
			@Override
		 	public void onMediaStats(final MediaStatsEvent e) {
		        super.onMediaStats(e);
		      	
		      	Log.d(LOG_TAG, "[Android] onMediaStats Listener triggered");

		      	Bundle hm = new Bundle();
		      	hm.putString("_eventType", "mediaStats");
		      	hm.putString("scopeId", e.getScopeId());
		      	hm.putString("mediaType", e.getMediaType().getStrValue());
		      	hm.putLong("remoteUserId", e.getRemoteUserId());

		      	Bundle hmsub = new Bundle();
		      	hmsub.putLong("avgJitter", e.getStats().getAvgJitter());
		      	hmsub.putLong("avOffset", e.getStats().getAvOffset());
		      	hmsub.putLong("bitRate", e.getStats().getBitRate());
		      	hmsub.putLong("cpu", e.getStats().getCpu());
		      	hmsub.putLong("fps", e.getStats().getFps());
		      	hmsub.putInt("layer", e.getStats().getLayer());
		      	hmsub.putLong("loss", e.getStats().getLoss());
		      	hmsub.putLong("maxJitter", e.getStats().getMaxJitter());
		      	hmsub.putLong("psnr", e.getStats().getPsnr());
		      	hmsub.putInt("quality", e.getStats().getQuality());
		      	hmsub.putLong("queueDelay", e.getStats().getQueueDelay());
		      	hmsub.putLong("rtt", e.getStats().getRtt());
		      	hmsub.putLong("totalCpu", e.getStats().getTotalCpu());
		      	hmsub.putInt("totalLoss", e.getStats().getTotalLoss());
		      	
		      	hm.putBundle("stats", hmsub);
				_dispatchEvent(hm);
		   	}
	    	
			@Override
		 	public void onMessage(final MessageEvent e) {
		        super.onMessage(e);
		      	
		      	Log.d(LOG_TAG, "[Android] onMessage Listener triggered");

		      	Bundle hm = new Bundle();
		      	hm.putString("_eventType", "message");
		        byte[] msgData = e.getData();
		      	String msg = null;
				try {
					msg = new String(msgData, "US-ASCII");
				} catch (UnsupportedEncodingException e1) {
					// TODO Auto-generated catch block
					e1.printStackTrace();
				}
		      	hm.putString("data", msg);
		      	hm.putLong("srcUserId", e.getSrcUserId());
				_dispatchEvent(hm);
		   	}
	    	
			@Override
		 	public void onMediaConnTypeChanged(final MediaConnTypeChangedEvent e) {
		        super.onMediaConnTypeChanged(e);
		      	
		      	Log.d(LOG_TAG, "[Android] onMediaConnTypeChanged Listener triggered");

		      	Bundle hm = new Bundle();
		      	hm.putString("_eventType", "mediaConnTypeChanged");
		      	hm.putString("scopeId", e.getScopeId());
		      	hm.putString("connectionType", e.getConnectionType().toString());
		      	hm.putString("mediaType", e.getMediaType().getStrValue());
				_dispatchEvent(hm);
		   	}
	    	
			@Override
		 	public void onMediaIssue(final MediaIssueEvent e) {
		        super.onMediaIssue(e);
		      	
		      	Log.d(LOG_TAG, "[Android] onMediaIssue Listener triggered");

		      	Bundle hm = new Bundle();
		      	hm.putString("_eventType", "mediaIssue");
		      	hm.putString("scopeId", e.getScopeId());
		      	hm.putBoolean("isStarted", e.isActive());
		      	hm.putString("issueType", e.getMediaIssueType().toString());
		      	hm.putString("msg", e.getMessage());
		      	hm.putLong("userId", e.getUserId());
		      	hm.putString("mediaType", e.getMediaType().getStrValue());
				_dispatchEvent(hm);
		   	}
	    };
	}

	// =========================================================================
	
	private ConnectionDescriptor genConnDescriptor(JSONObject json) throws JSONException {

		boolean autopubAudio = json.getBoolean("autopublishAudio");
		boolean autopubVideo = json.getBoolean("autopublishVideo");
		ADL_SCOPE_ID = json.getString("scopeId");
		String url = json.getString("url");
		
		// High video stream
		int hMaxWidth = json.getJSONObject("highVideoStream").getInt("maxWidth");
		int hMaxHeight = json.getJSONObject("highVideoStream").getInt("maxHeight");
		int hMaxBitRate = json.getJSONObject("highVideoStream").getInt("maxBitRate");
		int hMaxFps = json.getJSONObject("highVideoStream").getInt("maxFps");
		boolean hPublish = json.getJSONObject("highVideoStream").getBoolean("publish");
		boolean hReceive = json.getJSONObject("highVideoStream").getBoolean("receive");
    	
    	// Low video stream
		int lMaxWidth = json.getJSONObject("lowVideoStream").getInt("maxWidth");
		int lMaxHeight = json.getJSONObject("lowVideoStream").getInt("maxHeight");
		int lMaxBitRate = json.getJSONObject("lowVideoStream").getInt("maxBitRate");
		int lMaxFps = json.getJSONObject("lowVideoStream").getInt("maxFps");
		boolean lPublish = json.getJSONObject("lowVideoStream").getBoolean("publish");
		boolean lReceive = json.getJSONObject("lowVideoStream").getBoolean("receive");
    	
    	// Authentication details
		String signature = json.getJSONObject("authDetails").getString("signature");
		String salt = json.getJSONObject("authDetails").getString("salt");
    	long userId = json.getJSONObject("authDetails").getLong("userId");
    	long expires = json.getJSONObject("authDetails").getLong("expires");
    	
		ConnectionDescriptor desc = new ConnectionDescriptor();
		desc.setAutopublishAudio(autopubAudio);
		desc.setAutopublishVideo(autopubVideo);
	  	desc.setScopeId(ADL_SCOPE_ID);
	  	//desc.setUrl(url);

	    AuthDetails authDetails = new AuthDetails();
	    authDetails.setUserId(userId);
	    authDetails.setSalt(salt);
	    authDetails.setExpires(expires);
	    
	    String signatureBody = String.valueOf(ADL_APP_ID) + ADL_SCOPE_ID +
		        userId + salt + expires + ADL_API_KEY;
		MessageDigest digest;
		try {
			digest = MessageDigest.getInstance("SHA-256");
		 	digest.update(signatureBody.getBytes());
		  	signature = bytesToHexString(digest.digest());
		} catch (NoSuchAlgorithmException e1) {
		  	Log.e(LOG_TAG, "Failed to calculate authentication signature due to "
		    			+ "missing SHA-256 algorithm.");
		}
	    authDetails.setSignature(signature);
	    
	    desc.setAuthDetails(authDetails);

	    return desc;
	}

	// =========================================================================
	
	private static String bytesToHexString(byte[] bytes) {
	    
	    StringBuilder sb = new StringBuilder();
	    for (byte aByte : bytes) {
	    	String hex = Integer.toHexString(0xFF & aByte);
	    	if (hex.length() == 1) {
	    		sb.append('0');
	    	}
	    	sb.append(hex);
	    }
	    return sb.toString();
	}

	// =========================================================================
	
	private void _callback(Status status) {
		_pluginResult = new PluginResult(status);
    	_pluginResult.setKeepCallback(true);
    	_callbackCtx.sendPluginResult(_pluginResult);
	}
	
	private void _callback(Status status, String value) {
		_pluginResult = new PluginResult(status, value);
    	_pluginResult.setKeepCallback(true);
    	_callbackCtx.sendPluginResult(_pluginResult);
	}
	
	private void _callback(Status status, JSONObject json) {
		_pluginResult = new PluginResult(status, json);
    	_pluginResult.setKeepCallback(true);
    	_callbackCtx.sendPluginResult(_pluginResult);
	}

	// =========================================================================
	
	private void _userEventToJson(UserStateChangedEvent e, Bundle hm,
									boolean isAnUserEvent) {
		
      	hm.putString("scopeId", e.getScopeId());
      	hm.putString("videoSinkId", e.getVideoSinkId());
      	hm.putString("screenSinkId", e.getScreenSinkId());
      	if(!isAnUserEvent) {
      		hm.putString("mediaType", e.getMediaType().getStrValue());
      	}
      	hm.putBoolean("audioPublished", e.isAudioPublished());
      	hm.putBoolean("isConnected", e.isConnected());
      	hm.putBoolean("screenPublished", e.isScreenPublished());
      	hm.putBoolean("videoPublished", e.isVideoPublished());
      	hm.putLong("userId", e.getUserId());
	}

	// =========================================================================
	
	private void _dispatchEvent(Bundle bundle) {
		JSONObject json = new JSONObject();
		Set<String> keys = bundle.keySet();
		for (String key : keys) {
		    try {
		        json.put(key, bundle.get(key));
		    } catch(JSONException e) {
		        //Handle exception here
		    }
		}
		
		_pluginResult = new PluginResult(Status.OK, json);
		_pluginResult.setKeepCallback(true);
		
		CallbackContext evtCtx = new CallbackContext(_eventCallbackId, webView);
		evtCtx.sendPluginResult(_pluginResult);
	}
}