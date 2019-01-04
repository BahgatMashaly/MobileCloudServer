 
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace io.cordova.MyAllPlugins
{

    class SV
    {

        private static readonly ManualResetEvent _resetEvent = new ManualResetEvent(true);

        public static async Task<Stream> Post(string relativeUrl, Stream body)
        {
            try
            {
                //ManualResetEvent _resetEvent = new ManualResetEvent(true);
                //_resetEvent.WaitOne();

                var fullUrl = relativeUrl;
                var httpClient = new HttpClient();


                //  var theContent = new StringContent(strJson, Encoding.UTF8, "application/json");
                var theContent2 = new StreamContent(body);
                // ... Read the string.

                var response = await httpClient.PostAsync(fullUrl, theContent2);

                httpClient.Dispose();
                var content = response.Content;
                var stream = await content.ReadAsStreamAsync();


                response.EnsureSuccessStatusCode();
                if (response.IsSuccessStatusCode)
                {
                    stream.Position = 0;
                    return stream;

                }
                else
                {
                    string result;

                    using (StreamReader reader = new StreamReader(stream, Encoding.UTF8))
                    {
                        result = reader.ReadToEnd();
                    }
                    return new System.IO.MemoryStream(Encoding.UTF8.GetBytes("Error:" + result));
                }
            }
            catch (Exception e)
            {

                Debug.WriteLine(e.Message);
                return new System.IO.MemoryStream(Encoding.UTF8.GetBytes("Error:" + e.Message));

            }

        }

        async void xxx()
        {
            ;
            Stream stremaResult = await SV.Post("/UpdatedLinks/", new MemoryStream(Encoding.UTF8.GetBytes("")));
            byte[] firstbtes = new byte[60];

            stremaResult.Read(firstbtes, 0, 60);
            string firststring = Encoding.UTF8.GetString(firstbtes, 0, firstbtes.Length);
            stremaResult.Seek(0, SeekOrigin.Begin);

            if (firststring.Contains("Error"))
            {

                byte[] firstBytesError = new byte[(int)stremaResult.Length];

                stremaResult.Read(firstBytesError, 0, firstBytesError.Length);
                string result = Encoding.UTF8.GetString(firstBytesError, 0, firstBytesError.Length);
                // EventForcheckUpdateResult("success", "2," + afterApdatePath + ",internet connection is avilable , with external folder but problem with download update so change index.html path then hide splash screen error message =: " + result); // Thread-safe.
                return;
            }


            //  StorageFolder localFolder = ApplicationData.Current.LocalFolder;
            // StorageFile storageFile = await localFolder.CreateFileAsync(tempUpdateFileName, CreationCollisionOption.ReplaceExisting);
            //using (Stream outputStream = await storageFile.OpenStreamForWriteAsync())
            //{
            //    await stremaResult.CopyToAsync(outputStream);
            //}




            // string resultx = await extractZipFile();



        }

    }


}
