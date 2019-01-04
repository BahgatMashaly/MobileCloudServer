/**
 * Created by Bahgat on 2/11/16.
 */

var ADO = require('../../MyLib/ADO');

var Project_1 = require("./Project");
var chokidar = require('chokidar');
var path = require('path');

var Mediator = (function () {
    //var watcher;
//var   projectsList = [];
//var  serviceHostList = [];
//var fileWatcherList = [];


    function Mediator() {
        //Mediator.loadAllFromStart();
    }


    Mediator.loadAllFromStart=function(callBack)
    {
        if(callBack)
        {
            Mediator.loadProjectInfoFromDatabase(function(err){

                if(err)
                {
                    callBack(err)
                    return;
                }
                // Mediator.loadServices();
                Mediator.load_Watcher();
                callBack()
            });

        }
        else
        {
            Mediator.loadProjectInfoFromDatabase(function(err){

               // Mediator.loadServices();
                Mediator.load_Watcher();

            });
        }

        // fill_treeview();

    }


    Mediator.loadProjectInfoFromDatabase= function (callBack)
    {
          ADO.ExecuteReader("select * from projects" , null, function (err, result, fields) {
            if (err) {
                callBack( err);

            }
            else {
                Mediator.projectsList=[]
                try {


                    for (var i = 0, len = result.length; i < len; i++){
                        var p=new Project_1.project(
                            result[i].projectID,
                            result[i].projectName ,
                            result[i].projectPackageNameBundleID ,
                            result[i].projectVersion ,
                            Mediator.myjoinPath(result[i].projectAndroidPath),
                            Mediator.myjoinPath(result[i].projectIOSPath),
                            Mediator.myjoinPath(result[i].projectWPPath),
                            Mediator.myjoinPath(result[i].projectWindowsPath),
                            Mediator.myjoinPath(result[i].projectServerRootFile),
                                result[i].enablePushNotification,
                            result[i].CustomerInfoURL,
                            result[i].activeOrNot,
                                result[i].pushNotificationAndroidAPIKey,
                                result[i].pushNotificationIOSKeyPath,
                                result[i].pushNotificationIOSSecretPath,
                            result[i].voipPushNotificationIOSKeyPath,
                            result[i].voipPushNotificationIOSSecretPath,
                                result[i].pushNotificationWindowsPackageSID,
                                result[i].pushNotificationWindowsPackageSecretKey
                            )



                        p.projectFill_updated_files(function(err){
                            if(err) {
                                callBack( err);
                                console.error(err)
                            }
                            else
                            {
                                if(p.projectServerRootFile) {
                                    p.loadServices()

                                }
                             //   callBack();
                            }
                        });


                        Mediator.projectsList.push(p);
                    }
                    callBack();
                }
                catch (e)
                {
                    callBack(e);
                    console.error(e)
                }


            }




        });

    }

    Mediator.myjoinPath= function (the_path) {
        if (the_path) {
            if (  the_path.substring(0, 3) == "www") {
                path.resolve(path.join(the_path))
            }
            else {
                return the_path ;
            }
        }
        else
        {
            return null;
        }
    }
    Mediator.fill_updated_files=function()
    {
        for (var i = 0, len = Mediator.projectsList.length; i < len; i++) {

            Mediator.projectsList[i].projectFill_updated_files();
        }

    }

    Mediator.compareFiles=function(  os,  version,  projectPackageNameBundleID ,  customerFiles)
    {

        for (var i = 0, len = Mediator.projectsList.length; i < len; i++) {
         //   console.log(projectPackageNameBundleID+"|"+Mediator.projectsList[i].projectPackageNameBundleID)
            if(projectPackageNameBundleID==Mediator.projectsList[i].projectPackageNameBundleID) {
                return Mediator.projectsList[i].projectCompareFiles(os, version, customerFiles);
            }
        }


    }



    Mediator.load_Watcher=function()
    {
try {
    if (watcher) {
        watcher.close();
    }

    var pathsToWatch = []
    for (var i = 0, len = Mediator.projectsList.length; i < len; i++) {
        if (Mediator.projectsList[i].projectAndroidPath) {
            pathsToWatch.push(Mediator.projectsList[i].projectAndroidPath);
        }
        if (Mediator.projectsList[i].projectIOSPath) {
            pathsToWatch.push(Mediator.projectsList[i].projectIOSPath);
        }
        if (Mediator.projectsList[i].projectWPPath) {
            pathsToWatch.push(Mediator.projectsList[i].projectWPPath);
        }
        if (Mediator.projectsList[i].projectWindowsPath) {
            pathsToWatch.push(Mediator.projectsList[i].projectWindowsPath);
        }
    }


    // pathsToWatch.push("projects.sqlite")//databasepath
    var watcher = chokidar.watch(pathsToWatch, {ignoreInitial: true});

    watcher.on("all", function (path, event) {
        Mediator.fill_updated_files();
        console.log("update event :" + event + ",  path:" + path);
    })
}
        catch (ex)
        {
            console.error("problem in mediator, may be database not connected  error =" +ex.stack )
        }

    }



    return Mediator;


})();






exports.Mediator = Mediator;


