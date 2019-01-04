import {UrlResolver} from "@angular/compiler";
import {Http} from "@angular/http";
import {BaseRequestOptions } from "@angular/http";
import {XHRBackend} from "@angular/http";
import {BrowserXhr} from "@angular/http";
import {ResponseOptions} from "@angular/http";
import {Headers,CookieXSRFStrategy} from "@angular/http";
import {
    NavController,   AlertController, LoadingController, MenuController, Platform,
    ModalController,Loading
} from "ionic-angular";

import { Storage } from '@ionic/storage';
import {Network} from "@ionic-native/network";


import {ViewContainerRef} from "@angular/core";
import {TranslateService} from "ng2-translate/index";
import {PREFS_ITEM} from "./prefsItem";
import {ClientSocket} from "../myLib/socket/ClientSocketforAnyProject";

export class globalVariables {
    public static userModelPrivilege:Array<number> = [71];//pravlage IDs, it will fill after login
    public static AnimationDuration = 40;
    public static SoketRootServerURL = "http://localhost:4000/";
    static baseUrl:string = "http://localhost:4000/"
    public static navCtrl:NavController = null;
    public static alertCtrl:AlertController = null;
    public static loadingCtrl:LoadingController;
    public static storage:Storage;
    public static network:Network;
    private static   loader:Loading;
    public static isTest=true;
    public static menu : MenuController;
    private static isLoading:boolean;


    public static menuCtrl:MenuController;
    public static platform:Platform;
    public static  translate:TranslateService;
    public static modalCtrl:ModalController;
    public static config;

    public static mainContainer:ViewContainerRef
    public static ClientSocket:ClientSocket = new ClientSocket(globalVariables.SoketRootServerURL);

    private static _IsBack:Boolean = false;
    static get IsBack():Boolean {
        return globalVariables._IsBack;
    }

    static set IsBack(value:Boolean) {
        globalVariables._IsBack = value;
    }


    private static _MaxZIndex:number = 10;
    static get MaxZIndex():number {
        return this._MaxZIndex;
    }

    static  set MaxZIndex(value:number) {
        this._MaxZIndex = value;
    }

    private static  _customerID:string = null;
    static get customerID():string {


        return this._customerID;
    }

    static  set customerID(value:string) {

        globalVariables.storage.set('customer_id', value);
        globalVariables.update_customer();
        this._customerID = value;
    }

    public static update_customer(){


        globalVariables.storage.get('devicePushNotificationID').then((devicePushNotificationID) => {
            if(!devicePushNotificationID)
            {
                return;
            }
            globalVariables.storage.get('OldCustomerID').then((OldCustomerID) => {
                globalVariables.storage.get('customer_id').then((customer_id) => {

                    if ( OldCustomerID != customer_id) {

                        cordova.exec(function succ(DeviceInfo) {
                            // alert(DeviceInfo);
                            try {
                                var json_to_post_for_push_notification = JSON.parse(DeviceInfo);
                            }
                            catch (ex) {
                                console.error("error when parse json when sent info for push notification : " + ex.message)
                                console.error(DeviceInfo)
                            }
                            json_to_post_for_push_notification.customer_id = customer_id;/////////
                            json_to_post_for_push_notification.device_push_notifcation_registration_id = devicePushNotificationID

                            globalVariables.http.post(globalVariables.SoketRootServerURL+'/pushNotificatonRegistrationInfo"', json_to_post_for_push_notification).subscribe((datax:any) => {
                                    globalVariables.storage.set('OldCustomerID', customer_id);
                                    console.log("successfully sent Push Notifications ID to server  ")
                                },
                                (err:any) => {
                                    console.log("error in Sent Push Notifications ID to server ")
                                }
                            );
                        }, function fail(error) {
                            console.log(error);
                        }, 'MyAllPluginsClass', 'MyAllPluginsMethod', ['getDeviceInfo'])
                    }

                });
            });
        });

    };


    static stringify(obj:any) {
        for (var obj1 in obj) {
            if (obj[obj1] === undefined) {
                obj[obj1] = null;
            }
        }

        return JSON.stringify(obj)
    }


    public static resolve(baseUrl:string, url:string) {
        if (url == "")
        {     return baseUrl; }
        var parts = [];
        for (var i = 0, l = arguments.length; i < l; i++) {
            parts = parts.concat(arguments[i].split("/"));
        }
        // Interpret the path commands to get the new resolved path.
        var newParts = [];
        for (i = 0, l = parts.length; i < l; i++) {
            var part = parts[i];
            // Remove leading and trailing slashes
            // Also remove "." segments
            if (!part || part === ".") continue;
            // Interpret ".." to pop the last segment
            if (part === "..") newParts.pop();
            // Push new path segments.
            else newParts.push(part);
        }
        // Preserve the initial slash if there was one.
        if (parts[0] === "") newParts.unshift("");
        // Turn back into a single string path.
        var str= newParts.join("/") || (newParts.length ? "/" : ".");


        if(str.indexOf('://') === -1)
        {
            str= str.replace(':/', '://')
        }
        return str;

    }






