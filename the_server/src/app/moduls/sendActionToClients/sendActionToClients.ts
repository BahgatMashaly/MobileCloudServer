/**
 * Created by Bahgat on 1/9/16.
 */

  import {Component,ViewContainerRef,ViewChild,OnDestroy} from '@angular/core';

import {ModalDialogInstance} from  '../../shared/myLib/BootstrapModal/ModalDialogInstance';

import {Size,globalVariables} from "../../shared/others_servicesAndStatic/globalVariables";
//import DataTables = DataTables.DataTables;

import {ModalConfig} from "../../shared/myLib/BootstrapModal/ModalConfig";

import {MyBootstrapModal} from "../../shared/myLib/BootstrapModal/BootstrapModal";
import {NavController} from "ionic-angular";

import {AuthHttp} from "../../shared/myLib/customHTTP/customHTTP";
import {checkPrivilege} from "../../shared/myLib/customHTTP/customHTTPDecorators";
import {mylog} from "../../shared/myLib/customHTTP/customHTTPDecorators";


 import {Observable} from "rxjs/Observable";

import {AfterViewInit} from "@angular/core";

// import {Json} from "@angular/common/src/facade/lang";
// import any = jasmine.any;
import {CustMap, IshapesListener} from "../Map/Map";
import {AudioCommands} from  '../../shared/myLib/recorderjs/audioCommands'
import {setupPrototypeAnother} from "./setupDataTable";
import {BodyAsIs, Post} from "../../../libraries/Lib";


@Component({
    selector: 'modal-content-bus',
    templateUrl:'./sendActionToClients.html',


})

//@classHttpHeaders({
//    'Accept': 'application/json',
//    'Content-Type': 'application/json'
//})

export class sendActionToClients implements OnDestroy,AfterViewInit,IshapesListener
{
    @ViewChild('myview', {read: ViewContainerRef}) target;

    the_height:number;

    setupTable:any;
    editor:any;
    table_dom_id:string="#send_action_table_dom_id";
    DataTable:any;

    columnDefs;
    devices:Array<any>;
    dynamicColumns=[];
    stopSending=false;

    message="";
    title="";
    toast="";
    bundleID="";
    isSelectAll=false;
    fileToUpload: any=null;
    currentAction:number=null;
    deviceOrCustomer;
    rectangles;
    circles;
    audioCommands;
    showContente={
        MessageAndTitle:0,
        file:0,
        allawrecording:0,
        toast:0,
    bundleID:0,
    }
    // isSocketDevice;
    //navCtrl for alert
    //dialog for close it self dialog
    //MyBootstrapModal for open another popup
    //elementRef for open another popup

    constructor(  private nav: NavController ,private dialog: ModalDialogInstance , private modal: MyBootstrapModal )
    {

        var el=   document.getElementById('send_action_table_dom_id');
       var that=this;
       this.handle_io_socket();



    //    Action,deviceOrCustomer,isSocketDevice,devices
        this.currentAction=dialog.config.forAny[0]["Action"];
        this.devices=dialog.config.forAny[0]["devices"];
this.deviceOrCustomer=dialog.config.forAny[0]["deviceOrCustomer"];
        //this.isSocketDevice=dialog.config.forAny[0]["isSocketDevice"];
        this.dependOnAction();

        var counter=0;
        this.dynamicColumns.push({
            'targets': counter++,
            'searchable':false,
            'orderable':false,

            'className': 'dt-body-center xxx',
            'render': function (data, type, full, meta){
                return '<input type="checkbox" name="id[]" value="'
                    + jQuery('<div/>').text(data).html() + '">';
            }
        });

        this.dynamicColumns.push({
            'targets': counter++,
            'searchable':false,
            'orderable':false,
            'sWidth': '150px',
            sClass: "alignCenter",
            'className': 'dt-body-center status',
            'title':'Action Status',
            'render': function (data, type, full, meta){
                return  jQuery('<div/>').text(data).html()  ;
            }
        });

        var arr = Object.keys(this.devices[0]);

        for (var i = 0; i < arr.length; i++) {
            this.dynamicColumns.push({

                'title':this.getTitle( arr[i]),
                "visible": this.getVisiblety( arr[i]),
                'name': arr[i],
                'data': arr[i],
                "targets":counter++,
                sClass: "alignCenter",
            });
        };

        this.dynamicColumns.push({
            'targets': counter++,
            'searchable':false,
            'orderable':false,
            'sWidth': '150px',
            sClass: "alignCenter",
            'className': 'dt-body-center status',
            'title':'Location',
            'render': function (data, type, full, meta){
                return  jQuery('<div/>').text(data).html()  ;
            }
        });
        setupPrototypeAnother();

       // jQuery(".xxx:eq(0)").append("<input type='checkbox' id='mycheckBox'  [(ng-model)]='isSelectAll'  checked>");

        this.dialog.bootstrapRef.instance.addSizeChangedListener(this);
    }

