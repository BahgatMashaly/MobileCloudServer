import {
    IonicApp, AlertController,
    MenuController, NavController
} from 'ionic-angular';
import {ViewContainerRef,ViewChild} from "@angular/core";


import {Size} from "../../shared/others_servicesAndStatic/globalVariables";
import {ModalConfig} from "../../shared/myLib/BootstrapModal/ModalConfig";


import {MyBootstrapModal} from "../../shared/myLib/BootstrapModal/BootstrapModal";





import {IProjectsListener} from "../Projects/Projects";


 import {Component} from '@angular/core';
import {globalVariables} from "../../shared/others_servicesAndStatic/globalVariables";
import {Projects} from "../Projects/Projects";
import {Observable} from "rxjs/Observable";


import {sendActionToClients, ISendActionListener} from "../sendActionToClients/sendActionToClients";

import {CustMap} from "../Map/Map";
import {PatternLock} from "../PatternLock/PatternLock";
import {BodyAsIs, Get, Path, Post} from "../../../libraries/Lib";


@Component({
   
    templateUrl:  './Main.html',


})

export class Main implements IProjectsListener {


    continueText;
    public lastModalResult:string;
    private buttonProjectsDisabled:boolean = false;
    private buttonRoutesDisabled:boolean = false;
    private   buttonPushNotification:boolean = false;
    CurrentDataVersion;
    @ViewChild('tutorialcontainer', {read: ViewContainerRef}) target;

    constructor(nav:NavController, app:IonicApp, private modal: MyBootstrapModal,private alertCtrl: AlertController,private menuCtrl: MenuController) {
       
        this.continueText = "Skip Introvv";
        this.handle_io_socket();
    }
    handle_io_socket()
    {
        var that=this;
try {
    globalVariables.ClientSocket.on("TackMyLocation", function (result) {
        that.notify_new_customer_info({device_info: null, customer_map_info: result})
    })
}
        catch (ex){}
    }

    listeners:Array<ISendActionListener>  = Array<ISendActionListener>();

    addListener(listener:ISendActionListener ) {
        this.listeners.push(listener);
    }

    notify_new_customer_info(customer_map_info) {
        for(var i=0;i<this.listeners.length;i++)

            this.listeners[i].tack_new_customer_map_info(customer_map_info);

    }

    where_are_my_customers()
    {
        var that = this;
        var config = new ModalConfig("Map", new Size(400, 500))              ///سيتم التوسيط فقط في حالة عدم اعطاء قيم للمكان حيث سيعتبرها -
        config.isCenter = true;
        config.attachToBody = false;
        config.isBlocking = true;
        config.openAsMaximize = true;
        //   config.forAny=this.routesOriginal;

        var dialog = this.modal.open3(
            <any>CustMap,
            config,
            this.target,
            'tutorialcontainer'
        ).then((the_instance_of_CustMap:CustMap) => {
            that.addListener(the_instance_of_CustMap);
            that.tcp_sender( {action:globalVariables.Message_Type.WhereAreMyCustomersNow}).subscribe( (data:any) => {
                if (data.error_or_ok == 1) {
                }
            });
            // the_instance_of_CustMap.addListener(self);
            //   the_instance_of_CustMap.addListener(self);
        });





    }


    projectFormClosed() {
        this.buttonProjectsDisabled = false;
        // alert("hi i'm from bus");
    }

    PushNotificationFormClosed() {
        this.buttonPushNotification = false;
    }

    routeFormClosed() {
        this.buttonRoutesDisabled = false;
        // alert("hi i'm from bus");
    }

    onSlideChange(event) {
        this.continueText = (event.isEnd == false) ? "Skip Intro" : "Continue";
    }

    onPageDidEnter() {
        // the root left menu should be disabled on the tutorial page
       // this.app.getComponent('leftMenu').enable(false);
        this.menuCtrl.enable(false);
    }

    onPageWillLeave() {
        // enable the root left menu when leaving the tutorial page
       // this.app.getComponent('leftMenu').enable(true);
        this.menuCtrl.enable(true);
    }


