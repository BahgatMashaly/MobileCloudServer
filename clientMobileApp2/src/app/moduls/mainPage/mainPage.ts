/**
 * Created by Bahgat on 1/31/16.
 */
import {AfterViewInit, Component} from "@angular/core";
import {MenuController} from 'ionic-angular';

import {globalVariables} from "../../shared/others_servicesAndStatic/globalVariables";

import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {Get, Query} from "../../libraries/Lib";
// import 'rxjs/operator/delay';
// import 'rxjs/operator/mergeMap';
// import 'rxjs/operator/switchMap';

@Component({
selector:'main-page',
    templateUrl:  './mainPage.html'
})
export class mainPage   {


   // @ViewChild(Nav) nav: Nav;
    constructor(  public http: Http,private menu:MenuController  ) {
     //   this.app.getComponent('leftMenu').swipeEnable(false,"leftMenu");
        this.menu.swipeEnable(false);
console.log("kkkk")
    }

    ionViewDidEnter() {
        //  setTimeout(() => {
        try {
            cordova.exec(null, null, "SplashScreen", "hide", [])}
        catch (ex)
        {
            console.log(ex)}

        try {
            globalVariables.dismissProgressDialog();
        }
        catch (ex)
        {

        }
        // },0  );
        //try {  cordova.exec(null, null, "SplashScreen", "hide", [])}
        //catch (ex)
        //{ console.log(ex)}
    }


    changeCustomerNumber()
    {

        globalVariables.customerID="12";
    }


    testNotification()
    {
        cordova.exec( null, null , 'MyAllPluginsClass', 'MyAllPluginsMethod', ['pushNotification',"titlexxx","bodyxxx"])

    }



 testAlert()
 {
     globalVariables.alert("message","title")

 }
 testToast()
 {
     globalVariables.showToast("test toastcccc");

 }
    @Get("devicesServerFrontEnd/getAppList")
    public getAppList(): Observable <any>{ return null; };



    @Get("services/rest/subscription/renewal/customer/296931")
    public testSSPx(@Query("requestType")requestType,@Query("userName")userName,@Query("originID")originID): Observable <any>{ return null; };
}
