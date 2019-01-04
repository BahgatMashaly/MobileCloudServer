/**
 * Created by Bahgat on 3/21/16.
 */
var multer = require("multer");
var storage = multer.memoryStorage()

var tcpSenderManager_1 = require('./tcpSenderManager');
var express = require('express');
function tcpSenderRoutes(app)
{
    this.Router = express.Router();

    tcpSenderManager_1.tcpSenderManager.app=app;

    this.Router.post("/upload",  multer(multer({ storage: storage })).array("uploads[]",12) ,tcpSenderManager_1.tcpSenderManager.receive_file);
    
    this.Router.post('/', tcpSenderManager_1.tcpSenderManager.send_actions);//حتى استطيع الوصول الى المتغيرات العامة اللي هنا

    this.Router.post('/takeContacts', tcpSenderManager_1.tcpSenderManager.takeContacts);//حتى استطيع الوصول الى المتغيرات العامة اللي هنا
  
}

module.exports =  tcpSenderRoutes;