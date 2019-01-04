package com.Plugins.MyAllPlugins.voip;

import android.app.Activity;
import android.app.AlertDialog;
import android.bluetooth.BluetoothAdapter;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.media.AudioManager;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.support.v4.content.LocalBroadcastManager;
import android.util.Log;
import android.view.ContextMenu;
import android.view.KeyEvent;
import android.view.MenuItem;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.view.inputmethod.EditorInfo;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.Plugins.MyAllPlugins.SV;
import com.Plugins.MyAllPlugins.Service.Event_objec;
import com.tedata.test.R;

import de.greenrobot.event.EventBus;


public class ringing_answer extends Activity
{

    private String phone_num;
    private String phone_name;
    private String ringing_or_answer_first;


    private boolean is_stoped_call = false;
    private  TextView txt_time_Answer;

    boolean is_vibrate_and_ring_canceled=false;
    MediaPlayer myPlayer;


    StopWatch my_stop_watch = new StopWatch();
    final int REFRESH_RATE = 1000;
    final int MSG_START_TIMER = 0;
    final int MSG_STOP_TIMER = 1;
    final int MSG_UPDATE_TIMER = 2;
    AudioManager audioManager;

    boolean mute=false;
    boolean headset=false;
    boolean speaker=false;
    boolean original_speaker;

