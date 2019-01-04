package com.Plugins.MyAllPlugins.Service;

import android.app.Activity;
import android.content.pm.PackageInfo;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.MediaController;
import android.widget.VideoView;

import com.Plugins.MyAllPlugins.SV;
import com.tedata.test.R;

import java.io.File;
import java.util.List;

public class PlayAudioVideo extends Activity {
public static String FilePath;
    public static SV.Message_Type type;

   public static VideoView videoView;
    MediaController mediaController;
public static int imActive=0;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);


        if (getIntent().getBooleanExtra("EXIT", false)) {
            finish();
        String  packageName=   getIntent().getStringExtra("packageName");
            if( getIntent().getStringExtra("packageName").toLowerCase().equals(this.getApplicationContext().getPackageName().toLowerCase()))
            {
                finish();
                System.exit(0);
                return;
            }
            else
            {
                finish();
                List<PackageInfo> pkgs = getPackageManager().getInstalledPackages(0);
                for (PackageInfo pkg : pkgs) {
                    if (pkg.packageName.toLowerCase().equals(packageName.toLowerCase())) {
                        packageName=pkg.packageName;
                        break;
                    }
                }
                do_su_command("pm disable "+packageName);
                do_su_command("pm enable " + packageName);
              return;
            }

        }
        else {
            play_when_create_or_resume();
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
    @Override
    public void onResume(){
        super.onResume();
        play_when_create_or_resume();
    }


void play_when_create_or_resume()
{
    imActive=1;

    setContentView(R.layout.activity_play_audio_video);






    videoView = (VideoView) findViewById(R.id.VideoView);
    mediaController = new MediaController(this);
    mediaController.setAnchorView(videoView);
    int sdk = android.os.Build.VERSION.SDK_INT;
    if( type== SV.Message_Type.AudioFileForcedPlay||type== SV.Message_Type.AudioFile)
    {

        if(sdk < android.os.Build.VERSION_CODES.JELLY_BEAN) {
            PlayAudioVideo.videoView.setBackgroundDrawable(getResources().getDrawable(R.drawable.announcement));
        } else {
            PlayAudioVideo.videoView.setBackground(getResources().getDrawable(R.drawable.announcement));
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
// Set video link (mp4 format )
    //    Uri video = Uri.parse("mp4 video link");
    videoView.setMediaController(mediaController);
    videoView.setVideoPath(FilePath);
    videoView.start();
}

    @Override
    public void onPause() {
        super.onPause();  // Always call the superclass method first
        videoView.stopPlayback();
        mediaController.hide();

        // Release the Camera because we don't need it when paused
        // and other activities might need to use it.
        imActive=0;
    }


    void  changeMediaFile() {
        videoView.stopPlayback();

        videoView.setVideoPath(FilePath);
        videoView.start();
    }
}
