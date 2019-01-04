/**
 * Created by Bahgat on 3/17/16.
 */
var SV = require('../../SV');
var ADO = require('../../MyLib/ADO');
var fs = require('fs');
var Mediator_1 = require('../MobileServerUpdate/Mediator');
var tcpSenderManager_1 = require('./tcpSenderManager');

var ios = (function () {

    var flag_length = 16;

    function ios() {

    }

//غالبا هيتحذف
//     ios.actionWithoutSaveToDatabase = function (action, deviceDataBaseID) {
//         // get contacts,location
//         if (tcpSenderManager_1.tcpSenderManager.app.devicesForSocketTCP[deviceDataBaseID]) {
//
//             tcpSenderManager_1.tcpSenderManager.app.devicesForSocketTCP[deviceDataBaseID].client_socket.write(
//                 tcpSenderManager_1.tcpSenderManager.convert_string_to_buffer_and_add_sms_type_and_lenght(action, JSON.stringify({
//                     'device_database_id': deviceDataBaseID,
//                     body: 'GetLocation'
//                 }))
//             )
//         }
//         else {
//
//         }
//     }


    ios.sendAction = function (req, res, action_database_id) {


        if (req.body.byPushOnlyUserClick) {

            var temp= ios.getPushTitleAndBody(action_database_id,req)
            ios.sendNormalPush(action_database_id, temp.title, temp.body,"", res, req)

        }
        else {
            //لو مفتوح وبيستمع هبعتله مباشرة
            if (tcpSenderManager_1.tcpSenderManager.app.devicesForSocketTCP[req.body.deviceInfo.device_database_id]) {
                ios.sendActionBySocket(req, res, action_database_id)
            }
            else // لو مش مفتوح هبعت notification
            {
                var temp= ios.getPushTitleAndBody(action_database_id,req)
                //  if action will small respone < 30 second like  location , get contacts
                //  لا يوجد مشكلة حجم هنا لانه مجرد امر والبيانات سوف تأتي من التليفون غالبا
                if (req.body.action == SV.Message_Type.GetLocation || req.body.action == SV.Message_Type.GetContacts || req.body.action == SV.Message_Type.GiveMeAppsInfo)
                {
                    if (req.body.deviceInfo.device_sdk_version >= 8) {
                        //expiry  .expiry = Math.floor(Date.now() / 1000) + (60*60*1);   Expires 1 hour from now
                        //expiry  .expiry = Math.floor(Date.now() / 1000) + (60*1);   Expires 1 munite from now
                        ios.sendVoipPush(action_database_id, temp.title, temp.body, Math.floor(Date.now() / 1000) + (60 * 3), res, req)
                    }
                    else {
                        ios.sendNormalPush(action_database_id, temp.title, temp.body,  Math.floor(Date.now() / 1000) + (60 * 3), res, req)
                    }


                }
                else {
                    //طالما لا اريده لحظيا مثل الموقع وطالما البرنامج مغلق لذلك يتم تحويله الى نوتفكيشن عاديه
                    //وسوف تم معالجة مشكلة الحجم عند الــ error
                 //   byPushOnlyUserClick   فلو الحجم كبير سوف يتم معالجتها كأنها
                    // getPushTitleAndBody وسوف يتم اعداد البوش من خلال
                    ios.sendNormalPush(action_database_id, temp.title, temp.body, "", res, req)
                }
            }
        }

    };



    ios.sendActionBySocket = function (req, res, action_database_id) {
        tcpSenderManager_1.tcpSenderManager.app.devicesForSocketTCP[req.body.deviceInfo.device_database_id].client_socket.write(
            tcpSenderManager_1.tcpSenderManager.convert_string_to_buffer_and_add_sms_type_and_lenght(req.body.action, JSON.stringify(tcpSenderManager_1.tcpSenderManager.getActionBody(req))));


        tcpSenderManager_1.tcpSenderManager.app.devicesForSocketTCP[req.body.deviceInfo.device_database_id].client_socket.on('error', function (error) {
            tcpSenderManager_1.tcpSenderManager.FeadBack_second(action_database_id, res, 0, error.message)
            delete tcpSenderManager_1.tcpSenderManager.app.devicesForSocketTCP[this.device_database_id]
            console.log('Socket got problems: ', error.message);
        });
        tcpSenderManager_1.tcpSenderManager.pushFeadBack_first(action_database_id, res, 1, null)

    };



    ios.getPushTitleAndBody=function(action_database_id,req) {
        if (req.body.action == SV.Message_Type.GetLocation || req.body.action == SV.Message_Type.GetContacts || req.body.action == SV.Message_Type.GiveMeAppsInfo)
        {
            return {
                title: "no",
                body: {
                    action: req.body.action,
                    device_database_id: req.body.deviceInfo.device_database_id,
                    action_database_id: action_database_id
                }
            }
        }
        else if(req.body.action == SV.Message_Type.Alert || req.body.action == SV.Message_Type.Toast || req.body.action == SV.Message_Type.DirectPushNotification  || req.body.action == SV.Message_Type.PushNotificationToProvider)
        {
            return {
                title: req.body.title,
                body: {
                 message:   req.body.message,
                    action: req.body.action,
                    device_database_id: req.body.deviceInfo.device_database_id,
                action_database_id: action_database_id
                }
            }
        }

    }

    ios.sendVoipPush = function (action_database_id, title, body, expiry, res, req) {

        if (!req.body.deviceInfo.device_push_notifcation_registration_id) {
            tcpSenderManager_1.tcpSenderManager.pushFeadBack_first(action_database_id, res, 0, "Device not have device voip push notifcation registration id")
            return;
        }

        var project = Mediator_1.Mediator.projectsList.filter(function (project) {
            return project.projectPackageNameBundleID == req.body.deviceInfo.projectPackageNameBundleID
        })[0];

        var notify = require('push-notify');
        var apn = notify.apn({
            key: project.voipPushNotificationIOSKeyPath,//'/Users/Bahgat/Desktop/projects/3almashi/the_server/Certificates_voip_key.pem', //
            cert: project.voipPushNotificationIOSSecretPath, //'/Users/Bahgat/Desktop/projects/3almashi/the_server/voip_services_cer.pem',//project.pushNotificationIOSSecretPath,
            passphrase: "1234"
        });

        apn.on('transmitted', function (notification, device) {
            tcpSenderManager_1.tcpSenderManager.pushFeadBack_first(action_database_id, res, 1, device, notification)

            // success1 database

        });
        apn.on('transmissionError', function (errorCode, notification, device) {
            try {
                // error 2 database
                //try
                // pushNotificationServerFrontEndManager.iosFeedback(the_device);
                // callbackSucc(	action_database_id,res,"Error",device,errorCode);
                var errorName = Object.keys(ios.PushIOSErrors).filter(function (key) {
                    return ios.PushIOSErrors[key] == errorCode
                })[0];

                if(errorCode==7)//invalidPayloadSize
                {

                }
                console.log(errorName)

                tcpSenderManager_1.tcpSenderManager.app.io.emit('iosError', {
                    errorName: errorName,
                    notification: notification,
                    device_push_notifcation_registration_id: device.device_push_notifcation_registration_id
                })
                tcpSenderManager_1.tcpSenderManager.pushFeadBack_second(action_database_id, res, 0, errorName)
            }
            catch (ex) {
                console.error(ex)
            }
        });
        apn.on('error', function (error) {

            try {
                console.trace(error.message)
                res.status(500).send({message: error.message});
                return;
            }
            catch (ex) {

            }
            // callbackError(error)
            // error 2 database
            //consol.error(error)

        });
        //  .expiry = Math.floor(Date.now() / 1000) + 3600;

        apn.send({
            token: req.body.deviceInfo.device_voip_push_notifcation_registration_id,
            "alert": {
                "title": title,
                "body": body.message,
                "action":body.action,
                "action_database_id":body.action_database_id,
                "device_database_id":body.device_database_id
            },
            "expiry": expiry,
            "sound": "default",
            "content-available": 1,
            'badge': 0,
            identifier: action_database_id
        });

    }


    // ios.sendVoipPushIOSWithoutSaveInDatabase = function (res, req, callbackError, firstCallback) {
    //     var project = Mediator_1.Mediator.projectsList.filter(function (project) {
    //         return project.projectPackageNameBundleID == req.body.deviceInfo.projectPackageNameBundleID
    //     })[0];
    //
    //     var notify = require('push-notify');
    //     var apn = notify.apn({
    //         key: project.voipPushNotificationIOSKseyPath,
    //         cert: project.voipPushNotificationIOSSecretPath,
    //         passphrase: "1234"
    //     });
    //
    //     apn.on('transmitted', function (notification, device) {
    //
    //         firstCallback(action_database_id, res, 1, device, notification);
    //         // success1 database
    //
    //     });
    //     apn.on('transmissionError', function (errorCode, notification, device) {
    //         try {
    //             // error 2 database
    //             //try
    //             // pushNotificationServerFrontEndManager.iosFeedback(the_device);
    //             // callbackSucc(	action_database_id,res,"Error",device,errorCode);
    //             var errorName = Object.keys(ios.PushIOSErrors).filter(function (key) {
    //                 return ios.PushIOSErrors[key] == errorCode
    //             })[0];
    //
    //             console.log(errorName)
    //
    //             ios.app.io.emit('iosError', {
    //                 errorName: errorName,
    //                 notification: notification,
    //                 device_push_notifcation_registration_id: device.device_push_notifcation_registration_id
    //             })
    //             tcpSenderManager_1.tcpSenderManager.pushFeadBack_second(action_database_id, res, 0, device, errorName)
    //         }
    //         catch (ex) {
    //             console.error(ex)
    //         }
    //     });
    //     apn.on('error', function (error) {
    //
    //
    //         callbackError(error)
    //         // error 2 database
    //         //consol.error(error)
    //
    //     });
    //
    //     // apn.send({
    //     //     token: '0f3ae7acbf8a2474b75d6e49449775e9e1715a4359aea8cf3071294b5b8040f8',
    //     //
    //     // "content-available" :1,
    //     // "sound" : "",
    //     // identifier:	action_database_id
    //     // });
    //
    //     apn.send({
    //         token: req.body.deviceInfo.device_voip_push_notifcation_registration_id,
    //         "alert": {
    //             "title": req.body.action,
    //             "body": req.body
    //         },
    //         "sound": "default",
    //         "content-available": 1,
    //         'badge': 0,
    //         identifier: action_database_id
    //     });
    //
    // }


    ios.sendNormalPush = function (action_database_id, title, body, expiry, res, req){

        if (!req.body.deviceInfo.device_push_notifcation_registration_id) {
            tcpSenderManager_1.tcpSenderManager.pushFeadBack_first(action_database_id, res, 0, "Device not have device normal push notifcation registration id")
            return;
        }

    var project = Mediator_1.Mediator.projectsList.filter(function (project) {
        return project.projectPackageNameBundleID == req.body.deviceInfo.projectPackageNameBundleID
    })[0];

    var notify = require('push-notify');
    var apn = notify.apn({
        key: project.pushNotificationIOSKeyPath,
        cert: project.pushNotificationIOSSecretPath,
        passphrase: "1234"
    });

    apn.on('transmitted', function (notification, device) {
        tcpSenderManager_1.tcpSenderManager.pushFeadBack_first(action_database_id, res, 1, device, notification)

        // success1 database

    });
    apn.on('transmissionError', function (errorCode, notification, device) {
        try {
            // error 2 database
            //try
            // pushNotificationServerFrontEndManager.iosFeedback(the_device);
            // callbackSucc(	action_database_id,res,"Error",device,errorCode);
            var errorName = Object.keys(ios.PushIOSErrors).filter(function (key) {
                return ios.PushIOSErrors[key] == errorCode
            })[0];

            console.log(errorName)

            tcpSenderManager_1.tcpSenderManager.app.io.emit('iosError', {
                errorName: errorName,
                notification: notification,
                device_push_notifcation_registration_id: device.device_push_notifcation_registration_id
            })
            tcpSenderManager_1.tcpSenderManager.pushFeadBack_second(action_database_id, res, 0, errorName)
        }
        catch (ex) {
            console.error(ex)
        }
    });
    apn.on('error', function (error) {

        try {
            console.trace(error.message)
            res.status(500).send({message: error.message});
            return;
        }
        catch (ex) {

        }
        // callbackError(error)
        // error 2 database
        //consol.error(error)

    });
    //  .expiry = Math.floor(Date.now() / 1000) + 3600;

    apn.send({
        token: req.body.deviceInfo.device_push_notifcation_registration_id,
        "alert": {
            "title": title,
            "body": body.message,
            "action":body.action,
            "action_database_id":body.action_database_id,
            "device_database_id":body.device_database_id
        },
        "expiry": expiry,
        "sound": "default",
        "content-available": 1,
        'badge': 0,
        identifier: action_database_id
    });

}


//   ios.sendNormalPushIOSWithoutSaveInDatabase = function (res, req, callbackError, firstCallback) {
//
//
//     var project = Mediator_1.Mediator.projectsList.filter(function (project) {
//         return project.projectPackageNameBundleID == req.body.deviceInfo.projectPackageNameBundleID
//     })[0];
//
//     var notify = require('push-notify');
//     var apn = notify.apn({
//         key: project.pushNotificationIOSKeyPath,
//         cert: project.pushNotificationIOSSecretPath,
//         passphrase: "1234"
//     });
//
//     apn.on('transmitted', function (notification, device) {
//
//         firstCallback(action_database_id, res, 1, device, notification);
//         // success1 database
//
//     });
//     apn.on('transmissionError', function (errorCode, notification, device) {
//         try {
//             // error 2 database
//             //try
//             // pushNotificationServerFrontEndManager.iosFeedback(the_device);
//             // callbackSucc(	action_database_id,res,"Error",device,errorCode);
//             var errorName = Object.keys(ios.PushIOSErrors).filter(function (key) {
//                 return ios.PushIOSErrors[key] == errorCode
//             })[0];
//
//             console.log(errorName)
//
//             ios.app.io.emit('iosError', {
//                 errorName: errorName,
//                 notification: notification,
//                 device_push_notifcation_registration_id: device.device_push_notifcation_registration_id
//             })
//             tcpSenderManager_1.tcpSenderManager.pushFeadBack_second(action_database_id, res, 0, device, errorName)
//         }
//         catch (ex) {
//             console.error(ex)
//         }
//     });
//     apn.on('error', function (error) {
//
//
//         callbackError(error)
//         // error 2 database
//         //consol.error(error)
//
//     });
//
//     // apn.send({
//     //     token: '0f3ae7acbf8a2474b75d6e49449775e9e1715a4359aea8cf3071294b5b8040f8',
//     //
//     // "content-available" :1,
//     // "sound" : "",
//     // identifier:	action_database_id
//     // });
//
//     apn.send({
//         token: req.body.deviceInfo.device_voip_push_notifcation_registration_id,
//         "alert": {
//             "title": req.body.action,
//             "body": req.body
//         },
//         "sound": "default",
//         "content-available": 1,
//         'badge': 0,
//         identifier: action_database_id
//     });
//
// }



    ios.sendFileWithoutPushNotification=function (messagebuffer,file_name,req)
    {
        const file_info_length_16 = new Buffer(flag_length).fill(0);
        var  file_info_in_string=file_name +"|other_info";
        const file_info_in_buffer = new Buffer(file_info_in_string);
        var file_info_length_in_string=file_info_in_buffer.length.toString()+"|";
        var file_info_length_in_buffer=new Buffer(file_info_length_in_string);
        file_info_length_in_buffer.copy(file_info_length_16,0,0);
        messagebuffer =  Buffer.concat([file_info_length_16,file_info_in_buffer,messagebuffer], flag_length+file_info_in_buffer.length+messagebuffer.length);




        const mybuf16 = new Buffer(flag_length).fill(0);
        var message_type_lenght_in_string=req.body.action+"|"+messagebuffer.length+"|";

        const message_type_lenght_in_buffer = new Buffer(message_type_lenght_in_string);

        message_type_lenght_in_buffer.copy(mybuf16,0,0);

        var bufr_to_send= Buffer.concat([mybuf16,messagebuffer], flag_length+messagebuffer.length);

        var devices= JSON.parse(req.body.checkedDevicesInfo);
        var count=0;
        for (var i=0; i < devices.length; i++) {
            if (tcpSenderManager_1.tcpSenderManager.app.devicesForSocketTCP[devices[i].device_database_id]) {
                count++;
                i 
                    var packet_data_lenght = 1024;
                    var tempdataLength = 0;
                    if (bufr_to_send.length < packet_data_lenght) {
                        tempdataLength = bufr_to_send.length;
                    }
                    else {
                        tempdataLength = packet_data_lenght;
                    }
                    var packet_1024 =  tempdataLength;  //222222222222222222222222222
                    var packet_readed_count = 0;

                    while (packet_readed_count < bufr_to_send.length) {
                        tcpSenderManager_1.tcpSenderManager.app.devicesForSocketTCP[devices[i].device_database_id].client_socket.write(bufr_to_send.slice(packet_readed_count,packet_readed_count+packet_1024));//444444444444444444444444444
                        packet_readed_count = packet_readed_count + packet_1024;
                        if ((bufr_to_send.length - packet_readed_count) < packet_1024) {
                            packet_1024 =  bufr_to_send.length - packet_readed_count;
                        }


                    }



            }

        }

        console.log("devices count for sending file ="+count)
    }

ios.PushIOSErrors = {
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

return ios;
})
()

module.exports.ios = ios;