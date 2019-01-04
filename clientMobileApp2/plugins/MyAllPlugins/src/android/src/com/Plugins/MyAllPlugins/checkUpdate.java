package com.Plugins.MyAllPlugins;

import android.app.Activity;
import android.app.ProgressDialog;
import android.content.res.AssetManager;
import android.os.Environment;
import android.os.StatFs;
import android.util.Log;


import com.Plugins.MyAllPlugins.hash.xxhash.StreamingXXHash32;
import com.Plugins.MyAllPlugins.hash.xxhash.XXHashFactory;

import org.apache.cordova.CallbackContext;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.InputStreamEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.protocol.HTTP;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.CountDownLatch;
import java.util.zip.Adler32;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

/**
 * Created by Bahgat on 23/04/2015.
 */
public class checkUpdate
{
    Activity temp_activity;
    CallbackContext temp_callbackContext;
    List<File> filesPathList= null;

    String tempUpdateFileName="tempUpdate.zip";
    ProgressDialog   progressDialogx  ;
    checkUpdate (CallbackContext callbackContext,Activity activity,String the_url) throws JSONException, IOException
    {


        temp_activity=activity;
        temp_callbackContext=callbackContext;
        final CountDownLatch latch = new CountDownLatch(1);

        temp_activity.runOnUiThread(new Runnable() {
            public void run() {

				progressDialogx = new ProgressDialog(temp_activity, 3);
				//PDialog.pDialogObj.setProgressStyle(style);
				progressDialogx.setCancelable(false);
				progressDialogx.setCanceledOnTouchOutside(false);
				progressDialogx.setTitle("Check Update");
				progressDialogx.setMessage("Please Wait...");
				progressDialogx.show();

                   // progressDialogx = ProgressDialog.show(temp_activity, "Check Update", "Please Wait...", true, true);

                latch.countDown();
                //Callback here DOES NOT WORK
                //callbackContext.success(new JSONObject());
            };
        });

        try
        {
            latch.await();
        }
        catch (InterruptedException e)
        {
            e.printStackTrace();
        }
//        if(!checkUpdatePeriod())//from javascript
//        {
//
//        }

            changeProgressText("Please Wait... \r\n check internet");

        boolean iSInternetAvilable=check_internet();
        changeProgressText("Please Wait... \r\n check extract folder");

        boolean isExternalFolder=  CheckIfExtractFolder();
        if(!iSInternetAvilable && !isExternalFolder)
        {

    progressDialogx.dismiss();

          callbackContext.success("1,No internet connection, no external folder so load index from assets then hide splash screen"); // Thread-safe.
            return;
        }

         else if(!iSInternetAvilable && isExternalFolder)
        {
            try {
                progressDialogx.dismiss();
            }
            catch(Exception ex)
            {

            }
            callbackContext.success("2,"+temp_activity.getFilesDir().getAbsolutePath()+"/www/,No internet connection, with external folder so change index path then hide splash screen"); // Thread-safe.
            return;
        }


        //so internet ok
       else if(!isExternalFolder)
        {
//            long  freeSize=getFreeSize();
//            long assetsSize=getAssetsSize();

            changeProgressText("Please Wait... \r\n extract assets");


            if (!extractAssets("www").equals("OK"))
            {

                deleteExternalFolderIfExest("/data/data/" + temp_activity.getPackageName() + "/www");
                //try again
                String result = extractAssets("www");
                if (!result.equals("OK"))
                {
                    progressDialogx.dismiss();
                    deleteExternalFolderIfExest("/data/data/" + temp_activity.getPackageName() + "/www");
                    callbackContext.success("1,internet connection is avilable , no external folder but problem with extract assets so load index from assets then hide splash screen error message =: " + result); // Thread-safe.

                    return;
                }
            }
        }

        changeProgressText("Please Wait... \r\n get local list files");

      //  String ServerFiles[] = null;
        List<File> files=null;
        files = getListFiles(new File(temp_activity.getFilesDir()+"/www"));

       // Date lastModified;
      JSONObject  jsonObject=new JSONObject();





        for (File file : files)
        {
//            lastModified = new Date(file.lastModified());
//            SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
//            String formattedDateString = formatter.format(lastModified);



            int startWithWWW = file.getPath().indexOf("/www/");

            String filePath = file.getPath().toString().substring(startWithWWW, file.getPath().length());
          long  crc32HAsh=checksumBufferedInputStream(file.getPath());
          // Log.d(String.valueOf( crc32HAsh),"xxxxxxxxxxxxxxxxxxxxxxxxxxx"+filePath);
            jsonObject.put(filePath, crc32HAsh);

        }

        changeProgressText("Please Wait... \r\n connect to server to check update");

     String result=   SendCurrentAndReturnLinksFromServer1(the_url,jsonObject);
        if(! result.equals("OK"))
        {
            progressDialogx.dismiss();
            callbackContext.success("2,file://"+temp_activity.getFilesDir().getAbsolutePath()+"/www/,internet connection is avilable , with external folder but problem with download update so change index path then hide splash screen error message =: " + result); // Thread-safe.
return;
        }

        try
        {
            changeProgressText("Please Wait... \r\n extract update files");

            extractZipFile();
        }
        catch (Exception  ex)
        {
            progressDialogx.dismiss();
            callbackContext.success("2,file://"+temp_activity.getFilesDir().getAbsolutePath()+"/www/,internet connection is avilable , with external folder but problem with extractZipFile  so change index path then hide splash screen error message =: " + result); // Thread-safe.
            return;
        }
        progressDialogx.dismiss();
        callbackContext.success("2,file://"+temp_activity.getFilesDir().getAbsolutePath()+"/www/,internet connection is avilable , with external folder no error  so change index path then hide splash screen "); // Thread-safe.




    }




long getFreeSize()
{
    File path3 = Environment.getDataDirectory();
    StatFs stat = new StatFs(path3.getPath());
    long blockSize = stat.getBlockSize();
    long availableBlocks = stat.getAvailableBlocks();

    return   blockSize * availableBlocks;
}


