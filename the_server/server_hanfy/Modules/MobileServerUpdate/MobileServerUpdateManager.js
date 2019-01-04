var ADO = require('../../MyLib/ADO');
var Mediator_1 = require('./Mediator');
var archiver = require('archiver');
//var x = new Mediator_1.Mediator();
//x.loadAllFromStart();




 var MobileServerUpdateManager= (function () {

     function MobileServerUpdateManager()
     {

     }
//string OS, string appName, string version, Stream customerLinks
     MobileServerUpdateManager.updateMobileProject = function (req, res)   {
         
         console.log("update mobile")
         try {

             req.rawBody = '';
             req.setEncoding('utf8');
             req.on('data', function(chunk) {
                 req.rawBody += chunk
             });

             req.on('end', function() {


                 var OS=  req.query.OS;
                 var projectPackageNameBundleID =req.query.projectPackageNameBundleID;
                 var version=req.query.version


                 var  jsonObject=JSON.parse(req.rawBody);//JSON.stringify(req.rawBody)

                 var listFilesNeedUpdate = Mediator_1.Mediator.compareFiles(OS, version, projectPackageNameBundleID, jsonObject);


                 res.writeHead(200, {
                     'Content-Type': 'application/zip; charset=UTF-8',
                     'Content-disposition': 'attachment; filename=tempUpdate.zip'
                 });

                 var zip = archiver('zip');

                 // Send the file to the page output.
                 zip.pipe(res);
if(listFilesNeedUpdate) {
    for (var i = 0, len = listFilesNeedUpdate.length; i < len; i++) {
        zip.file(listFilesNeedUpdate[i].phphysicalPath, {name: path.join(listFilesNeedUpdate[i].wwwPath, path.basename(listFilesNeedUpdate[i].phphysicalPath))})
    }
}
                 else
{
    console.error("error app bundle id:"+projectPackageNameBundleID +",OS:"+OS + ",version:"+version)
}


                 zip.finalize(function(err, bytes) {
                     if (err) {
                         throw err;
                     }

                     console.log(bytes + ' total bytes');
                 });
                 // zip.end();
                 ///////////////////////////////////////////////////////////////////////////////////////





                 //   next();
             });






         }
         catch (err) {
             res.status(500).send({ error: err.message });
         }


     }
     return MobileServerUpdateManager;
 })();
    
 

module.exports.MobileServerUpdateManager = MobileServerUpdateManager;
//call with
//var logger = require('./logger');
//var logger3_new_instance = new logger.newLoggerInstance('kkk');
////var logger3_new_instance =    logger.__proto__ ; لم تعمل
//logger3_new_instance.namex = "44444444444"

 