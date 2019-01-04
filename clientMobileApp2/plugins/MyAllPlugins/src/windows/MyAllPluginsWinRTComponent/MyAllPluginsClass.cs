using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.IO;

using System.Text;
using Windows.Data.Json;
using Windows.Foundation;
using System.Runtime.InteropServices.WindowsRuntime;
using System.IO.Compression;
using Windows.Storage;
using System.Diagnostics;

namespace MyAllPluginsWinRTComponent
{
    public sealed class MyAllPluginsClass
    {
      public static void MyAllPluginsMethod(string options)
        {
           // var xx = new UnCompresser();
        //  var xxx=  xx.UnZipFile(null, null);
            JsonObject jsonObject = JsonValue.Parse(options).GetObject();

          //  string args =    Windows.Data.Json.JsonValue.Parse(options);
         //   string[] args = JSON.JsonHelper.Deserialize<string[]>(options);
           // string actionName = args[0];

        }
 

        //public static IAsyncOperation<string> DownloadAsStringsAsync(string options)
        //{
        //    return Task.Run<IList<string>>(async () =>
        //    {
        //        xxHash.CalculateHash();
        //        var data = await DownloadDataAsync(id);
        //        return "";
        //    }).AsAsyncOperation();
        //}


    }
}