    private void extractZipFile() throws Exception
    {
 //     logger.debug("Start copy files to local storage from updated zip file...");
 //     logger.debug("Size of zip file is " + this.assetsFile.length());

    // this.listener.onProgress(WLDirectUpdateStatus.UNZIP_IN_PROGRESS, this.assetsFileSize, this.assetsFileSize);

     File wwwFolderPath = new File(temp_activity.getFilesDir().getAbsolutePath()+"/www");
   //  File tempUnzipFolder = new File(temp_activity.getFilesDir().getAbsolutePath(), "tempUnzipFolder");
    // File skinResourcesFolder = new File(wwwFolderPath, "skinName");
      // deleteExternalFolderIfExest(tempUnzipFolder.getPath());

    // tempUnzipFolder.mkdirs();

        unpack(new FileInputStream(temp_activity.getFilesDir().getAbsolutePath()+"/"+tempUpdateFileName));

   //  handleDeltaUpdate(temp_activity, wwwFolderPath, tempUnzipFolder);

        File for_delete_zip_file = new File(temp_activity.getFilesDir().getAbsolutePath()+"/"+tempUpdateFileName);
        for_delete_zip_file.delete();

    // logger.debug("Finish copy files to local storage from updated zip file...");
   }



    public   void unpack(InputStream in )
     throws IOException
   {
     ZipInputStream zin = new ZipInputStream(in);
     ZipEntry entry;
     while ((entry = zin.getNextEntry()) != null)
     {
       String extractFilePath = entry.getName();
       if ((extractFilePath.startsWith("/")) || (extractFilePath.startsWith("\\"))) {
         extractFilePath = extractFilePath.substring(1);
       }
       File extractFile = new File(temp_activity.getFilesDir().getAbsolutePath() + File.separator + extractFilePath);
       if (entry.isDirectory())
       {
         if (!extractFile.exists()) {
           extractFile.mkdirs();
         }
       }
       else
       {
         File parent = extractFile.getParentFile();
         if (!parent.exists()) {
           parent.mkdirs();
         }
         OutputStream os = new BufferedOutputStream(new FileOutputStream(extractFile));
         copyFile(zin, os);
         os.flush();
         os.close();
       }
     }
   }

     public   void copyFile(InputStream in, OutputStream out)
     throws IOException
   {
     byte[] buffer = new byte[8192];
     int read;
     while ((read = in.read(buffer)) != -1) {
       out.write(buffer, 0, read);
     }
     out.flush();
   }



    String  SendCurrentAndReturnLinksFromServer1(String the_url,JSONObject linksToserver)
  {
   //   send_links_toserver()
      try
      {
      HttpClient httpclient3;

if(the_url.startsWith("https")) {
    httpclient3 = SV.customHttpsClient(new DefaultHttpClient());//DefaultHttpClient
}
          else
{
    httpclient3 =  new DefaultHttpClient();//DefaultHttpClient
}



         // http://localhost:8705/Rlc/Viewer/sent_password_to_email/?email_id=yy
         // HttpPost httppost3=new HttpPost("http://192.168.1.7:8705/Rlc/Viewer/geUpdatedLinks/");
          if(the_url.endsWith("/")==false)
          {
              the_url=the_url+"/";
          }
      HttpPost httppost3=new HttpPost(the_url + SV.get_OS_AppName_Version(temp_activity) );

          httppost3.setHeader(HTTP.CONTENT_TYPE,"text/plain;charset=UTF-8");


      InputStreamEntity inputEntity3=new InputStreamEntity(new ByteArrayInputStream(linksToserver.toString().getBytes()),-1);
      inputEntity3.setContentType("text/plain");

       inputEntity3.setContentEncoding("utf-8");
      httppost3.setEntity(inputEntity3);
   //   ResponseHandler<String> responseHandler3= new BasicResponseHandler();
          HttpResponse response = httpclient3.execute(httppost3);

          HttpEntity ent = response.getEntity();
        String resutlt1=  downloadData(ent);
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
          return "Error SendCurrentAndReturnLinksFromServer1:"+ex.getMessage() +":"+ex;

      }

  }

