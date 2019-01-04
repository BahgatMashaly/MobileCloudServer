
    //cordova.define("MyAllPlugins.MyAllPlugins", function(require, exports, module) {

    //}
    //cordova.commandProxy.add("MyAllPlugins",{
    //    MyAllPluginsMethod: function (successCallback, errorCallback, argArray) {
    //        MyAllPluginsMethodc(successCallback, errorCallback, argArray)
    //    }
    //module.exports = MyAllPlugins;

    //});


    var MyAllPluginsClass = {
        MyAllPluginsMethod: function (successCallback, errorCallback, argArray) {
            if (argArray[0] == "checkUpdate") {
                checkUpdateFromServer(successCallback, errorCallback, argArray);
            }
            else if (argArray[0] == "moveTaskToBack") {
                WinJS.Application.stop()
                WinJS.Application.stop()
                //  window.close()
            }
            else if (argArray[0] == "getDeviceInfo") {
                var deviceInfo={}
                deviceInfo.projectPackageNameBundleID=Windows.ApplicationModel.Package.current.id.name ; 
                var currentDeviceInfor = new Windows.Security.ExchangeActiveSyncProvisioning.EasClientDeviceInformation();
                deviceInfo.device_os=currentDeviceInfor.operatingSystem;
                deviceInfo.device_mac_Addr='';
                
                deviceInfo.device_udid = getHardwareId();
                deviceInfo.device_serial='';
                deviceInfo.device_android_Id=''
                deviceInfo.device_manufacturer= currentDeviceInfor.systemManufacture
                deviceInfo.device_product=currentDeviceInfor.systemProductName
                deviceInfo.device_brand = "Microsoft";
                deviceInfo.device_sdk_version = window.navigator.userAgent.substring(window.navigator.userAgent.indexOf("(") + 1, window.navigator.userAgent.indexOf(";")) + " systemFirmwareVersion : " + currentDeviceInfor.systemFirmwareVersion;
                successCallback(deviceInfo); 
            }
         
        },
        xxHash: function (successCallback, errorCallback, arrayParameter) {
            // var x = MyAllPluginsWinRTComponent.MyAllPluginsClass.myAllPluginsMethod(arrayParameter)
            var res = MyAllPluginsWinRTComponent.xxHash.calculateHash(arrayParameter, -1, 123)

            successCallback(res);

        },

        UnZipFile: function (successCallback, errorCallback, Parameter) {

            MyAllPluginsWinRTComponent.UnCompresser().unZipFile("tempUpdate.zip").then(successCallback, errorCallback)
        }

    };


    module.exports = MyAllPluginsClass;

    require("cordova/exec/proxy").add("MyAllPluginsClass", MyAllPluginsClass);




    function getHardwareId() {
        var ht = Windows.System.Profile.HardwareIdentification.getPackageSpecificToken(null);

        var reader = Windows.Storage.Streams.DataReader.fromBuffer(ht.id);
        var arr = new Array(ht.id.length);
        reader.readBytes(arr);

        var id = "";
        for (var j = 0; j < arr.length; j++) {
            id += arr[j].toString();
        }
        return id;
    }




    function checkUpdateFromServer(successCallback, errorCallback, argArray) {





        var afterApdatePath = "x-wmapp0:/www/";//search for app

        // public event DelegateForAllMyBluginsResult EventForcheckUpdateResult;
        var tempUpdateFileName = "tempUpdate.zip";
        var callBack = function (iSInternetAvilable) {
            //    iSInternetAvilable = true;

            CheckIfExtractFolder().then(function (isExternalFolder) {
                if (!iSInternetAvilable && !isExternalFolder) {

                    // progressDialogx.dismiss();

                    successCallback("1,No internet connection, no external folder so load index from assets then hide splash screen"); // Thread-safe.
                    return;
                }

                else if (!iSInternetAvilable && isExternalFolder) {
                    // progressDialogx.dismiss();
                    successCallback("2," + afterApdatePath + ",No internet connection, with external folder so change index.html path then hide splash screen"); // Thread-safe.

                    return;
                }

                else if (!isExternalFolder) {
                    //            long  freeSize=getFreeSize();
                    //            long assetsSize=getAssetsSize();

                    // changeProgressText("Please Wait... \r\n extract assets");
                    extractAssets().then(function (result) {
                        PrepareFileListThenCallServer(successCallback, errorCallback, argArray);
                    }, function (error) {
                        deleteFolder(Windows.Storage.ApplicationData.current.localFolder.path + "\\www").then(function () {

                            extractAssets().then(function (result) {
                                PrepareFileListThenCallServer(successCallback, errorCallback, argArray);
                            }, function (error) {
                                deleteFolder(Windows.Storage.ApplicationData.current.localFolder.path + "\\www");
                                successCallback("1,internet connection is avilable , no external folder but problem with extract assets so load index from assets then hide splash screen error message =: " + error);

                                return;
                            })
                        }, function (error) {
                            if (error == -2147024894)//folder not found , this is not error
                            {
                                PrepareFileListThenCallServer(successCallback, errorCallback, argArray);
                            }
                            else {
                                successCallback("1,internet connection is avilable , no external folder but problem with delete assets so load index from assets then hide splash screen error message =: " + error);

                                return;
                            }
                        });
                    });
                }

                else {
                    PrepareFileListThenCallServer(successCallback, errorCallback, argArray);
                }


            }, function (error) {
                console.log(error);
            });
        }
        check_internet_connection_hard(callBack);


        WinJS.Application.local.exists("ms-appdata:///local//www/index.html").then(function (x) {
            console.log("hi");
        });






    }


    function check_internet_connection_hard(callBack) {
        //var req = new XMLHttpRequest();

        //try {
        //    req.open("GET", "http://www.google.com", false);
        //    req.send();
        //}
        //catch (err) {
        //    console.log(err.message);
        //}

        if (checkWiFi()) {
            checkWebSite().then(function (result) {
                try {
                    result.close();
                }
                catch (ex) {

                }
                callBack(true)

            }, function (err) {
                return callBack(false);
            });

        }
        else {
            return callBack(false);
        }
    }
    function checkWiFi() {

        var cx = new Windows.Networking.Connectivity.NetworkInformation.getInternetConnectionProfile();

        if ((!('getNetworkConnectivityLevel' in cx)) || ((cx.getNetworkConnectivityLevel()) < 3)) {
            return false;
        }
        else {
            return true;
        }
    }


    function checkWebSite() {

        var hc = new Windows.Web.Http.HttpClient();// Change #1
        var uri = new Windows.Foundation.Uri("http://www.google.com");// Change #1
        return hc.getInputStreamAsync(uri)



    }

    function CheckIfExtractFolder() {
        //      return  Windows.Storage.ApplicationData.current.localFolder.getFileAsync("www\\index.html")
        //.then(function (file) {
        //    console.log("jj")
        //    //data is a file object
        //},
        //function (error) {
        //    console.log("jj")
        //    //error if file does not exist
        //});
        var xx = WinJS.Application.local.exists("\\www\\index.html");
        return xx;
    }



    function extractAssets() {
        var packagex = Windows.ApplicationModel.Package.current.installedLocation.path; //== C:\Data\Programs\{ C93A9131 - E668 - 4759 - A273 - 769B7C231127}\Install
        var store = Windows.Storage.ApplicationData.current.localFolder;// == C:\Data\Users\DefApps\AppData\{ C93A9131 - E668 - 4759 - A273 - 769B7C231127}\Local
        return Windows.Storage.StorageFolder.getFolderFromPathAsync(packagex + "\\www").then(function (wwwinfo) {
            var replace = Windows.Storage.CreationCollisionOption.replaceExisting;
            // return store.createFolderAsync("www", replace).then(function (newdest) {
            return copyFolderAsync(wwwinfo, store)
            // });
        });
    }



    function copyFolderAsync(sourceFolder, destFolder) {
        return destFolder.createFolderAsync(sourceFolder.name, Windows.Storage.CreationCollisionOption.openIfExists).then(function (destSubFolder) {
            return sourceFolder.getFilesAsync().then(function (files) {
                return WinJS.Promise.join(files.map(function (file) {
                    return file.copyAsync(destSubFolder, file.name, Windows.Storage.NameCollisionOption.replaceExisting);
                }));
            }).then(function () {
                return sourceFolder.getFoldersAsync();
            }).then(function (folders) {
                return WinJS.Promise.join(folders.map(function (folder) {
                    return copyFolderAsync(folder, destSubFolder);
                }));
            });
        });
    };

    function deleteFolder(wwwLocalPath) {
        var StorageDeleteOption = Windows.Storage.StorageDeleteOption;
        return Windows.Storage.StorageFolder.getFolderFromPathAsync(wwwLocalPath).then(function (wwwinfo) {

            return wwwinfo.deleteAsync(StorageDeleteOption.permanentDelete)

        })

    }



    function PrepareFileListThenCallServer(successCallback, errorCallback, argArray) {
        var afterApdatePath = "x-wmapp0:/www/";
        return Windows.Storage.StorageFolder.getFolderFromPathAsync(Windows.Storage.ApplicationData.current.localFolder.path + "\\www").then(function (wwwinfo) {
            var x = getFileList(wwwinfo).then(function () {
                console.log(fileList)
                var fileListAsString = JSON.stringify(fileList);
                var utf8 = unescape(encodeURIComponent(fileListAsString));

                var arr = [];
                for (var i = 0; i < utf8.length; i++) {
                    arr.push(utf8.charCodeAt(i));
                }
                //var cryptography = Windows.Security.Cryptography;
                //var cryptoBuffer = cryptography.CryptographicBuffer;
                //var bufferData = cryptoBuffer.convertStringToBinary(fileListAsString, cryptography.BinaryStringEncoding.utf8);
                return get_OS_AppName_Version().then(function (result) {
                    return WinJS.xhr({
                        type: "POST", url: argArray[1] + result,
                        responseType: 'blob',
                        headers: {
                            "Content-Type": "text/plain",

                        },
                        data: utf8
                    }).then(function (result) {
                        // MyAllPluginsWinRTComponent.MyAllPluginsClass.myAllPluginsMethod(argArray)
                        //  var x = new MyAllPluginsWinRTComponent.UnCompresser();
                        var fileContents = result.response;
                        Windows.Storage.ApplicationData.current.localFolder.createFileAsync("tempUpdate.zip", Windows.Storage.CreationCollisionOption.replaceExisting).then(function (file) {



                            return file.openAsync(Windows.Storage.FileAccessMode.readWrite).then(function (stream) {
                                return Windows.Storage.Streams.RandomAccessStream.copyAsync(fileContents.msDetachStream(), stream).then(function () {
                                    return stream.flushAsync().then(function () {
                                        stream.close();
                                        fileContents.msClose();
                                        //  file.close();
                                    });
                                });
                            });

                        }).then(function () {
                            cordova.exec(function (result) {

                                /////////////////////////////////////////////////////////////////////
                                if (result == true) {

                                    successCallback("2," + afterApdatePath + ",internet connection is avilable , with external folder noo error  so change index.html path then hide splash screen "); // Thread-safe.

                                }
                                else {
                                    successCallback("2," + afterApdatePath + ",  internet connection is avilable , with external folder but problem with extractZipFile  so change index.html path then hide splash screen error message =: " + result); // Thread-safe.


                                }

                            }, function (error) {
                                successCallback("2," + afterApdatePath + ",  internet connection is avilable , with external folder but problem with extractZipFile  so change index.html path then hide splash screen error message =: " + error); // Thread-safe.


                                //  console.log(error)
                            }, "MyAllPluginsClass", "UnZipFile", null);
                        });








                    }, function (err) {
                        successCallback("2," + afterApdatePath + ",internet connection is avilable , with external folder but problem with download update so change index.html path then hide splash screen error message =: " + err); // Thread-safe.

                        // console.log(err)
                    })
                })
            })
        }, function (err) {

            successCallback("2," + afterApdatePath + ",internet connection is avilable , with external folder but problem with PrepareFileListThenCallServer  so change index.html path then hide splash screen error message =: " + error); // Thread-safe.

            consol.log("error")
        })

    }
    var fileList = {};

    function getFileList(destSubFolder) {



        return destSubFolder.getFilesAsync().then(function (files) {
            return WinJS.Promise.join(files.map(function (file) {

                getFileAsUint8Array(file).then(function (file_Uint8Arra) {
                    cordova.exec(function (result) {
                        var startWithWWW = file.path.indexOf("\\www\\");
                        var filePath = file.path.substring(startWithWWW);

                        fileList[filePath] = result;
                    }, function (error) {
                        console.log(error)
                    }, "MyAllPluginsClass", "xxHash", file_Uint8Arra);





                })
            }))
        }).then(function () {
            return destSubFolder.getFoldersAsync();
        }).then(function (folders) {
            return WinJS.Promise.join(folders.map(function (folder) {
                return getFileList(folder);
            }));
        });

        ///////////////
        //preloadPromise = chunkBy(urls, 2).reduce(function (p, urls) {
        //    return p.then(function (prevResults) {
        //        return loadAll(urls).then(function (results) {
        //            return prevResults.concat(results);
        //        });
        //    });
        //}, WinJS.Promise.as([]));


    }


    function getFileAsUint8Array(file) {

        return Windows.Storage.FileIO.readBufferAsync(file)
            .then(function (buffer) {
                //Read the file into a byte array

                fileContents = new Uint8Array(buffer.length);
                var dataReader = Windows.Storage.Streams.DataReader.fromBuffer(buffer);
                dataReader.readBytes(fileContents);
                dataReader.close();

                return fileContents;
            });
    }

    function get_OS_AppName_Version() {


        //return Windows.ApplicationModel.Package.current.installedLocation.getFileAsync("AppxManifest.xml").then(function (file) {
            //return Windows.Storage.FileIO.readTextAsync(file).then(function (text) {
                //var xdoc = new Windows.Data.Xml.Dom.XmlDocument();
                //xdoc.loadXml(text);
                //var app_name = xdoc.childNodes.filter(function (value) {
                //    return (value.nodeName === "Package")
                //})[0].childNodes.filter(function (value) {
                //    return (value.nodeName === "Properties")
                //})[0].childNodes.filter(function (value) {
                //    return (value.nodeName === "DisplayName")
                //})[0].innerText;

                var p = Windows.ApplicationModel.Package.current.id.version;
                var version = p.major + "." + p.minor + "." + p.build;// + "." + p.revision;
                var private_OS_AppName_Version = "?OS=windows&projectPackageNameBundleID=" + Windows.ApplicationModel.Package.current.id.name + "&version=" + version;
                return unescape(encodeURIComponent(private_OS_AppName_Version));

            //});
        //});




    }

 

 