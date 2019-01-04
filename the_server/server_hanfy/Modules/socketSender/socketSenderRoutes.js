/**
 * Created by Bahgat on 3/17/16.
 */

var socketSenderManager_1 = require('./socketSenderManager');
var express = require('express');
function socketSenderRoutes(app)
{
    this.Router = express.Router();

    socketSenderManager_1.socketSenderManager.app=app;
    this.Router.post('/runScript', socketSenderManager_1.socketSenderManager.runScript);//حتى استطيع الوصول الى المتغيرات العامة اللي هنا

    this.Router.post('/', socketSenderManager_1.socketSenderManager.PushActions);//حتى استطيع الوصول الى المتغيرات العامة اللي هنا


}

module.exports =  socketSenderRoutes;


//var  MySocketSender_temp= require('../Modules/socketSender/socketSender');
//var socketSender=new MySocketSender_temp(app)
