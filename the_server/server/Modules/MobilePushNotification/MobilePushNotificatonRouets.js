/**
 * Created by Bahgat on 3/10/16.
 */
var MobilePushNotificatonManager_1 = require('./MobilePushNotificatonManager');

var express = require('express');
var Router = express.Router();

Router.post('/', MobilePushNotificatonManager_1.MobilePushNotificatonManager.pushNotificatonRegistrationInfo);//حتى استطيع الوصول الى المتغيرات العامة اللي هنا

Router.post('/voipPushNotificatonRegistrationInfo', MobilePushNotificatonManager_1.MobilePushNotificatonManager.voipPushNotificatonRegistrationInfo);//حتى استطيع الوصول الى المتغيرات العامة اللي هنا





module.exports = Router; //defualt1111111111111111


