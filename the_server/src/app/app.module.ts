/**
 * Created by bahgat.mashaly on 10/1/16.
 */
import {NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {IonicApp} from 'ionic-angular';
 import { MyApp } from './app.component';
import {customExceptionHandler} from "./shared/myLib/customExceptionHandler";
import {MyBootstrapModal} from "./shared/myLib/BootstrapModal/BootstrapModal";

import {ModalBackdrop} from "./shared/myLib/BootstrapModal/ModalBackdrop";
import {BootstrapModalContainer} from "./shared/myLib/BootstrapModal/BootstrapModalContainer";
import {IonicModule} from "ionic-angular/module";
import {ShowError} from "./shared/myLib/show-error.component";
import {Main} from "./moduls/Main/Main";
import {LoginPage} from "./moduls/login/login";
import {PatternLock} from "./moduls/PatternLock/PatternLock";
import {Projects} from "./moduls/Projects/Projects";
import {NewEditProject} from './moduls/Projects/newEditProject'
import {project_customer_customers_info_urls} from "./moduls/project_customer_customers_info_urls/project_customer_customers_info_urls";
import {CustMap} from "./moduls/Map/Map";
import {sendActionToClients} from "./moduls/sendActionToClients/sendActionToClients";
  import { BrowserModule } from '@angular/platform-browser';
import {Http, HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms/src/form_providers";
import {LibraryGlobalVariablesInit} from "../libraries/Lib";
import {globalVariables} from "./shared/others_servicesAndStatic/globalVariables";
import {Network} from "@ionic-native/network";
import { IonicStorageModule } from '@ionic/storage'
import {TranslateStaticLoader, TranslateModule, TranslateLoader} from "ng2-translate";

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

LibraryGlobalVariablesInit.setConfig(
    {
        appHeaders:new Headers({"Content-Type":"application/json"}),
        baseUrl:globalVariables.baseUrl,
        preFunction:globalVariables.preFunction,
        postFunction:globalVariables.postFunction
    });
@NgModule({
    declarations: [
        MyApp,

        LoginPage,
        ShowError,

        //
          Main,
          NewEditProject,
         PatternLock,
         Projects,
        sendActionToClients,

        ModalBackdrop,
          BootstrapModalContainer,
          project_customer_customers_info_urls,
          CustMap
    ],schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    imports: [HttpModule,
        BrowserModule,
        IonicModule.forRoot(MyApp,  {
            // menuType: 'overlay',
            platforms: {
                ios: {
                    menuType: 'push',
                }
            }
            // mode: 'ios' ,

            // modalLeave:'modal-slide-in',
            // modalEnter :'modal-slide-out'
        }),
        IonicStorageModule.forRoot(),
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        }),
    ],
    
   
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        LoginPage,
        ShowError,
          Main,
         NewEditProject,
          PatternLock,
        Projects,
           sendActionToClients,
        ModalBackdrop,
         BootstrapModalContainer,
        project_customer_customers_info_urls,
         CustMap

    ],

    providers: [  BrowserModule,
        MyBootstrapModal,
        Network,

        // {provide: ErrorHandler, useClass: customExceptionHandler},



    ],

})
export class AppModule {}