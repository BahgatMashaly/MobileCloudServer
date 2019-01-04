var CryptoJS = require("crypto-js");
var jwt = require('../../MyLib/jwt');

var mongoose = require('mongoose');
var User = require('../mongoModels/userModel');
 
function LoginManager() {
    
 

}

LoginManager.prototype.getTemp = function (req, res)   {
  
    try {
        var session = require('express-session')
        var salat_string = "اي سالات";
        var salat_word_array = CryptoJS.enc.Utf8.parse(salat_string);
        
        // generate derived key from passphrase using SHA256, 10 iterations
        var key_word_array = CryptoJS.PBKDF2("اي سيكريت" + req.connection._peername.port, salat_word_array, { iterations: 10, hasher: CryptoJS.algo.SHA512 });
        // generate 128 bit IV
        var iv_word_array = CryptoJS.lib.WordArray.random(128 / 8);
        
        //  var salt_string = JSON.stringify(salt);//ملوش لازمه لاني هستخدم base64
        
        //  var key_string = JSON.stringify(key);
        var key_string_base64 = CryptoJS.enc.Base64.stringify(key_word_array);
        
        // var iv_string = JSON.stringify(iv);//ملوش لازمه لاني هستخدم base64
        
        // var   saltxx = JSON.parse(salt_string);//ملوش لازمه لاني هستخدم base64
        // var  keyxx = JSON.parse(key_string);//ملوش لازمه كان للتأكد فقط انه بيرجع يحول صح
        // var ivxx = JSON.parse(iv_string);//ملوش لازمه لاني هستخدم base64    
        
        
        //////////////
        var salt_string_base64 = CryptoJS.enc.Base64.stringify(salat_word_array)//"qE87jZfNEj+RFTV1Q2zc/krFKMxSObs4oK/LMpbPXCw="// CryptoJS.enc.Base64.stringify(salt);//هيبقى ثابت عشان الهاش لازم يبقى ثابت كل مره
        // var key_string_base64 = CryptoJS.enc.Base64.stringify(key);//مش هتشتغل كويس وهتبوظ الكي
        var iv_string_base64 = CryptoJS.enc.Base64.stringify(iv_word_array);
        
        // var salt_string_xx = CryptoJS.enc.Base64.parse(salt_string_base64);//ملوش لازمه كان للتأكد فقط انه بيرجع يحول صح
        // var key_string_xx = CryptoJS.enc.Base64.parse(key_string_base64);
        // var iv_string_xx = CryptoJS.enc.Base64.parse(iv_string_base64);//ملوش لازمه كان للتأكد فقط انه بيرجع يحول صح
        
        
        
        req.session.port = req.connection._peername.port
        req.session.temp_key = key_word_array;//rundom
        req.session.temp_iv = iv_word_array;//rundom
        //req.session.salt = salt;//rundom ل داعي لتخزينها هي فقط لعلمل الهاش



        res.setHeader('ts' , salt_string_base64);
        res.cookie('tk', key_string_base64);
        //  res._headers.
        //window.localstor=req.session.iv;
        //window.sessionstore=req.session.salt;
        // res.json({ title: 'Express' , 'tk' : req.session.key })
        
        //  res.sendfile('views/login.html', { title: 'Express' , 'tk' : req.session.key })
        
        res.json({ 'ti' : iv_string_base64 });
    }
    catch (err) {
        res.status(500).send({ message: err.message});
    }
    }

LoginManager.prototype.getTokenAndSaveUser = function (req, res) {
    
        try
            {
        //var encrhash = JSON.parse(req.body.encrhash)
        //  var encrhash = CryptoJS.enc.Base64.parse(req.body.encrhash);
        var decrypted_word_array = CryptoJS.AES.decrypt(req.body.encrhash, req.session.temp_key, { iv: req.session.temp_iv });
        var decrypted_string= decrypted_word_array.toString(CryptoJS.enc.Utf8)
        //التأكد من البورت
        if (req.session.port != req.connection._peername.port) {
            res.status(500).send({ message: 'session problem p' });
            return;
        }
        //هنجيب الهاش من قاعدة البيانات 
        var hash_from_database = "bbf6d479c630ba5f2268ef38412c8058";//user=admin pass = $er123
        
        if (hash_from_database != decrypted_string) {
            delete req.session.temp_key;
            delete req.session.temp_iv;

            res.status(500).send({ message: 'bad password or user name' });
            // res.json({ result: "error" });
            return;
        }
        
        delete req.session.temp_key;
        delete req.session.temp_iv;
        res.clearCookie('tk');
        //  privilege table is three field id, discription , 0 or 1
        
        var token = jwt.createJWTToken({ "algo": "PBKDF2" }, { user_id: 123 }, req.app.get('jwtSecretSalat') + req.session.port);
        
        var profile_from_database_with_privilege = {
            // "exp": 1300819380, ملهاش لازمه عشان انا عامل اكسبير في للسيشن ككل
            "user_id": 123,
            token : token,
            "first_name": "John",
            "last_name": "Doe",
            "email": "john@doe.com",
            "id_login_to_adminPage_privilege_id": 1,
            "id_New_privilege_id": 1
          
       
        };

        res.json({ token: token });
        return;
    //remove last to line to return mongo work
        User
.where('user_id').gte(123)
.where('token').in([token, 'مجرد اختبار'])
.select('user_id first_name tags id_login_to_adminPage_privilege_id')
//.skip(0)
.limit(1)
//.sort({'first_name':1})//-1
//.slaveOk()
//.hint({ age: 1, name: 1 })
.exec(function (err, data, ss) {
            if (err) {
                res.status(500).send({ message: err.message });
                return;
            }
            if (data.length == 0) {
                var userx = new User(profile_from_database_with_privilege);
                userx.save(function (err) {
                    if (err) { res.status(500).send({ message: err.message }); }
                    else {
                        res.json({ token: token });
                    }
                });
            }
            else {
                res.json({ token: token });
            }
           
        });
         
        // Creating one user.
       

        //مطلوب حفظ البروفايل في مونجو مينفعش في السيشن عشان ميرجعهمش عند كل ريكويست
   
    }
    catch (err) {
        res.status(500).send({ message: err.message });
        return;
    }
}
 

LoginManager.prototype.GoToMainPage=  function (req, res) {
    try {
        res.sendfile('public/Modules/mainPage/mainPape.html');
        console.log("sent mainPape.html")
    }
    catch (err) {
        console.log(err.message);
    }
   // res.sendFile(path.resolve('views/adminPage.html'));
}




//module.exports = new LoginManager(null); //defualt1111111111111111
//call with
//var logger1 = require('./logger');
//logger1.log('This is an informational message');

module.exports.newInstance = LoginManager;
//call with
//var logger = require('./logger');
//var logger3_new_instance = new logger.newLoggerInstance('kkk');
////var logger3_new_instance =    logger.__proto__ ; لم تعمل
//logger3_new_instance.namex = "44444444444"

 