  private  String downloadData(HttpEntity responseEntity)
    {
        String errorMessage="";
      InputStream input = null;
      FileOutputStream output = null;
      boolean isInnerError = false;
      try
      {
        input = new BufferedInputStream(responseEntity.getContent());
        output = new FileOutputStream(temp_activity.getFilesDir().getAbsolutePath() + "/"+tempUpdateFileName,false);

        byte[] data = new byte[8192];

        int updateDelayCounter = 0;
        int count;
        while ((count = input.read(data)) != -1)
        {
//          bytesDownloaded += count;
//          if (updateDelayCounter == 32)
//          {
//           // publishProgress(new Long[] { Long.valueOf(assetsFileSize), Long.valueOf(bytesDownloaded) });
//            updateDelayCounter = 0;
//          }
//          updateDelayCounter++;

          output.write(data, 0, count);
//          if (isCancelled()) {
//            logger.debug("User cancelled direct update download");
//          }
        }
//        try
//        {
//          if (output != null) {
//            output.close();
//          }
//          if (input != null) {
//            input.close();
//          }
//        }
//        catch (IOException e)
//        {
//         // logger.warn("Unable to close input stream of assets.zip file");
//        }

      }
      catch (Exception e)
      {
          errorMessage="Error downloadData :"+e.getMessage()+":"+ e;
        isInnerError = true;
      }
      finally
      {
        try
        {
          if (output != null) {
            output.close();
          }
          if (input != null) {
            input.close();
          }
        }
        catch (IOException e)
        {
         // logger.warn("Unable to close input stream of assets.zip file");
        }
      }

      if (isInnerError) {
          return errorMessage;
       // throw new DirectUpdateError(WLDirectUpdateStatus.FAILURE_UNKNOWN);
      }
        else
      {
          return "OK";
      }

    }

  String  SendCurrentAndReturnLinksFromServer2_delete_it(JSONObject linksToserver)
    {

        HttpURLConnection con = null;
        try
        {
            con = (HttpURLConnection) ( new URL("http://192.168.1.6:8000/services/UpdatedLinks/")).openConnection();


        con.setRequestMethod("POST");

            con.setInstanceFollowRedirects( false );

            con.setRequestProperty( "Content-Type", "text/plain");
            con.setRequestProperty("charset", "utf-8");
            con.setRequestProperty("Content-Length", Integer.toString(linksToserver.toString().getBytes().length));
            con.setUseCaches( false );

        con.setDoInput(true);

        con.setDoOutput(true);

        con.connect();


            con.getOutputStream().write(linksToserver.toString().getBytes());

            InputStream is = con.getInputStream();

            String xx = "dd";
            Log.d("Ddd", "ddd");
        }
        catch (IOException e)
        {
            e.printStackTrace();
        }
        return  "ok";
    }


    String  SendCurrentAndReturnLinksFromServer3_delete_it(String relativeUrl,JSONObject linksToserver)
    {
        BufferedReader in = null;
        try {
            HttpClient client = new DefaultHttpClient();
            HttpPost request = new HttpPost(SV.serverLink +"/UpdatedLinks/" + relativeUrl );
            List<NameValuePair> postParameters = new ArrayList<NameValuePair>();
            postParameters.add(new BasicNameValuePair("first", "param value one"));

            UrlEncodedFormEntity formEntity = new UrlEncodedFormEntity( postParameters);

            request.setEntity(formEntity);
            HttpResponse response = client.execute(request);
            in = new BufferedReader(new InputStreamReader(response.getEntity().getContent()));

            StringBuffer sb = new StringBuffer("");
            String line = "";
            String NL = System.getProperty("line.separator");
            while ((line = in.readLine()) != null) {
                sb.append(line + NL);
            }
            in.close();
            String result = sb.toString();
            System.out.println(result);
        }

        catch(Exception e) {
        }

        return  "";
    }

