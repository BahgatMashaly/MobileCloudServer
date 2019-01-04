using System;
using System.Collections.Generic;
using System.IO;
using System.IO.IsolatedStorage;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Windows.Storage;

using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using Windows.Storage.FileProperties;

namespace io.cordova.MyAllPlugins
{
    public delegate void DelegateForAllMyBluginsResult(string succededOrFailed, string resultToReturn);

    class checkUpdate
    {

        //  string afterApdatePath = ApplicationData.Current.LocalFolder.Path + @"\www\index.html";

        // string afterApdatePath = "ms-appdata://local/www/indexuuuuu.html";//search for app

        // string afterApdatePath = "ms-appdata://local/www/index.html";//search for app

        string afterApdatePath = "x-wmapp0:/www/";//search for app
                                                            //string afterApdatePath = "ms-appdata:///local//www//index.html"; //search for app
                                                            // string afterApdatePath = "c://data//users//defapps//www//index.html";
        public event DelegateForAllMyBluginsResult EventForcheckUpdateResult;
        string tempUpdateFileName = "tempUpdate.zip";
        public async void checkUpdateFromServer(string url)
        {

            //bool xx = File.Exists("ms-appdata:///local//www/index.html");
            //bool c = xx;
            //bool cc = xx;
            // deleteFolder("www");
            //        temp_activity.runOnUiThread(new Runnable()
            //        {
            //        public void run()
            //    {
            //        progressDialogx = ProgressDialog.show(temp_activity, "Check Update", "Please Wait...", true, true);

            //        //Callback here DOES NOT WORK
            //        //callbackContext.success(new JSONObject());
            //    };
            //});


            bool iSInternetAvilable = await SV.check_internet_connection_hard();
            iSInternetAvilable = true;
            bool isExternalFolder = CheckIfExtractFolder();
            if (!iSInternetAvilable && !isExternalFolder)
            {

                // progressDialogx.dismiss();

                EventForcheckUpdateResult("success", "1,No internet connection, no external folder so load index from assets then hide splash screen"); // Thread-safe.
                return;
            }

            else if (!iSInternetAvilable && isExternalFolder)
            {
                // progressDialogx.dismiss();
                EventForcheckUpdateResult("success", "2," + afterApdatePath + ",No internet connection, with external folder so change index.html path then hide splash screen"); // Thread-safe.

                return;
            }

            else if (!isExternalFolder)
            {
                //            long  freeSize=getFreeSize();
                //            long assetsSize=getAssetsSize();

                // changeProgressText("Please Wait... \r\n extract assets");


                if (extractAssets("www") != "OK")
                {

                    deleteFolder(ApplicationData.Current.LocalFolder.Path + "\\www");
                    //try again
                    string result = extractAssets("www");
                    if (result != "OK")
                    {
                        // progressDialogx.dismiss();
                        deleteFolder(ApplicationData.Current.LocalFolder.Path + "\\www");
                        EventForcheckUpdateResult("success", "1,internet connection is avilable , no external folder but problem with extract assets so load index from assets then hide splash screen error message =: " + result);

                        return;
                    }
                }
            }

            List<FileInfo> files = await getListFiles(ApplicationData.Current.LocalFolder.Path + "\\www");
            Stream stremaResult=null;
            try {
                  stremaResult = await SV.PostForUpdateLinks(url, convertListToSTream(files));
            }
            catch(Exception exx)
            {
                EventForcheckUpdateResult("success", "2," + afterApdatePath + ",internet connection is avilable , with external folder but problem with download update so change index.html path then hide splash screen error message =: " + exx.Message); // Thread-safe.
                return;
            }

  

            StorageFolder localFolder = ApplicationData.Current.LocalFolder;
            StorageFile storageFile = await localFolder.CreateFileAsync(tempUpdateFileName, CreationCollisionOption.ReplaceExisting);
            using (Stream outputStream = await storageFile.OpenStreamForWriteAsync())
            {
                await stremaResult.CopyToAsync(outputStream);
            }


            try
            {
                //   changeProgressText("Please Wait... \r\n extract update files");


                string resultx = await extractZipFile();

                if (resultx != "OK")
                {
                    EventForcheckUpdateResult("success", "2," + afterApdatePath + ",  internet connection is avilable , with external folder but problem with extractZipFile  so change index.html path then hide splash screen error message =: " + resultx); // Thread-safe.

                    return;
                }
            }
            catch (Exception ex)
            {
                //  progressDialogx.dismiss();
                EventForcheckUpdateResult("success", "2," + afterApdatePath + ",  internet connection is avilable , with external folder but problem with extractZipFile  so change index.html path then hide splash screen error message =: " + ex.Message); // Thread-safe.

                return;
            }

            try
            {
                File.Delete(ApplicationData.Current.LocalFolder.Path + "\\" + tempUpdateFileName);
            }
            catch (Exception)
            {


            }
            // progressDialogx.dismiss();
            EventForcheckUpdateResult("success", "2," + afterApdatePath + ",internet connection is avilable , with external folder noo error  so change index.html path then hide splash screen "); // Thread-safe.

        }
        async Task<string> extractZipFile()
        {
            Task<string> task = UnzipAndListFilesFolders.unzipToIsolatedStoreLocSharpGISLib();
            return await task;


        }

