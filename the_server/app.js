 

var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/debuggggggggg.log', { flags : 'w' });
var log_stdout = process.stdout;

console.logx = function (d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
  console.log(util.format(d) + '\n');

};
console.logx("aaaaaaaaaaa");

var express = require('express');


var session = require('express-session')
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require("multer");
var CryptoJS = require("crypto-js");

var mongoose = require("mongoose");
var User = require('./server/Modules/mongoModels/userModel');
//var Cluster = require('cluster');
//var methodOverride = require('method-override')//لحل مشكلة connect deprecated methodOverride: use method-override npm module instead
numCPUs = require('os').cpus().length;
var app = express();


app.devicesForSocket={};
app.devicesForSocketTCP={};
app.io = require('socket.io')();
 require('./server/Modules/socketReceiver/socketReceiver')(app);
  require('./server/Modules/tcpReceiver/tcpReceiver')(app);

//var Cluster2 = require('cluster2');
// view engine setup
app.set('views', path.join(__dirname, './server/views'));
app.set('view engine', 'jade');
app.set('jwtSecretSalat', 'اي سيكريت كي $@&');
// uncomment after placing your favicon in /www
app.use(favicon(__dirname + '/www/assets/img/favicon.ico'));
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//app.use(require('stylus').middleware(path.join(__dirname, 'www')));
app.use(express.static(path.join(__dirname, 'www')));
//app.use(methodOverride());//لحل مشكلة connect deprecated methodOverride: use method-override npm module instead

app.set('mongodbconnection',"mongodb://127.0.0.1/usersdb/")
var uristring =
    process.env.MONGOLAB_URI ||  process.env.MONGOHQ_URL || 'mongodb://127.0.0.1/usersdb/';

//mongoose.connect(uristring, function (err, res) {
//  if (err) {
//
//    console.error('ERROR connecting to: ' + uristring + '. ' + err);
//  } else {
//
//    console.log('Succeeded connected to: ' + uristring);
//  }
//});


//mongoose.connect(uristring);
//var db = mongoose.connection;
//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function (callback) {
//    console.log("db opend");
//});

//var db = mongoose.createConnection('localhost', 'usersdb');
//db.on('error', console.error.bind(console, 'connection error:'));
//var a1 = db.once('open', function () {
//    //User.find({}, {}, function (err, users) {
//    //  //  mongoose.connection.close();
//    //    console.log("Username supplied" + username);
//    ////doSomethingHere
//    //})
//});

// Saving it to the database.

app.use(session({
  secret: process.env.SESSION_SECRET || 'anystring',
  saveUninitialized: true,
  resave: true,
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
  httpOnly: true,
  secure: true,
  ephemeral: true,
  //cookie: {
  //    maxAge: (1000 * 60 * 15 )   , // 31 days
  //    secure: true
  //},

  //store:{session.ddd=dd}

}));
//app.use(session({
//    secret  : 'YOUR_SESSION_SECRET',
//    cookie  : {
//        maxAge  : 1000 * 60 * 60 * 15       // ربع ساعه بدون استخدام      // expire the session(-cookie) after 10 seconds
//    },
//    rolling: true,// تجديد وقت الاكسباير مع كل كونكت
//    store: new MongoStore({
//        db: 'mydb3',
//        host: 'localhost',
//        port: 27017,

//        collection: 'session',
//        autoReconnect: true,
//        ttl:1000 * 60 *60 * 15 // ربع ساعه بدون استخدام
//    })
//}));




app.get('/', function (req, res) {
  res.sendFile(path.resolve('www/index.html'));
});

app.post('/test_external_customer_info_for_push', function(req,res){
  var temp=[];


  temp.push({customer_id:1234,"system":"طلقة","gender":"male","name":"mohamed","kind":"any1"})
  temp.push({customer_id:123,"system":"any system","gender":"female","name":"ahmed","kind":"any2"})
  temp.push({customer_id:12345,"system":"any system","gender":"female","name":"ali","kind":"any3"})
  //temp.push({customer_id:2,"system":"طلقة","gender":"xx"})
  //temp.push({customer_id:3,"system":"طلقة","gender":"xx"})
  //temp.push({customer_id:4,"system":"طلقة","gender":"xx"})



  res.json(temp)
});


var Mediator_1 = require('./server/Modules/MobileServerUpdate/Mediator');
//var x = new Mediator_1.Mediator();
//x.loadAllFromStart();
 Mediator_1.Mediator.loadAllFromStart();




require('./server/routes/AllRouetsCalling')(app, null);//لازم يبقة في الاخر


//app.get('*', function (req, res,next) {

//   // res.send(req.session.name);
//    next();
//})


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    console.error(err);
    res.status(500).send(err.message );
    //res.status(err.status || 500);

    //res.json('error', {
    //    message: "Error:"+err.message,
    //    error: err
    //});
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(500).send({ error: err.message });
  //res.status(err.status || 500);

  //res.json('error', {
  //    message: err.message,
  //    error: {}
  //});
});






module.exports = app;
