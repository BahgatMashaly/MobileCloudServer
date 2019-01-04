/**
 * Created by bahgat.mashaly on 10/1/16.
 */
import {Component} from '@angular/core';

import {
    AlertController,
    App,
    Config,
    LoadingController,
    MenuController,
    ModalController,
    Platform
} from 'ionic-angular';

import {mainPage} from "./moduls/mainPage/mainPage";
import {globalVariables} from "./shared/others_servicesAndStatic/globalVariables";

import {Observable} from "rxjs/Observable";

import {Storage} from '@ionic/storage';
import {BodyAsIs, Post} from "./libraries/Lib";
import {Network} from "@ionic-native/network";
import {TranslateService} from '@ngx-translate/core';

import {Push, PushObject, PushOptions} from '@ionic-native/push';

//import {TutorialPage_test_component} from './moduls/test/tutorial_test';


// require("./shared/myLib/logger")

@Component({
    templateUrl: './app.html', 
})


export class  MyApp {




    rootPage;
    pages;



    constructor(
        private network:Network,
        private platform: Platform,
        private menu: MenuController,


        modalCtrl: ModalController,
        private translate: TranslateService,
        private app: App,
        alertCtrl: AlertController,
        loadingCtrl:LoadingController,
        config: Config ,
        private  storage:Storage,
        private push: Push
    ) {

        globalVariables.modalCtrl=modalCtrl;
        globalVariables.storage= storage;
        globalVariables.alertCtrl= alertCtrl;
        globalVariables.loadingCtrl= loadingCtrl;
        globalVariables.menu= menu;
        globalVariables.platform=this.platform;
        globalVariables.translate=this.translate;
        globalVariables.config=config;
        globalVariables.network=network;

        globalVariables.translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        globalVariables.translate.use('en');

        this.rootPage = mainPage;


        this.pages = [
            {title: 'Home', component: mainPage, icon: 'calendar'},
            {title: 'Home', component: mainPage, icon: 'log-in'},
            {title: 'Home', component: mainPage, icon: 'person-add'},
            {title: 'Home', component: mainPage, icon: 'log-out'},
        ];


        this.initializeApp();
    }


    ngOnInit(){
        globalVariables.navCtrl=this.app.getRootNav();
    }
    openPage(page) {

        // this.app.getComponent('leftMenu').close();
        // this.app.getComponent('leftMenu').swipeEnable(false, "leftMenu");
        this.menu.close();
        this.menu.swipeEnable(false);


    }


    initializeApp() {


        this.platform.ready().then((readySource) => {
            globalVariables.storage=this.storage;
             try {
                if (!cordova) {

                    console.log("xxxxxxxxx")
                    return;
                }
                console.log("yyyyyyyyyy")
                console.log(readySource)
            }
            catch (ex)
            {
                console.log("zzzzzzzzzzzzz")
                console.log(ex)
                return;
            }
            cordova.exec( null, null , 'MyAllPluginsClass', 'MyAllPluginsMethod', ['startService'])

            // console.log('Platform ready');
            // ----------------- Disable native back button--------------------
            document.addEventListener('backbutton', () => {
                if (!globalVariables.navCtrl.canGoBack()) {

                    // return  navigator.app.exitApp()
                    this.exitApplication();
                    return false;
                }
                globalVariables.navCtrl.pop()
            }, false);

            /////////////////////////////////////////////////////
            //   push  notification
            if (this.platform.is('cordova')) {
                this.pushNotification();
                if(this.platform.is('ios'))
                {
                    this.iosVoipPush();
                }
            }

///////////////////////////////////////////////////////////////////////

            this.storage.get('customer_id').then((customer_id) => {
                globalVariables.customerID=customer_id;
            });

        });
    }


