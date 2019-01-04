/**
 * Created by Bahgat on 3/19/16.
 */
var ADO = require('../../MyLib/ADO');
var Mediator_1 = require('../MobileServerUpdate/Mediator');

var devicesServerFrontEndManager = (function () {


    devicesServerFrontEndManager.app=null;

    function devicesServerFrontEndManager() {

    }

    devicesServerFrontEndManager.getAppList = function (req, res) {
        try {
            //   var arr = Object.keys(obj).map(function(k) { return obj[k] });

            ADO.ExecuteReader("select  * from projects where projects.activeOrNot=1  ", null, function (err, result, fields) {
                if (err) {
                    res.status(500).send({message: err.message});
                    return;
                }
                else {
                    res.json(result)
                }


            });


        }
        catch (err) {
            res.status(500).send({message: err.message});
        }
    }


    devicesServerFrontEndManager.getAppListThatHaveCustomerInfo= function (req, res)   {
        try {
            ADO.ExecuteReader("select  distinct project_customer_customers_info_urls.project_id, projects.projectName, projects.projectPackageNameBundleID from project_customer_customers_info_urls join projects on projects.projectID = project_customer_customers_info_urls.project_id     where projects.activeOrNot=1  " , null, function (err, result, fields) {
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

    devicesServerFrontEndManager.getDevices=function(req,res){
        try {

            var   apps_package_ids=[];
            for (i = 0; i < req.body.projectPackageNameBundleIDs.length; i++)
            {
                if(req.body.projectPackageNameBundleIDs[i])
                {
                    apps_package_ids.push("'"+req.body.projectPackageNameBundleIDs[i]+"'")
                }
            }

           var device_database_ids=[];

           //  if(req.body.isSocketDevice==true)
           //  {
           //      var device_database_ids = Object.keys(devicesServerFrontEndManager.app.devicesForSocketTCP);
           //      if(device_database_ids.length <=0)
           //      {
           //          res.status(500).send({message: "No TCP device connected"});
           //          return;
           //      }
           //    //  console.log(devicesServerFrontEndManager.app.devicesForSocket)
           //     // console.log(device_database_ids)
           //      str=   "select  * from deviceRegisteredPushNotifications where  device_database_id in("+device_database_ids+")  and projectPackageNameBundleID in ("+apps_package_ids+")"
           //  }
           //  else
           //  {
             var   str=   "select  * from deviceRegisteredPushNotifications where projectPackageNameBundleID in ("+apps_package_ids+")"

            // }

            ADO.ExecuteReader( str,null,function(err,devices) {
                if (devices.length <= 0) {
                    res.status(500).send({message: "No device Found"});
                    return;
                }
                if (req.body.deviceOrCustomer == "Device info") {
                    res.json(devices)
                }

               else if (req.body.deviceOrCustomer == "Customer and device info")
                {
                    devicesServerFrontEndManager.callExternalServiceAndMargeAllDevices(devices, req.body.CustomerInfoURL, function (error) {
                        res.status(500).send({message: error.message});
                    }, function (devices_with_customers) {
                        res.json(devices_with_customers)
                    });

                }

                else if (req.body.deviceOrCustomer == "Customer info")
                {
                    devicesServerFrontEndManager.callExternalServiceAndMargeWhichHavecustomerInfoOnly(devices, req.body.CustomerInfoURL, function (error) {
                        res.status(500).send({message: error.message});
                    }, function (devices_with_customers) {
                        res.json(devices_with_customers)
                    });
                }
            })
        }
        catch (err) {
            res.status(500).send({message: err.message});
        }
    }


    devicesServerFrontEndManager.get_sustomer_customers_info_urls=function(req,res){
        try {
            ADO.ExecuteReader("select * from project_customer_customers_info_urls where project_id=:project_id " , req.params, function (err, result, fields) {
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
    };

    devicesServerFrontEndManager.callExternalServiceAndMargeAllDevices = function (devices,urlx,callbackError,callbackSucc) {
        try {
            var customer_ids_array =[];


            for (i = 0; i < devices.length; i++) {
                if(devices[i].customer_id) {
                    customer_ids_array.push({customer_id: devices[i].customer_id})
                }
            }
            var customer_ids_json =JSON.stringify(customer_ids_array);
            var url = require('url');
            var url_info = url.parse(urlx)
            var http_or_https;
            if(  url_info.protocol=="http:") {
                http_or_https = require('http');
            }
            else
            {
                http_or_https = require('https');
            }

//The url we want is `www.nodejitsu.com:1337/`
            var options = {
                hostname: url_info.hostname,
                port: url_info.port,
                path: url_info.path,
                protocol: url_info.protocol,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            };

            callback = function (response) {
                var str = '';

                response.setEncoding('utf8');

                response.on('data', function (chunk) {
                    str += chunk;
                });

                response.on('end', function () {
                    var temp_cust_info=JSON.parse(str);
                    var new_device_array_with_cust_info=[];

                    for (i = 0; i < devices.length; i++) {
                        for (y = 0; y < temp_cust_info.length; y++) {
                            var arr = Object.keys(temp_cust_info[y]).map(function (k) {
                                if (devices[i].customer_id == temp_cust_info[y].customer_id) {
                                    devices[i][k] = temp_cust_info[y][k];
                                }
                                else if(!devices[i].customer_id)
                                {
                                    devices[i][k] = null;
                                }
                            });
                        }
                        new_device_array_with_cust_info.push(devices[i])
                    }
                    callbackSucc(new_device_array_with_cust_info)
                });
            }

            var req = http_or_https.request(options, callback);
            req.on('error', function (error) {
                callbackError(error)
                console.error(error);
            });
//This is the data we are posting, it needs to be a string or a buffer
            req.write(customer_ids_json);
            req.end();
        }
        catch (ex)
        {
            callbackError(ex)
            console.error(ex);
        }


    }


    devicesServerFrontEndManager.callExternalServiceAndMargeWhichHavecustomerInfoOnly = function (devices,urlx,callbackError,callbackSucc) {
        try {
            var customer_ids_array =[];


            for (i = 0; i < devices.length; i++) {
                if(devices[i].customer_id) {
                    customer_ids_array.push({customer_id: devices[i].customer_id})
                }
            }
            var customer_ids_json =JSON.stringify(customer_ids_array);

            var url = require('url');
            var url_info = url.parse(urlx)
            var http_or_https;
            if(  url_info.protocol=="http:") {
                http_or_https = require('http');
            }
            else
            {
                http_or_https = require('https');
            }

//The url we want is `www.nodejitsu.com:1337/`
            var options = {
                hostname: url_info.hostname,
                port: url_info.port,
                path: url_info.path,
                protocol: url_info.protocol,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            };

            callback = function (response) {
                var str = '';

                response.setEncoding('utf8');

                response.on('data', function (chunk) {
                    str += chunk;
                });

                response.on('end', function () {
                    var temp_cust_info=JSON.parse(str);
                    var new_device_array_with_cust_info=[];

                    for (i = 0; i < temp_cust_info.length; i++) {

                        for (ix = 0; ix < devices.length; ix++) {

                            var arr = Object.keys(temp_cust_info[i]).map(function(k)
                            {
                                if (devices[ix].customer_id == temp_cust_info[i].customer_id) {

                                    devices[ix][k] = temp_cust_info[i][k];

                                }

                            });
                            if (devices[ix].customer_id == temp_cust_info[i].customer_id) {
                                new_device_array_with_cust_info.push(devices[ix])
                            }
                        }
                    }
                    callbackSucc(new_device_array_with_cust_info)

                    // console.log(str);
                });
            }

            var req = http_or_https.request(options, callback);
            req.on('error', function (error) {
                callbackError(error)
                console.error(error);
            });
//This is the data we are posting, it needs to be a string or a buffer
            req.write(customer_ids_json);
            req.end();
        }
        catch (ex)
        {
            callbackError(ex)
            console.error(ex);
        }


    }




    return devicesServerFrontEndManager;
})()

module.exports.devicesServerFrontEndManager = devicesServerFrontEndManager;