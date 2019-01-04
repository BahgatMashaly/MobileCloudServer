/**
 * Created by Bahgat on 3/17/16.
 */
var SV = require('../../SV');
var ADO = require('../../MyLib/ADO');
var fs = require('fs');
var Mediator_1 = require('../MobileServerUpdate/Mediator');
var moment = require('moment');
var android_1 = require('./android');
var ios_1 = require('./ios');
 
var tcpSenderManager = (function () {

    var flag_length=16;
    function tcpSenderManager() {
console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
    }


    tcpSenderManager.app=null;

   
    
    tcpSenderManager.pushFeadBack_first=function(action_database_id,res,error_or_ok,result){

        var the_result={};
        the_result.error_or_ok=error_or_ok;
console.log(result)
        if(error_or_ok==1) {
            the_result.firest_error_when_sent_to_provider_or_tcp_sending_error=''

        }
        else
        {   the_result.firest_error_when_sent_to_provider_or_tcp_sending_error = result;

        }
        the_result.action_database_id=action_database_id;

        res.json(the_result);
        try {

            ADO.ExecuteNonQuery("update   t_actions set error_or_ok =:error_or_ok ,firest_error_when_sent_to_provider_or_tcp_sending_error=:firest_error_when_sent_to_provider_or_tcp_sending_error,update_date_time=now() where action_database_id=:action_database_id",  the_result, function (err, result) {
                if (err) {
                    console.error("error when update action callback1"+err.message)
                    // res.status(500).send({message: err.message});

                }
                else {
                    console.log("update action callback 1")
                }
            });
        }
        catch (e)
        {
            console.error("error when update action callback1"+e)
        }

    }

    tcpSenderManager.FeadBack_second=function(action_database_id,res,error_or_ok,result){
        var the_result={};
        the_result.error_or_ok=error_or_ok;

        if(error_or_ok!=1) {
            the_result.second_error_when_sent_from_provider_to_customer_or_tcp_error = result;
        }
        else
        {
            the_result.second_error_when_sent_from_provider_to_customer_or_tcp_error=''
        }
        the_result.action_database_id=action_database_id;

        try {

            ADO.ExecuteNonQuery("update   t_actions set error_or_ok =:error_or_ok ,second_error_when_sent_from_provider_to_customer_or_tcp_error=:second_error_when_sent_from_provider_to_customer_or_tcp_error,update_date_time=now() where action_database_id=:action_database_id",  the_result, function (err, result) {
                if (err) {
                    console.error("error when update action callback1"+err.message)
                    // res.status(500).send({message: err.message});

                }
                else {
                    console.log("update action callback 2")
                }
            });
        }
        catch (e)
        {
            console.error("error when update action callback 2 "+e)
        }



    }

    tcpSenderManager.getActionBody=function(req)
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
        else if(req.body.action==SV.Message_Type.GetLocation)
        {
            return  {  device_database_id:  req.body.deviceInfo.device_database_id, body: 'GetLocation'}
        }
        else if(req.body.action==SV.Message_Type.ShutdownDevice||req.body.action==SV.Message_Type.ShutdownDeviceForced||req.body.action==SV.Message_Type.RestartDevice||req.body.action==SV.Message_Type.RestartDeviceForced)
        {
            return "";

        }
        else if(req.body.action==SV.Message_Type.InstallApplication ||req.body.action==SV.Message_Type.InstallApplicationSilently||req.body.action==SV.Message_Type.CloseApplication||req.body.action==SV.Message_Type.CloseApplicationForced||req.body.action==SV.Message_Type.OpenApplication||req.body.action==SV.Message_Type.OpenApplicationForced
            || req.body.action==SV.Message_Type.UninstallApplication||req.body.action==SV.Message_Type.UninstallApplicationSilently||req.body.action==SV.Message_Type.UpdateApplication||req.body.action==SV.Message_Type.UpdateApplicationSilently)
        {
            return  {  packageName: req.body.bundleID}
        }
        else if(req.body.action==SV.Message_Type.GetContacts)
        {
            var server_http_tack_contack_link=SV.Protocole +SV.HttpIPForGetContact+":"+req.socket.localPort+"/tcp_sender/takeContacts"

            return  { server_http_tack_contack_link:server_http_tack_contack_link, device_database_id:  req.body.deviceInfo.device_database_id}
        }


    }


    tcpSenderManager.convert_string_to_buffer_and_add_sms_type_and_lenght=function(type,sms)
    {

        const mybuf16 = new Buffer(flag_length).fill(0);
        var messagebuffer;
        if(sms)
        {
            messagebuffer = new Buffer(sms.toString());
        }
        else
        {
            messagebuffer = new Buffer("");
        }


        var message_type_lenght_in_string=type+"|"+messagebuffer.length+"|";

        const message_type_lenght_in_buffer = new Buffer(message_type_lenght_in_string);

        message_type_lenght_in_buffer.copy(mybuf16,0,0)

        var bufr_to_send= Buffer.concat([mybuf16,messagebuffer], flag_length+messagebuffer.length);

        //  console.log("will send :" + bufr_to_send.toString())
        return bufr_to_send;
    }

    
    
    tcpSenderManager.actionWithoutSaveToDatabase=function(action){

        if(action== SV.Message_Type.WhereAreMyCustomersNow)
        {
            var temp_count=0;
            for (var key_is_device_databse_id in tcpSenderManager.app.devicesForSocketTCP) {
                //  that.app.devicesForSocketTCP[device_database_id]={'client_socket':that_soket,'device_info':JSON.parse(data_only).device_info} ;
                //device_info
                temp_count++;
                if (tcpSenderManager.app.devicesForSocketTCP[key_is_device_databse_id].device_info.device_os == "android")
                {
                    android_1.android.actionWithoutSaveToDatabase(action,key_is_device_databse_id)

                }
                else if (tcpSenderManager.app.devicesForSocketTCP[key_is_device_databse_id].device_info.device_os == "ios")
                {
                    ios_1.ios.actionWithoutSaveToDatabase(action,key_is_device_databse_id)

                }
                else {
                    //xxx
                }

            }
        }



    }



    tcpSenderManager.send_actions = function (req,res) {
        //  res.json({ErrorOrOK:"OK",device_database_id:req.body.device_database_id});

        var the_action=  req.body.action;
        console.log("action "+req.body.action)
        if(req.body.action==SV.Message_Type.WhereAreMyCustomersNow)
        {
            res.json("OK");
            tcpSenderManager.actionWithoutSaveToDatabase(req.body.action);
              return;
        }
        try {
            var temp={};
            temp.device_databse_id=  req.body.deviceInfo.device_database_id;
            temp.device_os=    req.body.deviceInfo.device_os;
            temp.message=  JSON.stringify(tcpSenderManager.getActionBody(req));
            if(!temp.message)
            {
                temp.message=req.body.action;
            }
            temp.the_action=  req.body.action;
            ADO.ExecuteNonQuery(" insert into t_actions (device_databse_id,the_action,device_os,message,add_date_time) values(:device_databse_id,:the_action,:device_os  ,:message , now())", temp, function (err, action_database_id) {
                if (err) {
                    res.status(500).send({message: err.message});
                    return;
                }

                if (req.body.deviceInfo.device_os == "android") {
                    android_1.android.sendAction(req, res,action_database_id);
                }
                else if (req.body.deviceInfo.device_os == "ios") {
                    ios_1.ios.sendAction(req, res,action_database_id);
                }
                else //windows
                {
                    //xxx
                }
            });
        }
        catch (ex)
        {
            res.status(500).send({ message: ex.message });
        }
    }


  
    tcpSenderManager.pushFeadBack_second=function(action_database_id,res,error_or_ok,result){
        var the_result={};
        the_result.error_or_ok=error_or_ok;

        if(error_or_ok!=1) {
            the_result.second_error_when_sent_from_provider_to_customer_or_tcp_error = result;
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

            console.error("error when update notifi"+e)
        }

    }


     
    tcpSenderManager.receive_file= function(req, res) {
        res.json("OK");
       var now = moment(new Date());

 
    var file_name =   now.format("DD-MM-YYYY HH-mm-ss")+ req.files[0].originalname;

        var messagebuffer =req.files[0].buffer;
        fs.writeFile( file_name, messagebuffer, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });


        if(req.body.action==SV.Message_Type.AudioFile
            || req.body.action==SV.Message_Type.AudioFileForcedPlay
            || req.body.action==SV.Message_Type.VideoFile
            || req.body.action==SV.Message_Type.VideoForcedPlay
            || req.body.action==SV.Message_Type.SendFile
            || req.body.action==SV.Message_Type.SendFileForcedOpen
            || req.body.action==SV.Message_Type.InstallApplication
            || req.body.action==SV.Message_Type.InstallApplicationSilently ) {
               tcpSenderManager.sendFileWithoutPushNotification(messagebuffer, file_name, req)

        }
        else if(false)//with bush notification
        {

        }
        
       

    };


    tcpSenderManager.sendFileWithoutPushNotification=function (messagebuffer,file_name,req)
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
       console.log("buffer to send : "+ bufr_to_send.length)
        var devices= JSON.parse(req.body.checkedDevicesInfo);
        var count=0;
        for (var i=0; i < devices.length; i++) {
            if (tcpSenderManager.app.devicesForSocketTCP[devices[i].device_database_id]) {
                count++;

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
                        tcpSenderManager.app.devicesForSocketTCP[devices[i].device_database_id].client_socket.write(bufr_to_send.slice(packet_readed_count,packet_readed_count+packet_1024));//444444444444444444444444444
                        packet_readed_count = packet_readed_count + packet_1024;
                        if ((bufr_to_send.length - packet_readed_count) < packet_1024) {
                            packet_1024 =  bufr_to_send.length - packet_readed_count;
                        }


                    }



            }

        }

        console.log("devices count for sending file ="+count)
    }