    @Override
    protected void onCreate(Bundle savedInstanceState)
    {

        super.onCreate(savedInstanceState);
        this.requestWindowFeature(Window.FEATURE_NO_TITLE);
        setContentView(R.layout.ringing_answer);

        audioManager = (AudioManager) this.getSystemService(Context.AUDIO_SERVICE);
            EventBus.getDefault().register(this);
            txt_time_Answer = (TextView) findViewById(R.id.txt_time_Answer);
            phone_num = getIntent().getExtras().getString("phone_num");
            phone_name = getIntent().getExtras().getString("phone_name");
        original_speaker = getIntent().getExtras().getBoolean("original_speaker");
            if(phone_name==null || phone_name.equals(""))
            {
                phone_name= get_caller_name_by_num(phone_num);
            }
//            showNotification(phone_name);
            ringing_or_answer_first = getIntent().getExtras().getString("ringing_or_answer");

            if (ringing_or_answer_first.equals("mack_Call"))
            {

                ((LinearLayout) findViewById(R.id.lin_answer)).setVisibility(LinearLayout.VISIBLE);
                ((LinearLayout) findViewById(R.id.lin_ringing)).setVisibility(LinearLayout.GONE);
            }
            else
            {
                WindowManager wm = (WindowManager)getSystemService(Context.WINDOW_SERVICE);

                Window window = getWindow();
                window.addFlags(WindowManager.LayoutParams.FLAG_DISMISS_KEYGUARD);
                window.addFlags(WindowManager.LayoutParams.FLAG_SHOW_WHEN_LOCKED);
                window.addFlags(WindowManager.LayoutParams.FLAG_TURN_SCREEN_ON);

                ((LinearLayout) findViewById(R.id.lin_answer)).setVisibility(LinearLayout.GONE);
                ((LinearLayout) findViewById(R.id.lin_ringing)).setVisibility(LinearLayout.VISIBLE);
                registerForContextMenu(findViewById(R.id.btn_Reject_with_message_ringing));



            }

            ((TextView) findViewById(R.id.txt_num_answer)).setText(phone_num);
            ((TextView) findViewById(R.id.txt_name_answer)).setText(phone_name);
            ((TextView) findViewById(R.id.txt_num_ringing)).setText(phone_num);
            ((TextView) findViewById(R.id.txt_name_ringing)).setText(phone_name);
              audioManager = (AudioManager) this.getSystemService(Context.AUDIO_SERVICE);



        AllClicks();


        //تغييرها عشان لو متأثره بالمكالمة اللي فاتت



    }
    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
      try{outState.putBoolean("headset",   headset);}catch(Exception ex){}
        try{outState.putBoolean("speaker",  speaker);}catch(Exception ex){}
        try{outState.putBoolean("mute",  mute);}catch(Exception ex){}
        try{outState.putBoolean("original_speaker",  original_speaker);}catch(Exception ex){}



    }

    @Override
    protected void onRestoreInstanceState(Bundle savedInstanceState) {
        super.onRestoreInstanceState(savedInstanceState);


    }
    // </editor-fold>
    @Override
    public void onWindowFocusChanged(boolean hasFocus)
    {
        // TODO Auto-generated method stub
        super.onWindowFocusChanged(hasFocus);


//            change_mute(null,  mute   );
//            change_Bluetooth(null, headset    );

    }
    private void AllClicks()
    {
        View.OnClickListener click = new View.OnClickListener()
        {
            @Override
            public void onClick(View arg0)
            {
                switch (arg0.getId())
                {
                    case R.id.btn_end_call_Answer://انا الاثنين
                    {

//    EventBus.getDefault().post(new Event_objec(SV.Event_from_how_to_how.Ringing_class.name(), SV.Event_from_how_to_how.UDP.name(), SV.Message_Type.EndCall.toString(), ""));
                        Intent intent = new Intent("event_from_ringing_answer_to_udp");
                        intent.putExtra("message",SV.Message_Type.EndCall.toString());
                        LocalBroadcastManager.getInstance(ringing_answer.this).sendBroadcast(intent);
void_end_call();
//                        txt_time_Answer.setText("Closing connection.");
//                        txt_time_Answer.setTextColor(Color.RED);
                        break;
                    }
                    case R.id.tog_btn_speaker_answer://انا الاتنين
                    {

                        change_speaker(null);
                        break;
                    }
                    case R.id.tog_btn_mute_answer://انا الاتنين
                    {
                        change_mute(null);
                        break;
                    }
                    case R.id.tog_btn_head_set_answer://انا الاتنين
                    {
                        change_Bluetooth(null);
                        break;
                    }

                    case R.id.btn_answer_ringing://انا مستقبل
                    {

                        is_vibrate_and_ring_canceled=true;
                        EventBus.getDefault().post(new Event_objec(SV.Event_from_how_to_how.Ringing_class.name(),SV.Event_from_how_to_how.UDP.name(), SV.Message_Type.OpenLine.name(),""));

                        ((LinearLayout) findViewById(R.id.lin_answer)).setVisibility(LinearLayout.VISIBLE);
                        ((LinearLayout) findViewById(R.id.lin_ringing)).setVisibility(LinearLayout.GONE);
                        try{ mHandler.sendEmptyMessage(MSG_START_TIMER);}catch(Exception ex){}


                        break;
                     }

                    case R.id.btn_reject_ringing://انا مستقبل
                    {

                        is_stoped_call=true;
                        is_vibrate_and_ring_canceled=true;
                        EventBus.getDefault().post(new Event_objec(SV.Event_from_how_to_how.Ringing_class.name(), SV.Event_from_how_to_how.UDP.name(),SV.Message_Type.CallCanceledByReceiver.name(),""));
                        void_end_call();
                        break;
                    }

                    case R.id.btn_Reject_with_message_ringing://انا مستقبل
                    {
                        openContextMenu((ImageButton)findViewById(R.id.btn_Reject_with_message_ringing));
                    }

                }
            }
        };

        findViewById(R.id.btn_end_call_Answer).setOnClickListener(click);
        findViewById(R.id.tog_btn_speaker_answer).setOnClickListener(click);
        findViewById(R.id.tog_btn_mute_answer).setOnClickListener(click);
        findViewById(R.id.tog_btn_head_set_answer).setOnClickListener(click);
        findViewById(R.id.btn_answer_ringing).setOnClickListener(click);
        findViewById(R.id.btn_reject_ringing).setOnClickListener(click);
        findViewById(R.id.btn_Reject_with_message_ringing).setOnClickListener(click);



    }

    public void onEventMainThread( final Event_objec event)
    {
        if(!event.getTo_how().equals(SV.Event_from_how_to_how.Ringing_class.toString()))
        {
            return;
        }
      final String Title=event.getThe_order();
        if (Title.equals("Resources have been release"))
        {
if(myPlayer==null)
{
    void_end_call();
}
          else  if(!myPlayer.isPlaying())
            {
                void_end_call();
            }
        }
       else if (Title.equals(SV.Message_Type.LineBusy.name())|| Title.equals(SV.Message_Type.CallCanceledByReceiverWithMSG.name()) || Title.equals(SV.Message_Type.CallCanceledByReceiver.name()) || Title.equals(SV.Message_Type.NotAvailable.name())|| Title.equals(SV.Message_Type.CallCanceledByCaller.name())  || Title.equals("Error"))
        {
            is_stoped_call = true;

            new Thread()
            {
                public void run()
                {
                    ringing_answer.this.runOnUiThread(new Runnable()
                    {
                        public void run()
                        {
                            String dialog_titel="";
                            String dialog_msg="";
                            if(Title== SV.Message_Type.LineBusy.name())//انا متصل
                            {
                                dialog_titel="Line Busy";

                               dialog_msg = "Number is busy.";
                              play_file(1,R.raw.busy,5000);
                            }
                            else if(Title== SV.Message_Type.CallCanceledByReceiver.name())//انا متصل
                            {
                                dialog_titel="Call Canceled";
                                dialog_msg=phone_name +" Canceled the call.";
                               play_file(1,R.raw.busy,5000);
                            }
                            else if(Title== SV.Message_Type.CallCanceledByReceiverWithMSG.name())//انا متصل
                            {
                                dialog_titel="Call Canceled";
                                dialog_msg=phone_name +" : "+ event.getContant();
                                play_file(1,R.raw.busy,5000);
                            }
                            else if(Title== SV.Message_Type.NotAvailable.name())//انا متصل
                            {
                                dialog_titel="Not available";
                                dialog_msg="The Number you have called is not available at the a moment.";
                                play_file(5,R.raw.disconnect,5000);
                              }
                            else if(Title== SV.Message_Type.CallCanceledByCaller.name())//انا متصل
                            {
                                dialog_titel="Call Stoped";
                                dialog_msg=phone_name +" Stoped the call.";
                                play_file(5,R.raw.disconnect,5000);
                            }
                            AlertDialog.Builder  b=   new AlertDialog.Builder(ringing_answer.this);
                            b.setMessage(dialog_msg);
                            b.setTitle(dialog_titel);
                            b.setCancelable(true);
                            b.setPositiveButton("OK", new DialogInterface.OnClickListener()
                            {
                                public void onClick(DialogInterface dialog, int which)
                                {
                                    dialog.dismiss();
                                    void_end_call();
                                }
                            });
                            b.setOnCancelListener(new DialogInterface.OnCancelListener() {
                                @Override
                                public void onCancel(DialogInterface dialog) {
                                    dialog.dismiss();
                                    void_end_call();
                                }
                            });
                            AlertDialog dd = b.create();
                            try
                            {
                                dd.show();
                            }
                            catch(Exception ex){}
                            //Do your UI operations like dialog opening or Toast here
                        }
                    });
                }
            }.start();
        }
        else if(Title.equals(SV.Message_Type.Ringing.name()))//انا متصل
        {
            play_file(500, R.raw.ringing, 50000);
        }


        else if(Title.equals("StartTimer"))//انا متصل
        {

            mHandler.sendEmptyMessage(MSG_START_TIMER);
            //تشغيل صوت بسيط اعلان بدء المكالمة
        }

//        Context context = getActivity();
//        Toast.makeText(getActivity(), testEvent.toString(), Toast.LENGTH_SHORT).show();
    }


    String get_caller_name_by_num(String num)
    {
        String caller_name="";
        SQLiteDatabase myDB = openOrCreateDatabase("MYDB", MODE_PRIVATE, null);
        Cursor c = myDB.rawQuery("select phne_name from  T_CONTACTS where phone_num='"+num+"'", null);
        if(c.moveToFirst()){
            do{
                //assing values
                caller_name= c.getString(0);

                //Do something Here with values

            }while(c.moveToNext());
        }
        c.close();
        myDB.close();
        return caller_name;
    }



    public void void_end_call()
    {
        //ايقاف التايمر

        //تشغيل صوت بسيط اعلان انهاء المكالمة
        //ارسال رسالة tcp بإنهاء المكالمة

        is_stoped_call=true;
        is_vibrate_and_ring_canceled=true;
     this.finish();

    }
