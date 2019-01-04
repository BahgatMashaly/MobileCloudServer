/**
 * Created by Bahgat on 1/13/16.
 */
import {Component,ViewContainerRef,ViewChild} from '@angular/core';
import { FormBuilder,  FormGroup, Validators, FormControl,AbstractControl } from '@angular/forms';

import {  AlertController} from "ionic-angular";
 import {ShowError} from "../../shared/myLib/show-error.component";
import {Project} from "../dataModels/Project";
import {ModalDialogInstance} from "../../shared/myLib/BootstrapModal/ModalDialogInstance";
import {globalVariables} from "../../shared/others_servicesAndStatic/globalVariables";


import {Observable} from "rxjs/Observable";

import {Size} from "../../shared/others_servicesAndStatic/globalVariables";
import {ModalConfig} from "../../shared/myLib/BootstrapModal/ModalConfig";


import {MyBootstrapModal} from "../../shared/myLib/BootstrapModal/BootstrapModal";
import {project_customer_customers_info_urls} from "../project_customer_customers_info_urls/project_customer_customers_info_urls";
import {BodyAsIs, Delete, Get, Path, Post, Put, Query} from "../../../libraries/Lib";





@Component({
    selector: 'new-Project',
    templateUrl:'./newEditProject.html',
})


export class NewEditProject{

    @ViewChild('myModal_new_edit_project', {read: ViewContainerRef}) target;
    listeners:Array<INewEditDeleteProjectListener> = Array<INewEditDeleteProjectListener>();
    currentProject:Project=new  Project()

    formGroup1:FormGroup=null;

    constructor( private fb: FormBuilder,private dialog: ModalDialogInstance,  private modal: MyBootstrapModal  ,private alertCtrl: AlertController) {


if(dialog.config.forAny) {
    this.getbyID(dialog.config.forAny[0]).subscribe((data:Project) => {
            this.currentProject.projectID = data[0].projectID;
            this.currentProject.projectName = data[0].projectName;
            this.currentProject.projectPackageNameBundleID=data[0].projectPackageNameBundleID;
            this.currentProject.projectVersion = data[0].projectVersion;
            this.currentProject.projectAndroidPath = data[0].projectAndroidPath;
            this.currentProject.projectIOSPath = data[0].projectIOSPath;
            this.currentProject.projectWPPath = data[0].projectWPPath;
            this.currentProject.projectWindowsPath = data[0].projectWindowsPath;
            this.currentProject.projectServerRootFile = data[0].projectServerRootFile;
            this.currentProject.enablePushNotification = data[0].enablePushNotification;

            this.currentProject.activeOrNot= data[0].activeOrNot;
            this.currentProject.pushNotificationAndroidAPIKey= data[0].pushNotificationAndroidAPIKey;
            this.currentProject.pushNotificationIOSKeyPath= data[0].pushNotificationIOSKeyPath;
            this.currentProject.pushNotificationIOSSecretPath= data[0].pushNotificationIOSSecretPath;
            this.currentProject.voipPushNotificationIOSKeyPath= data[0].voipPushNotificationIOSKeyPath;
            this.currentProject.voipPushNotificationIOSSecretPath= data[0].voipPushNotificationIOSSecretPath;
            this.currentProject.pushNotificationWindowsPackageSID= data[0].pushNotificationWindowsPackageSID;
            this.currentProject.pushNotificationWindowsPackageSecretKey= data[0].pushNotificationWindowsPackageSecretKey;

        },
        (err:any) => {
            globalVariables.alert(globalVariables.getErrorMessage(err),'Error')
        }
    );

}

    }

    EndWithWWW(c): {[key: string]: boolean}
    {
        if (c.value &&   c.value.substr(-"www".length) != "www") {
            return {"EndWithWWW": true};
        } else {
            return null;

        }
    }


    nameValidator(c): {[key: string]: boolean}
    {
        if ( c.value !== undefined &&  c.value !== null  &&   c.value!="") {
            return null;
        } else {
            return {"nameValidator": true};
        }
    }