    ngAfterViewInit():any {
        var  newID='send_action_table_dom_id'+new Date().getTime();
     var el=   document.getElementById('send_action_table_dom_id');
        el.setAttribute('id', newID);
        this.table_dom_id='#'+newID;

        this.setupTable();
        if(this.currentAction==globalVariables.Message_Type.AudioFile || this.currentAction==globalVariables.Message_Type.AudioFileForcedPlay ) {
            try {
                this.audioCommands = new AudioCommands();
            }
            catch (e)
            {
                console.error(e);
            }
        }
    }
    toggleRecording(e)
    {
        this.audioCommands.toggleRecording(e)
    }

    dependOnAction()
    {
        // Welcome:95,
        //     PutMyInfoInTCPList:40,
        // Toast:41,
        // DirectPushNotification:42,
        // Alert:43,
        // GiveMeAppsInfo:44,
        // PushNotificationToProvider:45,
        // GetLocation:46,
        // TackMyLocation:47,
        // WhereAreMyCustomersNow:48,
        // AudioFileForcedPlay:49
      if(this.currentAction==globalVariables.Message_Type.AudioFile || this.currentAction==globalVariables.Message_Type.AudioFileForcedPlay )
    {
        this.showContente.allawrecording=1;
    }

        if(this.currentAction==globalVariables.Message_Type.Alert ||  this.currentAction==globalVariables.Message_Type.DirectPushNotification|| this.currentAction==globalVariables.Message_Type.PushNotificationToProvider)
        {
            this.showContente.MessageAndTitle=1;
        }
        else if( this.currentAction==globalVariables.Message_Type.Toast )
        {
            this.showContente.toast=1;
        }
        else if(this.currentAction==globalVariables.Message_Type.AudioFile || this.currentAction==globalVariables.Message_Type.AudioFileForcedPlay ||this.currentAction==globalVariables.Message_Type.VideoFile|| this.currentAction==globalVariables.Message_Type.VideoForcedPlay|| this.currentAction==globalVariables.Message_Type.SendFile||  this.currentAction==globalVariables.Message_Type.SendFileForcedOpen||  this.currentAction==globalVariables.Message_Type.InstallApplication||  this.currentAction==globalVariables.Message_Type.InstallApplicationSilently ||  this.currentAction==globalVariables.Message_Type.UpdateApplication ||  this.currentAction==globalVariables.Message_Type.UpdateApplicationSilently)
        {
            this.showContente.file=1;
        }


         else if( this.currentAction==globalVariables.Message_Type.InstallApplication ||this.currentAction==globalVariables.Message_Type.InstallApplicationSilently||this.currentAction==globalVariables.Message_Type.CloseApplication||this.currentAction==globalVariables.Message_Type.CloseApplicationForced||this.currentAction==globalVariables.Message_Type.OpenApplication||this.currentAction==globalVariables.Message_Type.OpenApplicationForced
            || this.currentAction==globalVariables.Message_Type.UninstallApplication||this.currentAction==globalVariables.Message_Type.UninstallApplicationSilently||this.currentAction==globalVariables.Message_Type.UpdateApplication||this.currentAction==globalVariables.Message_Type.UpdateApplicationSilently)
         {
             this.showContente.bundleID=1;
         }
    }

    handle_io_socket()
    {
       var that=this;
        try {
            globalVariables.ClientSocket.on("iosError", function (result) {
console.log("Socket message iosError:",result)
                that.DataTable.rows().eq(0).each(function (index) {
                     var row = that.DataTable.row(index);

                    var data:any = <any>row.data();
                    if (data.device_push_notifcation_registration_id == result.device_push_notifcation_registration_id || data.device_voip_push_notifcation_registration_id == result.device_voip_push_notifcation_registration_id) {
                        that.DataTable.DataTable().cell(row, 1).data(result.errorName).draw();
                    }

                });
            })

            globalVariables.ClientSocket.on("TackMyLocation", function (result) {
                console.log("Socket message TackMyLocation:",result);

                that.DataTable.rows().eq(0).each(function (index) {
                    var row =    that.DataTable.row(index);

                    var data:any = <any>row.data();
                    if (data.device_database_id == result.device_database_id) {
                        that.DataTable.cell(row,   that.DataTable.columns().nodes().length - 1).data(JSON.stringify(result)).draw();
                        that.notify_new_customer_info({device_info: data, customer_map_info: result})
                    }


                });
            })

        }
        catch (ex){}
    }
    
