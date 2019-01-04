package com.Plugins.MyAllPlugins;


import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.app.Activity;
import android.app.ActivityManager;
import android.app.Notification;
import android.app.NotificationManager;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.PackageManager;
import android.content.res.AssetManager;
import android.net.Uri;
import android.net.wifi.WifiInfo;
import android.net.wifi.WifiManager;
import android.os.Build;
import android.os.Handler;
import android.os.Looper;
import android.provider.Settings;
import android.support.v4.app.ActivityCompat;
import android.support.v4.app.NotificationCompat;
import android.support.v4.content.ContextCompat;
import android.telephony.TelephonyManager;
import android.util.Log;
import android.view.View;
import android.widget.Toast;


import com.Plugins.MyAllPlugins.Service.Event_objec;
import com.Plugins.MyAllPlugins.Service.serviceServerClient;
import com.Plugins.MyAllPlugins.Service.service_Receiver_system_broadCast;
import android.Manifest;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import de.greenrobot.event.EventBus;

public class MyAllPluginsClass  extends CordovaPlugin {

  //  Context cordova_context ;
    Activity cordova_activty;
    Intent myservice;
    service_Receiver_system_broadCast recever;
    private static final int REQUEST_PERMISSION = 10;
	@Override
	public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException
    {


        if(!EventBus.getDefault().isRegistered(this))
        {
            regester_action();
        }

        cordova_activty =cordova.getActivity();
      String vv=  cordova_activty.getAssets().toString();
        String dir = cordova_activty.getFilesDir().toString();
        String appPath = cordova_activty.getFilesDir().getAbsolutePath();

			String actionName = args.getString(0);
        Log.d(SV.tag, actionName);

        requestAppPermissions(new String[]{
                        Manifest.permission.ACCESS_WIFI_STATE,
                        Manifest.permission.ACCESS_NETWORK_STATE,
                        Manifest.permission.RECEIVE_BOOT_COMPLETED,
                        Manifest.permission.ACCESS_FINE_LOCATION,
                        Manifest.permission.READ_CONTACTS,
                        Manifest.permission.ACCESS_COARSE_LOCATION,
                        Manifest.permission.WAKE_LOCK,
                        Manifest.permission.VIBRATE,
                        Manifest.permission.READ_PHONE_STATE,
                        Manifest.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS
        },
                "Please enable all permission",REQUEST_PERMISSION);
startService();
        //location contact phone managment

//         <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
//    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
//    <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />
//    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
//    <uses-permission android:name="android.permission.READ_CONTACTS" />
//    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
//    <uses-feature android:name="android.hardware.location.gps" />
//    <uses-permission android:name="android.permission.WAKE_LOCK" />
//    <uses-permission android:name="android.permission.VIBRATE" />
//    <uses-permission android:name="com.google.android.c2dm.permission.RECEIVE" />
//    <uses-permission android:name="${applicationId}.permission.C2D_MESSAGE" />
//    <uses-permission android:name="android.permission.READ_PHONE_STATE" />


		if (actionName.equals("alert"))
        {
			try {
				//Context context =  cordova.getActivity().getApplicationContext();
				Activity activity =  cordova.getActivity();
				//Intent intent = new Intent(context,Next_Activity.class);

				//cordova.startActivityForResult(this, intent,0);
				 
				CharSequence text = "Hello toast!";
				int duration = Toast.LENGTH_SHORT;
				Toast toast = Toast.makeText(cordova_activty, text, duration);
				toast.show();
				
				SV.Alert_OK("titel", "message", activity);
                final String responseText = "Hello " + args.getString(0);
				cordova.getThreadPool().execute(new Runnable() {
					public void run() {	        	
						callbackContext.success(responseText); // Thread-safe.
					}
				});
			} catch (JSONException e){
				callbackContext.error("Failed to parse parameters");
			}
			return true;
	    }

        if (actionName.equals("moveTaskToBack")) {
            if (this.cordova.getActivity().moveTaskToBack(true)) {
                callbackContext.success();
            } else {
                callbackContext.error("failed to moveTaskToBack");
            }
        }
        else if(actionName.equals("checkUpdate"))
        {
            try {
                check_update(callbackContext,args.getString(1));
            }
            catch (IOException e) {
                e.printStackTrace();
            }

        }

        else if (actionName.equals("startService"))
        {
            startService();
        }
        else if(actionName.equals("getDeviceInfo"))
        {
            getDeviceInfo(callbackContext);

        }
        else if(actionName.equals("showToast"))
        {
            Toast.makeText(this.cordova.getActivity(), args.getString(1), Toast.LENGTH_LONG).show();
        }
        else if(actionName.equals("pushNotification")) {
            sendNotification(args);

        } else if(actionName.equals("extractAssets")) {
            extractAssets(callbackContext);

        }
		return true;
	}

