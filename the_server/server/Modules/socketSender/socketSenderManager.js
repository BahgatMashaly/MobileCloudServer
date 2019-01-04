/**
 * Created by Bahgat on 3/17/16.
 */
var socketSenderManager = (function () {
    function socketSenderManager() {

    }


    socketSenderManager.app=null;
    socketSenderManager.runScript = function (req,res)
    {
        res.json("OK");
        socketSenderManager.app.io.emit('runScript', req.body);
    };



    socketSenderManager.PushActions = function (req,res)
    {

        res.json({ErrorOrOK:"OK",device_database_id:req.body.device_database_id});


           socketSenderManager.app.io.sockets.connected[ socketSenderManager.app.devicesForSocket[req.body.deviceInfo.device_database_id].socketId].emit(req.body.Action, socketSenderManager.getActionBody(req));
            console.log("send action "+req.body.Action + " to device_database_id : " +req.body.deviceInfo.device_database_id )


    };

    socketSenderManager.getActionBody=function(req)

    {
       if(req.body.Action== 'Direct Push DirectPushNotification')
       {
           return  { title: req.body.title, body: req.body.message }
       }

        else if(req.body.Action=="Alert")
       {
           return  {  title: req.body.title, body: req.body.message}

       }

       else if(req.body.Action=="Toast")
       {
           return     req.body.message

       }
    }




    return socketSenderManager;
})()

module.exports.socketSenderManager = socketSenderManager;