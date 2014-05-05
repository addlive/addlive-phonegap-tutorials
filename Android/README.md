## Building the application

To use the application, you need to obtain AddLive Android SDK and the PhoneGap
plug-in sources. To obtain those visit http://www.addlive.com.

Once downloaded you need to copy the files inside the SDK libs folder into the
project libs folder.

To use particular sub-application, set one of the provided html files names in
src/com/addlive/tutorials/MainActivity.java. Please keep special attention that
what we did was to set CordovaWebView in the layout and load there the application,
so you'll need to update your main Activity class and layout with the ones we
provide. The class directory is the one mentioned previously and the layout
directory is the following res/layout/activity_main.xml

In case of any questions or issues - feel free to reach us at
http://community.addlive.com.