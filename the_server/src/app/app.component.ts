/**
 * Created by bahgat.mashaly on 10/1/16.
 */

import {Config , MenuController} from 'ionic-angular';

import {AfterViewInit,    ViewChild, ViewContainerRef} from '@angular/core';

//import {TutorialPage_test_component} from './moduls/test/tutorial_test';

import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import {Component} from "@angular/core";
import {LoginPage} from "./moduls/login/login";
import {globalVariables} from "./shared/others_servicesAndStatic/globalVariables";

import {   App, AlertController, LoadingController,  ModalController} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {Network} from "@ionic-native/network";
import {TranslateService} from "ng2-translate";


// require("./shared/myLib/logger")

@Component({
    templateUrl: './app.html',
})


export class  MyApp implements  AfterViewInit{


    rootPage;
    pages;
    @ViewChild('mainContainer', {read: ViewContainerRef}) mainContainer;






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
        storage:Storage,
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

        this.rootPage = LoginPage ;//LoginPage;

        this.pages = [

            { title: 'Login', component: LoginPage, icon: 'log-in' },

            { title: 'Logout', component: LoginPage, icon: 'log-out' },
        ];


    }

    ngAfterViewInit():any {
        globalVariables.mainContainer=this.mainContainer
    }

    openPage(page) {
        // find the navCtrl component and set what the root page should be
        // reset the navCtrl to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario

       // let navCtrl = this.app.getComponent('navCtrl') ;
        globalVariables.navCtrl.setRoot(page.component).then(() => {
            // wait for the root page to be completely loaded
            // then close the menuCtrl
           // this.navCtrl.getComponent('leftMenu').close();
            globalVariables.menuCtrl.close();
            globalVariables.mainContainer=this.mainContainer
        });
    }






}