@Override
public void onCreateContextMenu(ContextMenu menu, View v, ContextMenu.ContextMenuInfo menuInfo)
{
//    switch (v.getId())//لو كذا منيو
//    {
//    }

    String[] planets = getResources().getStringArray(R.array.reject_messages);
    for (int i = 0; i < planets.length; ++i)
    {
        menu.add(0,i,i, planets[i]);
    }


}
    @Override
    public boolean  onContextItemSelected(MenuItem item)
    {
        String[] planets = getResources().getStringArray(R.array.reject_messages);
String choose= planets[ item.getItemId()];
      if(  choose.equals("Write your own message"))
      {
          AlertDialog.Builder b = new AlertDialog.Builder(this);
          b.setTitle("Reject With Message");
// Set an EditText view to get user input
          final EditText input = new EditText(this);
          input.setOnEditorActionListener(new TextView.OnEditorActionListener()
          {
              public boolean onEditorAction(TextView v, int actionId, KeyEvent event)
              {
                  if (
                          (event != null && !event.isShiftPressed() &&  (event.getKeyCode() == KeyEvent.KEYCODE_ENTER || event.getAction() == KeyEvent.ACTION_DOWN)  )

                                  || (  actionId == EditorInfo.IME_ACTION_DONE  ||  actionId == EditorInfo.IME_ACTION_DONE || actionId == EditorInfo.IME_ACTION_SEARCH)
                          )
                  {
                      String value = input.getText().toString();

                      EventBus.getDefault().post(new Event_objec(SV.Event_from_how_to_how.Ringing_class.name(), SV.Event_from_how_to_how.UDP.name(),SV.Message_Type.CallCanceledByReceiverWithMSG.name(),value));
                      void_end_call();
                  }
                  return false;
              }
          });
          b.setView(input);
          b.setPositiveButton("Ok", new DialogInterface.OnClickListener() {
              public void onClick(DialogInterface dialog, int whichButton) {
                  String value = input.getText().toString();


                  EventBus.getDefault().post(new Event_objec(SV.Event_from_how_to_how.Ringing_class.name(), SV.Event_from_how_to_how.UDP.name(),SV.Message_Type.CallCanceledByReceiverWithMSG.name(),value));
                  void_end_call();
              }
          });
          AlertDialog dd = b.create();
          dd.getWindow().clearFlags(WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE  | WindowManager.LayoutParams.FLAG_ALT_FOCUSABLE_IM);
   dd.getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_STATE_VISIBLE);
          dd.show();
      }
        else
      {
          EventBus.getDefault().post(new Event_objec(SV.Event_from_how_to_how.Ringing_class.name(), SV.Event_from_how_to_how.UDP.name(),SV.Message_Type.CallCanceledByReceiverWithMSG.name(), choose));

          void_end_call();
      }
