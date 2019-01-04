using Microsoft.Phone.Net.NetworkInformation;
using Newtonsoft.Json;
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
        public static Task<bool> check_internet_connection_hard()
        {
            //Thread.Sleep(10000);//في المين ثريد
            if (DeviceNetworkInformation.IsNetworkAvailable == false)
            {

                return Task.FromResult(false);

            }

            return Task.Run(() =>
            {
                //Thread.Sleep(3000);//في الثريد
                var manualResetEvent = new ManualResetEvent(false);
                var reachable = false;
                DeviceNetworkInformation.ResolveHostNameAsync(new DnsEndPoint("www.google.com", 80), result =>
                {
                    //Thread.Sleep(10000);//في الثريد
                    reachable = result.NetworkInterface != null;
                    manualResetEvent.Set();
                }, null);

                manualResetEvent.WaitOne(TimeSpan.FromMilliseconds(10000));
                //Thread.Sleep(10000); //في الثريد
                return reachable;
            });
        }


        public static async Task<string> Post(CancellationToken token, string relativeUrl, List<KeyValuePair<string, string>> body)
        {
            try
            {
                //ManualResetEvent _resetEvent = new ManualResetEvent(true);
                //_resetEvent.WaitOne();

                var fullUrl = Constants.ServerUrl + relativeUrl;
                var httpClient = new HttpClient();

                var strJson = body.Aggregate("{", (current, item) => current + (@"""" + item.Key + @""":""" + item.Value + @""","));
                strJson += "}";

                //  var theContent = new StringContent(strJson, Encoding.UTF8, "application/json");
                var theContent2 = new StreamContent(new MemoryStream(Encoding.UTF8.GetBytes(strJson)));
                // ... Read the string.
                var response = await httpClient.PostAsync(fullUrl, theContent2, token);
                httpClient.Dispose();
                var content = response.Content;
                var stream = await content.ReadAsStreamAsync();
                // var result = await content.ReadAsStringAsync();
                string result;
                stream.Position = 0;
                using (StreamReader reader = new StreamReader(stream, Encoding.UTF8))
                {
                    result = reader.ReadToEnd();
                }
                 
                //response.EnsureSuccessStatusCode();
                if (response.IsSuccessStatusCode)
                {
                    // ... Display the result.
                    if (!string.IsNullOrEmpty(result) && result != "null")
                    {
                        return result;
                    }
                }
                else
                {
                    var error = JsonConvert.DeserializeObject<string>(result);
                    return string.Format("{0} | {1}", Constants.NoResult, error);
                    // show the response status code (for debugging issues)
                  //  String failureMsg = "HTTP Status: " + response.StatusCode.ToString() + " - Reason: " + response.ReasonPhrase;
                }
            }
            catch (Exception e)
            {
                return "Error:" + e.Message;
            }

            return "Error";
        }

        public static async Task<Stream> Post( string relativeUrl, Stream body)
        {
            try
            {
                //ManualResetEvent _resetEvent = new ManualResetEvent(true);
                //_resetEvent.WaitOne();

                var fullUrl = Constants.ServerUrl + relativeUrl;
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

        public static async Task<Stream> PostForUpdateLinks(string  Url, Stream body)
        {
            
                //ManualResetEvent _resetEvent = new ManualResetEvent(true);
                //_resetEvent.WaitOne();

                var fullUrl =   Url;
                var httpClient = new HttpClient();


                //  var theContent = new StringContent(strJson, Encoding.UTF8, "application/json");
                var theContent2 = new StreamContent(body);
                // ... Read the string.

                var response = await httpClient.PostAsync(fullUrl, theContent2);

                httpClient.Dispose();
                var content = response.Content;
                var stream = await content.ReadAsStreamAsync();


                response.EnsureSuccessStatusCode();
            return stream;
            //if (response.IsSuccessStatusCode)
            //    {  stream.Position = 0;   }
            //    else
            //    {  string result; 
            //        using (StreamReader reader = new StreamReader(stream, Encoding.UTF8))
            //        { result = reader.ReadToEnd();
            //        }
            //    throw new Exception("Error:" + result);
            //}
         

        }

        public async Task<string> Delete(CancellationToken token, string relativeUrl)
        {
            try
            {
                _resetEvent.WaitOne();

                var fullUrl = Constants.ServerUrl + relativeUrl;

                var httpClient = new HttpClient();
                var response = await httpClient.DeleteAsync(fullUrl, token);
                httpClient.Dispose();

                response.EnsureSuccessStatusCode();
                if (response.IsSuccessStatusCode)
                {
                    using (var content = response.Content)
                    {
                        // ... Read the string.
                        string result = await content.ReadAsStringAsync();

                        // ... Display the result.
                        if (!string.IsNullOrEmpty(result) && result != "null")
                        {
                            return result;
                        }
                    }
                }
            }
            catch (Exception e)
            {
                return Constants.NoResult;
            }
            

            return Constants.NoResult;
        }


        public async Task<string> Get(CancellationToken token, string relativeUrl, string queryString = "")
        {
            try
            {
                _resetEvent.WaitOne();

                var fullUrl = Constants.ServerUrl + relativeUrl;
                if (queryString != "") fullUrl += "?" + queryString;

                var httpClient = new HttpClient();
                var response = await httpClient.GetAsync(fullUrl, token);
                httpClient.Dispose();

                response.EnsureSuccessStatusCode();
                if (response.IsSuccessStatusCode)
                {
                    using (var content = response.Content)
                    {
                        // ... Read the string.
                        string result = await content.ReadAsStringAsync();

                        // ... Display the result.
                        if (!string.IsNullOrEmpty(result) && result != "null")
                        {
                            return result;
                        }
                    }
                }
            }
            catch (Exception e)
            {
                return Constants.NoResult;
            }

            return Constants.NoResult;
        }


        public void OnNetworkChanged( string networkStatusChangedMessage)
        {
            if (networkStatusChangedMessage=="cancel")
            {
                _resetEvent.Reset();
            }
              
            else
            {
                _resetEvent.Set();
            }
        }
    }


    public class Constants
    {
        public static string ServerUrl = "http://192.168.1.4:8000/Services";
         
        public static string NoResult = "no results";

        public static string FacebookAppId = "590722924365825";
        public static string NoConnectionTitle = "خطأ";
        public static string NoConnectionMessage = "خطأ في الاتصال بالإنترنت من فضلك تأكد ان جهازك متصل بالإنترنت ثم اعد المحاوله";
        public static string NoConnectionOkText = "استمرار";

    }
}
