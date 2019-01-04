/**
 * Created by Bahgat on 3/17/16.
 */
var SV = require('../../SV');
var ADO = require('../../MyLib/ADO');
var fs = require('fs');
var Mediator_1 = require('../MobileServerUpdate/Mediator');
var tcpSenderManager_1 = require('./tcpSenderManager');

var android = (function () {

    var flag_length=16;
    function android() {

    }


    android.actionWithoutSaveToDatabase=function(action,deviceDataBaseID){
         tcpSenderManager_1.tcpSenderManager.app.devicesForSocketTCP[deviceDataBaseID].client_socket.write(
             tcpSenderManager_1.tcpSenderManager.convert_string_to_buffer_and_add_sms_type_and_lenght(action, JSON.stringify({
                    'device_database_id': deviceDataBaseID,
                    body: 'GetLocation'
                }))
            )

    }


    android.sendAction=function (req, res, action_database_id) {
       // var keysx=   Object.keys(tcpSenderManager_1.tcpSenderManager.app.devicesForSocketTCP);
        console.log("bbbbbbbbbbbbbbbbbbbbbb")
        if(!tcpSenderManager_1.tcpSenderManager.app.devicesForSocketTCP[req.body.deviceInfo.device_database_id]) {
            tcpSenderManager_1.tcpSenderManager.pushFeadBack_first(action_database_id,res,0,"Device not connected.")

            return;
        }

        console.log("cccccccccccc")
        tcpSenderManager_1.tcpSenderManager.app.devicesForSocketTCP[req.body.deviceInfo.device_database_id].client_socket.write(

            tcpSenderManager_1.tcpSenderManager.convert_string_to_buffer_and_add_sms_type_and_lenght(req.body.action, JSON.stringify( tcpSenderManager_1.tcpSenderManager.getActionBody(req)) ) );
        console.log("ddddddddddddd")

        tcpSenderManager_1.tcpSenderManager.app.devicesForSocketTCP[req.body.deviceInfo.device_database_id].client_socket.on('error', function(error) {
            tcpSenderManager_1.tcpSenderManager.FeadBack_second(action_database_id,res,0,error.message)
            delete tcpSenderManager_1.tcpSenderManager.app.devicesForSocketTCP[this.device_database_id]
            console.log('Socket got problems: ', error.message);
        });
        tcpSenderManager_1.tcpSenderManager.pushFeadBack_first(action_database_id,res,1,null)


    };

 
    android.sendFileWithoutPushNotification=function (messagebuffer,file_name,req)
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
                if (tcpSenderManager_1.tcpSenderManager.app.devicesForSocketTCP[devices[i].device_database_id].device_info.device_os == "android")
                {

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

        }

        console.log("devices count for sending file ="+count)
    }

 
    return android;
})()

module.exports.android = android;