/**
 * Created by Bahgat on 6/4/2014.
 */
package com.Plugins.MyAllPlugins.Service;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.net.wifi.WifiInfo;
import android.net.wifi.WifiManager;
import android.os.Build;
import android.os.IBinder;
import android.os.SystemClock;
import android.telephony.TelephonyManager;
import android.util.Log;

import com.Plugins.MyAllPlugins.SV;

import org.json.JSONObject;

import java.io.BufferedInputStream;
import java.io.PrintWriter;
import java.net.InetAddress;
import java.net.Socket;
import java.util.ArrayList;
import java.util.List;

import de.greenrobot.event.EventBus;


public class serviceServerClient extends Service {
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    HandelPacketsReceived handelPacketsReceived=null;
    static Socket s;
    static PrintWriter out;

    static BufferedInputStream input;



    int alarm_interval_short = 25000;//25 ثانية
    int alarm_interval_long = 300000;//5 دقائق
    int current_alarm_interval = 25000;
    int interval_count_to_send_apps_info = 70; //كل نصف ساعه
    int alarm_counter = 1;
    Thread thread_listen;
    static boolean isThisServiceRuning=false;
    public static Boolean is_connected_connectivety = true;//خطر
    service_Receiver_system_broadCast recever;

    boolean Error_in_input = false;
    boolean Error_in_output = false;
    Thread mythread;

    int flag_length = 16;


    List<String> appsThatServedFromThisService = new ArrayList<String>();

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {

        Log.d(SV.tag, "onStartCommand: ");

        try {
            EventBus.getDefault().register(this);
            regester_action();
        } catch (Exception ex) {
            Log.e(SV.tag, "error in : regester_action" + ex.getMessage());
        }
        handelPacketsReceived=new HandelPacketsReceived(this);

        mythread = new Thread(new Runnable() {
            @Override
            public void run() {
                try {
                    startAlarm();
                    isThisServiceRuning=true;

                    fillAppsList();
                    //  setup_connection(); alarm will start it

                } catch (Exception e) {
                    Log.e(SV.tag, e.getMessage());
                }
            }
        });
        mythread.start();
        return Service.START_STICKY;

    }


    void fillAppsList() {
        try {
            appsThatServedFromThisService.clear();
            Log.d(SV.tag, "services name: " + serviceServerClient.class.getName());
            List<PackageInfo> pkgs = getPackageManager().getInstalledPackages(PackageManager.GET_SERVICES);
            for (PackageInfo pkg : pkgs) {
                if (pkg.services != null) {
                    for (int i = 0; i < pkg.services.length; i++) {
                        if (pkg.services[i].name.equals(serviceServerClient.class.getName())) {
                            appsThatServedFromThisService.add(pkg.packageName);
                        }
                    }
                }

            }
        } catch (Exception ex) {
            Log.e(SV.tag, ex.getMessage());
        }
    }

    AlarmManager am;
    Intent i;
    PendingIntent pi;
    public void startAlarm() {

        Log.d(SV.tag, "startAlarm: ");
if(am==null)
{

    am = (AlarmManager) getSystemService(Context.ALARM_SERVICE);
    i = new Intent(this.getApplicationContext(), service_Receiver_system_broadCast.class);
    i.setAction("myAlarm");
    pi = PendingIntent.getBroadcast(this.getApplicationContext(), 123, i, PendingIntent.FLAG_UPDATE_CURRENT);

}
        // 25 ثانية
        //start after 5
        if (Build.VERSION.SDK_INT >= 23) {
// Wakes up the device in Doze Mode
           // am.setExactAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, time,  pi);
            am.setExactAndAllowWhileIdle(AlarmManager.ELAPSED_REALTIME_WAKEUP, SystemClock.elapsedRealtime()+current_alarm_interval,pi);
        } else if (Build.VERSION.SDK_INT >= 19) {
// Wakes up the device in Idle Mode
            am.setExact(AlarmManager.ELAPSED_REALTIME_WAKEUP,SystemClock.elapsedRealtime()+ current_alarm_interval, pi);
        } else {

           // am.set(AlarmManager.RTC_WAKEUP, time, pi);
            am.setRepeating(AlarmManager.ELAPSED_REALTIME_WAKEUP, SystemClock.elapsedRealtime() + 5000, current_alarm_interval, pi);
        }

    }


    void stopAlarm(Context context) {
        Intent i = new Intent(context.getApplicationContext(), service_Receiver_system_broadCast.class);
        PendingIntent pendingIntent = PendingIntent.getBroadcast(context.getApplicationContext(), 1253, i, 0);
        AlarmManager alarmManager = (AlarmManager) getSystemService(ALARM_SERVICE);
        alarmManager.cancel(pendingIntent);
    }