//     tcpSenderManager.receive_file1= function(req, res) {
//         console.log("hhhhhhhhhhhhhhhhhhhh");
//
//
//
//         const mybuf16 = new Buffer(flag_length).fill(0);
//
//         var messagebuffer =req.files[0].buffer;
//         // fs.writeFile("zzzz.m4a" , messagebuffer, function(err) {
//         //     if(err) {
//         //         return console.log(err);
//         //     }
//         //     console.log("The file was saved!");
//         // });
//
//
//
//     // var ccc=   fs.readFileSync('zzzz.m4a','ascii')
//          messagebuffer=  messagebuffer.toString('ascii', 0, messagebuffer.length)
//         var message_type_lenght_in_string=req.body.action+"|"+messagebuffer.length+"|";
//
//         const message_type_lenght_in_buffer = new Buffer(message_type_lenght_in_string);
//
//         message_type_lenght_in_buffer.copy(mybuf16,0,0)
//        // function(targetBuffer, targetStart, sourceStart, sourceEnd)
//         var bufr_to_send= Buffer.concat([mybuf16,messagebuffer], flag_length+messagebuffer.length);
//
//        var xxc= Array.from(bufr_to_send)
//         // var arr = [];
//         // for (var i = 0; i < bufr_to_send.length; i++) {
//         //     arr.push(bufr_to_send.charCodeAt(i));
//         // }
//         // bufr_to_send=arr;
//        // var bufr_to_compare_delete_it= Buffer.concat([mybuf16,messagebuffer], flag_length+messagebuffer.length);
//        var xx= JSON.parse(req.body.deviceInfo)
//         if(tcpSenderManager.app.devicesForSocketTCP[xx.device_database_id]) {
//             if (tcpSenderManager.app.devicesForSocketTCP[xx.device_database_id].device_info.device_os == "android") {
//
// var packet_data_lenght=1024;
//                 var tempdataLength =0;//to throw exeptopn make it 0
//                 if(bufr_to_send.length <packet_data_lenght)
//                 {
//                     tempdataLength=bufr_to_send.length;
//
//                 }
//                 else
//                 {
//                     tempdataLength =packet_data_lenght;
//                 }
//                 var packet_1024 = new Buffer(tempdataLength).fill(0);
//                 var packet_readed_count=0;
//
//                 while (packet_readed_count<bufr_to_send.length)
//                 {
//                     bufr_to_send.copy(packet_1024,0,packet_readed_count);
//                    // bufr_to_send.copy(bufr_to_compare_delete_it,packet_readed_count,packet_readed_count,packet_1024)
//
//                     tcpSenderManager.app.devicesForSocketTCP[xx.device_database_id].client_socket.write(packet_1024);
//                     packet_readed_count=packet_readed_count+packet_1024.length;
//                     if((bufr_to_send.length - packet_readed_count) > packet_1024.length)
//                     {
//                         packet_1024.fill(0);
//                     }
//                     else
//                     {
//                         packet_1024 = new Buffer(bufr_to_send.length - packet_readed_count).fill(0);
//                     }
//
//                 }
//
//             //  var buf=  Buffer.compare(bufr_to_compare_delete_it,bufr_to_send);
//             }
//         }
//
//
//
//     }


    tcpSenderManager.takeContacts=function(req, res)
    {
try {
    res.json("OK");
    var name_numbers = JSON.parse(req.body.contacts)
    var device_database_id = req.body.device_database_id;

    for (var key in name_numbers) {
        var temp = {device_database_id: device_database_id, number: key, name: name_numbers[key]}

        ADO.ExecuteNonQuery("insert into customer_customer_contacts (device_database_id,number,name) values (:device_database_id,:number,:name)", temp, function (err) {
            if (err) {
                console.error("error when insert customer_customer_contacts  " + err.message)
                // res.status(500).send({message: err.message});

            }

        });

    }
}
        catch (ex)
        {
            console.log(ex);
        }
 
    }

 

    return tcpSenderManager;
})()

module.exports.tcpSenderManager = tcpSenderManager;