
//var Cluster = require('cluster');

var project_customer_customers_info_urls_manager = require('./project_customer_customers_info_urls_manager');
var express = require('express');
var Router = express.Router();

Router.put('/', project_customer_customers_info_urls_manager.update);//حتى استطيع الوصول الى المتغيرات العامة اللي هنا
Router.delete('/', project_customer_customers_info_urls_manager.delete);
Router.post('/', project_customer_customers_info_urls_manager.insert);

Router.get('/:project_id', project_customer_customers_info_urls_manager.getbyID);


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