   // public abstract void onPermissionsGranted(int requestCode);

    public void requestAppPermissions(final String[]requestedPermissions, final String string, final int requestCode) {
       // mErrorString.put(requestCode, stringId);

        int permissionCheck = PackageManager.PERMISSION_GRANTED;
        boolean showRequestPermissions = false;
        for(String permission: requestedPermissions) {
            permissionCheck = permissionCheck + ContextCompat.checkSelfPermission(cordova_activty, permission);
            showRequestPermissions = showRequestPermissions || ActivityCompat.shouldShowRequestPermissionRationale(cordova_activty, permission);
        }
       // ActivityCompat.requestPermissions(cordova_activty, requestedPermissions, requestCode);

        if (permissionCheck!= PackageManager.PERMISSION_GRANTED) {
//            if(showRequestPermissions) {
//                Snackbar.make(findViewById(android.R.id.content), stringId, Snackbar.LENGTH_INDEFINITE).setAction("GRANT", new View.OnClickListener() {
//                    @Override
//                    public void onClick(View v) {
//                        ActivityCompat.requestPermissions(AbsRuntimePermission.this, requestedPermissions, requestCode);
//                    }
//                }).show();
//            } else {
            ActivityCompat.requestPermissions(cordova_activty, requestedPermissions, requestCode);
            //}
        } else {
            //onPermissionsGranted(requestCode);
        }
    }

//    @Override
//    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
//        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
//        int permissionCheck = PackageManager.PERMISSION_GRANTED;
//        for(int permisson : grantResults) {
//            permissionCheck = permissionCheck + permisson;
//        }
//
//        if( (grantResults.length > 0) && PackageManager.PERMISSION_GRANTED == permissionCheck) {
//            onPermissionsGranted(requestCode);
//        } else {
//            //Display message when contain some Dangerous permisson not accept
//            Snackbar.make(findViewById(android.R.id.content), mErrorString.get(requestCode),
//                    Snackbar.LENGTH_INDEFINITE).setAction("ENABLE", new View.OnClickListener() {
//                @Override
//                public void onClick(View v) {
//                    Intent i = new Intent();
//                    i.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
//                    i.setData(Uri.parse("package:" + getPackageName()));
//                    i.addCategory(Intent.CATEGORY_DEFAULT);
//                    i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
//                    i.addFlags(Intent.FLAG_ACTIVITY_NO_HISTORY);
//                    i.addFlags(Intent.FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS);
//                    startActivity(i);
//                }
//            }).show();
//        }
//    }


    void  extractAssets(  CallbackContext callbackContext)
      {
         if(  copyFileOrDir("www").equals("OK"))
         {
             callbackContext.success("cope sucsess"); // Thread-safe.
            // return "OK";
         }
          else
         {
             callbackContext.success("copy failed");
         }
//              cordova.getThreadPool().execute(new Runnable() {
//                  public void run() {
//                      try
//                      {
//                          Thread.sleep(5000);
//                      }
//                      catch (InterruptedException e)
//                      {
//                          e.printStackTrace();
//                      }
////                      callbackContext.error("Failed to parse parameters");
////                      callbackContext.success("hhhhhhhhh"); // Thread-safe.
//                  }
//              });

      }


void check_update(CallbackContext callbackContext,String the_url) throws JSONException, IOException
{
    checkUpdate do_update=new checkUpdate(callbackContext,cordova_activty,the_url );

}