    getTitle(the_name)
    {
        switch(the_name) {
            case 'device_database_id':
                return 'Device ID';

            case 'projectPackageNameBundleID':
               return 'Bundle ID';

            case 'customer_id':
                return 'Customer ID';

            case 'device_push_notifcation_registration_id':
                return 'Push Notifcation Registration ID';

            case 'device_voip_push_notifcation_registration_id':
                return 'Voip Push Notifcation Registration ID';

            case 'device_os':
                return 'OS';

            case 'device_mac_Addr':
                return 'Mac Address';

            case 'device_udid':
                return 'UDID';

            case 'device_serial':
                return 'Serial';

            case 'device_android_Id':
                return 'Android ID';

            case 'device_manufacturer':
                return 'Manufacturer';

            case 'device_brand':
                return 'Brand';

            case 'device_product':
                return 'Product';

            case 'device_model':
                return 'Model';

            case 'device_sdk_version':
                return 'SDK Version';

            case 'device_date_time':
                return 'Add DataTime';


            default:
           return the_name;
        }

    }

    getVisiblety(the_name):any
    {
        switch(the_name) {

            case 'customer_id':
                return false;

            case 'device_push_notifcation_registration_id':
                return false;

            case 'device_voip_push_notifcation_registration_id':
                return false;

            case 'device_os':
                return 'OS';

            case 'device_mac_Addr':
                return false;

            case 'device_udid':
                return false;

            case 'device_serial':
                return false;

            case 'device_android_Id':
                return false;


            default:
                return true;
        }
    }

    check_uncheck()
    {
        //var cell= jQuery(this.table_dom_id + " thead th:eq(0)")

      //  jQuery(".xxx:eq(0)").append("<input type='checkbox'    checked>");


        var rows =this.DataTable.rows({ 'search': 'applied' }).nodes();
        // Check/uncheck checkboxes for all rows in the table
        if(!this.isSelectAll) {
            jQuery('input[type="checkbox"]', rows).prop('checked', true);

            this.isSelectAll=true;
        }
        else
        {
            jQuery('input[type="checkbox"]', rows).prop('checked', false);

            this.isSelectAll=false;

        }
    }


    onAfterDialogSizeChanged(event:Event) {
        if ( this.DataTable) {
            this.DataTable.columns.adjust().draw();
        }
    }

    ngOnDestroy() {
       // this.notifySomethingHappened();
        this.DataTable
            .search( '' )
            .columns().search( '' )
            .draw();
        this.DataTable.destroy();
        this.rectangles=[];
        this.circles=[];
    }


    Start()
    {
        if(this.currentAction==globalVariables.Message_Type.PushNotificationToProvider)
        {
            this.StartSendNotificationsToProvider();
        } 
        else if(this.currentAction==globalVariables.Message_Type.AudioFile || this.currentAction==globalVariables.Message_Type.AudioFileForcedPlay ||this.currentAction==globalVariables.Message_Type.VideoFile|| this.currentAction==globalVariables.Message_Type.VideoForcedPlay|| this.currentAction==globalVariables.Message_Type.SendFile||  this.currentAction==globalVariables.Message_Type.SendFileForcedOpen||  this.currentAction==globalVariables.Message_Type.InstallApplication ||  this.currentAction==globalVariables.Message_Type.InstallApplicationSilently ||  this.currentAction==globalVariables.Message_Type.UpdateApplication ||  this.currentAction==globalVariables.Message_Type.UninstallApplicationSilently)
        {
            this.sendFile();
            return;
        }

        else
        {
            this.sendAction();
        }
    }