    private List<File> getListFiles(File parentDir)
    {
        ArrayList<File> inFiles = new ArrayList<File>();
        JSONObject jsonObject = new JSONObject();
        File[] files = parentDir.listFiles();
        for (File file : files) {
            if (file.isDirectory())
            {
                inFiles.addAll(getListFiles(file));
            }
            else
            {
             //   Date lastModified = new Date(file.lastModified());
//                String input_date="01/08/2012";
//                SimpleDateFormat format1=new SimpleDateFormat("dd/MM/yyyy");
//                Date dt1=format1.parse(input_date);
//
//                String intMonth = (String) android.text.format.DateFormat.format("MM", lastModified); //06
//                String year = (String) android.text.format.DateFormat.format("yyyy", lastModified); //2013
//                String day = (String) android.text.format.DateFormat.format("dd", lastModified); //20
//                String hours = (String) android.text.format.DateFormat.format("HH", lastModified); //20
//                String Minutes = (String) android.text.format.DateFormat.format("mm", lastModified); //20

                  inFiles.add(file);
            }
        }
        return inFiles;
    }

  HashMap<String,String> getServerFilesInfo()
    {
        try
        {
            String jsonString="{\"k1\":\"v1\",\"k2\":\"v2\"}";

            JSONObject object = new JSONObject(jsonString);
            HashMap<String, String> map = new HashMap<String, String>();

            Iterator<String> keysItr = object.keys();
            while(keysItr.hasNext()) {
                String key = keysItr.next();
                String value = object.getString(key);


                map.put(key, value);
            }
            return map;



        }
        catch (Exception ex)
        {
            return null;
        }


    }

    private boolean  CheckIfExtractFolder()
   {

      // File dir = new File("/data/data/" + temp_context.getPackageName() + "/www");
       File dir = new File(  temp_activity.getFilesDir()+"/www");

       return dir.exists() && dir.isDirectory();


   }
  private boolean check_internet()
   {
       if(SV.check_internet_connection(temp_activity))
       {
           return  SV.check_internet_connection_hard();

       }
       else
       {
           return false;
       }


   }




    private  String extractAssets(String path) {
        try {
        AssetManager assetManager =temp_activity.getAssets();


//            StatFs statFs = new StatFs(Environment.getRootDirectory().getAbsolutePath());
//            long   Free   = (statFs.getAvailableBlocks() * (long) statFs.getBlockSize());

        String assets[] = null;

            assets = assetManager.list(path);
            if (assets.length == 0)//???? ??? ???? ?????
            {
                copyFile(path);
            }
            else {
                String fullPath = temp_activity.getFilesDir() + "/" + path;
                File dir = new File(fullPath);
                if (!dir.exists())
                    dir.mkdir();
                for (int i = 0; i < assets.length; ++i) {
                    extractAssets(path + "/" + assets[i]);
                }
            }
            return "OK";
        } catch (IOException ex) {
            Log.e("tag", "I/O Exception", ex);

            return "Error:"+ ex +"::"+ ex.getMessage();
        }
    }

    private void copyFile(String filename) {
        AssetManager assetManager = temp_activity.getAssets();

        InputStream in = null;
        OutputStream out = null;
        try {
            in = assetManager.open(filename);
            String newFileName =temp_activity.getFilesDir() + "/" + filename;
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



private void deleteExternalFolderIfExest(String path)
{


    File dir = new File(path);
    if (dir.exists())
    {
        dir.delete();
    }

}


void  changeProgressText(final  String text)
{
    temp_activity.runOnUiThread(new Runnable() {
        public void run() {
            try
            {
                progressDialogx.setMessage(text);
            }
            catch (Exception ex)
            {

            }

            //Callback here DOES NOT WORK
            //callbackContext.success(new JSONObject());
        };
    });
}



    public static long checksumBufferedInputStreamx(String filepath) throws IOException {

        InputStream inputStream = new BufferedInputStream(new FileInputStream(filepath));

         // CRC32 hash = new CRC32();//5 sec
         Adler32 hash = new Adler32();//2 sec
        int cnt;

        while ((cnt = inputStream.read()) != -1) {

            hash.update(cnt);

        }

        return hash.getValue();

    }



    public  static long  checksumBufferedInputStream( String filepath)throws IOException
    {
        XXHashFactory factory = XXHashFactory.safeInstance();//safeInstance();//fastestInstance(5);//safeInstance(4);//nativeInstance(6);//unsafeInstance(5);//fastestJavaInstance(5);
        int seed = 123;    // Used to initialize the hash value, use whatever
        //   value you want, but always the same.
        StreamingXXHash32 hash32 = factory.newStreamingHash32(seed);


        //Log.d("a","a");

            byte[] bufferBlock = new byte[8192]; // 8192 bytes
        InputStream inputStream = new BufferedInputStream(new FileInputStream(filepath));

            int read;
            while ((read = inputStream.read(bufferBlock))!=-1)
            {
               // Log.d("r","a");
                hash32.update(bufferBlock, 0, read);
            }
        inputStream.close();

            return hash32.getValue()& 0xFFFFFFFFL;

           // System.out.println(hash);


    }



}
