/**
 * Created by Bahgat on 1/9/16.
 */

 import {Component,OnDestroy,ViewContainerRef,ViewChild} from '@angular/core';

import {ModalDialogInstance} from  '../../shared/myLib/BootstrapModal/ModalDialogInstance';
import {Project} from '../dataModels/Project'

import {Size,globalVariables} from "../../shared/others_servicesAndStatic/globalVariables";
//import DataTables = DataTables.DataTables;

import {ModalConfig} from "../../shared/myLib/BootstrapModal/ModalConfig";
import {NewEditProject,INewEditDeleteProjectListener} from "./newEditProject";
import {MyBootstrapModal} from "../../shared/myLib/BootstrapModal/BootstrapModal";
import { NavController } from "ionic-angular";
import {IDragListener} from "../../shared/myLib/BootstrapModal/BootstrapModalContainer";
import {Observable} from "rxjs/Observable";


import {setupPrototypeAnother} from "./setupDataTable";
 import {BodyAsIs, Get, Put} from "../../../libraries/Lib";



@Component({
    selector: 'modal-content-bus',
    templateUrl:'./Projects.html',
})

//@classHttpHeaders({
//    'Accept': 'application/json',
//    'Content-Type': 'application/json'
//})
 export class Projects implements OnDestroy ,INewEditDeleteProjectListener,IDragListener
{


    the_height:number;

    setupTable:any;
    editor:any;
    table_dom_id:string="#Projects_table_dom_id";
    DataTable:any;
     columnDefs;
    Projects:Array<Project>;
    @ViewChild('myModal', {read: ViewContainerRef}) target;


    //navCtrl for alert
    //dialog for close it self dialog
    //MyBootstrapModal for open another popup
    //elementRef for open another popup
    constructor(  private nav: NavController ,private dialog: ModalDialogInstance , private modal: MyBootstrapModal )
    {

        setupPrototypeAnother();
        this.get()
            .subscribe( (data:any) => {
                    this.Projects= data;
                    this.setupTable();
                },
                (err:any)  => {

                    globalVariables.alert(globalVariables.getErrorMessage(err),"Error") ;
                }
            );


        this.dialog.bootstrapRef.instance.addSizeChangedListener(this);
    }

    onAfterDialogSizeChanged(event:Event) {
        if ( jQuery(this.table_dom_id).DataTable()) {
            //$timeout(function () {
            jQuery(this.table_dom_id).DataTable().columns.adjust().draw();
            //})

            // $scope.DataTable.fnAdjustColumnSizing();
        }
      //  $scope.eventArray.unshift({ title: 'ngPopup resizing !' })
        //console.log('resize')
    }

    ngOnDestroy() {
        this.notifySomethingHappened();
        this.DataTable.destroy();
     //   this.dialog.close();
        console.log('ngOnDestroy');
    }




    presentNewForm(e) {
        var self = this;
        var config = new ModalConfig("New Project", new Size(500, 500))              ///سيتم التوسيط فقط في حالة عدم اعطاء قيم للمكان حيث سيعتبرها -
        config.isCenter = true;
        config.attachToBody = true;
        config.isBlocking = false;
        config.openAsMaximize=true; 

        // var temp_bindings = ReflectiveInjector.resolve([
        //
        //     { provide: AlertController, useValue: globalVariables.alertCtrl} ,
        //     {provide:FormBuilder,useValue:new FormBuilder()}
        //
        // ])
        // var temp_bindings = ReflectiveInjector.resolve([
        //     provide(FormBuilder,{useValue:new FormBuilder()} )
        // ])


        var dialog = this.modal.open3(
            <any>NewEditProject,
            config,
            this.target,
            'myModal'
        ).then((the_instance_of_new_project:NewEditProject) => {
          //  this.buttonProjectsDisabled = true;
            the_instance_of_new_project.addListener(self);
        });


        //////////////////////////////////////////////

       //  this.modal.open3(
       //      <any>NewEditProject,
       //      config,null, null,temp_bindings
       //
       //
       // ).then((the_instance_of_new_project:NewEditProject) => {
       // //   this.buttonBusesDisabled=true;
       //       the_instance_of_new_project.addListener(self)
       //   })
    }






    update_project(project_id,Project_name)
    {
        var self = this;
        var config = new ModalConfig(Project_name, new Size(500, 500))              ///سيتم التوسيط فقط في حالة عدم اعطاء قيم للمكان حيث سيعتبرها -
        config.isCenter = true;
        config.attachToBody = false;
        config.isBlocking = true;
        config.openAsMaximize = true;
        config.forAny=[project_id,Project_name]
        //  config.openAsMaximize=true;
        // var temp_bindings = ReflectiveInjector.resolve([
        //
        //     { provide: AlertController, useValue: globalVariables.alertCtrl}
        //
        // ])

        this.modal.open3(
            <any>NewEditProject,
            config,
            this.target,
            'myModal'
        ).then((the_instance_of_new_project:NewEditProject) => {
            //   this.buttonBusesDisabled=true;
            the_instance_of_new_project.addListener(self)
        })

    }




    newProjectFormNewEditDeleteNewProject(actionNewEditDelete:string,Project:Project) {
        var that=this;
        if(actionNewEditDelete=="New") {
            var row = jQuery(this.table_dom_id).DataTable().row.add(Project).draw();
            jQuery(this.table_dom_id + ' td').off('click');
            jQuery(this.table_dom_id + ' td').off('click');
            this.Projects.push(Project)
        }
        else if(actionNewEditDelete=="Delete")
        {
            var id= Project.projectID;
            var _that=this;
            jQuery(_that.table_dom_id).DataTable().rows().eq(0).each(function (index) {
                var row =  jQuery(_that.table_dom_id).DataTable().row(index);

                var data:Project = <Project>row.data() ;
                if (data.projectID == id) {
                    ( row.remove() as any).draw();

                }

            }) ;
        }
        else if(actionNewEditDelete=="Edit")
        {
            var id= Project.projectID;
            var _that=this;
            jQuery(_that.table_dom_id).DataTable().rows().eq(0).each(function (index) {
                var row =  jQuery(_that.table_dom_id).DataTable().row(index);

                var data:Project = <Project>row.data() ;
                if (data.projectID == id) {
                    jQuery(_that.table_dom_id).DataTable().cell(row, 1).data(Project.projectName).draw();


                }

            }) ;
        }

    }










    //
    // @methodHttpHeaders({
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    // })
    @Get("Projects/")
    public get(): Observable<any> {
        return null; 
    };


    @Put("Projects/")
    public put(@BodyAsIs project:Project): Observable<any> { return null; };




    listeners:Array<IProjectsListener>  = Array<IProjectsListener>();

    addListener(listener:IProjectsListener ) {
        this.listeners.push(listener);
    }


      notifySomethingHappened(){

          this.listeners.forEach((listener:IProjectsListener ) =>
          {
              listener.projectFormClosed();
               })



}





}




//function applyMixins(derivedCtor: any, baseCtors: any[]) {
//    baseCtors.forEach(baseCtor => {
//        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
//            derivedCtor.prototype[name] = baseCtor.prototype[name];
//        });
//    });
//}
//
//applyMixins(Buses_Main_Info, [SetupDataTable]);




export interface IProjectsListener{
    projectFormClosed();
}