    checkTitle()
    {
        if(!this.title )
        {
            globalVariables.alert("lease fill title field","Error")

            return false;
        }
        else
        {
            return true;
        }
    }
    checkMessage()
    {
        if(!this.message )
        {
            globalVariables.alert("lease fill message field","Error")
            return;
        }
        else
        {
            return true;
        }
    }
    checkToast()
    {
        if(!this.toast )
        {
            globalVariables.alert("lease fill toast field","Error")

            return false;
        }
        else
        {
            return true;
        }
    }
    StartSendNotificationsToProvider()
    {
       if( !this.checkTitle())
       {
           return;
       }
        if( !this.checkMessage())
        {
            return;
        }


        var rows = this.DataTable.rows({ 'search': 'applied' });
        var that=this;
        var temp_count=0;
        rows.eq(0).each(function (index) {
        var row =  that.DataTable.row(index);
            var row_node =  that.DataTable.row(index).node();

            jQuery(row_node).find( 'input[type="checkbox"]').each(function () {
                if (this.checked){
                    temp_count++;

                    that.sendPushNotification( that.getActionBody(that.currentAction,row.data())).subscribe( (data:any) => {
                        if(data.error_or_ok==1) {
                            that.DataTable.cell(row, 1).data("OK").draw();
                        }
                        else
                        {
                            that.DataTable.cell(row, 1).data("Failed: " + data.firest_error_when_sent_to_provider_or_tcp_sending_error).draw();
                        }
                        },
                        (err:any)  => {
                            that.DataTable.cell(row, 1).data("Failed: "+err.message).draw();
                        }
                    );
                    that.DataTable.cell(row, 1).data("Pinding").draw();

                }
            });


    }) ;
        if(temp_count<=0)
        {
            globalVariables.alert("No device selected.","Error")

            return;
        }


    }
check_fields()
{
    if(this.currentAction==globalVariables.Message_Type.DirectPushNotification || this.currentAction==globalVariables.Message_Type.Alert) {
        if (!this.checkTitle()) {
            return false;
        }
    }
    if(this.currentAction==globalVariables.Message_Type.DirectPushNotification || this.currentAction==globalVariables.Message_Type.Alert   ) {
        if (!this.checkMessage()) {
            return false;
        }
    }

    if(this.currentAction==globalVariables.Message_Type.Toast)
    {
        if (!this.checkToast()) {
            return false;
        }

    }


    return true;
}




    sendAction()
    {
    if(!this.check_fields())
    {
        return;
    }

        var rows = this.DataTable.rows({ 'search': 'applied' });
        var that=this;
        var temp_count=0;
        rows.eq(0).each(function (index) {
            var row = that.DataTable.row(index);
            var row_node =  that.DataTable.row(index).node();

            jQuery(row_node).find( 'input[type="checkbox"]').each(function () {
                if (this.checked){
                    temp_count++;

                        that.tcp_sender( that.getActionBody(that.currentAction,row.data())).subscribe( (data:any) => {
                                if(data.error_or_ok==1) {
                                    that.DataTable.cell(row, 1).data("OK").draw();
                                }
                                else
                                {
                                    that.DataTable.cell(row, 1).data("Failed: " +  data.firest_error_when_sent_to_provider_or_tcp_sending_error).draw();
                                }
                            },
                            (err:any)  => {
                                that.DataTable.cell(row, 1).data("Failed: "+err.message).draw(); }
                        );


                    that.DataTable.cell(row, 1).data("Pinding").draw();

                }
            });


        }) ;
        if(temp_count<=0)
        {
            globalVariables.alert("No device selected.","Error")

            return;
        }
    }