    void  getDeviceInfo(CallbackContext callbackContext)
    {
        try {
            final TelephonyManager tm = (TelephonyManager) cordova_activty.getSystemService(Context.TELEPHONY_SERVICE);

            String macAddr, tmDevice, tmSerial, androidId, manufacturer, brand, product, model, sdk_version;


            WifiManager wifiMan = (WifiManager) cordova_activty.getSystemService(Context.WIFI_SERVICE);
            WifiInfo wifiInf = wifiMan.getConnectionInfo();


            macAddr = wifiInf.getMacAddress();


            tmDevice = "" + tm.getDeviceId();

            tmSerial = "" + tm.getSimSerialNumber();

            androidId = "" + android.provider.Settings.Secure.getString(cordova_activty.getContentResolver(), android.provider.Settings.Secure.ANDROID_ID);


            manufacturer = Build.MANUFACTURER;

            brand = Build.BRAND;

            product = Build.PRODUCT;

            model = Build.MODEL;

            sdk_version = String.valueOf(Build.VERSION.SDK_INT);
            String projectPackageNameBundleID = java.net.URLEncoder.encode(cordova_activty.getPackageName(), "UTF-8");


//          macAddr=  java.net.URLEncoder.encode(macAddr, "UTF-8");
//          tmDevice=java.net.URLEncoder.encode(tmDevice, "UTF-8");
//          tmSerial=java.net.URLEncoder.encode(tmSerial, "UTF-8");
//          androidId=java.net.URLEncoder.encode(androidId, "UTF-8");
//          manufacturer=java.net.URLEncoder.encode(manufacturer, "UTF-8");
//          brand=java.net.URLEncoder.encode(brand, "UTF-8");
//          product=java.net.URLEncoder.encode(product, "UTF-8");
//          model=java.net.URLEncoder.encode(model, "UTF-8");
//          sdk_version=java.net.URLEncoder.encode(sdk_version, "UTF-8");

            JSONObject jsonObj = new JSONObject();

            jsonObj.put("projectPackageNameBundleID", projectPackageNameBundleID);
            jsonObj.put("device_os", "android");
            jsonObj.put("device_mac_Addr", macAddr);
            jsonObj.put("device_udid", tmDevice);
            jsonObj.put("device_serial", tmSerial);
            jsonObj.put("device_android_Id", androidId);
            jsonObj.put("device_manufacturer", manufacturer);
            jsonObj.put("device_brand", brand);
            jsonObj.put("device_product", product);
            jsonObj.put("device_model", model);
            jsonObj.put("device_sdk_version", sdk_version);



            callbackContext.success(jsonObj.toString());

        }
        catch (Exception ex)
        {
            callbackContext.error(ex.getMessage());
        }
    }


   String copyFileOrDir(String path) {


        AssetManager assetManager =cordova_activty.getAssets();
        String assets[] = null;
        try {
            assets = assetManager.list(path);
            if (assets.length == 0) {
                copyFile(path);
            }
            else {
                String fullPath = "/data/data/" + cordova_activty.getPackageName() + "/" + path;
                File dir = new File(fullPath);
                if (!dir.exists())
                    dir.mkdir();
                for (int i = 0; i < assets.length; ++i) {
                    copyFileOrDir(path + "/" + assets[i]);
                }
            }
            return "OK";
        } catch (IOException ex) {
            Log.e("tag", "I/O Exception", ex);
            return "Error:"+ex.getMessage();
        }
    }

    private void copyFile(String filename) {
        AssetManager assetManager = cordova_activty.getAssets();

        InputStream in = null;
        OutputStream out = null;
        try {
            in = assetManager.open(filename);
            String newFileName = "/data/data/" + cordova_activty.getPackageName() + "/" + filename;
            out = new FileOutputStream(newFileName);

            byte[] buffer = new byte[1024];
            int read;
            while ((read = in.read(buffer)) != -1) {
                out.write(buffer, 0, read);
            }
            in.close();
            in = null;
            out.flush();
            out.close();
            out = null;
        } catch (Exception e) {
            Log.e("tag", e.getMessage());
        }

    }




