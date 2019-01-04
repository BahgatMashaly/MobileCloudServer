using SharpGIS;
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.IsolatedStorage;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Windows.ApplicationModel;
using Windows.Storage;


namespace io.cordova.MyAllPlugins
{

    public class UnzipAndListFilesFolders
    {
        private const string dUpdateZipFileName = "tempUpdate.zip";
        private const string FOLDER_PREFIX = "\\";
        private const int PADDING_FACTOR = 3;
        private const char SPACE = ' ';
        private static StringBuilder folderContents;
       // private static WLMessages messages = WLMessages.getInstance();
        private static Package package = Package.Current;
        private static StorageFolder installedLocation = package.InstalledLocation;
        public static async Task<string> unzipToIsolatedStoreLocSharpGISLib()
        {
            
            try
            {
              //  delDirIsoStorBeforeUnzip("www");
                IsolatedStorageFile userStoreForApplication = IsolatedStorageFile.GetUserStoreForApplication();
                using (userStoreForApplication)
                {
                    using (IsolatedStorageFileStream isolatedStorageFileStream = new IsolatedStorageFileStream("tempUpdate.zip", FileMode.Open, userStoreForApplication))
                    {
                        using (UnZipper unZipper = new UnZipper(isolatedStorageFileStream))
                        {
                            using (IEnumerator<string> enumerator = unZipper.FileNamesInZip.GetEnumerator())
                            {
                                while (enumerator.MoveNext())
                                {
                                    string current = enumerator.Current;
                                    string fileName = Path.GetFileName(current);
                                    StorageFolder localFolder = ApplicationData.Current.LocalFolder;
                                    string directoryName = Path.GetDirectoryName(current);
                                    if (!string.IsNullOrEmpty(fileName))
                                    {
                                       
                                        if (!Directory.Exists(localFolder.Path +"\\"+ directoryName))
                                        {
                                           // WLUtils.LOG("Directory Created .... \\www\\" + directoryName);
                                            await localFolder.CreateFolderAsync(  directoryName, CreationCollisionOption.OpenIfExists);
                                        }
                                        using (BinaryWriter binaryWriter = new BinaryWriter(await localFolder.OpenStreamForWriteAsync(  directoryName + "\\" + fileName, CreationCollisionOption.ReplaceExisting)))
                                        {
                                            //WLUtils.LOG("Path.GetDirectoryName " + directoryName);
                                            //WLUtils.LOG("filename is www\\" + directoryName + "\\" + fileName);
                                            Stream fileStream = unZipper.GetFileStream(current);
                                            byte[] array = new byte[1028];
                                            if (fileStream != null)
                                            {
                                                int num;
                                                while ((num = fileStream.Read(array, 0, array.Length)) > 0)
                                                {
                                                    binaryWriter.Write(array, 0, num);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
             //   Debugger.Log(0, null, messages.getMessage("WLDirectUpdate.UNZIP_FAILED" + ex.StackTrace));
               // WLUtils.LOG("unzipAndSaveFilesInInstalledLoc (IsolatedStorageException) failed  .... ", ex);
                
                return "Error:" + ex.Message;
            }
          
            return "OK";
        }
        public static bool delDirIsoStorBeforeUnzip(string dirName)
        {
            bool result;
            try
            {
                IsolatedStorageFile userStoreForApplication = IsolatedStorageFile.GetUserStoreForApplication();
                string text = dirName + "\\*";
                string[] fileNames = userStoreForApplication.GetFileNames(text);
                string[] array = fileNames;
                for (int i = 0; i < array.Length; i++)
                {
                    string text2 = array[i];
                    userStoreForApplication.DeleteFile(Path.Combine(dirName, text2));
                }
                string[] directoryNames = userStoreForApplication.GetDirectoryNames(text);
                string[] array2 = directoryNames;
                for (int j = 0; j < array2.Length; j++)
                {
                    string text3 = array2[j];
                    delDirIsoStorBeforeUnzip(Path.Combine(dirName, text3));
                }
                userStoreForApplication.DeleteDirectory(dirName);
                result = true;
            }
            catch (Exception ex)
            {
               // WLUtils.LOG("cleaning or IsolatedStorage (directupdate skins)  .... " + ex);
                result = false;
            }
            return result;
        }


        public static async Task<string> listFilesAndFolders()
        {
            folderContents = new StringBuilder();
            folderContents.AppendLine("\\" + installedLocation.Name);
            await RecurListFilesInFolder(installedLocation, 1);
          //  WLUtils.LOG("folderContents(recurse)  .... " + folderContents);
            return folderContents.ToString();
        }
        private static async Task RecurListFilesInFolder(StorageFolder folder, int indentLevel)
        {
            string text = string.Empty.PadRight(indentLevel * 3, ' ');
            IReadOnlyList<StorageFolder> readOnlyList = await folder.GetFoldersAsync();
            int indentLevel2 = indentLevel + 1;
            using (IEnumerator<StorageFolder> enumerator = readOnlyList.GetEnumerator())
            {
                while (enumerator.MoveNext())
                {
                    StorageFolder current = enumerator.Current;
                    folderContents.AppendLine(text + "\\" + current.Name);
                    await RecurListFilesInFolder(current, indentLevel2);
                }
            }
            IReadOnlyList<StorageFile> readOnlyList2 = await folder.GetFilesAsync();
            using (IEnumerator<StorageFile> var_13 = readOnlyList2.GetEnumerator())
            {
                while (var_13.MoveNext())
                {
                    StorageFile current2 = var_13.Current;
                    folderContents.AppendLine(text + current2.Name);
                }
            }
        }
    }


}
