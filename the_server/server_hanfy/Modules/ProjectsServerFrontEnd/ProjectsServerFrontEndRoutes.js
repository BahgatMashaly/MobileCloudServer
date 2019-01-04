
//var Cluster = require('cluster');

var ProjectsFrontManager = require('./ProjectsServerFrontEndManager');
var express = require('express');
var Router = express.Router();
 Router.get('/', ProjectsFrontManager.getAll);//حتى استطيع الوصول الى المتغيرات العامة اللي هنا
Router.get('/:projectID', ProjectsFrontManager.getbyID);

Router.put('/', ProjectsFrontManager.update);//حتى استطيع الوصول الى المتغيرات العامة اللي هنا
Router.delete('/', ProjectsFrontManager.delete);
Router.post('/', ProjectsFrontManager.insert);
 
 

module.exports = Router; //defualt1111111111111111
//call with
//var logger1 = require('./logger');
//logger1.log('This is an informational message');

//module.exports.newInstance = LoginRouter;
//call with
//var logger = require('./logger');
//var logger3_new_instance = new logger.newLoggerInstance('kkk');
////var logger3_new_instance =    logger.__proto__ ; لم تعمل
//logger3_new_instance.namex = "44444444444"


//module.exports = router;
