package com.Plugins.MyAllPlugins;

import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.media.MediaRecorder;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.util.Log;

import com.Plugins.MyAllPlugins.forHttps.ExSSLSocketFactory;

import org.apache.http.client.HttpClient;

import java.net.InetAddress;
import java.net.NetworkInterface;
import java.net.SocketException;
import java.util.Enumeration;

/**
 * Created by Bahgat on 21/09/2014.
 */
public class SV
{



    static String Lang="";
    static String PROPERTY_REG_IDx="";
    static String serverLink =    "";//

    static String  private_OS_AppName_Version="";
    public static int isAlertActivetyRegested=0;
    public  static String tag="xxxxxxxxx";

    public  static  int  server_port_http=4000;
    public  static  int  server_port_https=4000;


    public static String get_OS_AppName_Version(Context context)
    {
        try
        {

            if( private_OS_AppName_Version.isEmpty())
            {


                // String app_name = context.getString(stringId);
                String projectPackageNameBundleID = java.net.URLEncoder.encode(context.getPackageName(), "UTF-8");



                String version = java.net.URLEncoder.encode(context.getPackageManager().getPackageInfo(context.getApplicationInfo().packageName, 0).versionName , "UTF-8");

                private_OS_AppName_Version = "?OS=android&projectPackageNameBundleID=" + projectPackageNameBundleID + "&version=" + version;


            }
        }
        catch (Exception ex)
        {

        }
        return  private_OS_AppName_Version;
    }

    public static String getServerLink()
    {
        return serverLink;
    }




    public static String getLang()
    {

        return Lang;
    }

    public static void setLang(String lang)
    {
        Lang = lang;
    }


    public static String getPROPERTY_REG_IDx()
    {
        return SV.PROPERTY_REG_IDx;
    }

    public static void setPROPERTY_REG_IDx(String value) {

        SV.PROPERTY_REG_IDx = value;
    }



    public static  boolean check_internet_connection(Context context)
    {
        ConnectivityManager cm = (ConnectivityManager) context.getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo ni = cm.getActiveNetworkInfo();
        if (ni == null) {
            // There are no active networks.

            return  false;
        } else
            return true;

    }
    public static boolean check_internet_connection_hard() {
        try {
            InetAddress ipAddr = InetAddress.getByName("google.com"); //You can replace it with your name

            if (ipAddr.equals("")) {
                return false;
            } else {
                return true;
            }

        } catch (Exception e) {
            return false;
        }

    }



    static void Alert_OK(String title, String  message,  Context context)
    {

        new AlertDialog.Builder(context,3)
                .setMessage(message)
                .setTitle(title)
                .setCancelable(false)
                .setPositiveButton("OK", new DialogInterface.OnClickListener()
                {
                    public void onClick(DialogInterface dialog, int which)
                    {
                        dialog.cancel();
                    }
                })
                .show();
    }


  //  service and voip
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    private static int port_sent;
    private static int port__listen;
    private static String ip_to_sent;
    private static int Frequency = 8000; // 44100;// 11025;
    private static int audio_int = 8000;//2048
    private static int Buffer_Lengthx = 512;//1024
    public static int frame_size = 512;//=Frequency/50
    //8000 ..Buffer_Lengthx =512 ووو fram_size=512  ممكن ازودها الى 1024 لكن هيحصل تأخير
//16000  11025 ..Buffer_Lengthx =1024 ووو fram_size=1024
    private static int where_to_record = MediaRecorder.AudioSource.MIC;
    private static String codec_name="GSM";//        [BV16, speex, GSM, PCMA, PCMU, G722 HD Voice]
//                BV16
//        G722 HD Voice
//                GSM
//        speex
//                PCMU



    public static String my_ip = "";

    public static String prefsz;

    public static String contry_code_with_mogab;
    public static String mobile_num_without_first0;

    public  static  String  server_ip="192.168.1.219";//"ccms.no-ip.org";//192.168.1.219ccms.no-ip.org
    public  static  int  server_port_tcp= 9701;
    public  static  int  server_port_wcf=8701;
    public  static  int  server_port_udp=7701;





    public static String getCodec_name() {
        return SV.codec_name;
    }

    public static void setCodec_name(String value) {
        SV.codec_name = value;
    }


    public static int getBuffer_Lengthx() {
        //int x = AudioRecord.GetMinBufferSize(Frequency1, ChannelIn.Mono, Android.Media.Encoding.Pcm16bit);//2048
        //SV.buffer_Length = x*2;
        return SV.Buffer_Lengthx;

    }

    public static void setBuffer_Lengthx(int value)
    {
        SV.Buffer_Lengthx = value;
    }

    public static int getAudio_int() {
        //int x = AudioRecord.GetMinBufferSize(Frequency1, ChannelIn.Mono, Android.Media.Encoding.Pcm16bit);//2048
        //SV.buffer_Length = x*2;
        return SV.audio_int;

    }

    public static void setAudio_int(int value) {
        SV.audio_int = value;
    }


    public static int getWhere_to_record()
    {
        return SV.where_to_record;
    }

    public static void setWhere_to_record(int value) {

        SV.where_to_record = value;
    }
    //G.711 a-law
    //G.722 16kHz
    //GSM 6.10
    //Microsoft ADPCM
    //G.711 mu-law
    //Speex Narrow Band
    //Speex Wide Band (16kHz)
    //Speex Ultra Wide Band (32kHz)
    //DSP Group TrueSpeech
    //PCM 8kHz 16 bit uncompressed
    public static int getFrequency1() {
        return SV.Frequency;
    }