    openProjects() {
        var self = this;
        var config = new ModalConfig("Projects", new Size(600, 700))              ///سيتم التوسيط فقط في حالة عدم اعطاء قيم للمكان حيث سيعتبرها -
        config.isCenter = true;
        config.attachToBody = true;
        config.isBlocking = false;
        config.openAsMaximize = true;
        var dialog = this.modal.open3(
            <any>Projects,
            config,
            this.target,
            'tutorialcontainer'
        ).then((the_instance_of_projects:Projects) => {
            this.buttonProjectsDisabled = true;
            the_instance_of_projects.addListener(self);
        });


    }

    openPatternLock()
    {
        var self = this;
        var config = new ModalConfig("patt", new Size(500, 500))              ///سيتم التوسيط فقط في حالة عدم اعطاء قيم للمكان حيث سيعتبرها -
        config.isCenter = true;
        config.attachToBody = false;
        // config.isBlocking = true;

        config.openAsMaximize=true;
        //  config.openAsMaximize=true;

        this.modal.open3(
            <any>PatternLock,
            config,
            this.target,
            'tutorialcontainer')
    }

  

    openAlertOptions(Action) {
        var that = this;
        Action=  this.convert_action_to_number(Action);
        this.showNotficationDependOn(function (deviceOrCustomer) {
            that.showAppList(deviceOrCustomer, function (Apps) {
                if(deviceOrCustomer != "Device info")
                {
                    that.show_list_of_sustomer_customers_info_urlsx(Apps, function (url){
                        that.getDevices(Action, deviceOrCustomer, Apps,url.url_full_path, function (devices) {
                            that.show_the_table_window(Action, deviceOrCustomer, devices)
                        })
                    })
                }
                else {
                    that.getDevices(Action, deviceOrCustomer, Apps,null, function (devices) {
                        that.show_the_table_window(Action, deviceOrCustomer, devices)
                    })
                }
                // GetPushNotificationsAppByCustomerAndDevice
            })
        });
    }