    sendFile()
    {
        if(this.audioCommands)
        {
            if(this.audioCommands.recording)
            {
                globalVariables.alert("Please stop recording first.","Error")
                return
            }
        }


        else if(this.currentAction==globalVariables.Message_Type.AudioFile || this.currentAction==globalVariables.Message_Type.AudioFileForcedPlay ||this.currentAction==globalVariables.Message_Type.VideoFile|| this.currentAction==globalVariables.Message_Type.VideoForcedPlay|| this.currentAction==globalVariables.Message_Type.SendFile||  this.currentAction==globalVariables.Message_Type.SendFileForcedOpen) {
           if(this.fileToUpload ==null &&  this.audioCommands.blob==null)
           {
               globalVariables.alert("No file or recorded voice","Error")
               return
           }

        }
        if(this.audioCommands) {
            if (this.audioCommands.blob) {
                this.fileToUpload = this.audioCommands.blob;
                this.fileToUpload.name = encodeURIComponent('audio_recording_' + new Date().getTime() + '.wav');
            }
        }

        var checkedDevicesInfo:Array<any>=this.getCheckedDevicesInfo();
        if(checkedDevicesInfo.length<=0)
        {
            globalVariables.alert("No device selected.","Error");
            return;
        }

        var formData: any = new FormData();

        formData.append("uploads[]", this.fileToUpload, this.fileToUpload.name);
        formData.append('checkedDevicesInfo',JSON.stringify( checkedDevicesInfo));
        formData.append("action", this.currentAction);
        this.send_files( formData)
        /////////////////////////////////////////
        // var that=this;
        // var reader = new FileReader();
        // reader.onload = function(){
        //     var binaryString = this.result;
        //   var file_binary = new  Int8Array(binaryString)
        //     //JSON.stringify(xx)
        //     globalVariables.ClientSocket.emit("action":that.currentAction,"file",{checkedDevicesInfo:checkedDevicesInfo,file:file_binary} );
        //
        // }
        // reader.readAsArrayBuffer(this.fileToUpload);


        ////////////////////////////////////////////////////////
//not work cos big size
        // this.tcp_send_filex({checkedDevicesInfo:checkedDevicesInfo,file:this.fileByteArrayToUpload}).subscribe( (data:any) => {
        //         globalVariables.alert("File uploaded successfully","Success");
        //     },
        //     (err:any)  => {
        //         globalVariables.alert(err.message,"Error");
        //     }
        // );
    }
    getCheckedDevicesInfo():any
    {
        if(!this.check_fields())
        {
            return;
        }

        var that=this;
        var rows = that.DataTable.rows({ 'search': 'applied' });
        var arrayOfDevicesInfo=[];
        rows.eq(0).each(function (index) {
            var row =  that.DataTable.row(index);
            var row_node =  that.DataTable.row(index).node();

            jQuery(row_node).find( 'input[type="checkbox"]').each(function () {
                if (this.checked){
                    arrayOfDevicesInfo.push( row.data());
                    that.DataTable.cell(row, 1).data("OK").draw();
                }
            });
        }) ;

return arrayOfDevicesInfo;

    }



    getActionBody(action,deviceData):any
    {
       if( action==globalVariables.Message_Type.GetLocation)
       {
           return {deviceInfo:deviceData ,action:globalVariables.Message_Type.GetLocation}
       }
        if(action== globalVariables.Message_Type.DirectPushNotification)
        {
            return {deviceInfo:deviceData,message:this.message,title:this.title,action:this.currentAction}
        }

        else if(action==globalVariables.Message_Type.Alert)
        {
            return {deviceInfo:deviceData,message:this.message,title:this.title,action:this.currentAction}

        }
        else if(action==globalVariables.Message_Type.PushNotificationToProvider)
        {
            return {deviceInfo:deviceData,message:this.message,title:this.title,action:this.currentAction}

        }
        else if(action==globalVariables.Message_Type.Toast)
        {
            return {deviceInfo:deviceData,message:this.toast,action:this.currentAction}

        }
        else if( this.currentAction==globalVariables.Message_Type.InstallApplication ||this.currentAction==globalVariables.Message_Type.InstallApplicationSilently||this.currentAction==globalVariables.Message_Type.CloseApplication||this.currentAction==globalVariables.Message_Type.CloseApplicationForced||this.currentAction==globalVariables.Message_Type.OpenApplication||this.currentAction==globalVariables.Message_Type.OpenApplicationForced
            || this.currentAction==globalVariables.Message_Type.UninstallApplication||this.currentAction==globalVariables.Message_Type.UninstallApplicationSilently||this.currentAction==globalVariables.Message_Type.UpdateApplication||this.currentAction==globalVariables.Message_Type.UpdateApplicationSilently)
        {
            return {deviceInfo:deviceData,bundleID:this.bundleID,action:this.currentAction}

        }

        else if(this.currentAction==globalVariables.Message_Type.ShutdownDevice||this.currentAction==globalVariables.Message_Type.ShutdownDeviceForced||this.currentAction==globalVariables.Message_Type.RestartDevice||this.currentAction==globalVariables.Message_Type.RestartDeviceForced)
        {
            return {deviceInfo:deviceData,action:this.currentAction}

        }
        else if(this.currentAction==globalVariables.Message_Type.GetContacts)
        {
            return {deviceInfo:deviceData,action:this.currentAction}

        }
        // else if(action==globalVariables.Message_Type.AudioFile || action==globalVariables.Message_Type.AudioFileForcedPlay )
        // {
        //     var file_data = jQuery("#input_file").prop("files")[0];
        //     return  {deviceInfo:deviceData,message:JSON.stringify(file_data),action:this.currentAction}
        //     // var file_data = ;   // Getting the properties of file from file field
        //     // var form_data = new FormData();                  // Creating object of FormData class
        //     // form_data.append("file", file_data)              // Appending parameter named file with properties of file_field to form_data
        //     //
        // }

    }



