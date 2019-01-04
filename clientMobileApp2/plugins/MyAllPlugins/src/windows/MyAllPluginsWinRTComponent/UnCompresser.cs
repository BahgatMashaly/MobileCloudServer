using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Text;
using System.Threading.Tasks;
using Windows.Foundation;
using Windows.Storage;
 

namespace MyAllPluginsWinRTComponent
{
    public   sealed class UnCompresser
    {
        public UnCompresser()
        {
           
        }
     

        public IAsyncOperation<bool> UnZipFile(string filename)
        {
            //  return UnZipFilex(file_name).AsAsyncOperation();
            return Task.Run(async () =>
            {
                try
                {
                    var folder = ApplicationData.Current.LocalFolder;
                    StorageFile file = await ApplicationData.Current.LocalFolder.GetFileAsync(filename);
                    using (Stream zipStream = await folder.OpenStreamForReadAsync(file.DisplayName))
                    {
                        using (MemoryStream zipMemoryStream = new MemoryStream((int)zipStream.Length))
                        {
                            await zipStream.CopyToAsync(zipMemoryStream);
                            using (var archive = new ZipArchive(zipMemoryStream, ZipArchiveMode.Read))
                            {
                                foreach (ZipArchiveEntry entry in archive.Entries)
                                {
                                    if (entry.Name == "")
                                    {
                                        // Folder
                                        await CreateRecursiveFolder(folder, entry);
                                    }
                                    else
                                    {
                                        // File
                                        await ExtractFile(folder, entry);
                                    }
                                }
                            }
                        }
                    }
                    try {
                        await file.DeleteAsync();
                    }
                    catch(Exception ex1)
                    {

                    }
                    return true;
                }
                catch (Exception ex)
                {
                    return false;
                }
            }).AsAsyncOperation();
       
             
        }

      
       

        private   async Task<bool> UnZipFilex(string filename)
        {
            try { 
                var folder = ApplicationData.Current.LocalFolder; 
                StorageFile file = await ApplicationData.Current.LocalFolder.GetFileAsync(filename); 
                using (Stream zipStream = await folder.OpenStreamForReadAsync(file.DisplayName))
                { 
                    using (MemoryStream zipMemoryStream = new MemoryStream((int)zipStream.Length))
                    {
                        await zipStream.CopyToAsync(zipMemoryStream); 
                        using (var archive = new ZipArchive(zipMemoryStream, ZipArchiveMode.Read))
                        {
                            foreach (ZipArchiveEntry entry in archive.Entries)
                            { 
                                if (entry.Name == "")
                                {
                                    // Folder
                                    await CreateRecursiveFolder(folder, entry);
                                }
                                else
                                {
                                    // File
                                    await ExtractFile(folder, entry);
                                }
                            }
                        }
                    }
                }
                return true;
            }
            catch(Exception ex)
            {
                return false;
            }
        }

       
        private   async Task CreateRecursiveFolder(StorageFolder folder, ZipArchiveEntry entry)
        {
            var steps = entry.FullName.Split('/').ToList();

            steps.RemoveAt(steps.Count() - 1);

            foreach (var i in steps)
            {
                try
                {
                    var NewFolder = await folder.CreateFolderAsync(i, CreationCollisionOption.OpenIfExists);


                }
                catch (Exception ex)
                {
                    var x = ex;
                }
            }
        }

        private static async Task ExtractFile(StorageFolder folder, ZipArchiveEntry entry)
        {
            var steps = entry.FullName.Split('/').ToList();

            steps.RemoveAt(steps.Count() - 1);

            foreach (var i in steps)
            {
                folder = await folder.CreateFolderAsync(i, CreationCollisionOption.OpenIfExists);
            }

            using (Stream fileData = entry.Open())
            {
                StorageFile outputFile = await folder.CreateFileAsync(entry.Name, CreationCollisionOption.ReplaceExisting);

                using (Stream outputFileStream = await outputFile.OpenStreamForWriteAsync())
                {
                    await fileData.CopyToAsync(outputFileStream);
                    await outputFileStream.FlushAsync();
                }
            }
        }
    }
}




//public static async Task Extract(StorageFolder outFolder, StorageFile file)
//{
//    bool bDelete = false;

//    using (Stream stream = await file.OpenStreamForReadAsync())
//    {
//        using (var archive = new ZipArchive(stream, ZipArchiveMode.Read))
//        {
//            try
//            {
//                foreach (ZipArchiveEntry entry in archive.Entries)
//                {
//                    if (entry.Name != String.Empty)
//                    {
//                        string fileName = entry.Name;
//                        StorageFile newFile = await CreateFile(outFolder, fileName);
//                        using (Stream newFileStream = await newFile.OpenStreamForWriteAsync())
//                        {
//                            using (Stream fileData = entry.Open())
//                            {
//                                await fileData.CopyToAsync(newFileStream);
//                            }
//                        }
//                    }
//                }
//            }
//            catch (Exception ex)
//            {
//                bDelete = true;
//            }
//            finally
//            {
//                if (bDelete)
//                    outFolder.DeleteAsync();
//            }
//        }
//    }
//}

 
 

//private async Task<bool> UnZipFile([ReadOnlyArray] byte[] data, StorageFolder destination)
//{
//    try
//    {
//        var folder = destination;
//        MemoryStream zipMemoryStream = new MemoryStream(data);
//        //var filename = file.DisplayName;
//        //var zipStream = await file.OpenStreamForReadAsync();

//        //MemoryStream zipMemoryStream = new MemoryStream((int)zipStream.Length);

//        //await zipStream.CopyToAsync(zipMemoryStream);
//        var storage = await folder.CreateFolderAsync("www", CreationCollisionOption.OpenIfExists);

//        var archive = new ZipArchive(zipMemoryStream, ZipArchiveMode.Read);

//        foreach (ZipArchiveEntry entry in archive.Entries)
//        {
//            try
//            {
//                if (entry.Name == "")
//                {
//                    // Folder
//                    await CreateRecursiveFolder(storage, entry);
//                }
//                else
//                {
//                    // File
//                    await ExtractFile(storage, entry);
//                }
//            }

//            catch (Exception ex)
//            {
//                Debug.WriteLine(ex.Message);
//            }
//        }

//        return true;
//    }
//    catch (Exception)
//    {
//        return false;
//    }
//}
