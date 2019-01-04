
/**
 * Created by Bahgat on 3/16/16.
 */
var ADO = require('../../MyLib/ADO.js');
var SV = require('../../SV');
var net = require('net');






module.exports = function(app) {


this.app=app;
    var flag_length=16; 
     var that=this;


    var Netserver = net.createServer(function(socket) {
        // Increment

        //socket.nickname = "server guestId" + guestId;
        //var clientName = socket.nickname;
        //sockets.push(socket);
        // console.log(clientName + ' joined this chat.');

      socket.write(that.convert_string_to_buffer_and_add_sms_type_and_lenght(SV.Message_Type.GiveMeAppsInfo,"welcome"));

        // Broadcast to others excluding this socket
       // broadcast(clientName, clientName + ' joined this chat.\n');

        // When client sends data
        socket.on('data', function(data_with_flag) {
 try{
            var that_soket=this;
           // var xx=data_with_flag.toString()
//console.log(data_with_flag.toString())

 if(data_with_flag.length < flag_length)
 {

     console.log("heart" + data_with_flag.toString());
     //this is heartbeat with 0 or 1  if application in   background or forground
 }
    else {
     const flag_buf = new Buffer(flag_length).fill(0);
   console.log ("received message :"+data_with_flag.toString());
     //for (var i = 0; i < 20 ; i++) {
     //    buf[i] = data_with_flag[i];
     //}
     data_with_flag.copy(flag_buf, 0, 0, flag_length);
     var flag_string = flag_buf.toString();
     var items = flag_string.split("|");
     var type = parseInt(items[0]);
     var data_length = parseInt(items[1]);

     data_with_flag.copy(flag_buf, 0, 0, flag_length);
     var data_only = new Buffer(data_length).fill(0);
     data_with_flag.copy(data_only, 0, flag_length, data_with_flag.length);

     if (type == SV.Message_Type.PutMyInfoInTCPList) {

         var flag_stringxxx = data_only.toString();
         that.join_device(data_only, function (device_database_id) {
             that_soket.device_database_id = device_database_id
             that.app.devicesForSocketTCP[device_database_id] = {
                 'client_socket': that_soket,
                 'device_info': JSON.parse(data_only).device_info
             };

             console.log("mobile join device_database_id = " + that.app.devicesForSocketTCP[device_database_id].client_socket.device_database_id);
             var count = Object.keys(that.app.devicesForSocketTCP).length;
             console.log("mobiles join : "+ count);
         })
     }

     else if (type == SV.Message_Type.TackMyLocation) {
         that.send_location_to_socket_emit(JSON.parse(data_only))
     }

     else if (type == SV.Message_Type.TackContacts) {

         that.saveContactsInDataBase(JSON.parse(data_only))
     }


 }
        }
        catch (ex)
        {
console.log(ex);
        }


        });







        // When client leaves
        socket.on('end', function() {

            var message = socket.device_database_id + ' left this chat\n';

            // Log it to the server output
            process.stdout.write(message);

            // Remove client from socket array
            removeSocket(socket);

            // Notify all clients
          //  broadcast(clientName, message);
        });


        // When socket gets errors
        socket.on('error', function(error) {
delete that.app.devicesForSocketTCP[this.device_database_id]
            console.log('Socket got problems: ', error.message); 
        });
    });


// Broadcast to others, excluding the sender
    function broadcast(from, message) {

        // If there are no sockets, then don't broadcast any messages
        if (sockets.length === 0) {
            process.stdout.write('Everyone left the chat');
            return;
        }

        // If there are clients remaining then broadcast message
        sockets.forEach(function(socket, index, array){
            // Dont send any messages to the sender
            if(socket.nickname === from) return;

            socket.write(message);

        });

    };

// Remove disconnected client from sockets array
    function removeSocket(socket) {

     //   sockets.splice(sockets.indexOf(socket), 1);
    delete   this.app.devicesForSocketTCP[socket.device_database_id]
    };


// Listening for any problems with the server
    Netserver.on('error', function(error) {

        console.log("So we got problems!", error.message);

    });

// Listen for a port to telnet to
// then in the terminal just run 'telnet localhost [port]'
    Netserver.listen( SV.tcp_port, function() {

        console.log("Netserver listening at http://localhost:" + SV.tcp_port);

    });



    this.convert_string_to_buffer_and_add_sms_type_and_lenght=function(type,sms)
    {
        const mybuf16 = new Buffer(flag_length).fill(0);

        const messagebuffer = new Buffer(sms);

        var message_type_lenght_in_string=type+"|"+messagebuffer.length+"|";

        const message_type_lenght_in_buffer = new Buffer(message_type_lenght_in_string);

        message_type_lenght_in_buffer.copy(mybuf16,0,0)

       var bufr_to_send= Buffer.concat([mybuf16,messagebuffer], flag_length+messagebuffer.length);
        console.log("will send :" + bufr_to_send.toString())
        return bufr_to_send;
    }
    
    this.send_location_to_socket_emit=function (data_only) {
      console.log(  data_only.toString())
      //  var emit_socket =   Object.keys(that.app.devicesForSocket);
        for (var key in that.app.devicesForSocket)
        {
            that.app.devicesForSocket[key].socket.emit("TackMyLocation",data_only)
        }
      //  var xxxx =  this.device_database_id;
     //   var emit_socket =  that.app.devicesForSocket[this.device_database_id];

    };
    
  
    
    this.join_device=function(device_info,callback)   {

      var   device_infox=   JSON.parse(device_info).device_info


        var str="select device_database_id from deviceRegisteredPushNotifications where " +this.string_where( device_infox)
        ADO.ExecuteReader(str,  device_infox, function (err, result)
        {

            if (err) {

                console.error("error select device to join my be database problem not connected"+err.message)
                return;
            }
            if (result.length ==0)//new
            {
                if(!device_infox.device_push_notifcation_registration_id)
                {
                    device_infox.device_push_notifcation_registration_id='';
                }

                if(device_infox.customer_id)
                {
                   var str_insert="insert into deviceRegisteredPushNotifications (projectPackageNameBundleID,customer_id,device_push_notifcation_registration_id,device_os,device_mac_Addr,device_udid,device_serial,device_android_Id,device_manufacturer,device_brand,device_product,device_model,device_sdk_version) "+
                       " values (:projectPackageNameBundleID,:customer_id,:device_push_notifcation_registration_id,:device_os,:device_mac_Addr,:device_udid,:device_serial,:device_android_Id,:device_manufacturer,:device_brand,:device_product,:device_model,:device_sdk_version)"
                }
                else
                {
                    var str_insert="insert into deviceRegisteredPushNotifications (projectPackageNameBundleID,device_push_notifcation_registration_id,device_os,device_mac_Addr,device_udid,device_serial,device_android_Id,device_manufacturer,device_brand,device_product,device_model,device_sdk_version) "+
                        " values (:projectPackageNameBundleID,:device_push_notifcation_registration_id,:device_os,:device_mac_Addr,:device_udid,:device_serial,:device_android_Id,:device_manufacturer,:device_brand,:device_product,:device_model,:device_sdk_version)"

                }

                ADO.ExecuteNonQuery(str_insert,  device_infox, function (err, result)
                {

                    if (err) {

                        console.error(err.message)
                        return;
                    }

                });
            }


            else if(result.length >1)
            {
                console.error("device with more registration id")
                callback(result[0].device_database_id)
                //return ;
            }
            else
            {
                callback(result[0].device_database_id)
            }


        });

    }
    
    this.string_where =function(the_body)
    {

        // (device_udid=“ss” or mac=“xx” or android_id=“xx” or serial=“xx”)
        var count=0;
        var str=" device_os =:device_os   and projectPackageNameBundleID =:projectPackageNameBundleID" ;

        if(the_body.device_udid)
        {
            str = str+  " and ( device_udid =:device_udid " ;
            count++;
        }

        if(the_body.device_mac_Addr )
        {
            try
            {
                if( the_body.device_mac_Addr.indexOf("00:00:00")==-1) {
                    if (count == 0) {
                        str = str + " and ( device_mac_Addr = :device_mac_Addr ";
                    }
                    else {
                        str = str + " or  device_mac_Addr = :device_mac_Addr ";
                    }
                    count++;
                }
            }
            catch(ex)
            {

            }

        }

        if(the_body.device_serial)
        {
            if(count==0)
            {
                str = str+  " and ( device_serial = :device_serial " ;
            }
            else {
                str = str+  " or  device_serial = :device_serial " ;
            }

            count++;
        }

        if(the_body.device_android_Id)
        {
            if(count==0)
            {
                str = str+  " and ( device_android_Id = :device_android_Id " ;
            }
            else {
                str = str+  " or  device_android_Id = :device_android_Id " ;
            }

            count++;
        }

        if(the_body.device_push_notifcation_registration_id)
        {
            if(count==0)
            {
                str = str+  " and ( device_push_notifcation_registration_id = :device_push_notifcation_registration_id " ;
            }
            else {
                str = str+  " or  device_push_notifcation_registration_id = :device_push_notifcation_registration_id " ;
            }

            count++;
        }

        if(count>0)
        {
            str = str+" ) "
        }
        return str;


    }
};