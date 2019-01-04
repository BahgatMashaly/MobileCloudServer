
//var Cluster = require('cluster');
var LoginManager = require('../Login/Manager_login');

function LoginRouter(options) {
    
    //this.ADO = require('../../MyLibs/ADO');
     
    this.x = 9;
    
    var express = require('express');
    this.Router = express.Router();
    
    
    var logger3_new_instance = new LoginManager.newInstance();
    
    //http://192.168.1.5:4000/login?student_login_name=usename1&student_password=pass
    this.Router.get('/', logger3_new_instance.Login.bind(this));//حتى استطيع الوصول الى المتغيرات العامة اللي هنا
    //this.Router.get('/', LoginManager.Login);
  //  this.Router.get('/insert', this.insert.bind(this));
  
    
    
    

}
 
LoginRouter.prototype.insert = function (req, res) {
    try {
        var json_parameter = { the_name: req.query["the_name"] };
        this.ADO.ExecuteNonQuery("insert into  table1 (the_name)values(:the_name) " , json_parameter, function (err, result) {
            if (!err) {
                //if (Cluster.worker) {
                //    console.log("worker id for insert query is :" + Cluster.worker.id);
                
                //    res.send("worker id for insert query is :" + Cluster.worker.id);
                //}
                //else {
                res.send("inserted");
                //}
            }
            else {
                res.send(err.message);
                console.log('Error while performing Query.');
            }
        });

    }
    catch (err) {
        res.send(err);
    }
};

 

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
