

function ADO(databaseType) {


    var Sequelize;
    var mssql;
    var mysql;
    var sqlite;

    var sequelize;


    Sequelize = require('sequelize');
    mssql = {
        database: 'we_marketing',
        username: "sa",
        password: "123",
        host: "10.211.55.8",
        port: 1433,
        pool: {
            maxConnections: 1000,
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
        storage: 'Exams.sqlite'
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
    //var sequelize = new Sequelize('mytest', 'sa', '123', {
    //    host: "localhost",
    //    port: 1433
    //})


    //sequelize.query("insert into  table1 (the_name)values(:the_name) ", {
    //    replacements: {
    //        the_name: 'mmmmmmm'
    //    }
    //}).spread(function (results) {//or then
    //    console.log(results)

    //}).error(function (err) {
    //    console.log(err.message);
    //});;

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
            CallBack(null, results)
            console.log(results)

        }).error(function (err) {
            CallBack(err, "Error")
            console.log(err.message)

        });;


    }




}


module.exports = new ADO('mysql');