    convert_action_to_number(action)
    {

        switch(action) {
            case 'globalVariables.Message_Type.DirectPushNotification':
                return globalVariables.Message_Type.DirectPushNotification;

            case 'globalVariables.Message_Type.Alert':
                return globalVariables.Message_Type.Alert;

            case 'globalVariables.Message_Type.Toast':
                return globalVariables.Message_Type.Toast;
             case 'globalVariables.Message_Type.PushNotificationToProvider':
                return globalVariables.Message_Type.PushNotificationToProvider;
             case 'globalVariables.Message_Type.AudioFileForcedPlay':
                return globalVariables.Message_Type.AudioFileForcedPlay;
             case 'globalVariables.Message_Type.AudioFile':
                return globalVariables.Message_Type.AudioFile;
             case 'globalVariables.Message_Type.VideoFile':
                return globalVariables.Message_Type.VideoFile;
             case 'globalVariables.Message_Type.VideoForcedPlay':
                return globalVariables.Message_Type.VideoForcedPlay;
             case 'globalVariables.Message_Type.SendFile':
                return globalVariables.Message_Type.SendFile;
             case 'globalVariables.Message_Type.SendFileForcedOpen':
                return globalVariables.Message_Type.SendFileForcedOpen;

            case 'globalVariables.Message_Type.InstallApplication':
                return globalVariables.Message_Type.InstallApplication;
             case 'globalVariables.Message_Type.InstallApplicationSilently':
                return globalVariables.Message_Type.InstallApplicationSilently;
             case 'globalVariables.Message_Type.UpdateApplication':
                return globalVariables.Message_Type.UpdateApplication;
             case 'globalVariables.Message_Type.UpdateApplicationSilently':
                return globalVariables.Message_Type.UpdateApplicationSilently;
                
            case 'globalVariables.Message_Type.UninstallApplication':
                return globalVariables.Message_Type.UninstallApplication;
                
            case 'globalVariables.Message_Type.UninstallApplicationSilently':
                return globalVariables.Message_Type.UninstallApplicationSilently;
                
            case 'globalVariables.Message_Type.OpenApplication':
                return globalVariables.Message_Type.OpenApplication;
                
            case 'globalVariables.Message_Type.OpenApplicationForced':
                return globalVariables.Message_Type.OpenApplicationForced;
                
            case 'globalVariables.Message_Type.CloseApplication':
                return globalVariables.Message_Type.CloseApplication;
                
            case 'globalVariables.Message_Type.CloseApplicationForced':
                return globalVariables.Message_Type.CloseApplicationForced;
                
            case 'globalVariables.Message_Type.RestartApplication':
                return globalVariables.Message_Type.RestartApplication;
                
            case 'globalVariables.Message_Type.RestartApplicationForced':
                return globalVariables.Message_Type.RestartApplicationForced;
                
            case 'globalVariables.Message_Type.ShutdownDevice':
                return globalVariables.Message_Type.ShutdownDevice;
                
            case 'globalVariables.Message_Type.ShutdownDeviceForced':
                return globalVariables.Message_Type.ShutdownDeviceForced;
                
            case 'globalVariables.Message_Type.RestartDevice':
                return globalVariables.Message_Type.RestartDevice;
                
            case 'globalVariables.Message_Type.RestartDeviceForced':
                return globalVariables.Message_Type.RestartDeviceForced;
                
            case 'globalVariables.Message_Type.JavaScript':
                return globalVariables.Message_Type.JavaScript;
                
            case 'globalVariables.Message_Type.Native':
                return globalVariables.Message_Type.Native;
                
            case 'globalVariables.Message_Type.GetContacts':
                return globalVariables.Message_Type.GetContacts;
                

        }
    }
    show_list_of_sustomer_customers_info_urlsx(App,callback)
    {
        this.get_sustomer_customers_info_urls(App.project_id).subscribe((data:any) => {
                if (data.length <= 0) {
                    globalVariables.alert("No active application with this task depend on customer information.",  "Error");
                    return;
                }

                let alertx = this.alertCtrl.create({
                        title: 'Services',
                        inputs: []
                    }
                );
                alertx.setTitle('choose service(s)');
                for (var i = 0; i < data.length; i++) {
                    alertx.addInput({
                        type: 'radio',
                        label: data[i].url_name_description,
                        value: data[i],
                        checked: false
                    });
                }

                alertx.addButton('Cancel');
                alertx.addButton({
                    text: 'Next',
                    handler: data => {
                        console.log('Radio data:', data);
                        callback(data)
                        //  this.testRadioOpen = false;
                        //  this.testRadioResult = data;
                    }
                });

                alertx.present().then((bb) => {
                    //  this.testRadioOpen = true;
                });
            },
            (err:any) => {
                globalVariables.alert(globalVariables.getErrorMessage(err),'Error')
            }
        );
    }


    getDevices(Action,deviceOrCustomer, Apps,url, callBack) {


        var AppsIDs=[];
        if(Apps.length)
        {
            for (var i = 0; i < Apps.length; i++)
            {
                AppsIDs.push(Apps[i].projectPackageNameBundleID)
            }
        }
        else
        {
            AppsIDs.push(Apps.projectPackageNameBundleID)
        }

        //
        this.getDevicesx({ deviceOrCustomer:deviceOrCustomer,Action:Action,projectPackageNameBundleIDs:AppsIDs,CustomerInfoURL:url }).subscribe((data:any) => {
            callBack(data)
        }, (err:any) => {
            globalVariables.alert(globalVariables.getErrorMessage(err),'Error')
        });


    }