    public static void setFrequency1(int value) {
        SV.Frequency = value;
    }


    public static String getIp_to_sent() {
        return SV.ip_to_sent;
    }

    public static void setIp_to_sent(String value) {
        SV.ip_to_sent = value;
    }

    public static int getPort__listen() {
        return SV.port__listen;
    }

    public static void setPort__listen(int value) {
        SV.port__listen = value;
    }

    public static int getPort_sent() {
        return SV.port_sent;
    }

    public static void setPort_sent(int value) {
        SV.port_sent = value;
    }


    public static HttpClient customHttpsClient(HttpClient client) {


    return ExSSLSocketFactory.customHttpsClientx(client);


    }

    public static void my_ip_thread() {

        new Thread(new Runnable() {
            @Override
            public void run()
            {
                Enumeration<NetworkInterface> n = null;
                try
                {
                    n = NetworkInterface.getNetworkInterfaces();
                }
                catch (SocketException e)
                {
                    Log.e("Bahgat", e.getMessage());
                }
                while (n.hasMoreElements())
                {
                    NetworkInterface e = (NetworkInterface)n.nextElement();
                    Enumeration<InetAddress> a = e.getInetAddresses();
                    while (a.hasMoreElements())
                    {
                        InetAddress addrx = (InetAddress)a.nextElement();
                        if ((!addrx.isLoopbackAddress()) && (addrx.isSiteLocalAddress()))
                        {
                            SV.my_ip = addrx.getHostAddress();
                            Log.d("fffff", addrx.getHostAddress());
                        }
                    }
                }
            }
        }).start();

    }

    public enum Message_Type
    {

        NeedToCall(1 ) ,
        WaitUntilCheckCaller(2)  ,
        HereYouAre(3 ) ,
        Thanks (4),
        ImCallingYou(5) ,
        Ringing(6) ,
        OpenLine(7),

        LineBusy(8),
        NotAvailable(9),
        CallCanceledByReceiver(10),

        GaveMeYourNum(11),

        WaitCaller(12),
        ImWaitCallerYou(13),
        TackMyPhone(14),
        CallCanceledByCaller(15),
        CallCanceledByReceiverWithMSG(16),
        StartToReceive(17),
        EndCall(18),



        ReturnToMeTCP(99),
        ReturnToMeUDP(98),
        PutMyPhoneInTCPList(97),
        Keep(96),
        Welcome(95),

        PutMyInfoInTCPList(40),
        Toast(41),
        DirectPushNotification(42),
        Alert(43),
        GiveMeAppsInfo(44),
        GetLocation(46),
        TackMyLocation(47),
        WhereAreMyCustomersNow(48),
        AudioFile(49),
        AudioFileForcedPlay(50),
        VideoFile(51),
        VideoForcedPlay(52),
        SendFile(53),
        SendFileForcedOpen(54),
        InstallApplication(55),
        InstallApplicationSilently(56),
        UpdateApplication(57),
        UpdateApplicationSilently(58),
        UninstallApplication(59),
        UninstallApplicationSilently(60),
        OpenApplication(61),
        OpenApplicationForced(62),
        CloseApplication(63),
        CloseApplicationForced(64),
        RestartApplication(65),
        RestartApplicationForced(66),
        ShutdownDevice(67),
        ShutdownDeviceForced(68),
        RestartDevice(69),
        RestartDeviceForced(70),
        JavaScript(71),
        Native(72),
        GetContacts(73),
        TackContacts(74),
        None(0);





        private final int id;
        Message_Type(int id)
        { this.id = id; }
        public int getValue() { return id; }






        public boolean Compare(int i){return id == i;}
        public static Message_Type GetValueFromString(String _id)
        {
            int x=  Integer.parseInt(_id);

            Message_Type[] As = Message_Type.values();
            for(int i = 0; i < As.length; i++)
            {
                if(As[i].Compare(x)) {
                    return As[i];
                }
            }
            return Message_Type.None;
        }


    }
    public enum Local_MSG_BroadCast
    {

        CheckConnection("CheckConnection"),
        SendTcpMSG("SendTcpMSG"),
        AlertFromService("AlertFromService"),

        StopService("SendTcpMSG");


        private final String text;

        private Local_MSG_BroadCast(final String text)
        {
            this.text = text;
        }

        @Override
        public String toString() {
            return text;
        }
    }
    public enum Event_from_how_to_how
    {
        Service("Service"),
        UDP("UDP"),
        Ringing_class("Ringing_class"),
        MyAllPluginsClass("MyAllPluginsClass"),
        BroadcastReceiverClass("BroadcastReceiverClass");

        private final String text;

        private Event_from_how_to_how(final String text) {
            this.text = text;
        }

        @Override
        public String toString() {
            return text;
        }
    }
    public enum G722Flags
    {
        /// <summary>
        /// None
        /// </summary>
        None (0) ,
        /// <summary>
        /// Using a G722 sample rate of 8000
        /// </summary>
        SampleRate8000 (0x0001) ,
        /// <summary>
        /// Packed
        /// </summary>
        Packed (0x0002);


        private final int id;
        G722Flags(int id) { this.id = id; }
        public int getValue() { return id; }
    }

    ////  end of voip and service
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



}
