package com.Plugins.MyAllPlugins.voip;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.media.AudioManager;
import android.media.MediaPlayer;
import android.media.RingtoneManager;
import android.net.Uri;
import android.os.Vibrator;
import android.support.v4.content.LocalBroadcastManager;
import android.telephony.TelephonyManager;
import android.util.Log;

import com.Plugins.MyAllPlugins.SV;
 import com.Plugins.MyAllPlugins.Service.Event_objec;
import com.tedata.test.R;


import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.net.InetSocketAddress;
import java.net.SocketAddress;
import java.net.SocketException;
import java.net.SocketTimeoutException;

import de.greenrobot.event.EventBus;

/**
 * Created by Bahgat on 3/13/14.
 */
public class udp_listen_And_sent_socket implements SensorEventListener
{
    static Thread thread_for_recoding;
    private static DatagramSocket listener;
    private static DatagramPacket Packet_to_sent;
    byte[] buf = new byte[1024];
    private DatagramPacket received_packet = new DatagramPacket(buf, buf.length);
    SV.Message_Type status;

    private boolean is_cancel_call_or_stop = false;
    private LowLevelRecordAudio recorder;
    private LowLevelPlayAudioStreem play;
    private SensorManager mySensorManager;
    private Sensor myGravitySensor;
    private  String sinsor_status;

    Context temp_context_to_pass_it;
    private String phone_to_call;
     String outString;
    byte[] bufx;
    String temp_msg_call_reject_by_recevier;

    Vibrator myVibrator;
    boolean is_vibrate_and_ring_canceled=false;
    MediaPlayer myPlayer;
    MediaPlayer myringtone_player;
    AudioManager  audioManager;
  boolean  original_speaker;

    int port_to_sent;
    InetAddress ip_to_sent;


    public udp_listen_And_sent_socket(Context context)
    {
        temp_context_to_pass_it = context;
    }


    public void start_mack_call_or_receve_call(final String phone_to_call,final String name_to_call,final String caller_local_ip_port)
    {

        LocalBroadcastManager.getInstance(temp_context_to_pass_it).registerReceiver(mMessageReceiver, new IntentFilter("event_from_ringing_answer_to_udp"));

        audioManager = (AudioManager) temp_context_to_pass_it.getSystemService(Context.AUDIO_SERVICE);
        original_speaker=  audioManager.isSpeakerphoneOn() ;

        this.phone_to_call = phone_to_call;
        is_cancel_call_or_stop = false;//عشان ثابت لازم اغيره عشان لو تم استخدام الكلاس قبل ذلك
        recorder = new LowLevelRecordAudio();
        play = new LowLevelPlayAudioStreem();
        EventBus.getDefault().register(this);


        if (phone_to_call == "")//اذا مستقبل
        {
            Thread thread_receive = new Thread(new Runnable()
            {
                @Override
                public void run()
                {
                    String[] ip_port=caller_local_ip_port.split(":");
                    receive_call(ip_port[0],ip_port[1]);
                }
            });
            thread_receive.start();
        }
        else
        {
            Intent intentx = new Intent(temp_context_to_pass_it, ringing_answer.class);
            intentx.putExtra("phone_num",  phone_to_call);
            intentx.putExtra("phone_name",  name_to_call);
            intentx.putExtra("ringing_or_answer",  "mack_Call");
            temp_context_to_pass_it.startActivity(intentx);

            Thread thread_mack = new Thread(new Runnable()
            {
                @Override
                public void run()
                {
                    mack_call(phone_to_call);
                }
            });
            thread_mack.start();
        }




    }

