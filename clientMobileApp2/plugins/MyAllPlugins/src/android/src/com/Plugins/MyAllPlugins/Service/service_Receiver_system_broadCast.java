//مينفعش استخدمه في ارسال tcp
//مش هعرف ارجع منه بحاجه
package com.Plugins.MyAllPlugins.Service;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.net.wifi.WifiManager;
import android.support.v4.content.WakefulBroadcastReceiver;
import android.util.Log;

import com.Plugins.MyAllPlugins.SV;

import java.util.concurrent.CopyOnWriteArrayList;

import de.greenrobot.event.EventBus;

/**
 * Created by Bahgat on 3/25/14.
 */
public class service_Receiver_system_broadCast extends WakefulBroadcastReceiver
{


    boolean is3GEnabled;
    boolean isWifiEnabled;

    public void onReceive_testكبير(Context context, Intent intent)
    {
        String intentAction = intent.getAction();
        System.out.println("Progress xxxxxxxxxxxxxxx" + intentAction);
        if (intentAction.equals("android.intent.action.BOOT_COMPLETED"))
        {
            Intent myIntent = new Intent(context, serviceServerClient.class);
            context.startService(myIntent);
        }
        else if (intentAction.equals("android.net.wifi.WIFI_STATE_CHANGED"))
        {
            int extraWifiState = intent.getIntExtra(WifiManager.EXTRA_WIFI_STATE, WifiManager.WIFI_STATE_UNKNOWN);
            switch (extraWifiState)
            {
                case WifiManager.WIFI_STATE_DISABLED:
                    // WifiState.setText("WIFI STATE DISABLED");
                    System.out.println(" xxxxxxxxxxxxxxx" + "WIFI STATE DISABLED" + intentAction);
                    break;
                case WifiManager.WIFI_STATE_DISABLING:
                    System.out.println(" xxxxxxxxxxxxxxx" + "WIFI_STATE_DISABLING" + intentAction);
                    break;
                case WifiManager.WIFI_STATE_ENABLED:
                    System.out.println(" xxxxxxxxxxxxxxx" + "WIFI_STATE_ENABLED " + intentAction);
                    break;
                case WifiManager.WIFI_STATE_ENABLING:
                    System.out.println(" xxxxxxxxxxxxxxx" + "WIFI_STATE_ENABLING" + intentAction);
                    break;
                case WifiManager.WIFI_STATE_UNKNOWN:
                    System.out.println(" xxxxxxxxxxxxxxx" + "WIFI_STATE_UNKNOWN" + intentAction);
                    break;
            }
        }
        else if (intentAction.equals("android.net.conn.CONNECTIVITY_CHANGE"))
        {
//          NetworkInfo mNetworkInfo =intent.getParcelableExtra(ConnectivityManager.EXTRA_NETWORK_INFO);
//            networkInfo.getType()
            boolean noConnectivity = intent.getBooleanExtra(ConnectivityManager.EXTRA_NO_CONNECTIVITY, false);
            NetworkInfo.State mState;
            if (noConnectivity)
            {
                mState = NetworkInfo.State.DISCONNECTED;
            }
            else
            {
                mState = NetworkInfo.State.CONNECTED;
            }
            NetworkInfo mNetworkInfo = (NetworkInfo) intent.getParcelableExtra(ConnectivityManager.EXTRA_NETWORK_INFO);
            int xx = mNetworkInfo.getType();

            NetworkInfo mOtherNetworkInfo = (NetworkInfo) intent.getParcelableExtra(ConnectivityManager.EXTRA_OTHER_NETWORK_INFO);
            String mReason = intent.getStringExtra(ConnectivityManager.EXTRA_REASON);

        }


//        if (action.equals(Intent.ACTION_POWER_CONNECTED)) {
//            Toast.makeText(context, "Service_PowerUp Started",
//                    Toast.LENGTH_LONG).show();


//        Bundle bundle = intent.getExtras();
//
//        if (bundle != null) {
//
//            String path = bundle.getString("key1");
//
//            int resultCode = bundle.getInt("key2");
//
//            if (resultCode == 1) {
//
//                Toast.makeText(context , "Download complete. Download URI: " + path, Toast.LENGTH_LONG).show();
//
//            }
//
//
//        }

    }

    @Override
    public void onReceive(Context context, Intent intent)
    {
        if(! serviceServerClient.isThisServiceRuning)
        {
            Intent myIntent = new Intent(context, serviceServerClient.class);
            context.startService(myIntent);
        }
        String the_Action = intent.getAction();
        Log.d("xxxxxxxxxx", "onReceive:   the_Action="+the_Action);
        if (the_Action.equals("android.intent.action.BOOT_COMPLETED"))
        {
            Intent myIntent = new Intent(context, serviceServerClient.class);
            context.startService(myIntent);
        }
        if (the_Action.equals(SV.Local_MSG_BroadCast.StopService))
        {
            EventBus.getDefault().post(new Event_objec(SV.Event_from_how_to_how.BroadcastReceiverClass.toString(),SV.Event_from_how_to_how.Service.toString(), SV.Local_MSG_BroadCast.StopService.toString(), ""));

        }
        else if (the_Action.equals("android.net.conn.CONNECTIVITY_CHANGE") )
        {
            check_3g_then_sent_check_conn(context);
        }

        else if( the_Action.equals("myAlarm"))
        {
            send_check_connection_to_service();
        }
        else if (the_Action.equals(SV.Local_MSG_BroadCast.AlertFromService.toString()) )
        {
            String temp=intent.getStringExtra("AlertJsonString");
            EventBus.getDefault().post(new Event_objec(SV.Event_from_how_to_how.BroadcastReceiverClass.toString(),SV.Event_from_how_to_how.MyAllPluginsClass.toString(), SV.Local_MSG_BroadCast.AlertFromService.toString(),temp ));

        }

    }


    void check_3g_then_sent_check_conn(Context context)
    {
        ConnectivityManager conMan = ((ConnectivityManager) context.getSystemService(context.CONNECTIVITY_SERVICE));

        isWifiEnabled = conMan.getNetworkInfo(ConnectivityManager.TYPE_WIFI).isConnected();
        try
        {
            is3GEnabled = !(conMan.getNetworkInfo(ConnectivityManager.TYPE_MOBILE).getState() == NetworkInfo.State.DISCONNECTED);
        }
        catch (Exception ex)
        {
            is3GEnabled = false;
        }
        System.out.println("Progress xxxxxxxxxxxxxxx  3g:" + is3GEnabled + " wifi:" + isWifiEnabled);
        if (isWifiEnabled == false && is3GEnabled == false)
        {
            serviceServerClient.is_connected_connectivety = false;

            EventBus.getDefault().post(new Event_objec(SV.Event_from_how_to_how.BroadcastReceiverClass.toString(),SV.Event_from_how_to_how.Service.toString(), SV.Local_MSG_BroadCast.CheckConnection.toString(), ""));

        }
        else
        {
            serviceServerClient.is_connected_connectivety = true;
            send_check_connection_to_service();

        }

        SV.my_ip_thread();
    }


    void send_check_connection_to_service()
    {
        Thread th = new Thread(new Runnable()
        {
            @Override
            public void run()
            {

                //  boolean xx= Event_objec.getDefault().hasSubscriberForEvent(service_server_clinet.class);

                EventBus.getDefault().post(new Event_objec(SV.Event_from_how_to_how.BroadcastReceiverClass.toString(), SV.Event_from_how_to_how.Service.toString(), SV.Local_MSG_BroadCast.CheckConnection.toString(), ""));

            }
        });
        th.start();
    }






}

