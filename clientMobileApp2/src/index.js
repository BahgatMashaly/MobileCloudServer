// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints,
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";
    if( document.URL.indexOf( 'http://' ) != -1 || document.URL.indexOf( 'https://' ) != -1)
    {
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src",   "loadFiles.js")
        document.getElementsByTagName("head")[0].appendChild(fileref)

    }
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // alert("start");
        // var x = cordova.file.dataDirectory;
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
        // SpinnerDialog.show('dskkkkkkkkkd', 'sdkkkkkkkkkksd', null)
        // setTimeout(checkUpdate,20000)
        checkUpdate()
        // cordova.exec(null, null, "SplashScreen", "hide", [])
        console.log("start check");


        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();



var checkUpdate = function () {

    if (cordova.platformId == "windows") {
        var fileref = document.createElement('script')
        fileref.setAttribute("type", "text/javascript")
        fileref.setAttribute("src", "loadFiles.js")
        document.getElementsByTagName("head")[0].appendChild(fileref)
        return;
    }

    if(cordova.platformId =="ios")
    {
        var cancelCallback=function(){  return false }
        cordova.exec(cancelCallback, null, 'SpinnerDialog', 'show', [ "Check for Update", "Checking for updates please wait... ", !!cancelCallback ]);
    }


    // SpinnerDialog.show("welcome", "Redirect to home page.", function(){return false})
    cordova.exec(function succ(result) {
        var first_char = result.substring(0, 1);
        console.log(result);
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        if (first_char == "2")
        {
            var res = result.split(",");
            var cancelCallback=function(){  return false }
            cordova.exec(cancelCallback, null, 'SpinnerDialog', 'show', ["welcome", "Redirect to home page.", !!cancelCallback ]);
            history.pushState('', 'New Page Title', res[1]+'index.html');

        }

        fileref.setAttribute("src",   "loadFiles.js")
        document.getElementsByTagName("head")[0].appendChild(fileref)

    }, function fail(result) {
        alert(result);
    }, 'MyAllPluginsClass', 'MyAllPluginsMethod', ['checkUpdate',"http://192.168.1.219:4000/updatemobileproject"])

}


var extractAssets = function () {

    cordova.exec(function succ(result) {
        alert(result);
    }, function fail(result) {
        alert(result);
    }, 'MyAllPluginsClass', 'MyAllPluginsMethod', ['extractAssets'])

}



function checkIfFileExistsx() {
    checkIfFileExists("ms-appdata:///local/www/index.html");
    checkIfFileExists("ms-appdata://local/www/index.html");
    checkIfFileExists("C:\Data\Users\DefApps\AppData\{6DB783B0-F02F-11E4-94C5-1DADBA59E7B6}\local\www\index.html")
    // "file:///data/data/com.company.app/files/filename.extension"


    //  checkIfFileExists("ms-appdata:///local/www/index.html");
}
function checkIfFileExists(path) {
    alert(LocalFileSystem.PERSISTENT);
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fileSystem) {
        console.log(fileSystem)
        alert("Folesystem:" + fileSystem);
        alert("fullPath:" + fileSystem.root.fullPath);
        alert("fileSystem:" + fileSystem.root.fileSystem);
        alert("getDirectory:" + fileSystem.root.getDirectory());
        alert("getDirectory:" + fileSystem.root.toURL());


        try
        {
            alert("applicationDirectory" + cordova.file.applicationDirectory);
            alert("dataDirectory" + cordova.file.dataDirectory);
            alert("applicationStorageDirectory" + cordova.file.applicationStorageDirectory);
        }
        catch(error)
        {
            alert(error);
        }
        console.log(fileSystem)
        fileSystem.root.getFile(path, { create: false }, fileExists, fileDoesNotExist);
    }, getFSFail); //of requestFileSystem
}


function fileExists(fileEntry) {
    alert("File " + fileEntry.fullPath + " exists!");
}
function fileDoesNotExist() {
    alert("file does not exist");
}
function getFSFail(evt) {
    alert(evt.target.error.code);
    console.log(evt.target.error.code);
}



function success(fileEntry) {
    alert("suc" + fileEntry);
    console.log("got the file object");
}
function fail(error) {
    alert("error");
    console.log("error");
}