    public static preFunction()
    {
        globalVariables.showProgressDialog();
    }
    public static postFunction(){
        globalVariables.dismissProgressDialog()
    }

    public static alert(message:string, title?:string) {
        let alert = globalVariables.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    }

    public static getErrorMessage(res_error)
    {
        var error_message=null;
        if(res_error["message"])
        {
            return  res_error["message"]
        }
if(res_error.json()["message"])
{
    return  res_error.json()["message"]
}

        if(res_error["status"]==0)
        {
            if( globalVariables.checkInternetConnection())
            {
                if(globalVariables.platform.is('cordova')) {
                    return this.translate.instant('GLOBAL_MESSAGES.SERVER_PROBLEM')//ToDo
                }
                else
                {
                    return this.translate.instant('GLOBAL_MESSAGES.SERVER_PROBLEM_WEB')//ToDo
                }
            }
            else
            {
                return this.translate.instant('GLOBAL_MESSAGES.NO_CONNECTION')

            }

            //  "Connection Error"
        }

        var exception= res_error.json()["exception"];
        if(exception) {
            if (PREFS_ITEM.lang == "ar") {
                error_message = exception["messageAr"];
            }
            else {
                error_message = exception["messageEn"];
            }
            console.log("nestedError:" + exception["nestedError"]);
            return error_message;
        }




        //"{"exception":
        // {"messageAr":"برجاء التاكد من عنوان البريد الالكتروني وكلمة السر",
        // "messageEn":"Incorrect email or password ",
        // "messageCode":"MSG504",
        // "nestedError":"",
        // "stackTrace":[],"suppressed":[]}}"

    }

    public static checkInternetConnection():boolean{

        if(globalVariables.platform.is('cordova')) {
            if (globalVariables.network.type == 'none') {
                console.log("internet connection is this.network.type :", false);
                return false;

            } else {
                console.log("internet connection is this.network.type :", true);
                return true;
            }
        }
        else
        {
            console.log("internet connection is navigator.onLine:", navigator.onLine);
            return navigator.onLine;
        }

        // ;

        // if(this.platform.is('cordova')) {
        //     cordova.exec(function succ(one_or_zero) {
        //         globalVariables.alert("Error", this.translate.instant('UNRESPONSIVE_HOST'));
        //     }, function fail(error) {
        //         console.log(error);
        //     }, 'MyAllPluginsClass', 'MyAllPluginsMethod', ['checkInternetConnectionHard'])
        // }

    }

    public static showProgressDialog(message?:string, title?:string) {

        if (!globalVariables.isLoading) {
            if (!message) {
                message = "Please wait..."
            }


            globalVariables.loader = globalVariables.loadingCtrl.create({
                content: message,
                dismissOnPageChange: true,
                showBackdrop:true
            });

            globalVariables.loader.present();

            globalVariables.isLoading = true;
        }

    }

    public static dismissProgressDialog()
    {
        try {

            globalVariables.isLoading = false;
            globalVariables.loader.dismiss().catch(() => {});

        }
        catch (err)
        {

        }
    }

    public static changeLang(  lang?:string)
    {
        // (globalVariables.menu.getMenus()[0].getMenuElement() as any).setElementAttribute("side","right");
        // globalVariables.menu.getMenus()[0].getMenuElement().setAttribute("side","left");
        // globalVariables.menu.getMenus()[0].getMenuElement().getAttributeNode("side");
        (globalVariables.menu.getMenus()[0]as any)._type=null;
        if(lang=="ar"||(!lang && (PREFS_ITEM.lang=="en"||PREFS_ITEM.lang=="")))
        {
            globalVariables.translate.setDefaultLang('ar');
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            globalVariables.translate.use('ar');
            globalVariables.platform.setDir("rtl", true);
            // globalVariables.navCtrl.
            // SV.menu.toggle('right');

            globalVariables.menu.getMenus()[0].side="right";
            globalVariables.menu.getMenus()[0].isRightSide=true;
            (globalVariables.menu.getMenus()[0] as any).setElementAttribute("side","right");



            PREFS_ITEM.lang="ar";


        }
        else
        {   globalVariables.translate.setDefaultLang('en');
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            globalVariables.translate.use('en');
            globalVariables.platform.setDir("ltr", true);

            // SV.menu.toggle('right');
            globalVariables.menu.getMenus()[0].side="left";
            (globalVariables.menu.getMenus()[0] as any).setElementAttribute("side","left");


            PREFS_ITEM.lang="en";


        }
        // console.log( document.documentElement.dir);
        // console.log( SV.platform.isRTL);
    }