    filter_by_location()
    {
        var self = this;
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
            'myview'
        ).then((the_instance_of_CustMap:CustMap) => {
            self.addListener(the_instance_of_CustMap);
            the_instance_of_CustMap.addListener(self);
         //   the_instance_of_CustMap.addListener(self);
        });

        var rows = this.DataTable.rows({ 'search': 'applied' });
        var that=this;
        var temp_count=0;
        rows.eq(0).each(function (index) {
            var row =  that.DataTable.row(index);
            var row_node =  that.DataTable.row(index).node();

                    that.tcp_sender( that.getActionBody(globalVariables.Message_Type.GetLocation,row.data())).subscribe( (data:any) => {
                            if(data.error_or_ok==1) {
                                that.DataTable.cell(row, 1).data("OK").draw();
                            }
                            else
                            {
                                that.DataTable.cell(row, 1).data("Failed: " +  data.firest_error_when_sent_to_provider_or_tcp_sending_error).draw();
                            }
                        },
                        (err:any)  => {
                            that.DataTable.cell(row, 1).data("Failed: "+err.message).draw();
                        }
                    );
                    that.DataTable.cell(row, 1).data("Pinding").draw();

        }) ;



    }



    tack_shapes(rectangles:any, circles:any) {

this.rectangles=rectangles;
        this.circles=circles;
        var that = this;
        jQuery.fn.dataTable.ext.search.push(
            function (settings, data, dataIndex) {
                if(that.rectangles.length<=0 && that.circles.length<=0)
                {
                    return true;
                }
                try {
                    var lat_long_id:any=JSON.parse( that.devices[dataIndex][that.DataTable.columns().nodes().length-1]);
                }
                catch(ex)
                {
                    return false;
                }

                if ("#" + settings.nTable.getAttribute('id') == that.table_dom_id) {
                    if (that.devices.length > 0) {
                      //  data[1]

                        var myLatlng = new google.maps.LatLng(parseFloat(lat_long_id.latitude), parseFloat(lat_long_id.longitude));
                        for (var i=0; i < rectangles.length; i++)
                        {
                            var myLatlngx = new google.maps.LatLng(30.05519,  30.95801);
console.log(myLatlngx);
                            var xx= that.rectangles[i].getBounds().contains(myLatlng)

                             if( that.rectangles[i].getBounds().contains(myLatlng))
                             {
                                 return true;
                             }
                        }

                        for (var i=0; i <  that.circles.length; i++)
                        {
                            if( that.circles[i].getBounds().contains(myLatlng))
                            {
                                return true;
                            }
                        }
                        return false;
                    }
                    else {
                        return false;
                    }
                    //   return parseInt(data[1]) > 5 ? true : false;
                }
                else {
                    return false;
                }

               // this.DataTable.draw();
            }
        );
        this.DataTable.draw();

    }

    listeners:Array<ISendActionListener>=Array<ISendActionListener>() ;

    addListener(listener:ISendActionListener ) {
        this.listeners.push(listener);
    }



    notify_new_customer_info(customer_map_info) {
        for (var i = 0; i < this.listeners.length; i++) {
            this.listeners[i].tack_new_customer_map_info(customer_map_info);
        }

    }

    ////////////////////////////////////////////////////////////////////////////////////


    fileChangeEvent(fileInput: any){
       this.fileToUpload= fileInput.target.files[0];
    }

    send_files(formData) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", globalVariables.baseUrl+"tcp_sender/upload", true);
            xhr.send(formData);
        });


    }


    @Post("pushNotificationServerFrontEnd/sendPushNotification")
    public sendPushNotification(@BodyAsIs device:any): Observable <any>{ return null; };


    @Post("SocketSender")
    public SocketSender(@BodyAsIs anything:any): Observable <any>{ return null; };

    @Post("tcp_sender")
    public tcp_sender(@BodyAsIs anything:any): Observable <any>{ return null; };

    @Post("tcp_sender/upload")
    public tcp_send_filex(@BodyAsIs anything:any): Observable <any>{ return null; };

}





export interface ISendActionListener {
    tack_new_customer_map_info(customer_map_info:any);
}
