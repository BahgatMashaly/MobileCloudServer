/**
 * Created by Bahgat on 3/10/16.
 */

var ADO = require('../../MyLib/ADO');
var Mediator_1 = require('../MobileServerUpdate/Mediator');
var SV = require('../../SV');

var pushNotificationServerFrontEndManager = (function () {




    function pushNotificationServerFrontEndManager() {

    }


    pushNotificationServerFrontEndManager.app=null;



      pushNotificationServerFrontEndManager.pushFeadBack_first=function(action_database_id,res,error_or_ok,result) {

          var the_result = {};
          the_result.error_or_ok = error_or_ok;

          if (error_or_ok == 1) {
              the_result.firest_error_when_sent_to_provider_or_tcp_sending_error = ''

          }
          else {
              the_result.firest_error_when_sent_to_provider_or_tcp_sending_error = result;

          }
          the_result.action_database_id = action_database_id;

          res.json(the_result);

          try {
              ADO.ExecuteNonQuery("update t_actions set error_or_ok =:error_or_ok ,firest_error_when_sent_to_provider_or_tcp_sending_error=:firest_error_when_sent_to_provider_or_tcp_sending_error,update_date_time=now() where action_database_id=:action_database_id", the_result, function (err, result) {
                  if (err) {
                      console.error("error when update action callback1" + err.message);
                      // res.status(500).send({message: err.message});
                  }
                  else {
                      console.log("update action callback 1")
                  }
              });
          }
          catch (e) {
              console.error("error when update action callback 1 " + e)
          }
      }
    pushNotificationServerFrontEndManager.pushFeadBack_second=function(action_database_id,res,error_or_ok,result){
        var the_result={};
        the_result.error_or_ok=error_or_ok;
        if(error_or_ok!=1) {
            console.log(result)
            the_result.second_error_when_sent_from_provider_to_customer_or_tcp_error = JSON.stringify(result);
        }
        else
        {
            the_result.second_error_when_sent_from_provider_to_customer_or_tcp_error=''
        }
        the_result.action_database_id=action_database_id;


        try {
            ADO.ExecuteNonQuery("update t_actions set error_or_ok =:error_or_ok ,second_error_when_sent_from_provider_to_customer_or_tcp_error=:second_error_when_sent_from_provider_to_customer_or_tcp_error,update_date_time=now() where action_database_id=:action_database_id",  the_result, function (err, result) {
                if (err) {
                    console.error("error when update action callbace 2"+err)
                    // res.status(500).send({message: err.message});

                }
                else {
                    console.log("update action callbace  2 ")
                }
            });





        }
        catch (e)
        {
            console.error("eeeeeeeeeeeeeeeeeeeeeeeee")
            console.error(e);
            console.error("error when update notifi"+e)
        }

    }

    pushNotificationServerFrontEndManager.getActionBody=function(req)
    {
        if(req.body.action== SV.Message_Type.DirectPushNotification)
        {
            return  { title: req.body.title, body: req.body.message }
        }

        else if(req.body.action==SV.Message_Type.Alert)
        {
            return  {  title: req.body.title, body: req.body.message}

        }
        else if(req.body.action==SV.Message_Type.PushNotificationToProvider)
        {
            return  {  title: req.body.title, body: req.body.message}
        }

        else if(req.body.action==SV.Message_Type.Toast)
        {
            return     req.body.message
        }

    }
    pushNotificationServerFrontEndManager.sendPushNotification=function(req, res){
        try {
            var temp = {};
            temp.device_databse_id = req.body.deviceInfo.device_database_id;
            temp.device_os = req.body.deviceInfo.device_os;
            temp.message = JSON.stringify(pushNotificationServerFrontEndManager.getActionBody(req));
            temp.the_action = req.body.action;
            temp.device_push_notifcation_registration_id = req.body.deviceInfo.device_push_notifcation_registration_id;
            ADO.ExecuteNonQuery("insert into t_actions (device_databse_id,the_action,device_os,message,add_date_time) values(:device_databse_id,:the_action,:device_os  ,:message , now())", temp, function (err, action_database_id) {
                if (err) {
                    res.status(500).send({message: err.message});
                    return;
                }
                else {
                    if (req.body.deviceInfo.device_os == "android") {

                        pushNotificationServerFrontEndManager.sendAndroid(action_database_id, res, req, function (error) {
                            console.log(err.message)
                            res.status(500).send({message: err.message});
                            return;
                        }, pushNotificationServerFrontEndManager.pushFeadBack_first);

                    }
                    if (req.body.deviceInfo.device_os == "ios") {
                        pushNotificationServerFrontEndManager.sendPushIOS(action_database_id, res, req, function (error) {
                            res.status(500).send({message: error.message});
                            return;
                        }, pushNotificationServerFrontEndManager.pushFeadBack_first);
                    }
                    if (req.body.deviceInfo.device_os == "windows") {
                        pushNotificationServerFrontEndManager.sendWindows(action_database_id, res, req, function (error) {
                            res.status(500).send({message: error.message});
                            return;
                        }, pushNotificationServerFrontEndManager.pushFeadBack_first);
                    }
                }


            });
        }
        catch (ex)
        {
            res.status(500).send({message: ex.message});
        }

    }


    pushNotificationServerFrontEndManager.sendAndroid=function(action_database_id,res,req,callbackError,callbackSucc)
    {
        var pushNotificationAndroidAPIKey= Mediator_1.Mediator.projectsList.filter(function (project) {
            return    project.projectPackageNameBundleID==req.body.deviceInfo.projectPackageNameBundleID

        })[0].pushNotificationAndroidAPIKey;

       var gcm=require('push-notify').gcm({
            apiKey: pushNotificationAndroidAPIKey,
            retries: 1
        });

        gcm.on('transmitted', function (result, message, registrationId) {
///message id
            callbackSucc(action_database_id,res,1,result);

        });

        gcm.on('transmissionError', function (error, message, registrationId) {
//401 mean problem with api key{
            console.log("the error "+error)
if(error.message) {
    callbackSucc(action_database_id, res, 0, error.message);
}
            else
{
    callbackSucc(action_database_id, res, 0, error);
}

        });

        gcm.on('updated', function (result, registrationId) {
            callbackSucc(action_database_id,res,2,result)

        });

        gcm.send({
            registrationId: req.body.deviceInfo.device_push_notifcation_registration_id,
            collapseKey: 'demo',
            delayWhileIdle: true,
            timeToLive: 108,
            delay_while_idle: 1,
            data: {
                title: req.body.title,
                icon: "ic_launcher",
                body: req.body.message

            }
        });



    }

        pushNotificationServerFrontEndManager.sendPushIOS=function(action_database_id,res,req,callbackError,callbackSucc)
    {


        var project= Mediator_1.Mediator.projectsList.filter(function (project) {
            return    project.projectPackageNameBundleID==req.body.deviceInfo.projectPackageNameBundleID
        })[0];

        var notify = require('push-notify');
        var apn = notify.apn({
            key:project.pushNotificationIOSKeyPath,//'/Users/Bahgat/Desktop/projects/3almashi/the_server/Certificates_voip_key.pem', //
            cert:project.pushNotificationIOSSecretPath, //'/Users/Bahgat/Desktop/projects/3almashi/the_server/voip_services_cer.pem',//project.pushNotificationIOSSecretPath,
            passphrase: "1234"
        });

        apn.on('transmitted', function (notification, device) {

            callbackSucc(action_database_id,res,1,device,notification);
            // success1 database

        });
        apn.on('transmissionError', function (errorCode, notification, device) {
            try {
                // error 2 database
                //try
                // pushNotificationServerFrontEndManager.iosFeedback(the_device);
                // callbackSucc(	action_database_id,res,"Error",device,errorCode);
                var errorName = Object.keys(pushNotificationServerFrontEndManager.IOSErrors).filter(function (key) {
                    return pushNotificationServerFrontEndManager.IOSErrors[key] == errorCode
                })[0];

                console.log("kkkkkkkkkkkkkkkkkkkkkkk")
                console.log(errorName)

                pushNotificationServerFrontEndManager.app.io.emit('iosError', {
                    errorName: errorName,
                    notification: notification,
                    device_push_notifcation_registration_id: device.device_push_notifcation_registration_id
                })
                pushNotificationServerFrontEndManager.pushFeadBack_second(action_database_id, res, 0, device, errorName)
            }
            catch (ex)
            {
                console.error(ex)
            }
        });
        apn.on('error', function (error) {

try {
    callbackError(error)
}
catch (ex)
{

}
            // error 2 database
            //consol.error(error)

        });

        // apn.send({
        //     token: '0f3ae7acbf8a2474b75d6e49449775e9e1715a4359aea8cf3071294b5b8040f8',
        //
        // "content-available" :1,
        // "sound" : "",
        // identifier:	action_database_id
        // });


        //voip 0f3ae7acbf8a2474b75d6e49449775e9e1715a4359aea8cf3071294b5b8040f8
        //apn push "0f3ae7acbf8a2474b75d6e49449775e9e1715a4359aea8cf3071294b5b8040f8" -c /Users/Bahgat/Desktop/projects/3almashi/the_server/key.pem -m "Hello from the command line!"
        //283dcf89330c9e0e283774cc1487a736a61fd3d4359752e801ef515ed021968b
            apn.send({
                token: req.body.deviceInfo.device_push_notifcation_registration_id,
                "alert": {
                    "title": req.body.title,
                    "body": req.body.message
                },
                "sound": "default",
                "content-available" : 1,
                'badge': 0,
                identifier:	action_database_id
            });

    }




    pushNotificationServerFrontEndManager.sendWindows=function(action_database_id,res,req,callbackError,callbackSucc)
    {
        var wns = require('push-notify').wns({
            client_id: 'ms-app://s-1-15-2-4033076603-3740069548-1816260583-3188642095-4239979341-3383561154-658288422',//'your Package Security Identifier',
            client_secret: 'u8dJZPii7+nD2qXKrKtQ6mhOPX6pLuOT'
        });
        wns.on('transmitted', function (result) {
            callbackSucc(action_database_id,res,1,null,result);

        });

        wns.on('transmissionError', function (error) {
            callbackSucc(action_database_id,res,0,null,error);

        });
        var options = {};
        options.headers = {};
        options.headers['Content-Type'] = 'application/octet-stream';
// Send notification.


//wns.send({
//  channelURI: 'https://hk2.notify.windows.com/?token=AwYAAAAR6%2bY46c1pcECPBu5xCaFwqFrKIMf5dA15KpunMincoX6VDv0DW23FhfUBf38N1KQj%2fKXXP3E2uHcHh4K7OQACsfp1L4Grw%2b2aDNrnzehyOO9tYy6vbg6vMUCGmufHDuI%3d',
//  //  payload: "<?xml version='1.0' encoding='utf-8'?><toast><visual version='1'><binding template='ToastText03'><text id='1'>Mytitle</text></binding><binding template='ToastText03'><text id='1'>my message</text></binding></visual></toast>",//'XML containing the notification data',
////tite  payload:"<tile><visual version=\"1\"><binding template=\"TileWideText03\"> <text id=\"1\">Hello World! My tile notification</text></binding><binding template=\"TileSquareText04\"><text id=\"1\">Hello World!</text></binding></visual></tile>",
//  payload:"{message:'my message',title:'my title''}",
//  type:'raw' , // 'toast| badge| raw| tile'
//  options:options
//});

        wns.send({
            channelURI: req.body.deviceInfo.device_push_notifcation_registration_id,
            payload: "<?xml version='1.0' encoding='utf-8'?><toast><visual version='1'><binding template='ToastText03'><text id='1'>"+req.body.title+"</text></binding><binding template='ToastText03'><text id='1'>"+req.body.message+"</text></binding></visual></toast>",//'XML containing the notification data',
//tite  payload:"<tile><visual version=\"1\"><binding template=\"TileWideText03\"> <text id=\"1\">Hello World! My tile notification</text></binding><binding template=\"TileSquareText04\"><text id=\"1\">Hello World!</text></binding></visual></tile>",
            // payload:"{message:'my message',title:'my title''}",
            type: 'toast', // 'toast| badge| raw| tile'

        });

    }
    pushNotificationServerFrontEndManager.test_external_customer_info_for_push=function(req, res){
        var temp=[];


        temp.push({customer_id:1234,"system":"طلقة","gender":"male","name":"mohamed","kind":"any1"})
        temp.push({customer_id:123,"system":"طلقة","gender":"female","name":"noha","kind":"any2"})
        temp.push({customer_id:12345,"system":"طلقة","gender":"female","name":"mona","kind":"any3"})
        //temp.push({customer_id:2,"system":"طلقة","gender":"xx"})
        //temp.push({customer_id:3,"system":"طلقة","gender":"xx"})
        //temp.push({customer_id:4,"system":"طلقة","gender":"xx"})



        res.json(temp)
    }

    pushNotificationServerFrontEndManager.iosFeedback=function(projectPackageNameBundleID)
    {
        var project= Mediator_1.Mediator.projectsList.filter(function (project) {
            return    project.projectPackageNameBundleID==projectPackageNameBundleID
        })[0];


        var apn = require('apn');





      var feedbackOptions = {
          key: project.pushNotificationIOSKeyPath,
          cert: project.pushNotificationIOSSecretPath,
          passphrase: "1234"

      };

        var feedback =new apn.Feedback(feedbackOptions);

        feedback.on('feedback', function (feedbackData) {
            var time, device;
            feedbackData.forEach(function(feedbackItem) {
                console.log("Device: " +
                    feedbackItem.device.toString("hex") +
                    " has been unreachable, since: " +
                    feedbackItem.time);
            });
        });
        //feedback.on('feedbackError', console.error);


    }


    pushNotificationServerFrontEndManager.IOSErrors = {
        "noErrorsEncountered": 0,
        "processingError": 1,
        "missingDeviceToken": 2,
        "missingTopic": 3,
        "missingPayload": 4,
        "invalidTokenSize": 5,
        "invalidTopicSize": 6,
        "invalidPayloadSize": 7,
        "invalidToken": 8,
        "apnsShutdown": 10,
        "none": 255,
        "retryLimitExceeded": 512,
        "moduleInitialisationFailed": 513,
        "connectionRetryLimitExceeded": 514, // When a connection is unable to be established. Usually because of a network / SSL error this will be emitted
        "connectionTerminated": 515
    };

    return pushNotificationServerFrontEndManager;
})()

module.exports.pushNotificationServerFrontEndManager = pushNotificationServerFrontEndManager;