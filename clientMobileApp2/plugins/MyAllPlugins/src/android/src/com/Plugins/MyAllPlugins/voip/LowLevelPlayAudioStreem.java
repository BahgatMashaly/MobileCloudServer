package com.Plugins.MyAllPlugins.voip;

import android.media.AudioFormat;
import android.media.AudioTrack;
import android.util.Log;

import com.Plugins.MyAllPlugins.SV;

import org.sipdroid.codecs.Codec;

import java.net.DatagramPacket;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;

/**
 * Created by Bahgat on 3/9/14.
 */
public class LowLevelPlayAudioStreem {

    private AudioTrack audioTrack = null;
    private final BlockingQueue<byte[]> PacketsQueue2_to_play = new LinkedBlockingQueue<byte[]>();
    private Thread packetQueueConsumerThread_to_play;
    Codec my_codec;
    int codec_160_or230;
    boolean is_playing;

    public final void setup_play(final int  voice_call_or_music_speaker,Codec the_codec) {

        my_codec=the_codec;
        is_playing = true;
        packetQueueConsumerThread_to_play = new Thread(new Runnable() {
            @Override
            public void run() {
                CreateFramesFromPacketsInPacketQueue();
            }
        });
        packetQueueConsumerThread_to_play.start();

                audioTrack = new AudioTrack(voice_call_or_music_speaker, my_codec.samp_rate(), AudioFormat.CHANNEL_OUT_MONO, AudioFormat.ENCODING_PCM_16BIT, SV.getAudio_int(), AudioTrack.MODE_STREAM);
                audioTrack.play();
        Log.e("aaaaaaaaaaaa","open");


    }



    public final void play_put_in_queu(DatagramPacket gram) {

        codec_160_or230 = gram.getLength();
        byte[] destnation = new byte[gram.getLength()];
        System.arraycopy(gram.getData(), 0, destnation, 0, gram.getLength());

        try {
            PacketsQueue2_to_play.put(destnation.clone());
        } catch (Exception e) {
            Log.d("Bahgat", e.getMessage());
        }


    }


    void CreateFramesFromPacketsInPacketQueue() //ثريد لعمل نسختين من البايتس
    {
        byte[] destnation;

        while (is_playing) {
            if (PacketsQueue2_to_play.size() > 5) {
//                PacketsQueue2_to_play.clear();
            }
            if (PacketsQueue2_to_play.size() > 0) {


                try {
                    destnation = PacketsQueue2_to_play.take();

                    decode_then_play(destnation, destnation.length);

                } catch (Exception e)
                {
//                    Log.d("Bahgat", e.getMessage());
                }


            } else {
                try {
                    Thread.sleep(5);
                } catch (InterruptedException e) {
                    Log.d("Bahgat", e.getMessage());
                }
            }
        }
Log.e("bbb","");

    }

    public void decode_then_play(byte[] bufferx, int num_encode) {
        try
        {
            short[] lin2 = new short[5000];//num
            int len = my_codec.decode(bufferx, lin2, codec_160_or230);

            audioTrack.write(lin2, 0, len);
        }
        catch (Exception ex)
        {
             Log.e("aaaaaaaaaaaa","error in decode and play "+ ex.getMessage());
        }
    }



    public void Stop_play()
    {
        is_playing = false;

        try
        {
            Log.e("aaaaaaaaaaaa","audioTrack_to_flush");
            audioTrack.flush();}catch (Exception ex)
        {
            Log.e("aaaaaaaaaaaa",ex.getMessage());
        }
            try
            {
                Log.e("aaaaaaaaaaaa","audioTrack_to_stop");
                audioTrack.stop();}catch (Exception ex)
            {
                Log.e("aaaaaaaaaaaa",ex.getMessage());
            }
            try{Log.e("aaaaaaaaaaaa","audioTrack_to_relase");
                audioTrack.release();}catch (Exception ex){Log.e("aaaaaaaaaaaa",ex.getMessage());}
            try{Log.e("aaaaaaaaaaaa","audioTrack_to_null");
                audioTrack = null;}catch (Exception ex){Log.e("aaaaaaaaaaaa",ex.getMessage());}
//
            try{Log.e("aaaaaaaaaaaa","audioTrack_finalize");this.finalize();}catch (Throwable throwable){Log.e("aaaaaaaaaaaa",throwable.getMessage());}
            try{Log.e("aaaaaaaaaaaa","audioTrack_gc"); System.gc();}catch (Exception ex){Log.e("aaaaaaaaaaaa",ex.getMessage());}
        Log.e("aaaaaaaaaaaa","close");
    }



}