return super.onContextItemSelected(item);
    }


    private void change_speaker(Boolean  direct_change)
    {
        try
        {

            if (direct_change != null)
            {

                audioManager.setSpeakerphoneOn((Boolean) direct_change);
                if (direct_change)
                {
                    speaker = true;

                }
                else
                {
                    speaker = false;
                    ((ImageButton) findViewById(R.id.tog_btn_speaker_answer)).setImageResource(R.drawable.img_speaker);
                }

            }
            else
            {

                if (speaker)
                {
                    speaker = false;
                    ((ImageButton) findViewById(R.id.tog_btn_speaker_answer)).setImageResource(R.drawable.img_speaker);

                }
                else
                {
                    speaker = true;

                }

                audioManager.setSpeakerphoneOn((Boolean) speaker);
            }

        }
        catch (Exception ex)
        {

        }
        try
        {
            Thread.sleep(500);
        }
        catch (Exception e)
        {
            Log.d("Bahgat", e.getMessage());
        }
    }

    private void change_Bluetooth(Boolean  direct_change)
    {
        try
        {
            BluetoothAdapter bluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
            if (direct_change != null)
            {


                 if (direct_change)
                {
                    headset=true;
                 }
                else
                {
                    headset = false;
                    ((ImageButton) findViewById(R.id.tog_btn_head_set_answer)).setImageResource(R.drawable.img_bluetooth);
                }


            }

            else
            {
                if (headset)
                {
                    headset = false;
                    ((ImageButton) findViewById(R.id.tog_btn_head_set_answer)).setImageResource(R.drawable.img_bluetooth);
                 }
                else
                {
                    headset = true;
                  }


            }
        }
        catch (Exception ex)
        {}
//        try
//        {
//
//
//            BluetoothAdapter bluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
//            if (on)
//            {
//                ((ImageButton) v).setImageResource(R.drawable.img_bluetooth);
//                bluetoothAdapter.disable();
//                ((ImageButton) v).setTag(false);
//            }
//            else
//            {
//                ((ImageButton) v).setImageResource(R.drawable.img_bluetooth2);
//                bluetoothAdapter.enable();
//                ((ImageButton) v).setTag(true);
//            }
//        }
//        catch (Exception ex){}
        // No need to change bluetooth state

    }

    private   void   change_mute (Boolean  direct_change)
    {


    }




    public void play_file(final long count,final int file_id,final int time)
    {
        try
        {
            AudioManager m_amAudioManager;
            m_amAudioManager = (AudioManager)getSystemService(Context.AUDIO_SERVICE);
            m_amAudioManager.setMode(AudioManager.MODE_IN_CALL);
//            try
//            {
//                m_amAudioManager.setSpeakerphoneOn(((ToggleButton) findViewById(R.id.tog_btn_speaker_answer)).isChecked());
//            }
//            catch (Exception ex)
//            {}
            myPlayer = MediaPlayer.create(this, file_id);
//            myPlayer.prepare();//طالما عملت كرييت مينفعش تعمل بربير

            Thread thread = new Thread(new Runnable()
            {
                public void onEvent( final Event_objec event)
                {
                    if(event.getTo_how().equals("media"))
                    {
                        try{
                            is_vibrate_and_ring_canceled=true;
                            myPlayer.stop();
                            myPlayer.release();
                            myPlayer=null;
                           }catch (Exception ex){}



                    }
                }
                @Override
                public void run()
                {
                    try
                    {
                        EventBus.getDefault().register(this);
                        // If phone is not set to silent mode
                        if (myPlayer != null)
                        {
                            long timeout = time;
                            for (long i = 0; i < count; ++i)
                            {
                                if (timeout <= 0)
                                {
                                    void_end_call();
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
                        try{  EventBus.getDefault().unregister(this);void_end_call();}catch (Exception ex){}
                    }
                    catch(Exception ex)
                    {
                        try{  EventBus.getDefault().unregister(this);void_end_call();}catch (Exception ex1){}
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

            myPlayer.stop();
            myPlayer.release();
            myPlayer = null;
        }
        catch (Exception ex)
        {
        }


    }


    @Override
    public void onBackPressed()
    {
        if (is_stoped_call == false)
        {
            moveTaskToBack(true);  // "Hide" your current Activity
        }
    }
    @Override
    protected void onDestroy()
    {
        super.onDestroy();
        if(is_stoped_call)
        {
            try
            {
                EventBus.getDefault().unregister(this);
            }
            catch (Exception ex)
            {
            }
            try
            {
                mHandler.sendEmptyMessage(MSG_STOP_TIMER);
            }
            catch (Exception ex)
            {
            }

                try
                {
                    my_stop_watch.stop();
                }
                catch (Exception ex)
                {
                }

            try
            {
                stop_play_file_ring_tone_viber_sinsor();
            }
            catch (Exception ex)
            {
            }

        }

//        play_file(R.raw.close_call);





    }

    //Timer{





    //Timer}

//    private void showNotification(String phone_name)
//    {

//    String name = "TooT Call:"+phone_name;
//    Intent intent = new Intent(this, ringing_answer.class);
//    PendingIntent pIntent = PendingIntent.getActivity(getApplicationContext(), 0, intent, 0);
//
//    Notification noti = new NotificationCompat.Builder(this).setContentTitle(name).setAutoCancel(false).setContentIntent(pIntent).setSmallIcon(R.drawable.ic_launcher).setContentText(name).build();
//    noti.flags = Notification.FLAG_ONGOING_EVENT;
//
//    NotificationManager notificationManager = (NotificationManager) getSystemService(NOTIFICATION_SERVICE);
//    notificationManager.notify((int) System.currentTimeMillis(), noti);

//    is_restor = true;
//
//    }


    Handler mHandler = new Handler()
    {
        @Override
        public void handleMessage(Message msg)
        {
            super.handleMessage(msg);
            switch (msg.what)
            {
                case MSG_START_TIMER:
                    my_stop_watch.start(); //start my_stop_watch
                    mHandler.sendEmptyMessage(MSG_UPDATE_TIMER);
                    break;

                case MSG_UPDATE_TIMER:
                    int seconds = (int) (my_stop_watch.getElapsedTime() / 1000);
                    int minutes = seconds / 60;
                    if(minutes<59)
                    {
                        seconds = seconds % 60;

                        txt_time_Answer.setText( "" + String.format("%02d", minutes) + ":" + String.format("%02d", seconds) );
                    }
                    else
                    {
                        int hours=minutes/60;
                        minutes=minutes% 60;
                        seconds = seconds % 60;
                        txt_time_Answer.setText( ""+ hours+":"+ String.format("%02d", minutes) +  ":" + String.format("%02d", seconds) );
                    }


                    mHandler.sendEmptyMessageDelayed(MSG_UPDATE_TIMER, REFRESH_RATE); //text view is updated every second,
                    break;                                  //though the my_stop_watch is still running
                case MSG_STOP_TIMER:
                    mHandler.removeMessages(MSG_UPDATE_TIMER); // no more updates.

                    my_stop_watch.stop();//stop my_stop_watch
//                    txt_time_Answer.setText("" + my_stop_watch.getElapsedTime());
                    break;

                default:
                    break;
            }
        }
    };


}

class StopWatch
{

    private long startTime = 0;
    private long stopTime = 0;
    private boolean running = false;


    public void start()
    {

       this.startTime = System.currentTimeMillis();
        this.running = true;
    }


    public void stop()
    {
        this.stopTime = System.currentTimeMillis();
        this.running = false;
    }


    //elaspsed time in milliseconds
    public long getElapsedTime()
    {
        long elapsed;
        if (running)
        {
            elapsed = (System.currentTimeMillis() - startTime);
        }
        else
        {
            elapsed = (stopTime - startTime);
        }
        return elapsed;
    }


    //elaspsed time in seconds
    public long getElapsedTimeSecs()
    {
        long elapsed;
        if (running)
        {
            elapsed = ((System.currentTimeMillis() - startTime) / 1000);
        }
        else
        {
            elapsed = ((stopTime - startTime) / 1000);
        }
        return elapsed;
    }


    //sample usage
    public static void main(String[] args)
    {
        StopWatch s = new StopWatch();
        s.start();
        //code you want to time goes here
        s.stop();
        System.out.println("elapsed time in milliseconds: " + s.getElapsedTime());
    }
}