    private void mack_call(String phone_to_call)
    {
        try
        {
            InetAddress server_address = InetAddress.getByName(SV.server_ip);

            listener = new DatagramSocket();// new Socket(AddressFamily.InterNetwork, SocketType.Dgram, ProtocolType.Udp);
            String outString = SV.Message_Type.NeedToCall.getValue() + "|" + SV.contry_code_with_mogab + SV.mobile_num_without_first0 + "," + phone_to_call+ ","+ SV.my_ip+":"+listener.getLocalPort();//هنا المفروض احط الاي بي بتاعي شبكة
            byte[] bufx = outString.getBytes();
            Packet_to_sent = new DatagramPacket(bufx, bufx.length, server_address, SV.server_port_udp);

            listener.send(Packet_to_sent);

            listener.setSoTimeout(3000);//خطر المفروض تبقى ثانية مثلا
            int count = 0;
            String rcvd="";

            while (!is_cancel_call_or_stop)
            {
                try
                {
                    listener.receive(received_packet);
                     rcvd = new String(received_packet.getData(), 0, received_packet.getLength());
                    SV.Message_Type msg_typr = SV.Message_Type.GetValueFromString(rcvd.substring(0, rcvd.indexOf("|")));
                    if (msg_typr == SV.Message_Type.WaitUntilCheckCaller )
                    {
                        status = msg_typr;
                        listener.setSoTimeout(3000); //على بال ما يبعت للمستقبل
                        count = 0;//ابدأ العد من الاول على الحالة الجديدة
                    }
                    else if (msg_typr == SV.Message_Type.HereYouAre)//ابدأ بقه اتعامل مع مستقبل المكالمة
                    {
                       //هنا المفروض هستقبل اتنين اي بي شبكة

                        String[] ip_and_port = (rcvd.substring(rcvd.lastIndexOf("|") + 1)).split(",");

                        String[] ip_and_port_wan = ip_and_port[0].split(":");

                        String wan_ip=ip_and_port_wan[0];
                        String wan_port=ip_and_port_wan[1];

                        String[] ip_and_port_lan = ip_and_port[1].split(":");
                        String local_ip=ip_and_port_lan[0];
                        String local_port=ip_and_port_lan[1];
                        outString = SV.Message_Type.ImCallingYou.getValue() + "|" + SV.contry_code_with_mogab + SV.mobile_num_without_first0;  //";//دي اللحظة اللي هيعرض فيها المستقبل شاشة الاتصال
                        bufx = outString.getBytes();
                        Packet_to_sent = new DatagramPacket(bufx, bufx.length, InetAddress.getByName(local_ip), Integer.parseInt(local_port));
                        listener.send(Packet_to_sent);

                        Packet_to_sent = new DatagramPacket(bufx, bufx.length, InetAddress.getByName(wan_ip), Integer.parseInt(wan_port));
                        listener.send(Packet_to_sent);

                        status = SV.Message_Type.ImCallingYou;
                        count = 0;//عشان لما هحتاجه بعد كده
                    }
                    else if(msg_typr == SV.Message_Type.ImWaitCallerYou)
                    {
                        if(status==msg_typr)//يعني دي مش اول رنه
                        {

                        }
                        else
                        {
                            ip_to_sent = received_packet.getAddress();
                            port_to_sent  = received_packet.getPort();

                            outString = SV.Message_Type.ImCallingYou.getValue() + "|" + SV.contry_code_with_mogab + SV.mobile_num_without_first0;  //";//دي اللحظة اللي هيعرض فيها المستقبل شاشة الاتصال
                            bufx = outString.getBytes();
                            Packet_to_sent = new DatagramPacket(bufx, bufx.length, ip_to_sent, port_to_sent);
                            listener.send(Packet_to_sent);
                            status = SV.Message_Type.ImWaitCallerYou;
                            count = 0;//عشان لما هحتاجه بعد كده
                        }
                    }
                    else if (msg_typr == SV.Message_Type.Ringing)
                    {
                        if(status==msg_typr)//يعني دي مش اول رنه
                        {

                        }
                        else
                        {
                            ip_to_sent = received_packet.getAddress();
                            port_to_sent  = received_packet.getPort();
                            listener.setSoTimeout(3000);
                            status = msg_typr;
                            count = 0;
//                            EventBus.getDefault().post(new Event_objec(SV.Event_from_how_to_how.UDP.toString(),SV.Event_from_how_to_how.Ringing_class.toString(),msg_typr.name(), ""));
                            play_file(500, R.raw.ringing,50000);//الرنة الراجعة

                        }
                    }
                    else if (msg_typr == SV.Message_Type.OpenLine)
                    {
                        ip_to_sent = received_packet.getAddress();
                        port_to_sent  = received_packet.getPort();
                        listener.setSoTimeout(3000);//عشر ثواني حلو وبعدها يقطع المكالمة
                        status = msg_typr;
                        count = 0;//عشان لما هحتاجه بعد كده
                        break;
                    }
                    else if (msg_typr == SV.Message_Type.LineBusy || msg_typr == SV.Message_Type.NotAvailable || msg_typr == SV.Message_Type.CallCanceledByReceiver || msg_typr == SV.Message_Type.CallCanceledByReceiverWithMSG)
                    {
                        String body= rcvd.substring(rcvd.lastIndexOf("|") + 1);
                        if(msg_typr == SV.Message_Type.LineBusy || msg_typr == SV.Message_Type.NotAvailable)
                        {
                            Thread.sleep(1000);
                        }
                        EventBus.getDefault().post(new Event_objec(SV.Event_from_how_to_how.UDP.toString(),SV.Event_from_how_to_how.Ringing_class.toString(),msg_typr.name(), body));


                        stop_Call();

                        return;
                    }
                }
                catch (SocketTimeoutException ex)
                {
                    count++;
                    if (count < 20)
                    {
                        if (status == SV.Message_Type.ImCallingYou)//ابدأ بقه اتعامل مع مستقبل المكالمة
                    {
                        //هنا المفروض هستقبل اتنين اي بي شبكة

                        String[] ip_and_port = (rcvd.substring(rcvd.lastIndexOf("|") + 1)).split(",");

                        String[] ip_and_port_wan = ip_and_port[0].split(":");

                        String wan_ip=ip_and_port_wan[0];
                        String wan_port=ip_and_port_wan[1];

                        String[] ip_and_port_lan = ip_and_port[1].split(":");
                        String local_ip=ip_and_port_lan[0];
                        String local_port=ip_and_port_lan[1];
                        outString = SV.Message_Type.ImCallingYou.getValue() + "|" + SV.contry_code_with_mogab + SV.mobile_num_without_first0;  //";//دي اللحظة اللي هيعرض فيها المستقبل شاشة الاتصال
                        bufx = outString.getBytes();
                        Packet_to_sent = new DatagramPacket(bufx, bufx.length, InetAddress.getByName(local_ip), Integer.parseInt(local_port));
                        listener.send(Packet_to_sent);

                        Packet_to_sent = new DatagramPacket(bufx, bufx.length, InetAddress.getByName(wan_ip), Integer.parseInt(wan_port));
                        listener.send(Packet_to_sent);

                        status = SV.Message_Type.ImCallingYou;
                        count = 0;//عشان لما هحتاجه بعد كده
                    }
                        else
                        {
                            listener.send(Packet_to_sent);//هنا الرسالة اما تأخير في رد لسيرفر
                            //wait فسوف ابعث اليه من الاول محتاج مكالمة لذلك لن تتغير الرسالة
                            //i'm calling yout  وهنا هبعت الرسالة للمستقبل من الاول
                        }
                            continue;
                    }
                    else
                    {

                        EventBus.getDefault().post(new Event_objec(SV.Event_from_how_to_how.UDP.toString(),SV.Event_from_how_to_how.Ringing_class.toString(), "Error", "Error while connection server ."));
                        stop_Call();
                        return;
                    }
                }
            }


            if (is_cancel_call_or_stop == true) //هل وقف بسبب كنسلة المكالة ولا في رسالة ايجابية وصلت
            {

                return;
            }
            start_voice_chat();
        }
        catch (Exception ex)
        {
            if (ex.getMessage().contains("Unable to resolve host"))
            {
                EventBus.getDefault().post(new Event_objec(SV.Event_from_how_to_how.UDP.toString(),SV.Event_from_how_to_how.Ringing_class.toString(), "Error", "internet connection Error, check your connection."));
            }
            if(ex.getMessage().contains("Socket closed") && is_cancel_call_or_stop == true)
            {
                return;
            }
            stop_Call();


        }
    }
    private void receive_call(String caller_local_ip,String caller_local_port)
    {
        try
        {
            InetAddress server_address = InetAddress.getByName(SV.server_ip);

            listener = new DatagramSocket();// new Socket(AddressFamily.InterNetwork, SocketType.Dgram, ProtocolType.Udp);
            outString = SV.Message_Type.TackMyPhone.getValue() + "|" + SV.contry_code_with_mogab + SV.mobile_num_without_first0 +","+SV.my_ip +":"+ listener.getLocalPort(); // المفروض احط الاي بي الداخلي ايضا شبكة
            bufx = outString.getBytes();
            Packet_to_sent = new DatagramPacket(bufx, bufx.length, server_address, SV.server_port_udp);
            listener.send(Packet_to_sent);
            listener.setSoTimeout(3000);
            String rcvd ="";
            int count = 0;
            while (!is_cancel_call_or_stop)
            {
                try
                {
                    listener.receive(received_packet);
                    if (status == SV.Message_Type.OpenLine)//دي آخر حاجه هتحصل
                    {
                        status = SV.Message_Type.StartToReceive;
                        start_voice_chat();
                        return;
                    }
                     rcvd = new String(received_packet.getData(), 0, received_packet.getLength());
                    SV.Message_Type msg_typr = SV.Message_Type.GetValueFromString(rcvd.substring(0, rcvd.indexOf("|")));
                    if (msg_typr == SV.Message_Type.WaitCaller)//هنا المفروض ابعت الى اتنين اي بي
                    {
                        String ip_and_port = rcvd.substring(rcvd.lastIndexOf("|") + 1);
                        String[] ip_and_port_array = ip_and_port.split(":");


                        outString = SV.Message_Type.ImWaitCallerYou.getValue() + "|" + SV.contry_code_with_mogab + SV.mobile_num_without_first0;  //";//دي اللحظة اللي هيعرض فيها المستقبل شاشة الاتصال
                        bufx = outString.getBytes();

                        Packet_to_sent = new DatagramPacket(bufx, bufx.length, InetAddress.getByName(caller_local_ip), Integer.parseInt(caller_local_port));
                        listener.send(Packet_to_sent);

                        Packet_to_sent = new DatagramPacket(bufx, bufx.length, InetAddress.getByName(ip_and_port_array[0]), Integer.parseInt(ip_and_port_array[1]));
                        listener.send(Packet_to_sent);

                        status = msg_typr;
                        count = 0;//ابدأ العد من الاول على الحالة الجديد


                    }
                    else if (msg_typr == SV.Message_Type.CallCanceledByCaller || msg_typr == SV.Message_Type.EndCall)
                    {

                        EventBus.getDefault().post(new Event_objec(SV.Event_from_how_to_how.UDP.toString(),SV.Event_from_how_to_how.Ringing_class.toString(), SV.Message_Type.CallCanceledByCaller.name(), ""));
                        stop_Call();//وعادي لما نستدعيه مره تانية
                        return;
                    }

                    else if (msg_typr == SV.Message_Type.ImCallingYou)
                    {
                        if (status != msg_typr) //عشان لو اتبعتت قبل كده يفوت
                        {

                             ip_to_sent=received_packet.getAddress();
                             port_to_sent = received_packet.getPort();
                            String caller_phone = rcvd.substring(rcvd.lastIndexOf("|") + 1);
                            status = msg_typr;

                            //ابعتله رسالة قوله يرن
                            outString = SV.Message_Type.Ringing.getValue() + "|";

                            bufx = outString.getBytes();
                            Packet_to_sent = new DatagramPacket(bufx, bufx.length, received_packet.getAddress(), received_packet.getPort());
                            listener.send(Packet_to_sent);
                            //افتح شاشة استلام مكالمة


                            thread_loop_sent_keep();
//تشغيل الرنه
                            AudioManager am = (AudioManager) temp_context_to_pass_it.getSystemService(Context.AUDIO_SERVICE);
                            switch (am.getRingerMode())
                            {
                                case AudioManager.RINGER_MODE_SILENT:
                                    break;
                                case AudioManager.RINGER_MODE_VIBRATE:
                                    vibrate(60000);
                                    break;
                                case AudioManager.RINGER_MODE_NORMAL:
                                    play_tone(500, RingtoneManager.getDefaultUri(RingtoneManager.TYPE_RINGTONE), 50000);
                                    mySensorManager = (SensorManager) temp_context_to_pass_it.getSystemService(Context.SENSOR_SERVICE);
                                    myGravitySensor = mySensorManager.getDefaultSensor(Sensor.TYPE_GRAVITY);
                                    mySensorManager.registerListener(this, myGravitySensor, SensorManager.SENSOR_DELAY_NORMAL);
                                    break;
                            }

                            audioManager.setSpeakerphoneOn(true);

                            Intent intentx = new Intent(temp_context_to_pass_it, ringing_answer.class);
                            intentx.putExtra("phone_num", caller_phone);
                            intentx.putExtra("ringing_or_answer", "ringing");
                            intentx.putExtra("original_speaker", original_speaker);
                            intentx.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                            temp_context_to_pass_it.startActivity(intentx);


                            //مؤقتا افتح المكالمة علطول

                        }
                    }
                }
                catch (SocketTimeoutException ex)
                {
                    count++;
                    if (count < 20)
                    {
                        if (status == SV.Message_Type.WaitCaller)//هنا المفروض ابعت الى اتنين اي بي
                        {
                            String ip_and_port = rcvd.substring(rcvd.lastIndexOf("|") + 1);
                            String[] ip_and_port_array = ip_and_port.split(":");
                            outString = SV.Message_Type.ImWaitCallerYou.getValue() + "|" + SV.contry_code_with_mogab + SV.mobile_num_without_first0;  //";//دي اللحظة اللي هيعرض فيها المستقبل شاشة الاتصال
                            bufx = outString.getBytes();
                            Packet_to_sent = new DatagramPacket(bufx, bufx.length, InetAddress.getByName(caller_local_ip), Integer.parseInt(caller_local_port));
                            listener.send(Packet_to_sent);
                            Packet_to_sent = new DatagramPacket(bufx, bufx.length, InetAddress.getByName(ip_and_port_array[0]), Integer.parseInt(ip_and_port_array[1]));
                            listener.send(Packet_to_sent);
                        }
                        else
                        {
                            listener.send(Packet_to_sent);//هنا الرسالة اما تأخير في رد لسيرفر
                            //wait فسوف ابعث اليه من الاول محتاج مكالمة لذلك لن تتغير الرسالة
                            //i'm calling yout  وهنا هبعت الرسالة للمستقبل من الاول
                        }
                            continue;
                    }
                    else
                    {

                        EventBus.getDefault().post(new Event_objec(SV.Event_from_how_to_how.UDP.toString(),SV.Event_from_how_to_how.Ringing_class.toString(), "Error", "Error while connection server ."));
                        stop_Call();
                        return;
                    }
                }
            }
            if (is_cancel_call_or_stop == true) //هل وقف بسبب كنسلة المكالة ولا في رسالة ايجابية وصلت
            {
                stop_Call();
                return;
            }

            start_voice_chat();
        }
        catch (Exception ex)
        {
            if (ex.getMessage().contains("Unable to resolve host"))
            {
                EventBus.getDefault().post(new Event_objec(SV.Event_from_how_to_how.UDP.toString(),SV.Event_from_how_to_how.Ringing_class.toString(), "Error", "internet connection Error, check your connection."));
            }

            stop_Call();
        }
    }

