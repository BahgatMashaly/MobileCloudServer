
/**
 * Created by Bahgat on 3/16/16.
 */
//لجعله يشتغل
    // enable this line in www   //  app.io.attach(server);
//enable these two line in app.js
//app.io = require('socket.io')();
//require('./server/Modules/socketReceiver/socketReceiver')(app);
// ============================
// for client
    // enable this line in loadFiles.js
//syncLoadFile("lib/socket.io-1.4.5.js")
    //download this file socket.io-1.4.5.js and put it in lib folder
   // enable this line in SV
// public static ClientSocket:ClientSocket = new ClientSocket(SV.SoketRootServerURL);


var ADO = require('../../MyLib/ADO.js');
module.exports = function(app) {
var that=this;
    app.io.on('connection', function (socket) {
//console.log(socket)
        console.log("client socket connected"+socket.id);
        socket.emit('Hello',"Hello from server to client");
        //console.log(socket);
        app.devicesForSocket[socket.id]={'socket':socket}

 //        socket.on('join', function(device_info) {
 //            console.log("join device customer")
 //           var thatx=this;
 //          that.join_device(device_info,function(device_database_id){
 //            //  var temp={}
 //             // temp["socketId"]=socket.id;
 //              app.devicesForSocket[device_database_id]={'socketId':socket.id} ;
 // console.log("mobile join "+ app.devicesForSocket[device_database_id]);
 //              console.log(app.devicesForSocket);
 //          })
        //});


        socket.on("disconnect", function() {
         delete   app.devicesForSocket[socket.id]
            console.log("disconnect device"+socket.id)
            });


        socket.on('captain', function(data) {

            console.log(captain);
            console.log(data);
            socket.emit('Hello');

        });

        socket.on('chat message', function(data) {
            console.log('chat message');
            socket.emit('Hello');
        });
        socket.on('file', function(data) {
            
            var fs = require('fs');

            fs.open('/Users/Bahgat/Desktop/Untitled3.m4a', 'r', function(status, fd) {
                if (status) {
                    console.log(status.message);
                    return;
                }
var xzz=new Buffer(10).fill(0);
                xzz[0]=200;


                var z = new Int8Array(xzz);
                // z[0]=254;
                // z[1]=255;
                // z[2]=256;
                // z[3]=-254;
                // z[4]=-255;
                // z[5]=-256;


                var tt=new Buffer(z);
                

                z[6]=125;
                z[7]=250;
                z[7]=127;
                z[8]=128;


                var text="سيسيضصثضصثشءؤةزئءورةوةىرؤخضثقجد   خضصقحخثصقتصبيشسشىروةؤىسصثقےےیپٰٓٹںچەڤ”“’ےیپٰ,ےیپٰ,‘’“ے”ڤەظطذد∞ٱ Ωsdasdasd"
             var xxx=   text.charCodeAt(0).toString(2);;
                var length = text.length,
                    output = [];
                for (var i = 0;i < length; i++) {
                    var bin١ = text[i].charCodeAt();
                    var bin = text[i].charCodeAt().toString(2);
                    output.push( bin);
                }

                var buffer = new ArrayBuffer();
                var z = new Int8Array(buffer);

             //   var buffer =  new Int8Array("dsds sdيسي سيسي سيشسي ")
                //buffer3[0]=-40;
                fs.read(fd, buffer, 0, 100, 0, function(err, num) {
                    console.log(buffer.toString('utf-8', 0, num));
                });
            });
           // var xx=new Buffer(data[0].file)
            console.log('file message');
           // socket.emit('file');
        });


    });




this.x1=function(){
    console.log("x1");
}

    var x2=function()
    {
        console.log("this here = global");
    }
     this.join_device=function(device_info,callback)   {
        // console.log("pushNotificatonRegistrationInfo route")

        var str="select device_database_id from deviceRegisteredPushNotifications where " +this.string_where(device_info)
        ADO.ExecuteReader(str, device_info, function (err, result)
        {

            if (err) {

                console.error("error select device to join"+err.message)
                return;
            }
            if (result.length ==0)//new
            {
                ADO.ExecuteNonQuery("insert into deviceRegisteredPushNotifications (projectPackageNameBundleID,customer_id,device_push_notifcation_registration_id,device_os,device_mac_Addr,device_udid,device_serial,device_android_Id,device_manufacturer,device_brand,device_product,device_model,device_sdk_version) "+
                    " values (:projectPackageNameBundleID,:customer_id,:device_push_notifcation_registration_id,:device_os,:device_mac_Addr,:device_udid,:device_serial,:device_android_Id,:device_manufacturer,:device_brand,:device_product,:device_model,:device_sdk_version)", device_info, function (err, result)
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