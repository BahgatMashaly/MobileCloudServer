

function ADO(databaseType) {
    
    
    if (databaseType === "mysql" || databaseType === "sqlite" ) {
        //|| databaseType === "sqlite" تعمل فقط على السيرفر ولكن ليس مع الاكترون
        
        var Sequelize;
        var mssql;
        var mysql;
        var sqlite;
        
        var sequelize;
        
        
        Sequelize = require('sequelize');
        mssql = {
            database: 'Exams',
            username: "sa",
            password: "123",
            host: "127.0.0.1",
            port: 1433,
            pool: {
                maxConnections: 50,
                maxIdleTime: 15000
            }

        }
        
        mysql = {
            database: "mobile_cloud_server",
            username: "qauser",
            password: "123",
            host: '127.0.0.1',
            port: 3306,
            pool: {
                maxConnections: 50,
                maxIdleTime: 15000
            }

        }

        sqlite = {
            databaseType: 'sqlite',
            storage: 'projects.sqlite'
        };
        
        var Database;
        
        if (databaseType === "mysql") {
            Database = mysql;
        }
        else if (databaseType === "sqlite") {
            Database = sqlite;
        }
        else if (databaseType === "mssql") {
            Database = mssql;
        }
        sequelize = new Sequelize(Database.database, Database.username, Database.password, {
            
            dialect: databaseType,
            host: Database.host,
            port: Database.port,
            // SQLite only
            storage: Database.storage
        });

        

        
        this.ExecuteReader = function (sql, paramersArray, CallBack) {
            
            sequelize.query(sql, {
                replacements: paramersArray
            }).then(function (results) {//or then
                CallBack(null, results[0])
               // console.log(results)

            }).error(function (err) {
                CallBack(err, "Error")
                console.log(err.message)

            });;



        }
        
        
        this.ExecuteScalar = function (sql, paramersArray, CallBack) {
            
            sequelize.query(sql, {
                replacements: paramersArray
            }).then(function (result) {//or then
                
                try {
                    for (subresult in result[0][0]) {
                        //var rr = i;
                        //var ee = cc[i];
                        // var x = result[0][0][subresult];
                        
                        CallBack(null, result[0][0][subresult])
                        
                    }
                    
                    
                    console.log(result)
                }
                catch (err) {
                    CallBack(err, "Error")
                    console.log(err.message)
                }

            }).error(function (err) {
                CallBack(err, "Error")
                console.log(err.message)

            });;

        }
        
         
        this.ExecuteNonQuery = function (sql, paramersArray, CallBack) {
            sequelize.query(sql, {
                replacements: paramersArray
            }).then(function (results) {//or then

                if( databaseType === "mysql")
                {
                    CallBack(null, results["1"].insertId)
                }
                else {
                    CallBack(null, results["1"].lastID)
                }
                //  console.log(results["1"].lastID)

            }).error(function (err) {
                CallBack(err, "Error")
                console.log(err.message)

            });
        }
    
    }


    else if (databaseType === "mssql") {
        
        
        var sql = require('mssql');
        
        var config = {
            user: 'sa',
            password: '123',
            server: '127.0.0.1', // You can use 'localhost\\instance' to connect to named instance
            database: 'Exams',
            pool: {
                max: 10,
                min: 0,
                idleTimeoutMillis: 30000
            }
            ,
            options: {
                encrypt: true // Use this if you're on Windows Azure
            }


        }
        var request;
        var connection = new sql.Connection(config, function (err) {
            // ... error checks
            
            // Query
            if (err) {
                
                console.error('\x1b[33m', "errrror" + err.message, '\x1b[0m' );
                return;
            }
             
                request = new sql.Request(connection); // or: var request = connection.request();
             

        });
        
        
        this.ExecuteReader = function (sqlStatment, paramersArray, CallBack) {
            
            request.parameters = {};
            //self.OpenConnection();
            try {
                for (var i in paramersArray) {
                    request.input(i, paramersArray[i]);
                }
                if (!request.connection.connected) {
                    request = new sql.Request(connection); // or: var request = connection.request();

                }
                request.query(sqlStatment, CallBack);
            }
    catch (err) {
                CallBack(err, "error")
                console.log('Error while performing Query.');
            }

        }
        
        
        this.ExecuteScalar = function (sqlStatment, paramersArray, CallBack) {
            
            
            
            request.parameters = {};
            //self.OpenConnection();
            try {
                for (var i in paramersArray) {
                    request.input(i, paramersArray[i]);
                }
                if (!request.connection.connected) {
                    request = new sql.Request(connection); // or: var request = connection.request();

                }
                request.query(sqlStatment, function (err, result, CallBack2) {
                    if (!err) {
                        if (result.length == 0) {
                            CallBack(null, null)
                        }
                        for (key in result[0]) {
                            //var rr = i;
                            //var ee = cc[i];
                            
                            CallBack(null, result[0][key])
                        }
                    }
                    else {
                        CallBack(err, "error")
                    }
                });
            }
    catch (err) {
                CallBack(err, "error")
                console.log('Error while performing Query.');
            }






        }
        
        
        
        this.ExecuteNonQuery = function (sqlStatment, paramersArray, CallBack) {
            
            request.parameters = {};
            //self.OpenConnection();
            try {
                for (var i in paramersArray) {
                    request.input(i, paramersArray[i]);
                }

                if (!request.connection.connected) {
                    request = new sql.Request(connection); // or: var request = connection.request();

                }
                request.query(sqlStatment, CallBack);
            }
    catch (err) {
                CallBack(err, "error")
                console.log('Error while performing Query.');
            }

        }



    }


    else if (databaseType === "sqlite") {
        
        
        var edge = require('edge');
     //   var edge = require('electron-edge');
        
        
        this.ExecuteReader = function (sqlStatmentx, paramersArray, CallBack) {
            
            try {
                
                var ExecuteReader = edge.func({
                    assemblyFile: 'GettingStarted.dll',
                    typeName: 'GettingStarted.Startup',
                    methodName: 'ExecuteReader'
                });
                
                var result = ExecuteReader({
                    sqlStatment: sqlStatmentx,
                    Parameters: paramersArray
                }, true);
                
                CallBack(null, result)
            }
    catch (err) {
                CallBack(err, "error")
                console.log(err.message);
            }

        }
        
        
        this.ExecuteScalar = function (sqlStatmentx, paramersArray, CallBack) {
            
            try {
                var ExecuteScalar = edge.func({
                    assemblyFile: 'GettingStarted.dll',
                    typeName: 'GettingStarted.Startup',
                    methodName: 'ExecuteScalar'
                });
                
                var result = ExecuteScalar({
                    sqlStatment: sqlStatmentx,
                    Parameters: paramersArray
                }, true);
                
                CallBack(null, result)
            }
    catch (err) {
                CallBack(err, "error")
                console.log(err.message);
            }

     

        }
        
        
        
        this.ExecuteNonQuery = function (sqlStatmentx, paramersArray, CallBack) {
            
            try {
                var ExecuteNonQuery = edge.func({
                    assemblyFile: 'GettingStarted.dll',
                    typeName: 'GettingStarted.Startup',
                    methodName: 'ExecuteNonQuery'
                });
                
                var result = ExecuteNonQuery({
                    sqlStatment: sqlStatmentx,
                    Parameters: paramersArray
                }, true);
                
                CallBack(null, result)
            }
    catch (err) {
                CallBack(err, "error")
                console.log(err.message);
            }
        

        }
    


    }
 
}


module.exports = new ADO('mysql');
