
//var Cluster = require('cluster');
var SV1 = require('../../SV');
var LoginManager = require('./LoginManager');

function LoginRouter(options) {
    
    //this.ADO = require('../../MyLib/ADO');
    
    this.x = 9;
    
    var express = require('express');
    this.Router = express.Router();
    
    
    var logger3_new_instance = new LoginManager.newInstance();
    
    //http://192.168.1.5:4000/login?student_login_name=usename1&student_password=pass
    this.Router.get('/getTemp', logger3_new_instance.getTemp.bind(this));//حتى استطيع الوصول الى المتغيرات العامة اللي هنا
    this.Router.post('/getTokenAndSaveUser', logger3_new_instance.getTokenAndSaveUser.bind(this));//حتى استطيع الوصول الى المتغيرات العامة اللي هنا
    this.Router.get('/mainPage',SV1.check_token_and_user_and_session,logger3_new_instance.GoToMainPage.bind(this));//حتى استطيع الوصول الى المتغيرات العامة اللي هنا
    
  
    
     //this.Router.get('/', LoginManager.Login);
  //  this.Router.get('/insert', this.insert.bind(this));
  
    
    
    

}

 

module.exports = new LoginRouter(null); //defualt1111111111111111
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
