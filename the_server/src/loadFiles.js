/**
 * Created by Bahgat on 2/19/16.
 */

function asyncLoadFile(filPath){
    filetype=  filPath.slice((filPath.lastIndexOf(".") - 1 >>> 0) + 2);
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filPath)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filPath)
    }
    if (typeof fileref!="undefined") {
        document.getElementsByTagName("head")[0].appendChild(fileref)
    }
}


function syncLoadFile(filPath)
{

    var xmlhttp = new XMLHttpRequest();
// open and send a synchronous request
    xmlhttp.open("GET", filPath, false);
    xmlhttp.send();
// add the returned content to a newly created script tag
    var se = document.createElement('script');
    se.type = "text/javascript";
    se.text = xmlhttp.responseText;
    document.getElementsByTagName('head')[0].appendChild(se);
}

(
function loadJSCSSFiles(){
//<link  href="build/css/app.md.css" rel="stylesheet">
// <link ios-href="build/css/app.ios.css" rel="stylesheet">
// <script src="build/js/libs.bundle.js"></script>
//<script src="build/js/app.bundle.js"></script>
//<!--<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBvhp5ELJ3lgUdwq7PQIcZssUiWID8vzQ4"></script>-->
    asyncLoadFile("build/main.css" )
    // loadFile("" )
    var fileref=document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
   // fileref.setAttribute("ios-href", "build/css/app.ios.css")


    //syncLoadFile("lib/socket.io-1.4.5.js")
    syncLoadFile("build/polyfills.js")
    // syncLoadFile("build/main.js")
    syncLoadFile("build/js/libs.bundle.js")
    syncLoadFile("build/js/app.bundle.js")
    if(navigator.userAgent.indexOf("MSIE") != -1 || navigator.userAgent.indexOf("WOW64")!=-1 || navigator.userAgent.indexOf("Phone")!=-1  ) {
        syncLoadFile("shims_for_IE.js")
    }
    

   // asyncLoadFile("build/js/app.bundle.js" )

})();


