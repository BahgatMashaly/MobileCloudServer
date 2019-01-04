/**
 * Created by bahgat.mashaly on 10/1/16.
 */
import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {mainPage} from "../app/moduls/mainPage/mainPage";
import {globalVariables} from "./shared/others_servicesAndStatic/globalVariables";
import {LibraryGlobalVariablesInit} from "./libraries/Lib";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";

import {Network} from "@ionic-native/network";
import {BrowserModule} from "@angular/platform-browser";
import {IonicStorageModule} from "@ionic/storage";
import {Push} from "@ionic-native/push";
import {Headers, Http, HttpModule} from "@angular/http";

import './shared/myLib/logger'
import {TranslateHttpLoader} from "@ngx-translate/http-loader";


export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


LibraryGlobalVariablesInit.setConfig(
    {
        appHeaders: new Headers({"Content-Type": "application/json"}),
        baseUrl: globalVariables.baseUrl,
        preFunction: globalVariables.preFunction,
        postFunction: globalVariables.postFunction
    });


@NgModule({
    declarations: [
        MyApp,

        mainPage,



         
        // ContactPage,
        // HomePage,
        // TabsPage
    ],
        imports: [
            /////////////////////////////////////
            BrowserModule,
            HttpModule,
            IonicStorageModule.forRoot(),
            //  IonicModule.forRoot(MyApp),
            IonicModule.forRoot(MyApp,{
                backButtonText: '',
            }),

            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: (createTranslateLoader),
                    deps: [Http]
                }
            }),
        ],
   
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        mainPage,


    ],
    providers: [  BrowserModule,

        Network,
        Push

        // {provide: ErrorHandler, useClass: customExceptionHandler},



    ],

})
export class AppModule {}