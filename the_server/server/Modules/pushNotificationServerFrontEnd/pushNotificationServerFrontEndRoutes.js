/**
 * Created by Bahgat on 3/10/16.
 */
var pushNotificationServerFrontEndManager_1 = require('./pushNotificationServerFrontEndManager');
var express = require('express');
  function pushNotificationServerFrontEndRoutes(app)
{



     this.Router = express.Router();

    pushNotificationServerFrontEndManager_1.pushNotificationServerFrontEndManager.app=app;

    this.Router.post('/sendPushNotification', pushNotificationServerFrontEndManager_1.pushNotificationServerFrontEndManager.sendPushNotification);//حتى استطيع الوصول الى المتغيرات العامة اللي هنا




}


module.exports =  pushNotificationServerFrontEndRoutes; //لن يتم اخذ نسخه جديدة وسوف يتم عمل كاش لها وتعامل عل ىانها ستاتيك

