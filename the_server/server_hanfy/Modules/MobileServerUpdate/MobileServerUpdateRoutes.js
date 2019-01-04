
//var Cluster = require('cluster');

var MobileServerUpdateManager_1 = require('./MobileServerUpdateManager');
var express = require('express');
var Router = express.Router();

Router.post('/',MobileServerUpdateManager_1.MobileServerUpdateManager.updateMobileProject);
 
 

module.exports = Router; //defualt1111111111111111
//call with
//var logger1 = require('./logger');
//logger1.log('This is an informational message');

//module.exports.newInstance = LoginRouter;
//call with
//var logger = require('./logger');
//var logger3_new_instance = new logger.newLoggerInstance('kkk');
////var logger3_new_instance =    logger.__proto__ ; لم تعمل
//logger3_new_instance.namex = "444444444"


//module.exports = router;
