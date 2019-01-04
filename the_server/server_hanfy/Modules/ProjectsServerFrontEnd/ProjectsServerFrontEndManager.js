var fs = require('fs');

var ADO = require('../../MyLib/ADO');
Mediator_1 = require('../MobileServerUpdate/Mediator');
function ProjectsFrontManager() {
    
 

}

ProjectsFrontManager.getAll = function (req, res)   {
  
      try {
        
       // http://localhost:4000/answer?answer_student_id_fr=1&answer_exam_id_fr=Exam1&answer_question_id_fr=1&answer_multiblechoise_id_fr=1

            
        ADO.ExecuteReader("select * from   projects order by projectID" , null, function (err, result, fields) {
            if (err) {
               res.status(500).send({ message: err.message });
                return;
            }
            else {
                res.json(result)
            }

           

             
        });
      
       
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
    }




ProjectsFrontManager.getbyID=function (req, res)   {

    try {

        // http://localhost:4000/answer?answer_student_id_fr=1&answer_exam_id_fr=Exam1&answer_question_id_fr=1&answer_multiblechoise_id_fr=1


        ADO.ExecuteReader("select  * from projects where projects.projectID=:projectID" , req.params, function (err, result, fields) {
            if (err) {
                res.status(500).send({ message: err.message });
                return;
            }
            else {
                res.json(result)
            }
        });

    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
}


ProjectsFrontManager.update = function (req, res) {
    
    try {
        try {
            //projectAndroidPath,projectIOSPath=:projectIOSPath,projectWPPath=:projectWPPath,projectWindowsPath=:projectWindowsPath,projectServerRootFile=:projectServerRootFile
            if(req.body.projectAndroidPath) {
                fs.accessSync(req.body.projectAndroidPath, fs.F_OK);
            }
            if(req.body.projectIOSPath) {
                fs.accessSync(req.body.projectIOSPath, fs.F_OK);
            }
            if(req.body.projectWPPath) {
                fs.accessSync(req.body.projectWPPath, fs.F_OK);
            }
            if(req.body.projectWindowsPath) {
                fs.accessSync(req.body.projectWindowsPath, fs.F_OK);
            }
            if(req.body.projectServerRootFile) {
                fs.accessSync(req.body.projectServerRootFile, fs.F_OK);
            }
            // Do something
        } catch (e) {
            res.status(500).send({ message: e.message });
            return;
        }
         
        ADO.ExecuteNonQuery("update  projects set  projectName=:projectName,projectPackageNameBundleID=:projectPackageNameBundleID,projectVersion=:projectVersion,projectAndroidPath=:projectAndroidPath,projectIOSPath=:projectIOSPath,projectWPPath=:projectWPPath,projectWindowsPath=:projectWindowsPath,projectServerRootFile=:projectServerRootFile,enablePushNotification=:enablePushNotification,activeOrNot=:activeOrNot," +
            " pushNotificationAndroidAPIKey=:pushNotificationAndroidAPIKey , pushNotificationIOSKeyPath=:pushNotificationIOSKeyPath , pushNotificationIOSSecretPath=:pushNotificationIOSSecretPath, voipPushNotificationIOSKeyPath=:voipPushNotificationIOSKeyPath , voipPushNotificationIOSSecretPath=:voipPushNotificationIOSSecretPath,pushNotificationWindowsPackageSID=:pushNotificationWindowsPackageSID,pushNotificationWindowsPackageSecretKey=:pushNotificationWindowsPackageSecretKey  where projectID= :projectID " , req.body, function (err, result, fields) {


            if (err) {

                res.status(500).send({ message: err.message });
                return;
            }
            else {


                Mediator_1.Mediator.loadAllFromStart(function(errx){
                    if(errx)
                    {
                        res.status(500).send({ message: errx.message });
                    }
                    else {
                        res.json(result)
                    }
                });

            }

           

             
        });
      
       
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
}


ProjectsFrontManager.delete = function (req, res) {
    
    try {
        
        
        ADO.ExecuteNonQuery("delete from  projects  where projectID= :projectID " , req.query , function (err, result, fields) {
            if (err) {
                res.status(500).send({ message: err.message });
                return;
            }
            else {
                res.json(result)
            }

           

             
        });
      
       
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
}

ProjectsFrontManager.insert = function (req, res) {
    
    try {
        
        
        ADO.ExecuteNonQuery(" insert into   projects  (projectID ,projectName,projectPackageNameBundleID,projectVersion,projectAndroidPath,projectIOSPath,projectWPPath,projectWindowsPath,projectServerRootFile,enablePushNotification,activeOrNot," +
            " pushNotificationAndroidAPIKey , pushNotificationIOSKeyPath , pushNotificationIOSSecretPath,voipPushNotificationIOSKeyPath , voipPushNotificationIOSSecretPath,pushNotificationWindowsPackageSID,pushNotificationWindowsPackageSecretKey) " +
            "values(:projectID ,:projectName,:projectPackageNameBundleID,:projectVersion,:projectAndroidPath,:projectIOSPath,:projectWPPath,:projectWindowsPath,:projectServerRootFile,:enablePushNotification,:activeOrNot," +
            ":pushNotificationAndroidAPIKey , :pushNotificationIOSKeyPath , :pushNotificationIOSSecretPath, :voipPushNotificationIOSKeyPath , :voipPushNotificationIOSSecretPath,:pushNotificationWindowsPackageSID,:pushNotificationWindowsPackageSecretKey)" , req.body , function (err, result, fields) {
            if (err) {

                res.status(500).send({ message: err.message });
                return;
            }
            else {
                res.json(result)
            }

           

             
        });
      
       
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
}


//module.exports = new LoginManager(null); //defualt1111111111111111
//call with
//var logger1 = require('./logger');
//logger1.log('This is an informational message');

module.exports = ProjectsFrontManager;
//call with
//var logger = require('./logger');
//var logger3_new_instance = new logger.newLoggerInstance('kkk');
////var logger3_new_instance =    logger.__proto__ ; لم تعمل
//logger3_new_instance.namex = "44444444444"

 