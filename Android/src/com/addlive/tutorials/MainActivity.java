/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package com.addlive.tutorials;

import java.util.concurrent.ExecutorService;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.SurfaceView;
import android.view.ViewGroup;
import android.widget.RelativeLayout;

import org.apache.cordova.*;

public class MainActivity extends Activity implements CordovaInterface {
	
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        // Phonegap webview
        CordovaWebView cordovaWV = (CordovaWebView) findViewById(R.id.cordovaWebView);
        cordovaWV.loadUrl("file:///android_asset/www/Tutorial7.html");
        
        // To avoid local surface view black flashes. Explanation here:
        // http://stackoverflow.com/questions/8772862/surfaceview-flashes-black-on-load
    	SurfaceView _local = new SurfaceView(MainActivity.this);
		RelativeLayout.LayoutParams surfaceParams = new RelativeLayout.LayoutParams(0, 0);
		((ViewGroup) cordovaWV.getParent()).addView(_local, surfaceParams);
    }

	@Override
	public void startActivityForResult(CordovaPlugin command, Intent intent,
			int requestCode) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void setActivityResultCallback(CordovaPlugin plugin) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Activity getActivity() {
		// TODO Auto-generated method stub
		return this;
	}

	@Override
	public Object onMessage(String id, Object data) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ExecutorService getThreadPool() {
		// TODO Auto-generated method stub
		return null;
	}
}