    public static showToast(message)
    {
        cordova.exec( null, null , 'MyAllPluginsClass', 'MyAllPluginsMethod', ['showToast',message])
    }


    public static formatDate(date) {

        var dateStr = (date.getDate() < 10 ? '0' : '') + (date.getDate()) + "/"
            + (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1) + "/"
            + date.getFullYear();


        return dateStr;
    }
////////////////////////////////////////////////////

//       ReflectiveInjector.resolve([
//     BaseRequestOptions,
//     {provide: Http, useFactory:
//         function(backend, defaultOptions) {
//             return new Http(backend, defaultOptions);
//         },
//         deps: [ BaseRequestOptions]}
// ])



    // var http = injector.get(Http);


    public static http:Http = new Http(new XHRBackend(new BrowserXhr(),
        new ResponseOptions({
                body: null,
                headers: (function () {
                    var headers = new Headers();
                    headers.append('Content-Type', 'application/json')
                    headers.append('Accept', 'application/json')
                    return headers;
                })(),
                status: 200,
                statusText: "Ok",
                type: 2,
                url: null
            }
        ) ,new CookieXSRFStrategy()),
        new BaseRequestOptions())

    public static Message_Type = {
        Welcome: 95,
        PutMyInfoInTCPList: 40,
        Toast: 41,
        DirectPushNotification: 42,
        Alert: 43,
        GiveMeAppsInfo: 44,
        PushNotificationToProvider: 45,
        GetLocation: 46,
        TackMyLocation: 47,
        WhereAreMyCustomersNow: 48,
        AudioFile: 49,
        AudioFileForcedPlay: 50,
        VideoFile: 51,
        VideoForcedPlay: 52,
        SendFile: 53,
        SendFileForcedOpen: 54,
        InstallApplication: 55,
        InstallApplicationSilently: 56,
        UpdateApplication: 57,
        UpdateApplicationSilently: 58,
        UninstallApplication: 59,
        UninstallApplicationSilently: 60,
        OpenApplication: 61,
        OpenApplicationForced: 62,
        CloseApplication: 63,
        CloseApplicationForced: 64,
        RestartApplication: 65,
        RestartApplicationForced: 66,
        ShutdownDevice: 67,
        ShutdownDeviceForced: 68,
        RestartDevice: 69,
        RestartDeviceForced: 70,
        JavaScript: 71,
        Native: 72,
        GetContacts: 73,
        TackContacts: 74,


    };
    //(function(){
    //    var recDefultOption=  new BaseRequestOptions();
    //    recDefultOption.headers.append('Content-Type', 'application/json')
    //    recDefultOption.headers.append('Accept', 'application/json');
    //    return recDefultOption;
    //})()


/////////////////////////////////////////////////


//    private static injector = Injector.resolveAndCreate([
//    BaseRequestOptions,
//    MockBackend,
//    provide(Http, {useFactory:
//        function(backend, defaultOptions) {
//            return new Http(backend, defaultOptions);
//        },
//        deps: [MockBackend, BaseRequestOptions]})
//]);
//
//    //static get http():any
//    //{
//    //    this.injector.get(Http)  ;
//    //}
//
//    static get http() {
//        var xxx= [[Http]];
//        return xxx;
//    }

}


export class Size {
    height:number;
    width:number;

    constructor(height:number = 100, width:number = 100) {
        this.height = height;
        this.width = width;
    }
}

export class Position {

    constructor(public left_x:string = "50%", public top_y:string = "50%") {
    }
}


export class PositionNum {

    constructor(public left?:number, public top?:number) {
    }
}


export enum userPrivileges {

    getAllBuses = 71,
    newBus = 72,
    editBus = 73,
    deleteBus = 74,


    getAllRoutes = 611,
    newRoute = 612,
    editRoute = 613,
    deleteRoute = 614,
}


class MyUrlResolver extends UrlResolver {
    resolve(baseUrl:string, url:string):string {
        // Serve CSS files from a special CDN.
        if (url.substr(-4) === '.css') {
            return super.resolve('http://cdn.myapp.com/css/', url);
        }
        return super.resolve(baseUrl, url);
    }
}