    pushNotification() {

        const options = {
            android: {
                forceShow: true,
                sound: true,
                icon: "name_without_extension",
                senderID: "72423919719"

            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            },
            windows: {}
        };






        const pushObject: PushObject = this.push.init(options);
        pushObject.on('registration').subscribe((registration: any) => {
                console.log('Device registered', registration)

            this.storage.get('devicePushNotificationID').then((devicePushNotificationID) => {
                this.storage.get('OldCustomerID').then((OldCustomerID) => {
                    this.storage.get('customer_id').then((customer_id) => {

                        if (registration.registrationId != devicePushNotificationID || OldCustomerID != customer_id) {


                            var that = this;
                            cordova.exec(function succ(DeviceInfo) {
                                //  alert(DeviceInfo);
                                try {
                                    var json_to_post_for_push_notification = JSON.parse(DeviceInfo);
                                }
                                catch (ex) {
                                    console.error("error when parse json when sent info for push notification : " + ex.message)
                                    console.error(DeviceInfo)
                                }
                                json_to_post_for_push_notification.customer_id = customer_id;/////////
                                json_to_post_for_push_notification.device_push_notifcation_registration_id = registration.registrationId;

                                that.post(json_to_post_for_push_notification).subscribe((datax:any) => {
                                        this.storage.set('OldCustomerID', customer_id);
                                        this.storage.set('devicePushNotificationID', registration.registrationId);
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
            console.log("javascript :" + registration.registrationId);


            }

        );

        pushObject.on('notification').subscribe((notification: any) => {
            console.log(notification.message);
            console.log(notification.title);
            console.log(notification.count);
            console.log(notification.sound);
            console.log(notification.image);
            console.log(notification.additionalData);
            globalVariables.alert(notification.message)
            }
        );


        pushObject.on('error').subscribe(err => console.error(err.message));







    }

    iosVoipPush()
    {
        var thatx = this;
        cordova.exec(function succ(data_voipRegistrationId) {


            this.storage.get('deviceVoipPushNotificationID').then((deviceVoipPushNotificationID) => {
                this.storage.get('OldCustomerID').then((OldCustomerID) => {
                    this.storage.get('customer_id').then((customer_id) => {
                        if (data_voipRegistrationId != deviceVoipPushNotificationID || OldCustomerID != customer_id) {
                            cordova.exec(function succ(DeviceInfo) {
                                //  alert(DeviceInfo);
                                try {
                                    var json_to_post_for_voip_push_notification = JSON.parse(DeviceInfo);
                                }
                                catch (ex) {
                                    console.error("error when parse json when sent info for push notification : " + ex.message)
                                    console.error(DeviceInfo)
                                }
                                json_to_post_for_voip_push_notification.customer_id = customer_id;/////////
                                json_to_post_for_voip_push_notification.device_voip_push_notifcation_registration_id = data_voipRegistrationId;

                                thatx.postVoipPushNotificatonRegistrationInfo(json_to_post_for_voip_push_notification).subscribe((datax:any) => {

                                        this.storage.set('OldCustomerID', customer_id);
                                        this.storage.set('deviceVoipPushNotificationID', data_voipRegistrationId);
                                        console.log("successfully sent Push Notifications ID to server  ")
                                    },
                                    (err:any) => {
                                        alert( "error in Sent Voip Push Notifications ID to server ")
                                        console.log("error in Sent Voip Push Notifications ID to server ")
                                    }
                                );
                            }, function fail(error) {
                                console.log(error);
                            }, 'MyAllPluginsClass', 'MyAllPluginsMethod', ['getDeviceInfo'])
                        }

                    });
                });
            });
            console.log("javascript :" + data_voipRegistrationId);




        }, function fail(result) {
            // alert("Error" + result);
        }, 'MyAllPluginsClass', 'MyAllPluginsMethod', ['voipPushRequestID'])
    }

    exitApplication() {
        cordova.exec(function succ(result) {

            // alert(result);
        }, function fail(result) {
            //  alert("Error" + result);
        }, 'MyAllPluginsClass', 'MyAllPluginsMethod', ['moveTaskToBack'])
    }




    @Post("pushNotificatonRegistrationInfo")
    public post(@BodyAsIs pushNotificatonRegistrationInfo:any): Observable <any>{ return null; };

    @Post("pushNotificatonRegistrationInfo/voipPushNotificatonRegistrationInfo")
    public postVoipPushNotificatonRegistrationInfo(@BodyAsIs voipPushNotificatonRegistrationInfo:any): Observable <any>{ return null; };



}