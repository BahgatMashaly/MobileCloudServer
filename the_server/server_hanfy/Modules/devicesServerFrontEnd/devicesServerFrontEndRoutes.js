/**
 * Created by Bahgat on 3/19/16.
 */
/**
 * Created by Bahgat on 3/10/16.
 */
var devicesServerFrontEndManager_1 = require('./devicesServerFrontEndManager');
var express = require('express');
function devicesServerFrontEndRoutes(app)
{



    this.Router = express.Router();

    devicesServerFrontEndManager_1.devicesServerFrontEndManager.app=app;


    this.Router.post('/', devicesServerFrontEndManager_1.devicesServerFrontEndManager.getDevices);//حتى استطيع الوصول الى المتغيرات العامة اللي هنا

    this.Router.get('/getAppList',  devicesServerFrontEndManager_1.devicesServerFrontEndManager.getAppList);//حتى استطيع الوصول الى المتغيرات العامة اللي هنا

    this.Router.get('/getAppListThatHaveCustomerInfo',  devicesServerFrontEndManager_1.devicesServerFrontEndManager.getAppListThatHaveCustomerInfo);//حتى استطيع الوصول الى المتغيرات العامة اللي هنا

    this.Router.get('/get_sustomer_customers_info_urls/:project_id',  devicesServerFrontEndManager_1.devicesServerFrontEndManager.get_sustomer_customers_info_urls);//حتى استطيع الوصول الى المتغيرات العامة اللي هنا



    // this.Router.post('/Action', devicesServerFrontEndManager_1.devicesServerFrontEndManager.sendPushNotification);//حتى استطيع الوصول الى المتغيرات العامة اللي هنا



}


module.exports =  devicesServerFrontEndRoutes; //لن يتم اخذ نسخه جديدة وسوف يتم عمل كاش لها وتعامل عل ىانها ستاتيك

