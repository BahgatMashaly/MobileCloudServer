package com.Plugins.MyAllPlugins.voip;

import android.media.AudioFormat;
import android.media.AudioRecord;
import android.util.Log;

import com.Plugins.MyAllPlugins.SV;
import com.Plugins.MyAllPlugins.Service.IActionListener;

import org.sipdroid.codecs.Codec;

import java.net.InetAddress;
import java.util.Random;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;

/**
 * Created by Bahgat on 3/9/14.
 */
class LowLevelRecordAudio implements Runnable
{
    public static InetAddress receiver_ip;
    public static int receiver_port = 0;
    private final BlockingQueue<short[]> sent_PacketsQueue2_record = new LinkedBlockingQueue<short[]>();
    private Codec my_codec;
    private AudioRecord record = null;
    private boolean running = false;
    private Thread packetQueueConsumerThread_record;
    private IActionListener listener_action;
    private short[] lin;
    private int num;
    private int mu;
    private int frame_rate;
    private Random random;
    private double smin = 200, s;
    private int nearend;
    private boolean muted=false;
    private byte[]  buffer;

    @Override
    public void run()
    {
        start_recording();
    }

    public void addActionListener_like_EventHandler(IActionListener l)
    {
        // لو استخدمت this
        //معنى ذلك ان اوبجكت كبير سوف يخزن هنا حتى اغلق الشاشة لذلك الافضل عمل كلاس فيها المثود المطلوب تنفيذها فقط

        //listeners.Add(l);
        listener_action = l;
    }

    void notify_all()
    {
        String xx = "i'm start recording";
        listener_action.actionPerformed_like_notfy_all(xx);

    }


// <editor-fold defaultstate="collapsed" desc="Your Fold Comment">

    private void calc(short[] lin, int off, int len)
    {
        int i, j;
        double sm = 30000, r;

        for (i = 0; i < len; i += 5)
        {
            j = lin[i + off];
            s = 0.03 * Math.abs(j) + 0.97 * s;
            if (s < sm)
            {
                sm = s;
            }
            if (s > smin)
            {
                nearend = 3000 * mu / 5;
            }
            else if (nearend > 0)
            {
                nearend--;
            }
        }
        r = (double) len / (100000 * mu);
        if (sm > 2 * smin || sm < smin / 2)
        {
            smin = sm * r + smin * (1 - r);
        }
    }

    private void calc1(short[] lin, int off, int len)
    {
        int i, j;

        for (i = 0; i < len; i++)
        {
            j = lin[i + off];
            lin[i + off] = (short) (j >> 2);
        }
    }

    private void calc2(short[] lin, int off, int len)
    {
        int i, j;

        for (i = 0; i < len; i++)
        {
            j = lin[i + off];
            lin[i + off] = (short) (j >> 1);
        }
    }

    private void calc10(short[] lin, int off, int len)
    {
        int i, j;

        for (i = 0; i < len; i++)
        {
            j = lin[i + off];
            if (j > 16350)
            {
                lin[i + off] = 16350 << 1;
            }
            else if (j < -16350)
            {
                lin[i + off] = -16350 << 1;
            }
            else
            {
                lin[i + off] = (short) (j << 1);
            }
        }
    }

    private void noise(short[] lin, int off, int len, double power)
    {
        int i, r = (int) (power * 2);
        short ran;

        if (r == 0)
        {
            r = 1;
        }
        for (i = 0; i < len; i += 4)
        {
            ran = (short) (random.nextInt(r * 2) - r);
            lin[i + off] = ran;
            lin[i + off + 1] = ran;
            lin[i + off + 2] = ran;
            lin[i + off + 3] = ran;
        }
    }
    // </editor-fold>

    //التسجيل
    private void start_recording()
    {
        try
        {
            record.startRecording();
            while (running)
            {
                num = record.read(lin, 0, my_codec.frame_size());///////////////////////////////////////////////////////////////

                gave_me_record_in_short(lin.clone(), num);
             //   sent_withot_que(lin,num);
            }
        }
        catch (Exception ex)
        {
            Log.e("bbbbb",ex.getMessage());
        }
    }