    ngOnInit()
    {
        this.formGroup1 = this.fb.group({

            projectID1: new FormControl('') ,
            projectName1: new FormControl('', Validators.compose([ Validators.required,  Validators.minLength(2), this.nameValidator])),
            projectPackageNameBundleID1: new FormControl('') ,
            projectVersion1:  new FormControl('') ,
            projectAndroidPath1: new FormControl('', Validators.compose([ this.EndWithWWW])),
            projectIOSPath1:new FormControl('', Validators.compose([ this.EndWithWWW])),
            projectWPPath1:new FormControl('', Validators.compose([ this.EndWithWWW])),
            projectWindowsPath1: new FormControl('', Validators.compose([ this.EndWithWWW])),
            projectServerRootFile1:  new FormControl('') ,
            enablePushNotification1:  new FormControl(0) ,

            activeOrNot1: new FormControl(0) ,
            pushNotificationAndroidAPIKey1:  new FormControl('') ,
            pushNotificationIOSKeyPath1:  new FormControl('') ,
            pushNotificationIOSSecretPath1: new FormControl('') ,
            voipPushNotificationIOSKeyPath1:  new FormControl('') ,
            voipPushNotificationIOSSecretPath1: new FormControl('') ,
            pushNotificationWindowsPackageSID1: new FormControl('') ,
            pushNotificationWindowsPackageSecretKey1: new FormControl('')
        });
    }
    onSubmit(): void {
if(this.currentProject.projectID)
{
    this.update(this.currentProject)
        .subscribe( (data:any) => {
               // this.currentProject.projectID=data;
                this.notifySomethingHappened("Edit");

                globalVariables.alert( "Record Updated successfully","Success")
               // this.dialog.close();

            },
            (err:any)  => {
                globalVariables.alert(globalVariables.getErrorMessage(err),'Error')
            }
        );
}
        else {


//var that=this;
        this.post(this.currentProject)
            .subscribe( (data:any) => {
                    this.currentProject.projectID=data;
                this.dialog.config.Title=this.currentProject.projectName;
                    this.notifySomethingHappened("New");

                    globalVariables.alert("Record Inserted successfully","Success")

                },
                (err:any)  => {
                    globalVariables.alert(globalVariables.getErrorMessage(err),'Error')
                }
            );
}
    }


    deleteProject()
    {
        let alert = this.alertCtrl.create({
            title: 'Confirmation',
            message: 'Are you sure you want to delete this record?',
            buttons: [
                {
                    text: 'No',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: () => {
                        setTimeout(() => {
                            this.dialog.close()
                        this.delete(  this.currentProject.projectID )
                            .subscribe( (data:any) => {
                                    globalVariables.alert( "Record deleted successfully","Success")
                                },
                                (err:any)  => {
                                    globalVariables.alert(globalVariables.getErrorMessage(err),'Error')
                                }
                            );
                        },500 );
                    }
                }
            ]
        });
        alert.present();

    }


    addListener(listener:INewEditDeleteProjectListener) {
        this.listeners.push(listener);
    }

    notifySomethingHappened(actionNewEditDelete:string) {
        this.listeners.forEach((listener:INewEditDeleteProjectListener ) => {
            listener.newProjectFormNewEditDeleteNewProject(actionNewEditDelete,this.currentProject);
        })


    }

    create()
    {
        this.notifySomethingHappened("New");
    }
    close()
    {
        this.dialog.close();
    }

    show_customuer_customers_info_urls_form()
    {
        var self = this;
        var config = new ModalConfig("Customers info url(s)", new Size(300, 300))              ///سيتم التوسيط فقط في حالة عدم اعطاء قيم للمكان حيث سيعتبرها -

        config.attachToBody = false;
        config.isBlocking = true;
        config.openAsMaximize=true;
        config.forAny=[this.currentProject.projectID];


        this.modal.open3(
            <any>project_customer_customers_info_urls,
            config,this.target, 'myModal_new_edit_project'  )
    }


    @Get("Projects/{projectID}")
    public getbyID(@Path("projectID")projectID):Observable<any> {
        return null;
    };


    @Post("Projects/")
    public post(@BodyAsIs Project:Project): Observable<any> { return null; };



    @Delete("Projects/")
    public delete(@Query("projectID") projectID:number): Observable<any> { return null; };

    @Put("Projects/")
    public update(@BodyAsIs  Project:Project): Observable<any> { return null; };



}


export interface INewEditDeleteProjectListener{
    newProjectFormNewEditDeleteNewProject(actionNewEditDelete:string,Project:Project);
}