        Stream convertListToSTream(List<FileInfo> files)
        {


            DateTime lastModified;

            JObject jsonObject = new JObject();
            jsonObject.Add("os", "wp");

            foreach (FileInfo file in files)
            {
                FileStream fileStream = file.OpenRead();
                byte[] buffer = new byte[fileStream.Length];
               // fileStream.Read(buffer, 0, buffer.Length);
               
                 var binaryStream = new BinaryReader(fileStream, Encoding.UTF8);
                binaryStream.Read(buffer, 0, buffer.Length);

                ;
                //lastModified = file.LastWriteTime;
                //String formattedDateString = lastModified.ToString("dd/MM/yyyy HH:mm:ss");
                int startWithWWW = file.FullName.IndexOf("\\www\\");

                String filePath = file.FullName.Substring(startWithWWW);

                jsonObject.Add(filePath, MyAllPluginsWinRTComponent.xxHash.CalculateHash(buffer, -1, 123));
            }
            return new MemoryStream(Encoding.UTF8.GetBytes(jsonObject.ToString(Formatting.None)));


        }

        private string extractAssets(string path)
        {

            try
            {
                var package = Windows.ApplicationModel.Package.Current.InstalledLocation; //== C:\Data\Programs\{ C93A9131 - E668 - 4759 - A273 - 769B7C231127}\Install
                Windows.Storage.StorageFolder store = ApplicationData.Current.LocalFolder;// == C:\Data\Users\DefApps\AppData\{ C93A9131 - E668 - 4759 - A273 - 769B7C231127}\Local
                                                                                          // IsolatedStorageFile userStoreForApplication = IsolatedStorageFile.GetUserStoreForApplication();
                CopyFolder(package.Path + "\\www", store.Path + "\\www");
                return "OK";
            }
            catch (Exception ex)
            {

                return "Error:" + ex.Message;
            }
        }


        void deleteFolder(string dirName)
        {


            if (Directory.Exists(dirName))
            {
                Directory.Delete(dirName, true);
            }

        }

        async Task<List<StorageFolder>> getAllFolders(StorageFolder rootFolder)
        {
            try
            {
                var folders = await rootFolder.GetFoldersAsync();
                List<StorageFolder> result = new List<StorageFolder>(folders);

                foreach (var storageFolder in folders)
                {
                    // Recursively add sub folders.
                    result.AddRange(await getAllFolders(storageFolder));
                }

                return result;
            }
            catch
            {
                // You may get a exception if you don't have permission to access a specific folder.
                return new List<StorageFolder>();
            }
        }
        private async Task<List<FileInfo>> getListFiles(string parentDir)
        {
            // StorageFolder g = new StorageFolder("");
            StorageFolder rootFolder = await StorageFolder.GetFolderFromPathAsync(parentDir);

            List<StorageFolder> Allfolders = new List<StorageFolder>();
            Allfolders.Add(rootFolder);
            Allfolders.AddRange(await getAllFolders(rootFolder));

            List<FileInfo> filesInfo = new List<FileInfo>();
            //  List<StorageFile> filesInfo = new List<StorageFile>();
            foreach (StorageFolder folder in Allfolders)
            {
                filesInfo.AddRange(getFilesInfo(folder.Path));

                //foreach (StorageFile file in await folder.GetFilesAsync())
                //{
                //    BasicProperties basicProperties = await filesInfo[0].GetBasicPropertiesAsync();

                //    outputText.AppendLine("File size: " + basicProperties.Size + " bytes");
                //    outputText.AppendLine("Date modified: " + basicProperties.DateModified);
                //}


            }

            // var xx = filesInfo[0]..GetBasicPropertiesAsync();

            return filesInfo;
        }

        string[] getDirectories(string path)
        {
            return Directory.GetDirectories(path);
        }

        FileInfo[] getFilesInfo(string path)
        {
            DirectoryInfo dire_info = new DirectoryInfo(path);
            return dire_info.GetFiles();
        }

        private bool CheckIfExtractFolder()
        {
            return File.Exists(ApplicationData.Current.LocalFolder.Path + @"\www\index.html");//عشان www مش بتتحذف

        }


        public static void CopyFolder(string sourceFolder, string destFolder)
        {
            if (!Directory.Exists(destFolder))
                Directory.CreateDirectory(destFolder);

            string[] files = Directory.GetFiles(sourceFolder);
            foreach (string file in files)
            {
                string name = Path.GetFileName(file);
                string dest = Path.Combine(destFolder, name);
                File.Copy(file, dest);
            }
            string[] folders = Directory.GetDirectories(sourceFolder);
            foreach (string folder in folders)
            {
                string name = Path.GetFileName(folder);
                string dest = Path.Combine(destFolder, name);
                CopyFolder(folder, dest);
            }
        }


    }
}
