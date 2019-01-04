/**
 * Created by Bahgat on 2/10/16.
 */

var fs = require('fs');

var crc = require('crc');
//var adler32 = require('ADLER32');
var XXHash = require('xxhash')

//var archiver = require('archiver');
var moment = require('moment');

path = require("path");


var FileUpdateInfo = require("./FileUpdateInfo");
var project = (function () {

    function project(
          projectID,
           projectName ,
          projectPackageNameBundleID ,
          projectVersion ,
          projectAndroidPath ,
          projectIOSPath ,
          projectWPPath ,
          projectWindowsPath ,
          projectServerRootFile ,
          enablePushNotification ,
          CustomerInfoURL ,
           activeOrNot,
          pushNotificationAndroidAPIKey,
          pushNotificationIOSKeyPath,
          pushNotificationIOSSecretPath,
          voipPushNotificationIOSKeyPath,
          voipPushNotificationIOSSecretPath,
          pushNotificationWindowsPackageSID,
          pushNotificationWindowsPackageSecretKey
    ){

            this.projectID=projectID;
            this.projectName =projectName;
            this.projectPackageNameBundleID =projectPackageNameBundleID;
            this.projectVersion =projectVersion;
            this.projectAndroidPath=projectAndroidPath;
            this.projectIOSPath =projectIOSPath;
            this.projectWPPath =projectWPPath;
            this.projectWindowsPath = projectWindowsPath;
            this.projectServerRootFile =projectServerRootFile;
            this.enablePushNotification =enablePushNotification;
            this.CustomerInfoURL =CustomerInfoURL;
            this.activeOrNot=activeOrNot;
        this.pushNotificationAndroidAPIKey=pushNotificationAndroidAPIKey;
        this.pushNotificationIOSKeyPath=pushNotificationIOSKeyPath;
        this.pushNotificationIOSSecretPath=pushNotificationIOSSecretPath;
        this.voipPushNotificationIOSKeyPath=voipPushNotificationIOSKeyPath;
        this.voipPushNotificationIOSSecretPath=voipPushNotificationIOSSecretPath;
        this.pushNotificationWindowsPackageSID=pushNotificationWindowsPackageSID;
        this.pushNotificationWindowsPackageSecretKey=pushNotificationWindowsPackageSecretKey;


    }

    var walk = function(dir,isReverseSlash,os ,done) {
        var results = [];
        fs.readdir(dir, function(err, list) {
            if (err) return done(err);
            var pending = list.length;
            if (!pending) return done(null, results);
            list.forEach(function(file) {
                file = path.resolve(dir, file);
                fs.stat(file, function(err, stat) {
                    if (stat && stat.isDirectory()) {
                        walk(file, isReverseSlash,os,function(err, res) {
                            results = results.concat(res);
                            if (!--pending) done(null, results);
                        });
                    } else {
                        var wwwPath=file.substring(file.lastIndexOf("www")-1,file.lastIndexOf(path.basename(file))-1)
                        var wwwpathSlashx =  wwwPath.replace("\\", "/");
                        //var webPath = mediator.start_web_path + "/android" + wwwpathSlashx;
                        //var fileName=path.basename(file);
                        if(isReverseSlash)
                        {

                            //if(os=="IOS")
                            //{
                            //    results.push(new FileUpdateInfo(path.basename(file),file,wwwPath ,wwwpathSlashx,"/", crc.crc32(fs.readFileSync(file)) ,stat.size ));
                            //}
                            //else
                            //{
                                results.push(new FileUpdateInfo(path.basename(file),file,wwwPath ,wwwpathSlashx,"/", XXHash.hash(fs.readFileSync(file),123)));
                            //}

                        }
                        else
                        {
                            //if(os=="IOS") {
                            //    results.push(new FileUpdateInfo(path.basename(file), file, wwwPath, wwwPath, "\\", crc.crc32(fs.readFileSync(file))  , stat.size));
                            //}
                            //else
                            //{
                                results.push(new FileUpdateInfo(path.basename(file), file, wwwPath, wwwPath, "\\", XXHash.hash(fs.readFileSync(file),123)));

                            //}
                        }


                        if (!--pending) done(null, results);
                    }
                });
            });
        });
    };

    function adler32_buf(buf) {
        var a = 1, b = 0, L = buf.length, M;
        for(var i = 0; i < L;) {
            M = Math.min(L-i, 3850)+i;
            for(;i<M;i++) {
                a += buf[i];
                b += a;
            }
            a = (15*(a>>>16)+(a&65535));
            b = (15*(b>>>16)+(b&65535));
        }
        return ((b%65521) << 16) | (a%65521);
    }

    project.prototype.projectFill_updated_files =function(callback)
    {
try {
    var that = this;
    if (this.projectAndroidPath) {

        walk(this.projectAndroidPath, true, "Android", function (err, results) {
            if (err) {
                callback(err)

            }
            else {
                //   var ab = new Uint8Array("hi".length);
                //   for (var i = 0; i < "hi".length; i++) {
                //       ab[i] = "hi".charCodeAt(i);
                //   }
                // //  xxhashJS
                //
                //   var H =new  XXH.XXH( 123 )   // seed = 0xABCD
                //
                //   var h = H.update( 'hi' ).digest().toString();
                //
                //var xx=  XXHash.hash(ab,123);
                //   console.log(h);
                that.updated_files_android = results;

            }
        });
    }

    if (this.projectIOSPath) {
        walk(this.projectIOSPath, true, "IOS", function (err, results) {
            if (err) {
                throw err;
            }
            else {
                that.updated_files_ios = results;

            }
        });
    }

    if (this.projectWPPath) {
        walk(this.projectWPPath, false, "WP", function (err, results) {
            if (err) {
                throw err;
            }
            else {
                that.updated_files_wp = results;

            }
        });
    }

    if (this.projectWindowsPath) {
        walk(this.projectWindowsPath, false, "Windows", function (err, results) {
            if (err) {
                throw err;
            }
            else {
                that.updated_files_windows = results;

            }
        });
    }
}
        catch (ex)
        {
            if(callback) {
                return callback(ex);
            }
            console.error(ex.message)
        }

        if(callback) {
            return callback();
        }



    }



    project.prototype.projectCompareFiles=function(os, version,   customerFiles)
    {
        try {
            var filesToUpdate = [];

            var temp_server_files = [];

            if (os == "android") {
                temp_server_files = this.updated_files_android;
            }
            else if (os == "ios") {
                temp_server_files = this.updated_files_ios;
            }
            else if (os == "wp") {
                temp_server_files = this.updated_files_wp;
            }
            else {
                temp_server_files = this.updated_files_windows;
            }


            for (var i = 0, len = temp_server_files.length; i < len; i++) {
                var CustFileChecksum = customerFiles[temp_server_files[i].wwwpathSlash + temp_server_files[i].slash + temp_server_files[i].fileName];

                if (!CustFileChecksum) {
                    filesToUpdate.push({
                        phphysicalPath: temp_server_files[i].phphysicalPath,
                        wwwPath: temp_server_files[i].wwwPath
                    });
                }
                else {

                    if (CustFileChecksum != temp_server_files[i].checksum) {
                        filesToUpdate.push({
                            phphysicalPath: temp_server_files[i].phphysicalPath,
                            wwwPath: temp_server_files[i].wwwPath
                        });
                    }

                }
            }

        }
        catch (ex){console.error(ex)}
        return filesToUpdate;


    }

   var counter=56000;
    project.prototype.loadServices= function ( callBack)
    {

            var fork = require('child_process').fork;
          var parentDir = path.resolve(this.projectServerRootFile, '../..');
           var child = fork(this.projectServerRootFile,[],{cwd: parentDir,execArgv: ['--debug='+counter++]});




    }


    return project;
})();






exports.project = project;