    showAppList(deviceOrCustomer, callBack) {
        if (deviceOrCustomer == "Device info") {
            this.getAppList().subscribe((data:any) => {

                    if (data.length <= 0) {
                        globalVariables.alert("No active application with this task depend on customer information.", "Error");
                        return;
                    }

                    let alertx = this.alertCtrl.create({
                            title: 'Choose application(s)',
                            inputs: []
                        }
                    );

                    alertx.setTitle('Choose application(s)');
                    for (var i = 0; i < data.length; i++) {
                        alertx.addInput({
                            type: 'checkbox',
                            label: data[i].projectName,
                            value: data[i],
                            checked: false
                        });
                    }

                    alertx.addButton('Cancel');
                    alertx.addButton({
                        text: 'Next',
                        handler: data => {
                            console.log('Radio data:', data);
                            callBack(data)
                            //  this.testRadioOpen = false;
                            //  this.testRadioResult = data;
                        }
                    });
alertx.present().then((bb) => {
                        //  this.testRadioOpen = true;
                    });
                },
                (err:any) => {
                    globalVariables.alert(globalVariables.getErrorMessage(err),'Error')
                }
            );
        }


        else
        {
            this.getAppListThatHaveCustomerInfo().subscribe((data:any) => {
                    if (data.length <= 0) {
                        globalVariables.alert("No active application with this task depend on customer  information.",  "Error")
                        return;
                    }
                    let alertx = this.alertCtrl.create({
                            title: 'application(s)',
                            inputs: []
                        }
                    );

                    for (var i = 0; i < data.length; i++) {
                        alertx.addInput({
                            type: 'radio',
                            label: data[i].projectName,
                            value: data[i],
                            checked: false
                        });
                    }

                    alertx.addButton('Cancel');
                    alertx.addButton({
                        text: 'Next',
                        handler: data => {
                            console.log('Radio data:', data);
                            callBack(data)
                            //  this.testRadioOpen = false;
                            //  this.testRadioResult = data;
                        }
                    });
alertx.present().then((bb) => {
                        //  this.testRadioOpen = true;
                    });
                },
                (err:any) => {
                    globalVariables.alert(globalVariables.getErrorMessage(err),'Error')
                }
            );
        }
    }

