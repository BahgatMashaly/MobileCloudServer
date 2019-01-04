var jwt = require('./myLib/jwt');
//var mongoose = require('mongoose');
var User = require('./Modules/mongoModels/userModel');

function SV() {
   // this.instanceVariable = instanceVariable;

};

 
SV.staticVariable = "zzz";
SV.tcp_port=9701;
SV.HttpAndSocketPort=5000;
SV.HttpIP="localhost";//wil be http://xxx.com
SV.HttpIPForGetContact="192.168.1.219";//wil be http://xxx.com
SV.Protocole="http://"
SV.check_token_and_user_and_session=   function (req, res, next) {
    try {
        next();
        return;
        //remove last to line to return mongo work
    //if (req.session.port != req.connection._peername.port) {
    //    next(new Error('Failed p'));//ريفريش وانا واقف على المين
    //    return;
    //}
    var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];
    
    if (token) {
        
            //jwt.verfay
            var decoded = jwt.decode(token, req.app.get('jwtSecretSalat') + req.session.port);
            //ثم قراءة البروفايل من الوكن داتا بيز بناءا على الاي دي الموجود في التوكن وبالتحديد في اللايرول 
            User.findOne({ token: token }, function (err, user) {
                console.log(user.token);
                console.log(user['user_id']);
                req.user = user;
                next();
            });
        
    } else {
        next(new Error('Not Authenticated-Token'));
    }

    } catch (err) {
        next(new Error(err.message));
            
    }
}

SV.check_user_Athontcation = function (role) {
   
    //role is peivare variable so we can access it fron insidr return function
    return function (req, res, next) {
        next();
        return;
        //remove last to line to return mongo work
        if ( req.user[role] === 1) {
            next();
        } else {
            next(new Error('Unauthorized Function'));
        }
    }
};



SV.Message_Type = {
    Welcome:95,
    Toast:41,
    DirectPushNotification:42,
    Alert:43,
    GiveMeAppsInfo:44,
    PutMyInfoInTCPList:40,
    PushNotificationToProvider:45,
    GetLocation:46,
    TackMyLocation:47,
    WhereAreMyCustomersNow:48,
    AudioFile:49,
    AudioFileForcedPlay:50, 
    VideoFile:51,
    VideoForcedPlay:52,
    SendFile:53,
    SendFileForcedOpen:54,
    InstallApplication:55,
    InstallApplicationSilently:56,
    UpdateApplication:57,
    UpdateApplicationSilently:58,
    UninstallApplication:59,
    UninstallApplicationSilently:60,
    OpenApplication:61,
    OpenApplicationForced:62,
    CloseApplication:63,
    CloseApplicationForced:64,
    RestartApplication:65,
    RestartApplicationForced:66,
    ShutdownDevice:67,
    ShutdownDeviceForced:68,
    RestartDevice:69,
    RestartDeviceForced:70,
    JavaScript:71,
    Native:72,
    GetContacts:73,
    TackContacts:74,
};
module.exports = SV;

 
//var myInstance = new MyClass('foo');
// myInstance.instanceVariable == "foo"


//var myOtherInstance = new MyClass('bar');
// myInstance.instanceVariable == "bar"

// MyClass.otherInstanceVariable == undefined

//MyClass.staticVariable == "static";