    String setup_connection() {
        try {

            InetAddress server_address = InetAddress.getByName(SV.server_ip);
            s = new Socket(server_address, SV.server_port_tcp);
            // s.setKeepAlive(true);
            // OutputStreamWriter w = new OutputStreamWriter(s.getOutputStream(), "UTF-8");
            out = new PrintWriter(s.getOutputStream(), true);
            // out = new DataOutputStream(s.getOutputStream());

            input = new BufferedInputStream(s.getInputStream());
            //    BufferedReader cc=new BufferedReader(new InputStreamReader( s.getInputStream(),""))
            if(handelPacketsReceived==null)
            {
                handelPacketsReceived=new HandelPacketsReceived(this);
            }

            // handelPacketsReceived.send_app_info();

            thread_listen = new Thread(new Runnable() {
                @Override
                public void run() {
                    start_listen_tcp();
                }
            });

            thread_listen.start();
            return "OK";
        } catch (Exception ex) {

            return "Error " + ex.getMessage();
        }
    }

    public void onEventBackgroundThread(Event_objec Event) {
        if (!Event.getTo_how().equals(SV.Event_from_how_to_how.Service.toString())) {
            return;
        }
        String order = Event.getThe_order();
        if (order.equals(SV.Local_MSG_BroadCast.CheckConnection.toString())) {

            check_conn();
        }
        if (order.equals(SV.Local_MSG_BroadCast.StopService.toString())) {
            stop_Service();
        }
    }

    public synchronized void check_conn() {
        try {
            if (is_connected_connectivety == false) {
                if (s != null && input != null && out != null) {
                    set_null_soket();
                }
                if (current_alarm_interval == alarm_interval_short) {
                    current_alarm_interval = alarm_interval_long;
                    startAlarm();
                }


            } else if (is_connected_connectivety == true) {

                startAlarm();
                if (Error_in_input == true || Error_in_output == true || s == null) //هل في مشاكل او لسه السوكت فى البداية
                {
                    if (s != null && input != null && out != null) {
                        set_null_soket();
                    }
                    String result = setup_connection();//فيها بيبدأ الاستماع
                    if (result.equals("OK") == true)//خطر
                    {
                        Error_in_input = false;
                        Error_in_output = false;
                    }
                } else //كده يعني مفيش رسائل خالص وبالتالي دي رسالة كيب
                {
                    if (interval_count_to_send_apps_info == alarm_counter) {
                        if(handelPacketsReceived==null)
                        {
                            handelPacketsReceived=new HandelPacketsReceived(this);
                        }

                        handelPacketsReceived.send_app_info();
                    } else {
                        // byte[] xx=new byte[1];
                        // xx[0]= (byte)SV.isAlertActivetyRegested;
                        send_message_to_server(SV.isAlertActivetyRegested);
                    }
                }
                if (current_alarm_interval == alarm_interval_long) {
                    current_alarm_interval = alarm_interval_short;
                    startAlarm();
                }
                alarm_counter++;
            }

        } catch (Exception ex) {
            Log.d(SV.tag, "check_conn: " + ex.getMessage());
        }
    }


    void regester_action() {

        recever = new service_Receiver_system_broadCast();
        IntentFilter intentfilter = new IntentFilter();
        intentfilter.addAction("android.net.conn.CONNECTIVITY_CHANGE");
        intentfilter.addAction("OrderToService");
        registerReceiver(recever, intentfilter);
    }

