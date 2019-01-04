import {IonicApp} from 'ionic-angular';
import {Component} from '@angular/core'
import {Http} from "@angular/http";
import {globalVariables} from "../../shared/others_servicesAndStatic/globalVariables";

 import {Main} from "../Main/Main";
 
import { NavController, AlertController, LoadingController} from 'ionic-angular';
import {BodyAsIs, Post} from "../../../libraries/Lib";

@Component({
selector:"login-page",
    templateUrl:  './login.html'
})
export class LoginPage {
    nav;
    app;
    userName = "";
    Password = "";

    constructor(nav:NavController, app:IonicApp, public http:Http,private alertCtrl: AlertController,loadingCtrl:LoadingController) {
       
        this.nav = nav;
        this.app = app;
       
        globalVariables.alertCtrl=this.alertCtrl;
        globalVariables.loadingCtrl=loadingCtrl;
        globalVariables.navCtrl=nav;

    }


    enterPress = function (keyEvent) {
        if (keyEvent.which === 13) {
            this.LoginClick()
        }
    }

     

    signup() {
      //  this.navCtrl.push(SignupPage);
    }


    LoginClick() {

      //  var key_bytes = new ArrayBuffer("BMEIMPL@YYYYMMDD", "utf8");
       // var iv_bytes=new ArrayBuffer("1234567890123456", "utf8");
      //    var encoded = new TextEncoder  ("utf-8").encode("1234567890123456")
      // var iv_word = CryptoJS.lib.WordArray.create(new Uint8Array(encoded))
      //   var key_word = CryptoJS.lib.WordArray.create(new Uint8Array(key_bytes))
       // var key="BMEIMPL@YYYYMMDD";
        var plainText="0272916961811549";
        var encoded = new TextEncoder  ("utf-8").encode(plainText);
      var  Key_PINEncryption = CryptoJS.enc.Base64.parse( "BMEIMPL@YYYYMMDD");;// CryptoJS.enc.Base64.parse(decodeURIComponent("BMEIMPL@YYYYMMDD"));
        var IV_PINEncryption = CryptoJS.enc.Base64.parse( "1234567890123456");    //          new TextEncoder("utf-8").encode("1234567890123456"); //CryptoJS.lib.WordArray.random(16);
        var  bytes_EncryptedPIN = CryptoJS.AES.encrypt("0272916961811549" , Key_PINEncryption, {"iv": IV_PINEncryption,  "mode": CryptoJS.mode.CBC, "padding": CryptoJS.pad.Pkcs7});
console.log(bytes_EncryptedPIN)

//         byte[] clean = plainText.getBytes();
//         byte[] keyByets =key.getBytes("UTF-8");
//         byte[] ivByets ="1234567890123456".getBytes("UTF-8");
//
//         // Generating IV.
//         int ivSize = 16;
//         byte[] iv = new byte[ivSize];
// //        SecureRandom random = new SecureRandom();
// //        random.nextBytes(iv);
//         iv="1234567890123456".getBytes("UTF-8");
//         IvParameterSpec ivParameterSpec = new IvParameterSpec(iv);
//
//         SecretKeySpec secretKeySpec = new SecretKeySpec(keyByets, "AES");
//
//         // Encrypt.
//         Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
//         cipher.init(Cipher.ENCRYPT_MODE, secretKeySpec, ivParameterSpec);
//         byte[] encrypted = cipher.doFinal(clean);


        this.http.get(globalVariables.resolve(globalVariables.baseUrl, "/getTemp")).subscribe((response:any) => {
                if (response.status != 200) {
                    alert(response.statusText);
                    return;
                }

                if (response._body != "") {
                    var data = response.json()
                }


                // var parsed = JSON.parse(data.ti);
                var ti = CryptoJS.enc.Base64.parse(data.ti);
                var x = response.headers.get('ts');
            try {
                var ts = CryptoJS.enc.Base64.parse(response.headers.get('ts'));
            }
            catch (ex )
            {
                globalVariables.alert("ip login error,the ip of the server not like ip of frontend , one of them is local host and the other is ip","Error")
                return;
            }

                var tk = CryptoJS.enc.Base64.parse(decodeURIComponent(this.getCookie("tk")));

                var password = this.Password;
                var username = this.userName;
                var text = password + username;

                //لو عايز هاش من النوع  PBKDF2  البلوك ده
                {
                    var urlDecoded = decodeURIComponent(password + username);
                    var base64Decoded = CryptoJS.enc.Base64.parse(urlDecoded);

                    var hashed = CryptoJS.PBKDF2(base64Decoded, ts, {hasher: CryptoJS.algo.SHA512});
                    var text = hashed.toString();
                }

                console.log("the_hash:" + text);
                var encrhash = CryptoJS.AES.encrypt(text, tk, {iv: ti});


                this.send_login_request(encrhash.toString());
            },
            (err:any) => {
                globalVariables.alert(globalVariables.getErrorMessage(err),'Error')

            }
        );

        // $location.path("/mainPage");
    }


    getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    }


    @Post("getTokenAndSaveUser")
    postLogin_request(@BodyAsIs dataObj) {
        return null;
    }

    send_login_request(encrhash) {

        var dataObj = {'encrhash': (encrhash)};

      var  that=this;
        this.postLogin_request(dataObj).subscribe((data:any) => {
                globalVariables.userModelPrivilege=[71,88];//array of pravlage IDs, get from data

                (window.sessionStorage as any).token = data.token;
                this.nav.setRoot(Main);

            },
            (err:any) => {
            console.log(err)
                globalVariables.alert(globalVariables.getErrorMessage(err),'Error')

            }
        );
    }

     logout() {

         globalVariables.userModelPrivilege=[];
            delete (window.sessionStorage as any).token;
         (location as any).path("/");
        }




}