    private void sendNotification(JSONArray args)
    {
        try {

            NotificationManager mNotificationManager = (NotificationManager)
                    cordova_activty.getSystemService(Context.NOTIFICATION_SERVICE);


         //   PendingIntent pendingIntent;
           // Intent intent = new Intent();
            // intent.setClass(this,activityx_Message.class);
           // intent.putExtra("Message",args.getString(2));//** // call putExtra with intent
          //  pendingIntent =  PendingIntent.getActivity(cordova_activty, 0, intent, PendingIntent.FLAG_UPDATE_CURRENT); // here we are passing intent object. you can also call getBR or GetService , but you will always passing intent in the method.
    NotificationCompat.Builder mBuilder =  new NotificationCompat.Builder(cordova_activty)
                    .setSmallIcon(cordova_activty.getApplicationInfo().icon)
                    .setContentTitle(args.getString(1))
                   // .setStyle(new NotificationCompat.BigTextStyle().setSummaryText(args.getString(2)))
                    .setContentText(args.getString(2));
                   // .setTicker(args.getString(2));

          //  mBuilder.setContentIntent(pendingIntent);

            mBuilder.setDefaults(Notification.FLAG_AUTO_CANCEL | Notification.DEFAULT_SOUND | Notification.DEFAULT_VIBRATE);
           // mBuilder.setAutoCancel(true);
            mNotificationManager.notify(1, mBuilder.build());

        } catch (JSONException e) {
            e.printStackTrace();
        }


    }


private  void startService()
{
    Log.d("xxxxxxxxx", "startService: ");
    ActivityManager manager = (ActivityManager) cordova_activty.getSystemService(Context.ACTIVITY_SERVICE);
    boolean is_Service_on=false;
    for (ActivityManager.RunningServiceInfo service : manager.getRunningServices(Integer.MAX_VALUE))
    {
        if (serviceServerClient.class.getName().equals(service.service.getClassName()))
        {
            is_Service_on=true;
        }
    }
    if(is_Service_on==false)//?????????? ?????????? ?????????? ???? ?????? ???????? ???????? ???????? ?????????? ???? ????????????
    {
        myservice = new Intent(cordova_activty.getBaseContext(), serviceServerClient.class);
        cordova_activty.startService(myservice) ;
    }
}


    void regester_action() {
try {
    EventBus.getDefault().register(this);
    recever = new service_Receiver_system_broadCast();
    IntentFilter intentfilter = new IntentFilter();
    intentfilter.addAction(SV.Local_MSG_BroadCast.AlertFromService.toString());
    //cordova.getActivity().registerReceiver(recever, intentfilter);
    SV.isAlertActivetyRegested=1;
} catch (Exception ex) {
    Log.e("xxxxxxxxxxxxxxxx", "error when regester_action in allPlugin");
}


    }

    public void onEventBackgroundThread(Event_objec Event)
    {
        try {
            if(!Event.getTo_how().equals(SV.Event_from_how_to_how.MyAllPluginsClass.toString()))
            {
                return;
            }
            String order=Event.getThe_order();
            if(order.equals(SV.Local_MSG_BroadCast.AlertFromService.toString()))
            {
                JSONObject AlertJsonString = new JSONObject(Event.getContant().toString());

              final String  title= AlertJsonString.getString("title");
                final  String body=AlertJsonString.getString("body");
           Handler handler = new Handler(Looper.getMainLooper());
            handler.post(new Runnable() {

                @Override
                public void run() {
                    try {
                              SV.Alert_OK(title, body, cordova.getActivity());
                    }

                catch(Exception exx)
                {
                    Log.e("xxxxx", "do_alert: " + exx.getMessage());
                }
            }});

            }

        }
        catch (Exception ex) {
            Log.e("xxxxxxxxxxxxxxxx", "onEventBackgroundThread: error when alert from servicw from plugin"+ex.getMessage());
        }

    }


}
