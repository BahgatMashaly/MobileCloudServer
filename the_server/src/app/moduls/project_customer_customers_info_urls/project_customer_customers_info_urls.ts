/**
 * Created by Bahgat on 1/9/16.
 */

///<reference path='../../../typings/jquery/jquery.d.ts'/>


import { AlertController} from "ionic-angular";

import {OnDestroy,Component} from "@angular/core";
 import {ModalDialogInstance} from "../../shared/myLib/BootstrapModal/ModalDialogInstance";

import {Observable} from "rxjs/Observable";

import {Body} from "../../shared/myLib/customHTTP/angular2-rest";
import {project_customer_customers_info_url} from "../dataModels/project_customer_customers_info_url";

import {setupPrototypeAnother} from "./setupDataTable"

import {BodyAsIs, Delete, Get, Path, Post, Put} from "../../../libraries/Lib";
import {globalVariables} from "../../shared/others_servicesAndStatic/globalVariables";





@Component({

    templateUrl: './project_customer_customers_info_urls.html',
})

 export class project_customer_customers_info_urls implements OnDestroy {
    the_height:number = 550;
    setupTable:any;
    editor:any;
    table_dom_id:string = "#project_customer_customers_info_urls_table_dom_id";
    DataTable:any;

    columnDefs;
    original_data_table:Array<any>;

    //nav for alert
    //dialog for close it self dialog
    //MyBootstrapModal for open another popup
    //elementRef for open another popup
    constructor(private dialog:ModalDialogInstance ,private alertCtrl: AlertController) {
        setupPrototypeAnother();

        this.getData(this.dialog.config.forAny[0])
        this.dialog.bootstrapRef.instance.addSizeChangedListener(this);

    }





    onAfterDialogSizeChanged(event:Event) {
        if (jQuery(this.table_dom_id).DataTable()) {
            jQuery(this.table_dom_id).DataTable().columns.adjust().draw();
        }
    }

    ngOnDestroy() {
        this.notifymImColsed();

        if (this.DataTable) {

            this.DataTable.destroy();
        }
        console.log('ngOnDestroy');
    }


    getData(id) {
        var that = this;
        this.getbyID(id)
            .subscribe((data:any) => {
                    that.original_data_table = data;
                    that.setupTable();
                },
                (err:any) => {
                    globalVariables.alert( err.message,"Error");
                }
            );
    }

    addInlineNEwRow(e) {
        var that = this;


        var row = (jQuery(this.table_dom_id).DataTable().row.add([null, that.dialog.config.forAny[1], null,''  ]).draw() as any).node();


        jQuery(this.table_dom_id + ' td').off('click');


        jQuery(this.table_dom_id + ' td').off('click');

        jQuery(this.table_dom_id + ' td').on('click', '.editor_edit', function (event) {
            that.editSaveClick(this)
        });
        jQuery(this.table_dom_id + ' td').on('click', '.editor_remove', function (event) {
            that.deleteCancelClick(this)
        });

        that.editSaveClick(jQuery(row).find('.editor_edit')[0])

    }




    deleteCancelClick(e) {
        if (e.innerText == "Delete") {
            if (this.editor.RemovePreviceTextat) {
                this.editor.RemovePreviceTextat();
            }
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
                            if (this.editor.nodeAndChildren && this.editor.nodeAndChildren.length > 0) {
                                var cc = jQuery(this.editor.nodeAndChildren[0].node).closest('tr');
                                jQuery(cc.find(".editor_edit")).text("Edit");
                                jQuery(cc.find(".editor_remove")).text("Delete");

                            }
                            try {
                                this.sqlDelete(e);
                            }
                            catch (err) {
                                globalVariables.alert(err.message,'Error');
                            }
                        }
                    }
                ]
            });
            alert.present();
        }
        else {
            var row = jQuery(e).closest('tr')
            var the_id:any = +(row[0].childNodes['0'].innerText);
            if (the_id == null || the_id == NaN || the_id == "" || isNaN(the_id) ||  typeof the_id === 'undefined'  )//new
            {
                (jQuery(this.table_dom_id).DataTable().row(row).remove()as any ).draw();
                return;
            }
            e.innerText = "Delete";
            jQuery(e).closest('tr').find(".editor_edit").text("Edit");
            this.editor.RemovePreviceTextat();
        }
    }

    editSaveClick(e) {
        if (e.innerText == "Edit") {
            this.editor.myInitEdit(e, this.editor);
        }
        else {
            try {
                var row = jQuery(e).closest('tr')
                var the_id = +(row[0].childNodes['0'].innerText);
                if(this.editor.get("url_full_path")==""      )
                {
                    globalVariables.alert("Please fill url field.",'Error')

                    return;
                }
                if (the_id == null || the_id == NaN  || isNaN(the_id) || typeof the_id === 'undefined' ) {
                    this.sqlInsert(e)
                }
                else {
                    this.sqlUpdate(e)
                }

            }
            catch (err) {
                globalVariables.alert(err.message,'Error');
            }

        }
    }


    sqlUpdate(e) {




        var row = jQuery(e).closest('tr')
        var the_id = +(row[0].childNodes['0'].innerText);


        var letralarray:project_customer_customers_info_url = {
            url_id: the_id,
            project_id: this.dialog.config.forAny[0],
            url_name_description: this.editor.get("url_name_description"),
            url_full_path: this.editor.get("url_full_path"),


        }

        this.put(letralarray as any)
            .subscribe((data:any) => {
                    this.editor.mysubmet(this, this.editor);
                    globalVariables.alert("Record saved successfully","Success")

                },
                (err:any) => {
                    globalVariables.alert(err.message,"Error")

                }
            );
    }

    sqlDelete(e) {

        var row = jQuery(e).closest('tr')
        var the_id = +(row[0].childNodes['0'].innerText);


        var letralarray = {
            "url_id": the_id
        }

        this.delete(letralarray)
            .subscribe((data:any) => {

                    let alert = this.alertCtrl.create({
                        title: "Success",
                        subTitle: "Record deleted successfully",
                        buttons: [
                            {
                                text: 'OK',
                                handler: () => {
                                    ( jQuery(this.table_dom_id).DataTable().row(row).remove() as any).draw();
                                }
                            }]
                    });
                    alert.present();


                },
                (err:any) => {
                    globalVariables.alert(err.message,"Error")

                }
            );
    }

    sqlInsert(e) {

        var that = this;
        var letralarray = {
            url_id: null,
            project_id: this.dialog.config.forAny[0],
            url_name_description: this.editor.get("url_name_description"),
            url_full_path: this.editor.get("url_full_path")
        }

        this.post(letralarray as any)
            .subscribe((data:any) => {
                    letralarray["url_id"] = +data;

                    that.original_data_table.push(letralarray);
                    //////////////////////////////////////

                    that.editor.mysubmet(jQuery(that.editor.nodeAndChildren[0].node).closest('tr'), this.editor); //بتلغي الاي دي
                    jQuery(this.table_dom_id).DataTable().row(jQuery(e).closest('tr')).draw()
                    var arrayOfRowsIDs = jQuery(this.table_dom_id).DataTable().rows();
                    jQuery(this.table_dom_id).dataTable().fnUpdate(+data, arrayOfRowsIDs[0][arrayOfRowsIDs[0].indexOf(Math.max(...arrayOfRowsIDs[0]))], 0);
                    var position = jQuery(this.table_dom_id).dataTable().fnGetData().length - 1;
                    var oRow = jQuery(this.table_dom_id).dataTable().fnGetNodes(position);

                    var aoTableTools = TableTools.fnGetInstance('Routes_table_dom_id');
                    aoTableTools._fnRowSelect(oRow);

                    var container = jQuery('#example,div.dataTables_scrollBody');
                    var scrollTo = jQuery(this.table_dom_id +' tbody tr.DTTT_selected');
                    try {
                        container.scrollTop(scrollTo.offset().top - container.offset().top);
                    }
                    catch (e) {

                    }


                    globalVariables.alert("Record saved successfully","Success")
                },
                (err:any) => {
                    globalVariables.alert(err.message,"Error")
                }
            );

    }


    listeners:Array<IRoutesListener> = Array<IRoutesListener>();

    addRoutesListener(listener:IRoutesListener) {
        this.listeners.push(listener);
    }


    notifymImColsed() {
        for(var i;i<this.listeners.length;i++) {
            this.listeners[i].routeFormClosed();
        }

    }



    @Get("project_customer_customers_info_urls/{project_id}")
    public getbyID(@Path("project_id")project_id):Observable<any> {
        return null;
    };


    @Put("project_customer_customers_info_urls/")
    public put(@BodyAsIs project_customer_customers_info_url:project_customer_customers_info_url):Observable<any> {
        return null;
    };

    @Delete("project_customer_customers_info_urls/")
    public delete(@BodyAsIs project_customer_customers_info_url_id:any):Observable<any> {
        return null;
    };

    @Post("project_customer_customers_info_urls")
    public post(@BodyAsIs project_customer_customers_info_url:project_customer_customers_info_url):Observable<any> {
        return null;
    };


}


//function applyMixins(derivedCtor: any, baseCtors: any[]) {
//    baseCtors.forEach(baseCtor => {
//        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
//            derivedCtor.prototype[name] = baseCtor.prototype[name];
//        });
//    });
//}
//
//applyMixins(Buses_Routes, [SetupDataTableRouts]);


export interface IRoutesListener {
    routeFormClosed();
}
interface BusesIdName {
    Bus_Id:number;
    Bus_Route_Name:string;

}