    showNotficationDependOn(callBack) {
        let alertx = this.alertCtrl.create({
                title: 'Task depend on ?',
                inputs: []
            }
        );
        alertx.setTitle('Task depend on ?');

        alertx.addInput({
            type: 'radio',
            label: 'Device info',
            value: 'Device info',
            checked: true
        });
        alertx.addInput({
            type: 'radio',
            label: 'Customer info',
            value: 'Customer info'
        });

        alertx.addInput({
            type: 'radio',
            label: 'Customer and device info',
            value: 'Customer and device info'
        });

        alertx.addButton('Cancel');
        alertx.addButton({
            text: 'Next',
            handler: data => {
                console.log('Radio data:', data);
                callBack(data)
                //  this.testRadioOpen = false;
                //  this.testRadioResult = data;
            }
        });
alertx.present(alertx).then((bb) => {
            //  this.testRadioOpen = true;
        });
    }

convert_action_to_title(action)
{
    switch(action) {
        case globalVariables.Message_Type.DirectPushNotification:
            return "Send Direct Push Notification";
            
        case globalVariables.Message_Type.Alert:
            return 'Send Direct Alert';
            
        case globalVariables.Message_Type.Toast:
            return 'Send Direct Toast';
            
        case globalVariables.Message_Type.PushNotificationToProvider:
            return 'Send Push Notification To Provider';
            
        case globalVariables.Message_Type.AudioFile:
            return 'Send Audio File';
            
        case globalVariables.Message_Type.AudioFileForcedPlay:
            return 'Send Audio File Forced Play';
            
        case globalVariables.Message_Type.VideoFile:
            return 'Send Video File';
            
        case globalVariables.Message_Type.VideoForcedPlay:
            return 'Send Video File Forced Play';
            
        case globalVariables.Message_Type.SendFile:
            return 'Send File';
            
        case globalVariables.Message_Type.InstallApplication:
            return 'Install Application';
            
        case globalVariables.Message_Type.InstallApplicationSilently:
            return 'install Application Silently';
            
        case globalVariables.Message_Type.UpdateApplication:
            return 'Update Application';
            
        case globalVariables.Message_Type.UpdateApplicationSilently:
            return 'Update Application Silently';
            
        case globalVariables.Message_Type.UninstallApplication:
            return 'Uninstall Application';
            
        case globalVariables.Message_Type.UninstallApplicationSilently:
            return 'Uninstall Application Silently';
            
        case globalVariables.Message_Type.OpenApplication:
            return 'Open Application';
            
        case globalVariables.Message_Type.OpenApplicationForced:
            return 'Open Application Directly';
            
        case globalVariables.Message_Type.CloseApplication:
            return 'Close Application';
            
        case globalVariables.Message_Type.CloseApplicationForced:
            return 'Close Application Directly';
            
        case globalVariables.Message_Type.RestartApplication:
            return 'Restart Application';
            
        case globalVariables.Message_Type.RestartApplicationForced:
            return 'Restart Application Directly';
            
        case globalVariables.Message_Type.ShutdownDevice:
            return 'Shutdown Device';
            
        case globalVariables.Message_Type.ShutdownDeviceForced:
            return 'Shutdown Device Directly';
            
        case globalVariables.Message_Type.RestartDevice:
            return 'Restart Device';
            
        case globalVariables.Message_Type.RestartDeviceForced:
            return 'Restart Device Directly';
            
        case globalVariables.Message_Type.JavaScript:
            return 'Run Your JavaScript Code';
            
        case globalVariables.Message_Type.Native:
            return 'Run Your Native Command';
            
        case globalVariables.Message_Type.GetContacts:
            return 'Get Contacts';
            

    }
}
    show_the_table_window(action,deviceOrCustomer,devices)
    {
        var self = this;
        var config = new ModalConfig(this.convert_action_to_title(action), new Size(500, 500))              ///سيتم التوسيط فقط في حالة عدم اعطاء قيم للمكان حيث سيعتبرها -
        config.isCenter = true;
        config.attachToBody = false;
     // config.isBlocking = true;
        var temp={}
        temp["Action"]=action;
        temp["deviceOrCustomer"]=deviceOrCustomer;

        temp["devices"]=devices;
        config.forAny=[temp];
        config.openAsMaximize=true;
        //  config.openAsMaximize=true;

        this.modal.open3(
            <any>sendActionToClients,
            config,
            this.target,
            'tutorialcontainer')
        //).then((the_instance_of_new_sendPushNotifications:sendPushNotifications) => {
        //    //   this.buttonBusesDisabled=true;
        //    the_instance_of_new_project.addListener(self)
        //})
    }


    testLoading()
    {
        this.getAppList().subscribe((data:any) => {},(err:any) => {
            globalVariables.alert(globalVariables.getErrorMessage(err),'Error')
            }
        );
      
    }

    @Get("devicesServerFrontEnd/getAppList")
    public getAppList():Observable<any> {
        return null;
    };

    @Get("devicesServerFrontEnd/getAppListThatHaveCustomerInfo")
    public getAppListThatHaveCustomerInfo():Observable<any> {
        return null;
    };


    @Post("tcp_sender",true,true)
    public tcp_sender(@BodyAsIs anything:any): Observable<any> { return null; };


    @Post("devicesServerFrontEnd")//projectPackageNameBundleIDs,task,customur info url ,
    public getDevicesx(@BodyAsIs anyThing:any):Observable<any> {
        return null;
    }
    @Get("devicesServerFrontEnd/get_sustomer_customers_info_urls/{project_id}")
    public get_sustomer_customers_info_urls(@Path("project_id")project_id):Observable<any> {
        return null;
    };

    //@POST("getDevicesOpenApp/getDevicesWithCustomerInfoOpen")
    //public getDevicesWithCustomerInfoOpen(@Body anyThing:any): Observable { return null; };///id_and_url
    //
    //@POST("getDevicesOpenApp/getCustomerInfoOnlyOpen")
    //public getCustomerInfoOnlyOpen(@Body anyThing:any): Observable { return null; };//id_and_url

}