    public void setup_recording(Codec the_codec)//الخطوة الثانية تحضير
    {
        if (record != null)
        {
            record.stop();
            record.release();

        }
        my_codec = the_codec;

        //VoiceRecognition  سريعة بيقولوا من اول ايس كريم سندوتش وبتعمل فتلر كويس للضوضاء
        //voicecall بعض التليفونات لا تدعمه , لكنه نقي جدا ولكنه فيه تأخير حوالي ثانية او ثانية ونصف
        //mic فيه وش جامد

        packetQueueConsumerThread_record = new Thread(new Runnable()
        {
            @Override
            public void run()
            {
                CreateFramesFromPacketsInPacketQueue();
            }
        });
        packetQueueConsumerThread_record.start();
        int micgain = 0;
        running = true;
        buffer = new byte[my_codec.frame_size()];
        android.os.Process.setThreadPriority(android.os.Process.THREAD_PRIORITY_URGENT_AUDIO);
        mu = my_codec.samp_rate() / 8000;
        int min = AudioRecord.getMinBufferSize(my_codec.samp_rate(), AudioFormat.CHANNEL_IN_MONO, AudioFormat.ENCODING_PCM_16BIT);

        if (min == 640)
        {
            if (SV.frame_size == 960)
            {
                SV.frame_size = 320;
            }
            if (SV.frame_size == 1024)
            {
                SV.frame_size = 160;
            }
            min = 4096 * 3 / 2;
        }
        else if (min < 4096)
        {
            if (min <= 2048 && SV.frame_size == 1024)
            {
                SV.frame_size /= 2;
            }
            min = 4096 * 3 / 2;
        }
        else if (min == 4096)
        {
            min *= 3 / 2;
            if (SV.frame_size == 960)
            {
                SV.frame_size = 320;
            }
        }
        else
        {
            if (SV.frame_size == 960)
            {
                SV.frame_size = 320;
            }
            if (SV.frame_size == 1024)
            {
                SV.frame_size *= 2;
            }
            /**
             * Modified by the Mconf team
             * this parameter is to avoid the log message "RecordThread: buffer overflow"
             */
            min *= 2;
        }

        frame_rate = my_codec.samp_rate() / SV.frame_size;
        long frame_period = 1000 / frame_rate;
        frame_rate *= 1.5;
        lin = new short[my_codec.frame_size()];
        random = new Random();
int xx=my_codec.samp_rate();
        record = new AudioRecord(SV.getWhere_to_record(), my_codec.samp_rate(), AudioFormat.CHANNEL_IN_MONO, AudioFormat.ENCODING_PCM_16BIT, min);
        micgain = (int) (((float) 1.0) * 10);
    }

void sent_withot_que(short[] linx, int num)
{

    byte[] bufferx = new byte[my_codec.frame_size()];
    if(num < 0  || num == AudioRecord.ERROR_BAD_VALUE || num == AudioRecord.ERROR_INVALID_OPERATION)
    {
        return;
    }
    try
    {
        int num_encode = my_codec.encode(linx, 0, bufferx, my_codec.frame_size());
        if(muted)
        {
            bufferx=new byte[bufferx.length];
        }
        udp_listen_And_sent_socket.sent(bufferx, num_encode, receiver_ip, receiver_port);// ارسال ثم ديكود ثم تشغيل
    }
    catch (Exception e)
    {
//                    Log.d("Bahgat", e.getMessage());
    }
}
    private void gave_me_record_in_short(short[] lin, int num)
    {
        if(num < 0  || num == AudioRecord.ERROR_BAD_VALUE || num == AudioRecord.ERROR_INVALID_OPERATION)
        {
            return;
        }

        try
        {
           sent_PacketsQueue2_record.put(lin);
        }
        catch (Exception e)
        {
            Log.d("Bahgat", e.getMessage());
        }
    }

    private void CreateFramesFromPacketsInPacketQueue()   //ثريد لعمل نسختين من البايتس
    {
        short[] linx = null;
        byte[] bufferx = new byte[my_codec.frame_size()];
        while (running)
        {
            if (sent_PacketsQueue2_record.size() > 5 )
            { try
            {

//               sent_PacketsQueue2_record.clear();
            }catch (Exception ex){}

            }
            if (sent_PacketsQueue2_record.size() > 0)
            {
                try
                {
                    linx = sent_PacketsQueue2_record.take();

                    int num_encode = my_codec.encode(linx, 0, bufferx, my_codec.frame_size());
                    if(muted)
                    {
                        bufferx=new byte[bufferx.length];
                    }
                   udp_listen_And_sent_socket.sent(bufferx, num_encode, receiver_ip, receiver_port);// ارسال ثم ديكود ثم تشغيل
                }
                catch (Exception e)
                {
//                    Log.d("Bahgat", e.getMessage());
                }
            }
            else
            {
                try
                {
                    Thread.sleep(50);
                }
                catch (Exception e)
                {
                    Log.d("Bahgat", e.getMessage());
                }
            }
        }
    }

    public   void  mute_voice( boolean mute)
    {
        muted=mute;
    }

    public void Stop_recording()
    {
        running = false;
        if (record != null)
        {
            try{record.stop();}catch (Exception ex){}
            try{record.release();}catch (Exception ex){}
            try{record = null;}catch (Exception ex){}
            try{System.gc();}catch (Exception ex){}
        }
    }

}

