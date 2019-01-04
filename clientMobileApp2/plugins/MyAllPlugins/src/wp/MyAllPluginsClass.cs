using System;
using io.cordova.MyAllPlugins;
 

namespace WPCordovaClassLib.Cordova.Commands
{
   public class MyAllPluginsClass : BaseCommand
    {
         
        public void MyAllPluginsMethod(string options)
        { 
         
          string[] args = JSON.JsonHelper.Deserialize<string[]>(options); 
           string actionName = args[0];


            PluginResult result;

            if(actionName=="alert")
            {
                if (actionName != "")
                {
                    result = new PluginResult(PluginResult.Status.OK, "succ");
                }
                else
                {
                    result = new PluginResult(PluginResult.Status.ERROR, "anyerror");
                }

                DispatchCommandResult(result);
            }

            else if(actionName == "checkUpdate")
            {
                try
                {
                    checkUpdate checkupdatex = new checkUpdate();
                    checkupdatex.EventForcheckUpdateResult += Checkupdatex_EventForcheckUpdateResult;
                    checkupdatex.checkUpdateFromServer(args[1]);

                }
                catch (Exception ex)
                {

                    throw;
                }
            }


          
        }

        private void Checkupdatex_EventForcheckUpdateResult(string succededOrFailed, string resultToReturn)
        {

            
            PluginResult Pluginresult;
            if (succededOrFailed != "succeded")
            {
                Pluginresult = new PluginResult(PluginResult.Status.OK, resultToReturn);
            }
            else
            {
                Pluginresult = new PluginResult(PluginResult.Status.ERROR, resultToReturn);
            }

            DispatchCommandResult(Pluginresult);
        }

       




    }
}