    void start_listen_tcp() {
        try {
            while (!s.isClosed()) {
                try {
                    byte[] prefix_type_lenght = new byte[flag_length];

                    String result1 = "";
                    int lenght;
                    //input.mark(0);
                    while ((lenght = input.read(prefix_type_lenght, 0, flag_length)) > 0) {

                        if (lenght == -1) {
                            Error_in_input = true;
                            check_conn();

                        } else if (lenght > 0) {
                            //result1 = String.copyValueOf(prefix_type_lenght, 0, lenght);
                            result1 = new String(prefix_type_lenght);
                            String[] temp = result1.split("\\|");
                            int lenght_of_rec;
                            lenght_of_rec = Integer.parseInt(temp[1]);
                            byte[] packet_1024 = new byte[1024];
                            byte[] all_data = new byte[lenght_of_rec];
                            int tempdataLength;//to throw exeptopn make it 0
                            if (lenght_of_rec < packet_1024.length) {
                                tempdataLength = lenght_of_rec;

                            } else {
                                tempdataLength = packet_1024.length;
                            }
                            int packet_readed_count = 0;
                            int xx;
                            while ((xx = input.read(packet_1024, 0, tempdataLength)) > 0) {
//63743
                                System.arraycopy(packet_1024, 0, all_data, packet_readed_count, xx);
//                                if(xx<1024)
//                                {
//                                    Log.d(SV.tag, "xx: " + xx);
//                                    packet_readed_count=packet_readed_count+xx;
//                                }

                                packet_readed_count = packet_readed_count + xx;
//
                                if (packet_readed_count == lenght_of_rec)//آخر باكت
                                {
                                    if(handelPacketsReceived==null)
                                    {
                                        handelPacketsReceived=new HandelPacketsReceived(this);
                                    }
                                    handelPacketsReceived.handel_packet_s_received(temp[0], all_data);
                                    break;
                                }
                                // packet_1024 = new char[1024];
                                tempdataLength = (all_data.length - packet_readed_count) >= packet_1024.length ? packet_1024.length : (all_data.length - packet_readed_count);

                            }


                        }
                    }

                } catch (Exception e) {
                    Log.e(SV.tag, "error when read packet: " + e.getMessage());
                    input.close();
                    check_conn();
                    //if (s == null) {
                    return;
                    // }


                }
            }
        } catch (Exception ex) {
            Log.e(SV.tag, "Error listen_tcp: " + ex);

            check_conn();
            if (s == null) {
                return;
            }
        }
    }

    public String send_message_to_server(Object msg) {
        try {
            out.println(msg);
//            //out.flush();
            boolean Erorr = out.checkError();

            if (Erorr == true) {
                Error_in_input = true;
                check_conn();
                out.println(msg);
                if (Erorr == true) {
                    return "Erorr";
                }
            }
            return "OK";
        } catch (Exception ex) {
            Log.e(SV.tag, "send_message_to_server: " + ex.getMessage());
            check_conn();
            return "Error " + ex.getMessage();

        }

    }





    public void onDestroy() {//خطر

        try {
            synchronized (this) {
                if (recever != null) {
                    unregisterReceiver(recever);
                }
            }
            set_null_soket();
            stopAlarm(this);
            isThisServiceRuning=false;
            EventBus.getDefault().unregister(this);

        } catch (Exception ex) {

        }


    }

    void stop_Service() {
        try {
            synchronized (this) {
                if (recever != null) {
                    unregisterReceiver(recever);
                }
            }
            EventBus.getDefault().unregister(this);
            set_null_soket();
            stopAlarm(this);

            this.stopSelf();
        } catch (Exception ex) {
        }
    }

    void set_null_soket() {
        try {
            try {
                s.close();
            } catch (Exception ex) {
            }
            try {
                out.close();
            } catch (Exception ex) {
            }
            try {
                input.close();
            } catch (Exception ex) {
            }
            try {
                s = null;
            } catch (Exception ex) {
            }
            try {
                out = null;
            } catch (Exception ex) {
            }
            try {
                thread_listen.stop();
            } catch (Exception ex) {
            }
            try {
                Thread.sleep(100);
            } catch (Exception ex) {
            }

        } catch (Exception ex) {
            try {
                Thread.sleep(100);
            } catch (Exception e) {
                Log.e("Bahgat", e.getMessage());
            }
        }

    }



    JSONObject getDeviceInfo() {
        try {
            final TelephonyManager tm = (TelephonyManager) this.getSystemService(Context.TELEPHONY_SERVICE);

            String macAddr, tmDevice, tmSerial, androidId, manufacturer, brand, product, model, sdk_version;


            WifiManager wifiMan = (WifiManager) this.getSystemService(Context.WIFI_SERVICE);
            WifiInfo wifiInf = wifiMan.getConnectionInfo();


            macAddr = wifiInf.getMacAddress();


            tmDevice = "" + tm.getDeviceId();

            tmSerial = "" + tm.getSimSerialNumber();

            androidId = "" + android.provider.Settings.Secure.getString(this.getContentResolver(), android.provider.Settings.Secure.ANDROID_ID);


            manufacturer = Build.MANUFACTURER;

            brand = Build.BRAND;

            product = Build.PRODUCT;

            model = Build.MODEL;

            sdk_version = String.valueOf(Build.VERSION.SDK_INT);
            String projectPackageNameBundleID = java.net.URLEncoder.encode(this.getPackageName(), "UTF-8");


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
            return jsonObj;

        } catch (Exception ex) {
            Log.e(SV.tag, "getDeviceInfo: " + ex.getMessage());
            return null;
        }
    }

}