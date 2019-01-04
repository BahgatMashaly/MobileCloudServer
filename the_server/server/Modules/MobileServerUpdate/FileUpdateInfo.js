/**
 * Created by Bahgat on 2/10/16.
 */

var fileName;
var phphysicalPath;
var wwwPath;
var wwwpathSlash;
var slash;

var checksum;

function FileUpdateInfo(  fileName,   phphysicalPath, wwwPath, wwwpathSlashx,      slashx,   checksum) {

    this.fileName = fileName;
    this.phphysicalPath = phphysicalPath;
    this.wwwPath = wwwPath;
    this.wwwpathSlash = wwwpathSlashx;

    this.checksum = checksum;
    this.slash = slashx;


}


//FileUpdateInfo.prototype.foo = function foo() {
//    console.log(this.bar);
//};


module.exports = FileUpdateInfo;
//1
//call with
//var logger1 = require('./logger');
//logger1.log('This is an informational message');
//======================================================
//2
//module.exports.newInstance = LoginRouter;
//call with
//var logger = require('./logger');
//var logger3_new_instance = new logger.newLoggerInstance('kkk');
////var logger3_new_instance =    logger.__proto__ ; لم تعمل
//logger3_new_instance.namex = "44444444444"

//3
//this calss
