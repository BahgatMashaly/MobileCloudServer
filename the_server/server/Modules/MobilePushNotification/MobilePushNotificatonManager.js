/**
 * Created by Bahgat on 3/10/16.
 */

var ADO = require('../../MyLib/ADO');

var MobilePushNotificatonManager= (function () {
    function MobilePushNotificatonManager() {


    }


    MobilePushNotificatonManager.pushNotificatonRegistrationInfo = function (req, res)   {
       // console.log("pushNotificatonRegistrationInfo route")
        try {
       // res.json("push notification info received succ")
        var str="select * from deviceRegisteredPushNotifications where " +MobilePushNotificatonManager.string_where(req.body)
        ADO.ExecuteReader(str, req.body, function (err, result)
        {

            if (err) {
                res.status(500).send({ message: err.message});
                console.error(err.message)
                return;
            }
            if (result.length ==0)//new
            {
                ADO.ExecuteNonQuery("insert into deviceRegisteredPushNotifications (projectPackageNameBundleID,customer_id,device_push_notifcation_registration_id,device_os,device_mac_Addr,device_udid,device_serial,device_android_Id,device_manufacturer,device_brand,device_product,device_model,device_sdk_version) "+
                    " values (:projectPackageNameBundleID,:customer_id,:device_push_notifcation_registration_id,:device_os,:device_mac_Addr,:device_udid,:device_serial,:device_android_Id,:device_manufacturer,:device_brand,:device_product,:device_model,:device_sdk_version)", req.body, function (err, result)
                {

                    if (err) {
                        res.status(500).send({ message: err.message});
                        console.error(err.message)
                        return;
                    }

                });
            }


            else if(result.length >1)
            {
               console.error("device with more registration id")
                return ;
            }
            else if(result.length == 1)
            {
                ADO.ExecuteNonQuery("update  deviceRegisteredPushNotifications " +
                    " set projectPackageNameBundleID=:projectPackageNameBundleID," +
                    "customer_id=:customer_id," +
                    "device_push_notifcation_registration_id=:device_push_notifcation_registration_id," +
                    "device_os=:device_os," +
                    "device_mac_Addr=:device_mac_Addr," +
                    "device_udid=:device_udid," +
                    "device_serial=:device_serial," +
                    "device_android_Id=:device_android_Id," +
                    "device_manufacturer=:device_manufacturer," +
                    "device_brand=:device_brand," +
                    "device_product=:device_product," +
                    "device_model=:device_model," +
                    "device_sdk_version=:device_sdk_version where "+MobilePushNotificatonManager.string_where(req.body) , req.body, function (err, result)
                {

                    if (err) {
                        res.status(500).send({ message: err.message});
                        console.error(err.message)
                        return;
                    }

                    res.json("  push notification info received succ")

                });

            }

        });
    }
    catch (ex)
    {
        res.status(500).send({message: err.message});
        return;
    }


    }

    MobilePushNotificatonManager.voipPushNotificatonRegistrationInfo = function (req, res)   {
        // console.log("pushNotificatonRegistrationInfo route")
       try {
           var str = "select * from deviceRegisteredPushNotifications where " + MobilePushNotificatonManager.string_where(req.body)
           ADO.ExecuteReader(str, req.body, function (err, result) {

               if (err) {
                   res.status(500).send({message: err.message});
                   console.error(err.message)
                   return;
               }
               if (result.length == 0)//new
               {
                   ADO.ExecuteNonQuery("insert into deviceRegisteredPushNotifications (projectPackageNameBundleID,customer_id,device_os,device_mac_Addr,device_udid,device_serial,device_android_Id,device_manufacturer,device_brand,device_product,device_model,device_sdk_version,device_voip_push_notifcation_registration_id) " +
                       " values (:projectPackageNameBundleID,:customer_id,:device_os,:device_mac_Addr,:device_udid,:device_serial,:device_android_Id,:device_manufacturer,:device_brand,:device_product,:device_model,:device_sdk_version,:device_voip_push_notifcation_registration_id)", req.body, function (err, result) {

                       if (err) {
                           res.status(500).send({message: err.message});
                           console.error(err.message)
                           return;
                       }

                   });
               }


               else if (result.length > 1) {
                   console.error("device with more registration id")

                   return;
               }
               else if (result.length == 1) {
                   ADO.ExecuteNonQuery("update  deviceRegisteredPushNotifications " +
                       " set projectPackageNameBundleID=:projectPackageNameBundleID," +
                       "customer_id=:customer_id," +
                       "device_os=:device_os," +
                       "device_mac_Addr=:device_mac_Addr," +
                       "device_udid=:device_udid," +
                       "device_serial=:device_serial," +
                       "device_android_Id=:device_android_Id," +
                       "device_manufacturer=:device_manufacturer," +
                       "device_brand=:device_brand," +
                       "device_product=:device_product," +
                       "device_model=:device_model," +
                       "device_sdk_version=:device_sdk_version " +
                       "device_voip_push_notifcation_registration_id=:device_voip_push_notifcation_registration_id " +

                       " where " + MobilePushNotificatonManager.string_where(req.body), req.body, function (err, result) {

                       if (err) {
                           res.status(500).send({message: err.message});
                           console.error(err.message)
                           return;
                       }

                   });

               }

           });
       }
        catch (ex)
        {
            res.status(500).send({message: err.message});
            return;
        }
        res.json("voip push notification info received succ")
    }



    MobilePushNotificatonManager.string_where =function(the_body)
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

        if(the_body.device_voip_push_notifcation_registration_id)
        {
            if(count==0)
            {
                str = str+  " and ( device_voip_push_notifcation_registration_id = :device_voip_push_notifcation_registration_id " ;
            }
            else {
                str = str+  " or  device_voip_push_notifcation_registration_id = :device_voip_push_notifcation_registration_id " ;
            }

            count++;
        }

        if(count>0)
        {
            str = str+" ) "
        }
return str;


    }




    return MobilePushNotificatonManager;
})()

module.exports.MobilePushNotificatonManager = MobilePushNotificatonManager;