    private BroadcastReceiver mMessageReceiver = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent)
        {
            String message = intent.getStringExtra("message");
            if( message.equals(SV.Message_Type.EndCall.toString()))
            {

                Log.e("aaaaaaaaaaaa", "event_close");
            Thread thread = new Thread(new Runnable() {
                @Override
                public void run() {
                if (!Packet_to_sent.getAddress().toString().contains(SV.server_ip))
                {
                    try
                    {
                        outString = SV.Message_Type.EndCall.getValue() + "|" + temp_msg_call_reject_by_recevier;
                        bufx = outString.getBytes();
                        Packet_to_sent = new DatagramPacket(bufx, bufx.length, received_packet.getAddress(), received_packet.getPort());

                        listener.send(Packet_to_sent);
                        Log.e("aaaaaaaaaaaa", "thread_close");
                        stop_Call();
                        Log.e("aaaaaaaaaaaa", "return_close");
                        return;
                    }
                    catch (Exception e)
                    {
                        Log.e("aaaaaaaaaaaa", "catch_close");
                        stop_Call();

                        e.printStackTrace();
                        return;
                    }
                }
                else
                {
                    Log.e("aaaaaaaaaaaa", "stop_close");
                    stop_Call();
                }

            }});
                thread.start();
            }

            // Get extra data included in the Intent
//            String message = intent.getStringExtra("message");
//            Log.d("receiver", "Got message: " + message);
        }
    };

    public void onEvent(Event_objec Event)
    {
        if(!Event.getTo_how().equals(SV.Event_from_how_to_how.UDP.toString()))
        {
            return;
        }
        String order=Event.getThe_order();

        if(order.equals(SV.Message_Type.OpenLine.name()))
        {
            status = SV.Message_Type.OpenLine;
            try
            {
                stop_play_file_ring_tone_viber_sinsor();
            }
            catch (Exception ex){}
        }

        else if( order.equals(SV.Message_Type.CallCanceledByReceiver.name()))//انا مستقبل//بغير الحالة وسوف تقوم thread_loop_sent_keep بالتعامل مع التغيير
        {
            status=SV.Message_Type.CallCanceledByReceiver;
        }
        else if( order.equals(SV.Message_Type.CallCanceledByReceiverWithMSG.name()))//بغير الحالة وسوف تقوم thread_loop_sent_keep بالتعامل مع التغيير
        {
            temp_msg_call_reject_by_recevier = Event.getContant();
            status = SV.Message_Type.CallCanceledByReceiverWithMSG;
        }
       else if(order.equals("change_mute"))
        {
            change_mute(Boolean.getBoolean( Event.getContant()));
        }
        else if( order.equals(SV.Message_Type.EndCall.toString()))//هذه لن تذهب للثريد وانا هنا متصل
        {
            Log.e("aaaaaaaaaaaa","event_close");
//            Thread thread = new Thread(new Runnable() {
//                @Override
//                public void run() {
                    if (!Packet_to_sent.getAddress().toString().contains(SV.server_ip))
                    {
                        try
                        {
                            outString = SV.Message_Type.EndCall.getValue() + "|"+temp_msg_call_reject_by_recevier;
                            bufx = outString.getBytes();
                            Packet_to_sent = new DatagramPacket(bufx, bufx.length, received_packet.getAddress(), received_packet.getPort());

                            listener.send(Packet_to_sent);
                            Log.e("aaaaaaaaaaaa","thread_close");
                            stop_Call();
                            Log.e("aaaaaaaaaaaa","return_close");
                            return;
                        }
                        catch (Exception e)
                        {
                            Log.e("aaaaaaaaaaaa","catch_close");
                            stop_Call();

                            Log.e("Bahgat", e.getMessage());
                            return;
                        }
                    }
            else
                    {
                        Log.e("aaaaaaaaaaaa", "stop_close");
                        stop_Call();
                    }

//                }
//            });
//            thread.start();



        }
//        Context context = getActivity();
//        Toast.makeText(getActivity(), testEvent.toString(), Toast.LENGTH_SHORT).show();
    }

    void thread_loop_sent_keep()//معايا في الاستلام
    {
        Thread thread_receive = new Thread(new Runnable()
        {
            @Override
            public void run()
            {
                int x = 0;
                try
                {
                    while (status != SV.Message_Type.StartToReceive)
                    {
                        x=x+5;
                        if (status == SV.Message_Type.OpenLine)//جايبه الاول عشان يفتح بسرعه فقط
                        {
                            outString = SV.Message_Type.OpenLine.getValue() + "|";
                            bufx = outString.getBytes();
                            Packet_to_sent = new DatagramPacket(bufx, bufx.length, received_packet.getAddress(), received_packet.getPort());
                            listener.send(Packet_to_sent);
                            Thread.sleep(5);//على بال ما اللسينر يستقبل اول باكيت صوت ويغير الحالة
                        }
                      else if (status == SV.Message_Type.CallCanceledByReceiver)//جايبه الاول عشان يفتح بسرعه فقط
                        {
                            outString = SV.Message_Type.CallCanceledByReceiver.getValue() + "|";
                            bufx = outString.getBytes();
                            Packet_to_sent = new DatagramPacket(bufx, bufx.length, received_packet.getAddress(), received_packet.getPort());
                            listener.send(Packet_to_sent);
                           stop_Call();
                            return;
                        }
                        else  if (status == SV.Message_Type.CallCanceledByReceiverWithMSG)//جايبه الاول عشان يفتح بسرعه فقط
                        {
                            outString = SV.Message_Type.CallCanceledByReceiverWithMSG.getValue() + "|"+temp_msg_call_reject_by_recevier;
                            bufx = outString.getBytes();
                            Packet_to_sent = new DatagramPacket(bufx, bufx.length, received_packet.getAddress(), received_packet.getPort());
                            listener.send(Packet_to_sent);
                            stop_Call();
                            return;
                        }

                        else if (status == SV.Message_Type.ImCallingYou)
                        {
                            if (x % 10000 == 0)
                            {
                                outString = SV.Message_Type.Ringing.getValue() + "|";
                                bufx = outString.getBytes();
                                Packet_to_sent = new DatagramPacket(bufx, bufx.length, received_packet.getAddress(), received_packet.getPort());
                                listener.send(Packet_to_sent);
                            }
                            Thread.sleep(5);
                        }

                    }
                }
                catch (Exception ex)
                {

                }
            }
        });
        thread_receive.start();


    }


    private void start_voice_chat()
    {
        try
        {

            LowLevelRecordAudio.receiver_ip = ip_to_sent;
            LowLevelRecordAudio.receiver_port = port_to_sent;

            thread_for_recoding = new Thread(recorder);
            thread_for_recoding.start();




            EventBus.getDefault().post(new Event_objec(SV.Event_from_how_to_how.UDP.toString(),SV.Event_from_how_to_how.Ringing_class.toString(), "StartTimer", ""));
            stop_play_file_ring_tone_viber_sinsor();
            //ابدأ التحدث
            while (!is_cancel_call_or_stop)
            {

                listener.receive(received_packet);
                play.play_put_in_queu(received_packet);
            }

        }
        catch (Exception ex)//خطر ابقى شوف التيم اوت المفروض يبقى كام هنا
        {
            EventBus.getDefault().post(new Event_objec(SV.Event_from_how_to_how.UDP.toString(),SV.Event_from_how_to_how.Ringing_class.toString(), "Error", ex.getMessage()));
            stop_Call();
        }
    }

    public void listen()
    {
        recorder = new LowLevelRecordAudio();
        play = new LowLevelPlayAudioStreem();



        try
        {
            SocketAddress ep = new InetSocketAddress(InetAddress.getLocalHost().getHostAddress(), SV.getPort__listen());
            try
            {
                listener = new DatagramSocket(SV.getPort__listen());
            }
            catch (SocketException e)
            {
                Log.d(SV.tag, "listen: "+e.getMessage());

              //  MessageBox.Show(e.getMessage(), "Error");
            }

            thread_for_recoding = new Thread(recorder);
            thread_for_recoding.start();

            is_cancel_call_or_stop = false;
            byte[] buf = new byte[2048];
            DatagramPacket receved_packet = new DatagramPacket(buf, buf.length);

            while (!is_cancel_call_or_stop)
            {
                listener.receive(receved_packet);
                play.play_put_in_queu(receved_packet);
            }

        }
        catch (Exception ex)
        {
            Log.e("Bahgat_when_listen", "" + ex.getMessage());
            stop_Call();

        }
    }


    public static void sent(byte[] encoded, int lenghtx, InetAddress ip, int port)
    {
        try
        {
            Packet_to_sent = new DatagramPacket(encoded, encoded.length, ip, port);
            Packet_to_sent.setData(encoded, 0, lenghtx);
            try
            {
                listener.send(Packet_to_sent);
            }
            catch (IOException e)
            {
                Log.d("Bahgat", "" + e.getMessage());
            }
        }
        catch (Exception e)
        {
            Log.d("Bahgat", "" + e.getMessage());
        }
    }


    public void change_mute(boolean nmute)
    {
        try
        {
            recorder.mute_voice(nmute);
        }
        catch (Exception ex){}
    }

    public void stop_Call()
    {
        is_cancel_call_or_stop = true;
        try
        {
            Log.e("aaaaaaaaaaaa","file_close");
            stop_play_file_ring_tone_viber_sinsor();
        }
        catch (Exception ex)
        {
         }
        try
        {
            Log.e("aaaaaaaaaaaa","play_to_close");
            play.Stop_play();
        }
        catch (Exception ex)
        {
            Log.d("Bahgat:play.Stop_play", "" + ex.getMessage());
        }
        try
        {
            Log.e("aaaaaaaaaaaa","record_close");
            recorder.Stop_recording();
        }
        catch (Exception ex)
        {
         }
        try
        {
            Log.e("aaaaaaaaaaaa","listener_close");
            listener.close();
        }
        catch (Exception ex)
        {
            Log.d("Bahgat:listener.close", "" + ex.getMessage());
        }
        try
        {
            Log.e("aaaaaaaaaaaa","litener_null_to_close");
            listener = null;
        }
        catch (Exception ex)
        {
            Log.d("Bahgat:listener = null", "" + ex.getMessage());
        }

//            EventBus.getDefault().post(new Event_objec(SV.Event_from_how_to_how.UDP.toString(), SV.Event_from_how_to_how.Ringing_class.toString(), "Resources have been release", ""));


        try
        {
            Log.e("aaaaaaaaaaaa","unregester_close");
            EventBus.getDefault().unregister(this);
        }
        catch (Exception ex)
        {
         }
        try{ LocalBroadcastManager.getInstance(temp_context_to_pass_it).unregisterReceiver(mMessageReceiver);}catch(Exception ex){}


        try
        {
            Log.e("aaaaaaaaaaaa","finalize_close");
            this.finalize();
        }
        catch (Throwable ex)
        {
            Log.d("Bahgat:this.finalize", "" + ex.getMessage());
        }
        try
        {
            Log.e("aaaaaaaaaaaa","gc_close");
            System.gc();
        }
        catch (Exception ex)
        {
            Log.d("Bahgat:System.gc", "" + ex.getMessage());
        }

        Log.e("aaaaaaaaaaaa","===================================");
    }

    public void vibrate(final int times )
    {
        is_vibrate_and_ring_canceled=false;
        new Thread()
        {
            @Override
            public void run()
            {
                myVibrator = (Vibrator)temp_context_to_pass_it.getSystemService(Context.VIBRATOR_SERVICE);
                long[] pattern = {0, 1000, 1000};
                for (int i = 0; i < times/1000/2; i++)
                {
                    try
                    {
                        if(!is_vibrate_and_ring_canceled)
                        {
                            myVibrator.vibrate(pattern, -1);
                            Thread.sleep(2000);
                        }
                        else
                        {
                            break;
                        }
                    }
                    catch (Exception e)
                    {
                        Log.e("Bahgat", e.getMessage());
                    }
                }

            }
        }.start();
    }
    private  void play_tone(final long count, final Uri ringtone, final int time )
    {



        TelephonyManager manager = (TelephonyManager)temp_context_to_pass_it.getSystemService(Context.TELEPHONY_SERVICE);

       int volum=0;
        if(manager.getPhoneType() == TelephonyManager.PHONE_TYPE_NONE)
        {
            volum=audioManager.getStreamVolume(AudioManager.STREAM_SYSTEM);
        }
        else
        {
            volum=  audioManager.getStreamVolume(AudioManager.STREAM_RING);
        }
        if (volum != 0)
        {

//        myringtone_player = RingtoneManager.getRingtone(temp_context_to_pass_it, ringtone);
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run()
            {
                try
                {
                    myringtone_player=new MediaPlayer();
                    myringtone_player.setDataSource(temp_context_to_pass_it, ringtone);
                    myringtone_player.setAudioStreamType(AudioManager.STREAM_MUSIC);
                    myringtone_player.setLooping(true);
                    myringtone_player.prepare();

                    if (myringtone_player != null)
                    {
                        long timeout = time;
                        for (long i = 0; i < count; ++i)
                        {
                            if (timeout <= 0)
                            {

                                stop_Call();
                                EventBus.getDefault().post(new Event_objec(SV.Event_from_how_to_how.UDP.toString(),SV.Event_from_how_to_how.Ringing_class.toString(), SV.Message_Type.CallCanceledByCaller.name(), ""));
                                return;
                            }
                            else if (is_vibrate_and_ring_canceled == true)
                            {
                                try{myringtone_player.stop();}catch (Exception ex){}
                                return;
                            }
                            else
                            {
                                myringtone_player.start();


                                while (myringtone_player.isPlaying() && (timeout > 0) && is_vibrate_and_ring_canceled == false)
                                {
                                    timeout = timeout - 1000;
                                    try
                                    {

                                        Thread.sleep(1000);
                                    }
                                    catch (InterruptedException e)
                                    {
                                    }
                                }
                                try
                                {
                                  stop_Call();
                                    EventBus.getDefault().post(new Event_objec(SV.Event_from_how_to_how.UDP.toString(),SV.Event_from_how_to_how.Ringing_class.toString(), SV.Message_Type.CallCanceledByCaller.name(), ""));
return;
                                }
                                catch (Exception e)
                                {
                                }

                            }
                        }
                    }
                }
                catch(Exception ex)
                {}
            }});
        thread.start();
        }


    }






    public void play_file(final long count,final int file_id,final int time)
    {
        try
        {
            AudioManager m_amAudioManager;
            m_amAudioManager = (AudioManager)temp_context_to_pass_it.getSystemService(Context.AUDIO_SERVICE);
            m_amAudioManager.setMode(AudioManager.MODE_IN_CALL);

            myPlayer = MediaPlayer.create(temp_context_to_pass_it, file_id);
//            myPlayer.prepare();//طالما عملت كرييت مينفعش تعمل بربير

            Thread thread = new Thread(new Runnable()
            {

                @Override
                public void run()
                {
                    try
                    {

                        // If phone is not set to silent mode
                        if (myPlayer != null)
                        {
                            long timeout = time;
                            for (long i = 0; i < count; ++i)
                            {
                                if (timeout <= 0)
                                {
                                    stop_Call();
                                }
                                else if (is_vibrate_and_ring_canceled == true)
                                {
                                    try{myPlayer.stop();}catch (Exception ex){}
                                    return;
                                }
                                else
                                {
                                    myPlayer.start();

                                    while (myPlayer.isPlaying() && (timeout > 0) && is_vibrate_and_ring_canceled == false)
                                    {
                                        timeout = timeout - 1000;
                                        try
                                        {
                                            Thread.sleep(1000);
                                        }
                                        catch (InterruptedException e)
                                        {
                                        }
                                    }

                                }
                            }
                        }

                    }
                    catch(Exception ex)
                    {

                    }
                }
            });
            thread.start();
        }
        catch (Exception ex)
        {
            ex.getMessage();
        }
    }

    public void stop_play_file_ring_tone_viber_sinsor()
    {
        is_vibrate_and_ring_canceled=true;
        try
        {
            Log.e("aaaaaaaaaaaa","s_0");
            mySensorManager.unregisterListener(this);
        }
        catch (Exception ex){}
        try
        {
            Log.e("aaaaaaaaaaaa","s_1");
            myPlayer.stop();
            myPlayer.release();
            myPlayer = null;
        }
        catch (Exception ex)
        {
        }
        try
        {
            Log.e("aaaaaaaaaaaa","s_2");
            myVibrator.cancel();
            myVibrator=null;
        }
        catch (Exception ex)
        {
        }
        try{ Log.e("aaaaaaaaaaaa","s_3");
            myringtone_player.stop();
            myringtone_player.release();
            myringtone_player=null;

        }catch(Exception ex){}


    }
    @Override
    public void onSensorChanged(SensorEvent event)
    {
        Sensor source = event.sensor;
        float z = event.values[2];
        if(source.getType() == Sensor.TYPE_GRAVITY)
        {

            if(z <= 0)
            {
                if(sinsor_status ==null)
                {
                    return;
                }
                else if(z <= -6)
                {
                    //اصبحت داون
//                    Log.d(TAG, "now screen is facing down.: z= :" + z);
                    stop_play_file_ring_tone_viber_sinsor();
                }

            }
            else if (z >= 0)
            {
                sinsor_status="up";
//                Log.d(TAG, "now screen is facing up.: z= :"+z );
            }

        }
    }

    @Override
    public void onAccuracyChanged(Sensor sensor, int accuracy)
    {

    }
}



