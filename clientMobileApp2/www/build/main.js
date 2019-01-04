webpackJsonp([0],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Path */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Query; });
/* unused harmony export Body */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyAsIs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LibraryGlobalVariablesInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Post; });
/* unused harmony export Put */
/* unused harmony export Delete */
/* unused harmony export TimeOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_timeout__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_dummyResponse__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_others_servicesAndStatic_globalVariables__ = __webpack_require__(42);





var Path = paramBuilder("Path");
var Query = paramBuilder("Query");
var Body = paramBuilder("Body");
var BodyAsIs = paramBuilder("BodyAsIs")("BodyAsIs");
var LibraryGlobalVariablesInit = (function () {
    function LibraryGlobalVariablesInit() {
    }
    LibraryGlobalVariablesInit.setConfig = function (config) {
        if (config === void 0) { config = {}; }
        if (config['baseUrl']) {
            LibraryGlobalVariablesInit.baseUrl = config['baseUrl'];
        }
        if (config['appHeaders']) {
            LibraryGlobalVariablesInit.appHeaders = config['appHeaders'];
        }
        return LibraryGlobalVariablesInit;
    };
    return LibraryGlobalVariablesInit;
}());

LibraryGlobalVariablesInit.funcDummyResponse = __WEBPACK_IMPORTED_MODULE_3__shared_dummyResponse__["a" /* dummyResponse */].getDummyServiceResponse;
LibraryGlobalVariablesInit.http = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* Http */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["l" /* XHRBackend */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* BrowserXhr */](), new __WEBPACK_IMPORTED_MODULE_0__angular_http__["j" /* ResponseOptions */]({
    body: null,
    headers: (function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Headers */]();
        headers.append('Accept', 'application/json');
        return headers;
    })(),
    status: 200,
    statusText: "Ok",
    type: 2,
    url: null
}), new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* CookieXSRFStrategy */]()), new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* BaseRequestOptions */]());
var Get = methodBuilder(__WEBPACK_IMPORTED_MODULE_0__angular_http__["h" /* RequestMethod */].Get);
var Post = methodBuilder(__WEBPACK_IMPORTED_MODULE_0__angular_http__["h" /* RequestMethod */].Post);
var Put = methodBuilder(__WEBPACK_IMPORTED_MODULE_0__angular_http__["h" /* RequestMethod */].Put);
var Delete = methodBuilder(__WEBPACK_IMPORTED_MODULE_0__angular_http__["h" /* RequestMethod */].Delete);
function paramBuilder(paramName) {
    return function (key) {
        return function (targetClass, methodName, parameterIndex) {
            var metadataKey = methodName + "_" + paramName + "_parameters";
            var paramObj = {
                key: key,
                parameterIndex: parameterIndex
            };
            if (Array.isArray(targetClass[metadataKey])) {
                targetClass[metadataKey].push(paramObj); //the var converted to an array 3ady we haye3mel feha push
            }
            else {
                targetClass[metadataKey] = [paramObj]; //hena ba3mel set ba2olo el key da 7ot feh el object da
            }
        };
    };
}
function TimeOut(serviceTimeOut) {
    return function (target, propertyKey, descriptor) {
        descriptor.serviceTimeOut = serviceTimeOut;
        return descriptor;
    };
}
function methodBuilder(requestMethodNumber) {
    return function (url, disabePreFunction, disablePostFunction, customHeader) {
        if (disabePreFunction === void 0) { disabePreFunction = false; }
        if (disablePostFunction === void 0) { disablePostFunction = false; }
        return function (targetClass, methodName, descriptor) {
            var pPath = targetClass[methodName + "_Path_parameters"];
            var pQuery = targetClass[methodName + "_Query_parameters"];
            var pBody = targetClass[methodName + "_Body_parameters"];
            var pBodyAsIs = targetClass[methodName + "_BodyAsIs_parameters"];
            var pFile = targetClass[methodName + "_File_parameters"];
            descriptor.value = function () {
                //  if(LibraryGlobalVariablesInit.funcDummyResponse){
                //   return LibraryGlobalVariablesInit.funcDummyResponse(methodName,1000);
                // }
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var tempURL = url;
                if (pPath) {
                    tempURL = _substitute(tempURL, args, pPath);
                }
                var queryStringParams = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["k" /* URLSearchParams */]();
                if (pQuery) {
                    tempURL = tempURL + "?";
                    for (var i = 0; i < pQuery.length; i++) {
                        var key = pQuery[i].key;
                        var value = args[pQuery[i].parameterIndex];
                        // if(i > 0){
                        //   url = url +"&";
                        // }
                        // url = url +pQuery[i].key+"="+args[pQuery[i].parameterIndex];
                        queryStringParams.set(encodeURIComponent(key), encodeURIComponent(value));
                    }
                }
                if (pBody) {
                    var bodyJSON = {};
                    var bodyForm = "";
                    for (var i = 0; i < pBody.length; i++) {
                        var key = pBody[i].key;
                        var value = args[pBody[i].parameterIndex];
                        //below incase of being sent as an json
                        bodyJSON[key] = value;
                        //----------------------
                        ////below incase of being sent as an a key and value in case of 'Content-Type': 'application/x-www-form-urlencoded'
                        if (i > 0) {
                            bodyForm = bodyForm + "&";
                        }
                        bodyForm = bodyForm + encodeURIComponent(key) + "=" + encodeURIComponent(value);
                        //------------------------------------------------------------
                    }
                }
                var header_temp;
                if (customHeader) {
                    header_temp = customHeader;
                }
                else {
                    header_temp = LibraryGlobalVariablesInit.appHeaders;
                }
                var finalBody;
                var ContentType = header_temp.get('Content-Type');
                if (ContentType && ContentType.toString() == "application/x-www-form-urlencoded") {
                    finalBody = bodyForm;
                }
                else {
                    finalBody = JSON.stringify(bodyJSON);
                }
                if (pBodyAsIs) {
                    for (var obj1 in args[pBodyAsIs[0].parameterIndex]) {
                        if (args[pBodyAsIs[0].parameterIndex][obj1] === undefined) {
                            args[pBodyAsIs[0].parameterIndex][obj1] = null;
                        }
                    }
                    finalBody = args[pBodyAsIs[0].parameterIndex];
                }
                tempURL = LibraryGlobalVariablesInit.baseUrl + tempURL;
                var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* RequestOptions */]({
                    method: requestMethodNumber,
                    url: tempURL,
                    headers: header_temp,
                    body: finalBody,
                    search: queryStringParams //search is for URLSearchParams
                });
                console.log("before  data is = ");
                var req = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* Request */](options);
                if (!disabePreFunction) {
                    __WEBPACK_IMPORTED_MODULE_4__shared_others_servicesAndStatic_globalVariables__["a" /* globalVariables */].preFunction();
                }
                console.log("the request", req);
                var observable = LibraryGlobalVariablesInit.http.request(req);
                var timeOut = 65000;
                if (descriptor.serviceTimeOut) {
                    timeOut = descriptor.serviceTimeOut;
                }
                return observable.timeout(timeOut).map(function (res) {
                    console.log("the response:", res); //ToDo remove lib log
                    var data = res.json();
                    if (!disablePostFunction) {
                        __WEBPACK_IMPORTED_MODULE_4__shared_others_servicesAndStatic_globalVariables__["a" /* globalVariables */].postFunction();
                    }
                    return data;
                    //console.log("getPromotions data is = ", data);
                    //return JSON.parse(datax.text());
                }).catch(function (res_error) {
                    if (!disablePostFunction) {
                        __WEBPACK_IMPORTED_MODULE_4__shared_others_servicesAndStatic_globalVariables__["a" /* globalVariables */].postFunction();
                    }
                    try {
                        console.log("service error", res_error); //ToDo remove lib log
                    }
                    catch (ex) { }
                    try {
                        if (res_error.message) {
                            throw Error(res_error.message);
                        }
                        else {
                            throw res_error;
                        }
                    }
                    catch (e) {
                        throw e;
                    }
                });
            };
            return descriptor;
        };
    };
}
function _substitute(url, args, pPath) {
    for (var i = 0; i < pPath.length; i++) {
        url = url.replace("{" + pPath[i].key + "}", args[pPath[i].parameterIndex]);
    }
    return url;
}
//# sourceMappingURL=Lib.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_others_servicesAndStatic_globalVariables__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__libraries_Lib__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Created by Bahgat on 1/31/16.
 */







// import 'rxjs/operator/delay';
// import 'rxjs/operator/mergeMap';
// import 'rxjs/operator/switchMap';
var mainPage = (function () {
    // @ViewChild(Nav) nav: Nav;
    function mainPage(http, menu) {
        this.http = http;
        this.menu = menu;
        //   this.app.getComponent('leftMenu').swipeEnable(false,"leftMenu");
        this.menu.swipeEnable(false);
        console.log("kkkk");
    }
    mainPage.prototype.ionViewDidEnter = function () {
        //  setTimeout(() => {
        try {
            cordova.exec(null, null, "SplashScreen", "hide", []);
        }
        catch (ex) {
            console.log(ex);
        }
        try {
            __WEBPACK_IMPORTED_MODULE_2__shared_others_servicesAndStatic_globalVariables__["a" /* globalVariables */].dismissProgressDialog();
        }
        catch (ex) {
        }
        // },0  );
        //try {  cordova.exec(null, null, "SplashScreen", "hide", [])}
        //catch (ex)
        //{ console.log(ex)}
    };
    mainPage.prototype.changeCustomerNumber = function () {
        __WEBPACK_IMPORTED_MODULE_2__shared_others_servicesAndStatic_globalVariables__["a" /* globalVariables */].customerID = "12";
    };
    mainPage.prototype.testNotification = function () {
        cordova.exec(null, null, 'MyAllPluginsClass', 'MyAllPluginsMethod', ['pushNotification', "titlexxx", "bodyxxx"]);
    };
    mainPage.prototype.testAlert = function () {
        __WEBPACK_IMPORTED_MODULE_2__shared_others_servicesAndStatic_globalVariables__["a" /* globalVariables */].alert("message", "title");
    };
    mainPage.prototype.testToast = function () {
        __WEBPACK_IMPORTED_MODULE_2__shared_others_servicesAndStatic_globalVariables__["a" /* globalVariables */].showToast("test toastcccc");
    };
    mainPage.prototype.getAppList = function () { return null; };
    ;
    mainPage.prototype.testSSPx = function (requestType, userName, originID) { return null; };
    ;
    return mainPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__libraries_Lib__["b" /* Get */])("devicesServerFrontEnd/getAppList"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"])
], mainPage.prototype, "getAppList", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__libraries_Lib__["b" /* Get */])("services/rest/subscription/renewal/customer/296931"),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_6__libraries_Lib__["e" /* Query */])("requestType")), __param(1, Object(__WEBPACK_IMPORTED_MODULE_6__libraries_Lib__["e" /* Query */])("userName")), __param(2, Object(__WEBPACK_IMPORTED_MODULE_6__libraries_Lib__["e" /* Query */])("originID")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"])
], mainPage.prototype, "testSSPx", null);
mainPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'main-page',template:/*ion-inline-start:"/Volumes/MACData/programing/programing10/projects/MobileCloudServer/clientMobileApp2/src/app/moduls/mainPage/mainPage.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Home</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content  >\n\n\n\n\n    <button  ion-button  round (click)="testAlert()" style="width: 80%;">Test Alert</button>\n    <button  ion-button  round (click)="testToast()" style="width: 80%;">Test  Toast</button>\n\n\n    <button  ion-button  round (click)="testNotification()" style="width: 80%;">Test Notification </button>\n\n    <button  ion-button  round (click)="changeCustomerNumber()" style="width: 80%;">Change Customer Number </button>\n\n    <button ion-button round style="width: 80%;">test patternmmmmmmmmmmmmmmmmmmmmm</button>\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Volumes/MACData/programing/programing10/projects/MobileCloudServer/clientMobileApp2/src/app/moduls/mainPage/mainPage.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
], mainPage);

//# sourceMappingURL=mainPage.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_21" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_moduls_mainPage_mainPage__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_others_servicesAndStatic_globalVariables__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__libraries_Lib__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_push__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_myLib_logger__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_myLib_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__shared_myLib_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngx_translate_http_loader__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by bahgat.mashaly on 10/1/16.
 */














function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_13__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
__WEBPACK_IMPORTED_MODULE_5__libraries_Lib__["c" /* LibraryGlobalVariablesInit */].setConfig({
    appHeaders: new __WEBPACK_IMPORTED_MODULE_11__angular_http__["d" /* Headers */]({ "Content-Type": "application/json" }),
    baseUrl: __WEBPACK_IMPORTED_MODULE_4__shared_others_servicesAndStatic_globalVariables__["a" /* globalVariables */].baseUrl,
    preFunction: __WEBPACK_IMPORTED_MODULE_4__shared_others_servicesAndStatic_globalVariables__["a" /* globalVariables */].preFunction,
    postFunction: __WEBPACK_IMPORTED_MODULE_4__shared_others_servicesAndStatic_globalVariables__["a" /* globalVariables */].postFunction
});
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_3__app_moduls_mainPage_mainPage__["a" /* mainPage */],
        ],
        imports: [
            /////////////////////////////////////
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["f" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            //  IonicModule.forRoot(MyApp),
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {
                backButtonText: '',
            }, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_11__angular_http__["e" /* Http */]]
                }
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_3__app_moduls_mainPage_mainPage__["a" /* mainPage */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_push__["a" /* Push */]
            // {provide: ErrorHandler, useClass: customExceptionHandler},
        ],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__moduls_mainPage_mainPage__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_others_servicesAndStatic_globalVariables__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__libraries_Lib__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_push__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Created by bahgat.mashaly on 10/1/16.
 */










//import {TutorialPage_test_component} from './moduls/test/tutorial_test';
// require("./shared/myLib/logger")
var MyApp = (function () {
    function MyApp(network, platform, menu, modalCtrl, translate, app, alertCtrl, loadingCtrl, config, storage, push) {
        this.network = network;
        this.platform = platform;
        this.menu = menu;
        this.translate = translate;
        this.app = app;
        this.storage = storage;
        this.push = push;
        __WEBPACK_IMPORTED_MODULE_3__shared_others_servicesAndStatic_globalVariables__["a" /* globalVariables */].modalCtrl = modalCtrl;
        __WEBPACK_IMPORTED_MODULE_3__shared_others_servicesAndStatic_globalVariables__["a" /* globalVariables */].storage = storage;
        __WEBPACK_IMPORTED_MODULE_3__shared_others_servicesAndStatic_globalVariables__["a" /* globalVariables */].alertCtrl = alertCtrl;
        __WEBPACK_IMPORTED_MODULE_3__shared_others_servicesAndStatic_globalVariables__["a" /* globalVariables */].loadingCtrl = loadingCtrl;
        __WEBPACK_IMPORTED_MODULE_3__shared_others_servicesAndStatic_globalVariables__["a" /* globalVariables */].menu = menu;
        __WEBPACK_IMPORTED_MODULE_3__shared_others_servicesAndStatic_globalVariables__["a" /* globalVariables */].platform = this.platform;
        __WEBPACK_IMPORTED_MODULE_3__shared_others_servicesAndStatic_globalVariables__["a" /* globalVariables */].translate = this.translate;
        __WEBPACK_IMPORTED_MODULE_3__shared_others_servicesAndStatic_globalVariables__["a" /* globalVariables */].config = config;
        __WEBPACK_IMPORTED_MODULE_3__shared_others_servicesAndStatic_globalVariables__["a" /* globalVariables */].network = network;
        __WEBPACK_IMPORTED_MODULE_3__shared_others_servicesAndStatic_globalVariables__["a" /* globalVariables */].translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        __WEBPACK_IMPORTED_MODULE_3__shared_others_servicesAndStatic_globalVariables__["a" /* globalVariables */].translate.use('en');
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__moduls_mainPage_mainPage__["a" /* mainPage */];
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_2__moduls_mainPage_mainPage__["a" /* mainPage */], icon: 'calendar' },
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_2__moduls_mainPage_mainPage__["a" /* mainPage */], icon: 'log-in' },
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_2__moduls_mainPage_mainPage__["a" /* mainPage */], icon: 'person-add' },
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_2__moduls_mainPage_mainPage__["a" /* mainPage */], icon: 'log-out' },
        ];
        this.initializeApp();
    }
    MyApp.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_3__shared_others_servicesAndStatic_globalVariables__["a" /* globalVariables */].navCtrl = this.app.getRootNav();
    };
    MyApp.prototype.openPage = function (page) {
        // this.app.getComponent('leftMenu').close();
        // this.app.getComponent('leftMenu').swipeEnable(false, "leftMenu");
        this.menu.close();
        this.menu.swipeEnable(false);
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function (readySource) {
            __WEBPACK_IMPORTED_MODULE_3__shared_others_servicesAndStatic_globalVariables__["a" /* globalVariables */].storage = _this.storage;
            try {
                if (!cordova) {
                    console.log("xxxxxxxxx");
                    return;
                }
                console.log("yyyyyyyyyy");
                console.log(readySource);
            }
            catch (ex) {
                console.log("zzzzzzzzzzzzz");
                console.log(ex);
                return;
            }
            cordova.exec(null, null, 'MyAllPluginsClass', 'MyAllPluginsMethod', ['startService']);
            // console.log('Platform ready');
            // ----------------- Disable native back button--------------------
            document.addEventListener('backbutton', function () {
                if (!__WEBPACK_IMPORTED_MODULE_3__shared_others_servicesAndStatic_globalVariables__["a" /* globalVariables */].navCtrl.canGoBack()) {
                    // return  navigator.app.exitApp()
                    _this.exitApplication();
                    return false;
                }
                __WEBPACK_IMPORTED_MODULE_3__shared_others_servicesAndStatic_globalVariables__["a" /* globalVariables */].navCtrl.pop();
            }, false);
            /////////////////////////////////////////////////////
            //   push  notification
            if (_this.platform.is('cordova')) {
                _this.pushNotification();
                if (_this.platform.is('ios')) {
                    _this.iosVoipPush();
                }
            }
            ///////////////////////////////////////////////////////////////////////
            _this.storage.get('customer_id').then(function (customer_id) {
                __WEBPACK_IMPORTED_MODULE_3__shared_others_servicesAndStatic_globalVariables__["a" /* globalVariables */].customerID = customer_id;
            });
        });
    };
    MyApp.prototype.pushNotification = function () {
        var _this = this;
        var options = {
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
        var pushObject = this.push.init(options);
        pushObject.on('registration').subscribe(function (registration) {
            console.log('Device registered', registration);
            _this.storage.get('devicePushNotificationID').then(function (devicePushNotificationID) {
                _this.storage.get('OldCustomerID').then(function (OldCustomerID) {
                    _this.storage.get('customer_id').then(function (customer_id) {
                        if (registration.registrationId != devicePushNotificationID || OldCustomerID != customer_id) {
                            var that = _this;
                            cordova.exec(function succ(DeviceInfo) {
                                var _this = this;
                                //  alert(DeviceInfo);
                                try {
                                    var json_to_post_for_push_notification = JSON.parse(DeviceInfo);
                                }
                                catch (ex) {
                                    console.error("error when parse json when sent info for push notification : " + ex.message);
                                    console.error(DeviceInfo);
                                }
                                json_to_post_for_push_notification.customer_id = customer_id; /////////
                                json_to_post_for_push_notification.device_push_notifcation_registration_id = registration.registrationId;
                                that.post(json_to_post_for_push_notification).subscribe(function (datax) {
                                    _this.storage.set('OldCustomerID', customer_id);
                                    _this.storage.set('devicePushNotificationID', registration.registrationId);
                                    console.log("successfully sent Push Notifications ID to server  ");
                                }, function (err) {
                                    console.log("error in Sent Push Notifications ID to server ");
                                });
                            }, function fail(error) {
                                console.log(error);
                            }, 'MyAllPluginsClass', 'MyAllPluginsMethod', ['getDeviceInfo']);
                        }
                    });
                });
            });
            console.log("javascript :" + registration.registrationId);
        });
        pushObject.on('notification').subscribe(function (notification) {
            console.log(notification.message);
            console.log(notification.title);
            console.log(notification.count);
            console.log(notification.sound);
            console.log(notification.image);
            console.log(notification.additionalData);
            __WEBPACK_IMPORTED_MODULE_3__shared_others_servicesAndStatic_globalVariables__["a" /* globalVariables */].alert(notification.message);
        });
        pushObject.on('error').subscribe(function (err) { return console.error(err.message); });
    };
    MyApp.prototype.iosVoipPush = function () {
        var thatx = this;
        cordova.exec(function succ(data_voipRegistrationId) {
            var _this = this;
            this.storage.get('deviceVoipPushNotificationID').then(function (deviceVoipPushNotificationID) {
                _this.storage.get('OldCustomerID').then(function (OldCustomerID) {
                    _this.storage.get('customer_id').then(function (customer_id) {
                        if (data_voipRegistrationId != deviceVoipPushNotificationID || OldCustomerID != customer_id) {
                            cordova.exec(function succ(DeviceInfo) {
                                var _this = this;
                                //  alert(DeviceInfo);
                                try {
                                    var json_to_post_for_voip_push_notification = JSON.parse(DeviceInfo);
                                }
                                catch (ex) {
                                    console.error("error when parse json when sent info for push notification : " + ex.message);
                                    console.error(DeviceInfo);
                                }
                                json_to_post_for_voip_push_notification.customer_id = customer_id; /////////
                                json_to_post_for_voip_push_notification.device_voip_push_notifcation_registration_id = data_voipRegistrationId;
                                thatx.postVoipPushNotificatonRegistrationInfo(json_to_post_for_voip_push_notification).subscribe(function (datax) {
                                    _this.storage.set('OldCustomerID', customer_id);
                                    _this.storage.set('deviceVoipPushNotificationID', data_voipRegistrationId);
                                    console.log("successfully sent Push Notifications ID to server  ");
                                }, function (err) {
                                    alert("error in Sent Voip Push Notifications ID to server ");
                                    console.log("error in Sent Voip Push Notifications ID to server ");
                                });
                            }, function fail(error) {
                                console.log(error);
                            }, 'MyAllPluginsClass', 'MyAllPluginsMethod', ['getDeviceInfo']);
                        }
                    });
                });
            });
            console.log("javascript :" + data_voipRegistrationId);
        }, function fail(result) {
            // alert("Error" + result);
        }, 'MyAllPluginsClass', 'MyAllPluginsMethod', ['voipPushRequestID']);
    };
    MyApp.prototype.exitApplication = function () {
        cordova.exec(function succ(result) {
            // alert(result);
        }, function fail(result) {
            //  alert("Error" + result);
        }, 'MyAllPluginsClass', 'MyAllPluginsMethod', ['moveTaskToBack']);
    };
    MyApp.prototype.post = function (pushNotificatonRegistrationInfo) { return null; };
    ;
    MyApp.prototype.postVoipPushNotificatonRegistrationInfo = function (voipPushNotificatonRegistrationInfo) { return null; };
    ;
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__libraries_Lib__["d" /* Post */])("pushNotificatonRegistrationInfo"),
    __param(0, __WEBPACK_IMPORTED_MODULE_6__libraries_Lib__["a" /* BodyAsIs */]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"])
], MyApp.prototype, "post", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__libraries_Lib__["d" /* Post */])("pushNotificatonRegistrationInfo/voipPushNotificatonRegistrationInfo"),
    __param(0, __WEBPACK_IMPORTED_MODULE_6__libraries_Lib__["a" /* BodyAsIs */]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"])
], MyApp.prototype, "postVoipPushNotificatonRegistrationInfo", null);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Volumes/MACData/programing/programing10/projects/MobileCloudServer/clientMobileApp2/src/app/app.html"*/'<ion-menu [content]="content" >\n\n  <!--<ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>-->\n\n\n  <ion-content\n          class="menu-content">\n    <ion-list>\n      <ion-item>\n        <img  src="assets/img/tedata.png"\n                width="60%">\n\n\n      </ion-item>\n\n      <ion-item *ngFor="let p of pages"\n                (click)="openPage(p)">\n\n        {{p.title|translate}}\n\n        <ion-icon\n                name=\'{{p.icon}}\'\n                item-start\n                color="danger"></ion-icon>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<!-- main navigation -->\n<ion-nav id="nav" [root]="rootPage" #content swipe-back-enabled="false"></ion-nav>\n\n\n<!-- where popups/actionsheets/modals are added -->\n\n'/*ion-inline-end:"/Volumes/MACData/programing/programing10/projects/MobileCloudServer/clientMobileApp2/src/app/app.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Config */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_push__["a" /* Push */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PREFS_ITEM; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__globalVariables__ = __webpack_require__(42);
/**
 * Created by bahgat.mashaly on 12/10/16.
 */

var PREFS_ITEM = (function () {
    function PREFS_ITEM() {
    }
    Object.defineProperty(PREFS_ITEM, "lang", {
        get: function () {
            return this._lang;
        },
        set: function (the_lang) {
            __WEBPACK_IMPORTED_MODULE_0__globalVariables__["a" /* globalVariables */].storage.set("lang", the_lang);
            // userInfoDto.selectedLanguage=the_lang;
            this._lang = the_lang;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PREFS_ITEM, "password", {
        get: function () {
            return this._password;
        },
        set: function (the_password) {
            __WEBPACK_IMPORTED_MODULE_0__globalVariables__["a" /* globalVariables */].storage.set("password", the_password);
            this._password = the_password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PREFS_ITEM, "userName", {
        get: function () {
            return this._userName;
        },
        set: function (the_userName) {
            __WEBPACK_IMPORTED_MODULE_0__globalVariables__["a" /* globalVariables */].storage.set("userName", the_userName);
            //userInfoDto.userName=the_userName;
            this._userName = the_userName;
        },
        enumerable: true,
        configurable: true
    });
    return PREFS_ITEM;
}());

//# sourceMappingURL=prefsItem.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dummyResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_delay__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_delay__);


/**
 * Created by bahgat.mashaly on 12/10/16.
 */
var dummyResponse = (function () {
    function dummyResponse() {
    }
    dummyResponse.getDummyServiceResponse = function (serviceName, delayTime) {
        // var serviceName:string;
        // try {
        //       console.log(arguments.callee);
        // }catch (err){
        //       var start= err.stack.toString().indexOf(".descriptor.value [as ")
        //       serviceName=  err.stack.toString().substring(start+22,err.stack.toString().indexOf("]",start+22))
        // }
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of(dummyResponse.callDummyService(serviceName)).delay(delayTime).map(function (res) {
            return res;
        });
    };
    dummyResponse.callDummyService = function (serviceName) {
        var res;
        if (serviceName == "login") {
            res = dummyResponse.login;
        }
        else if (serviceName == "getPromotions") {
            res = dummyResponse.getpromotions;
        }
        else if (serviceName == "getUserPoints") {
            res = {};
            res.loyaltyPoints = dummyResponse.getUserPoints.loyaltyPoints;
        }
        else if (serviceName == "getUserADSLUsage" || serviceName == "TypeError: 'caller', ") {
            res = dummyResponse.getUserADSLUsage;
        }
        else if (serviceName == "getUserADSLRemainingDays") {
            res = dummyResponse.getUserADSLRemainingDays;
        }
        else if (serviceName == "getSubscriptionInfo") {
            res = dummyResponse.getSubscriptionInfo;
        }
        else if (serviceName == "GetRenewalConfirmationViewModel") {
            // res = <IRenewalConfirmationViewModel>dummyResponse.GetRenewalConfirmationViewModel;
            res = dummyResponse.GetRenewalConfirmationViewModel;
        }
        else if (serviceName == "getBankURL") {
            res = dummyResponse.getBankURL;
        }
        else if (serviceName == "getOpenedTicketInfo_part1") {
            res = dummyResponse.getOpenedTicketInfo_part1;
        }
        else if (serviceName == "getOpenedTicketInfo_part2") {
            res = dummyResponse.getOpenedTicketInfo_part2;
        }
        else if (serviceName == "createTicket") {
            res = dummyResponse.createTicket;
        }
        else if (serviceName == "getTickets") {
            res = dummyResponse.getTickets;
        }
        else if (serviceName == "getTicketDetails") {
            res = dummyResponse.getTicketDetails;
        }
        else if (serviceName == "addComment") {
            res = dummyResponse.addComment;
        }
        else if (serviceName == "getAreaCodes") {
            res = dummyResponse.getAreaCodes;
        }
        else if (serviceName == "setCustomerInformation") {
            res = dummyResponse.setCustomerInformation;
        }
        else if (serviceName == "sendVerificationSMS") {
            res = dummyResponse.sendVerificationSMS;
        }
        else if (serviceName == "getCPETypes") {
            res = dummyResponse.getCPETypes;
        }
        else if (serviceName == "getCPETypesByCustomer") {
            res = dummyResponse.getCPETypesByCustomer;
        }
        else if (serviceName == "getCPELogging") {
            res = dummyResponse.getCPELogging;
        }
        else if (serviceName == "getCPEBankURL") {
            res = dummyResponse.getCPEBankURL;
        }
        else if (serviceName == "getCustomerInvoices") {
            res = dummyResponse.getCustomerInvoices;
        }
        else if (serviceName == "getInvoiceDetails") {
            res = dummyResponse.getInvoiceDetails;
        }
        else if (serviceName == "getSubscriptionRenewalInfo") {
            res = dummyResponse.getSubscriptionRenewalInfo;
        }
        else if (serviceName == "getOptionPackInfo") {
            res = dummyResponse.getOptionPackInfo;
        }
        else if (serviceName == "getLastRenewable") {
            res = dummyResponse.getLastRenewable;
        }
        else if (serviceName == "checkUserAdslStatus") {
            res = dummyResponse.checkUserAdslStatus;
        }
        return res;
    };
    return dummyResponse;
}());

dummyResponse.login = { "customerInformationDto": {
        "adslSpeed": "8192/1024",
        "cityEN": "Cairo",
        "cityAR": "القاهرة",
        "districtEN": "Katameya",
        "districtAR": "القطامية",
        "buildingNumber": "(A)",
        "streetName": "7th zone 3rd Settlement New Cairo Egypt",
        "flatNumber": "",
        "gender": "F",
        "contactLanguage": "A",
        "homePhoneAreaCode": "2",
        "homePhoneNumber": "27578463",
        "workPhoneAreaCode": "0",
        "workPhoneNumber": "",
        "faxAreaCode": "",
        "faxNumber": "",
        "male": true,
        "birthDate": -2137881600000,
        "mobileNumber1WithPrefix": "01119850766",
        "mobileNumber2WithPrefix": "",
        "customerNumber": "2118295",
        "emailAddress": "monawhab@gmail.com",
        "adslAreaCode": 2,
        "adslNumber": 27623463,
        "mobileNumber1": "9850766",
        "activated": true,
        "blackListed": false,
        "abuser": false,
        "directCustomer": true,
        "customerName": "- Mona Mohamed Abdel Whab -",
        "mobilePrefix1": "0111",
        "mobilePrefix2": "",
        "mobileNumber2": "",
        "limitationTypeId": 4,
        "lineOwnerName": "- Mohamed Abdel Whab -",
        "limitationTypeName": "Tal2a",
        "soapRequest": "",
        "soapResponse": ""
    } };
dummyResponse.getpromotions = {
    "PromotionsAr": [
        {
            "imageUrl": "https://www.tedata.net/wps/wcm/connect/5519a82b-3af9-4a36-9959-24f96462d01a/VAR-Home-Page-1700x651-Ar.png?MOD=AJPERES&CACHEID=5519a82b-3af9-4a36-9959-24f96462d01a",
            "promotionContent": "",
            "promotionTermsAndConditions": "",
            "promotionId": "16793",
            "promotinTitle": "معاك"
        },
        {
            "imageUrl": "https://www.tedata.net/wps/wcm/connect/c6e9ec26-0e62-463a-946c-373c8be92b83/Ma3ak+1700x651-+ar.png?MOD=AJPERES&CACHEID=c6e9ec26-0e62-463a-946c-373c8be92b83",
            "promotionContent": "",
            "promotionTermsAndConditions": "",
            "promotionId": "16793",
            "promotinTitle": "معاك"
        },
        {
            "imageUrl": "https://www.tedata.net/wps/wcm/connect/0de4b82f-b26c-4ce4-a179-005cbc2691e6/1700x651-a-b.png?MOD=AJPERES&CACHEID=0de4b82f-b26c-4ce4-a179-005cbc2691e6",
            "promotionContent": "<script>\n        $(document).ready(function(){\n        $(\"div#data\").hide();\n            $(\"a#click\").click(function(){\n                $(\"div#data\").toggle();\n            });\n        });\n        <\/script>\n<style type=\"text\/css\">.WCM_Section .block__body a {\n            background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n            border: 0 none;\n            color: #ec1c23;\n            padding: 0;\n            text-decoration: none;\n          }\n          .package{\n            border:1px solid #ddd\n          }\n          .package td {\n            padding: 10px;\n            border:1px solid #ddd\n          }\n          .package th {\n            padding: 10px;\n            text-align: center;\n          }\n          .WCM_Section table tr:nth-child(2n+1) {\n            background-color: #fff !important;\n          }\n          .bgcolor, tr.bgcolor th{\n            background-color: #f8f8f8 !important;\n          }\n<\/style>\n<div class=\"block__body\" dir=\"rtl\">\n<p class=\"text-bold\">تي اي داتا حريصة دائما علي أن تقدم الأفضل لعملائها الحاليين ولذلك يسعدنا أن نقدم لكم باقات \"ميجا بلس\" الجديدة حيث يمكنكم الأن الأستمتاع بأعلى سرعة يتحملها خطك ، سعة تحميل أعلى و الاستمتاع بشاهد بلس ايضا\"<\/p>\n\n<p dir=\"rtl\"><a href=\"#\" id=\"click\">اضغط هنا<\/a> لمشاهده أسعار وسرعات باقات ميجا بلس الجديدة، وللتجديد عن طريق الانترنت علي احدي الباقات<span class=\"text-bold\"> اضغط التالي<\/span><\/p>\n\n<div class=\"marign-30-0\" dir=\"rtl\" id=\"data\">\n<table class=\"package\" dir=\"rtl\">\n\t<tbody>\n\t\t<tr class=\"bgcolor\">\n\t\t\t<th>السرعة<\/th>\n\t\t\t<th>سعة التحميل<\/th>\n\t\t\t<th>السرعة بعد انتهاء سعة التحمي<\/th>\n\t\t\t<th>السعر<\/th>\n\t\t\t<th>الخدمات المضافه<\/th>\n\t\t<\/tr>\n\t\t<tr>\n\t\t\t<td>1 ميجابايت<\/td>\n\t\t\t<td>100 جيجابايت<\/td>\n\t\t\t<td>512 كيلوبايت<br \/>\n\t\t\tغير محدودة<\/td>\n\t\t\t<td>100 جنيه<\/td>\n\t\t\t<td class=\"bgcolor\">لا يوجد<\/td>\n\t\t<\/tr>\n\t\t<tr>\n\t\t\t<td rowspan=\"4\">اعلي سرعة خطك يتحملها<span class=\"text-medium-1 text-primary text-normal\">*<\/span><\/td>\n\t\t\t<td>100 جيجابايت<\/td>\n\t\t\t<td>1 ميجابايت<br \/>\n\t\t\tغير محدودة<\/td>\n\t\t\t<td>160 جنيه<\/td>\n\t\t\t<td class=\"bgcolor\" rowspan=\"4\">MBC \" شاهد بلس\"<\/td>\n\t\t<\/tr>\n\t\t<tr>\n\t\t\t<td>200 جيجابايت<\/td>\n\t\t\t<td>2 ميجابايت<br \/>\n\t\t\tغير محدودة<\/td>\n\t\t\t<td>260 جنيه<\/td>\n\t\t<\/tr>\n\t\t<tr>\n\t\t\t<td>300 جيجابايت<\/td>\n\t\t\t<td>4 ميجابايت<br \/>\n\t\t\tغير محدودة<\/td>\n\t\t\t<td>360 جنيه<\/td>\n\t\t<\/tr>\n\t\t<tr>\n\t\t\t<td>500 جيجابايت<\/td>\n\t\t\t<td>4 ميجابايت<br \/>\n\t\t\tغير محدودة<\/td>\n\t\t\t<td>500 جنيه<\/td>\n\t\t<\/tr>\n\t<\/tbody>\n<\/table>\n<span class=\"text-xx-small _block padding-3\"><span class=\"text-medium-1 text-primary text-normal\">*<\/span>اعلى سرعة تصل الى 16 ميجابت\/ثانية<\/span><\/div>\n<\/div>\n",
            "promotionTermsAndConditions": "<p dir=\"rtl\"><span style=\"font-family:Times New Roman, Times, serif\"><span style=\"font-size:12.0pt;\">تطبق الشروط والاحكام<\/span><\/span><\/p>\n",
            "promotionId": "1679",
            "promotinTitle": "ميجا بلس"
        },
        {
            "imageUrl": "https://www.tedata.net/wps/wcm/connect/f0349280-c024-4bd3-99c3-73c22142f370/1700x651.png?MOD=AJPERES&CACHEID=f0349280-c024-4bd3-99c3-73c22142f370",
            "promotionContent": "",
            "promotionTermsAndConditions": "",
            "promotionId": "16793",
            "promotinTitle": "معاك"
        },
        {
            "imageUrl": "https://www.tedata.net/wps/wcm/connect/e8952c63-e2d6-428c-a875-3112c87ccd3b/1700wx651ha.png?MOD=AJPERES&CACHEID=e8952c63-e2d6-428c-a875-3112c87ccd3b",
            "promotionContent": "",
            "promotionTermsAndConditions": "",
            "promotionId": "16793",
            "promotinTitle": "معاك"
        }
    ],
    "promotionsExcptionHandler": {
        "succeded": true,
        "errorMsgEn": ""
    },
    "PromotionsEn": [
        {
            "imageUrl": "https://www.tedata.net/wps/wcm/connect/6c1065ca-9a4d-45d9-92b3-1191eef8d43b/VAR-Home-Page-1700x651-+en.png?MOD=AJPERES&CACHEID=6c1065ca-9a4d-45d9-92b3-1191eef8d43b",
            "promotionContent": "",
            "promotionTermsAndConditions": "",
            "promotionId": "16793",
            "promotinTitle": "معاك"
        },
        {
            "imageUrl": "https://www.tedata.net/wps/wcm/connect/c6e9ec26-0e62-463a-946c-373c8be92b83/Ma3ak+1700x651-+ar.png?MOD=AJPERES&CACHEID=c6e9ec26-0e62-463a-946c-373c8be92b83",
            "promotionContent": "",
            "promotionTermsAndConditions": "",
            "promotionId": "16793",
            "promotinTitle": "معاك"
        },
        {
            "imageUrl": "https://tedata.net//wps/wcm/connect/346dc2f7-1d3a-40c2-a125-c3a7857ba33c/1700x651-e.png?MOD=AJPERES&CACHEID=346dc2f7-1d3a-40c2-a125-c3a7857ba33c",
            "promotionContent": "<script>\n        $(document).ready(function(){\n        $(\"div#data\").hide();\n            $(\"a#click\").click(function(){\n                $(\"div#data\").toggle();\n            });\n        });\n        <\/script>\n<style type=\"text\/css\">.package{\n            border:1px solid #ddd\n          }\n          .package td {\n            padding: 10px;\n            border:1px solid #ddd\n          }\n          .package th {\n            padding: 10px;\n            text-align: center;\n          }\n          .WCM_Section table tr:nth-child(2n+1) {\n            background-color: #fff !important;\n          }\n          .bgcolor, tr.bgcolor th{\n            background-color: #f8f8f8 !important;\n          }\n<\/style>\n<div class=\"block__body\" dir=\"ltr\">\n<p class=\"text-bold\">TE data is always keen to provide the existing customers with the best, so we are glad to introduce TE data’s new \"Mega plus\" ADSL packages.<\/p>\n\n<p>Now, you can enjoy the higher speed your line can bear, higher quotas and enjoy Shahid plus as well. To view Mega plus ADSL packages <a href=\"#\" id=\"click\">Click here<\/a>, to renew on one of our new packages <span class=\"text-bold\"> Click Next<\/span><\/p>\n\n<div class=\"marign-30-0\" id=\"data\">\n<table class=\"package\">\n\t<tbody>\n\t\t<tr class=\"bgcolor\">\n\t\t\t<th>Speed<\/th>\n\t\t\t<th>Quota<\/th>\n\t\t\t<th>Throttling Speed<\/th>\n\t\t\t<th>Price<\/th>\n\t\t\t<th>Free Added Service<\/th>\n\t\t<\/tr>\n\t\t<tr>\n\t\t\t<td>1 Mbps<\/td>\n\t\t\t<td>100 GB<\/td>\n\t\t\t<td>512 Kbps<br \/>\n\t\t\tunlimited<\/td>\n\t\t\t<td>100 L.E<\/td>\n\t\t\t<td class=\"bgcolor\">Not included<\/td>\n\t\t<\/tr>\n\t\t<tr>\n\t\t\t<td class=\"width-200\" rowspan=\"4\">Up to the highest speed your landline can support<span class=\"text-medium-1 text-primary text-normal\">*<\/span><\/td>\n\t\t\t<td>100 GB<\/td>\n\t\t\t<td>1 Mbps<br \/>\n\t\t\tunlimited<\/td>\n\t\t\t<td>160 L.E<\/td>\n\t\t\t<td class=\"bgcolor\" rowspan=\"4\">MBC Shahid Plus<\/td>\n\t\t<\/tr>\n\t\t<tr>\n\t\t\t<td>200 GB<\/td>\n\t\t\t<td>2 Mbps<br \/>\n\t\t\tunlimited<\/td>\n\t\t\t<td>260 L.E<\/td>\n\t\t<\/tr>\n\t\t<tr>\n\t\t\t<td>300 GB<\/td>\n\t\t\t<td>4 Mbps<br \/>\n\t\t\tunlimited<\/td>\n\t\t\t<td>360 L.E<\/td>\n\t\t<\/tr>\n\t\t<tr>\n\t\t\t<td>500 GB<\/td>\n\t\t\t<td>4 Mbps<br \/>\n\t\t\tunlimited<\/td>\n\t\t\t<td>500 L.E<\/td>\n\t\t<\/tr>\n\t<\/tbody>\n<\/table>\n<span class=\"text-xx-small _block padding-3\"><span class=\"text-medium-1 text-primary text-normal\">*<\/span>Highest speed up to 16Mbps<\/span><\/div>\n<\/div>\n",
            "promotionTermsAndConditions": "<p dir=\"ltr\"><span style=\"font-family:Times New Roman, Times, serif\"><span style=\"font-size:12.0pt;\">Terms and conditions apply<\/span><\/span><\/p>\n",
            "promotionId": "1679",
            "promotinTitle": "Mega plus"
        },
        {
            "imageUrl": "https://www.tedata.net/wps/wcm/connect/1c72ac66-b537-4789-bb55-29b41758f512/netsaver-1700x651.png?MOD=AJPERES&CACHEID=1c72ac66-b537-4789-bb55-29b41758f512",
            "promotionContent": "",
            "promotionTermsAndConditions": "",
            "promotionId": "16793",
            "promotinTitle": "معاك"
        },
        {
            "imageUrl": "https://www.tedata.net/wps/wcm/connect/f3da36c0-1d53-40e9-ba36-c2a3bae2848f/1700wx651he.png?MOD=AJPERES&CACHEID=f3da36c0-1d53-40e9-ba36-c2a3bae2848f",
            "promotionContent": "",
            "promotionTermsAndConditions": "",
            "promotionId": "16793",
            "promotinTitle": "معاك"
        }
    ]
};
dummyResponse.getLastRenewable = {
    "renewalStatus": {
        "renewalRequestDate": 1502959074091,
        "renewalAmount": "150.00",
        "renewalRequestDateString": "17/08/2017",
        "renewalRequestTimeString": "11:37",
        "successful": true
    }
};
dummyResponse.getUserADSLUsage = { "adslUsage": { "quata": 150.0, "totalUsed": 29.65 } };
dummyResponse.getUserPoints = { "loyaltyPoints": 20 };
dummyResponse.getUserADSLRemainingDays_exeption = {
    "remainingExcptionHandler": {
        "succeded": false,
        "errorMsgEn": "Dear Valued customer, this service is not available for your subscription. Please use On-line support, visit the nearest branch or contact 19777",
        "errorMsgAr": "عميلنا العزيز،الدفع الالكترونى غير متاح لهذا الإشتراك، برجاء زيارة أقرب فرع أو الاتصال بـ 19777 أو استعمال الدعم الفني الحي."
    }
};
dummyResponse.getUserADSLRemainingDays = {
    "remainingDays": {
        "adslExpiryDateString": "<script>alert('xxxxxx')</script>",
        "remainingDays": 22,
        "packageName": "Home ADSL - 1 Mbps – 1 Month",
        "amountDue": 95.0
    }
};
dummyResponse.getSubscriptionRenewalInfo = { "subscriptionInquiry": { "productList": [{ "name": "TAL2AADSLUpto8MB-(Cap40G)-1Month", "duration": "1", "startDate": 1420495200000, "endDate": 1423087200000, "startDateString": "06/01/2015", "endDateString": "05/02/2015", "id": 357, "packageId": 5600 }], "customerName": "MohamedHanafyMahmoud", "customerNumber": "1630101", "areaCode": "2", "adslNumber": "37234566", "subscriptionNetDue": 150, "amount": 150, "daysUntilNextRenewal": "15", "packageName": "TAL2AADSLUpto8MB-(Cap40G)-1Month", "adslDownSpeed": 8192, "adslUpspeed": 1024, "adslLimitationTypeId": 4, "canUpdateInTheMiddle": false, "adslLimitationType": "Tal2a", "adslExpirtyDate": 1420408800000, "adslExpirtyDateString": "05/01/2015", "haveCPE": false, "haveOptionPack": false, "requestNumber": 54616, "soapRequest": "<soapenv: Envelopexmlns: soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:web=\"http://webservices.tedata.net\"><soapenv:Body><web:inquiryByCustomerNumberRequest xmlns:web=\"http://webservices.tedata.net\"><adslPhoneNumber/><areaCode>0</areaCode><customerNumber>1496399</customerNumber><includeCPERentalInRenewal>true</includeCPERentalInRenewal><includeOptionPackInRenewal>true</includeOptionPackInRenewal><newDurationInMonths>0</newDurationInMonths><newLimitationType/><newOptionPackPackageID>0</newOptionPackPackageID><newOptionPackPackagePrice>0.0</newOptionPackPackagePrice><newSpeed/><paymentMethodID>10</paymentMethodID><renewalAdminUserID>11414</renewalAdminUserID><renewalLocationID>213</renewalLocationID><renewalUserName>SSP</renewalUserName><packageOfferTypeID>0</packageOfferTypeID><voucherNumber/><upgradeInTheMiddle>false</upgradeInTheMiddle><useExistingDuration>true</useExistingDuration><useExistingLimitationType>true</useExistingLimitationType><useExistingPackageOfferTypeID>true</useExistingPackageOfferTypeID><useExistingSpeed>true</useExistingSpeed></web:inquiryByCustomerNumberRequest></soapenv:Body></soapenv:Envelope>\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000",
        "soapResponse": "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\"><soapenv:Header xmlns:wsa=\"http://www.w3.org/2005/08/addressing\">\n\t\t<wsa:To>http://www.w3.org/2005/08/addressing/anonymous</wsa:To>\n\t\t<wsa:ReplyTo>\n\t\t\t<wsa:Address>http://www.w3.org/2005/08/addressing/anonymous</wsa:Address>\n\t\t</wsa:ReplyTo>\n\t\t<wsa:MessageID>urn:uuid:7FA6FFBF62250315181419149009560</wsa:MessageID>\n\t\t<wsa:Action>inquiryByCustomerNumberRequestResponse</wsa:Action>\n\t\t<wsa:RelatesTo RelationshipType=\"http://www.w3.org/2005/08/addressing/reply\">urn:uuid:235a8576-dbd5-4c8f-9ed8-ca338013231d</wsa:RelatesTo>\n\t</soapenv:Header><soapenv:Body>\n\t\t<web:inquiryByCustomerNumberResponse xmlns:web=\"http://webservices.tedata.net\"><adslAccountID>3583520</adslAccountID><adslPhoneNumber>37234566</adslPhoneNumber><adslServiceID>69</adslServiceID><adslSwitchingFeesPrice>600.0</adslSwitchingFeesPrice><areaCode>2</areaCode><cpeRentalAccountID>0</cpeRentalAccountID><cpeRentalServiceID>0</cpeRentalServiceID><createdInvoiceNumber>0</createdInvoiceNumber><createdProformaNumber>0</createdProformaNumber><createdReceiptNumber>0</createdReceiptNumber><currentDate>2014-12-21</currentDate><customerActive>true</customerActive><customerCategoryIDs>3032</customerCategoryIDs><customerCategoryNames>Consumers</customerCategoryNames><customerName>Mohamed Hanafy Mahmoud</customerName><customerNumber>1630101</customerNumber><errorCode>-1</errorCode><errorMessage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><errorOccured>false</errorOccured><existingCustomer>true</existingCustomer><externalPaymentTransactionNumber/><extraUsageDue>0.0</extraUsageDue><gapInDaysBetweenADSLExpiryDateAndToday>-15</gapInDaysBetweenADSLExpiryDateAndToday><gapInDaysBetweenCPERentalExpiryDateAndADSLExpiryDate>0</gapInDaysBetweenCPERentalExpiryDateAndADSLExpiryDate><gapInDaysBetweenCPERentalExpiryDateAndToday>0</gapInDaysBetweenCPERentalExpiryDateAndToday><gapInDaysBetweenOptionPackExpiryDateAndADSLExpiryDate>0</gapInDaysBetweenOptionPackExpiryDateAndADSLExpiryDate><gapInDaysBetweenOptionPackExpiryDateAndToday>0</gapInDaysBetweenOptionPackExpiryDateAndToday><hasPendingProformaOnADSL>false</hasPendingProformaOnADSL><hasPendingProformaOnCPERental>false</hasPendingProformaOnCPERental><hasPendingProformaOnOptionPack>false</hasPendingProformaOnOptionPack><includeCPERentalInRenewal>false</includeCPERentalInRenewal><includeOptionPackInRenewal>false</includeOptionPackInRenewal><internalErrorMessage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveADSLExpiryDate>2015-01-05</lastActiveADSLExpiryDate><lastActiveADSLInvoiceActive>true</lastActiveADSLInvoiceActive><lastActiveADSLInvoiceID>37629885</lastActiveADSLInvoiceID><lastActiveADSLInvoiceNumber>33271310</lastActiveADSLInvoiceNumber><lastActiveADSLPackage>TAL2A ADSL Up to 8MB - (Cap 40G) - 1 Month</lastActiveADSLPackage><lastActiveADSLPackageDownloadSpeed>8192</lastActiveADSLPackageDownloadSpeed><lastActiveADSLPackageDurationInMonths>1</lastActiveADSLPackageDurationInMonths><lastActiveADSLPackageID>5600</lastActiveADSLPackageID><lastActiveADSLPackageLimitationType>Tal2a</lastActiveADSLPackageLimitationType><lastActiveADSLPackageSpeed>8192/1024</lastActiveADSLPackageSpeed><lastActiveADSLPackageUploadRatio>8</lastActiveADSLPackageUploadRatio><lastActiveADSLPackageUploadSpeed>1024</lastActiveADSLPackageUploadSpeed><lastActiveCPERentalExpiryDate xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveCPERentalInvoiceActive>false</lastActiveCPERentalInvoiceActive><lastActiveCPERentalInvoiceID>0</lastActiveCPERentalInvoiceID><lastActiveCPERentalInvoiceNumber>0</lastActiveCPERentalInvoiceNumber><lastActiveCPERentalPackage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveCPERentalPackageDurationInMonths>0</lastActiveCPERentalPackageDurationInMonths><lastActiveCPERentalPackageID>0</lastActiveCPERentalPackageID><lastActiveCPERentalType xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveOptionPackExpiryDate xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveOptionPackInvoiceActive>false</lastActiveOptionPackInvoiceActive><lastActiveOptionPackInvoiceID>0</lastActiveOptionPackInvoiceID><lastActiveOptionPackInvoiceNumber>0</lastActiveOptionPackInvoiceNumber><lastActiveOptionPackPackage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveOptionPackPackageDurationInMonths>0</lastActiveOptionPackPackageDurationInMonths><lastActiveOptionPackPackageID>0</lastActiveOptionPackPackageID><lastActiveOptionPackType xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><maxGapInDaysBetweenADSLExpiryDateAndToday>30</maxGapInDaysBetweenADSLExpiryDateAndToday><maxGapInDaysBetweenCPERentalExpiryDateAndADSLExpiryDate>28</maxGapInDaysBetweenCPERentalExpiryDateAndADSLExpiryDate><maxGapInDaysBetweenCPERentalExpiryDateAndToday>58</maxGapInDaysBetweenCPERentalExpiryDateAndToday><maxGapInDaysBetweenOptionPackExpiryDateAndADSLExpiryDate>28</maxGapInDaysBetweenOptionPackExpiryDateAndADSLExpiryDate><maxGapInDaysBetweenOptionPackExpiryDateAndToday>58</maxGapInDaysBetweenOptionPackExpiryDateAndToday><newADSLPackageID>5600</newADSLPackageID><newADSLPackagePrice>150.0</newADSLPackagePrice><newCPERentalPackageID>0</newCPERentalPackageID><newCPERentalPackagePrice>0.0</newCPERentalPackagePrice><newDurationInMonths>1</newDurationInMonths><newExpiryDateAfterRenewal>2015-2-5</newExpiryDateAfterRenewal><newLimitationType>Tal2a</newLimitationType><newOptionPackPackageID>0</newOptionPackPackageID><newOptionPackPackagePrice>0.0</newOptionPackPackagePrice><newProformaNetAmount>150.0</newProformaNetAmount><newSpeed>8192/1024</newSpeed><optionPackAccountID>0</optionPackAccountID><optionPackServiceID>0</optionPackServiceID><packageOfferTypeID>357</packageOfferTypeID><payRenewalDue>false</payRenewalDue><paymentMethodID>10</paymentMethodID><performRealRenewal>false</performRealRenewal><renewalAdminUserID>11414</renewalAdminUserID><renewalCustomerComment xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><renewalLocationID>213</renewalLocationID><renewalUserName>SSP</renewalUserName><resellerCustomerName xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><resellerCustomerNumber>-1</resellerCustomerNumber><totalDueForRenewal>150.0</totalDueForRenewal><unpaidExtraUsageInvoiceAmountsDue xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><unpaidExtraUsageInvoiceIDs xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><canupgradeInTheMiddle>false</canupgradeInTheMiddle><useExistingDuration>true</useExistingDuration><useExistingLimitationType>true</useExistingLimitationType><useExistingPackageOfferTypeID>true</useExistingPackageOfferTypeID><useExistingSpeed>true</useExistingSpeed><voucherAmounts>0.0000</voucherAmounts><voucherNumbers>UD-168947</voucherNumbers><lastActiveADSLPackagePrice>150.0</lastActiveADSLPackagePrice><newADSLPackage>TAL2A ADSL Up to 8MB - (Cap 40G) - 1 Month</newADSLPackage><newCPERentalPackage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><newCPERentalPackageExpiryDate xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><newOptionPackPackage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><newOptionPackPackageExpiryDate xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><upgradeInTheMiddle>false</upgradeInTheMiddle></web:inquiryByCustomerNumberResponse></soapenv:Body></soapenv:Envelope>"
    },
    "availablePackages": [
        {
            "promotionId": 356,
            "promotionName": "Tal2a Standard Packages Up To 8M - (Cap 15G)",
            "availablePromtionDurations": [
                {
                    "duration": 1,
                    "packageId": 5596,
                    "packageOfferTypId": 356,
                    "downSpeed": 8192,
                    "upSpeed": 1024,
                    "limitationType": 4
                },
                {
                    "duration": 3,
                    "packageId": 5597,
                    "packageOfferTypId": 356,
                    "downSpeed": 8192,
                    "upSpeed": 1024,
                    "limitationType": 4
                },
                {
                    "duration": 6,
                    "packageId": 5598,
                    "packageOfferTypId": 356,
                    "downSpeed": 8192,
                    "upSpeed": 1024,
                    "limitationType": 4
                },
                {
                    "duration": 12,
                    "packageId": 5595,
                    "packageOfferTypId": 356,
                    "downSpeed": 8192,
                    "upSpeed": 1024,
                    "limitationType": 4
                }
            ],
            "smbPromotionId": 0
        },
        {
            "promotionId": 357,
            "promotionName": "Tal2a Standard Packages Up To 8M - (Cap 40G)",
            "availablePromtionDurations": [
                {
                    "duration": 1,
                    "packageId": 5600,
                    "packageOfferTypId": 357,
                    "downSpeed": 8192,
                    "upSpeed": 1024,
                    "limitationType": 4
                },
                {
                    "duration": 3,
                    "packageId": 5601,
                    "packageOfferTypId": 357,
                    "downSpeed": 8192,
                    "upSpeed": 1024,
                    "limitationType": 4
                },
                {
                    "duration": 6,
                    "packageId": 5602,
                    "packageOfferTypId": 357,
                    "downSpeed": 8192,
                    "upSpeed": 1024,
                    "limitationType": 4
                },
                {
                    "duration": 12,
                    "packageId": 5599,
                    "packageOfferTypId": 357,
                    "downSpeed": 8192,
                    "upSpeed": 1024,
                    "limitationType": 4
                }
            ],
            "smbPromotionId": 0
        },
        {
            "promotionId": 766,
            "promotionName": "Tal2a Standard Packages Up To 8M - (Cap 5G)",
            "availablePromtionDurations": [
                {
                    "duration": 1,
                    "packageId": 6339,
                    "packageOfferTypId": 766,
                    "downSpeed": 8192,
                    "upSpeed": 1024,
                    "limitationType": 4
                },
                {
                    "duration": 3,
                    "packageId": 6340,
                    "packageOfferTypId": 766,
                    "downSpeed": 8192,
                    "upSpeed": 1024,
                    "limitationType": 4
                },
                {
                    "duration": 6,
                    "packageId": 6341,
                    "packageOfferTypId": 766,
                    "downSpeed": 8192,
                    "upSpeed": 1024,
                    "limitationType": 4
                },
                {
                    "duration": 12,
                    "packageId": 6338,
                    "packageOfferTypId": 766,
                    "downSpeed": 8192,
                    "upSpeed": 1024,
                    "limitationType": 4
                }
            ],
            "smbPromotionId": 0
        },
        {
            "promotionId": 768,
            "promotionName": "Tal2a Standard Packages Up To 8M - (Cap 100G)",
            "availablePromtionDurations": [
                {
                    "duration": 1,
                    "packageId": 6331,
                    "packageOfferTypId": 768,
                    "downSpeed": 8192,
                    "upSpeed": 1024,
                    "limitationType": 4
                },
                {
                    "duration": 3,
                    "packageId": 6332,
                    "packageOfferTypId": 768,
                    "downSpeed": 8192,
                    "upSpeed": 1024,
                    "limitationType": 4
                },
                {
                    "duration": 6,
                    "packageId": 6333,
                    "packageOfferTypId": 768,
                    "downSpeed": 8192,
                    "upSpeed": 1024,
                    "limitationType": 4
                },
                {
                    "duration": 12,
                    "packageId": 6330,
                    "packageOfferTypId": 768,
                    "downSpeed": 8192,
                    "upSpeed": 1024,
                    "limitationType": 4
                }
            ],
            "smbPromotionId": 0
        },
        {
            "promotionId": 770,
            "promotionName": "Tal2a Standard Packages Up To 8M - (Cap 160G)",
            "availablePromtionDurations": [
                {
                    "duration": 1,
                    "packageId": 6335,
                    "packageOfferTypId": 770,
                    "downSpeed": 8192,
                    "upSpeed": 1024,
                    "limitationType": 4
                },
                {
                    "duration": 3,
                    "packageId": 6336,
                    "packageOfferTypId": 770,
                    "downSpeed": 8192,
                    "upSpeed": 1024,
                    "limitationType": 4
                },
                {
                    "duration": 6,
                    "packageId": 6337,
                    "packageOfferTypId": 770,
                    "downSpeed": 8192,
                    "upSpeed": 1024,
                    "limitationType": 4
                },
                {
                    "duration": 12,
                    "packageId": 6334,
                    "packageOfferTypId": 770,
                    "downSpeed": 8192,
                    "upSpeed": 1024,
                    "limitationType": 4
                }
            ],
            "smbPromotionId": 0
        },
        {
            "promotionId": 1348,
            "promotionName": "Home ADSL - 8 Mbps ",
            "availablePromtionDurations": [
                {
                    "duration": 1,
                    "packageId": 7731,
                    "packageOfferTypId": 1348,
                    "downSpeed": 8192,
                    "upSpeed": 1024,
                    "limitationType": 4
                },
                {
                    "duration": 3,
                    "packageId": 7740,
                    "packageOfferTypId": 1348,
                    "downSpeed": 8192,
                    "upSpeed": 1024,
                    "limitationType": 4
                },
                {
                    "duration": 6,
                    "packageId": 7745,
                    "packageOfferTypId": 1348,
                    "downSpeed": 8192,
                    "upSpeed": 1024,
                    "limitationType": 4
                },
                {
                    "duration": 12,
                    "packageId": 7750,
                    "packageOfferTypId": 1348,
                    "downSpeed": 8192,
                    "upSpeed": 1024,
                    "limitationType": 4
                }
            ],
            "smbPromotionId": 0
        }
    ]
};
dummyResponse.GetRenewalConfirmationViewModel = {
    "subscriptionInquiry": { "productList": [{
                "name": "TAL2AADSLUpto8MB-(Cap40G)-1Month",
                "duration": "1",
                "startDate": 1420495200000,
                "endDate": 1423087200000,
                "startDateString": "06/01/2015",
                "endDateString": "05/02/2015", "id": 357,
                "packageId": 5600
            }],
        "customerName": "MohamedHanafyMahmoud",
        "customerNumber": "1630101",
        "areaCode": "2",
        "adslNumber": "37234566",
        "subscriptionNetDue": 150,
        "amount": 150,
        "daysUntilNextRenewal": "15",
        "packageName": "TAL2AADSLUpto8MB-(Cap40G)-1Month",
        "adslDownSpeed": 8192,
        "adslUpspeed": 1024,
        "adslLimitationTypeId": 4,
        "canUpdateInTheMiddle": false,
        "adslLimitationType": "Tal2a",
        "adslExpirtyDate": 1420408800000,
        "adslExpirtyDateString": "05/01/2015",
        "haveCPE": false, "haveOptionPack": false,
        "requestNumber": 54617,
        "soapRequest": "<soapenv: Envelopexmlns: soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:web=\"http://webservices.tedata.net\"><soapenv:Body><web:inquiryByCustomerNumberRequest xmlns:web=\"http://webservices.tedata.net\"><adslPhoneNumber/><areaCode>0</areaCode><customerNumber>1496399</customerNumber><includeCPERentalInRenewal>true</includeCPERentalInRenewal><includeOptionPackInRenewal>true</includeOptionPackInRenewal><newDurationInMonths>6</newDurationInMonths><newLimitationType/><newOptionPackPackageID>0</newOptionPackPackageID><newOptionPackPackagePrice>0.0</newOptionPackPackagePrice><newSpeed/><paymentMethodID>10</paymentMethodID><renewalAdminUserID>11414</renewalAdminUserID><renewalLocationID>213</renewalLocationID><renewalUserName>SSP</renewalUserName><packageOfferTypeID>357</packageOfferTypeID><voucherNumber/><upgradeInTheMiddle>false</upgradeInTheMiddle><useExistingDuration>false</useExistingDuration><useExistingLimitationType>true</useExistingLimitationType><useExistingPackageOfferTypeID>false</useExistingPackageOfferTypeID><useExistingSpeed>true</useExistingSpeed></web:inquiryByCustomerNumberRequest></soapenv:Body></soapenv:Envelope>\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000",
        "soapResponse": "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\"><soapenv:Header xmlns:wsa=\"http://www.w3.org/2005/08/addressing\">\n\t\t<wsa:To>http://www.w3.org/2005/08/addressing/anonymous</wsa:To>\n\t\t<wsa:ReplyTo>\n\t\t\t<wsa:Address>http://www.w3.org/2005/08/addressing/anonymous</wsa:Address>\n\t\t</wsa:ReplyTo>\n\t\t<wsa:MessageID>urn:uuid:7FA6FFBF62250315181419149009560</wsa:MessageID>\n\t\t<wsa:Action>inquiryByCustomerNumberRequestResponse</wsa:Action>\n\t\t<wsa:RelatesTo RelationshipType=\"http://www.w3.org/2005/08/addressing/reply\">urn:uuid:235a8576-dbd5-4c8f-9ed8-ca338013231d</wsa:RelatesTo>\n\t</soapenv:Header><soapenv:Body>\n\t\t<web:inquiryByCustomerNumberResponse xmlns:web=\"http://webservices.tedata.net\"><adslAccountID>3583520</adslAccountID><adslPhoneNumber>37234566</adslPhoneNumber><adslServiceID>69</adslServiceID><adslSwitchingFeesPrice>600.0</adslSwitchingFeesPrice><areaCode>2</areaCode><cpeRentalAccountID>0</cpeRentalAccountID><cpeRentalServiceID>0</cpeRentalServiceID><createdInvoiceNumber>0</createdInvoiceNumber><createdProformaNumber>0</createdProformaNumber><createdReceiptNumber>0</createdReceiptNumber><currentDate>2014-12-21</currentDate><customerActive>true</customerActive><customerCategoryIDs>3032</customerCategoryIDs><customerCategoryNames>Consumers</customerCategoryNames><customerName>Mohamed Hanafy Mahmoud</customerName><customerNumber>1630101</customerNumber><errorCode>-1</errorCode><errorMessage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><errorOccured>false</errorOccured><existingCustomer>true</existingCustomer><externalPaymentTransactionNumber/><extraUsageDue>0.0</extraUsageDue><gapInDaysBetweenADSLExpiryDateAndToday>-15</gapInDaysBetweenADSLExpiryDateAndToday><gapInDaysBetweenCPERentalExpiryDateAndADSLExpiryDate>0</gapInDaysBetweenCPERentalExpiryDateAndADSLExpiryDate><gapInDaysBetweenCPERentalExpiryDateAndToday>0</gapInDaysBetweenCPERentalExpiryDateAndToday><gapInDaysBetweenOptionPackExpiryDateAndADSLExpiryDate>0</gapInDaysBetweenOptionPackExpiryDateAndADSLExpiryDate><gapInDaysBetweenOptionPackExpiryDateAndToday>0</gapInDaysBetweenOptionPackExpiryDateAndToday><hasPendingProformaOnADSL>false</hasPendingProformaOnADSL><hasPendingProformaOnCPERental>false</hasPendingProformaOnCPERental><hasPendingProformaOnOptionPack>false</hasPendingProformaOnOptionPack><includeCPERentalInRenewal>false</includeCPERentalInRenewal><includeOptionPackInRenewal>false</includeOptionPackInRenewal><internalErrorMessage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveADSLExpiryDate>2015-01-05</lastActiveADSLExpiryDate><lastActiveADSLInvoiceActive>true</lastActiveADSLInvoiceActive><lastActiveADSLInvoiceID>37629885</lastActiveADSLInvoiceID><lastActiveADSLInvoiceNumber>33271310</lastActiveADSLInvoiceNumber><lastActiveADSLPackage>TAL2A ADSL Up to 8MB - (Cap 40G) - 1 Month</lastActiveADSLPackage><lastActiveADSLPackageDownloadSpeed>8192</lastActiveADSLPackageDownloadSpeed><lastActiveADSLPackageDurationInMonths>1</lastActiveADSLPackageDurationInMonths><lastActiveADSLPackageID>5600</lastActiveADSLPackageID><lastActiveADSLPackageLimitationType>Tal2a</lastActiveADSLPackageLimitationType><lastActiveADSLPackageSpeed>8192/1024</lastActiveADSLPackageSpeed><lastActiveADSLPackageUploadRatio>8</lastActiveADSLPackageUploadRatio><lastActiveADSLPackageUploadSpeed>1024</lastActiveADSLPackageUploadSpeed><lastActiveCPERentalExpiryDate xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveCPERentalInvoiceActive>false</lastActiveCPERentalInvoiceActive><lastActiveCPERentalInvoiceID>0</lastActiveCPERentalInvoiceID><lastActiveCPERentalInvoiceNumber>0</lastActiveCPERentalInvoiceNumber><lastActiveCPERentalPackage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveCPERentalPackageDurationInMonths>0</lastActiveCPERentalPackageDurationInMonths><lastActiveCPERentalPackageID>0</lastActiveCPERentalPackageID><lastActiveCPERentalType xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveOptionPackExpiryDate xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveOptionPackInvoiceActive>false</lastActiveOptionPackInvoiceActive><lastActiveOptionPackInvoiceID>0</lastActiveOptionPackInvoiceID><lastActiveOptionPackInvoiceNumber>0</lastActiveOptionPackInvoiceNumber><lastActiveOptionPackPackage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveOptionPackPackageDurationInMonths>0</lastActiveOptionPackPackageDurationInMonths><lastActiveOptionPackPackageID>0</lastActiveOptionPackPackageID><lastActiveOptionPackType xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><maxGapInDaysBetweenADSLExpiryDateAndToday>30</maxGapInDaysBetweenADSLExpiryDateAndToday><maxGapInDaysBetweenCPERentalExpiryDateAndADSLExpiryDate>28</maxGapInDaysBetweenCPERentalExpiryDateAndADSLExpiryDate><maxGapInDaysBetweenCPERentalExpiryDateAndToday>58</maxGapInDaysBetweenCPERentalExpiryDateAndToday><maxGapInDaysBetweenOptionPackExpiryDateAndADSLExpiryDate>28</maxGapInDaysBetweenOptionPackExpiryDateAndADSLExpiryDate><maxGapInDaysBetweenOptionPackExpiryDateAndToday>58</maxGapInDaysBetweenOptionPackExpiryDateAndToday><newADSLPackageID>5600</newADSLPackageID><newADSLPackagePrice>150.0</newADSLPackagePrice><newCPERentalPackageID>0</newCPERentalPackageID><newCPERentalPackagePrice>0.0</newCPERentalPackagePrice><newDurationInMonths>1</newDurationInMonths><newExpiryDateAfterRenewal>2015-2-5</newExpiryDateAfterRenewal><newLimitationType>Tal2a</newLimitationType><newOptionPackPackageID>0</newOptionPackPackageID><newOptionPackPackagePrice>0.0</newOptionPackPackagePrice><newProformaNetAmount>150.0</newProformaNetAmount><newSpeed>8192/1024</newSpeed><optionPackAccountID>0</optionPackAccountID><optionPackServiceID>0</optionPackServiceID><packageOfferTypeID>357</packageOfferTypeID><payRenewalDue>false</payRenewalDue><paymentMethodID>10</paymentMethodID><performRealRenewal>false</performRealRenewal><renewalAdminUserID>11414</renewalAdminUserID><renewalCustomerComment xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><renewalLocationID>213</renewalLocationID><renewalUserName>SSP</renewalUserName><resellerCustomerName xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><resellerCustomerNumber>-1</resellerCustomerNumber><totalDueForRenewal>150.0</totalDueForRenewal><unpaidExtraUsageInvoiceAmountsDue xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><unpaidExtraUsageInvoiceIDs xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><canupgradeInTheMiddle>false</canupgradeInTheMiddle><useExistingDuration>true</useExistingDuration><useExistingLimitationType>true</useExistingLimitationType><useExistingPackageOfferTypeID>true</useExistingPackageOfferTypeID><useExistingSpeed>true</useExistingSpeed><voucherAmounts>0.0000</voucherAmounts><voucherNumbers>UD-168947</voucherNumbers><lastActiveADSLPackagePrice>150.0</lastActiveADSLPackagePrice><newADSLPackage>TAL2A ADSL Up to 8MB - (Cap 40G) - 1 Month</newADSLPackage><newCPERentalPackage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><newCPERentalPackageExpiryDate xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><newOptionPackPackage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><newOptionPackPackageExpiryDate xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><upgradeInTheMiddle>false</upgradeInTheMiddle></web:inquiryByCustomerNumberResponse></soapenv:Body></soapenv:Envelope>"
    }
};
dummyResponse.getBankURL = {
    "bankUrl": "https:\/\/payments.tedata.net\/net.tedata.topG.ui\/ViewPaymentWidget?transactionHashCode=70630a0d38ebb8819c08e5c7f1699dce",
};
dummyResponse.getSubscriptionInfo = {
    "subscriptionInquiry": {
        "productList": [
            {
                "name": "Mega Plus - ADSL 1Mbps (Cap 100GB) - 1 Month",
                "duration": "1",
                "startDate": 1494885600000,
                "endDate": 1497477600000,
                "startDateString": "16/05/2017",
                "endDateString": "15/06/2017",
                "id": 1759,
                "packageId": 8572
            }
        ],
        "customerName": "Mohamed Yousry El-Said Kamel",
        "customerNumber": "210068",
        "areaCode": "2",
        "adslNumber": "35829559",
        "subscriptionNetDue": 100,
        "amount": 100,
        "daysUntilNextRenewal": "154",
        "packageName": "Mega Plus - ADSL 1Mbps (Cap 100GB) - 1 Month",
        "adslDownSpeed": 1024,
        "adslUpspeed": 256,
        "adslLimitationTypeId": 4,
        "canUpdateInTheMiddle": false,
        "adslLimitationType": "Tal2a",
        "adslExpirtyDate": 1494799200000,
        "adslExpirtyDateString": "15/05/2017",
        "haveCPE": false,
        "haveOptionPack": false,
        "requestNumber": 6996005,
        "soapRequest": "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:web=\"http://webservices.tedata.net\"><soapenv:Body><web:inquiryByCustomerNumberRequest xmlns:web=\"http://webservices.tedata.net\"><adslPhoneNumber/><areaCode>0</areaCode><customerNumber>210068</customerNumber><includeCPERentalInRenewal>true</includeCPERentalInRenewal><includeOptionPackInRenewal>true</includeOptionPackInRenewal><newDurationInMonths>0</newDurationInMonths><newLimitationType/><newOptionPackPackageID>0</newOptionPackPackageID><newOptionPackPackagePrice>0.0</newOptionPackPackagePrice><newSpeed/><paymentMethodID>10</paymentMethodID><renewalAdminUserID>11414</renewalAdminUserID><renewalLocationID>213</renewalLocationID><renewalUserName>SSP</renewalUserName><packageOfferTypeID>0</packageOfferTypeID><voucherNumber/><upgradeInTheMiddle>false</upgradeInTheMiddle><useExistingDuration>true</useExistingDuration><useExistingLimitationType>true</useExistingLimitationType><useExistingPackageOfferTypeID>true</useExistingPackageOfferTypeID><useExistingSpeed>true</useExistingSpeed></web:inquiryByCustomerNumberRequest></soapenv:Body></soapenv:Envelope>\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000",
        "soapResponse": "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\"><soapenv:Header xmlns:wsa=\"http://www.w3.org/2005/08/addressing\"><wsa:To>http://www.w3.org/2005/08/addressing/anonymous</wsa:To><wsa:ReplyTo><wsa:Address>http://www.w3.org/2005/08/addressing/anonymous</wsa:Address></wsa:ReplyTo><wsa:MessageID>urn:uuid:00000e59-beab-4707-b62a-97b8f8267665</wsa:MessageID><wsa:Action>inquiryByCustomerNumberRequestResponse</wsa:Action><wsa:RelatesTo RelationshipType=\"http://www.w3.org/2005/08/addressing/reply\">urn:uuid:8113f5cd-991c-46dd-ac46-ddf135966748</wsa:RelatesTo></soapenv:Header><soapenv:Body><web:inquiryByCustomerNumberResponse xmlns:web=\"http://webservices.tedata.net\"><adslAccountID>536986</adslAccountID><adslPhoneNumber>35829559</adslPhoneNumber><adslServiceID>69</adslServiceID><adslSwitchingFeesPrice>0.0</adslSwitchingFeesPrice><areaCode>2</areaCode><cpeRentalAccountID>0</cpeRentalAccountID><cpeRentalServiceID>0</cpeRentalServiceID><createdInvoiceNumber>0</createdInvoiceNumber><createdProformaNumber>0</createdProformaNumber><createdReceiptNumber>0</createdReceiptNumber><currentDate>2016-12-12</currentDate><customerActive>true</customerActive><customerCategoryIDs>3032</customerCategoryIDs><customerCategoryNames>Consumers</customerCategoryNames><customerName>Mohamed Yousry El-Said Kamel</customerName><customerNumber>210068</customerNumber><errorCode>-1</errorCode><errorMessage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><errorOccured>false</errorOccured><existingCustomer>true</existingCustomer><externalPaymentTransactionNumber/><extraUsageDue>0.0</extraUsageDue><gapInDaysBetweenADSLExpiryDateAndToday>-154</gapInDaysBetweenADSLExpiryDateAndToday><gapInDaysBetweenCPERentalExpiryDateAndADSLExpiryDate>0</gapInDaysBetweenCPERentalExpiryDateAndADSLExpiryDate><gapInDaysBetweenCPERentalExpiryDateAndToday>0</gapInDaysBetweenCPERentalExpiryDateAndToday><gapInDaysBetweenOptionPackExpiryDateAndADSLExpiryDate>0</gapInDaysBetweenOptionPackExpiryDateAndADSLExpiryDate><gapInDaysBetweenOptionPackExpiryDateAndToday>0</gapInDaysBetweenOptionPackExpiryDateAndToday><hasPendingProformaOnADSL>false</hasPendingProformaOnADSL><hasPendingProformaOnCPERental>false</hasPendingProformaOnCPERental><hasPendingProformaOnOptionPack>false</hasPendingProformaOnOptionPack><includeCPERentalInRenewal>false</includeCPERentalInRenewal><includeOptionPackInRenewal>false</includeOptionPackInRenewal><internalErrorMessage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveADSLExpiryDate>2017-05-15</lastActiveADSLExpiryDate><lastActiveADSLInvoiceActive>true</lastActiveADSLInvoiceActive><lastActiveADSLInvoiceID>57114667</lastActiveADSLInvoiceID><lastActiveADSLInvoiceNumber>51597221</lastActiveADSLInvoiceNumber><lastActiveADSLPackage>Mega Plus - ADSL 1Mbps (Cap 100GB) - 1 Month</lastActiveADSLPackage><lastActiveADSLPackageDownloadSpeed>1024</lastActiveADSLPackageDownloadSpeed><lastActiveADSLPackageDurationInMonths>1</lastActiveADSLPackageDurationInMonths><lastActiveADSLPackageID>8572</lastActiveADSLPackageID><lastActiveADSLPackageLimitationType>Tal2a</lastActiveADSLPackageLimitationType><lastActiveADSLPackageSpeed>1024/256</lastActiveADSLPackageSpeed><lastActiveADSLPackageUploadRatio>4</lastActiveADSLPackageUploadRatio><lastActiveADSLPackageUploadSpeed>256</lastActiveADSLPackageUploadSpeed><lastActiveCPERentalExpiryDate xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveCPERentalInvoiceActive>false</lastActiveCPERentalInvoiceActive><lastActiveCPERentalInvoiceID>0</lastActiveCPERentalInvoiceID><lastActiveCPERentalInvoiceNumber>0</lastActiveCPERentalInvoiceNumber><lastActiveCPERentalPackage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveCPERentalPackageDurationInMonths>0</lastActiveCPERentalPackageDurationInMonths><lastActiveCPERentalPackageID>0</lastActiveCPERentalPackageID><lastActiveCPERentalType xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveOptionPackExpiryDate xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveOptionPackInvoiceActive>false</lastActiveOptionPackInvoiceActive><lastActiveOptionPackInvoiceID>0</lastActiveOptionPackInvoiceID><lastActiveOptionPackInvoiceNumber>0</lastActiveOptionPackInvoiceNumber><lastActiveOptionPackPackage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><lastActiveOptionPackPackageDurationInMonths>0</lastActiveOptionPackPackageDurationInMonths><lastActiveOptionPackPackageID>0</lastActiveOptionPackPackageID><lastActiveOptionPackType xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><maxGapInDaysBetweenADSLExpiryDateAndToday>60</maxGapInDaysBetweenADSLExpiryDateAndToday><maxGapInDaysBetweenCPERentalExpiryDateAndADSLExpiryDate>28</maxGapInDaysBetweenCPERentalExpiryDateAndADSLExpiryDate><maxGapInDaysBetweenCPERentalExpiryDateAndToday>88</maxGapInDaysBetweenCPERentalExpiryDateAndToday><maxGapInDaysBetweenOptionPackExpiryDateAndADSLExpiryDate>28</maxGapInDaysBetweenOptionPackExpiryDateAndADSLExpiryDate><maxGapInDaysBetweenOptionPackExpiryDateAndToday>88</maxGapInDaysBetweenOptionPackExpiryDateAndToday><newADSLPackageID>8572</newADSLPackageID><newADSLPackagePrice>100.0</newADSLPackagePrice><newCPERentalPackageID>0</newCPERentalPackageID><newCPERentalPackagePrice>0.0</newCPERentalPackagePrice><newDurationInMonths>1</newDurationInMonths><newExpiryDateAfterRenewal>2017-6-15</newExpiryDateAfterRenewal><newLimitationType>Tal2a</newLimitationType><newOptionPackPackageID>0</newOptionPackPackageID><newOptionPackPackagePrice>0.0</newOptionPackPackagePrice><newProformaNetAmount>100.0</newProformaNetAmount><newSpeed>1024/256</newSpeed><optionPackAccountID>0</optionPackAccountID><optionPackServiceID>0</optionPackServiceID><packageOfferTypeID>1759</packageOfferTypeID><payRenewalDue>false</payRenewalDue><paymentMethodID>10</paymentMethodID><performRealRenewal>false</performRealRenewal><renewalAdminUserID>11414</renewalAdminUserID><renewalCustomerComment xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><renewalLocationID>213</renewalLocationID><renewalUserName>SSP</renewalUserName><resellerCustomerName xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><resellerCustomerNumber>-1</resellerCustomerNumber><totalDueForRenewal>100.0</totalDueForRenewal><unpaidExtraUsageInvoiceAmountsDue xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><unpaidExtraUsageInvoiceIDs xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><canupgradeInTheMiddle>false</canupgradeInTheMiddle><useExistingDuration>true</useExistingDuration><useExistingLimitationType>true</useExistingLimitationType><useExistingPackageOfferTypeID>true</useExistingPackageOfferTypeID><useExistingSpeed>true</useExistingSpeed><voucherAmounts/><voucherNumbers/><lastActiveADSLPackagePrice>100.0</lastActiveADSLPackagePrice><newADSLPackage>Mega Plus - ADSL 1Mbps (Cap 100GB) - 1 Month</newADSLPackage><newCPERentalPackage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><newCPERentalPackageExpiryDate xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><newOptionPackPackage xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><newOptionPackPackageExpiryDate xsi:nil=\"true\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"/><upgradeInTheMiddle>false</upgradeInTheMiddle></web:inquiryByCustomerNumberResponse></soapenv:Body></soapenv:Envelope>"
    }
};
dummyResponse.getOpenedTicketInfo = {
    "isEligible": true,
    "openTicketInfo": {
        "requestLogId": 12827657,
        "hasTicketOpen": false
    },
    "ProblemType": [
        {
            "value": "Data and Voice Down",
            "option": "Telephone and ADSL are not working"
        },
        {
            "value": "Data Down",
            "option": "ADSL Problem"
        },
        {
            "value": "Voice Down",
            "option": "Telephone Problem"
        },
        {
            "value": "Speed",
            "option": "Slow Speed"
        },
        {
            "value": "Browsing",
            "option": "Service Problem"
        },
        {
            "value": "Option Pack",
            "option": "Static IP Problem"
        },
        {
            "value": "Technical Visit",
            "option": "Technical Visit"
        },
        {
            "value": "Family Internet",
            "option": "Family Service Problem"
        },
        {
            "value": "Info Request",
            "option": "Others"
        }
    ],
    "ProblmeTypeAr": [
        {
            "value": "Data and Voice Down",
            "option": "الهاتف وخدمة الـADSL لا يعملان"
        },
        {
            "value": "Data Down",
            "option": "مشكلة خاصة بخدمة الـADSL"
        },
        {
            "value": "Voice Down",
            "option": "مشكلة خاصة بالهاتف"
        },
        {
            "value": "Speed",
            "option": "السرعة بطيئة"
        },
        {
            "value": "Browsing",
            "option": "مشكلة في الخدمة"
        },
        {
            "value": "Option Pack",
            "option": "مشكلة في الـStatic IP"
        },
        {
            "value": "Technical Visit",
            "option": "زيارة فنية"
        },
        {
            "value": "Family Internet",
            "option": "مشكلة في خدمة الإنترنت العائلي"
        },
        {
            "value": "Info Request",
            "option": "أخرى"
        }
    ],
    "exceptionHandler": {
        "succeded": true,
        "errorMsgEn": "",
        "errorMsgAr": ""
    }
};
dummyResponse.getOpenedTicketInfo_with_open_ticket = {
    "isEligible": true,
    "openTicketInfo": {
        "requestLogId": 12828281,
        "hasTicketOpen": true,
        "openTicketTitle": "ADSL Problem",
        "alreadyOpenedTicketNum": "31796074"
    },
    "ProblemType": [
        {
            "value": "Data and Voice Down",
            "option": "Telephone and ADSL are not working"
        },
        {
            "value": "Data Down",
            "option": "ADSL Problem"
        },
        {
            "value": "Voice Down",
            "option": "Telephone Problem"
        },
        {
            "value": "Speed",
            "option": "Slow Speed"
        },
        {
            "value": "Browsing",
            "option": "Service Problem"
        },
        {
            "value": "Option Pack",
            "option": "Static IP Problem"
        },
        {
            "value": "Technical Visit",
            "option": "Technical Visit"
        },
        {
            "value": "Family Internet",
            "option": "Family Service Problem"
        },
        {
            "value": "Info Request",
            "option": "Others"
        }
    ],
    "ProblmeTypeAr": [
        {
            "value": "Data and Voice Down",
            "option": "الهاتف وخدمة الـADSL لا يعملان"
        },
        {
            "value": "Data Down",
            "option": "مشكلة خاصة بخدمة الـADSL"
        },
        {
            "value": "Voice Down",
            "option": "مشكلة خاصة بالهاتف"
        },
        {
            "value": "Speed",
            "option": "السرعة بطيئة"
        },
        {
            "value": "Browsing",
            "option": "مشكلة في الخدمة"
        },
        {
            "value": "Option Pack",
            "option": "مشكلة في الـStatic IP"
        },
        {
            "value": "Technical Visit",
            "option": "زيارة فنية"
        },
        {
            "value": "Family Internet",
            "option": "مشكلة في خدمة الإنترنت العائلي"
        },
        {
            "value": "Info Request",
            "option": "أخرى"
        }
    ],
    "exceptionHandler": {
        "succeded": true,
        "errorMsgEn": "",
        "errorMsgAr": ""
    }
};
dummyResponse.getOpenedTicketInfo_part1 = {
    "openTicketInfo": {
        "requestLogId": 6996043,
        "hasTicketOpen": false
    }
};
dummyResponse.getOpenedTicketInfo_part1_with_open_ticket = {
    "openTicketInfo": {
        "requestLogId": 12828281,
        "hasTicketOpen": true,
        "openTicketTitle": "ADSL Problem",
        "alreadyOpenedTicketNum": "31796074"
    }
};
dummyResponse.getOpenedTicketInfo_part2 = {
    "adslServiceStatus": true
};
dummyResponse.createTicket = {
    ticketNumber: 989898
};
dummyResponse.addComment = {
    "commentAdded": true
};
dummyResponse.getCustomerInvoices_empty = {
    "Invoices": [],
    "exceptionHandler": {
        "succeded": true,
        "errorMsgEn": "",
        "errorMsgAr": ""
    }
};
// adapter:SSPServicesAdapter
// procedure:getTicketsList
// compressResponse:
//     parameters:["2404133"]
//application/x-www-form-urlencoded; charset=UTF-8
dummyResponse.getTickets = {
    "ticketsList": [
        {
            "sspStatus": "Closed",
            "ttsStatus": "Closed",
            "customerNumber": 0,
            "downloadAttachments": [],
            "sspType": "Others",
            "technicalThreads": [],
            "creationDate": "15-12-2016 04:37 PM",
            "ttsType": "Info Request",
            "ttsSubReason": "General Inquiry[ Sales Issue]",
            "platform": "ADSL",
            "ticketNumber": "31796074",
            "title": "ADSL Problem",
            "source": "SSP"
        },
        {
            "sspStatus": "Closed",
            "ttsStatus": "Closed",
            "customerNumber": 0,
            "downloadAttachments": [],
            "sspType": "ADSL Problem",
            "technicalThreads": [],
            "creationDate": "31-05-2016 12:01 PM",
            "ttsType": "Data Down",
            "ttsSubReason": "Solved and closed due to customer unreachability",
            "platform": "ADSL",
            "ticketNumber": "27631587",
            "title": "data down",
            "source": "Telephone"
        },
        {
            "ttsSubReason": "Closed by Admin",
            "sspStatus": "Closed",
            "platform": "ADSL",
            "ticketNumber": "21248656",
            "ttsStatus": "Closed",
            "customerNumber": 0,
            "downloadAttachments": [],
            "title": "global problem ",
            "source": "Telephone",
            "technicalThreads": [],
            "creationDate": "21-06-2015 11:53 AM",
            "ttsType": "Global Problem"
        },
        {
            "ttsSubReason": "Card Problem",
            "sspStatus": "Closed",
            "platform": "ADSL",
            "ticketNumber": "20592769",
            "ttsStatus": "Closed",
            "customerNumber": 0,
            "downloadAttachments": [],
            "title": "Global Problem",
            "source": "Telephone",
            "technicalThreads": [],
            "creationDate": "16-05-2015 11:17 AM",
            "ttsType": "Global Problem"
        },
        {
            "ttsSubReason": "Card Problem",
            "sspStatus": "Closed",
            "platform": "ADSL",
            "ticketNumber": "20592212",
            "ttsStatus": "Closed",
            "customerNumber": 0,
            "downloadAttachments": [],
            "title": "globle proplem",
            "source": "Telephone",
            "technicalThreads": [],
            "creationDate": "16-05-2015 10:27 AM",
            "ttsType": "Global Problem"
        },
        {
            "ttsSubReason": "Card Problem",
            "sspStatus": "Closed",
            "platform": "ADSL",
            "ticketNumber": "20542502",
            "ttsStatus": "Closed",
            "customerNumber": 0,
            "downloadAttachments": [],
            "title": "Global Problem",
            "source": "Telephone",
            "technicalThreads": [],
            "creationDate": "13-05-2015 12:55 PM",
            "ttsType": "Global Problem"
        },
        {
            "sspStatus": "Closed",
            "ttsStatus": "Closed",
            "customerNumber": 0,
            "downloadAttachments": [],
            "sspType": "ADSL Problem",
            "technicalThreads": [],
            "creationDate": "13-05-2015 11:22 AM",
            "ttsType": "Data Down",
            "ttsSubReason": "Restart Port",
            "platform": "ADSL",
            "ticketNumber": "20541024",
            "title": "Data Down",
            "source": "Telephone"
        },
        {
            "sspStatus": "Closed",
            "ttsStatus": "Closed",
            "customerNumber": 0,
            "downloadAttachments": [],
            "sspType": "ADSL Problem",
            "technicalThreads": [],
            "creationDate": "07-05-2015 07:17 PM",
            "ttsType": "Data Down",
            "ttsSubReason": "Restart Port",
            "platform": "ADSL",
            "ticketNumber": "20449451",
            "title": "Data down",
            "source": "Telephone"
        },
        {
            "ttsSubReason": "Closed by Admin",
            "sspStatus": "Closed",
            "platform": "ADSL",
            "ticketNumber": "17111478",
            "ttsStatus": "Closed",
            "customerNumber": 0,
            "downloadAttachments": [],
            "title": "global problem",
            "source": "Telephone",
            "technicalThreads": [],
            "creationDate": "22-09-2014 12:30 PM",
            "ttsType": "Global Problem"
        },
        {
            "ttsSubReason": "Instability",
            "sspStatus": "Closed",
            "platform": "ADSL",
            "ticketNumber": "20607041",
            "ttsStatus": "closed",
            "customerNumber": 0,
            "downloadAttachments": [],
            "title": "global problem ",
            "source": "Telephone",
            "technicalThreads": [],
            "creationDate": "17-05-2015 10:44 AM",
            "ttsType": "Global Problem"
        },
        {
            "ttsSubReason": "Instability",
            "sspStatus": "Closed",
            "platform": "ADSL",
            "ticketNumber": "20879049",
            "ttsStatus": "opened",
            "customerNumber": 0,
            "downloadAttachments": [],
            "title": "Global Problem",
            "source": "Telephone",
            "technicalThreads": [],
            "creationDate": "31-05-2015 11:30 AM",
            "ttsType": "Global Problem"
        }
    ],
    "exceptionHandler": {
        "succeded": true,
        "errorMsgEn": "",
        "errorMsgAr": ""
    }
};
//
// adapter:SSPServicesAdapter
// procedure:getTicketDetails
// compressResponse:
//     parameters:["31796074"]
dummyResponse.getTicketDetails = {
    "ticketDetails": {
        "downloadAttachments": [],
        "probDesc": "cst",
        "technicalThreads": [
            {
                "user": "TEData Support",
                "dateTime": "06-08-2017 11:47 AM",
                "comment": "N/A"
            },
            {
                "user": "Ahmed Fouad",
                "dateTime": "09-08-2017 11:47 AM",
                "comment": "what is that?!"
            }
        ],
        "closureDate": "",
        "customerName": "Mostafa Mahmoud Mohamed",
        "customerNumber": 700840,
        "ticketNumber": "36223184",
        "creationDate": "15-06-2017 05:56 PM",
        "source": "Telephone",
        "title": "Physical Instability",
        "sspStatus": "In Progress",
        "sspType": "ADSL Problem",
        "ttsStatus": "Waiting for response",
        "ttsType": "Physical Instability",
        "ttsSubReason": "MV- Change Main Wire",
        "platform": "ADSL"
    }
};
// adapter:SSPServicesAdapter
// procedure:getCustomerInvoices
// compressResponse:
//     parameters:["2404133"]
dummyResponse.getCustomerInvoices = {
    "customerInvoicesHistory": [
        { "invoiceNumber": 85824110, "invoiceDate": "28/6/2017", "invoiceAmount": 140.0, "paid": true, "renewalDate": "22/07/2017", "subscrip": { "productList": [], "adslDownSpeed": 0, "adslUpspeed": 0, "adslLimitationTypeId": 0, "canUpdateInTheMiddle": false, "haveCPE": false, "haveOptionPack": false }, "receipts": [] },
        { "invoiceNumber": 83261873, "invoiceDate": "29/5/2017", "invoiceAmount": 140.0, "paid": true, "renewalDate": "22/06/2017", "subscrip": { "productList": [], "adslDownSpeed": 0, "adslUpspeed": 0, "adslLimitationTypeId": 0, "canUpdateInTheMiddle": false, "haveCPE": false, "haveOptionPack": false }, "receipts": [] },
        { "invoiceNumber": 80446126, "invoiceDate": "29/4/2017", "invoiceAmount": 140.0, "paid": true, "renewalDate": "22/05/2017", "subscrip": { "productList": [], "adslDownSpeed": 0, "adslUpspeed": 0, "adslLimitationTypeId": 0, "canUpdateInTheMiddle": false, "haveCPE": false, "haveOptionPack": false }, "receipts": [] }
    ],
    "exceptionHandler": {
        "succeded": true,
        "errorMsgEn": "",
        "errorMsgAr": ""
    }
};
//
// adapter:SSPServicesAdapter
// procedure:getInvoiceDetails
// compressResponse:
//     parameters:["2404133","68551287"]
dummyResponse.getInvoiceDetails = { "invoiceDetails": { "invoiceNumber": 13326786, "invoiceAmount": 10.0, "paid": false, "subscrip": { "productList": [{ "name": "ADSL Option Pack 1 - 1 Month", "startDate": 1324418400000, "endDate": 1327010400000, "startDateString": "21/12/2011", "endDateString": "20/01/2012", "id": 0, "packageId": 0 }], "adslDownSpeed": 0, "adslUpspeed": 0, "adslLimitationTypeId": 0, "canUpdateInTheMiddle": false, "haveCPE": false, "haveOptionPack": false }, "receipts": [{ "receiptNumber": 12217700, "collectionNumber": "J032012", "amount": 10.0, "originalAmount": 0.0, "receiptDate": "20/3/2012" }] } };
dummyResponse.getAreaCodes = {
    "areaCodesList": [
        {
            "id": 1,
            "areaCode": "2",
            "nameAr": "2 - القاهرة",
            "nameEn": "2 - Cairo"
        },
        {
            "id": 2,
            "areaCode": "3",
            "nameAr": "3 - الأسكندرية",
            "nameEn": "3 - Alexandria"
        },
        {
            "id": 4,
            "areaCode": "40",
            "nameAr": "40 - الغربية",
            "nameEn": "40 - Al Gharbya"
        },
        {
            "id": 5,
            "areaCode": "88",
            "nameAr": "88 - أسيوط",
            "nameEn": "88 - Assiut"
        },
        {
            "id": 6,
            "areaCode": "97",
            "nameAr": "97 - أسوان",
            "nameEn": "97 - Aswan"
        },
        {
            "id": 7,
            "areaCode": "45",
            "nameAr": "45 - البحيرة",
            "nameEn": "45 - Behira"
        },
        {
            "id": 8,
            "areaCode": "82",
            "nameAr": "82 - بني سويف",
            "nameEn": "82 - Beni Souif"
        },
        {
            "id": 9,
            "areaCode": "50",
            "nameAr": "50 - الدقهلية",
            "nameEn": "50 - Dakahliya "
        },
        {
            "id": 10,
            "areaCode": "57",
            "nameAr": "57 - دمياط",
            "nameEn": "57 - Damietta"
        },
        {
            "id": 11,
            "areaCode": "84",
            "nameAr": "84 - الفيوم",
            "nameEn": "84 - Fayoum"
        },
        {
            "id": 12,
            "areaCode": "64",
            "nameAr": "64 - الإسماعيلية",
            "nameEn": "64 - Ismalia"
        },
        {
            "id": 13,
            "areaCode": "47",
            "nameAr": "47 - كفر الشيخ",
            "nameEn": "47 - Kafr El-Sheikh"
        },
        {
            "id": 14,
            "areaCode": "95",
            "nameAr": "95 - الأقصر",
            "nameEn": "95 - Luxor"
        },
        {
            "id": 15,
            "areaCode": "46",
            "nameAr": "46 - مطروح",
            "nameEn": "46 - Matroh"
        },
        {
            "id": 16,
            "areaCode": "86",
            "nameAr": "86 - المنيا",
            "nameEn": "86 - Menia"
        },
        {
            "id": 17,
            "areaCode": "48",
            "nameAr": "48 - المنوفية",
            "nameEn": "48 - Menoufia"
        },
        {
            "id": 18,
            "areaCode": "68",
            "nameAr": "68 - شمال سيناء",
            "nameEn": "68 - North Sinai"
        },
        {
            "id": 19,
            "areaCode": "66",
            "nameAr": "66 - بور سعيد",
            "nameEn": "66 - Port Said"
        },
        {
            "id": 20,
            "areaCode": "13",
            "nameAr": "13 - القليوبية",
            "nameEn": "13 - Qaliobia"
        },
        {
            "id": 21,
            "areaCode": "96",
            "nameAr": "96 - قنا",
            "nameEn": "96 - Quina"
        },
        {
            "id": 22,
            "areaCode": "65",
            "nameAr": "65 - البحر الأحمر",
            "nameEn": "65 - Red Sea"
        },
        {
            "id": 23,
            "areaCode": "55",
            "nameAr": "55 - الشرقية",
            "nameEn": "55 - Sharkia"
        },
        {
            "id": 24,
            "areaCode": "93",
            "nameAr": "93 - سوهاج",
            "nameEn": "93 - Souhag"
        },
        {
            "id": 25,
            "areaCode": "69",
            "nameAr": "69 - جنوب سيناء",
            "nameEn": "69 - South Sinai"
        },
        {
            "id": 26,
            "areaCode": "62",
            "nameAr": "62 - السويس",
            "nameEn": "62 - Suez"
        },
        {
            "id": 28,
            "areaCode": "92",
            "nameAr": "92 - الوادي الجديد",
            "nameEn": "92 - Wadi Gadid"
        },
        {
            "id": 29,
            "areaCode": "55",
            "nameAr": "55 - العاشر من رمضان",
            "nameEn": "55 - 10th of Ramadan"
        }
    ]
};
dummyResponse.setCustomerInformation = {
    "contactInfoUpdated": true
};
dummyResponse.sendVerificationSMS = {
    "sendStatus": "success"
};
dummyResponse.getCPETypes = {
    "CPETypesList": [
        {
            "cpeInstallationFees": 75,
            "cpe_ID": 323,
            "cpeName": "4 Port Wireless Router",
            "cpeDesc": "hardware desc",
            "selected": true,
            "cpeDescAr": "راوتر لاسلكي + 4مخارج"
        },
        {
            "cpeInstallationFees": 75,
            "cpe_ID": 140,
            "cpeName": "1 Port Router",
            "cpeDesc": "hardware trying",
            "selected": true,
            "cpeDescAr": "راوتر ايثرنت"
        },
        {
            "cpeInstallationFees": 0,
            "cpe_ID": 495,
            "cpeName": "Backup Battery – Sales",
            "cpeDesc": "NetSaver Desc",
            "selected": true
        }
    ]
};
dummyResponse.getCPETypesByCustomer = {
    "cpeSalesTypeList": {
        "cpeSalesTypeByCustomerDtos": [
            {
                "selected": false,
                "cpePrice": 150,
                "cpeTypeID": 140,
                "cpeTypeName": "CPE Ethernet - Sales"
            },
            {
                "selected": false,
                "cpePrice": 250,
                "cpeTypeID": 323,
                "cpeTypeName": "CPE 4-port Wireless - Sales"
            },
            {
                "selected": false,
                "cpePrice": 500,
                "cpeTypeID": 495,
                "cpeTypeName": "Backup Battery – Sales"
            }
        ],
        "requestLogId": 201232253
    }
};
dummyResponse.getCPELogging = {
    "requestLog": {
        "id": 201232253,
        "createdOn": 1502703970776,
        "customerNumber": "1496399",
        "hasPayment": false,
        "username": "revampuser",
        "requestStatusId": 0,
        "requestTypeId": 10,
        "responseStatusId": 0,
        "origin": 2
    }
};
dummyResponse.getCPEBankURL = {
    "bankUrl": "http://192.168.129.30:9080/net.tedata.topG.ui/ViewPaymentWidget?transactionHashCode=53669de234e052dc9f25d85f43cbbb32"
};
dummyResponse.getOptionPackInfo = {
    "eligibleToOptionPack": false,
    "adslServiceStatus": true,
    "optionPackList": {
        "availableOptionPackList": [
            {
                "optionPackPackageId": 4093,
                "optionPackPackageName": "Business ADSL Option Pack 1 - 10 Months",
                "price": 100,
                "monthDuration": 10,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 1",
                "optionPackPackageTypeid": 71
            },
            {
                "optionPackPackageId": 4094,
                "optionPackPackageName": "Business ADSL Option Pack 1 - 11 Months",
                "price": 110,
                "monthDuration": 11,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 1",
                "optionPackPackageTypeid": 71
            },
            {
                "optionPackPackageId": 4095,
                "optionPackPackageName": "Business ADSL Option Pack 1 - 12 Months",
                "price": 120,
                "monthDuration": 12,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 1",
                "optionPackPackageTypeid": 71
            },
            {
                "optionPackPackageId": 4096,
                "optionPackPackageName": "Business ADSL Option Pack 1 - 1 Month",
                "price": 10,
                "monthDuration": 1,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 1",
                "optionPackPackageTypeid": 71
            },
            {
                "optionPackPackageId": 4097,
                "optionPackPackageName": "Business ADSL Option Pack 1 - 2 Month",
                "price": 20,
                "monthDuration": 2,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 1",
                "optionPackPackageTypeid": 71
            },
            {
                "optionPackPackageId": 4098,
                "optionPackPackageName": "Business ADSL Option Pack 1 - 3 Months",
                "price": 30,
                "monthDuration": 3,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 1",
                "optionPackPackageTypeid": 71
            },
            {
                "optionPackPackageId": 4099,
                "optionPackPackageName": "Business ADSL Option Pack 1 - 4 Months",
                "price": 40,
                "monthDuration": 4,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 1",
                "optionPackPackageTypeid": 71
            },
            {
                "optionPackPackageId": 4100,
                "optionPackPackageName": "Business ADSL Option Pack 1 - 5 Months",
                "price": 50,
                "monthDuration": 5,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 1",
                "optionPackPackageTypeid": 71
            },
            {
                "optionPackPackageId": 4101,
                "optionPackPackageName": "Business ADSL Option Pack 1 - 6 Months",
                "price": 60,
                "monthDuration": 6,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 1",
                "optionPackPackageTypeid": 71
            },
            {
                "optionPackPackageId": 4102,
                "optionPackPackageName": "Business ADSL Option Pack 1 - 7 Months",
                "price": 70,
                "monthDuration": 7,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 1",
                "optionPackPackageTypeid": 71
            },
            {
                "optionPackPackageId": 4103,
                "optionPackPackageName": "Business ADSL Option Pack 1 - 8 Months",
                "price": 80,
                "monthDuration": 8,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 1",
                "optionPackPackageTypeid": 71
            },
            {
                "optionPackPackageId": 4104,
                "optionPackPackageName": "Business ADSL Option Pack 1 - 9 Months",
                "price": 90,
                "monthDuration": 9,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 1",
                "optionPackPackageTypeid": 71
            },
            {
                "optionPackPackageId": 4105,
                "optionPackPackageName": "Business ADSL Option Pack 2 - 10 Months",
                "price": 500,
                "monthDuration": 10,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 2",
                "optionPackPackageTypeid": 281
            },
            {
                "optionPackPackageId": 4106,
                "optionPackPackageName": "Business ADSL Option Pack 2 - 11 Months",
                "price": 550,
                "monthDuration": 11,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 2",
                "optionPackPackageTypeid": 281
            },
            {
                "optionPackPackageId": 4107,
                "optionPackPackageName": "Business ADSL Option Pack 2 - 12 Months",
                "price": 600,
                "monthDuration": 12,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 2",
                "optionPackPackageTypeid": 281
            },
            {
                "optionPackPackageId": 4108,
                "optionPackPackageName": "Business ADSL Option Pack 2 - 1 Month",
                "price": 50,
                "monthDuration": 1,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 2",
                "optionPackPackageTypeid": 281
            },
            {
                "optionPackPackageId": 4109,
                "optionPackPackageName": "Business ADSL Option Pack 2 - 2 Month",
                "price": 100,
                "monthDuration": 2,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 2",
                "optionPackPackageTypeid": 281
            },
            {
                "optionPackPackageId": 4110,
                "optionPackPackageName": "Business ADSL Option Pack 2 - 3 Months",
                "price": 150,
                "monthDuration": 3,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 2",
                "optionPackPackageTypeid": 281
            },
            {
                "optionPackPackageId": 4111,
                "optionPackPackageName": "Business ADSL Option Pack 2 - 4 Months",
                "price": 200,
                "monthDuration": 4,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 2",
                "optionPackPackageTypeid": 281
            },
            {
                "optionPackPackageId": 4112,
                "optionPackPackageName": "Business ADSL Option Pack 2 - 5 Months",
                "price": 250,
                "monthDuration": 5,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 2",
                "optionPackPackageTypeid": 281
            },
            {
                "optionPackPackageId": 4113,
                "optionPackPackageName": "Business ADSL Option Pack 2 - 6 Months",
                "price": 300,
                "monthDuration": 6,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 2",
                "optionPackPackageTypeid": 281
            },
            {
                "optionPackPackageId": 4114,
                "optionPackPackageName": "Business ADSL Option Pack 2 - 7 Months",
                "price": 350,
                "monthDuration": 7,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 2",
                "optionPackPackageTypeid": 281
            },
            {
                "optionPackPackageId": 4115,
                "optionPackPackageName": "Business ADSL Option Pack 2 - 8 Months",
                "price": 400,
                "monthDuration": 8,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 2",
                "optionPackPackageTypeid": 281
            },
            {
                "optionPackPackageId": 4116,
                "optionPackPackageName": "Business ADSL Option Pack 2 - 9 Months",
                "price": 450,
                "monthDuration": 9,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 2",
                "optionPackPackageTypeid": 281
            },
            {
                "optionPackPackageId": 4117,
                "optionPackPackageName": "Business ADSL Option Pack 3 - 10 Months",
                "price": 1000,
                "monthDuration": 10,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 3",
                "optionPackPackageTypeid": 282
            },
            {
                "optionPackPackageId": 4118,
                "optionPackPackageName": "Business ADSL Option Pack 3 - 11 Months",
                "price": 1100,
                "monthDuration": 11,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 3",
                "optionPackPackageTypeid": 282
            },
            {
                "optionPackPackageId": 4119,
                "optionPackPackageName": "Business ADSL Option Pack 3 - 12 Months",
                "price": 1200,
                "monthDuration": 12,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 3",
                "optionPackPackageTypeid": 282
            },
            {
                "optionPackPackageId": 4120,
                "optionPackPackageName": "Business ADSL Option Pack 3 - 1 Month",
                "price": 100,
                "monthDuration": 1,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 3",
                "optionPackPackageTypeid": 282
            },
            {
                "optionPackPackageId": 4121,
                "optionPackPackageName": "Business ADSL Option Pack 3 - 2 Month",
                "price": 200,
                "monthDuration": 2,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 3",
                "optionPackPackageTypeid": 282
            },
            {
                "optionPackPackageId": 4122,
                "optionPackPackageName": "Business ADSL Option Pack 3 - 3 Months",
                "price": 300,
                "monthDuration": 3,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 3",
                "optionPackPackageTypeid": 282
            },
            {
                "optionPackPackageId": 4123,
                "optionPackPackageName": "Business ADSL Option Pack 3 - 4 Months",
                "price": 400,
                "monthDuration": 4,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 3",
                "optionPackPackageTypeid": 282
            },
            {
                "optionPackPackageId": 4124,
                "optionPackPackageName": "Business ADSL Option Pack 3 - 5 Months",
                "price": 500,
                "monthDuration": 5,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 3",
                "optionPackPackageTypeid": 282
            },
            {
                "optionPackPackageId": 4125,
                "optionPackPackageName": "Business ADSL Option Pack 3 - 6 Months",
                "price": 600,
                "monthDuration": 6,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 3",
                "optionPackPackageTypeid": 282
            },
            {
                "optionPackPackageId": 4126,
                "optionPackPackageName": "Business ADSL Option Pack 3 - 7 Months",
                "price": 700,
                "monthDuration": 7,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 3",
                "optionPackPackageTypeid": 282
            },
            {
                "optionPackPackageId": 4127,
                "optionPackPackageName": "Business ADSL Option Pack 3 - 8 Months",
                "price": 800,
                "monthDuration": 8,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 3",
                "optionPackPackageTypeid": 282
            },
            {
                "optionPackPackageId": 4128,
                "optionPackPackageName": "Business ADSL Option Pack 3 - 9 Months",
                "price": 900,
                "monthDuration": 9,
                "promotionID": 26,
                "promotionName": "Business Unlimited ADSL - Standard Offering",
                "optionPackPackageTypeName": "ADSL Option Pack 3",
                "optionPackPackageTypeid": 282
            }
        ],
        "reqLogID": "201232047"
    }
};
dummyResponse.checkUserAdslStatus = { "adslServiceStatus": false };
//# sourceMappingURL=dummyResponse.js.map

/***/ }),

/***/ 310:
/***/ (function(module, exports) {

//
//
//
var l = function () {
    var that = window.console;
    return {
        log: function (message) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                optionalParams[_i - 1] = arguments[_i];
            }
            return that.log(arguments);
        },
        error: function (message) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                optionalParams[_i - 1] = arguments[_i];
            }
            return that.error(arguments);
        },
        assert: function (test, message) {
            var optionalParams = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                optionalParams[_i - 2] = arguments[_i];
            }
            return that.assert(this.arguments);
        },
        clear: function () { that.clear(); },
        count: function (countTitle) { return that.count(this.arguments); },
        debug: function (message) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                optionalParams[_i - 1] = arguments[_i];
            }
            return that.debug(this.arguments);
        },
        trace: function () { return that.trace(); },
        warn: function (message) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                optionalParams[_i - 1] = arguments[_i];
            }
            return that.warn(this.arguments);
        },
        info: function (message) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                optionalParams[_i - 1] = arguments[_i];
            }
            return that.info(this.arguments);
        }
    };
};
window.console = l();
// var l  =(function(oldCons){
//     return {
//         log: function(text){
//             oldCons.log(text);
//             // Your code
//         },
//
//         error: function (text) {
//             oldCons.error(text);
//             // Your code
//         },
//       assert:function(test?: boolean, message?: string, ...optionalParams: any[]): void{ return oldCons.assert(this.arguments)  },
//     clear:function(): void{oldCons.clear()},
//     count:function(countTitle?: string): void{return oldCons.count(this.arguments)},
//     debug:function(message?: string, ...optionalParams: any[]): void { return oldCons.debug(this.arguments)},
//     trace:function(): void{return oldCons.trace()},
//     warn:function(message?: any, ...optionalParams: any[]): void{return oldCons.warn(this.arguments)},
//     info:function(message?: any, ...optionalParams: any[]): void{return oldCons.info(this.arguments)}
//     };
// }(window.console)) ;
//
//
//
//
//
// //Then redefine the old console
// (<any>window).console  = l
//# sourceMappingURL=logger.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return globalVariables; });
/* unused harmony export Size */
/* unused harmony export Position */
/* unused harmony export PositionNum */
/* unused harmony export userPrivileges */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_compiler__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prefsItem__ = __webpack_require__(271);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var globalVariables = (function () {
    function globalVariables() {
    }
    Object.defineProperty(globalVariables, "IsBack", {
        get: function () {
            return globalVariables._IsBack;
        },
        set: function (value) {
            globalVariables._IsBack = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(globalVariables, "MaxZIndex", {
        get: function () {
            return this._MaxZIndex;
        },
        set: function (value) {
            this._MaxZIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(globalVariables, "customerID", {
        get: function () {
            return this._customerID;
        },
        set: function (value) {
            globalVariables.storage.set('customer_id', value);
            globalVariables.update_customer();
            this._customerID = value;
        },
        enumerable: true,
        configurable: true
    });
    globalVariables.update_customer = function () {
        globalVariables.storage.get('devicePushNotificationID').then(function (devicePushNotificationID) {
            if (!devicePushNotificationID) {
                return;
            }
            globalVariables.storage.get('OldCustomerID').then(function (OldCustomerID) {
                globalVariables.storage.get('customer_id').then(function (customer_id) {
                    if (OldCustomerID != customer_id) {
                        cordova.exec(function succ(DeviceInfo) {
                            // alert(DeviceInfo);
                            try {
                                var json_to_post_for_push_notification = JSON.parse(DeviceInfo);
                            }
                            catch (ex) {
                                console.error("error when parse json when sent info for push notification : " + ex.message);
                                console.error(DeviceInfo);
                            }
                            json_to_post_for_push_notification.customer_id = customer_id; /////////
                            json_to_post_for_push_notification.device_push_notifcation_registration_id = devicePushNotificationID;
                            globalVariables.http.post(globalVariables.SoketRootServerURL + '/pushNotificatonRegistrationInfo"', json_to_post_for_push_notification).subscribe(function (datax) {
                                globalVariables.storage.set('OldCustomerID', customer_id);
                                console.log("successfully sent Push Notifications ID to server  ");
                            }, function (err) {
                                console.log("error in Sent Push Notifications ID to server ");
                            });
                        }, function fail(error) {
                            console.log(error);
                        }, 'MyAllPluginsClass', 'MyAllPluginsMethod', ['getDeviceInfo']);
                    }
                });
            });
        });
    };
    ;
    globalVariables.stringify = function (obj) {
        for (var obj1 in obj) {
            if (obj[obj1] === undefined) {
                obj[obj1] = null;
            }
        }
        return JSON.stringify(obj);
    };
    globalVariables.resolve = function (baseUrl, url) {
        if (url == "") {
            return baseUrl;
        }
        var parts = [];
        for (var i = 0, l = arguments.length; i < l; i++) {
            parts = parts.concat(arguments[i].split("/"));
        }
        // Interpret the path commands to get the new resolved path.
        var newParts = [];
        for (i = 0, l = parts.length; i < l; i++) {
            var part = parts[i];
            // Remove leading and trailing slashes
            // Also remove "." segments
            if (!part || part === ".")
                continue;
            // Interpret ".." to pop the last segment
            if (part === "..")
                newParts.pop();
            else
                newParts.push(part);
        }
        // Preserve the initial slash if there was one.
        if (parts[0] === "")
            newParts.unshift("");
        // Turn back into a single string path.
        var str = newParts.join("/") || (newParts.length ? "/" : ".");
        if (str.indexOf('://') === -1) {
            str = str.replace(':/', '://');
        }
        return str;
    };
    globalVariables.preFunction = function () {
        globalVariables.showProgressDialog();
    };
    globalVariables.postFunction = function () {
        globalVariables.dismissProgressDialog();
    };
    globalVariables.alert = function (message, title) {
        var alert = globalVariables.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    globalVariables.getErrorMessage = function (res_error) {
        var error_message = null;
        if (res_error["message"]) {
            return res_error["message"];
        }
        if (res_error.json()["message"]) {
            return res_error.json()["message"];
        }
        if (res_error["status"] == 0) {
            if (globalVariables.checkInternetConnection()) {
                if (globalVariables.platform.is('cordova')) {
                    return this.translate.instant('GLOBAL_MESSAGES.SERVER_PROBLEM'); //ToDo
                }
                else {
                    return this.translate.instant('GLOBAL_MESSAGES.SERVER_PROBLEM_WEB'); //ToDo
                }
            }
            else {
                return this.translate.instant('GLOBAL_MESSAGES.NO_CONNECTION');
            }
            //  "Connection Error"
        }
        var exception = res_error.json()["exception"];
        if (exception) {
            if (__WEBPACK_IMPORTED_MODULE_2__prefsItem__["a" /* PREFS_ITEM */].lang == "ar") {
                error_message = exception["messageAr"];
            }
            else {
                error_message = exception["messageEn"];
            }
            console.log("nestedError:" + exception["nestedError"]);
            return error_message;
        }
        //"{"exception":
        // {"messageAr":"برجاء التاكد من عنوان البريد الالكتروني وكلمة السر",
        // "messageEn":"Incorrect email or password ",
        // "messageCode":"MSG504",
        // "nestedError":"",
        // "stackTrace":[],"suppressed":[]}}"
    };
    globalVariables.checkInternetConnection = function () {
        if (globalVariables.platform.is('cordova')) {
            if (globalVariables.network.type == 'none') {
                console.log("internet connection is this.network.type :", false);
                return false;
            }
            else {
                console.log("internet connection is this.network.type :", true);
                return true;
            }
        }
        else {
            console.log("internet connection is navigator.onLine:", navigator.onLine);
            return navigator.onLine;
        }
        // ;
        // if(this.platform.is('cordova')) {
        //     cordova.exec(function succ(one_or_zero) {
        //         globalVariables.alert("Error", this.translate.instant('UNRESPONSIVE_HOST'));
        //     }, function fail(error) {
        //         console.log(error);
        //     }, 'MyAllPluginsClass', 'MyAllPluginsMethod', ['checkInternetConnectionHard'])
        // }
    };
    globalVariables.showProgressDialog = function (message, title) {
        if (!globalVariables.isLoading) {
            if (!message) {
                message = "Please wait...";
            }
            globalVariables.loader = globalVariables.loadingCtrl.create({
                content: message,
                dismissOnPageChange: true,
                showBackdrop: true
            });
            globalVariables.loader.present();
            globalVariables.isLoading = true;
        }
    };
    globalVariables.dismissProgressDialog = function () {
        try {
            globalVariables.isLoading = false;
            globalVariables.loader.dismiss().catch(function () { });
        }
        catch (err) {
        }
    };
    globalVariables.changeLang = function (lang) {
        // (globalVariables.menu.getMenus()[0].getMenuElement() as any).setElementAttribute("side","right");
        // globalVariables.menu.getMenus()[0].getMenuElement().setAttribute("side","left");
        // globalVariables.menu.getMenus()[0].getMenuElement().getAttributeNode("side");
        globalVariables.menu.getMenus()[0]._type = null;
        if (lang == "ar" || (!lang && (__WEBPACK_IMPORTED_MODULE_2__prefsItem__["a" /* PREFS_ITEM */].lang == "en" || __WEBPACK_IMPORTED_MODULE_2__prefsItem__["a" /* PREFS_ITEM */].lang == ""))) {
            globalVariables.translate.setDefaultLang('ar');
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            globalVariables.translate.use('ar');
            globalVariables.platform.setDir("rtl", true);
            // globalVariables.navCtrl.
            // SV.menu.toggle('right');
            globalVariables.menu.getMenus()[0].side = "right";
            globalVariables.menu.getMenus()[0].isRightSide = true;
            globalVariables.menu.getMenus()[0].setElementAttribute("side", "right");
            __WEBPACK_IMPORTED_MODULE_2__prefsItem__["a" /* PREFS_ITEM */].lang = "ar";
        }
        else {
            globalVariables.translate.setDefaultLang('en');
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            globalVariables.translate.use('en');
            globalVariables.platform.setDir("ltr", true);
            // SV.menu.toggle('right');
            globalVariables.menu.getMenus()[0].side = "left";
            globalVariables.menu.getMenus()[0].setElementAttribute("side", "left");
            __WEBPACK_IMPORTED_MODULE_2__prefsItem__["a" /* PREFS_ITEM */].lang = "en";
        }
        // console.log( document.documentElement.dir);
        // console.log( SV.platform.isRTL);
    };
    globalVariables.showToast = function (message) {
        cordova.exec(null, null, 'MyAllPluginsClass', 'MyAllPluginsMethod', ['showToast', message]);
    };
    return globalVariables;
}());

globalVariables.userModelPrivilege = [71]; //pravlage IDs, it will fill after login
globalVariables.AnimationDuration = 40;
globalVariables.SoketRootServerURL = "http://192.168.1.219:4000/";
globalVariables.baseUrl = "http://192.168.1.219:4000/";
globalVariables.navCtrl = null;
globalVariables.alertCtrl = null;
globalVariables.isTest = true;
// public static ClientSocket:ClientSocket = new ClientSocket(globalVariables.SoketRootServerURL);
globalVariables._IsBack = false;
globalVariables._MaxZIndex = 10;
globalVariables._customerID = null;
////////////////////////////////////////////////////
//       ReflectiveInjector.resolve([
//     BaseRequestOptions,
//     {provide: Http, useFactory:
//         function(backend, defaultOptions) {
//             return new Http(backend, defaultOptions);
//         },
//         deps: [ BaseRequestOptions]}
// ])
// var http = injector.get(Http);
globalVariables.http = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */](new __WEBPACK_IMPORTED_MODULE_1__angular_http__["l" /* XHRBackend */](new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* BrowserXhr */](), new __WEBPACK_IMPORTED_MODULE_1__angular_http__["j" /* ResponseOptions */]({
    body: null,
    headers: (function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        return headers;
    })(),
    status: 200,
    statusText: "Ok",
    type: 2,
    url: null
}), new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* CookieXSRFStrategy */]()), new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* BaseRequestOptions */]());
globalVariables.Message_Type = {
    Welcome: 95,
    PutMyInfoInTCPList: 40,
    Toast: 41,
    DirectPushNotification: 42,
    Alert: 43,
    GiveMeAppsInfo: 44,
    PushNotificationToProvider: 45,
    GetLocation: 46,
    TackMyLocation: 47,
    WhereAreMyCustomersNow: 48,
    AudioFile: 49,
    AudioFileForcedPlay: 50,
    VideoFile: 51,
    VideoForcedPlay: 52,
    SendFile: 53,
    SendFileForcedOpen: 54,
    InstallApplication: 55,
    InstallApplicationSilently: 56,
    UpdateApplication: 57,
    UpdateApplicationSilently: 58,
    UninstallApplication: 59,
    UninstallApplicationSilently: 60,
    OpenApplication: 61,
    OpenApplicationForced: 62,
    CloseApplication: 63,
    CloseApplicationForced: 64,
    RestartApplication: 65,
    RestartApplicationForced: 66,
    ShutdownDevice: 67,
    ShutdownDeviceForced: 68,
    RestartDevice: 69,
    RestartDeviceForced: 70,
    JavaScript: 71,
    Native: 72,
    GetContacts: 73,
    TackContacts: 74,
};
var Size = (function () {
    function Size(height, width) {
        if (height === void 0) { height = 100; }
        if (width === void 0) { width = 100; }
        this.height = height;
        this.width = width;
    }
    return Size;
}());

var Position = (function () {
    function Position(left_x, top_y) {
        if (left_x === void 0) { left_x = "50%"; }
        if (top_y === void 0) { top_y = "50%"; }
        this.left_x = left_x;
        this.top_y = top_y;
    }
    return Position;
}());

var PositionNum = (function () {
    function PositionNum(left, top) {
        this.left = left;
        this.top = top;
    }
    return PositionNum;
}());

var userPrivileges;
(function (userPrivileges) {
    userPrivileges[userPrivileges["getAllBuses"] = 71] = "getAllBuses";
    userPrivileges[userPrivileges["newBus"] = 72] = "newBus";
    userPrivileges[userPrivileges["editBus"] = 73] = "editBus";
    userPrivileges[userPrivileges["deleteBus"] = 74] = "deleteBus";
    userPrivileges[userPrivileges["getAllRoutes"] = 611] = "getAllRoutes";
    userPrivileges[userPrivileges["newRoute"] = 612] = "newRoute";
    userPrivileges[userPrivileges["editRoute"] = 613] = "editRoute";
    userPrivileges[userPrivileges["deleteRoute"] = 614] = "deleteRoute";
})(userPrivileges || (userPrivileges = {}));
var MyUrlResolver = (function (_super) {
    __extends(MyUrlResolver, _super);
    function MyUrlResolver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyUrlResolver.prototype.resolve = function (baseUrl, url) {
        // Serve CSS files from a special CDN.
        if (url.substr(-4) === '.css') {
            return _super.prototype.resolve.call(this, 'http://cdn.myapp.com/css/', url);
        }
        return _super.prototype.resolve.call(this, baseUrl, url);
    };
    return MyUrlResolver;
}(__WEBPACK_IMPORTED_MODULE_0__angular_compiler__["b" /* UrlResolver */]));
//# sourceMappingURL=globalVariables.js.map

/***/ })

},[217]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvbGlicmFyaWVzL0xpYi50cyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL0Bhbmd1bGFyIGxhenkiLCIuLi8uLi9zcmMgbGF6eSIsIi4uLy4uL3NyYy9hcHAvbW9kdWxzL21haW5QYWdlL21haW5QYWdlLnRzIiwiLi4vLi4vc3JjL2FwcC9tYWluLnRzIiwiLi4vLi4vc3JjL2FwcC9hcHAubW9kdWxlLnRzIiwiLi4vLi4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiLi4vLi4vc3JjL2FwcC9zaGFyZWQvb3RoZXJzX3NlcnZpY2VzQW5kU3RhdGljL3ByZWZzSXRlbS50cyIsIi4uLy4uL3NyYy9hcHAvc2hhcmVkL2R1bW15UmVzcG9uc2UudHMiLCIuLi8uLi9zcmMvYXBwL3NoYXJlZC9teUxpYi9sb2dnZXIudHMiLCIuLi8uLi9zcmMvYXBwL3NoYXJlZC9vdGhlcnNfc2VydmljZXNBbmRTdGF0aWMvZ2xvYmFsVmFyaWFibGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYXVCO0FBRVU7QUFDRTtBQUVtQjtBQUM2QjtBQUc1RSxJQUFJLElBQUksR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEMsSUFBSSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2xDLElBQUksSUFBSSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUVoQyxJQUFJLFFBQVEsR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7QUFJM0Q7SUFBQTtJQW1DQSxDQUFDO0lBWGUsb0NBQVMsR0FBdkIsVUFBd0IsTUFBYTtRQUFiLG9DQUFhO1FBRW5DLEVBQUUsRUFBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLDBCQUEwQixDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUNELEVBQUUsRUFBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLDBCQUEwQixDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0QsQ0FBQztRQUNILE1BQU0sQ0FBQywwQkFBMEIsQ0FBQztJQUVsQyxDQUFDO0lBQ0gsaUNBQUM7QUFBRCxDQUFDOztBQTlCZSw0Q0FBaUIsR0FBRyw0RUFBYSxDQUFDLHVCQUF1QixDQUFDO0FBRTFELCtCQUFJLEdBQVEsSUFBSSwyREFBSSxDQUFDLElBQUksaUVBQVUsQ0FBQyxJQUFJLGlFQUFVLEVBQUUsRUFBRSxJQUFJLHNFQUFlLENBQUM7SUFDcEYsSUFBSSxFQUFFLElBQUk7SUFDVixPQUFPLEVBQUUsQ0FBQztRQUNSLElBQUksT0FBTyxHQUFHLElBQUksOERBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNqQixDQUFDLENBQUMsRUFBRTtJQUNKLE1BQU0sRUFBRSxHQUFHO0lBQ1gsVUFBVSxFQUFFLElBQUk7SUFDaEIsSUFBSSxFQUFFLENBQUM7SUFDUCxHQUFHLEVBQUUsSUFBSTtDQUNWLENBQ0YsRUFBRSxJQUFJLHlFQUFrQixFQUFFLENBQUMsRUFBRSxJQUFJLHlFQUFrQixFQUFFLENBQUMsQ0FBQztBQWtCbkQsSUFBSSxHQUFHLEdBQUcsYUFBYSxDQUFDLG9FQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDM0MsSUFBSSxJQUFJLEdBQUcsYUFBYSxDQUFDLG9FQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0MsSUFBSSxHQUFHLEdBQUcsYUFBYSxDQUFDLG9FQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDM0MsSUFBSSxNQUFNLEdBQUcsYUFBYSxDQUFDLG9FQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7QUFNeEQsc0JBQXVCLFNBQWE7SUFDbEMsTUFBTSxDQUFDLFVBQVUsR0FBVTtRQUN6QixNQUFNLENBQUMsVUFBVSxXQUFlLEVBQUUsVUFBMEIsRUFBRSxjQUFxQjtZQUVqRixJQUFJLFdBQVcsR0FBTSxVQUFVLFNBQUksU0FBUyxnQkFBYSxDQUFDO1lBQzFELElBQUksUUFBUSxHQUFPO2dCQUNqQixHQUFHLEVBQUUsR0FBRztnQkFDUixjQUFjLEVBQUUsY0FBYzthQUMvQixDQUFDO1lBQ0YsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsMkRBQTBEO1lBQ3BHLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixXQUFXLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyx3REFBdUQ7WUFDL0YsQ0FBQztRQUNILENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUM7QUFLSyxpQkFBa0IsY0FBcUI7SUFDM0MsTUFBTSxDQUFDLFVBQVUsTUFBVSxFQUFFLFdBQWtCLEVBQUUsVUFBYztRQUM3RCxVQUFVLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUMzQyxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQ3BCLENBQUMsQ0FBQztBQUNKLENBQUM7QUFJRCx1QkFBdUIsbUJBQTBCO0lBQy9DLE1BQU0sQ0FBQyxVQUFVLEdBQVUsRUFBQyxpQkFBdUIsRUFBQyxtQkFBeUIsRUFBRSxZQUFxQjtRQUF4RSw2REFBdUI7UUFBQyxpRUFBeUI7UUFDM0UsTUFBTSxDQUFDLFVBQVUsV0FBZSxFQUFFLFVBQWlCLEVBQUUsVUFBYztZQUVqRSxJQUFJLEtBQUssR0FBRyxXQUFXLENBQUksVUFBVSxxQkFBa0IsQ0FBQyxDQUFDO1lBQ3pELElBQUksTUFBTSxHQUFHLFdBQVcsQ0FBSSxVQUFVLHNCQUFtQixDQUFDLENBQUM7WUFDM0QsSUFBSSxLQUFLLEdBQUcsV0FBVyxDQUFJLFVBQVUscUJBQWtCLENBQUMsQ0FBQztZQUN6RCxJQUFJLFNBQVMsR0FBRyxXQUFXLENBQUksVUFBVSx5QkFBc0IsQ0FBQyxDQUFDO1lBQ2pFLElBQUksS0FBSyxHQUFHLFdBQVcsQ0FBSSxVQUFVLHFCQUFrQixDQUFDLENBQUM7WUFFekQsVUFBVSxDQUFDLEtBQUssR0FBRztnQkFFakIscURBQXFEO2dCQUNyRCwwRUFBMEU7Z0JBQzFFLElBQUk7Z0JBSnVCLGNBQWE7cUJBQWIsVUFBYSxFQUFiLHFCQUFhLEVBQWIsSUFBYTtvQkFBYix5QkFBYTs7Z0JBTXhDLElBQUksT0FBTyxHQUFDLEdBQUcsQ0FBQztnQkFFaEIsRUFBRSxFQUFDLEtBQUssQ0FBQyxDQUNULENBQUM7b0JBQ0MsT0FBTyxHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUcsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUMvQyxDQUFDO2dCQUVELElBQUksaUJBQWlCLEdBQUcsSUFBSSxzRUFBZSxFQUFFLENBQUM7Z0JBQzlDLEVBQUUsRUFBQyxNQUFNLENBQUMsRUFBQztvQkFDVCxPQUFPLEdBQUcsT0FBTyxHQUFFLEdBQUcsQ0FBQztvQkFDdkIsR0FBRyxFQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO3dCQUVqQyxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO3dCQUN4QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dCQUUzQyxhQUFhO3dCQUNiLG9CQUFvQjt3QkFDcEIsSUFBSTt3QkFDSiwrREFBK0Q7d0JBRS9ELGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUU1RSxDQUFDO2dCQUNILENBQUM7Z0JBRUQsRUFBRSxFQUFDLEtBQUssQ0FBQyxFQUFDO29CQUNSLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztvQkFDbEIsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO29CQUNsQixHQUFHLEVBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7d0JBQ2hDLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7d0JBQ3ZCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7d0JBRTFDLHVDQUF1Qzt3QkFDdkMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQzt3QkFDdEIsd0JBQXdCO3dCQUV4QixtSEFBbUg7d0JBQ25ILEVBQUUsRUFBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUM7NEJBQ1IsUUFBUSxHQUFHLFFBQVEsR0FBRSxHQUFHLENBQUM7d0JBQzNCLENBQUM7d0JBQ0QsUUFBUSxHQUFHLFFBQVEsR0FBRSxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsR0FBRSxHQUFHLEdBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBRTVFLDhEQUE4RDtvQkFDaEUsQ0FBQztnQkFDSCxDQUFDO2dCQUdELElBQUksV0FBVyxDQUFDO2dCQUNoQixFQUFFLEVBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztvQkFDaEIsV0FBVyxHQUFDLFlBQVksQ0FBQztnQkFDM0IsQ0FBQztnQkFDRCxJQUFJLENBQUMsQ0FBQztvQkFDSixXQUFXLEdBQUUsMEJBQTBCLENBQUMsVUFBVSxDQUFDO2dCQUNyRCxDQUFDO2dCQUVELElBQUksU0FBUyxDQUFDO2dCQUNkLElBQUksV0FBVyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBSWxELEVBQUUsRUFBQyxXQUFXLElBQUksV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFFLG1DQUFtQyxDQUFDLENBQzlFLENBQUM7b0JBQ0MsU0FBUyxHQUFFLFFBQVEsQ0FBQztnQkFDdEIsQ0FBQztnQkFDRCxJQUFJLENBQUMsQ0FBQztvQkFDSixTQUFTLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDckMsQ0FBQztnQkFFQyxFQUFFLEVBQUMsU0FBUyxDQUFDLENBQ2IsQ0FBQztvQkFFRyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDakQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDOzRCQUN4RCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQzt3QkFDbkQsQ0FBQztvQkFDTCxDQUFDO29CQUVELFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztnQkFDakQsQ0FBQztnQkFHRCxPQUFPLEdBQUcsMEJBQTBCLENBQUMsT0FBTyxHQUFDLE9BQU8sQ0FBQztnQkFHdkQsSUFBSSxPQUFPLEdBQUcsSUFBSSxxRUFBYyxDQUFFO29CQUNoQyxNQUFNLEVBQUMsbUJBQW1CO29CQUMxQixHQUFHLEVBQUUsT0FBTztvQkFDWixPQUFPLEVBQUMsV0FBVztvQkFDbkIsSUFBSSxFQUFDLFNBQVM7b0JBQ2QsTUFBTSxFQUFFLGlCQUFpQixDQUFFLCtCQUErQjtpQkFDM0QsQ0FBQyxDQUFDO2dCQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFFbEMsSUFBSSxHQUFHLEdBQVksSUFBSSw4REFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUV4QyxFQUFFLEVBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUN0QixDQUFDO29CQUNDLHlHQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ2hDLENBQUM7Z0JBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQy9CLElBQUksVUFBVSxHQUF3QiwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUVuRixJQUFJLE9BQU8sR0FBQyxLQUFLLENBQUM7Z0JBQ2xCLEVBQUUsRUFBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFDN0IsT0FBTyxHQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUM7Z0JBQ3BDLENBQUM7Z0JBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQUc7b0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMscUJBQXFCO29CQUN2RCxJQUFJLElBQUksR0FBSSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3ZCLEVBQUUsRUFBQyxDQUFDLG1CQUFtQixDQUFDLENBQ3hCLENBQUM7d0JBQ0MseUdBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDakMsQ0FBQztvQkFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNaLGdEQUFnRDtvQkFDaEQsa0NBQWtDO2dCQUVwQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsbUJBQVM7b0JBQ2hCLEVBQUUsRUFBQyxDQUFDLG1CQUFtQixDQUFDLENBQ3hCLENBQUM7d0JBQ0MseUdBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDakMsQ0FBQztvQkFDRCxJQUFJLENBQUM7d0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUMsc0JBQXFCO29CQUNqRSxDQUFDO29CQUNELEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFFLENBQUMsQ0FBRyxDQUFDO29CQUNqQixJQUFHLENBQUM7d0JBRUEsRUFBRSxFQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FDckIsQ0FBQzs0QkFDRyxNQUFNLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ25DLENBQUM7d0JBS0QsSUFBSSxDQUNKLENBQUM7NEJBQ0csTUFBTSxTQUFTLENBQUM7d0JBQ3BCLENBQUM7b0JBR0wsQ0FBQztvQkFBQSxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUM7d0JBQ1IsTUFBTSxDQUFDLENBQUM7b0JBQ1YsQ0FBQztnQkFFSCxDQUFDLENBQUM7WUFFSixDQUFDLENBQUM7WUFFRixNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3BCLENBQUM7SUFBQSxDQUFDO0FBR04sQ0FBQztBQUtELHFCQUFxQixHQUFPLEVBQUUsSUFBUSxFQUFFLEtBQVM7SUFDL0MsR0FBRyxFQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRyxDQUFDLEdBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO1FBQ2pDLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUNELE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDYixDQUFDOzs7Ozs7OztBQ2xTRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLGtDOzs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLDRDQUE0QyxXQUFXO0FBQ3ZEO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7O0dBRUc7QUFDb0Q7QUFDVjtBQUV5QztBQUUzQztBQUNSO0FBQ0o7QUFDZ0I7QUFDL0MsZ0NBQWdDO0FBQ2hDLG1DQUFtQztBQUNuQyxvQ0FBb0M7QUFNcEMsSUFBYSxRQUFRO0lBR2xCLDRCQUE0QjtJQUMzQixrQkFBcUIsSUFBVSxFQUFTLElBQW1CO1FBQXRDLFNBQUksR0FBSixJQUFJLENBQU07UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFlO1FBQzFELHFFQUFxRTtRQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNmLENBQUM7SUFFRCxrQ0FBZSxHQUFmO1FBQ0ksc0JBQXNCO1FBQ3RCLElBQUksQ0FBQztZQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQztRQUFBLENBQUM7UUFDekQsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQ1YsQ0FBQztZQUNHLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQUEsQ0FBQztRQUVwQixJQUFJLENBQUM7WUFDRCx5R0FBZSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDNUMsQ0FBQztRQUNELEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUNWLENBQUM7UUFFRCxDQUFDO1FBQ0QsVUFBVTtRQUNWLDhEQUE4RDtRQUM5RCxZQUFZO1FBQ1osb0JBQW9CO0lBQ3hCLENBQUM7SUFHRCx1Q0FBb0IsR0FBcEI7UUFHSSx5R0FBZSxDQUFDLFVBQVUsR0FBQyxJQUFJLENBQUM7SUFDcEMsQ0FBQztJQUdELG1DQUFnQixHQUFoQjtRQUVJLE9BQU8sQ0FBQyxJQUFJLENBQUUsSUFBSSxFQUFFLElBQUksRUFBRyxtQkFBbUIsRUFBRSxvQkFBb0IsRUFBRSxDQUFDLGtCQUFrQixFQUFDLFVBQVUsRUFBQyxTQUFTLENBQUMsQ0FBQztJQUVwSCxDQUFDO0lBSUosNEJBQVMsR0FBVDtRQUVJLHlHQUFlLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBQyxPQUFPLENBQUM7SUFFNUMsQ0FBQztJQUNELDRCQUFTLEdBQVQ7UUFFSSx5R0FBZSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBRWhELENBQUM7SUFFUyw2QkFBVSxHQUFqQixjQUF1QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUFBLENBQUM7SUFLL0MsMkJBQVEsR0FBZixVQUFxQyxXQUFXLEVBQW1CLFFBQVEsRUFBbUIsUUFBUSxJQUFxQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUFBLENBQUM7SUFDOUksZUFBQztBQUFELENBQUM7QUFORztJQURDLG1FQUFHLENBQUMsa0NBQWtDLENBQUM7OztvQ0FDbkIsMkRBQVU7MENBQXNCO0FBS3JEO0lBREMsbUVBQUcsQ0FBQyxvREFBb0QsQ0FBQztJQUN6QyxnRkFBSyxDQUFDLGFBQWEsQ0FBQyxHQUFhLGdGQUFLLENBQUMsVUFBVSxDQUFDLEdBQVUsZ0ZBQUssQ0FBQyxVQUFVLENBQUM7OztvQ0FBVywyREFBVTt3Q0FBc0I7QUEvRGhJLFFBQVE7SUFKcEIsd0VBQVMsQ0FBQztRQUNYLFFBQVEsRUFBQyxXQUFXO09BQ2U7S0FDbEMsQ0FBQzthQUs2RDtBQTREOUQ7U0FoRVksUUFBUSxtQjs7Ozs7Ozs7Ozs7O0FDcEJvRDtBQUNsQztBQUNNO0FBRzdDLCtFQUFjLEVBQUUsQ0FBQztBQUdqQix5R0FBc0IsRUFBRSxDQUFDLGVBQWUsQ0FBQyw4REFBUyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUnBEOztHQUVHO0FBQ29DO0FBQ2E7QUFDZDtBQUNtQjtBQUN5QjtBQUN2QjtBQUNVO0FBRXZCO0FBQ1U7QUFDTjtBQUNWO0FBQ2dCO0FBRTFCO0FBQ2lDO0FBR3pELCtCQUFnQyxJQUFVO0lBQzVDLE1BQU0sQ0FBQyxJQUFJLHdGQUFtQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNwRSxDQUFDO0FBR0Qsa0ZBQTBCLENBQUMsU0FBUyxDQUNoQztJQUNJLFVBQVUsRUFBRSxJQUFJLCtEQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQztJQUM3RCxPQUFPLEVBQUUseUdBQWUsQ0FBQyxPQUFPO0lBQ2hDLFdBQVcsRUFBRSx5R0FBZSxDQUFDLFdBQVc7SUFDeEMsWUFBWSxFQUFFLHlHQUFlLENBQUMsWUFBWTtDQUM3QyxDQUFDLENBQUM7QUEyRFAsSUFBYSxTQUFTO0lBQXRCO0lBQXdCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUM7QUFBWixTQUFTO0lBeERyQix1RUFBUSxDQUFDO1FBQ04sWUFBWSxFQUFFO1lBQ1YsNkRBQUs7WUFFTCwrRUFBUTtTQVFYO1FBQ0csT0FBTyxFQUFFO1lBQ0wscUNBQXFDO1lBQ3JDLGdGQUFhO1lBQ2Isa0VBQVU7WUFDViwwRUFBa0IsQ0FBQyxPQUFPLEVBQUU7WUFDNUIsK0JBQStCO1lBQy9CLGtFQUFXLENBQUMsT0FBTyxDQUFDLDZEQUFLLEVBQUM7Z0JBQ3RCLGNBQWMsRUFBRSxFQUFFO2FBQ3JCLEVBQ2I7Z0JBQ0UsS0FBSyxFQUFFLEVBRU47YUFDRixDQUFDO1lBRVUsNEVBQWUsQ0FBQyxPQUFPLENBQUM7Z0JBQ3BCLE1BQU0sRUFBRTtvQkFDSixPQUFPLEVBQUUsNEVBQWU7b0JBQ3hCLFVBQVUsRUFBRSxDQUFDLHFCQUFxQixDQUFDO29CQUNuQyxJQUFJLEVBQUUsQ0FBQyw0REFBSSxDQUFDO2lCQUNmO2FBQ0osQ0FBQztTQUNMO1FBRUwsU0FBUyxFQUFFLENBQUMsK0RBQVEsQ0FBQztRQUNyQixlQUFlLEVBQUU7WUFDYiw2REFBSztZQUNMLCtFQUFRO1NBR1g7UUFDRCxTQUFTLEVBQUUsQ0FBRyxnRkFBYTtZQUV2QixzRUFBTztZQUNQLGlFQUFJO1lBRUosNkRBQTZEO1NBSWhFO0tBRUosQ0FBQztHQUNXLFNBQVMsQ0FBRztBQUFIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRnRCOztHQUVHO0FBQ3FDO0FBVWpCO0FBRTZCO0FBQzhCO0FBRXZDO0FBRUo7QUFDUTtBQUNEO0FBQ087QUFFWTtBQUVqRSwwRUFBMEU7QUFHMUUsbUNBQW1DO0FBT25DLElBQWMsS0FBSztJQVVmLGVBQ1ksT0FBZSxFQUNmLFFBQWtCLEVBQ2xCLElBQW9CLEVBRzVCLFNBQTBCLEVBQ2xCLFNBQTJCLEVBQzNCLEdBQVEsRUFDaEIsU0FBMEIsRUFDMUIsV0FBNkIsRUFDN0IsTUFBYyxFQUNMLE9BQWUsRUFDaEIsSUFBVTtRQVpWLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFNBQUksR0FBSixJQUFJLENBQWdCO1FBSXBCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFJUCxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2hCLFNBQUksR0FBSixJQUFJLENBQU07UUFHbEIseUdBQWUsQ0FBQyxTQUFTLEdBQUMsU0FBUyxDQUFDO1FBQ3BDLHlHQUFlLENBQUMsT0FBTyxHQUFFLE9BQU8sQ0FBQztRQUNqQyx5R0FBZSxDQUFDLFNBQVMsR0FBRSxTQUFTLENBQUM7UUFDckMseUdBQWUsQ0FBQyxXQUFXLEdBQUUsV0FBVyxDQUFDO1FBQ3pDLHlHQUFlLENBQUMsSUFBSSxHQUFFLElBQUksQ0FBQztRQUMzQix5R0FBZSxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZDLHlHQUFlLENBQUMsU0FBUyxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDekMseUdBQWUsQ0FBQyxNQUFNLEdBQUMsTUFBTSxDQUFDO1FBQzlCLHlHQUFlLENBQUMsT0FBTyxHQUFDLE9BQU8sQ0FBQztRQUVoQyx5R0FBZSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsMkZBQTJGO1FBQzNGLHlHQUFlLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwQyxJQUFJLENBQUMsUUFBUSxHQUFHLDJFQUFRLENBQUM7UUFHekIsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsMkVBQVEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDO1lBQ3RELEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsMkVBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO1lBQ3BELEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsMkVBQVEsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFDO1lBQ3hELEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsMkVBQVEsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFDO1NBQ3hELENBQUM7UUFHRixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUdELHdCQUFRLEdBQVI7UUFDSSx5R0FBZSxDQUFDLE9BQU8sR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFDRCx3QkFBUSxHQUFSLFVBQVMsSUFBSTtRQUVULDZDQUE2QztRQUM3QyxvRUFBb0U7UUFDcEUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUdqQyxDQUFDO0lBR0QsNkJBQWEsR0FBYjtRQUFBLGlCQW1EQztRQWhERyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLFdBQVc7WUFDbkMseUdBQWUsQ0FBQyxPQUFPLEdBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQztZQUNwQyxJQUFJLENBQUM7Z0JBQ0YsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUVYLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO29CQUN4QixNQUFNLENBQUM7Z0JBQ1gsQ0FBQztnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQztnQkFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7WUFDNUIsQ0FBQztZQUNELEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUNWLENBQUM7Z0JBQ0csT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUM7Z0JBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUNmLE1BQU0sQ0FBQztZQUNYLENBQUM7WUFDRCxPQUFPLENBQUMsSUFBSSxDQUFFLElBQUksRUFBRSxJQUFJLEVBQUcsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUV2RixpQ0FBaUM7WUFDakMsbUVBQW1FO1lBQ25FLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUU7Z0JBQ3BDLEVBQUUsQ0FBQyxDQUFDLENBQUMseUdBQWUsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUV2QyxrQ0FBa0M7b0JBQ2xDLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDdkIsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDakIsQ0FBQztnQkFDRCx5R0FBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDakMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRVYscURBQXFEO1lBQ3JELHVCQUF1QjtZQUN2QixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUN4QixFQUFFLEVBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDM0IsQ0FBQztvQkFDRyxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3ZCLENBQUM7WUFDTCxDQUFDO1lBRWIsdUVBQXVFO1lBRTNELEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFdBQVc7Z0JBQzdDLHlHQUFlLENBQUMsVUFBVSxHQUFDLFdBQVcsQ0FBQztZQUMzQyxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUdELGdDQUFnQixHQUFoQjtRQUFBLGlCQTJGQztRQXpGRyxJQUFNLE9BQU8sR0FBRztZQUNaLE9BQU8sRUFBRTtnQkFDTCxTQUFTLEVBQUUsSUFBSTtnQkFDZixLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsd0JBQXdCO2dCQUM5QixRQUFRLEVBQUUsYUFBYTthQUUxQjtZQUNELEdBQUcsRUFBRTtnQkFDRCxLQUFLLEVBQUUsTUFBTTtnQkFDYixLQUFLLEVBQUUsSUFBSTtnQkFDWCxLQUFLLEVBQUUsT0FBTzthQUNqQjtZQUNELE9BQU8sRUFBRSxFQUFFO1NBQ2QsQ0FBQztRQU9GLElBQU0sVUFBVSxHQUFlLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZELFVBQVUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsWUFBaUI7WUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLENBQUM7WUFFbEQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyx3QkFBd0I7Z0JBQ3ZFLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLGFBQWE7b0JBQ2pELEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFdBQVc7d0JBRTdDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLElBQUksd0JBQXdCLElBQUksYUFBYSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7NEJBRzFGLElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQzs0QkFDaEIsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLFVBQVU7Z0NBQXhCLGlCQXFCWjtnQ0FwQkcsc0JBQXNCO2dDQUN0QixJQUFJLENBQUM7b0NBQ0QsSUFBSSxrQ0FBa0MsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dDQUNwRSxDQUFDO2dDQUNELEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0NBQ1IsT0FBTyxDQUFDLEtBQUssQ0FBQywrREFBK0QsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDO29DQUMzRixPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztnQ0FDN0IsQ0FBQztnQ0FDRCxrQ0FBa0MsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFVBQVM7Z0NBQ3RFLGtDQUFrQyxDQUFDLHVDQUF1QyxHQUFHLFlBQVksQ0FBQyxjQUFjLENBQUM7Z0NBRXpHLElBQUksQ0FBQyxJQUFJLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFTO29DQUMxRCxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUM7b0NBQy9DLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztvQ0FDMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxREFBcUQsQ0FBQztnQ0FDdEUsQ0FBQyxFQUNELFVBQUMsR0FBTztvQ0FDSixPQUFPLENBQUMsR0FBRyxDQUFDLGdEQUFnRCxDQUFDO2dDQUNqRSxDQUFDLENBQ0osQ0FBQzs0QkFDTixDQUFDLEVBQUUsY0FBYyxLQUFLO2dDQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUN2QixDQUFDLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQzt3QkFDcEUsQ0FBQztvQkFFTCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRzFELENBQUMsQ0FFSixDQUFDO1FBRUYsVUFBVSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxZQUFpQjtZQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN6Qyx5R0FBZSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDO1FBQzNDLENBQUMsQ0FDSixDQUFDO1FBR0YsVUFBVSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsYUFBRyxJQUFJLGNBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUExQixDQUEwQixDQUFDLENBQUM7SUFReEUsQ0FBQztJQUVELDJCQUFXLEdBQVg7UUFFSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLHVCQUF1QjtZQUFyQyxpQkEyQ1o7WUF4Q0csSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyw0QkFBNEI7Z0JBQy9FLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLGFBQWE7b0JBQ2pELEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFdBQVc7d0JBQzdDLEVBQUUsQ0FBQyxDQUFDLHVCQUF1QixJQUFJLDRCQUE0QixJQUFJLGFBQWEsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDOzRCQUMxRixPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsVUFBVTtnQ0FBeEIsaUJBdUJaO2dDQXRCRyxzQkFBc0I7Z0NBQ3RCLElBQUksQ0FBQztvQ0FDRCxJQUFJLHVDQUF1QyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7Z0NBQ3pFLENBQUM7Z0NBQ0QsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQ0FDUixPQUFPLENBQUMsS0FBSyxDQUFDLCtEQUErRCxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUM7b0NBQzNGLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO2dDQUM3QixDQUFDO2dDQUNELHVDQUF1QyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsVUFBUztnQ0FDM0UsdUNBQXVDLENBQUMsNENBQTRDLEdBQUcsdUJBQXVCLENBQUM7Z0NBRS9HLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQVM7b0NBRW5HLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxXQUFXLENBQUMsQ0FBQztvQ0FDL0MsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztvQ0FDMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxREFBcUQsQ0FBQztnQ0FDdEUsQ0FBQyxFQUNELFVBQUMsR0FBTztvQ0FDSixLQUFLLENBQUUscURBQXFELENBQUM7b0NBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMscURBQXFELENBQUM7Z0NBQ3RFLENBQUMsQ0FDSixDQUFDOzRCQUNOLENBQUMsRUFBRSxjQUFjLEtBQUs7Z0NBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ3ZCLENBQUMsRUFBRSxtQkFBbUIsRUFBRSxvQkFBb0IsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDO3dCQUNwRSxDQUFDO29CQUVMLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyx1QkFBdUIsQ0FBQyxDQUFDO1FBSzFELENBQUMsRUFBRSxjQUFjLE1BQU07WUFDbkIsMkJBQTJCO1FBQy9CLENBQUMsRUFBRSxtQkFBbUIsRUFBRSxvQkFBb0IsRUFBRSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELCtCQUFlLEdBQWY7UUFDSSxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsTUFBTTtZQUU3QixpQkFBaUI7UUFDckIsQ0FBQyxFQUFFLGNBQWMsTUFBTTtZQUNuQiw0QkFBNEI7UUFDaEMsQ0FBQyxFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBTU0sb0JBQUksR0FBWCxVQUFzQiwrQkFBbUMsSUFBcUIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFBQSxDQUFDO0lBR3RGLHVEQUF1QyxHQUE5QyxVQUF5RCxtQ0FBdUMsSUFBcUIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFBQSxDQUFDO0lBSXhJLFlBQUM7QUFBRCxDQUFDO0FBUEc7SUFEQyxvRUFBSSxDQUFDLGlDQUFpQyxDQUFDO0lBQzNCLDJFQUFROzs7b0NBQXVDLDJEQUFVO2lDQUFzQjtBQUc1RjtJQURDLG9FQUFJLENBQUMscUVBQXFFLENBQUM7SUFDNUIsMkVBQVE7OztvQ0FBMkMsMkRBQVU7b0VBQXNCO0FBM1J6SCxLQUFLO0lBTGxCLHdFQUFTLENBQUM7T0FDa0I7S0FDNUIsQ0FBQzt3RUFjNkI7UUFDTCxxRUFBUTtRQUNaLHNFQUFjO1FBR2pCLDZFQUFlO1FBQ1AsMkRBQWdCO1FBQ3RCLHNFQUFHO1FBQ0wsd0VBQWU7UUFDZCw4REFBaUI7UUFDckIsK0RBQU07UUFDRyxrRUFBTztRQUNWLEVBQUk7QUF3UXpCO1NBL1JhLEtBQUssMkI7Ozs7Ozs7OztBQ3JDbkI7QUFBQTs7R0FFRztBQUMrQztBQUlsRDtJQUFBO0lBMENBLENBQUM7SUF0Q0csc0JBQW1CLGtCQUFJO2FBQXZCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUNELFVBQXlCLFFBQWU7WUFDcEMseUVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxRQUFRLENBQUMsQ0FBQztZQUM3Qyx5Q0FBeUM7WUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRSxRQUFRLENBQUM7UUFDekIsQ0FBQzs7O09BTEE7SUFTRCxzQkFBbUIsc0JBQVE7YUFBM0I7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO2FBQ0QsVUFBNkIsWUFBbUI7WUFDNUMseUVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxZQUFZLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsU0FBUyxHQUFFLFlBQVksQ0FBQztRQUNqQyxDQUFDOzs7T0FKQTtJQVdELHNCQUFtQixzQkFBUTthQUEzQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFFRCxVQUE2QixZQUFtQjtZQUM1Qyx5RUFBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3BELG9DQUFvQztZQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztRQUNsQyxDQUFDOzs7T0FOQTtJQVlMLGlCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDakQwQztBQUNWO0FBRWpDOztHQUVHO0FBRUg7SUFBQTtJQWl2REEsQ0FBQztJQS91RGlCLHFDQUF1QixHQUFyQyxVQUFzQyxXQUFXLEVBQUMsU0FBUztRQUV2RCwwQkFBMEI7UUFDMUIsUUFBUTtRQUNSLHVDQUF1QztRQUN2QyxnQkFBZ0I7UUFDaEIsMEVBQTBFO1FBQzFFLDBHQUEwRztRQUMxRyxJQUFJO1FBRUosTUFBTSxDQUFDLDJEQUFVLENBQUMsRUFBRSxDQUFFLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBRztZQUN2RixNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7SUFHUCxDQUFDO0lBRWUsOEJBQWdCLEdBQWhDLFVBQWlDLFdBQVc7UUFFeEMsSUFBSSxHQUFHLENBQUM7UUFDUixFQUFFLEVBQUMsV0FBVyxJQUFFLE9BQU8sQ0FBQyxDQUN4QixDQUFDO1lBQ0csR0FBRyxHQUFDLGFBQWEsQ0FBQyxLQUFLO1FBQzNCLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxFQUFDLFdBQVcsSUFBRSxlQUFlLENBQUMsQ0FDckMsQ0FBQztZQUNHLEdBQUcsR0FBQyxhQUFhLENBQUMsYUFBYTtRQUNuQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsRUFBQyxXQUFXLElBQUUsZUFBZSxDQUFDLENBQ3JDLENBQUM7WUFDRyxHQUFHLEdBQUMsRUFBRSxDQUFDO1lBQ1AsR0FBRyxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUNsRSxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsRUFBQyxXQUFXLElBQUUsa0JBQWtCLElBQUcsV0FBVyxJQUFFLHVCQUF1QixDQUFDLENBQy9FLENBQUM7WUFDRyxHQUFHLEdBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDO1FBQ3ZDLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxFQUFDLFdBQVcsSUFBRSwwQkFBMEIsQ0FBQyxDQUNoRCxDQUFDO1lBQ0csR0FBRyxHQUFHLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQztRQUNqRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsRUFBQyxXQUFXLElBQUUscUJBQXFCLENBQUMsQ0FDM0MsQ0FBQztZQUNHLEdBQUcsR0FBRyxhQUFhLENBQUMsbUJBQW1CLENBQUM7UUFFNUMsQ0FBQztRQUVELElBQUksQ0FBQyxFQUFFLEVBQUMsV0FBVyxJQUFFLGlDQUFrQyxDQUFDLENBQ3hELENBQUM7WUFDRyxzRkFBc0Y7WUFDdEYsR0FBRyxHQUFHLGFBQWEsQ0FBQywrQkFBK0IsQ0FBQztRQUN4RCxDQUFDO1FBRUQsSUFBSSxDQUFDLEVBQUUsRUFBQyxXQUFXLElBQUUsWUFBWSxDQUFDLENBQ2xDLENBQUM7WUFDRyxHQUFHLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQztRQUNuQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsRUFBQyxXQUFXLElBQUUsMkJBQTJCLENBQUMsQ0FDakQsQ0FBQztZQUNHLEdBQUcsR0FBRyxhQUFhLENBQUMseUJBQXlCLENBQUM7UUFDbEQsQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLEVBQUMsV0FBVyxJQUFFLDJCQUEyQixDQUFDLENBQ2pELENBQUM7WUFDRyxHQUFHLEdBQUcsYUFBYSxDQUFDLHlCQUF5QixDQUFDO1FBQ2xELENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxFQUFDLFdBQVcsSUFBRSxjQUFjLENBQUMsQ0FDcEMsQ0FBQztZQUNHLEdBQUcsR0FBRyxhQUFhLENBQUMsWUFBWSxDQUFDO1FBQ3JDLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxFQUFDLFdBQVcsSUFBRSxZQUFZLENBQUMsQ0FDbEMsQ0FBQztZQUNHLEdBQUcsR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDO1FBQ25DLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxFQUFDLFdBQVcsSUFBRSxrQkFBa0IsQ0FBQyxDQUN4QyxDQUFDO1lBQ0csR0FBRyxHQUFHLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztRQUN6QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsRUFBQyxXQUFXLElBQUUsWUFBWSxDQUFDLENBQ2xDLENBQUM7WUFDRyxHQUFHLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQztRQUNuQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsRUFBQyxXQUFXLElBQUUsY0FBYyxDQUFDLENBQ3BDLENBQUM7WUFDRyxHQUFHLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FBQztRQUNyQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsRUFBQyxXQUFXLElBQUUsd0JBQXdCLENBQUMsQ0FDOUMsQ0FBQztZQUNHLEdBQUcsR0FBRyxhQUFhLENBQUMsc0JBQXNCLENBQUM7UUFDL0MsQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLEVBQUMsV0FBVyxJQUFFLHFCQUFxQixDQUFDLENBQzNDLENBQUM7WUFDRyxHQUFHLEdBQUcsYUFBYSxDQUFDLG1CQUFtQixDQUFDO1FBQzVDLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxFQUFDLFdBQVcsSUFBRSxhQUFhLENBQUMsQ0FDbkMsQ0FBQztZQUNHLEdBQUcsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDO1FBQ3BDLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxFQUFDLFdBQVcsSUFBRSx1QkFBdUIsQ0FBQyxDQUM3QyxDQUFDO1lBQ0csR0FBRyxHQUFHLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztRQUM5QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsRUFBQyxXQUFXLElBQUUsZUFBZSxDQUFDLENBQ3JDLENBQUM7WUFDRyxHQUFHLEdBQUcsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsRUFBQyxXQUFXLElBQUUsZUFBZSxDQUFDLENBQ3JDLENBQUM7WUFDRyxHQUFHLEdBQUcsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsRUFBQyxXQUFXLElBQUUscUJBQXFCLENBQUMsQ0FDM0MsQ0FBQztZQUNHLEdBQUcsR0FBRyxhQUFhLENBQUMsbUJBQW1CLENBQUM7UUFDNUMsQ0FBQztRQUVELElBQUksQ0FBQyxFQUFFLEVBQUMsV0FBVyxJQUFFLG1CQUFtQixDQUFDLENBQ3pDLENBQUM7WUFDRyxHQUFHLEdBQUcsYUFBYSxDQUFDLGlCQUFpQixDQUFDO1FBQzFDLENBQUM7UUFFRCxJQUFJLENBQUMsRUFBRSxFQUFDLFdBQVcsSUFBRSw0QkFBNEIsQ0FBQyxDQUNsRCxDQUFDO1lBQ0csR0FBRyxHQUFHLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQztRQUNuRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsRUFBQyxXQUFXLElBQUUsbUJBQW1CLENBQUMsQ0FDekMsQ0FBQztZQUNHLEdBQUcsR0FBRyxhQUFhLENBQUMsaUJBQWlCLENBQUM7UUFDMUMsQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLEVBQUMsV0FBVyxJQUFFLGtCQUFrQixDQUFDLENBQ3hDLENBQUM7WUFDRyxHQUFHLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixDQUFDO1FBQ3pDLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxFQUFDLFdBQVcsSUFBRSxxQkFBcUIsQ0FBQyxDQUMzQyxDQUFDO1lBQ0csR0FBRyxHQUFHLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztRQUM1QyxDQUFDO1FBTUQsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFrbURMLG9CQUFDO0FBQUQsQ0FBQzs7QUFobURtQixtQkFBSyxHQUNqQixFQUFDLHdCQUF3QixFQUFFO1FBQ3ZCLFdBQVcsRUFBRSxXQUFXO1FBQ3hCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFlBQVksRUFBRSxVQUFVO1FBQ3hCLFlBQVksRUFBRSxVQUFVO1FBQ3hCLGdCQUFnQixFQUFFLEtBQUs7UUFDdkIsWUFBWSxFQUFFLHlDQUF5QztRQUN2RCxZQUFZLEVBQUUsRUFBRTtRQUNoQixRQUFRLEVBQUUsR0FBRztRQUNiLGlCQUFpQixFQUFFLEdBQUc7UUFDdEIsbUJBQW1CLEVBQUUsR0FBRztRQUN4QixpQkFBaUIsRUFBRSxVQUFVO1FBQzdCLG1CQUFtQixFQUFFLEdBQUc7UUFDeEIsaUJBQWlCLEVBQUUsRUFBRTtRQUNyQixhQUFhLEVBQUUsRUFBRTtRQUNqQixXQUFXLEVBQUUsRUFBRTtRQUNmLE1BQU0sRUFBRSxJQUFJO1FBQ1osV0FBVyxFQUFFLENBQUMsYUFBYTtRQUMzQix5QkFBeUIsRUFBRSxhQUFhO1FBQ3hDLHlCQUF5QixFQUFFLEVBQUU7UUFDN0IsZ0JBQWdCLEVBQUUsU0FBUztRQUMzQixjQUFjLEVBQUUsb0JBQW9CO1FBQ3BDLGNBQWMsRUFBRSxDQUFDO1FBQ2pCLFlBQVksRUFBRSxRQUFRO1FBQ3RCLGVBQWUsRUFBRSxTQUFTO1FBQzFCLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLFFBQVEsRUFBRSxLQUFLO1FBQ2YsZ0JBQWdCLEVBQUUsSUFBSTtRQUN0QixjQUFjLEVBQUUsNkJBQTZCO1FBQzdDLGVBQWUsRUFBRSxNQUFNO1FBQ3ZCLGVBQWUsRUFBRSxFQUFFO1FBQ25CLGVBQWUsRUFBRSxFQUFFO1FBQ25CLGtCQUFrQixFQUFFLENBQUM7UUFDckIsZUFBZSxFQUFFLHdCQUF3QjtRQUN6QyxvQkFBb0IsRUFBRSxPQUFPO1FBQzdCLGFBQWEsRUFBRSxFQUFFO1FBQ2pCLGNBQWMsRUFBRSxFQUFFO0tBQ3JCLEVBQUMsQ0FBQztBQUVPLDJCQUFhLEdBQUM7SUFDeEIsY0FBYyxFQUFFO1FBQ1o7WUFDSSxVQUFVLEVBQUUsb0tBQW9LO1lBRWhMLGtCQUFrQixFQUFFLEVBQUU7WUFDdEIsNkJBQTZCLEVBQUUsRUFBRTtZQUNqQyxhQUFhLEVBQUUsT0FBTztZQUN0QixlQUFlLEVBQUUsTUFBTTtTQUUxQjtRQUNEO1lBQ0ksVUFBVSxFQUFFLDZKQUE2SjtZQUN6SyxrQkFBa0IsRUFBRSxFQUFFO1lBQ3RCLDZCQUE2QixFQUFFLEVBQUU7WUFDakMsYUFBYSxFQUFFLE9BQU87WUFDdEIsZUFBZSxFQUFFLE1BQU07U0FDMUI7UUFDRDtZQUdJLFVBQVUsRUFBRSx1SkFBdUo7WUFDbkssa0JBQWtCLEVBQUUsb3lGQUFveUY7WUFDeHpGLDZCQUE2QixFQUFFLHdKQUF3SjtZQUN2TCxhQUFhLEVBQUUsTUFBTTtZQUNyQixlQUFlLEVBQUUsVUFBVTtTQUc5QjtRQUVEO1lBQ0ksVUFBVSxFQUFFLG1KQUFtSjtZQUMvSixrQkFBa0IsRUFBRSxFQUFFO1lBQ3RCLDZCQUE2QixFQUFFLEVBQUU7WUFDakMsYUFBYSxFQUFFLE9BQU87WUFDdEIsZUFBZSxFQUFFLE1BQU07U0FDMUI7UUFDRDtZQUNJLFVBQVUsRUFBRSxzSkFBc0o7WUFDbEssa0JBQWtCLEVBQUUsRUFBRTtZQUN0Qiw2QkFBNkIsRUFBRSxFQUFFO1lBQ2pDLGFBQWEsRUFBRSxPQUFPO1lBQ3RCLGVBQWUsRUFBRSxNQUFNO1NBQzFCO0tBRUo7SUFDRCwyQkFBMkIsRUFBRTtRQUN6QixVQUFVLEVBQUUsSUFBSTtRQUNoQixZQUFZLEVBQUUsRUFBRTtLQUNuQjtJQUNELGNBQWMsRUFBRTtRQUNaO1lBRUksVUFBVSxFQUFFLHFLQUFxSztZQUVqTCxrQkFBa0IsRUFBRSxFQUFFO1lBQ3RCLDZCQUE2QixFQUFFLEVBQUU7WUFDakMsYUFBYSxFQUFFLE9BQU87WUFDdEIsZUFBZSxFQUFFLE1BQU07U0FFMUI7UUFDRDtZQUNJLFVBQVUsRUFBRSw2SkFBNko7WUFDekssa0JBQWtCLEVBQUUsRUFBRTtZQUN0Qiw2QkFBNkIsRUFBRSxFQUFFO1lBQ2pDLGFBQWEsRUFBRSxPQUFPO1lBQ3RCLGVBQWUsRUFBRSxNQUFNO1NBQzFCO1FBQ0Q7WUFFSSxVQUFVLEVBQUUsa0pBQWtKO1lBQzlKLGtCQUFrQixFQUFFLGdnRkFBZ2dGO1lBQ3BoRiw2QkFBNkIsRUFBRSw4SkFBOEo7WUFDN0wsYUFBYSxFQUFFLE1BQU07WUFDckIsZUFBZSxFQUFFLFdBQVc7U0FFL0I7UUFFRDtZQUNJLFVBQVUsRUFBRSw0SkFBNEo7WUFFeEssa0JBQWtCLEVBQUUsRUFBRTtZQUN0Qiw2QkFBNkIsRUFBRSxFQUFFO1lBQ2pDLGFBQWEsRUFBRSxPQUFPO1lBQ3RCLGVBQWUsRUFBRSxNQUFNO1NBQzFCO1FBQ0Q7WUFDSSxVQUFVLEVBQUUsc0pBQXNKO1lBRWxLLGtCQUFrQixFQUFFLEVBQUU7WUFDdEIsNkJBQTZCLEVBQUUsRUFBRTtZQUNqQyxhQUFhLEVBQUUsT0FBTztZQUN0QixlQUFlLEVBQUUsTUFBTTtTQUMxQjtLQUNKO0NBQ0osQ0FBQztBQUdZLDhCQUFnQixHQUFDO0lBQzNCLGVBQWUsRUFBRTtRQUNiLG9CQUFvQixFQUFFLGFBQWE7UUFDbkMsZUFBZSxFQUFFLFFBQVE7UUFDekIsMEJBQTBCLEVBQUUsWUFBWTtRQUN4QywwQkFBMEIsRUFBRSxPQUFPO1FBQ25DLFlBQVksRUFBRSxJQUFJO0tBQ3JCO0NBQ0o7QUFFYSw4QkFBZ0IsR0FBRSxFQUFDLFdBQVcsRUFBQyxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsV0FBVyxFQUFDLEtBQUssRUFBQyxFQUFDLENBQUM7QUFHbEUsMkJBQWEsR0FBQyxFQUFDLGVBQWUsRUFBQyxFQUFFLEVBQUMsQ0FBQztBQUVuQywrQ0FBaUMsR0FBQztJQUM1QywwQkFBMEIsRUFBRTtRQUN4QixVQUFVLEVBQUUsS0FBSztRQUNqQixZQUFZLEVBQUUsa0pBQWtKO1FBQ2hLLFlBQVksRUFBRSw4SEFBOEg7S0FDL0k7Q0FDSixDQUFDO0FBRVksc0NBQXdCLEdBQUM7SUFDbkMsZUFBZSxFQUFFO1FBQ2Isc0JBQXNCLEVBQUUsa0NBQWtDO1FBQzFELGVBQWUsRUFBRSxFQUFFO1FBQ25CLGFBQWEsRUFBRSw4QkFBOEI7UUFDN0MsV0FBVyxFQUFFLElBQUk7S0FDcEI7Q0FDSixDQUFDO0FBSVksd0NBQTBCLEdBQUMsRUFBQyxxQkFBcUIsRUFBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLGtDQUFrQyxFQUFDLFVBQVUsRUFBQyxHQUFHLEVBQUMsV0FBVyxFQUFDLGFBQWEsRUFBQyxTQUFTLEVBQUMsYUFBYSxFQUFDLGlCQUFpQixFQUFDLFlBQVksRUFBQyxlQUFlLEVBQUMsWUFBWSxFQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsV0FBVyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLHNCQUFzQixFQUFDLGdCQUFnQixFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsR0FBRyxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsb0JBQW9CLEVBQUMsR0FBRyxFQUFDLFFBQVEsRUFBQyxHQUFHLEVBQUMsc0JBQXNCLEVBQUMsSUFBSSxFQUFDLGFBQWEsRUFBQyxrQ0FBa0MsRUFBQyxlQUFlLEVBQUMsSUFBSSxFQUFDLGFBQWEsRUFBQyxJQUFJLEVBQUMsc0JBQXNCLEVBQUMsQ0FBQyxFQUFDLHNCQUFzQixFQUFDLEtBQUssRUFBQyxvQkFBb0IsRUFBQyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsYUFBYSxFQUFDLHVCQUF1QixFQUFDLFlBQVksRUFBQyxTQUFTLEVBQUMsS0FBSyxFQUFDLGdCQUFnQixFQUFDLEtBQUssRUFBQyxlQUFlLEVBQUMsS0FBSyxFQUFDLGFBQWEsRUFBQyw0Nk1BQTQ2TTtRQUNscU8sY0FBYyxFQUFFLHNpUEFBc2lQO0tBQ3pqUDtJQUNHLG1CQUFtQixFQUFFO1FBQ2pCO1lBQ0ksYUFBYSxFQUFFLEdBQUc7WUFDbEIsZUFBZSxFQUFFLDhDQUE4QztZQUMvRCw0QkFBNEIsRUFBRTtnQkFDMUI7b0JBQ0ksVUFBVSxFQUFFLENBQUM7b0JBQ2IsV0FBVyxFQUFFLElBQUk7b0JBQ2pCLG1CQUFtQixFQUFFLEdBQUc7b0JBQ3hCLFdBQVcsRUFBRSxJQUFJO29CQUNqQixTQUFTLEVBQUUsSUFBSTtvQkFDZixnQkFBZ0IsRUFBRSxDQUFDO2lCQUN0QjtnQkFDRDtvQkFDSSxVQUFVLEVBQUUsQ0FBQztvQkFDYixXQUFXLEVBQUUsSUFBSTtvQkFDakIsbUJBQW1CLEVBQUUsR0FBRztvQkFDeEIsV0FBVyxFQUFFLElBQUk7b0JBQ2pCLFNBQVMsRUFBRSxJQUFJO29CQUNmLGdCQUFnQixFQUFFLENBQUM7aUJBQ3RCO2dCQUNEO29CQUNJLFVBQVUsRUFBRSxDQUFDO29CQUNiLFdBQVcsRUFBRSxJQUFJO29CQUNqQixtQkFBbUIsRUFBRSxHQUFHO29CQUN4QixXQUFXLEVBQUUsSUFBSTtvQkFDakIsU0FBUyxFQUFFLElBQUk7b0JBQ2YsZ0JBQWdCLEVBQUUsQ0FBQztpQkFDdEI7Z0JBQ0Q7b0JBQ0ksVUFBVSxFQUFFLEVBQUU7b0JBQ2QsV0FBVyxFQUFFLElBQUk7b0JBQ2pCLG1CQUFtQixFQUFFLEdBQUc7b0JBQ3hCLFdBQVcsRUFBRSxJQUFJO29CQUNqQixTQUFTLEVBQUUsSUFBSTtvQkFDZixnQkFBZ0IsRUFBRSxDQUFDO2lCQUN0QjthQUNKO1lBQ0QsZ0JBQWdCLEVBQUUsQ0FBQztTQUN0QjtRQUNEO1lBQ0ksYUFBYSxFQUFFLEdBQUc7WUFDbEIsZUFBZSxFQUFFLDhDQUE4QztZQUMvRCw0QkFBNEIsRUFBRTtnQkFDMUI7b0JBQ0ksVUFBVSxFQUFFLENBQUM7b0JBQ2IsV0FBVyxFQUFFLElBQUk7b0JBQ2pCLG1CQUFtQixFQUFFLEdBQUc7b0JBQ3hCLFdBQVcsRUFBRSxJQUFJO29CQUNqQixTQUFTLEVBQUUsSUFBSTtvQkFDZixnQkFBZ0IsRUFBRSxDQUFDO2lCQUN0QjtnQkFDRDtvQkFDSSxVQUFVLEVBQUUsQ0FBQztvQkFDYixXQUFXLEVBQUUsSUFBSTtvQkFDakIsbUJBQW1CLEVBQUUsR0FBRztvQkFDeEIsV0FBVyxFQUFFLElBQUk7b0JBQ2pCLFNBQVMsRUFBRSxJQUFJO29CQUNmLGdCQUFnQixFQUFFLENBQUM7aUJBQ3RCO2dCQUNEO29CQUNJLFVBQVUsRUFBRSxDQUFDO29CQUNiLFdBQVcsRUFBRSxJQUFJO29CQUNqQixtQkFBbUIsRUFBRSxHQUFHO29CQUN4QixXQUFXLEVBQUUsSUFBSTtvQkFDakIsU0FBUyxFQUFFLElBQUk7b0JBQ2YsZ0JBQWdCLEVBQUUsQ0FBQztpQkFDdEI7Z0JBQ0Q7b0JBQ0ksVUFBVSxFQUFFLEVBQUU7b0JBQ2QsV0FBVyxFQUFFLElBQUk7b0JBQ2pCLG1CQUFtQixFQUFFLEdBQUc7b0JBQ3hCLFdBQVcsRUFBRSxJQUFJO29CQUNqQixTQUFTLEVBQUUsSUFBSTtvQkFDZixnQkFBZ0IsRUFBRSxDQUFDO2lCQUN0QjthQUNKO1lBQ0QsZ0JBQWdCLEVBQUUsQ0FBQztTQUN0QjtRQUNEO1lBQ0ksYUFBYSxFQUFFLEdBQUc7WUFDbEIsZUFBZSxFQUFFLDZDQUE2QztZQUM5RCw0QkFBNEIsRUFBRTtnQkFDMUI7b0JBQ0ksVUFBVSxFQUFFLENBQUM7b0JBQ2IsV0FBVyxFQUFFLElBQUk7b0JBQ2pCLG1CQUFtQixFQUFFLEdBQUc7b0JBQ3hCLFdBQVcsRUFBRSxJQUFJO29CQUNqQixTQUFTLEVBQUUsSUFBSTtvQkFDZixnQkFBZ0IsRUFBRSxDQUFDO2lCQUN0QjtnQkFDRDtvQkFDSSxVQUFVLEVBQUUsQ0FBQztvQkFDYixXQUFXLEVBQUUsSUFBSTtvQkFDakIsbUJBQW1CLEVBQUUsR0FBRztvQkFDeEIsV0FBVyxFQUFFLElBQUk7b0JBQ2pCLFNBQVMsRUFBRSxJQUFJO29CQUNmLGdCQUFnQixFQUFFLENBQUM7aUJBQ3RCO2dCQUNEO29CQUNJLFVBQVUsRUFBRSxDQUFDO29CQUNiLFdBQVcsRUFBRSxJQUFJO29CQUNqQixtQkFBbUIsRUFBRSxHQUFHO29CQUN4QixXQUFXLEVBQUUsSUFBSTtvQkFDakIsU0FBUyxFQUFFLElBQUk7b0JBQ2YsZ0JBQWdCLEVBQUUsQ0FBQztpQkFDdEI7Z0JBQ0Q7b0JBQ0ksVUFBVSxFQUFFLEVBQUU7b0JBQ2QsV0FBVyxFQUFFLElBQUk7b0JBQ2pCLG1CQUFtQixFQUFFLEdBQUc7b0JBQ3hCLFdBQVcsRUFBRSxJQUFJO29CQUNqQixTQUFTLEVBQUUsSUFBSTtvQkFDZixnQkFBZ0IsRUFBRSxDQUFDO2lCQUN0QjthQUNKO1lBQ0QsZ0JBQWdCLEVBQUUsQ0FBQztTQUN0QjtRQUNEO1lBQ0ksYUFBYSxFQUFFLEdBQUc7WUFDbEIsZUFBZSxFQUFFLCtDQUErQztZQUNoRSw0QkFBNEIsRUFBRTtnQkFDMUI7b0JBQ0ksVUFBVSxFQUFFLENBQUM7b0JBQ2IsV0FBVyxFQUFFLElBQUk7b0JBQ2pCLG1CQUFtQixFQUFFLEdBQUc7b0JBQ3hCLFdBQVcsRUFBRSxJQUFJO29CQUNqQixTQUFTLEVBQUUsSUFBSTtvQkFDZixnQkFBZ0IsRUFBRSxDQUFDO2lCQUN0QjtnQkFDRDtvQkFDSSxVQUFVLEVBQUUsQ0FBQztvQkFDYixXQUFXLEVBQUUsSUFBSTtvQkFDakIsbUJBQW1CLEVBQUUsR0FBRztvQkFDeEIsV0FBVyxFQUFFLElBQUk7b0JBQ2pCLFNBQVMsRUFBRSxJQUFJO29CQUNmLGdCQUFnQixFQUFFLENBQUM7aUJBQ3RCO2dCQUNEO29CQUNJLFVBQVUsRUFBRSxDQUFDO29CQUNiLFdBQVcsRUFBRSxJQUFJO29CQUNqQixtQkFBbUIsRUFBRSxHQUFHO29CQUN4QixXQUFXLEVBQUUsSUFBSTtvQkFDakIsU0FBUyxFQUFFLElBQUk7b0JBQ2YsZ0JBQWdCLEVBQUUsQ0FBQztpQkFDdEI7Z0JBQ0Q7b0JBQ0ksVUFBVSxFQUFFLEVBQUU7b0JBQ2QsV0FBVyxFQUFFLElBQUk7b0JBQ2pCLG1CQUFtQixFQUFFLEdBQUc7b0JBQ3hCLFdBQVcsRUFBRSxJQUFJO29CQUNqQixTQUFTLEVBQUUsSUFBSTtvQkFDZixnQkFBZ0IsRUFBRSxDQUFDO2lCQUN0QjthQUNKO1lBQ0QsZ0JBQWdCLEVBQUUsQ0FBQztTQUN0QjtRQUNEO1lBQ0ksYUFBYSxFQUFFLEdBQUc7WUFDbEIsZUFBZSxFQUFFLCtDQUErQztZQUNoRSw0QkFBNEIsRUFBRTtnQkFDMUI7b0JBQ0ksVUFBVSxFQUFFLENBQUM7b0JBQ2IsV0FBVyxFQUFFLElBQUk7b0JBQ2pCLG1CQUFtQixFQUFFLEdBQUc7b0JBQ3hCLFdBQVcsRUFBRSxJQUFJO29CQUNqQixTQUFTLEVBQUUsSUFBSTtvQkFDZixnQkFBZ0IsRUFBRSxDQUFDO2lCQUN0QjtnQkFDRDtvQkFDSSxVQUFVLEVBQUUsQ0FBQztvQkFDYixXQUFXLEVBQUUsSUFBSTtvQkFDakIsbUJBQW1CLEVBQUUsR0FBRztvQkFDeEIsV0FBVyxFQUFFLElBQUk7b0JBQ2pCLFNBQVMsRUFBRSxJQUFJO29CQUNmLGdCQUFnQixFQUFFLENBQUM7aUJBQ3RCO2dCQUNEO29CQUNJLFVBQVUsRUFBRSxDQUFDO29CQUNiLFdBQVcsRUFBRSxJQUFJO29CQUNqQixtQkFBbUIsRUFBRSxHQUFHO29CQUN4QixXQUFXLEVBQUUsSUFBSTtvQkFDakIsU0FBUyxFQUFFLElBQUk7b0JBQ2YsZ0JBQWdCLEVBQUUsQ0FBQztpQkFDdEI7Z0JBQ0Q7b0JBQ0ksVUFBVSxFQUFFLEVBQUU7b0JBQ2QsV0FBVyxFQUFFLElBQUk7b0JBQ2pCLG1CQUFtQixFQUFFLEdBQUc7b0JBQ3hCLFdBQVcsRUFBRSxJQUFJO29CQUNqQixTQUFTLEVBQUUsSUFBSTtvQkFDZixnQkFBZ0IsRUFBRSxDQUFDO2lCQUN0QjthQUNKO1lBQ0QsZ0JBQWdCLEVBQUUsQ0FBQztTQUN0QjtRQUNEO1lBQ0ksYUFBYSxFQUFFLElBQUk7WUFDbkIsZUFBZSxFQUFFLHFCQUFxQjtZQUN0Qyw0QkFBNEIsRUFBRTtnQkFDMUI7b0JBQ0ksVUFBVSxFQUFFLENBQUM7b0JBQ2IsV0FBVyxFQUFFLElBQUk7b0JBQ2pCLG1CQUFtQixFQUFFLElBQUk7b0JBQ3pCLFdBQVcsRUFBRSxJQUFJO29CQUNqQixTQUFTLEVBQUUsSUFBSTtvQkFDZixnQkFBZ0IsRUFBRSxDQUFDO2lCQUN0QjtnQkFDRDtvQkFDSSxVQUFVLEVBQUUsQ0FBQztvQkFDYixXQUFXLEVBQUUsSUFBSTtvQkFDakIsbUJBQW1CLEVBQUUsSUFBSTtvQkFDekIsV0FBVyxFQUFFLElBQUk7b0JBQ2pCLFNBQVMsRUFBRSxJQUFJO29CQUNmLGdCQUFnQixFQUFFLENBQUM7aUJBQ3RCO2dCQUNEO29CQUNJLFVBQVUsRUFBRSxDQUFDO29CQUNiLFdBQVcsRUFBRSxJQUFJO29CQUNqQixtQkFBbUIsRUFBRSxJQUFJO29CQUN6QixXQUFXLEVBQUUsSUFBSTtvQkFDakIsU0FBUyxFQUFFLElBQUk7b0JBQ2YsZ0JBQWdCLEVBQUUsQ0FBQztpQkFDdEI7Z0JBQ0Q7b0JBQ0ksVUFBVSxFQUFFLEVBQUU7b0JBQ2QsV0FBVyxFQUFFLElBQUk7b0JBQ2pCLG1CQUFtQixFQUFFLElBQUk7b0JBQ3pCLFdBQVcsRUFBRSxJQUFJO29CQUNqQixTQUFTLEVBQUUsSUFBSTtvQkFDZixnQkFBZ0IsRUFBRSxDQUFDO2lCQUN0QjthQUNKO1lBQ0QsZ0JBQWdCLEVBQUUsQ0FBQztTQUN0QjtLQUNKO0NBQ0osQ0FBQztBQUVjLDZDQUErQixHQUFDO0lBQzVDLHFCQUFxQixFQUNqQixFQUFDLGFBQWEsRUFDVixDQUFDO2dCQUNHLE1BQU0sRUFBQyxrQ0FBa0M7Z0JBQ3pDLFVBQVUsRUFBQyxHQUFHO2dCQUNkLFdBQVcsRUFBQyxhQUFhO2dCQUN6QixTQUFTLEVBQUMsYUFBYTtnQkFDdkIsaUJBQWlCLEVBQUMsWUFBWTtnQkFDOUIsZUFBZSxFQUFDLFlBQVksRUFBQyxJQUFJLEVBQUMsR0FBRztnQkFDckMsV0FBVyxFQUFDLElBQUk7YUFDbkIsQ0FBQztRQUNGLGNBQWMsRUFBQyxzQkFBc0I7UUFDckMsZ0JBQWdCLEVBQUMsU0FBUztRQUMxQixVQUFVLEVBQUMsR0FBRztRQUNkLFlBQVksRUFBQyxVQUFVO1FBQ3ZCLG9CQUFvQixFQUFDLEdBQUc7UUFDeEIsUUFBUSxFQUFDLEdBQUc7UUFDWixzQkFBc0IsRUFBQyxJQUFJO1FBQzNCLGFBQWEsRUFBQyxrQ0FBa0M7UUFDaEQsZUFBZSxFQUFDLElBQUk7UUFDcEIsYUFBYSxFQUFDLElBQUk7UUFDbEIsc0JBQXNCLEVBQUMsQ0FBQztRQUN4QixzQkFBc0IsRUFBQyxLQUFLO1FBQzVCLG9CQUFvQixFQUFDLE9BQU87UUFDNUIsaUJBQWlCLEVBQUMsYUFBYTtRQUMvQix1QkFBdUIsRUFBQyxZQUFZO1FBQ3BDLFNBQVMsRUFBQyxLQUFLLEVBQUMsZ0JBQWdCLEVBQUMsS0FBSztRQUN0QyxlQUFlLEVBQUMsS0FBSztRQUNyQixhQUFhLEVBQUMsdzVNQUF3NU07UUFDdDZNLGNBQWMsRUFBRSxzaVBBQXNpUDtLQUN6alA7Q0FDUjtBQUdhLHdCQUFVLEdBQ3BCO0lBQ0ksU0FBUyxFQUFFLDJIQUEySDtDQUN6SSxDQUFDO0FBTVEsaUNBQW1CLEdBQzdCO0lBQ0kscUJBQXFCLEVBQUU7UUFDbkIsYUFBYSxFQUFFO1lBQ1g7Z0JBQ0ksTUFBTSxFQUFFLDhDQUE4QztnQkFDdEQsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsV0FBVyxFQUFFLGFBQWE7Z0JBQzFCLFNBQVMsRUFBRSxhQUFhO2dCQUN4QixpQkFBaUIsRUFBRSxZQUFZO2dCQUMvQixlQUFlLEVBQUUsWUFBWTtnQkFDN0IsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsV0FBVyxFQUFFLElBQUk7YUFDcEI7U0FDSjtRQUNELGNBQWMsRUFBRSw4QkFBOEI7UUFDOUMsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixVQUFVLEVBQUUsR0FBRztRQUNmLFlBQVksRUFBRSxVQUFVO1FBQ3hCLG9CQUFvQixFQUFFLEdBQUc7UUFDekIsUUFBUSxFQUFFLEdBQUc7UUFDYixzQkFBc0IsRUFBRSxLQUFLO1FBQzdCLGFBQWEsRUFBRSw4Q0FBOEM7UUFDN0QsZUFBZSxFQUFFLElBQUk7UUFDckIsYUFBYSxFQUFFLEdBQUc7UUFDbEIsc0JBQXNCLEVBQUUsQ0FBQztRQUN6QixzQkFBc0IsRUFBRSxLQUFLO1FBQzdCLG9CQUFvQixFQUFFLE9BQU87UUFDN0IsaUJBQWlCLEVBQUUsYUFBYTtRQUNoQyx1QkFBdUIsRUFBRSxZQUFZO1FBQ3JDLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLGdCQUFnQixFQUFFLEtBQUs7UUFDdkIsZUFBZSxFQUFFLE9BQU87UUFDeEIsYUFBYSxFQUFFLGc3TUFBZzdNO1FBQy83TSxjQUFjLEVBQUUsNDhPQUE0OE87S0FDLzlPO0NBQ0osQ0FBQztBQUtVLGlDQUFtQixHQUFHO0lBQ2xDLFlBQVksRUFBRSxJQUFJO0lBQ2xCLGdCQUFnQixFQUFFO1FBQ2QsY0FBYyxFQUFFLFFBQVE7UUFDeEIsZUFBZSxFQUFFLEtBQUs7S0FDekI7SUFDRCxhQUFhLEVBQUU7UUFDWDtZQUNJLE9BQU8sRUFBRSxxQkFBcUI7WUFDOUIsUUFBUSxFQUFFLG9DQUFvQztTQUNqRDtRQUNEO1lBQ0ksT0FBTyxFQUFFLFdBQVc7WUFDcEIsUUFBUSxFQUFFLGNBQWM7U0FDM0I7UUFDRDtZQUNJLE9BQU8sRUFBRSxZQUFZO1lBQ3JCLFFBQVEsRUFBRSxtQkFBbUI7U0FDaEM7UUFDRDtZQUNJLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFFBQVEsRUFBRSxZQUFZO1NBQ3pCO1FBQ0Q7WUFDSSxPQUFPLEVBQUUsVUFBVTtZQUNuQixRQUFRLEVBQUUsaUJBQWlCO1NBQzlCO1FBQ0Q7WUFDSSxPQUFPLEVBQUUsYUFBYTtZQUN0QixRQUFRLEVBQUUsbUJBQW1CO1NBQ2hDO1FBQ0Q7WUFDSSxPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLFFBQVEsRUFBRSxpQkFBaUI7U0FDOUI7UUFDRDtZQUNJLE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsUUFBUSxFQUFFLHdCQUF3QjtTQUNyQztRQUNEO1lBQ0ksT0FBTyxFQUFFLGNBQWM7WUFDdkIsUUFBUSxFQUFFLFFBQVE7U0FDckI7S0FDSjtJQUNELGVBQWUsRUFBRTtRQUNiO1lBQ0ksT0FBTyxFQUFFLHFCQUFxQjtZQUM5QixRQUFRLEVBQUUsZ0NBQWdDO1NBQzdDO1FBQ0Q7WUFDSSxPQUFPLEVBQUUsV0FBVztZQUNwQixRQUFRLEVBQUUsMEJBQTBCO1NBQ3ZDO1FBQ0Q7WUFDSSxPQUFPLEVBQUUsWUFBWTtZQUNyQixRQUFRLEVBQUUsb0JBQW9CO1NBQ2pDO1FBQ0Q7WUFDSSxPQUFPLEVBQUUsT0FBTztZQUNoQixRQUFRLEVBQUUsY0FBYztTQUMzQjtRQUNEO1lBQ0ksT0FBTyxFQUFFLFVBQVU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtTQUM5QjtRQUNEO1lBQ0ksT0FBTyxFQUFFLGFBQWE7WUFDdEIsUUFBUSxFQUFFLHVCQUF1QjtTQUNwQztRQUNEO1lBQ0ksT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixRQUFRLEVBQUUsWUFBWTtTQUN6QjtRQUNEO1lBQ0ksT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixRQUFRLEVBQUUsZ0NBQWdDO1NBQzdDO1FBQ0Q7WUFDSSxPQUFPLEVBQUUsY0FBYztZQUN2QixRQUFRLEVBQUUsTUFBTTtTQUNuQjtLQUNKO0lBQ0Qsa0JBQWtCLEVBQUU7UUFDaEIsVUFBVSxFQUFFLElBQUk7UUFDaEIsWUFBWSxFQUFFLEVBQUU7UUFDaEIsWUFBWSxFQUFFLEVBQUU7S0FDbkI7Q0FDSixDQUFDO0FBRWEsa0RBQW9DLEdBQUc7SUFDbEQsWUFBWSxFQUFFLElBQUk7SUFDbEIsZ0JBQWdCLEVBQUU7UUFDZCxjQUFjLEVBQUUsUUFBUTtRQUN4QixlQUFlLEVBQUUsSUFBSTtRQUNyQixpQkFBaUIsRUFBRSxjQUFjO1FBQ2pDLHdCQUF3QixFQUFFLFVBQVU7S0FDdkM7SUFDRCxhQUFhLEVBQUU7UUFDWDtZQUNJLE9BQU8sRUFBRSxxQkFBcUI7WUFDOUIsUUFBUSxFQUFFLG9DQUFvQztTQUNqRDtRQUNEO1lBQ0ksT0FBTyxFQUFFLFdBQVc7WUFDcEIsUUFBUSxFQUFFLGNBQWM7U0FDM0I7UUFDRDtZQUNJLE9BQU8sRUFBRSxZQUFZO1lBQ3JCLFFBQVEsRUFBRSxtQkFBbUI7U0FDaEM7UUFDRDtZQUNJLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFFBQVEsRUFBRSxZQUFZO1NBQ3pCO1FBQ0Q7WUFDSSxPQUFPLEVBQUUsVUFBVTtZQUNuQixRQUFRLEVBQUUsaUJBQWlCO1NBQzlCO1FBQ0Q7WUFDSSxPQUFPLEVBQUUsYUFBYTtZQUN0QixRQUFRLEVBQUUsbUJBQW1CO1NBQ2hDO1FBQ0Q7WUFDSSxPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLFFBQVEsRUFBRSxpQkFBaUI7U0FDOUI7UUFDRDtZQUNJLE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsUUFBUSxFQUFFLHdCQUF3QjtTQUNyQztRQUNEO1lBQ0ksT0FBTyxFQUFFLGNBQWM7WUFDdkIsUUFBUSxFQUFFLFFBQVE7U0FDckI7S0FDSjtJQUNELGVBQWUsRUFBRTtRQUNiO1lBQ0ksT0FBTyxFQUFFLHFCQUFxQjtZQUM5QixRQUFRLEVBQUUsZ0NBQWdDO1NBQzdDO1FBQ0Q7WUFDSSxPQUFPLEVBQUUsV0FBVztZQUNwQixRQUFRLEVBQUUsMEJBQTBCO1NBQ3ZDO1FBQ0Q7WUFDSSxPQUFPLEVBQUUsWUFBWTtZQUNyQixRQUFRLEVBQUUsb0JBQW9CO1NBQ2pDO1FBQ0Q7WUFDSSxPQUFPLEVBQUUsT0FBTztZQUNoQixRQUFRLEVBQUUsY0FBYztTQUMzQjtRQUNEO1lBQ0ksT0FBTyxFQUFFLFVBQVU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtTQUM5QjtRQUNEO1lBQ0ksT0FBTyxFQUFFLGFBQWE7WUFDdEIsUUFBUSxFQUFFLHVCQUF1QjtTQUNwQztRQUNEO1lBQ0ksT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixRQUFRLEVBQUUsWUFBWTtTQUN6QjtRQUNEO1lBQ0ksT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixRQUFRLEVBQUUsZ0NBQWdDO1NBQzdDO1FBQ0Q7WUFDSSxPQUFPLEVBQUUsY0FBYztZQUN2QixRQUFRLEVBQUUsTUFBTTtTQUNuQjtLQUNKO0lBQ0Qsa0JBQWtCLEVBQUU7UUFDaEIsVUFBVSxFQUFFLElBQUk7UUFDaEIsWUFBWSxFQUFFLEVBQUU7UUFDaEIsWUFBWSxFQUFFLEVBQUU7S0FDbkI7Q0FDSixDQUFDO0FBR1ksdUNBQXlCLEdBQUM7SUFDcEMsZ0JBQWdCLEVBQUU7UUFDZCxjQUFjLEVBQUUsT0FBTztRQUN2QixlQUFlLEVBQUUsS0FBSztLQUN6QjtDQUNKLENBQUM7QUFFWSx3REFBMEMsR0FBRztJQUN2RCxnQkFBZ0IsRUFBRTtRQUNkLGNBQWMsRUFBRSxRQUFRO1FBQ3hCLGVBQWUsRUFBRSxJQUFJO1FBQ3JCLGlCQUFpQixFQUFFLGNBQWM7UUFDakMsd0JBQXdCLEVBQUUsVUFBVTtLQUN2QztDQUNKLENBQUM7QUFFWSx1Q0FBeUIsR0FBQztJQUNwQyxtQkFBbUIsRUFBRSxJQUFJO0NBQzVCLENBQUM7QUFHWSwwQkFBWSxHQUFDO0lBQ3ZCLFlBQVksRUFBQyxNQUFNO0NBQ3RCLENBQUM7QUFFWSx3QkFBVSxHQUNwQjtJQUNJLGNBQWMsRUFBRSxJQUFJO0NBQ3ZCO0FBRVUsdUNBQXlCLEdBQUU7SUFDdEMsVUFBVSxFQUFFLEVBRVg7SUFDRCxrQkFBa0IsRUFBRTtRQUNoQixVQUFVLEVBQUUsSUFBSTtRQUNoQixZQUFZLEVBQUUsRUFBRTtRQUNoQixZQUFZLEVBQUUsRUFBRTtLQUNuQjtDQUNKLENBQUM7QUFJRiw2QkFBNkI7QUFDN0IsMkJBQTJCO0FBQzNCLG9CQUFvQjtBQUNwQiw2QkFBNkI7QUFFN0Isa0RBQWtEO0FBQ3BDLHdCQUFVLEdBQUM7SUFDckIsYUFBYSxFQUFFO1FBQ1g7WUFDSSxXQUFXLEVBQUUsUUFBUTtZQUNyQixXQUFXLEVBQUUsUUFBUTtZQUNyQixnQkFBZ0IsRUFBRSxDQUFDO1lBQ25CLHFCQUFxQixFQUFFLEVBRXRCO1lBQ0QsU0FBUyxFQUFFLFFBQVE7WUFDbkIsa0JBQWtCLEVBQUUsRUFFbkI7WUFDRCxjQUFjLEVBQUUscUJBQXFCO1lBQ3JDLFNBQVMsRUFBRSxjQUFjO1lBQ3pCLGNBQWMsRUFBRSwrQkFBK0I7WUFDL0MsVUFBVSxFQUFFLE1BQU07WUFDbEIsY0FBYyxFQUFFLFVBQVU7WUFDMUIsT0FBTyxFQUFFLGNBQWM7WUFDdkIsUUFBUSxFQUFFLEtBQUs7U0FDbEI7UUFDRDtZQUNJLFdBQVcsRUFBRSxRQUFRO1lBQ3JCLFdBQVcsRUFBRSxRQUFRO1lBQ3JCLGdCQUFnQixFQUFFLENBQUM7WUFDbkIscUJBQXFCLEVBQUUsRUFFdEI7WUFDRCxTQUFTLEVBQUUsY0FBYztZQUN6QixrQkFBa0IsRUFBRSxFQUVuQjtZQUNELGNBQWMsRUFBRSxxQkFBcUI7WUFDckMsU0FBUyxFQUFFLFdBQVc7WUFDdEIsY0FBYyxFQUFFLGtEQUFrRDtZQUNsRSxVQUFVLEVBQUUsTUFBTTtZQUNsQixjQUFjLEVBQUUsVUFBVTtZQUMxQixPQUFPLEVBQUUsV0FBVztZQUNwQixRQUFRLEVBQUUsV0FBVztTQUN4QjtRQUNEO1lBQ0ksY0FBYyxFQUFFLGlCQUFpQjtZQUNqQyxXQUFXLEVBQUUsUUFBUTtZQUNyQixVQUFVLEVBQUUsTUFBTTtZQUNsQixjQUFjLEVBQUUsVUFBVTtZQUMxQixXQUFXLEVBQUUsUUFBUTtZQUNyQixnQkFBZ0IsRUFBRSxDQUFDO1lBQ25CLHFCQUFxQixFQUFFLEVBRXRCO1lBQ0QsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixRQUFRLEVBQUUsV0FBVztZQUNyQixrQkFBa0IsRUFBRSxFQUVuQjtZQUNELGNBQWMsRUFBRSxxQkFBcUI7WUFDckMsU0FBUyxFQUFFLGdCQUFnQjtTQUM5QjtRQUNEO1lBQ0ksY0FBYyxFQUFFLGNBQWM7WUFDOUIsV0FBVyxFQUFFLFFBQVE7WUFDckIsVUFBVSxFQUFFLE1BQU07WUFDbEIsY0FBYyxFQUFFLFVBQVU7WUFDMUIsV0FBVyxFQUFFLFFBQVE7WUFDckIsZ0JBQWdCLEVBQUUsQ0FBQztZQUNuQixxQkFBcUIsRUFBRSxFQUV0QjtZQUNELE9BQU8sRUFBRSxnQkFBZ0I7WUFDekIsUUFBUSxFQUFFLFdBQVc7WUFDckIsa0JBQWtCLEVBQUUsRUFFbkI7WUFDRCxjQUFjLEVBQUUscUJBQXFCO1lBQ3JDLFNBQVMsRUFBRSxnQkFBZ0I7U0FDOUI7UUFDRDtZQUNJLGNBQWMsRUFBRSxjQUFjO1lBQzlCLFdBQVcsRUFBRSxRQUFRO1lBQ3JCLFVBQVUsRUFBRSxNQUFNO1lBQ2xCLGNBQWMsRUFBRSxVQUFVO1lBQzFCLFdBQVcsRUFBRSxRQUFRO1lBQ3JCLGdCQUFnQixFQUFFLENBQUM7WUFDbkIscUJBQXFCLEVBQUUsRUFFdEI7WUFDRCxPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLGtCQUFrQixFQUFFLEVBRW5CO1lBQ0QsY0FBYyxFQUFFLHFCQUFxQjtZQUNyQyxTQUFTLEVBQUUsZ0JBQWdCO1NBQzlCO1FBQ0Q7WUFDSSxjQUFjLEVBQUUsY0FBYztZQUM5QixXQUFXLEVBQUUsUUFBUTtZQUNyQixVQUFVLEVBQUUsTUFBTTtZQUNsQixjQUFjLEVBQUUsVUFBVTtZQUMxQixXQUFXLEVBQUUsUUFBUTtZQUNyQixnQkFBZ0IsRUFBRSxDQUFDO1lBQ25CLHFCQUFxQixFQUFFLEVBRXRCO1lBQ0QsT0FBTyxFQUFFLGdCQUFnQjtZQUN6QixRQUFRLEVBQUUsV0FBVztZQUNyQixrQkFBa0IsRUFBRSxFQUVuQjtZQUNELGNBQWMsRUFBRSxxQkFBcUI7WUFDckMsU0FBUyxFQUFFLGdCQUFnQjtTQUM5QjtRQUNEO1lBQ0ksV0FBVyxFQUFFLFFBQVE7WUFDckIsV0FBVyxFQUFFLFFBQVE7WUFDckIsZ0JBQWdCLEVBQUUsQ0FBQztZQUNuQixxQkFBcUIsRUFBRSxFQUV0QjtZQUNELFNBQVMsRUFBRSxjQUFjO1lBQ3pCLGtCQUFrQixFQUFFLEVBRW5CO1lBQ0QsY0FBYyxFQUFFLHFCQUFxQjtZQUNyQyxTQUFTLEVBQUUsV0FBVztZQUN0QixjQUFjLEVBQUUsY0FBYztZQUM5QixVQUFVLEVBQUUsTUFBTTtZQUNsQixjQUFjLEVBQUUsVUFBVTtZQUMxQixPQUFPLEVBQUUsV0FBVztZQUNwQixRQUFRLEVBQUUsV0FBVztTQUN4QjtRQUNEO1lBQ0ksV0FBVyxFQUFFLFFBQVE7WUFDckIsV0FBVyxFQUFFLFFBQVE7WUFDckIsZ0JBQWdCLEVBQUUsQ0FBQztZQUNuQixxQkFBcUIsRUFBRSxFQUV0QjtZQUNELFNBQVMsRUFBRSxjQUFjO1lBQ3pCLGtCQUFrQixFQUFFLEVBRW5CO1lBQ0QsY0FBYyxFQUFFLHFCQUFxQjtZQUNyQyxTQUFTLEVBQUUsV0FBVztZQUN0QixjQUFjLEVBQUUsY0FBYztZQUM5QixVQUFVLEVBQUUsTUFBTTtZQUNsQixjQUFjLEVBQUUsVUFBVTtZQUMxQixPQUFPLEVBQUUsV0FBVztZQUNwQixRQUFRLEVBQUUsV0FBVztTQUN4QjtRQUNEO1lBQ0ksY0FBYyxFQUFFLGlCQUFpQjtZQUNqQyxXQUFXLEVBQUUsUUFBUTtZQUNyQixVQUFVLEVBQUUsTUFBTTtZQUNsQixjQUFjLEVBQUUsVUFBVTtZQUMxQixXQUFXLEVBQUUsUUFBUTtZQUNyQixnQkFBZ0IsRUFBRSxDQUFDO1lBQ25CLHFCQUFxQixFQUFFLEVBRXRCO1lBQ0QsT0FBTyxFQUFFLGdCQUFnQjtZQUN6QixRQUFRLEVBQUUsV0FBVztZQUNyQixrQkFBa0IsRUFBRSxFQUVuQjtZQUNELGNBQWMsRUFBRSxxQkFBcUI7WUFDckMsU0FBUyxFQUFFLGdCQUFnQjtTQUM5QjtRQUNEO1lBQ0ksY0FBYyxFQUFFLGFBQWE7WUFDN0IsV0FBVyxFQUFFLFFBQVE7WUFDckIsVUFBVSxFQUFFLE1BQU07WUFDbEIsY0FBYyxFQUFFLFVBQVU7WUFDMUIsV0FBVyxFQUFFLFFBQVE7WUFDckIsZ0JBQWdCLEVBQUUsQ0FBQztZQUNuQixxQkFBcUIsRUFBRSxFQUV0QjtZQUNELE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsUUFBUSxFQUFFLFdBQVc7WUFDckIsa0JBQWtCLEVBQUUsRUFFbkI7WUFDRCxjQUFjLEVBQUUscUJBQXFCO1lBQ3JDLFNBQVMsRUFBRSxnQkFBZ0I7U0FDOUI7UUFFRDtZQUNJLGNBQWMsRUFBRSxhQUFhO1lBQzdCLFdBQVcsRUFBRSxRQUFRO1lBQ3JCLFVBQVUsRUFBRSxNQUFNO1lBQ2xCLGNBQWMsRUFBRSxVQUFVO1lBQzFCLFdBQVcsRUFBRSxRQUFRO1lBQ3JCLGdCQUFnQixFQUFFLENBQUM7WUFDbkIscUJBQXFCLEVBQUUsRUFFdEI7WUFDRCxPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLGtCQUFrQixFQUFFLEVBRW5CO1lBQ0QsY0FBYyxFQUFFLHFCQUFxQjtZQUNyQyxTQUFTLEVBQUUsZ0JBQWdCO1NBQzlCO0tBQ0o7SUFDRCxrQkFBa0IsRUFBRTtRQUNoQixVQUFVLEVBQUUsSUFBSTtRQUNoQixZQUFZLEVBQUUsRUFBRTtRQUNoQixZQUFZLEVBQUUsRUFBRTtLQUNuQjtDQUNKLENBQUM7QUFLRixFQUFFO0FBQ0YsNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3QixvQkFBb0I7QUFDcEIsOEJBQThCO0FBR2hCLDhCQUFnQixHQUFDO0lBQzNCLGVBQWUsRUFDWDtRQUNJLHFCQUFxQixFQUFFLEVBQUU7UUFDekIsVUFBVSxFQUFFLEtBQUs7UUFDakIsa0JBQWtCLEVBQUU7WUFFaEI7Z0JBQ0ksTUFBTSxFQUFFLGdCQUFnQjtnQkFDeEIsVUFBVSxFQUFFLHFCQUFxQjtnQkFDakMsU0FBUyxFQUFFLEtBQUs7YUFDbkI7WUFDRDtnQkFDSSxNQUFNLEVBQUUsYUFBYTtnQkFDckIsVUFBVSxFQUFFLHFCQUFxQjtnQkFDakMsU0FBUyxFQUFFLGdCQUFnQjthQUM5QjtTQUNKO1FBQ0QsYUFBYSxFQUFFLEVBQUU7UUFDakIsY0FBYyxFQUFFLHlCQUF5QjtRQUN6QyxnQkFBZ0IsRUFBRSxNQUFNO1FBQ3hCLGNBQWMsRUFBRSxVQUFVO1FBQzFCLGNBQWMsRUFBRSxxQkFBcUI7UUFDckMsUUFBUSxFQUFFLFdBQVc7UUFDckIsT0FBTyxFQUFFLHNCQUFzQjtRQUMvQixXQUFXLEVBQUUsYUFBYTtRQUMxQixTQUFTLEVBQUUsY0FBYztRQUN6QixXQUFXLEVBQUUsc0JBQXNCO1FBQ25DLFNBQVMsRUFBRSxzQkFBc0I7UUFDakMsY0FBYyxFQUFFLHNCQUFzQjtRQUN0QyxVQUFVLEVBQUUsTUFBTTtLQUNyQjtDQUNSLENBQ0E7QUFHRCw2QkFBNkI7QUFDN0IsZ0NBQWdDO0FBQ2hDLG9CQUFvQjtBQUNwQiw2QkFBNkI7QUFDZCxpQ0FBbUIsR0FBQztJQUMvQix5QkFBeUIsRUFBRTtRQUN2QixFQUFDLGVBQWUsRUFBQyxRQUFRLEVBQUMsYUFBYSxFQUFDLFdBQVcsRUFBQyxlQUFlLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsYUFBYSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsRUFBQyxhQUFhLEVBQUMsRUFBRSxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxzQkFBc0IsRUFBQyxDQUFDLEVBQUMsc0JBQXNCLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsZ0JBQWdCLEVBQUMsS0FBSyxFQUFDLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQztRQUM1UixFQUFDLGVBQWUsRUFBQyxRQUFRLEVBQUMsYUFBYSxFQUFDLFdBQVcsRUFBQyxlQUFlLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsYUFBYSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsRUFBQyxhQUFhLEVBQUMsRUFBRSxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxzQkFBc0IsRUFBQyxDQUFDLEVBQUMsc0JBQXNCLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsZ0JBQWdCLEVBQUMsS0FBSyxFQUFDLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQztRQUM1UixFQUFDLGVBQWUsRUFBQyxRQUFRLEVBQUMsYUFBYSxFQUFDLFdBQVcsRUFBQyxlQUFlLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsYUFBYSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsRUFBQyxhQUFhLEVBQUMsRUFBRSxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxzQkFBc0IsRUFBQyxDQUFDLEVBQUMsc0JBQXNCLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsZ0JBQWdCLEVBQUMsS0FBSyxFQUFDLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQztLQUMvUjtJQUNELGtCQUFrQixFQUFFO1FBQ2hCLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFlBQVksRUFBRSxFQUFFO1FBQ2hCLFlBQVksRUFBRSxFQUFFO0tBQ25CO0NBQ0osQ0FBQztBQUVGLEVBQUU7QUFDRiw2QkFBNkI7QUFDN0IsOEJBQThCO0FBQzlCLG9CQUFvQjtBQUNwQix3Q0FBd0M7QUFDekIsK0JBQWlCLEdBQUMsRUFBQyxnQkFBZ0IsRUFBQyxFQUFDLGVBQWUsRUFBQyxRQUFRLEVBQUMsZUFBZSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLDhCQUE4QixFQUFDLFdBQVcsRUFBQyxhQUFhLEVBQUMsU0FBUyxFQUFDLGFBQWEsRUFBQyxpQkFBaUIsRUFBQyxZQUFZLEVBQUMsZUFBZSxFQUFDLFlBQVksRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxzQkFBc0IsRUFBQyxDQUFDLEVBQUMsc0JBQXNCLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsZ0JBQWdCLEVBQUMsS0FBSyxFQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsUUFBUSxFQUFDLGtCQUFrQixFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLGdCQUFnQixFQUFDLEdBQUcsRUFBQyxhQUFhLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxFQUFDLENBQUM7QUFHM2lCLDBCQUFZLEdBQUM7SUFDeEIsZUFBZSxFQUFFO1FBQ2I7WUFDSSxJQUFJLEVBQUUsQ0FBQztZQUNQLFVBQVUsRUFBRSxHQUFHO1lBQ2YsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLFdBQVc7U0FDeEI7UUFDRDtZQUNJLElBQUksRUFBRSxDQUFDO1lBQ1AsVUFBVSxFQUFFLEdBQUc7WUFDZixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSxnQkFBZ0I7U0FDN0I7UUFDRDtZQUNJLElBQUksRUFBRSxDQUFDO1lBQ1AsVUFBVSxFQUFFLElBQUk7WUFDaEIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLGlCQUFpQjtTQUM5QjtRQUNEO1lBQ0ksSUFBSSxFQUFFLENBQUM7WUFDUCxVQUFVLEVBQUUsSUFBSTtZQUNoQixRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsYUFBYTtTQUMxQjtRQUNEO1lBQ0ksSUFBSSxFQUFFLENBQUM7WUFDUCxVQUFVLEVBQUUsSUFBSTtZQUNoQixRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsWUFBWTtTQUN6QjtRQUNEO1lBQ0ksSUFBSSxFQUFFLENBQUM7WUFDUCxVQUFVLEVBQUUsSUFBSTtZQUNoQixRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsYUFBYTtTQUMxQjtRQUNEO1lBQ0ksSUFBSSxFQUFFLENBQUM7WUFDUCxVQUFVLEVBQUUsSUFBSTtZQUNoQixRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsaUJBQWlCO1NBQzlCO1FBQ0Q7WUFDSSxJQUFJLEVBQUUsQ0FBQztZQUNQLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSxpQkFBaUI7U0FDOUI7UUFDRDtZQUNJLElBQUksRUFBRSxFQUFFO1lBQ1IsVUFBVSxFQUFFLElBQUk7WUFDaEIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLGVBQWU7U0FDNUI7UUFDRDtZQUNJLElBQUksRUFBRSxFQUFFO1lBQ1IsVUFBVSxFQUFFLElBQUk7WUFDaEIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLGFBQWE7U0FDMUI7UUFDRDtZQUNJLElBQUksRUFBRSxFQUFFO1lBQ1IsVUFBVSxFQUFFLElBQUk7WUFDaEIsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsY0FBYztTQUMzQjtRQUNEO1lBQ0ksSUFBSSxFQUFFLEVBQUU7WUFDUixVQUFVLEVBQUUsSUFBSTtZQUNoQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSxxQkFBcUI7U0FDbEM7UUFDRDtZQUNJLElBQUksRUFBRSxFQUFFO1lBQ1IsVUFBVSxFQUFFLElBQUk7WUFDaEIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLFlBQVk7U0FDekI7UUFDRDtZQUNJLElBQUksRUFBRSxFQUFFO1lBQ1IsVUFBVSxFQUFFLElBQUk7WUFDaEIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLGFBQWE7U0FDMUI7UUFDRDtZQUNJLElBQUksRUFBRSxFQUFFO1lBQ1IsVUFBVSxFQUFFLElBQUk7WUFDaEIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLFlBQVk7U0FDekI7UUFDRDtZQUNJLElBQUksRUFBRSxFQUFFO1lBQ1IsVUFBVSxFQUFFLElBQUk7WUFDaEIsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLGVBQWU7U0FDNUI7UUFDRDtZQUNJLElBQUksRUFBRSxFQUFFO1lBQ1IsVUFBVSxFQUFFLElBQUk7WUFDaEIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixRQUFRLEVBQUUsa0JBQWtCO1NBQy9CO1FBQ0Q7WUFDSSxJQUFJLEVBQUUsRUFBRTtZQUNSLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSxnQkFBZ0I7U0FDN0I7UUFDRDtZQUNJLElBQUksRUFBRSxFQUFFO1lBQ1IsVUFBVSxFQUFFLElBQUk7WUFDaEIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsZUFBZTtTQUM1QjtRQUNEO1lBQ0ksSUFBSSxFQUFFLEVBQUU7WUFDUixVQUFVLEVBQUUsSUFBSTtZQUNoQixRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsWUFBWTtTQUN6QjtRQUNEO1lBQ0ksSUFBSSxFQUFFLEVBQUU7WUFDUixVQUFVLEVBQUUsSUFBSTtZQUNoQixRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFFBQVEsRUFBRSxjQUFjO1NBQzNCO1FBQ0Q7WUFDSSxJQUFJLEVBQUUsRUFBRTtZQUNSLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxjQUFjO1NBQzNCO1FBQ0Q7WUFDSSxJQUFJLEVBQUUsRUFBRTtZQUNSLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxhQUFhO1NBQzFCO1FBQ0Q7WUFDSSxJQUFJLEVBQUUsRUFBRTtZQUNSLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLGtCQUFrQjtTQUMvQjtRQUNEO1lBQ0ksSUFBSSxFQUFFLEVBQUU7WUFDUixVQUFVLEVBQUUsSUFBSTtZQUNoQixRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsV0FBVztTQUN4QjtRQUNEO1lBQ0ksSUFBSSxFQUFFLEVBQUU7WUFDUixVQUFVLEVBQUUsSUFBSTtZQUNoQixRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFFBQVEsRUFBRSxpQkFBaUI7U0FDOUI7UUFDRDtZQUNJLElBQUksRUFBRSxFQUFFO1lBQ1IsVUFBVSxFQUFFLElBQUk7WUFDaEIsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxRQUFRLEVBQUUsc0JBQXNCO1NBQ25DO0tBQ0o7Q0FDSjtBQUdjLG9DQUFzQixHQUFDO0lBQ2xDLG9CQUFvQixFQUFFLElBQUk7Q0FDN0IsQ0FBQztBQUVhLGlDQUFtQixHQUFDO0lBQy9CLFlBQVksRUFBRSxTQUFTO0NBQzFCO0FBRWMseUJBQVcsR0FBQztJQUN2QixjQUFjLEVBQUU7UUFDWjtZQUNJLHFCQUFxQixFQUFFLEVBQUU7WUFDekIsUUFBUSxFQUFFLEdBQUc7WUFDYixTQUFTLEVBQUUsd0JBQXdCO1lBQ25DLFNBQVMsRUFBRSxlQUFlO1lBQzFCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkM7UUFDRDtZQUNJLHFCQUFxQixFQUFFLEVBQUU7WUFDekIsUUFBUSxFQUFFLEdBQUc7WUFDYixTQUFTLEVBQUUsZUFBZTtZQUMxQixTQUFTLEVBQUUsaUJBQWlCO1lBQzVCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFdBQVcsRUFBRSxjQUFjO1NBQzlCO1FBQ0Q7WUFDSSxxQkFBcUIsRUFBRSxDQUFDO1lBQ3hCLFFBQVEsRUFBRSxHQUFHO1lBQ2IsU0FBUyxFQUFFLHdCQUF3QjtZQUNuQyxTQUFTLEVBQUUsZUFBZTtZQUMxQixVQUFVLEVBQUUsSUFBSTtTQUNuQjtLQUNKO0NBQ0o7QUFFYyxtQ0FBcUIsR0FBQztJQUNqQyxrQkFBa0IsRUFBRTtRQUNoQiw0QkFBNEIsRUFBRTtZQUMxQjtnQkFDSSxVQUFVLEVBQUUsS0FBSztnQkFDakIsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsV0FBVyxFQUFFLEdBQUc7Z0JBQ2hCLGFBQWEsRUFBRSxzQkFBc0I7YUFDeEM7WUFDRDtnQkFDSSxVQUFVLEVBQUUsS0FBSztnQkFDakIsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsV0FBVyxFQUFFLEdBQUc7Z0JBQ2hCLGFBQWEsRUFBRSw2QkFBNkI7YUFDL0M7WUFDRDtnQkFDSSxVQUFVLEVBQUUsS0FBSztnQkFDakIsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsV0FBVyxFQUFFLEdBQUc7Z0JBQ2hCLGFBQWEsRUFBRSx3QkFBd0I7YUFDMUM7U0FDSjtRQUNELGNBQWMsRUFBRSxTQUFTO0tBQzVCO0NBQ0o7QUFFYywyQkFBYSxHQUFDO0lBQ3pCLFlBQVksRUFBRTtRQUNWLElBQUksRUFBRSxTQUFTO1FBQ2YsV0FBVyxFQUFFLGFBQWE7UUFDMUIsZ0JBQWdCLEVBQUUsU0FBUztRQUMzQixZQUFZLEVBQUUsS0FBSztRQUNuQixVQUFVLEVBQUUsWUFBWTtRQUN4QixpQkFBaUIsRUFBRSxDQUFDO1FBQ3BCLGVBQWUsRUFBRSxFQUFFO1FBQ25CLGtCQUFrQixFQUFFLENBQUM7UUFDckIsUUFBUSxFQUFFLENBQUM7S0FDZDtDQUNKO0FBRWMsMkJBQWEsR0FBQztJQUN6QixTQUFTLEVBQUUsc0hBQXNIO0NBQ3BJO0FBRWEsK0JBQWlCLEdBQUM7SUFDNUIsc0JBQXNCLEVBQUUsS0FBSztJQUM3QixtQkFBbUIsRUFBRSxJQUFJO0lBQ3pCLGdCQUFnQixFQUFFO1FBQ2QseUJBQXlCLEVBQUU7WUFDdkI7Z0JBQ0kscUJBQXFCLEVBQUUsSUFBSTtnQkFDM0IsdUJBQXVCLEVBQUUseUNBQXlDO2dCQUNsRSxPQUFPLEVBQUUsR0FBRztnQkFDWixlQUFlLEVBQUUsRUFBRTtnQkFDbkIsYUFBYSxFQUFFLEVBQUU7Z0JBQ2pCLGVBQWUsRUFBRSw2Q0FBNkM7Z0JBQzlELDJCQUEyQixFQUFFLG9CQUFvQjtnQkFDakQseUJBQXlCLEVBQUUsRUFBRTthQUNoQztZQUNEO2dCQUNJLHFCQUFxQixFQUFFLElBQUk7Z0JBQzNCLHVCQUF1QixFQUFFLHlDQUF5QztnQkFDbEUsT0FBTyxFQUFFLEdBQUc7Z0JBQ1osZUFBZSxFQUFFLEVBQUU7Z0JBQ25CLGFBQWEsRUFBRSxFQUFFO2dCQUNqQixlQUFlLEVBQUUsNkNBQTZDO2dCQUM5RCwyQkFBMkIsRUFBRSxvQkFBb0I7Z0JBQ2pELHlCQUF5QixFQUFFLEVBQUU7YUFDaEM7WUFDRDtnQkFDSSxxQkFBcUIsRUFBRSxJQUFJO2dCQUMzQix1QkFBdUIsRUFBRSx5Q0FBeUM7Z0JBQ2xFLE9BQU8sRUFBRSxHQUFHO2dCQUNaLGVBQWUsRUFBRSxFQUFFO2dCQUNuQixhQUFhLEVBQUUsRUFBRTtnQkFDakIsZUFBZSxFQUFFLDZDQUE2QztnQkFDOUQsMkJBQTJCLEVBQUUsb0JBQW9CO2dCQUNqRCx5QkFBeUIsRUFBRSxFQUFFO2FBQ2hDO1lBQ0Q7Z0JBQ0kscUJBQXFCLEVBQUUsSUFBSTtnQkFDM0IsdUJBQXVCLEVBQUUsdUNBQXVDO2dCQUNoRSxPQUFPLEVBQUUsRUFBRTtnQkFDWCxlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7Z0JBQ2pCLGVBQWUsRUFBRSw2Q0FBNkM7Z0JBQzlELDJCQUEyQixFQUFFLG9CQUFvQjtnQkFDakQseUJBQXlCLEVBQUUsRUFBRTthQUNoQztZQUNEO2dCQUNJLHFCQUFxQixFQUFFLElBQUk7Z0JBQzNCLHVCQUF1QixFQUFFLHVDQUF1QztnQkFDaEUsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsZUFBZSxFQUFFLENBQUM7Z0JBQ2xCLGFBQWEsRUFBRSxFQUFFO2dCQUNqQixlQUFlLEVBQUUsNkNBQTZDO2dCQUM5RCwyQkFBMkIsRUFBRSxvQkFBb0I7Z0JBQ2pELHlCQUF5QixFQUFFLEVBQUU7YUFDaEM7WUFDRDtnQkFDSSxxQkFBcUIsRUFBRSxJQUFJO2dCQUMzQix1QkFBdUIsRUFBRSx3Q0FBd0M7Z0JBQ2pFLE9BQU8sRUFBRSxFQUFFO2dCQUNYLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTtnQkFDakIsZUFBZSxFQUFFLDZDQUE2QztnQkFDOUQsMkJBQTJCLEVBQUUsb0JBQW9CO2dCQUNqRCx5QkFBeUIsRUFBRSxFQUFFO2FBQ2hDO1lBQ0Q7Z0JBQ0kscUJBQXFCLEVBQUUsSUFBSTtnQkFDM0IsdUJBQXVCLEVBQUUsd0NBQXdDO2dCQUNqRSxPQUFPLEVBQUUsRUFBRTtnQkFDWCxlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7Z0JBQ2pCLGVBQWUsRUFBRSw2Q0FBNkM7Z0JBQzlELDJCQUEyQixFQUFFLG9CQUFvQjtnQkFDakQseUJBQXlCLEVBQUUsRUFBRTthQUNoQztZQUNEO2dCQUNJLHFCQUFxQixFQUFFLElBQUk7Z0JBQzNCLHVCQUF1QixFQUFFLHdDQUF3QztnQkFDakUsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsZUFBZSxFQUFFLENBQUM7Z0JBQ2xCLGFBQWEsRUFBRSxFQUFFO2dCQUNqQixlQUFlLEVBQUUsNkNBQTZDO2dCQUM5RCwyQkFBMkIsRUFBRSxvQkFBb0I7Z0JBQ2pELHlCQUF5QixFQUFFLEVBQUU7YUFDaEM7WUFDRDtnQkFDSSxxQkFBcUIsRUFBRSxJQUFJO2dCQUMzQix1QkFBdUIsRUFBRSx3Q0FBd0M7Z0JBQ2pFLE9BQU8sRUFBRSxFQUFFO2dCQUNYLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTtnQkFDakIsZUFBZSxFQUFFLDZDQUE2QztnQkFDOUQsMkJBQTJCLEVBQUUsb0JBQW9CO2dCQUNqRCx5QkFBeUIsRUFBRSxFQUFFO2FBQ2hDO1lBQ0Q7Z0JBQ0kscUJBQXFCLEVBQUUsSUFBSTtnQkFDM0IsdUJBQXVCLEVBQUUsd0NBQXdDO2dCQUNqRSxPQUFPLEVBQUUsRUFBRTtnQkFDWCxlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7Z0JBQ2pCLGVBQWUsRUFBRSw2Q0FBNkM7Z0JBQzlELDJCQUEyQixFQUFFLG9CQUFvQjtnQkFDakQseUJBQXlCLEVBQUUsRUFBRTthQUNoQztZQUNEO2dCQUNJLHFCQUFxQixFQUFFLElBQUk7Z0JBQzNCLHVCQUF1QixFQUFFLHdDQUF3QztnQkFDakUsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsZUFBZSxFQUFFLENBQUM7Z0JBQ2xCLGFBQWEsRUFBRSxFQUFFO2dCQUNqQixlQUFlLEVBQUUsNkNBQTZDO2dCQUM5RCwyQkFBMkIsRUFBRSxvQkFBb0I7Z0JBQ2pELHlCQUF5QixFQUFFLEVBQUU7YUFDaEM7WUFDRDtnQkFDSSxxQkFBcUIsRUFBRSxJQUFJO2dCQUMzQix1QkFBdUIsRUFBRSx3Q0FBd0M7Z0JBQ2pFLE9BQU8sRUFBRSxFQUFFO2dCQUNYLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTtnQkFDakIsZUFBZSxFQUFFLDZDQUE2QztnQkFDOUQsMkJBQTJCLEVBQUUsb0JBQW9CO2dCQUNqRCx5QkFBeUIsRUFBRSxFQUFFO2FBQ2hDO1lBQ0Q7Z0JBQ0kscUJBQXFCLEVBQUUsSUFBSTtnQkFDM0IsdUJBQXVCLEVBQUUseUNBQXlDO2dCQUNsRSxPQUFPLEVBQUUsR0FBRztnQkFDWixlQUFlLEVBQUUsRUFBRTtnQkFDbkIsYUFBYSxFQUFFLEVBQUU7Z0JBQ2pCLGVBQWUsRUFBRSw2Q0FBNkM7Z0JBQzlELDJCQUEyQixFQUFFLG9CQUFvQjtnQkFDakQseUJBQXlCLEVBQUUsR0FBRzthQUNqQztZQUNEO2dCQUNJLHFCQUFxQixFQUFFLElBQUk7Z0JBQzNCLHVCQUF1QixFQUFFLHlDQUF5QztnQkFDbEUsT0FBTyxFQUFFLEdBQUc7Z0JBQ1osZUFBZSxFQUFFLEVBQUU7Z0JBQ25CLGFBQWEsRUFBRSxFQUFFO2dCQUNqQixlQUFlLEVBQUUsNkNBQTZDO2dCQUM5RCwyQkFBMkIsRUFBRSxvQkFBb0I7Z0JBQ2pELHlCQUF5QixFQUFFLEdBQUc7YUFDakM7WUFDRDtnQkFDSSxxQkFBcUIsRUFBRSxJQUFJO2dCQUMzQix1QkFBdUIsRUFBRSx5Q0FBeUM7Z0JBQ2xFLE9BQU8sRUFBRSxHQUFHO2dCQUNaLGVBQWUsRUFBRSxFQUFFO2dCQUNuQixhQUFhLEVBQUUsRUFBRTtnQkFDakIsZUFBZSxFQUFFLDZDQUE2QztnQkFDOUQsMkJBQTJCLEVBQUUsb0JBQW9CO2dCQUNqRCx5QkFBeUIsRUFBRSxHQUFHO2FBQ2pDO1lBQ0Q7Z0JBQ0kscUJBQXFCLEVBQUUsSUFBSTtnQkFDM0IsdUJBQXVCLEVBQUUsdUNBQXVDO2dCQUNoRSxPQUFPLEVBQUUsRUFBRTtnQkFDWCxlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7Z0JBQ2pCLGVBQWUsRUFBRSw2Q0FBNkM7Z0JBQzlELDJCQUEyQixFQUFFLG9CQUFvQjtnQkFDakQseUJBQXlCLEVBQUUsR0FBRzthQUNqQztZQUNEO2dCQUNJLHFCQUFxQixFQUFFLElBQUk7Z0JBQzNCLHVCQUF1QixFQUFFLHVDQUF1QztnQkFDaEUsT0FBTyxFQUFFLEdBQUc7Z0JBQ1osZUFBZSxFQUFFLENBQUM7Z0JBQ2xCLGFBQWEsRUFBRSxFQUFFO2dCQUNqQixlQUFlLEVBQUUsNkNBQTZDO2dCQUM5RCwyQkFBMkIsRUFBRSxvQkFBb0I7Z0JBQ2pELHlCQUF5QixFQUFFLEdBQUc7YUFDakM7WUFDRDtnQkFDSSxxQkFBcUIsRUFBRSxJQUFJO2dCQUMzQix1QkFBdUIsRUFBRSx3Q0FBd0M7Z0JBQ2pFLE9BQU8sRUFBRSxHQUFHO2dCQUNaLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTtnQkFDakIsZUFBZSxFQUFFLDZDQUE2QztnQkFDOUQsMkJBQTJCLEVBQUUsb0JBQW9CO2dCQUNqRCx5QkFBeUIsRUFBRSxHQUFHO2FBQ2pDO1lBQ0Q7Z0JBQ0kscUJBQXFCLEVBQUUsSUFBSTtnQkFDM0IsdUJBQXVCLEVBQUUsd0NBQXdDO2dCQUNqRSxPQUFPLEVBQUUsR0FBRztnQkFDWixlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7Z0JBQ2pCLGVBQWUsRUFBRSw2Q0FBNkM7Z0JBQzlELDJCQUEyQixFQUFFLG9CQUFvQjtnQkFDakQseUJBQXlCLEVBQUUsR0FBRzthQUNqQztZQUNEO2dCQUNJLHFCQUFxQixFQUFFLElBQUk7Z0JBQzNCLHVCQUF1QixFQUFFLHdDQUF3QztnQkFDakUsT0FBTyxFQUFFLEdBQUc7Z0JBQ1osZUFBZSxFQUFFLENBQUM7Z0JBQ2xCLGFBQWEsRUFBRSxFQUFFO2dCQUNqQixlQUFlLEVBQUUsNkNBQTZDO2dCQUM5RCwyQkFBMkIsRUFBRSxvQkFBb0I7Z0JBQ2pELHlCQUF5QixFQUFFLEdBQUc7YUFDakM7WUFDRDtnQkFDSSxxQkFBcUIsRUFBRSxJQUFJO2dCQUMzQix1QkFBdUIsRUFBRSx3Q0FBd0M7Z0JBQ2pFLE9BQU8sRUFBRSxHQUFHO2dCQUNaLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTtnQkFDakIsZUFBZSxFQUFFLDZDQUE2QztnQkFDOUQsMkJBQTJCLEVBQUUsb0JBQW9CO2dCQUNqRCx5QkFBeUIsRUFBRSxHQUFHO2FBQ2pDO1lBQ0Q7Z0JBQ0kscUJBQXFCLEVBQUUsSUFBSTtnQkFDM0IsdUJBQXVCLEVBQUUsd0NBQXdDO2dCQUNqRSxPQUFPLEVBQUUsR0FBRztnQkFDWixlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7Z0JBQ2pCLGVBQWUsRUFBRSw2Q0FBNkM7Z0JBQzlELDJCQUEyQixFQUFFLG9CQUFvQjtnQkFDakQseUJBQXlCLEVBQUUsR0FBRzthQUNqQztZQUNEO2dCQUNJLHFCQUFxQixFQUFFLElBQUk7Z0JBQzNCLHVCQUF1QixFQUFFLHdDQUF3QztnQkFDakUsT0FBTyxFQUFFLEdBQUc7Z0JBQ1osZUFBZSxFQUFFLENBQUM7Z0JBQ2xCLGFBQWEsRUFBRSxFQUFFO2dCQUNqQixlQUFlLEVBQUUsNkNBQTZDO2dCQUM5RCwyQkFBMkIsRUFBRSxvQkFBb0I7Z0JBQ2pELHlCQUF5QixFQUFFLEdBQUc7YUFDakM7WUFDRDtnQkFDSSxxQkFBcUIsRUFBRSxJQUFJO2dCQUMzQix1QkFBdUIsRUFBRSx3Q0FBd0M7Z0JBQ2pFLE9BQU8sRUFBRSxHQUFHO2dCQUNaLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTtnQkFDakIsZUFBZSxFQUFFLDZDQUE2QztnQkFDOUQsMkJBQTJCLEVBQUUsb0JBQW9CO2dCQUNqRCx5QkFBeUIsRUFBRSxHQUFHO2FBQ2pDO1lBQ0Q7Z0JBQ0kscUJBQXFCLEVBQUUsSUFBSTtnQkFDM0IsdUJBQXVCLEVBQUUseUNBQXlDO2dCQUNsRSxPQUFPLEVBQUUsSUFBSTtnQkFDYixlQUFlLEVBQUUsRUFBRTtnQkFDbkIsYUFBYSxFQUFFLEVBQUU7Z0JBQ2pCLGVBQWUsRUFBRSw2Q0FBNkM7Z0JBQzlELDJCQUEyQixFQUFFLG9CQUFvQjtnQkFDakQseUJBQXlCLEVBQUUsR0FBRzthQUNqQztZQUNEO2dCQUNJLHFCQUFxQixFQUFFLElBQUk7Z0JBQzNCLHVCQUF1QixFQUFFLHlDQUF5QztnQkFDbEUsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsZUFBZSxFQUFFLEVBQUU7Z0JBQ25CLGFBQWEsRUFBRSxFQUFFO2dCQUNqQixlQUFlLEVBQUUsNkNBQTZDO2dCQUM5RCwyQkFBMkIsRUFBRSxvQkFBb0I7Z0JBQ2pELHlCQUF5QixFQUFFLEdBQUc7YUFDakM7WUFDRDtnQkFDSSxxQkFBcUIsRUFBRSxJQUFJO2dCQUMzQix1QkFBdUIsRUFBRSx5Q0FBeUM7Z0JBQ2xFLE9BQU8sRUFBRSxJQUFJO2dCQUNiLGVBQWUsRUFBRSxFQUFFO2dCQUNuQixhQUFhLEVBQUUsRUFBRTtnQkFDakIsZUFBZSxFQUFFLDZDQUE2QztnQkFDOUQsMkJBQTJCLEVBQUUsb0JBQW9CO2dCQUNqRCx5QkFBeUIsRUFBRSxHQUFHO2FBQ2pDO1lBQ0Q7Z0JBQ0kscUJBQXFCLEVBQUUsSUFBSTtnQkFDM0IsdUJBQXVCLEVBQUUsdUNBQXVDO2dCQUNoRSxPQUFPLEVBQUUsR0FBRztnQkFDWixlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7Z0JBQ2pCLGVBQWUsRUFBRSw2Q0FBNkM7Z0JBQzlELDJCQUEyQixFQUFFLG9CQUFvQjtnQkFDakQseUJBQXlCLEVBQUUsR0FBRzthQUNqQztZQUNEO2dCQUNJLHFCQUFxQixFQUFFLElBQUk7Z0JBQzNCLHVCQUF1QixFQUFFLHVDQUF1QztnQkFDaEUsT0FBTyxFQUFFLEdBQUc7Z0JBQ1osZUFBZSxFQUFFLENBQUM7Z0JBQ2xCLGFBQWEsRUFBRSxFQUFFO2dCQUNqQixlQUFlLEVBQUUsNkNBQTZDO2dCQUM5RCwyQkFBMkIsRUFBRSxvQkFBb0I7Z0JBQ2pELHlCQUF5QixFQUFFLEdBQUc7YUFDakM7WUFDRDtnQkFDSSxxQkFBcUIsRUFBRSxJQUFJO2dCQUMzQix1QkFBdUIsRUFBRSx3Q0FBd0M7Z0JBQ2pFLE9BQU8sRUFBRSxHQUFHO2dCQUNaLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTtnQkFDakIsZUFBZSxFQUFFLDZDQUE2QztnQkFDOUQsMkJBQTJCLEVBQUUsb0JBQW9CO2dCQUNqRCx5QkFBeUIsRUFBRSxHQUFHO2FBQ2pDO1lBQ0Q7Z0JBQ0kscUJBQXFCLEVBQUUsSUFBSTtnQkFDM0IsdUJBQXVCLEVBQUUsd0NBQXdDO2dCQUNqRSxPQUFPLEVBQUUsR0FBRztnQkFDWixlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7Z0JBQ2pCLGVBQWUsRUFBRSw2Q0FBNkM7Z0JBQzlELDJCQUEyQixFQUFFLG9CQUFvQjtnQkFDakQseUJBQXlCLEVBQUUsR0FBRzthQUNqQztZQUNEO2dCQUNJLHFCQUFxQixFQUFFLElBQUk7Z0JBQzNCLHVCQUF1QixFQUFFLHdDQUF3QztnQkFDakUsT0FBTyxFQUFFLEdBQUc7Z0JBQ1osZUFBZSxFQUFFLENBQUM7Z0JBQ2xCLGFBQWEsRUFBRSxFQUFFO2dCQUNqQixlQUFlLEVBQUUsNkNBQTZDO2dCQUM5RCwyQkFBMkIsRUFBRSxvQkFBb0I7Z0JBQ2pELHlCQUF5QixFQUFFLEdBQUc7YUFDakM7WUFDRDtnQkFDSSxxQkFBcUIsRUFBRSxJQUFJO2dCQUMzQix1QkFBdUIsRUFBRSx3Q0FBd0M7Z0JBQ2pFLE9BQU8sRUFBRSxHQUFHO2dCQUNaLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTtnQkFDakIsZUFBZSxFQUFFLDZDQUE2QztnQkFDOUQsMkJBQTJCLEVBQUUsb0JBQW9CO2dCQUNqRCx5QkFBeUIsRUFBRSxHQUFHO2FBQ2pDO1lBQ0Q7Z0JBQ0kscUJBQXFCLEVBQUUsSUFBSTtnQkFDM0IsdUJBQXVCLEVBQUUsd0NBQXdDO2dCQUNqRSxPQUFPLEVBQUUsR0FBRztnQkFDWixlQUFlLEVBQUUsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLEVBQUU7Z0JBQ2pCLGVBQWUsRUFBRSw2Q0FBNkM7Z0JBQzlELDJCQUEyQixFQUFFLG9CQUFvQjtnQkFDakQseUJBQXlCLEVBQUUsR0FBRzthQUNqQztZQUNEO2dCQUNJLHFCQUFxQixFQUFFLElBQUk7Z0JBQzNCLHVCQUF1QixFQUFFLHdDQUF3QztnQkFDakUsT0FBTyxFQUFFLEdBQUc7Z0JBQ1osZUFBZSxFQUFFLENBQUM7Z0JBQ2xCLGFBQWEsRUFBRSxFQUFFO2dCQUNqQixlQUFlLEVBQUUsNkNBQTZDO2dCQUM5RCwyQkFBMkIsRUFBRSxvQkFBb0I7Z0JBQ2pELHlCQUF5QixFQUFFLEdBQUc7YUFDakM7WUFDRDtnQkFDSSxxQkFBcUIsRUFBRSxJQUFJO2dCQUMzQix1QkFBdUIsRUFBRSx3Q0FBd0M7Z0JBQ2pFLE9BQU8sRUFBRSxHQUFHO2dCQUNaLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixhQUFhLEVBQUUsRUFBRTtnQkFDakIsZUFBZSxFQUFFLDZDQUE2QztnQkFDOUQsMkJBQTJCLEVBQUUsb0JBQW9CO2dCQUNqRCx5QkFBeUIsRUFBRSxHQUFHO2FBQ2pDO1NBQ0o7UUFDRCxVQUFVLEVBQUUsV0FBVztLQUMxQjtDQUNKO0FBQ2MsaUNBQW1CLEdBQUMsRUFBQyxtQkFBbUIsRUFBRSxLQUFLLEVBQUMsQ0FBQzs7Ozs7Ozs7QUN2dkRwRSxFQUFFO0FBQ0YsRUFBRTtBQUNGLEVBQUU7QUFDRixJQUFJLENBQUMsR0FBQztJQUVGLElBQUksSUFBSSxHQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDeEIsTUFBTTtRQUNGLEdBQUcsRUFBQyxVQUFTLE9BQWE7WUFBRSx3QkFBd0I7aUJBQXhCLFVBQXdCLEVBQXhCLHFCQUF3QixFQUF4QixJQUF3QjtnQkFBeEIsdUNBQXdCOztZQUVqRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDN0IsQ0FBQztRQUNELEtBQUssRUFBQyxVQUFTLE9BQWE7WUFBRSx3QkFBd0I7aUJBQXhCLFVBQXdCLEVBQXhCLHFCQUF3QixFQUF4QixJQUF3QjtnQkFBeEIsdUNBQXdCOztZQUVyRCxNQUFNLENBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDL0IsQ0FBQztRQUVMLE1BQU0sRUFBQyxVQUFTLElBQWMsRUFBRSxPQUFnQjtZQUFFLHdCQUF3QjtpQkFBeEIsVUFBd0IsRUFBeEIscUJBQXdCLEVBQXhCLElBQXdCO2dCQUF4Qix1Q0FBd0I7O1lBQVMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUFFLENBQUM7UUFDeEgsS0FBSyxFQUFDLGNBQWlCLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBQztRQUNwQyxLQUFLLEVBQUMsVUFBUyxVQUFtQixJQUFRLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBQztRQUM1RSxLQUFLLEVBQUMsVUFBUyxPQUFnQjtZQUFFLHdCQUF3QjtpQkFBeEIsVUFBd0IsRUFBeEIscUJBQXdCLEVBQXhCLElBQXdCO2dCQUF4Qix1Q0FBd0I7O1lBQVUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUFBLENBQUM7UUFDckcsS0FBSyxFQUFDLGNBQWlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUM7UUFDM0MsSUFBSSxFQUFDLFVBQVMsT0FBYTtZQUFFLHdCQUF3QjtpQkFBeEIsVUFBd0IsRUFBeEIscUJBQXdCLEVBQXhCLElBQXdCO2dCQUF4Qix1Q0FBd0I7O1lBQVEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUFBLENBQUM7UUFDOUYsSUFBSSxFQUFDLFVBQVMsT0FBYTtZQUFFLHdCQUF3QjtpQkFBeEIsVUFBd0IsRUFBeEIscUJBQXdCLEVBQXhCLElBQXdCO2dCQUF4Qix1Q0FBd0I7O1lBQVEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUFBLENBQUM7S0FDN0Y7QUFDTCxDQUFDLENBQUM7QUFFSSxNQUFPLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDO0FBRzVCLDhCQUE4QjtBQUM5QixlQUFlO0FBQ2YsK0JBQStCO0FBQy9CLGlDQUFpQztBQUNqQywyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLEVBQUU7QUFDRixtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUlBQXFJO0FBQ3JJLCtDQUErQztBQUMvQyx1RkFBdUY7QUFDdkYsZ0hBQWdIO0FBQ2hILHNEQUFzRDtBQUN0RCx5R0FBeUc7QUFDekcsd0dBQXdHO0FBQ3hHLFNBQVM7QUFDVCx1QkFBdUI7QUFDdkIsRUFBRTtBQUNGLEVBQUU7QUFDRixFQUFFO0FBQ0YsRUFBRTtBQUNGLEVBQUU7QUFDRixrQ0FBa0M7QUFDbEMsNkJBQTZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RGtCO0FBU3hCO0FBa0JnQjtBQUV2QztJQUFBO0lBNGJBLENBQUM7SUFqYUcsc0JBQVcseUJBQU07YUFBakI7WUFDSSxNQUFNLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQztRQUNuQyxDQUFDO2FBRUQsVUFBa0IsS0FBYTtZQUMzQixlQUFlLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNwQyxDQUFDOzs7T0FKQTtJQVFELHNCQUFXLDRCQUFTO2FBQXBCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzthQUVELFVBQXNCLEtBQVk7WUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQzs7O09BSkE7SUFPRCxzQkFBVyw2QkFBVTthQUFyQjtZQUdJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7YUFFRCxVQUF1QixLQUFZO1lBRS9CLGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNsRCxlQUFlLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQzs7O09BUEE7SUFTYSwrQkFBZSxHQUE3QjtRQUdJLGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsd0JBQXdCO1lBQ2xGLEVBQUUsRUFBQyxDQUFDLHdCQUF3QixDQUFDLENBQzdCLENBQUM7Z0JBQ0csTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUNELGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLGFBQWE7Z0JBQzVELGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFdBQVc7b0JBRXhELEVBQUUsQ0FBQyxDQUFFLGFBQWEsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUVoQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsVUFBVTs0QkFDakMscUJBQXFCOzRCQUNyQixJQUFJLENBQUM7Z0NBQ0QsSUFBSSxrQ0FBa0MsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDOzRCQUNwRSxDQUFDOzRCQUNELEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0NBQ1IsT0FBTyxDQUFDLEtBQUssQ0FBQywrREFBK0QsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDO2dDQUMzRixPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQzs0QkFDN0IsQ0FBQzs0QkFDRCxrQ0FBa0MsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFVBQVM7NEJBQ3RFLGtDQUFrQyxDQUFDLHVDQUF1QyxHQUFHLHdCQUF3Qjs0QkFFckcsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixHQUFDLG1DQUFtQyxFQUFFLGtDQUFrQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBUztnQ0FDbEosZUFBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dDQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFEQUFxRCxDQUFDOzRCQUN0RSxDQUFDLEVBQ0QsVUFBQyxHQUFPO2dDQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0RBQWdELENBQUM7NEJBQ2pFLENBQUMsQ0FDSixDQUFDO3dCQUNOLENBQUMsRUFBRSxjQUFjLEtBQUs7NEJBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3ZCLENBQUMsRUFBRSxtQkFBbUIsRUFBRSxvQkFBb0IsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUNwRSxDQUFDO2dCQUVMLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFBQSxDQUFDO0lBSUsseUJBQVMsR0FBaEIsVUFBaUIsR0FBTztRQUNwQixHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ25CLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLENBQUM7UUFDTCxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO0lBQzlCLENBQUM7SUFHYSx1QkFBTyxHQUFyQixVQUFzQixPQUFjLEVBQUUsR0FBVTtRQUM1QyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQ2QsQ0FBQztZQUNMLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDbkIsQ0FBQztRQUNPLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNmLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDL0MsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFDRCw0REFBNEQ7UUFDNUQsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3ZDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixzQ0FBc0M7WUFDdEMsMkJBQTJCO1lBQzNCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksS0FBSyxHQUFHLENBQUM7Z0JBQUMsUUFBUSxDQUFDO1lBQ3BDLHlDQUF5QztZQUN6QyxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO2dCQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUVsQyxJQUFJO2dCQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQztRQUNELCtDQUErQztRQUMvQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQyx1Q0FBdUM7UUFDdkMsSUFBSSxHQUFHLEdBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRzdELEVBQUUsRUFBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQzdCLENBQUM7WUFDRyxHQUFHLEdBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO1FBQ2pDLENBQUM7UUFDRCxNQUFNLENBQUMsR0FBRyxDQUFDO0lBRWYsQ0FBQztJQUdhLDJCQUFXLEdBQXpCO1FBRUksZUFBZSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDekMsQ0FBQztJQUNhLDRCQUFZLEdBQTFCO1FBQ0ksZUFBZSxDQUFDLHFCQUFxQixFQUFFO0lBQzNDLENBQUM7SUFFYSxxQkFBSyxHQUFuQixVQUFvQixPQUFjLEVBQUUsS0FBYTtRQUM3QyxJQUFJLEtBQUssR0FBRyxlQUFlLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUN6QyxLQUFLLEVBQUUsS0FBSztZQUNaLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQztTQUNsQixDQUFDLENBQUM7UUFDSCxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVhLCtCQUFlLEdBQTdCLFVBQThCLFNBQVM7UUFFbkMsSUFBSSxhQUFhLEdBQUMsSUFBSSxDQUFDO1FBQ3ZCLEVBQUUsRUFBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FDeEIsQ0FBQztZQUNHLE1BQU0sQ0FBRSxTQUFTLENBQUMsU0FBUyxDQUFDO1FBQ2hDLENBQUM7UUFDRCxFQUFFLEVBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQy9CLENBQUM7WUFDRyxNQUFNLENBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQztRQUN2QyxDQUFDO1FBRUQsRUFBRSxFQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBRSxDQUFDLENBQUMsQ0FDMUIsQ0FBQztZQUNHLEVBQUUsRUFBRSxlQUFlLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxDQUM5QyxDQUFDO2dCQUNHLEVBQUUsRUFBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxRQUFNO2dCQUN6RSxDQUFDO2dCQUNELElBQUksQ0FDSixDQUFDO29CQUNHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxvQ0FBb0MsQ0FBQyxRQUFNO2dCQUM3RSxDQUFDO1lBQ0wsQ0FBQztZQUNELElBQUksQ0FDSixDQUFDO2dCQUNHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztZQUVsRSxDQUFDO1lBRUQsc0JBQXNCO1FBQzFCLENBQUM7UUFFRCxJQUFJLFNBQVMsR0FBRSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0MsRUFBRSxFQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDWCxFQUFFLENBQUMsQ0FBQyw4REFBVSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixhQUFhLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzNDLENBQUM7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFDRixhQUFhLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzNDLENBQUM7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN2RCxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQ3pCLENBQUM7UUFLRCxnQkFBZ0I7UUFDaEIscUVBQXFFO1FBQ3JFLDhDQUE4QztRQUM5QywwQkFBMEI7UUFDMUIsb0JBQW9CO1FBQ3BCLHFDQUFxQztJQUV6QyxDQUFDO0lBRWEsdUNBQXVCLEdBQXJDO1FBRUksRUFBRSxFQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNqRSxNQUFNLENBQUMsS0FBSyxDQUFDO1lBRWpCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNoRSxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7UUFDTCxDQUFDO1FBQ0QsSUFBSSxDQUNKLENBQUM7WUFDRyxPQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxRSxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUM1QixDQUFDO1FBRUQsSUFBSTtRQUVKLG9DQUFvQztRQUNwQyxnREFBZ0Q7UUFDaEQsdUZBQXVGO1FBQ3ZGLGdDQUFnQztRQUNoQyw4QkFBOEI7UUFDOUIscUZBQXFGO1FBQ3JGLElBQUk7SUFFUixDQUFDO0lBRWEsa0NBQWtCLEdBQWhDLFVBQWlDLE9BQWUsRUFBRSxLQUFhO1FBRTNELEVBQUUsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNYLE9BQU8sR0FBRyxnQkFBZ0I7WUFDOUIsQ0FBQztZQUdELGVBQWUsQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7Z0JBQ3hELE9BQU8sRUFBRSxPQUFPO2dCQUNoQixtQkFBbUIsRUFBRSxJQUFJO2dCQUN6QixZQUFZLEVBQUMsSUFBSTthQUNwQixDQUFDLENBQUM7WUFFSCxlQUFlLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRWpDLGVBQWUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3JDLENBQUM7SUFFTCxDQUFDO0lBRWEscUNBQXFCLEdBQW5DO1FBRUksSUFBSSxDQUFDO1lBRUQsZUFBZSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDbEMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBTyxDQUFDLENBQUMsQ0FBQztRQUVyRCxDQUFDO1FBQ0QsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQ1gsQ0FBQztRQUVELENBQUM7SUFDTCxDQUFDO0lBRWEsMEJBQVUsR0FBeEIsVUFBMkIsSUFBWTtRQUVuQyxvR0FBb0c7UUFDcEcsbUZBQW1GO1FBQ25GLGdGQUFnRjtRQUMvRSxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBUSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUM7UUFDdEQsRUFBRSxFQUFDLElBQUksSUFBRSxJQUFJLElBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLDhEQUFVLENBQUMsSUFBSSxJQUFFLElBQUksSUFBRSw4REFBVSxDQUFDLElBQUksSUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQ3ZFLENBQUM7WUFDRyxlQUFlLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQywyRkFBMkY7WUFDM0YsZUFBZSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzdDLDJCQUEyQjtZQUMzQiwyQkFBMkI7WUFFM0IsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUMsT0FBTyxDQUFDO1lBQ2hELGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFDLElBQUksQ0FBQztZQUNuRCxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBUyxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBQyxPQUFPLENBQUMsQ0FBQztZQUloRiw4REFBVSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUM7UUFHekIsQ0FBQztRQUNELElBQUksQ0FDSixDQUFDO1lBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0MsMkZBQTJGO1lBQzNGLGVBQWUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BDLGVBQWUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztZQUU3QywyQkFBMkI7WUFDM0IsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUMsTUFBTSxDQUFDO1lBQzlDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFTLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRy9FLDhEQUFVLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQztRQUd6QixDQUFDO1FBQ0QsOENBQThDO1FBQzlDLG1DQUFtQztJQUN2QyxDQUFDO0lBRWEseUJBQVMsR0FBdkIsVUFBd0IsT0FBTztRQUUzQixPQUFPLENBQUMsSUFBSSxDQUFFLElBQUksRUFBRSxJQUFJLEVBQUcsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxXQUFXLEVBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEcsQ0FBQztJQTBHTCxzQkFBQztBQUFELENBQUM7O0FBM2JpQixrQ0FBa0IsR0FBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyx5Q0FBd0M7QUFDaEYsaUNBQWlCLEdBQUcsRUFBRSxDQUFDO0FBQ3ZCLGtDQUFrQixHQUFHLDRCQUE0QixDQUFDO0FBQ3pELHVCQUFPLEdBQVUsNEJBQTRCO0FBQ3RDLHVCQUFPLEdBQWlCLElBQUksQ0FBQztBQUM3Qix5QkFBUyxHQUFtQixJQUFJLENBQUM7QUFLakMsc0JBQU0sR0FBQyxJQUFJLENBQUM7QUFhM0Isa0dBQWtHO0FBRWxGLHVCQUFPLEdBQVcsS0FBSyxDQUFDO0FBVXhCLDBCQUFVLEdBQVUsRUFBRSxDQUFDO0FBU3RCLDJCQUFXLEdBQVUsSUFBSSxDQUFDO0FBdVM5QyxvREFBb0Q7QUFFcEQscUNBQXFDO0FBQ3JDLDBCQUEwQjtBQUMxQixrQ0FBa0M7QUFDbEMsOENBQThDO0FBQzlDLHdEQUF3RDtBQUN4RCxhQUFhO0FBQ2IsdUNBQXVDO0FBQ3ZDLEtBQUs7QUFJRixpQ0FBaUM7QUFHbEIsb0JBQUksR0FBUSxJQUFJLDJEQUFJLENBQUMsSUFBSSxpRUFBVSxDQUFDLElBQUksaUVBQVUsRUFBRSxFQUM5RCxJQUFJLHNFQUFlLENBQUM7SUFDWixJQUFJLEVBQUUsSUFBSTtJQUNWLE9BQU8sRUFBRSxDQUFDO1FBQ04sSUFBSSxPQUFPLEdBQUcsSUFBSSw4REFBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUM7UUFDbEQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLENBQUM7UUFDNUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDLENBQUMsRUFBRTtJQUNKLE1BQU0sRUFBRSxHQUFHO0lBQ1gsVUFBVSxFQUFFLElBQUk7SUFDaEIsSUFBSSxFQUFFLENBQUM7SUFDUCxHQUFHLEVBQUUsSUFBSTtDQUNaLENBQ0osRUFBRSxJQUFJLHlFQUFrQixFQUFFLENBQUMsRUFDNUIsSUFBSSx5RUFBa0IsRUFBRSxDQUFDO0FBRWYsNEJBQVksR0FBRztJQUN6QixPQUFPLEVBQUUsRUFBRTtJQUNYLGtCQUFrQixFQUFFLEVBQUU7SUFDdEIsS0FBSyxFQUFFLEVBQUU7SUFDVCxzQkFBc0IsRUFBRSxFQUFFO0lBQzFCLEtBQUssRUFBRSxFQUFFO0lBQ1QsY0FBYyxFQUFFLEVBQUU7SUFDbEIsMEJBQTBCLEVBQUUsRUFBRTtJQUM5QixXQUFXLEVBQUUsRUFBRTtJQUNmLGNBQWMsRUFBRSxFQUFFO0lBQ2xCLHNCQUFzQixFQUFFLEVBQUU7SUFDMUIsU0FBUyxFQUFFLEVBQUU7SUFDYixtQkFBbUIsRUFBRSxFQUFFO0lBQ3ZCLFNBQVMsRUFBRSxFQUFFO0lBQ2IsZUFBZSxFQUFFLEVBQUU7SUFDbkIsUUFBUSxFQUFFLEVBQUU7SUFDWixrQkFBa0IsRUFBRSxFQUFFO0lBQ3RCLGtCQUFrQixFQUFFLEVBQUU7SUFDdEIsMEJBQTBCLEVBQUUsRUFBRTtJQUM5QixpQkFBaUIsRUFBRSxFQUFFO0lBQ3JCLHlCQUF5QixFQUFFLEVBQUU7SUFDN0Isb0JBQW9CLEVBQUUsRUFBRTtJQUN4Qiw0QkFBNEIsRUFBRSxFQUFFO0lBQ2hDLGVBQWUsRUFBRSxFQUFFO0lBQ25CLHFCQUFxQixFQUFFLEVBQUU7SUFDekIsZ0JBQWdCLEVBQUUsRUFBRTtJQUNwQixzQkFBc0IsRUFBRSxFQUFFO0lBQzFCLGtCQUFrQixFQUFFLEVBQUU7SUFDdEIsd0JBQXdCLEVBQUUsRUFBRTtJQUM1QixjQUFjLEVBQUUsRUFBRTtJQUNsQixvQkFBb0IsRUFBRSxFQUFFO0lBQ3hCLGFBQWEsRUFBRSxFQUFFO0lBQ2pCLG1CQUFtQixFQUFFLEVBQUU7SUFDdkIsVUFBVSxFQUFFLEVBQUU7SUFDZCxNQUFNLEVBQUUsRUFBRTtJQUNWLFdBQVcsRUFBRSxFQUFFO0lBQ2YsWUFBWSxFQUFFLEVBQUU7Q0FHbkIsQ0FBQztBQW1DTjtJQUlJLGNBQVksTUFBbUIsRUFBRSxLQUFrQjtRQUF2QyxxQ0FBbUI7UUFBRSxtQ0FBa0I7UUFDL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDOztBQUVEO0lBRUksa0JBQW1CLE1BQXFCLEVBQVMsS0FBb0I7UUFBbEQsdUNBQXFCO1FBQVMscUNBQW9CO1FBQWxELFdBQU0sR0FBTixNQUFNLENBQWU7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFlO0lBQ3JFLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQzs7QUFHRDtJQUVJLHFCQUFtQixJQUFZLEVBQVMsR0FBVztRQUFoQyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsUUFBRyxHQUFILEdBQUcsQ0FBUTtJQUNuRCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDOztBQUdELElBQVksY0FZWDtBQVpELFdBQVksY0FBYztJQUV0QixrRUFBZ0I7SUFDaEIsd0RBQVc7SUFDWCwwREFBWTtJQUNaLDhEQUFjO0lBR2QscUVBQWtCO0lBQ2xCLDZEQUFjO0lBQ2QsK0RBQWU7SUFDZixtRUFBaUI7QUFDckIsQ0FBQyxFQVpXLGNBQWMsS0FBZCxjQUFjLFFBWXpCO0FBR0Q7SUFBNEIsaUNBQVc7SUFBdkM7O0lBUUEsQ0FBQztJQVBHLCtCQUFPLEdBQVAsVUFBUSxPQUFjLEVBQUUsR0FBVTtRQUM5QixzQ0FBc0M7UUFDdEMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDNUIsTUFBTSxDQUFDLGlCQUFNLE9BQU8sWUFBQywyQkFBMkIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMzRCxDQUFDO1FBQ0QsTUFBTSxDQUFDLGlCQUFNLE9BQU8sWUFBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxDQVIyQixzRUFBVyxHQVF0QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBCYXNlUmVxdWVzdE9wdGlvbnMsXG4gICAgQnJvd3NlclhocixcbiAgICBDb29raWVYU1JGU3RyYXRlZ3ksXG4gICAgSGVhZGVycyxcbiAgICBIdHRwLFxuICAgIFJlcXVlc3QsXG4gICAgUmVxdWVzdE1ldGhvZCxcbiAgICBSZXF1ZXN0T3B0aW9ucyxcbiAgICBSZXNwb25zZSxcbiAgICBSZXNwb25zZU9wdGlvbnMsXG4gICAgVVJMU2VhcmNoUGFyYW1zLFxuICAgIFhIUkJhY2tlbmRcbn0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RpbWVvdXQnO1xuaW1wb3J0IHtIZWFkZXJ9IGZyb20gXCJpb25pYy1hbmd1bGFyL3VtZC9uYXZpZ2F0aW9uL25hdi1pbnRlcmZhY2VzXCI7XG5pbXBvcnQge2R1bW15UmVzcG9uc2V9IGZyb20gXCIuLi9zaGFyZWQvZHVtbXlSZXNwb25zZVwiO1xuaW1wb3J0IHtnbG9iYWxWYXJpYWJsZXN9IGZyb20gXCIuLi9zaGFyZWQvb3RoZXJzX3NlcnZpY2VzQW5kU3RhdGljL2dsb2JhbFZhcmlhYmxlc1wiO1xuXG5cbmV4cG9ydCB2YXIgUGF0aCA9IHBhcmFtQnVpbGRlcihcIlBhdGhcIik7XG5leHBvcnQgdmFyIFF1ZXJ5ID0gcGFyYW1CdWlsZGVyKFwiUXVlcnlcIik7XG5leHBvcnQgdmFyIEJvZHkgPSBwYXJhbUJ1aWxkZXIoXCJCb2R5XCIpO1xuXG5leHBvcnQgdmFyIEJvZHlBc0lzID0gcGFyYW1CdWlsZGVyKFwiQm9keUFzSXNcIikoXCJCb2R5QXNJc1wiKTtcblxuXG5cbmV4cG9ydCBjbGFzcyBMaWJyYXJ5R2xvYmFsVmFyaWFibGVzSW5pdHtcblxuICBwdWJsaWMgc3RhdGljIGFwcEhlYWRlcnMgOiBhbnk7XG4gIHB1YmxpYyBzdGF0aWMgYmFzZVVybDphbnk7XG5cbiAgcHVibGljIHN0YXRpYyBmdW5jRHVtbXlSZXNwb25zZSA9IGR1bW15UmVzcG9uc2UuZ2V0RHVtbXlTZXJ2aWNlUmVzcG9uc2U7XG5cbiAgcHVibGljIHN0YXRpYyBodHRwOkh0dHAgPSBuZXcgSHR0cChuZXcgWEhSQmFja2VuZChuZXcgQnJvd3NlclhocigpLCBuZXcgUmVzcG9uc2VPcHRpb25zKHtcbiAgICAgIGJvZHk6IG51bGwsXG4gICAgICBoZWFkZXJzOiAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICByZXR1cm4gaGVhZGVycztcbiAgICAgIH0pKCksXG4gICAgICBzdGF0dXM6IDIwMCxcbiAgICAgIHN0YXR1c1RleHQ6IFwiT2tcIixcbiAgICAgIHR5cGU6IDIsXG4gICAgICB1cmw6IG51bGxcbiAgICB9XG4gICkgLG5ldyBDb29raWVYU1JGU3RyYXRlZ3koKSksIG5ldyBCYXNlUmVxdWVzdE9wdGlvbnMoKSk7XG5cblxuXG5cbiAgcHVibGljIHN0YXRpYyBzZXRDb25maWcoY29uZmlnOmFueT17fSk6YW55XG4gIHtcbiAgICBpZihjb25maWdbJ2Jhc2VVcmwnXSkge1xuICAgICAgTGlicmFyeUdsb2JhbFZhcmlhYmxlc0luaXQuYmFzZVVybCA9IGNvbmZpZ1snYmFzZVVybCddO1xuICAgIH1cbiAgICBpZihjb25maWdbJ2FwcEhlYWRlcnMnXSkge1xuICAgICAgTGlicmFyeUdsb2JhbFZhcmlhYmxlc0luaXQuYXBwSGVhZGVycyA9IGNvbmZpZ1snYXBwSGVhZGVycyddO1xuICAgIH1cbiAgcmV0dXJuIExpYnJhcnlHbG9iYWxWYXJpYWJsZXNJbml0O1xuXG4gIH1cbn1cblxuZXhwb3J0IHZhciBHZXQgPSBtZXRob2RCdWlsZGVyKFJlcXVlc3RNZXRob2QuR2V0KTtcbmV4cG9ydCB2YXIgUG9zdCA9IG1ldGhvZEJ1aWxkZXIoUmVxdWVzdE1ldGhvZC5Qb3N0KTtcbmV4cG9ydCB2YXIgUHV0ID0gbWV0aG9kQnVpbGRlcihSZXF1ZXN0TWV0aG9kLlB1dCk7XG5leHBvcnQgdmFyIERlbGV0ZSA9IG1ldGhvZEJ1aWxkZXIoUmVxdWVzdE1ldGhvZC5EZWxldGUpO1xuXG5cblxuXG5cbmZ1bmN0aW9uIHBhcmFtQnVpbGRlciAocGFyYW1OYW1lOmFueSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGtleTpzdHJpbmcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldENsYXNzOmFueSwgbWV0aG9kTmFtZTpzdHJpbmcgfCBzeW1ib2wsIHBhcmFtZXRlckluZGV4Om51bWJlcikge1xuXG4gICAgICB2YXIgbWV0YWRhdGFLZXkgPSBgJHttZXRob2ROYW1lfV8ke3BhcmFtTmFtZX1fcGFyYW1ldGVyc2A7XG4gICAgICB2YXIgcGFyYW1PYmo6YW55ID0ge1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgcGFyYW1ldGVySW5kZXg6IHBhcmFtZXRlckluZGV4XG4gICAgICB9O1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0Q2xhc3NbbWV0YWRhdGFLZXldKSkgey8vM2FsYXNoYW4gYXNob2YgaGFsIG1hd2dvb2Qgd2FsbGEgbGEyIDNhbGFzaGFuIGxhdyBoYWRlZWYgMiBwYXRocyBtYXllM21lbHNoIG92ZXJyaWRlIDNhbGEgd2E3ZWQgbWF3Z29vZFxuICAgICAgICB0YXJnZXRDbGFzc1ttZXRhZGF0YUtleV0ucHVzaChwYXJhbU9iaik7Ly90aGUgdmFyIGNvbnZlcnRlZCB0byBhbiBhcnJheSAzYWR5IHdlIGhheWUzbWVsIGZlaGEgcHVzaFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0Q2xhc3NbbWV0YWRhdGFLZXldID0gW3BhcmFtT2JqXTsvL2hlbmEgYmEzbWVsIHNldCBiYTJvbG8gZWwga2V5IGRhIDdvdCBmZWggZWwgb2JqZWN0IGRhXG4gICAgICB9XG4gICAgfTtcbiAgfTtcbn1cblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIFRpbWVPdXQoc2VydmljZVRpbWVPdXQ6bnVtYmVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OmFueSwgcHJvcGVydHlLZXk6c3RyaW5nLCBkZXNjcmlwdG9yOmFueSkge1xuICAgIGRlc2NyaXB0b3Iuc2VydmljZVRpbWVPdXQgPSBzZXJ2aWNlVGltZU91dDtcbiAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgfTtcbn1cblxuXG5cbmZ1bmN0aW9uIG1ldGhvZEJ1aWxkZXIocmVxdWVzdE1ldGhvZE51bWJlcjpudW1iZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh1cmw6c3RyaW5nLGRpc2FiZVByZUZ1bmN0aW9uPWZhbHNlLGRpc2FibGVQb3N0RnVuY3Rpb249ZmFsc2UsIGN1c3RvbUhlYWRlcj86IEhlYWRlcikgey8vdGhlc2UgcGFyYW1ldGVycyB3aGljaCBhcmUgc2VudCBmcm9tIHRoZSBzZXJ2aWNlIGxpa2UgQFBvc3QoXCIvbG9naW4vY2hlY2tQYXNzd29yZFwiLCBuZXcgSGVhZGVycykgZGVmaW5lZCBhYm92ZSBQb3N0XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXRDbGFzczphbnksIG1ldGhvZE5hbWU6c3RyaW5nLCBkZXNjcmlwdG9yOmFueSkge1xuXG4gICAgICB2YXIgcFBhdGggPSB0YXJnZXRDbGFzc1tgJHttZXRob2ROYW1lfV9QYXRoX3BhcmFtZXRlcnNgXTtcbiAgICAgIHZhciBwUXVlcnkgPSB0YXJnZXRDbGFzc1tgJHttZXRob2ROYW1lfV9RdWVyeV9wYXJhbWV0ZXJzYF07XG4gICAgICB2YXIgcEJvZHkgPSB0YXJnZXRDbGFzc1tgJHttZXRob2ROYW1lfV9Cb2R5X3BhcmFtZXRlcnNgXTtcbiAgICAgIHZhciBwQm9keUFzSXMgPSB0YXJnZXRDbGFzc1tgJHttZXRob2ROYW1lfV9Cb2R5QXNJc19wYXJhbWV0ZXJzYF07XG4gICAgICB2YXIgcEZpbGUgPSB0YXJnZXRDbGFzc1tgJHttZXRob2ROYW1lfV9GaWxlX3BhcmFtZXRlcnNgXTtcblxuICAgICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uICguLi5hcmdzOmFueVtdKSB7XG5cbiAgICAgICAgLy8gIGlmKExpYnJhcnlHbG9iYWxWYXJpYWJsZXNJbml0LmZ1bmNEdW1teVJlc3BvbnNlKXtcbiAgICAgICAgLy8gICByZXR1cm4gTGlicmFyeUdsb2JhbFZhcmlhYmxlc0luaXQuZnVuY0R1bW15UmVzcG9uc2UobWV0aG9kTmFtZSwxMDAwKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIHZhciB0ZW1wVVJMPXVybDtcblxuICAgICAgICBpZihwUGF0aClcbiAgICAgICAge1xuICAgICAgICAgIHRlbXBVUkwgPSBfc3Vic3RpdHV0ZSh0ZW1wVVJMICwgYXJncywgcFBhdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHF1ZXJ5U3RyaW5nUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICBpZihwUXVlcnkpe1xuICAgICAgICAgIHRlbXBVUkwgPSB0ZW1wVVJMICtcIj9cIjtcbiAgICAgICAgICBmb3IodmFyIGk9MDsgaTxwUXVlcnkubGVuZ3RoOyBpKyspe1xuXG4gICAgICAgICAgICB2YXIga2V5ID0gcFF1ZXJ5W2ldLmtleTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGFyZ3NbcFF1ZXJ5W2ldLnBhcmFtZXRlckluZGV4XTtcblxuICAgICAgICAgICAgLy8gaWYoaSA+IDApe1xuICAgICAgICAgICAgLy8gICB1cmwgPSB1cmwgK1wiJlwiO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gdXJsID0gdXJsICtwUXVlcnlbaV0ua2V5K1wiPVwiK2FyZ3NbcFF1ZXJ5W2ldLnBhcmFtZXRlckluZGV4XTtcblxuICAgICAgICAgICAgcXVlcnlTdHJpbmdQYXJhbXMuc2V0KGVuY29kZVVSSUNvbXBvbmVudChrZXkpLCBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHBCb2R5KXtcbiAgICAgICAgICB2YXIgYm9keUpTT04gPSB7fTtcbiAgICAgICAgICB2YXIgYm9keUZvcm0gPSBcIlwiO1xuICAgICAgICAgIGZvcih2YXIgaT0wOyBpPHBCb2R5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHZhciBrZXkgPSBwQm9keVtpXS5rZXk7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBhcmdzW3BCb2R5W2ldLnBhcmFtZXRlckluZGV4XTtcblxuICAgICAgICAgICAgLy9iZWxvdyBpbmNhc2Ugb2YgYmVpbmcgc2VudCBhcyBhbiBqc29uXG4gICAgICAgICAgICBib2R5SlNPTltrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgICAgICAgLy8vL2JlbG93IGluY2FzZSBvZiBiZWluZyBzZW50IGFzIGFuIGEga2V5IGFuZCB2YWx1ZSBpbiBjYXNlIG9mICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICAgICAgaWYoaSA+IDApe1xuICAgICAgICAgICAgICBib2R5Rm9ybSA9IGJvZHlGb3JtICtcIiZcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvZHlGb3JtID0gYm9keUZvcm0rIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICtcIj1cIitlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgdmFyIGhlYWRlcl90ZW1wO1xuICAgICAgICBpZihjdXN0b21IZWFkZXIpIHtcbiAgICAgICAgICBoZWFkZXJfdGVtcD1jdXN0b21IZWFkZXI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaGVhZGVyX3RlbXA9IExpYnJhcnlHbG9iYWxWYXJpYWJsZXNJbml0LmFwcEhlYWRlcnM7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZmluYWxCb2R5O1xuICAgICAgICB2YXIgQ29udGVudFR5cGUgPSBoZWFkZXJfdGVtcC5nZXQoJ0NvbnRlbnQtVHlwZScpO1xuXG5cblxuICAgICAgICBpZihDb250ZW50VHlwZSAmJiBDb250ZW50VHlwZS50b1N0cmluZygpPT1cImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKVxuICAgICAgICB7XG4gICAgICAgICAgZmluYWxCb2R5PSBib2R5Rm9ybTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHsgLy9qc29uXG4gICAgICAgICAgZmluYWxCb2R5PUpTT04uc3RyaW5naWZ5KGJvZHlKU09OKTtcbiAgICAgICAgfVxuXG4gICAgICAgICAgaWYocEJvZHlBc0lzKVxuICAgICAgICAgIHtcblxuICAgICAgICAgICAgICBmb3IgKHZhciBvYmoxIGluIGFyZ3NbcEJvZHlBc0lzWzBdLnBhcmFtZXRlckluZGV4XSkge1xuICAgICAgICAgICAgICAgICAgaWYgKGFyZ3NbcEJvZHlBc0lzWzBdLnBhcmFtZXRlckluZGV4XVtvYmoxXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYXJnc1twQm9keUFzSXNbMF0ucGFyYW1ldGVySW5kZXhdW29iajFdID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGZpbmFsQm9keT0gIGFyZ3NbcEJvZHlBc0lzWzBdLnBhcmFtZXRlckluZGV4XVxuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgdGVtcFVSTCA9IExpYnJhcnlHbG9iYWxWYXJpYWJsZXNJbml0LmJhc2VVcmwrdGVtcFVSTDtcblxuXG4gICAgICAgIHZhciBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zICh7XG4gICAgICAgICAgbWV0aG9kOnJlcXVlc3RNZXRob2ROdW1iZXIsXG4gICAgICAgICAgdXJsOiB0ZW1wVVJMLFxuICAgICAgICAgIGhlYWRlcnM6aGVhZGVyX3RlbXAgLFxuICAgICAgICAgIGJvZHk6ZmluYWxCb2R5LFxuICAgICAgICAgIHNlYXJjaDogcXVlcnlTdHJpbmdQYXJhbXMgIC8vc2VhcmNoIGlzIGZvciBVUkxTZWFyY2hQYXJhbXNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJiZWZvcmUgIGRhdGEgaXMgPSBcIik7XG5cbiAgICAgICAgdmFyIHJlcTogUmVxdWVzdCA9IG5ldyBSZXF1ZXN0KG9wdGlvbnMpO1xuXG4gICAgICAgIGlmKCFkaXNhYmVQcmVGdW5jdGlvbilcbiAgICAgICAge1xuICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5wcmVGdW5jdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGUgcmVxdWVzdFwiLHJlcSk7XG4gICAgICAgIHZhciBvYnNlcnZhYmxlOk9ic2VydmFibGU8UmVzcG9uc2U+ID0gTGlicmFyeUdsb2JhbFZhcmlhYmxlc0luaXQuaHR0cC5yZXF1ZXN0KHJlcSk7XG5cbiAgICAgICAgdmFyIHRpbWVPdXQ9NjUwMDA7XG4gICAgICAgIGlmKGRlc2NyaXB0b3Iuc2VydmljZVRpbWVPdXQpIHtcbiAgICAgICAgICB0aW1lT3V0PWRlc2NyaXB0b3Iuc2VydmljZVRpbWVPdXQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS50aW1lb3V0KHRpbWVPdXQpLm1hcChyZXMgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhlIHJlc3BvbnNlOlwiLHJlcyk7IC8vVG9EbyByZW1vdmUgbGliIGxvZ1xuICAgICAgICAgIHZhciBkYXRhICA9IHJlcy5qc29uKCk7XG4gICAgICAgICAgaWYoIWRpc2FibGVQb3N0RnVuY3Rpb24pXG4gICAgICAgICAge1xuICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLnBvc3RGdW5jdGlvbigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJnZXRQcm9tb3Rpb25zIGRhdGEgaXMgPSBcIiwgZGF0YSk7XG4gICAgICAgICAgLy9yZXR1cm4gSlNPTi5wYXJzZShkYXRheC50ZXh0KCkpO1xuXG4gICAgICAgIH0pLmNhdGNoKHJlc19lcnJvcj0+e1xuICAgICAgICAgIGlmKCFkaXNhYmxlUG9zdEZ1bmN0aW9uKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5wb3N0RnVuY3Rpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZXJ2aWNlIGVycm9yXCIsIHJlc19lcnJvcik7Ly9Ub0RvIHJlbW92ZSBsaWIgbG9nXG4gICAgICAgICAgfVxuICAgICAgICAgIGNhdGNoIChleCkgIHsgICB9XG4gICAgICAgICAgdHJ5e1xuXG4gICAgICAgICAgICAgIGlmKHJlc19lcnJvci5tZXNzYWdlKVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihyZXNfZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gZWxzZSBpZihyZXNfZXJyb3IuX2JvZHkpIC8vIE9SIE9USEVSXG4gICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgLy8gICAgIHRocm93IHJlc19lcnJvcjtcbiAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IHJlc19lcnJvcjtcbiAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICB9Y2F0Y2goZSl7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgICB9fVxuXG5cbn1cblxuXG5cblxuZnVuY3Rpb24gX3N1YnN0aXR1dGUodXJsOmFueSwgYXJnczphbnksIHBQYXRoOmFueSl7XG4gIGZvcih2YXIgaT0wIDsgaTxwUGF0aC5sZW5ndGg7IGkrKyl7XG4gICAgdXJsID0gdXJsLnJlcGxhY2UoXCJ7XCIgKyBwUGF0aFtpXS5rZXkgKyBcIn1cIiwgYXJnc1twUGF0aFtpXS5wYXJhbWV0ZXJJbmRleF0pO1xuICB9XG4gIHJldHVybiB1cmw7XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvbGlicmFyaWVzL0xpYi50cyIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdGNoZWQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IDEyMztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL0Bhbmd1bGFyIGxhenlcbi8vIG1vZHVsZSBpZCA9IDEyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXRjaGVkIGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSAxNjU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMgbGF6eVxuLy8gbW9kdWxlIGlkID0gMTY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ3JlYXRlZCBieSBCYWhnYXQgb24gMS8zMS8xNi5cbiAqL1xuaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge01lbnVDb250cm9sbGVyfSBmcm9tICdpb25pYy1hbmd1bGFyJztcblxuaW1wb3J0IHtnbG9iYWxWYXJpYWJsZXN9IGZyb20gXCIuLi8uLi9zaGFyZWQvb3RoZXJzX3NlcnZpY2VzQW5kU3RhdGljL2dsb2JhbFZhcmlhYmxlc1wiO1xuXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCB7R2V0LCBRdWVyeX0gZnJvbSBcIi4uLy4uL2xpYnJhcmllcy9MaWJcIjtcbi8vIGltcG9ydCAncnhqcy9vcGVyYXRvci9kZWxheSc7XG4vLyBpbXBvcnQgJ3J4anMvb3BlcmF0b3IvbWVyZ2VNYXAnO1xuLy8gaW1wb3J0ICdyeGpzL29wZXJhdG9yL3N3aXRjaE1hcCc7XG5cbkBDb21wb25lbnQoe1xuc2VsZWN0b3I6J21haW4tcGFnZScsXG4gICAgdGVtcGxhdGVVcmw6ICAnLi9tYWluUGFnZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBtYWluUGFnZSAgIHtcblxuXG4gICAvLyBAVmlld0NoaWxkKE5hdikgbmF2OiBOYXY7XG4gICAgY29uc3RydWN0b3IoICBwdWJsaWMgaHR0cDogSHR0cCxwcml2YXRlIG1lbnU6TWVudUNvbnRyb2xsZXIgICkge1xuICAgICAvLyAgIHRoaXMuYXBwLmdldENvbXBvbmVudCgnbGVmdE1lbnUnKS5zd2lwZUVuYWJsZShmYWxzZSxcImxlZnRNZW51XCIpO1xuICAgICAgICB0aGlzLm1lbnUuc3dpcGVFbmFibGUoZmFsc2UpO1xuY29uc29sZS5sb2coXCJra2trXCIpXG4gICAgfVxuXG4gICAgaW9uVmlld0RpZEVudGVyKCkge1xuICAgICAgICAvLyAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb3Jkb3ZhLmV4ZWMobnVsbCwgbnVsbCwgXCJTcGxhc2hTY3JlZW5cIiwgXCJoaWRlXCIsIFtdKX1cbiAgICAgICAgY2F0Y2ggKGV4KVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhleCl9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5kaXNtaXNzUHJvZ3Jlc3NEaWFsb2coKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXgpXG4gICAgICAgIHtcblxuICAgICAgICB9XG4gICAgICAgIC8vIH0sMCAgKTtcbiAgICAgICAgLy90cnkgeyAgY29yZG92YS5leGVjKG51bGwsIG51bGwsIFwiU3BsYXNoU2NyZWVuXCIsIFwiaGlkZVwiLCBbXSl9XG4gICAgICAgIC8vY2F0Y2ggKGV4KVxuICAgICAgICAvL3sgY29uc29sZS5sb2coZXgpfVxuICAgIH1cblxuXG4gICAgY2hhbmdlQ3VzdG9tZXJOdW1iZXIoKVxuICAgIHtcblxuICAgICAgICBnbG9iYWxWYXJpYWJsZXMuY3VzdG9tZXJJRD1cIjEyXCI7XG4gICAgfVxuXG5cbiAgICB0ZXN0Tm90aWZpY2F0aW9uKClcbiAgICB7XG4gICAgICAgIGNvcmRvdmEuZXhlYyggbnVsbCwgbnVsbCAsICdNeUFsbFBsdWdpbnNDbGFzcycsICdNeUFsbFBsdWdpbnNNZXRob2QnLCBbJ3B1c2hOb3RpZmljYXRpb24nLFwidGl0bGV4eHhcIixcImJvZHl4eHhcIl0pXG5cbiAgICB9XG5cblxuXG4gdGVzdEFsZXJ0KClcbiB7XG4gICAgIGdsb2JhbFZhcmlhYmxlcy5hbGVydChcIm1lc3NhZ2VcIixcInRpdGxlXCIpXG5cbiB9XG4gdGVzdFRvYXN0KClcbiB7XG4gICAgIGdsb2JhbFZhcmlhYmxlcy5zaG93VG9hc3QoXCJ0ZXN0IHRvYXN0Y2NjY1wiKTtcblxuIH1cbiAgICBAR2V0KFwiZGV2aWNlc1NlcnZlckZyb250RW5kL2dldEFwcExpc3RcIilcbiAgICBwdWJsaWMgZ2V0QXBwTGlzdCgpOiBPYnNlcnZhYmxlIDxhbnk+eyByZXR1cm4gbnVsbDsgfTtcblxuXG5cbiAgICBAR2V0KFwic2VydmljZXMvcmVzdC9zdWJzY3JpcHRpb24vcmVuZXdhbC9jdXN0b21lci8yOTY5MzFcIilcbiAgICBwdWJsaWMgdGVzdFNTUHgoQFF1ZXJ5KFwicmVxdWVzdFR5cGVcIilyZXF1ZXN0VHlwZSxAUXVlcnkoXCJ1c2VyTmFtZVwiKXVzZXJOYW1lLEBRdWVyeShcIm9yaWdpbklEXCIpb3JpZ2luSUQpOiBPYnNlcnZhYmxlIDxhbnk+eyByZXR1cm4gbnVsbDsgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvbW9kdWxzL21haW5QYWdlL21haW5QYWdlLnRzIiwiaW1wb3J0IHtwbGF0Zm9ybUJyb3dzZXJEeW5hbWljfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuaW1wb3J0IHtBcHBNb2R1bGV9IGZyb20gJy4vYXBwLm1vZHVsZSc7XG5pbXBvcnQge2VuYWJsZVByb2RNb2RlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5cbmVuYWJsZVByb2RNb2RlKCk7XG5cblxucGxhdGZvcm1Ccm93c2VyRHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvbWFpbi50cyIsIi8qKlxuICogQ3JlYXRlZCBieSBiYWhnYXQubWFzaGFseSBvbiAxMC8xLzE2LlxuICovXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SW9uaWNBcHAsIElvbmljTW9kdWxlfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7TXlBcHB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQge21haW5QYWdlfSBmcm9tIFwiLi4vYXBwL21vZHVscy9tYWluUGFnZS9tYWluUGFnZVwiO1xuaW1wb3J0IHtnbG9iYWxWYXJpYWJsZXN9IGZyb20gXCIuL3NoYXJlZC9vdGhlcnNfc2VydmljZXNBbmRTdGF0aWMvZ2xvYmFsVmFyaWFibGVzXCI7XG5pbXBvcnQge0xpYnJhcnlHbG9iYWxWYXJpYWJsZXNJbml0fSBmcm9tIFwiLi9saWJyYXJpZXMvTGliXCI7XG5pbXBvcnQge1RyYW5zbGF0ZUxvYWRlciwgVHJhbnNsYXRlTW9kdWxlfSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xuXG5pbXBvcnQge05ldHdvcmt9IGZyb20gXCJAaW9uaWMtbmF0aXZlL25ldHdvcmtcIjtcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcbmltcG9ydCB7SW9uaWNTdG9yYWdlTW9kdWxlfSBmcm9tIFwiQGlvbmljL3N0b3JhZ2VcIjtcbmltcG9ydCB7UHVzaH0gZnJvbSBcIkBpb25pYy1uYXRpdmUvcHVzaFwiO1xuaW1wb3J0IHtIZWFkZXJzLCBIdHRwLCBIdHRwTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuXG5pbXBvcnQgJy4vc2hhcmVkL215TGliL2xvZ2dlcidcbmltcG9ydCB7VHJhbnNsYXRlSHR0cExvYWRlcn0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2h0dHAtbG9hZGVyXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRyYW5zbGF0ZUxvYWRlcihodHRwOiBIdHRwKSB7XG4gICAgcmV0dXJuIG5ldyBUcmFuc2xhdGVIdHRwTG9hZGVyKGh0dHAsICcuL2Fzc2V0cy9pMThuLycsICcuanNvbicpO1xufVxuXG5cbkxpYnJhcnlHbG9iYWxWYXJpYWJsZXNJbml0LnNldENvbmZpZyhcbiAgICB7XG4gICAgICAgIGFwcEhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIn0pLFxuICAgICAgICBiYXNlVXJsOiBnbG9iYWxWYXJpYWJsZXMuYmFzZVVybCxcbiAgICAgICAgcHJlRnVuY3Rpb246IGdsb2JhbFZhcmlhYmxlcy5wcmVGdW5jdGlvbixcbiAgICAgICAgcG9zdEZ1bmN0aW9uOiBnbG9iYWxWYXJpYWJsZXMucG9zdEZ1bmN0aW9uXG4gICAgfSk7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTXlBcHAsXG5cbiAgICAgICAgbWFpblBhZ2UsXG5cblxuXG4gICAgICAgICBcbiAgICAgICAgLy8gQ29udGFjdFBhZ2UsXG4gICAgICAgIC8vIEhvbWVQYWdlLFxuICAgICAgICAvLyBUYWJzUGFnZVxuICAgIF0sXG4gICAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgICAgICAgICBIdHRwTW9kdWxlLFxuICAgICAgICAgICAgSW9uaWNTdG9yYWdlTW9kdWxlLmZvclJvb3QoKSxcbiAgICAgICAgICAgIC8vICBJb25pY01vZHVsZS5mb3JSb290KE15QXBwKSxcbiAgICAgICAgICAgIElvbmljTW9kdWxlLmZvclJvb3QoTXlBcHAse1xuICAgICAgICAgICAgICAgIGJhY2tCdXR0b25UZXh0OiAnJyxcbiAgICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgICBUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdCh7XG4gICAgICAgICAgICAgICAgbG9hZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlcixcbiAgICAgICAgICAgICAgICAgICAgdXNlRmFjdG9yeTogKGNyZWF0ZVRyYW5zbGF0ZUxvYWRlciksXG4gICAgICAgICAgICAgICAgICAgIGRlcHM6IFtIdHRwXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgXG4gICAgYm9vdHN0cmFwOiBbSW9uaWNBcHBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgICBNeUFwcCxcbiAgICAgICAgbWFpblBhZ2UsXG5cblxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbICBCcm93c2VyTW9kdWxlLFxuXG4gICAgICAgIE5ldHdvcmssXG4gICAgICAgIFB1c2hcblxuICAgICAgICAvLyB7cHJvdmlkZTogRXJyb3JIYW5kbGVyLCB1c2VDbGFzczogY3VzdG9tRXhjZXB0aW9uSGFuZGxlcn0sXG5cblxuXG4gICAgXSxcblxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5tb2R1bGUudHMiLCIvKipcbiAqIENyZWF0ZWQgYnkgYmFoZ2F0Lm1hc2hhbHkgb24gMTAvMS8xNi5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICAgIEFsZXJ0Q29udHJvbGxlcixcbiAgICBBcHAsXG4gICAgQ29uZmlnLFxuICAgIExvYWRpbmdDb250cm9sbGVyLFxuICAgIE1lbnVDb250cm9sbGVyLFxuICAgIE1vZGFsQ29udHJvbGxlcixcbiAgICBQbGF0Zm9ybVxufSBmcm9tICdpb25pYy1hbmd1bGFyJztcblxuaW1wb3J0IHttYWluUGFnZX0gZnJvbSBcIi4vbW9kdWxzL21haW5QYWdlL21haW5QYWdlXCI7XG5pbXBvcnQge2dsb2JhbFZhcmlhYmxlc30gZnJvbSBcIi4vc2hhcmVkL290aGVyc19zZXJ2aWNlc0FuZFN0YXRpYy9nbG9iYWxWYXJpYWJsZXNcIjtcblxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5cbmltcG9ydCB7U3RvcmFnZX0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuaW1wb3J0IHtCb2R5QXNJcywgUG9zdH0gZnJvbSBcIi4vbGlicmFyaWVzL0xpYlwiO1xuaW1wb3J0IHtOZXR3b3JrfSBmcm9tIFwiQGlvbmljLW5hdGl2ZS9uZXR3b3JrXCI7XG5pbXBvcnQge1RyYW5zbGF0ZVNlcnZpY2V9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5pbXBvcnQge1B1c2gsIFB1c2hPYmplY3QsIFB1c2hPcHRpb25zfSBmcm9tICdAaW9uaWMtbmF0aXZlL3B1c2gnO1xuXG4vL2ltcG9ydCB7VHV0b3JpYWxQYWdlX3Rlc3RfY29tcG9uZW50fSBmcm9tICcuL21vZHVscy90ZXN0L3R1dG9yaWFsX3Rlc3QnO1xuXG5cbi8vIHJlcXVpcmUoXCIuL3NoYXJlZC9teUxpYi9sb2dnZXJcIilcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGVVcmw6ICcuL2FwcC5odG1sJywgXG59KVxuXG5cbmV4cG9ydCBjbGFzcyAgTXlBcHAge1xuXG5cblxuXG4gICAgcm9vdFBhZ2U7XG4gICAgcGFnZXM7XG5cblxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbmV0d29yazpOZXR3b3JrLFxuICAgICAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICAgICAgcHJpdmF0ZSBtZW51OiBNZW51Q29udHJvbGxlcixcblxuXG4gICAgICAgIG1vZGFsQ3RybDogTW9kYWxDb250cm9sbGVyLFxuICAgICAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBhcHA6IEFwcCxcbiAgICAgICAgYWxlcnRDdHJsOiBBbGVydENvbnRyb2xsZXIsXG4gICAgICAgIGxvYWRpbmdDdHJsOkxvYWRpbmdDb250cm9sbGVyLFxuICAgICAgICBjb25maWc6IENvbmZpZyAsXG4gICAgICAgIHByaXZhdGUgIHN0b3JhZ2U6U3RvcmFnZSxcbiAgICAgICAgcHJpdmF0ZSBwdXNoOiBQdXNoXG4gICAgKSB7XG5cbiAgICAgICAgZ2xvYmFsVmFyaWFibGVzLm1vZGFsQ3RybD1tb2RhbEN0cmw7XG4gICAgICAgIGdsb2JhbFZhcmlhYmxlcy5zdG9yYWdlPSBzdG9yYWdlO1xuICAgICAgICBnbG9iYWxWYXJpYWJsZXMuYWxlcnRDdHJsPSBhbGVydEN0cmw7XG4gICAgICAgIGdsb2JhbFZhcmlhYmxlcy5sb2FkaW5nQ3RybD0gbG9hZGluZ0N0cmw7XG4gICAgICAgIGdsb2JhbFZhcmlhYmxlcy5tZW51PSBtZW51O1xuICAgICAgICBnbG9iYWxWYXJpYWJsZXMucGxhdGZvcm09dGhpcy5wbGF0Zm9ybTtcbiAgICAgICAgZ2xvYmFsVmFyaWFibGVzLnRyYW5zbGF0ZT10aGlzLnRyYW5zbGF0ZTtcbiAgICAgICAgZ2xvYmFsVmFyaWFibGVzLmNvbmZpZz1jb25maWc7XG4gICAgICAgIGdsb2JhbFZhcmlhYmxlcy5uZXR3b3JrPW5ldHdvcms7XG5cbiAgICAgICAgZ2xvYmFsVmFyaWFibGVzLnRyYW5zbGF0ZS5zZXREZWZhdWx0TGFuZygnZW4nKTtcbiAgICAgICAgLy8gdGhlIGxhbmcgdG8gdXNlLCBpZiB0aGUgbGFuZyBpc24ndCBhdmFpbGFibGUsIGl0IHdpbGwgdXNlIHRoZSBjdXJyZW50IGxvYWRlciB0byBnZXQgdGhlbVxuICAgICAgICBnbG9iYWxWYXJpYWJsZXMudHJhbnNsYXRlLnVzZSgnZW4nKTtcblxuICAgICAgICB0aGlzLnJvb3RQYWdlID0gbWFpblBhZ2U7XG5cblxuICAgICAgICB0aGlzLnBhZ2VzID0gW1xuICAgICAgICAgICAge3RpdGxlOiAnSG9tZScsIGNvbXBvbmVudDogbWFpblBhZ2UsIGljb246ICdjYWxlbmRhcid9LFxuICAgICAgICAgICAge3RpdGxlOiAnSG9tZScsIGNvbXBvbmVudDogbWFpblBhZ2UsIGljb246ICdsb2ctaW4nfSxcbiAgICAgICAgICAgIHt0aXRsZTogJ0hvbWUnLCBjb21wb25lbnQ6IG1haW5QYWdlLCBpY29uOiAncGVyc29uLWFkZCd9LFxuICAgICAgICAgICAge3RpdGxlOiAnSG9tZScsIGNvbXBvbmVudDogbWFpblBhZ2UsIGljb246ICdsb2ctb3V0J30sXG4gICAgICAgIF07XG5cblxuICAgICAgICB0aGlzLmluaXRpYWxpemVBcHAoKTtcbiAgICB9XG5cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIGdsb2JhbFZhcmlhYmxlcy5uYXZDdHJsPXRoaXMuYXBwLmdldFJvb3ROYXYoKTtcbiAgICB9XG4gICAgb3BlblBhZ2UocGFnZSkge1xuXG4gICAgICAgIC8vIHRoaXMuYXBwLmdldENvbXBvbmVudCgnbGVmdE1lbnUnKS5jbG9zZSgpO1xuICAgICAgICAvLyB0aGlzLmFwcC5nZXRDb21wb25lbnQoJ2xlZnRNZW51Jykuc3dpcGVFbmFibGUoZmFsc2UsIFwibGVmdE1lbnVcIik7XG4gICAgICAgIHRoaXMubWVudS5jbG9zZSgpO1xuICAgICAgICB0aGlzLm1lbnUuc3dpcGVFbmFibGUoZmFsc2UpO1xuXG5cbiAgICB9XG5cblxuICAgIGluaXRpYWxpemVBcHAoKSB7XG5cblxuICAgICAgICB0aGlzLnBsYXRmb3JtLnJlYWR5KCkudGhlbigocmVhZHlTb3VyY2UpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5zdG9yYWdlPXRoaXMuc3RvcmFnZTtcbiAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghY29yZG92YSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieHh4eHh4eHh4XCIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ5eXl5eXl5eXl5XCIpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVhZHlTb3VyY2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ6enp6enp6enp6enp6XCIpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXgpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29yZG92YS5leGVjKCBudWxsLCBudWxsICwgJ015QWxsUGx1Z2luc0NsYXNzJywgJ015QWxsUGx1Z2luc01ldGhvZCcsIFsnc3RhcnRTZXJ2aWNlJ10pXG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdQbGF0Zm9ybSByZWFkeScpO1xuICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0gRGlzYWJsZSBuYXRpdmUgYmFjayBidXR0b24tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmFja2J1dHRvbicsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWdsb2JhbFZhcmlhYmxlcy5uYXZDdHJsLmNhbkdvQmFjaygpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuICBuYXZpZ2F0b3IuYXBwLmV4aXRBcHAoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4aXRBcHBsaWNhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5uYXZDdHJsLnBvcCgpXG4gICAgICAgICAgICB9LCBmYWxzZSk7XG5cbiAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgICAvLyAgIHB1c2ggIG5vdGlmaWNhdGlvblxuICAgICAgICAgICAgaWYgKHRoaXMucGxhdGZvcm0uaXMoJ2NvcmRvdmEnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHVzaE5vdGlmaWNhdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMucGxhdGZvcm0uaXMoJ2lvcycpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pb3NWb2lwUHVzaCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmdldCgnY3VzdG9tZXJfaWQnKS50aGVuKChjdXN0b21lcl9pZCkgPT4ge1xuICAgICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5jdXN0b21lcklEPWN1c3RvbWVyX2lkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBwdXNoTm90aWZpY2F0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBhbmRyb2lkOiB7XG4gICAgICAgICAgICAgICAgZm9yY2VTaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgIHNvdW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgIGljb246IFwibmFtZV93aXRob3V0X2V4dGVuc2lvblwiLFxuICAgICAgICAgICAgICAgIHNlbmRlcklEOiBcIjcyNDIzOTE5NzE5XCJcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlvczoge1xuICAgICAgICAgICAgICAgIGFsZXJ0OiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgYmFkZ2U6IHRydWUsXG4gICAgICAgICAgICAgICAgc291bmQ6ICdmYWxzZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3aW5kb3dzOiB7fVxuICAgICAgICB9O1xuXG5cblxuXG5cblxuICAgICAgICBjb25zdCBwdXNoT2JqZWN0OiBQdXNoT2JqZWN0ID0gdGhpcy5wdXNoLmluaXQob3B0aW9ucyk7XG4gICAgICAgIHB1c2hPYmplY3Qub24oJ3JlZ2lzdHJhdGlvbicpLnN1YnNjcmliZSgocmVnaXN0cmF0aW9uOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGV2aWNlIHJlZ2lzdGVyZWQnLCByZWdpc3RyYXRpb24pXG5cbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoJ2RldmljZVB1c2hOb3RpZmljYXRpb25JRCcpLnRoZW4oKGRldmljZVB1c2hOb3RpZmljYXRpb25JRCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoJ09sZEN1c3RvbWVySUQnKS50aGVuKChPbGRDdXN0b21lcklEKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoJ2N1c3RvbWVyX2lkJykudGhlbigoY3VzdG9tZXJfaWQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlZ2lzdHJhdGlvbi5yZWdpc3RyYXRpb25JZCAhPSBkZXZpY2VQdXNoTm90aWZpY2F0aW9uSUQgfHwgT2xkQ3VzdG9tZXJJRCAhPSBjdXN0b21lcl9pZCkge1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29yZG92YS5leGVjKGZ1bmN0aW9uIHN1Y2MoRGV2aWNlSW5mbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgYWxlcnQoRGV2aWNlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIganNvbl90b19wb3N0X2Zvcl9wdXNoX25vdGlmaWNhdGlvbiA9IEpTT04ucGFyc2UoRGV2aWNlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiZXJyb3Igd2hlbiBwYXJzZSBqc29uIHdoZW4gc2VudCBpbmZvIGZvciBwdXNoIG5vdGlmaWNhdGlvbiA6IFwiICsgZXgubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoRGV2aWNlSW5mbylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc29uX3RvX3Bvc3RfZm9yX3B1c2hfbm90aWZpY2F0aW9uLmN1c3RvbWVyX2lkID0gY3VzdG9tZXJfaWQ7Ly8vLy8vLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpzb25fdG9fcG9zdF9mb3JfcHVzaF9ub3RpZmljYXRpb24uZGV2aWNlX3B1c2hfbm90aWZjYXRpb25fcmVnaXN0cmF0aW9uX2lkID0gcmVnaXN0cmF0aW9uLnJlZ2lzdHJhdGlvbklkO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucG9zdChqc29uX3RvX3Bvc3RfZm9yX3B1c2hfbm90aWZpY2F0aW9uKS5zdWJzY3JpYmUoKGRhdGF4OmFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoJ09sZEN1c3RvbWVySUQnLCBjdXN0b21lcl9pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldCgnZGV2aWNlUHVzaE5vdGlmaWNhdGlvbklEJywgcmVnaXN0cmF0aW9uLnJlZ2lzdHJhdGlvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3NmdWxseSBzZW50IFB1c2ggTm90aWZpY2F0aW9ucyBJRCB0byBzZXJ2ZXIgIFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnI6YW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBpbiBTZW50IFB1c2ggTm90aWZpY2F0aW9ucyBJRCB0byBzZXJ2ZXIgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZmFpbChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgJ015QWxsUGx1Z2luc0NsYXNzJywgJ015QWxsUGx1Z2luc01ldGhvZCcsIFsnZ2V0RGV2aWNlSW5mbyddKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImphdmFzY3JpcHQgOlwiICsgcmVnaXN0cmF0aW9uLnJlZ2lzdHJhdGlvbklkKTtcblxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgKTtcblxuICAgICAgICBwdXNoT2JqZWN0Lm9uKCdub3RpZmljYXRpb24nKS5zdWJzY3JpYmUoKG5vdGlmaWNhdGlvbjogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhub3RpZmljYXRpb24ubWVzc2FnZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhub3RpZmljYXRpb24udGl0bGUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobm90aWZpY2F0aW9uLmNvdW50KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vdGlmaWNhdGlvbi5zb3VuZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhub3RpZmljYXRpb24uaW1hZ2UpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobm90aWZpY2F0aW9uLmFkZGl0aW9uYWxEYXRhKTtcbiAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5hbGVydChub3RpZmljYXRpb24ubWVzc2FnZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuXG4gICAgICAgIHB1c2hPYmplY3Qub24oJ2Vycm9yJykuc3Vic2NyaWJlKGVyciA9PiBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKSk7XG5cblxuXG5cblxuXG5cbiAgICB9XG5cbiAgICBpb3NWb2lwUHVzaCgpXG4gICAge1xuICAgICAgICB2YXIgdGhhdHggPSB0aGlzO1xuICAgICAgICBjb3Jkb3ZhLmV4ZWMoZnVuY3Rpb24gc3VjYyhkYXRhX3ZvaXBSZWdpc3RyYXRpb25JZCkge1xuXG5cbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoJ2RldmljZVZvaXBQdXNoTm90aWZpY2F0aW9uSUQnKS50aGVuKChkZXZpY2VWb2lwUHVzaE5vdGlmaWNhdGlvbklEKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmdldCgnT2xkQ3VzdG9tZXJJRCcpLnRoZW4oKE9sZEN1c3RvbWVySUQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmdldCgnY3VzdG9tZXJfaWQnKS50aGVuKChjdXN0b21lcl9pZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFfdm9pcFJlZ2lzdHJhdGlvbklkICE9IGRldmljZVZvaXBQdXNoTm90aWZpY2F0aW9uSUQgfHwgT2xkQ3VzdG9tZXJJRCAhPSBjdXN0b21lcl9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcmRvdmEuZXhlYyhmdW5jdGlvbiBzdWNjKERldmljZUluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGFsZXJ0KERldmljZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGpzb25fdG9fcG9zdF9mb3Jfdm9pcF9wdXNoX25vdGlmaWNhdGlvbiA9IEpTT04ucGFyc2UoRGV2aWNlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiZXJyb3Igd2hlbiBwYXJzZSBqc29uIHdoZW4gc2VudCBpbmZvIGZvciBwdXNoIG5vdGlmaWNhdGlvbiA6IFwiICsgZXgubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoRGV2aWNlSW5mbylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc29uX3RvX3Bvc3RfZm9yX3ZvaXBfcHVzaF9ub3RpZmljYXRpb24uY3VzdG9tZXJfaWQgPSBjdXN0b21lcl9pZDsvLy8vLy8vLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganNvbl90b19wb3N0X2Zvcl92b2lwX3B1c2hfbm90aWZpY2F0aW9uLmRldmljZV92b2lwX3B1c2hfbm90aWZjYXRpb25fcmVnaXN0cmF0aW9uX2lkID0gZGF0YV92b2lwUmVnaXN0cmF0aW9uSWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdHgucG9zdFZvaXBQdXNoTm90aWZpY2F0b25SZWdpc3RyYXRpb25JbmZvKGpzb25fdG9fcG9zdF9mb3Jfdm9pcF9wdXNoX25vdGlmaWNhdGlvbikuc3Vic2NyaWJlKChkYXRheDphbnkpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoJ09sZEN1c3RvbWVySUQnLCBjdXN0b21lcl9pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldCgnZGV2aWNlVm9pcFB1c2hOb3RpZmljYXRpb25JRCcsIGRhdGFfdm9pcFJlZ2lzdHJhdGlvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3NmdWxseSBzZW50IFB1c2ggTm90aWZpY2F0aW9ucyBJRCB0byBzZXJ2ZXIgIFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnI6YW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoIFwiZXJyb3IgaW4gU2VudCBWb2lwIFB1c2ggTm90aWZpY2F0aW9ucyBJRCB0byBzZXJ2ZXIgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBpbiBTZW50IFZvaXAgUHVzaCBOb3RpZmljYXRpb25zIElEIHRvIHNlcnZlciBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBmYWlsKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAnTXlBbGxQbHVnaW5zQ2xhc3MnLCAnTXlBbGxQbHVnaW5zTWV0aG9kJywgWydnZXREZXZpY2VJbmZvJ10pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiamF2YXNjcmlwdCA6XCIgKyBkYXRhX3ZvaXBSZWdpc3RyYXRpb25JZCk7XG5cblxuXG5cbiAgICAgICAgfSwgZnVuY3Rpb24gZmFpbChyZXN1bHQpIHtcbiAgICAgICAgICAgIC8vIGFsZXJ0KFwiRXJyb3JcIiArIHJlc3VsdCk7XG4gICAgICAgIH0sICdNeUFsbFBsdWdpbnNDbGFzcycsICdNeUFsbFBsdWdpbnNNZXRob2QnLCBbJ3ZvaXBQdXNoUmVxdWVzdElEJ10pXG4gICAgfVxuXG4gICAgZXhpdEFwcGxpY2F0aW9uKCkge1xuICAgICAgICBjb3Jkb3ZhLmV4ZWMoZnVuY3Rpb24gc3VjYyhyZXN1bHQpIHtcblxuICAgICAgICAgICAgLy8gYWxlcnQocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gZmFpbChyZXN1bHQpIHtcbiAgICAgICAgICAgIC8vICBhbGVydChcIkVycm9yXCIgKyByZXN1bHQpO1xuICAgICAgICB9LCAnTXlBbGxQbHVnaW5zQ2xhc3MnLCAnTXlBbGxQbHVnaW5zTWV0aG9kJywgWydtb3ZlVGFza1RvQmFjayddKVxuICAgIH1cblxuXG5cblxuICAgIEBQb3N0KFwicHVzaE5vdGlmaWNhdG9uUmVnaXN0cmF0aW9uSW5mb1wiKVxuICAgIHB1YmxpYyBwb3N0KEBCb2R5QXNJcyBwdXNoTm90aWZpY2F0b25SZWdpc3RyYXRpb25JbmZvOmFueSk6IE9ic2VydmFibGUgPGFueT57IHJldHVybiBudWxsOyB9O1xuXG4gICAgQFBvc3QoXCJwdXNoTm90aWZpY2F0b25SZWdpc3RyYXRpb25JbmZvL3ZvaXBQdXNoTm90aWZpY2F0b25SZWdpc3RyYXRpb25JbmZvXCIpXG4gICAgcHVibGljIHBvc3RWb2lwUHVzaE5vdGlmaWNhdG9uUmVnaXN0cmF0aW9uSW5mbyhAQm9keUFzSXMgdm9pcFB1c2hOb3RpZmljYXRvblJlZ2lzdHJhdGlvbkluZm86YW55KTogT2JzZXJ2YWJsZSA8YW55PnsgcmV0dXJuIG51bGw7IH07XG5cblxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGJhaGdhdC5tYXNoYWx5IG9uIDEyLzEwLzE2LlxuICovXG5pbXBvcnQge2dsb2JhbFZhcmlhYmxlc30gZnJvbSBcIi4vZ2xvYmFsVmFyaWFibGVzXCI7XG5cblxuXG5leHBvcnQgY2xhc3MgICBQUkVGU19JVEVNXG57XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfbGFuZzpzdHJpbmcgIDtcbiAgICBwdWJsaWMgc3RhdGljICBnZXQgbGFuZygpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYW5nO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljICAgc2V0IGxhbmcodGhlX2xhbmc6c3RyaW5nKSB7XG4gICAgICAgIGdsb2JhbFZhcmlhYmxlcy5zdG9yYWdlLnNldChcImxhbmdcIix0aGVfbGFuZyk7XG4gICAgICAgIC8vIHVzZXJJbmZvRHRvLnNlbGVjdGVkTGFuZ3VhZ2U9dGhlX2xhbmc7XG4gICAgICAgIHRoaXMuX2xhbmc9IHRoZV9sYW5nO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3Bhc3N3b3JkOnN0cmluZyAgO1xuICAgIHB1YmxpYyBzdGF0aWMgIGdldCBwYXNzd29yZCgpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXNzd29yZDtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyAgIHNldCBwYXNzd29yZCh0aGVfcGFzc3dvcmQ6c3RyaW5nKSB7XG4gICAgICAgIGdsb2JhbFZhcmlhYmxlcy5zdG9yYWdlLnNldChcInBhc3N3b3JkXCIsdGhlX3Bhc3N3b3JkKTtcbiAgICAgICAgdGhpcy5fcGFzc3dvcmQ9IHRoZV9wYXNzd29yZDtcbiAgICB9XG4gICBcbiAgICBcblxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3VzZXJOYW1lOnN0cmluZyAgO1xuICAgIFxuICAgIHB1YmxpYyBzdGF0aWMgIGdldCB1c2VyTmFtZSgpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyTmFtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljICAgc2V0IHVzZXJOYW1lKHRoZV91c2VyTmFtZTpzdHJpbmcpIHtcbiAgICAgICAgZ2xvYmFsVmFyaWFibGVzLnN0b3JhZ2Uuc2V0KFwidXNlck5hbWVcIix0aGVfdXNlck5hbWUpO1xuICAgICAgICAgLy91c2VySW5mb0R0by51c2VyTmFtZT10aGVfdXNlck5hbWU7XG4gICAgICAgIHRoaXMuX3VzZXJOYW1lID0gdGhlX3VzZXJOYW1lO1xuICAgIH1cblxuXG5cblxuICAgIC8vIHB1YmxpYyBzdGF0aWMgc2F2ZWQgPSBmYWxzZTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NoYXJlZC9vdGhlcnNfc2VydmljZXNBbmRTdGF0aWMvcHJlZnNJdGVtLnRzIiwiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kZWxheVwiO1xuXG4vKipcbiAqIENyZWF0ZWQgYnkgYmFoZ2F0Lm1hc2hhbHkgb24gMTIvMTAvMTYuXG4gKi9cblxuZXhwb3J0IGNsYXNzIGR1bW15UmVzcG9uc2VcbntcbiAgICBwdWJsaWMgc3RhdGljIGdldER1bW15U2VydmljZVJlc3BvbnNlKHNlcnZpY2VOYW1lLGRlbGF5VGltZSlcbiAgICB7XG4gICAgICAgIC8vIHZhciBzZXJ2aWNlTmFtZTpzdHJpbmc7XG4gICAgICAgIC8vIHRyeSB7XG4gICAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKGFyZ3VtZW50cy5jYWxsZWUpO1xuICAgICAgICAvLyB9Y2F0Y2ggKGVycil7XG4gICAgICAgIC8vICAgICAgIHZhciBzdGFydD0gZXJyLnN0YWNrLnRvU3RyaW5nKCkuaW5kZXhPZihcIi5kZXNjcmlwdG9yLnZhbHVlIFthcyBcIilcbiAgICAgICAgLy8gICAgICAgc2VydmljZU5hbWU9ICBlcnIuc3RhY2sudG9TdHJpbmcoKS5zdWJzdHJpbmcoc3RhcnQrMjIsZXJyLnN0YWNrLnRvU3RyaW5nKCkuaW5kZXhPZihcIl1cIixzdGFydCsyMikpXG4gICAgICAgIC8vIH1cblxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZiggZHVtbXlSZXNwb25zZS5jYWxsRHVtbXlTZXJ2aWNlKHNlcnZpY2VOYW1lKSkuZGVsYXkoZGVsYXlUaW1lKS5tYXAocmVzPT57XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9KTtcblxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgIGNhbGxEdW1teVNlcnZpY2Uoc2VydmljZU5hbWUpOmFueVxuICAgIHtcbiAgICAgICAgdmFyIHJlcztcbiAgICAgICAgaWYoc2VydmljZU5hbWU9PVwibG9naW5cIilcbiAgICAgICAge1xuICAgICAgICAgICAgcmVzPWR1bW15UmVzcG9uc2UubG9naW5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHNlcnZpY2VOYW1lPT1cImdldFByb21vdGlvbnNcIilcbiAgICAgICAge1xuICAgICAgICAgICAgcmVzPWR1bW15UmVzcG9uc2UuZ2V0cHJvbW90aW9uc1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoc2VydmljZU5hbWU9PVwiZ2V0VXNlclBvaW50c1wiKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXM9e307XG4gICAgICAgICAgICByZXMubG95YWx0eVBvaW50cyA9IGR1bW15UmVzcG9uc2UuZ2V0VXNlclBvaW50cy5sb3lhbHR5UG9pbnRzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoc2VydmljZU5hbWU9PVwiZ2V0VXNlckFEU0xVc2FnZVwiIHx8c2VydmljZU5hbWU9PVwiVHlwZUVycm9yOiAnY2FsbGVyJywgXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlcz1kdW1teVJlc3BvbnNlLmdldFVzZXJBRFNMVXNhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihzZXJ2aWNlTmFtZT09XCJnZXRVc2VyQURTTFJlbWFpbmluZ0RheXNcIilcbiAgICAgICAge1xuICAgICAgICAgICAgcmVzID0gZHVtbXlSZXNwb25zZS5nZXRVc2VyQURTTFJlbWFpbmluZ0RheXM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihzZXJ2aWNlTmFtZT09XCJnZXRTdWJzY3JpcHRpb25JbmZvXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlcyA9IGR1bW15UmVzcG9uc2UuZ2V0U3Vic2NyaXB0aW9uSW5mbztcblxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZihzZXJ2aWNlTmFtZT09XCJHZXRSZW5ld2FsQ29uZmlybWF0aW9uVmlld01vZGVsXCIgKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyByZXMgPSA8SVJlbmV3YWxDb25maXJtYXRpb25WaWV3TW9kZWw+ZHVtbXlSZXNwb25zZS5HZXRSZW5ld2FsQ29uZmlybWF0aW9uVmlld01vZGVsO1xuICAgICAgICAgICAgcmVzID0gZHVtbXlSZXNwb25zZS5HZXRSZW5ld2FsQ29uZmlybWF0aW9uVmlld01vZGVsO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZihzZXJ2aWNlTmFtZT09XCJnZXRCYW5rVVJMXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlcyA9IGR1bW15UmVzcG9uc2UuZ2V0QmFua1VSTDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHNlcnZpY2VOYW1lPT1cImdldE9wZW5lZFRpY2tldEluZm9fcGFydDFcIilcbiAgICAgICAge1xuICAgICAgICAgICAgcmVzID0gZHVtbXlSZXNwb25zZS5nZXRPcGVuZWRUaWNrZXRJbmZvX3BhcnQxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoc2VydmljZU5hbWU9PVwiZ2V0T3BlbmVkVGlja2V0SW5mb19wYXJ0MlwiKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXMgPSBkdW1teVJlc3BvbnNlLmdldE9wZW5lZFRpY2tldEluZm9fcGFydDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihzZXJ2aWNlTmFtZT09XCJjcmVhdGVUaWNrZXRcIilcbiAgICAgICAge1xuICAgICAgICAgICAgcmVzID0gZHVtbXlSZXNwb25zZS5jcmVhdGVUaWNrZXQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihzZXJ2aWNlTmFtZT09XCJnZXRUaWNrZXRzXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlcyA9IGR1bW15UmVzcG9uc2UuZ2V0VGlja2V0cztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHNlcnZpY2VOYW1lPT1cImdldFRpY2tldERldGFpbHNcIilcbiAgICAgICAge1xuICAgICAgICAgICAgcmVzID0gZHVtbXlSZXNwb25zZS5nZXRUaWNrZXREZXRhaWxzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoc2VydmljZU5hbWU9PVwiYWRkQ29tbWVudFwiKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXMgPSBkdW1teVJlc3BvbnNlLmFkZENvbW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihzZXJ2aWNlTmFtZT09XCJnZXRBcmVhQ29kZXNcIilcbiAgICAgICAge1xuICAgICAgICAgICAgcmVzID0gZHVtbXlSZXNwb25zZS5nZXRBcmVhQ29kZXM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihzZXJ2aWNlTmFtZT09XCJzZXRDdXN0b21lckluZm9ybWF0aW9uXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlcyA9IGR1bW15UmVzcG9uc2Uuc2V0Q3VzdG9tZXJJbmZvcm1hdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHNlcnZpY2VOYW1lPT1cInNlbmRWZXJpZmljYXRpb25TTVNcIilcbiAgICAgICAge1xuICAgICAgICAgICAgcmVzID0gZHVtbXlSZXNwb25zZS5zZW5kVmVyaWZpY2F0aW9uU01TO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoc2VydmljZU5hbWU9PVwiZ2V0Q1BFVHlwZXNcIilcbiAgICAgICAge1xuICAgICAgICAgICAgcmVzID0gZHVtbXlSZXNwb25zZS5nZXRDUEVUeXBlcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHNlcnZpY2VOYW1lPT1cImdldENQRVR5cGVzQnlDdXN0b21lclwiKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXMgPSBkdW1teVJlc3BvbnNlLmdldENQRVR5cGVzQnlDdXN0b21lcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHNlcnZpY2VOYW1lPT1cImdldENQRUxvZ2dpbmdcIilcbiAgICAgICAge1xuICAgICAgICAgICAgcmVzID0gZHVtbXlSZXNwb25zZS5nZXRDUEVMb2dnaW5nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoc2VydmljZU5hbWU9PVwiZ2V0Q1BFQmFua1VSTFwiKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXMgPSBkdW1teVJlc3BvbnNlLmdldENQRUJhbmtVUkw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihzZXJ2aWNlTmFtZT09XCJnZXRDdXN0b21lckludm9pY2VzXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlcyA9IGR1bW15UmVzcG9uc2UuZ2V0Q3VzdG9tZXJJbnZvaWNlcztcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYoc2VydmljZU5hbWU9PVwiZ2V0SW52b2ljZURldGFpbHNcIilcbiAgICAgICAge1xuICAgICAgICAgICAgcmVzID0gZHVtbXlSZXNwb25zZS5nZXRJbnZvaWNlRGV0YWlscztcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYoc2VydmljZU5hbWU9PVwiZ2V0U3Vic2NyaXB0aW9uUmVuZXdhbEluZm9cIilcbiAgICAgICAge1xuICAgICAgICAgICAgcmVzID0gZHVtbXlSZXNwb25zZS5nZXRTdWJzY3JpcHRpb25SZW5ld2FsSW5mbztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHNlcnZpY2VOYW1lPT1cImdldE9wdGlvblBhY2tJbmZvXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlcyA9IGR1bW15UmVzcG9uc2UuZ2V0T3B0aW9uUGFja0luZm87XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihzZXJ2aWNlTmFtZT09XCJnZXRMYXN0UmVuZXdhYmxlXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlcyA9IGR1bW15UmVzcG9uc2UuZ2V0TGFzdFJlbmV3YWJsZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHNlcnZpY2VOYW1lPT1cImNoZWNrVXNlckFkc2xTdGF0dXNcIilcbiAgICAgICAge1xuICAgICAgICAgICAgcmVzID0gZHVtbXlSZXNwb25zZS5jaGVja1VzZXJBZHNsU3RhdHVzO1xuICAgICAgICB9XG5cblxuXG5cblxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIHB1YmxpYyAgc3RhdGljICBsb2dpbj1cbiAgICAgICAge1wiY3VzdG9tZXJJbmZvcm1hdGlvbkR0b1wiOiB7XG4gICAgICAgICAgICBcImFkc2xTcGVlZFwiOiBcIjgxOTIvMTAyNFwiLFxuICAgICAgICAgICAgXCJjaXR5RU5cIjogXCJDYWlyb1wiLFxuICAgICAgICAgICAgXCJjaXR5QVJcIjogXCLYp9mE2YLYp9mH2LHYqVwiLFxuICAgICAgICAgICAgXCJkaXN0cmljdEVOXCI6IFwiS2F0YW1leWFcIixcbiAgICAgICAgICAgIFwiZGlzdHJpY3RBUlwiOiBcItin2YTZgti32KfZhdmK2KlcIixcbiAgICAgICAgICAgIFwiYnVpbGRpbmdOdW1iZXJcIjogXCIoQSlcIixcbiAgICAgICAgICAgIFwic3RyZWV0TmFtZVwiOiBcIjd0aCB6b25lIDNyZCBTZXR0bGVtZW50IE5ldyBDYWlybyBFZ3lwdFwiLFxuICAgICAgICAgICAgXCJmbGF0TnVtYmVyXCI6IFwiXCIsXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIkZcIixcbiAgICAgICAgICAgIFwiY29udGFjdExhbmd1YWdlXCI6IFwiQVwiLFxuICAgICAgICAgICAgXCJob21lUGhvbmVBcmVhQ29kZVwiOiBcIjJcIixcbiAgICAgICAgICAgIFwiaG9tZVBob25lTnVtYmVyXCI6IFwiMjc1Nzg0NjNcIixcbiAgICAgICAgICAgIFwid29ya1Bob25lQXJlYUNvZGVcIjogXCIwXCIsXG4gICAgICAgICAgICBcIndvcmtQaG9uZU51bWJlclwiOiBcIlwiLFxuICAgICAgICAgICAgXCJmYXhBcmVhQ29kZVwiOiBcIlwiLFxuICAgICAgICAgICAgXCJmYXhOdW1iZXJcIjogXCJcIixcbiAgICAgICAgICAgIFwibWFsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJiaXJ0aERhdGVcIjogLTIxMzc4ODE2MDAwMDAsXG4gICAgICAgICAgICBcIm1vYmlsZU51bWJlcjFXaXRoUHJlZml4XCI6IFwiMDExMTk4NTA3NjZcIixcbiAgICAgICAgICAgIFwibW9iaWxlTnVtYmVyMldpdGhQcmVmaXhcIjogXCJcIixcbiAgICAgICAgICAgIFwiY3VzdG9tZXJOdW1iZXJcIjogXCIyMTE4Mjk1XCIsXG4gICAgICAgICAgICBcImVtYWlsQWRkcmVzc1wiOiBcIm1vbmF3aGFiQGdtYWlsLmNvbVwiLFxuICAgICAgICAgICAgXCJhZHNsQXJlYUNvZGVcIjogMixcbiAgICAgICAgICAgIFwiYWRzbE51bWJlclwiOiAyNzYyMzQ2MyxcbiAgICAgICAgICAgIFwibW9iaWxlTnVtYmVyMVwiOiBcIjk4NTA3NjZcIixcbiAgICAgICAgICAgIFwiYWN0aXZhdGVkXCI6IHRydWUsXG4gICAgICAgICAgICBcImJsYWNrTGlzdGVkXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJhYnVzZXJcIjogZmFsc2UsXG4gICAgICAgICAgICBcImRpcmVjdEN1c3RvbWVyXCI6IHRydWUsXG4gICAgICAgICAgICBcImN1c3RvbWVyTmFtZVwiOiBcIi0gTW9uYSBNb2hhbWVkIEFiZGVsIFdoYWIgLVwiLFxuICAgICAgICAgICAgXCJtb2JpbGVQcmVmaXgxXCI6IFwiMDExMVwiLFxuICAgICAgICAgICAgXCJtb2JpbGVQcmVmaXgyXCI6IFwiXCIsXG4gICAgICAgICAgICBcIm1vYmlsZU51bWJlcjJcIjogXCJcIixcbiAgICAgICAgICAgIFwibGltaXRhdGlvblR5cGVJZFwiOiA0LFxuICAgICAgICAgICAgXCJsaW5lT3duZXJOYW1lXCI6IFwiLSBNb2hhbWVkIEFiZGVsIFdoYWIgLVwiLFxuICAgICAgICAgICAgXCJsaW1pdGF0aW9uVHlwZU5hbWVcIjogXCJUYWwyYVwiLFxuICAgICAgICAgICAgXCJzb2FwUmVxdWVzdFwiOiBcIlwiLFxuICAgICAgICAgICAgXCJzb2FwUmVzcG9uc2VcIjogXCJcIlxuICAgICAgICB9fTtcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0cHJvbW90aW9ucz17XG4gICAgICAgIFwiUHJvbW90aW9uc0FyXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImltYWdlVXJsXCI6IFwiaHR0cHM6Ly93d3cudGVkYXRhLm5ldC93cHMvd2NtL2Nvbm5lY3QvNTUxOWE4MmItM2FmOS00YTM2LTk5NTktMjRmOTY0NjJkMDFhL1ZBUi1Ib21lLVBhZ2UtMTcwMHg2NTEtQXIucG5nP01PRD1BSlBFUkVTJkNBQ0hFSUQ9NTUxOWE4MmItM2FmOS00YTM2LTk5NTktMjRmOTY0NjJkMDFhXCIsXG5cbiAgICAgICAgICAgICAgICBcInByb21vdGlvbkNvbnRlbnRcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcInByb21vdGlvblRlcm1zQW5kQ29uZGl0aW9uc1wiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwicHJvbW90aW9uSWRcIjogXCIxNjc5M1wiLFxuICAgICAgICAgICAgICAgIFwicHJvbW90aW5UaXRsZVwiOiBcItmF2LnYp9mDXCJcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImltYWdlVXJsXCI6IFwiaHR0cHM6Ly93d3cudGVkYXRhLm5ldC93cHMvd2NtL2Nvbm5lY3QvYzZlOWVjMjYtMGU2Mi00NjNhLTk0NmMtMzczYzhiZTkyYjgzL01hM2FrKzE3MDB4NjUxLSthci5wbmc/TU9EPUFKUEVSRVMmQ0FDSEVJRD1jNmU5ZWMyNi0wZTYyLTQ2M2EtOTQ2Yy0zNzNjOGJlOTJiODNcIixcbiAgICAgICAgICAgICAgICBcInByb21vdGlvbkNvbnRlbnRcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcInByb21vdGlvblRlcm1zQW5kQ29uZGl0aW9uc1wiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwicHJvbW90aW9uSWRcIjogXCIxNjc5M1wiLFxuICAgICAgICAgICAgICAgIFwicHJvbW90aW5UaXRsZVwiOiBcItmF2LnYp9mDXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG5cblxuICAgICAgICAgICAgICAgIFwiaW1hZ2VVcmxcIjogXCJodHRwczovL3d3dy50ZWRhdGEubmV0L3dwcy93Y20vY29ubmVjdC8wZGU0YjgyZi1iMjZjLTRjZTQtYTE3OS0wMDVjYmMyNjkxZTYvMTcwMHg2NTEtYS1iLnBuZz9NT0Q9QUpQRVJFUyZDQUNIRUlEPTBkZTRiODJmLWIyNmMtNGNlNC1hMTc5LTAwNWNiYzI2OTFlNlwiLFxuICAgICAgICAgICAgICAgIFwicHJvbW90aW9uQ29udGVudFwiOiBcIjxzY3JpcHQ+XFxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xcbiAgICAgICAgJChcXFwiZGl2I2RhdGFcXFwiKS5oaWRlKCk7XFxuICAgICAgICAgICAgJChcXFwiYSNjbGlja1xcXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XFxuICAgICAgICAgICAgICAgICQoXFxcImRpdiNkYXRhXFxcIikudG9nZ2xlKCk7XFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICB9KTtcXG4gICAgICAgIDxcXC9zY3JpcHQ+XFxuPHN0eWxlIHR5cGU9XFxcInRleHRcXC9jc3NcXFwiPi5XQ01fU2VjdGlvbiAuYmxvY2tfX2JvZHkgYSB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xcbiAgICAgICAgICAgIGJvcmRlcjogMCBub25lO1xcbiAgICAgICAgICAgIGNvbG9yOiAjZWMxYzIzO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgICB9XFxuICAgICAgICAgIC5wYWNrYWdle1xcbiAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgI2RkZFxcbiAgICAgICAgICB9XFxuICAgICAgICAgIC5wYWNrYWdlIHRkIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgI2RkZFxcbiAgICAgICAgICB9XFxuICAgICAgICAgIC5wYWNrYWdlIHRoIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICAuV0NNX1NlY3Rpb24gdGFibGUgdHI6bnRoLWNoaWxkKDJuKzEpIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgLmJnY29sb3IsIHRyLmJnY29sb3IgdGh7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmOCAhaW1wb3J0YW50O1xcbiAgICAgICAgICB9XFxuPFxcL3N0eWxlPlxcbjxkaXYgY2xhc3M9XFxcImJsb2NrX19ib2R5XFxcIiBkaXI9XFxcInJ0bFxcXCI+XFxuPHAgY2xhc3M9XFxcInRleHQtYm9sZFxcXCI+2KrZiiDYp9mKINiv2KfYqtinINit2LHZiti12Kkg2K/Yp9im2YXYpyDYudmE2Yog2KPZhiDYqtmC2K/ZhSDYp9mE2KPZgdi22YQg2YTYudmF2YTYp9im2YfYpyDYp9mE2K3Yp9mE2YrZitmGINmI2YTYsNmE2YMg2YrYs9i52K/ZhtinINij2YYg2YbZgtiv2YUg2YTZg9mFINio2KfZgtin2KogXFxcItmF2YrYrNinINio2YTYs1xcXCIg2KfZhNis2K/Zitiv2Kkg2K3ZitirINmK2YXZg9mG2YPZhSDYp9mE2KPZhiDYp9mE2KPYs9iq2YXYqtin2Lkg2KjYo9i52YTZiSDYs9ix2LnYqSDZitiq2K3ZhdmE2YfYpyDYrti32YMg2Iwg2LPYudipINiq2K3ZhdmK2YQg2KPYudmE2Ykg2Ygg2KfZhNin2LPYqtmF2KrYp9i5INio2LTYp9mH2K8g2KjZhNizINin2YrYttinXFxcIjxcXC9wPlxcblxcbjxwIGRpcj1cXFwicnRsXFxcIj48YSBocmVmPVxcXCIjXFxcIiBpZD1cXFwiY2xpY2tcXFwiPtin2LbYuti3INmH2YbYpzxcXC9hPiDZhNmF2LTYp9mH2K/ZhyDYo9iz2LnYp9ixINmI2LPYsdi52KfYqiDYqNin2YLYp9iqINmF2YrYrNinINio2YTYsyDYp9mE2KzYr9mK2K/YqdiMINmI2YTZhNiq2KzYr9mK2K8g2LnZhiDYt9ix2YrZgiDYp9mE2KfZhtiq2LHZhtiqINi52YTZiiDYp9it2K/ZiiDYp9mE2KjYp9mC2KfYqjxzcGFuIGNsYXNzPVxcXCJ0ZXh0LWJvbGRcXFwiPiDYp9i22LrYtyDYp9mE2KrYp9mE2Yo8XFwvc3Bhbj48XFwvcD5cXG5cXG48ZGl2IGNsYXNzPVxcXCJtYXJpZ24tMzAtMFxcXCIgZGlyPVxcXCJydGxcXFwiIGlkPVxcXCJkYXRhXFxcIj5cXG48dGFibGUgY2xhc3M9XFxcInBhY2thZ2VcXFwiIGRpcj1cXFwicnRsXFxcIj5cXG5cXHQ8dGJvZHk+XFxuXFx0XFx0PHRyIGNsYXNzPVxcXCJiZ2NvbG9yXFxcIj5cXG5cXHRcXHRcXHQ8dGg+2KfZhNiz2LHYudipPFxcL3RoPlxcblxcdFxcdFxcdDx0aD7Ys9i52Kkg2KfZhNiq2K3ZhdmK2YQ8XFwvdGg+XFxuXFx0XFx0XFx0PHRoPtin2YTYs9ix2LnYqSDYqNi52K8g2KfZhtiq2YfYp9ihINiz2LnYqSDYp9mE2KrYrdmF2Yo8XFwvdGg+XFxuXFx0XFx0XFx0PHRoPtin2YTYs9i52LE8XFwvdGg+XFxuXFx0XFx0XFx0PHRoPtin2YTYrtiv2YXYp9iqINin2YTZhdi22KfZgdmHPFxcL3RoPlxcblxcdFxcdDxcXC90cj5cXG5cXHRcXHQ8dHI+XFxuXFx0XFx0XFx0PHRkPjEg2YXZitis2KfYqNin2YrYqjxcXC90ZD5cXG5cXHRcXHRcXHQ8dGQ+MTAwINis2YrYrNin2KjYp9mK2Ko8XFwvdGQ+XFxuXFx0XFx0XFx0PHRkPjUxMiDZg9mK2YTZiNio2KfZitiqPGJyIFxcLz5cXG5cXHRcXHRcXHTYutmK2LEg2YXYrdiv2YjYr9ipPFxcL3RkPlxcblxcdFxcdFxcdDx0ZD4xMDAg2KzZhtmK2Yc8XFwvdGQ+XFxuXFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJiZ2NvbG9yXFxcIj7ZhNinINmK2YjYrNivPFxcL3RkPlxcblxcdFxcdDxcXC90cj5cXG5cXHRcXHQ8dHI+XFxuXFx0XFx0XFx0PHRkIHJvd3NwYW49XFxcIjRcXFwiPtin2LnZhNmKINiz2LHYudipINiu2LfZgyDZitiq2K3ZhdmE2YfYpzxzcGFuIGNsYXNzPVxcXCJ0ZXh0LW1lZGl1bS0xIHRleHQtcHJpbWFyeSB0ZXh0LW5vcm1hbFxcXCI+KjxcXC9zcGFuPjxcXC90ZD5cXG5cXHRcXHRcXHQ8dGQ+MTAwINis2YrYrNin2KjYp9mK2Ko8XFwvdGQ+XFxuXFx0XFx0XFx0PHRkPjEg2YXZitis2KfYqNin2YrYqjxiciBcXC8+XFxuXFx0XFx0XFx02LrZitixINmF2K3Yr9mI2K/YqTxcXC90ZD5cXG5cXHRcXHRcXHQ8dGQ+MTYwINis2YbZitmHPFxcL3RkPlxcblxcdFxcdFxcdDx0ZCBjbGFzcz1cXFwiYmdjb2xvclxcXCIgcm93c3Bhbj1cXFwiNFxcXCI+TUJDIFxcXCIg2LTYp9mH2K8g2KjZhNizXFxcIjxcXC90ZD5cXG5cXHRcXHQ8XFwvdHI+XFxuXFx0XFx0PHRyPlxcblxcdFxcdFxcdDx0ZD4yMDAg2KzZitis2KfYqNin2YrYqjxcXC90ZD5cXG5cXHRcXHRcXHQ8dGQ+MiDZhdmK2KzYp9io2KfZitiqPGJyIFxcLz5cXG5cXHRcXHRcXHTYutmK2LEg2YXYrdiv2YjYr9ipPFxcL3RkPlxcblxcdFxcdFxcdDx0ZD4yNjAg2KzZhtmK2Yc8XFwvdGQ+XFxuXFx0XFx0PFxcL3RyPlxcblxcdFxcdDx0cj5cXG5cXHRcXHRcXHQ8dGQ+MzAwINis2YrYrNin2KjYp9mK2Ko8XFwvdGQ+XFxuXFx0XFx0XFx0PHRkPjQg2YXZitis2KfYqNin2YrYqjxiciBcXC8+XFxuXFx0XFx0XFx02LrZitixINmF2K3Yr9mI2K/YqTxcXC90ZD5cXG5cXHRcXHRcXHQ8dGQ+MzYwINis2YbZitmHPFxcL3RkPlxcblxcdFxcdDxcXC90cj5cXG5cXHRcXHQ8dHI+XFxuXFx0XFx0XFx0PHRkPjUwMCDYrNmK2KzYp9io2KfZitiqPFxcL3RkPlxcblxcdFxcdFxcdDx0ZD40INmF2YrYrNin2KjYp9mK2Ko8YnIgXFwvPlxcblxcdFxcdFxcdNi62YrYsSDZhdit2K/ZiNiv2Kk8XFwvdGQ+XFxuXFx0XFx0XFx0PHRkPjUwMCDYrNmG2YrZhzxcXC90ZD5cXG5cXHRcXHQ8XFwvdHI+XFxuXFx0PFxcL3Rib2R5PlxcbjxcXC90YWJsZT5cXG48c3BhbiBjbGFzcz1cXFwidGV4dC14eC1zbWFsbCBfYmxvY2sgcGFkZGluZy0zXFxcIj48c3BhbiBjbGFzcz1cXFwidGV4dC1tZWRpdW0tMSB0ZXh0LXByaW1hcnkgdGV4dC1ub3JtYWxcXFwiPio8XFwvc3Bhbj7Yp9i52YTZiSDYs9ix2LnYqSDYqti12YQg2KfZhNmJIDE2INmF2YrYrNin2KjYqlxcL9ir2KfZhtmK2Kk8XFwvc3Bhbj48XFwvZGl2PlxcbjxcXC9kaXY+XFxuXCIsXG4gICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25UZXJtc0FuZENvbmRpdGlvbnNcIjogXCI8cCBkaXI9XFxcInJ0bFxcXCI+PHNwYW4gc3R5bGU9XFxcImZvbnQtZmFtaWx5OlRpbWVzIE5ldyBSb21hbiwgVGltZXMsIHNlcmlmXFxcIj48c3BhbiBzdHlsZT1cXFwiZm9udC1zaXplOjEyLjBwdDtcXFwiPtiq2LfYqNmCINin2YTYtNix2YjYtyDZiNin2YTYp9it2YPYp9mFPFxcL3NwYW4+PFxcL3NwYW4+PFxcL3A+XFxuXCIsXG4gICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25JZFwiOiBcIjE2NzlcIixcbiAgICAgICAgICAgICAgICBcInByb21vdGluVGl0bGVcIjogXCLZhdmK2KzYpyDYqNmE2LNcIlxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImltYWdlVXJsXCI6IFwiaHR0cHM6Ly93d3cudGVkYXRhLm5ldC93cHMvd2NtL2Nvbm5lY3QvZjAzNDkyODAtYzAyNC00YmQzLTk5YzMtNzNjMjIxNDJmMzcwLzE3MDB4NjUxLnBuZz9NT0Q9QUpQRVJFUyZDQUNIRUlEPWYwMzQ5MjgwLWMwMjQtNGJkMy05OWMzLTczYzIyMTQyZjM3MFwiLFxuICAgICAgICAgICAgICAgIFwicHJvbW90aW9uQ29udGVudFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwicHJvbW90aW9uVGVybXNBbmRDb25kaXRpb25zXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25JZFwiOiBcIjE2NzkzXCIsXG4gICAgICAgICAgICAgICAgXCJwcm9tb3RpblRpdGxlXCI6IFwi2YXYudin2YNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImltYWdlVXJsXCI6IFwiaHR0cHM6Ly93d3cudGVkYXRhLm5ldC93cHMvd2NtL2Nvbm5lY3QvZTg5NTJjNjMtZTJkNi00MjhjLWE4NzUtMzExMmM4N2NjZDNiLzE3MDB3eDY1MWhhLnBuZz9NT0Q9QUpQRVJFUyZDQUNIRUlEPWU4OTUyYzYzLWUyZDYtNDI4Yy1hODc1LTMxMTJjODdjY2QzYlwiLFxuICAgICAgICAgICAgICAgIFwicHJvbW90aW9uQ29udGVudFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwicHJvbW90aW9uVGVybXNBbmRDb25kaXRpb25zXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25JZFwiOiBcIjE2NzkzXCIsXG4gICAgICAgICAgICAgICAgXCJwcm9tb3RpblRpdGxlXCI6IFwi2YXYudin2YNcIlxuICAgICAgICAgICAgfVxuXG4gICAgICAgIF0sXG4gICAgICAgIFwicHJvbW90aW9uc0V4Y3B0aW9uSGFuZGxlclwiOiB7XG4gICAgICAgICAgICBcInN1Y2NlZGVkXCI6IHRydWUsXG4gICAgICAgICAgICBcImVycm9yTXNnRW5cIjogXCJcIlxuICAgICAgICB9LFxuICAgICAgICBcIlByb21vdGlvbnNFblwiOiBbXG4gICAgICAgICAgICB7XG5cbiAgICAgICAgICAgICAgICBcImltYWdlVXJsXCI6IFwiaHR0cHM6Ly93d3cudGVkYXRhLm5ldC93cHMvd2NtL2Nvbm5lY3QvNmMxMDY1Y2EtOWE0ZC00NWQ5LTkyYjMtMTE5MWVlZjhkNDNiL1ZBUi1Ib21lLVBhZ2UtMTcwMHg2NTEtK2VuLnBuZz9NT0Q9QUpQRVJFUyZDQUNIRUlEPTZjMTA2NWNhLTlhNGQtNDVkOS05MmIzLTExOTFlZWY4ZDQzYlwiLFxuXG4gICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25Db250ZW50XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25UZXJtc0FuZENvbmRpdGlvbnNcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcInByb21vdGlvbklkXCI6IFwiMTY3OTNcIixcbiAgICAgICAgICAgICAgICBcInByb21vdGluVGl0bGVcIjogXCLZhdi52KfZg1wiXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpbWFnZVVybFwiOiBcImh0dHBzOi8vd3d3LnRlZGF0YS5uZXQvd3BzL3djbS9jb25uZWN0L2M2ZTllYzI2LTBlNjItNDYzYS05NDZjLTM3M2M4YmU5MmI4My9NYTNhaysxNzAweDY1MS0rYXIucG5nP01PRD1BSlBFUkVTJkNBQ0hFSUQ9YzZlOWVjMjYtMGU2Mi00NjNhLTk0NmMtMzczYzhiZTkyYjgzXCIsXG4gICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25Db250ZW50XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25UZXJtc0FuZENvbmRpdGlvbnNcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcInByb21vdGlvbklkXCI6IFwiMTY3OTNcIixcbiAgICAgICAgICAgICAgICBcInByb21vdGluVGl0bGVcIjogXCLZhdi52KfZg1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuXG4gICAgICAgICAgICAgICAgXCJpbWFnZVVybFwiOiBcImh0dHBzOi8vdGVkYXRhLm5ldC8vd3BzL3djbS9jb25uZWN0LzM0NmRjMmY3LTFkM2EtNDBjMi1hMTI1LWMzYTc4NTdiYTMzYy8xNzAweDY1MS1lLnBuZz9NT0Q9QUpQRVJFUyZDQUNIRUlEPTM0NmRjMmY3LTFkM2EtNDBjMi1hMTI1LWMzYTc4NTdiYTMzY1wiLFxuICAgICAgICAgICAgICAgIFwicHJvbW90aW9uQ29udGVudFwiOiBcIjxzY3JpcHQ+XFxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xcbiAgICAgICAgJChcXFwiZGl2I2RhdGFcXFwiKS5oaWRlKCk7XFxuICAgICAgICAgICAgJChcXFwiYSNjbGlja1xcXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XFxuICAgICAgICAgICAgICAgICQoXFxcImRpdiNkYXRhXFxcIikudG9nZ2xlKCk7XFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICB9KTtcXG4gICAgICAgIDxcXC9zY3JpcHQ+XFxuPHN0eWxlIHR5cGU9XFxcInRleHRcXC9jc3NcXFwiPi5wYWNrYWdle1xcbiAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgI2RkZFxcbiAgICAgICAgICB9XFxuICAgICAgICAgIC5wYWNrYWdlIHRkIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgI2RkZFxcbiAgICAgICAgICB9XFxuICAgICAgICAgIC5wYWNrYWdlIHRoIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICAuV0NNX1NlY3Rpb24gdGFibGUgdHI6bnRoLWNoaWxkKDJuKzEpIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgLmJnY29sb3IsIHRyLmJnY29sb3IgdGh7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmOCAhaW1wb3J0YW50O1xcbiAgICAgICAgICB9XFxuPFxcL3N0eWxlPlxcbjxkaXYgY2xhc3M9XFxcImJsb2NrX19ib2R5XFxcIiBkaXI9XFxcImx0clxcXCI+XFxuPHAgY2xhc3M9XFxcInRleHQtYm9sZFxcXCI+VEUgZGF0YSBpcyBhbHdheXMga2VlbiB0byBwcm92aWRlIHRoZSBleGlzdGluZyBjdXN0b21lcnMgd2l0aCB0aGUgYmVzdCwgc28gd2UgYXJlIGdsYWQgdG8gaW50cm9kdWNlIFRFIGRhdGHigJlzIG5ldyBcXFwiTWVnYSBwbHVzXFxcIiBBRFNMIHBhY2thZ2VzLjxcXC9wPlxcblxcbjxwPk5vdywgeW91IGNhbiBlbmpveSB0aGUgaGlnaGVyIHNwZWVkIHlvdXIgbGluZSBjYW4gYmVhciwgaGlnaGVyIHF1b3RhcyBhbmQgZW5qb3kgU2hhaGlkIHBsdXMgYXMgd2VsbC4gVG8gdmlldyBNZWdhIHBsdXMgQURTTCBwYWNrYWdlcyA8YSBocmVmPVxcXCIjXFxcIiBpZD1cXFwiY2xpY2tcXFwiPkNsaWNrIGhlcmU8XFwvYT4sIHRvIHJlbmV3IG9uIG9uZSBvZiBvdXIgbmV3IHBhY2thZ2VzIDxzcGFuIGNsYXNzPVxcXCJ0ZXh0LWJvbGRcXFwiPiBDbGljayBOZXh0PFxcL3NwYW4+PFxcL3A+XFxuXFxuPGRpdiBjbGFzcz1cXFwibWFyaWduLTMwLTBcXFwiIGlkPVxcXCJkYXRhXFxcIj5cXG48dGFibGUgY2xhc3M9XFxcInBhY2thZ2VcXFwiPlxcblxcdDx0Ym9keT5cXG5cXHRcXHQ8dHIgY2xhc3M9XFxcImJnY29sb3JcXFwiPlxcblxcdFxcdFxcdDx0aD5TcGVlZDxcXC90aD5cXG5cXHRcXHRcXHQ8dGg+UXVvdGE8XFwvdGg+XFxuXFx0XFx0XFx0PHRoPlRocm90dGxpbmcgU3BlZWQ8XFwvdGg+XFxuXFx0XFx0XFx0PHRoPlByaWNlPFxcL3RoPlxcblxcdFxcdFxcdDx0aD5GcmVlIEFkZGVkIFNlcnZpY2U8XFwvdGg+XFxuXFx0XFx0PFxcL3RyPlxcblxcdFxcdDx0cj5cXG5cXHRcXHRcXHQ8dGQ+MSBNYnBzPFxcL3RkPlxcblxcdFxcdFxcdDx0ZD4xMDAgR0I8XFwvdGQ+XFxuXFx0XFx0XFx0PHRkPjUxMiBLYnBzPGJyIFxcLz5cXG5cXHRcXHRcXHR1bmxpbWl0ZWQ8XFwvdGQ+XFxuXFx0XFx0XFx0PHRkPjEwMCBMLkU8XFwvdGQ+XFxuXFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJiZ2NvbG9yXFxcIj5Ob3QgaW5jbHVkZWQ8XFwvdGQ+XFxuXFx0XFx0PFxcL3RyPlxcblxcdFxcdDx0cj5cXG5cXHRcXHRcXHQ8dGQgY2xhc3M9XFxcIndpZHRoLTIwMFxcXCIgcm93c3Bhbj1cXFwiNFxcXCI+VXAgdG8gdGhlIGhpZ2hlc3Qgc3BlZWQgeW91ciBsYW5kbGluZSBjYW4gc3VwcG9ydDxzcGFuIGNsYXNzPVxcXCJ0ZXh0LW1lZGl1bS0xIHRleHQtcHJpbWFyeSB0ZXh0LW5vcm1hbFxcXCI+KjxcXC9zcGFuPjxcXC90ZD5cXG5cXHRcXHRcXHQ8dGQ+MTAwIEdCPFxcL3RkPlxcblxcdFxcdFxcdDx0ZD4xIE1icHM8YnIgXFwvPlxcblxcdFxcdFxcdHVubGltaXRlZDxcXC90ZD5cXG5cXHRcXHRcXHQ8dGQ+MTYwIEwuRTxcXC90ZD5cXG5cXHRcXHRcXHQ8dGQgY2xhc3M9XFxcImJnY29sb3JcXFwiIHJvd3NwYW49XFxcIjRcXFwiPk1CQyBTaGFoaWQgUGx1czxcXC90ZD5cXG5cXHRcXHQ8XFwvdHI+XFxuXFx0XFx0PHRyPlxcblxcdFxcdFxcdDx0ZD4yMDAgR0I8XFwvdGQ+XFxuXFx0XFx0XFx0PHRkPjIgTWJwczxiciBcXC8+XFxuXFx0XFx0XFx0dW5saW1pdGVkPFxcL3RkPlxcblxcdFxcdFxcdDx0ZD4yNjAgTC5FPFxcL3RkPlxcblxcdFxcdDxcXC90cj5cXG5cXHRcXHQ8dHI+XFxuXFx0XFx0XFx0PHRkPjMwMCBHQjxcXC90ZD5cXG5cXHRcXHRcXHQ8dGQ+NCBNYnBzPGJyIFxcLz5cXG5cXHRcXHRcXHR1bmxpbWl0ZWQ8XFwvdGQ+XFxuXFx0XFx0XFx0PHRkPjM2MCBMLkU8XFwvdGQ+XFxuXFx0XFx0PFxcL3RyPlxcblxcdFxcdDx0cj5cXG5cXHRcXHRcXHQ8dGQ+NTAwIEdCPFxcL3RkPlxcblxcdFxcdFxcdDx0ZD40IE1icHM8YnIgXFwvPlxcblxcdFxcdFxcdHVubGltaXRlZDxcXC90ZD5cXG5cXHRcXHRcXHQ8dGQ+NTAwIEwuRTxcXC90ZD5cXG5cXHRcXHQ8XFwvdHI+XFxuXFx0PFxcL3Rib2R5PlxcbjxcXC90YWJsZT5cXG48c3BhbiBjbGFzcz1cXFwidGV4dC14eC1zbWFsbCBfYmxvY2sgcGFkZGluZy0zXFxcIj48c3BhbiBjbGFzcz1cXFwidGV4dC1tZWRpdW0tMSB0ZXh0LXByaW1hcnkgdGV4dC1ub3JtYWxcXFwiPio8XFwvc3Bhbj5IaWdoZXN0IHNwZWVkIHVwIHRvIDE2TWJwczxcXC9zcGFuPjxcXC9kaXY+XFxuPFxcL2Rpdj5cXG5cIixcbiAgICAgICAgICAgICAgICBcInByb21vdGlvblRlcm1zQW5kQ29uZGl0aW9uc1wiOiBcIjxwIGRpcj1cXFwibHRyXFxcIj48c3BhbiBzdHlsZT1cXFwiZm9udC1mYW1pbHk6VGltZXMgTmV3IFJvbWFuLCBUaW1lcywgc2VyaWZcXFwiPjxzcGFuIHN0eWxlPVxcXCJmb250LXNpemU6MTIuMHB0O1xcXCI+VGVybXMgYW5kIGNvbmRpdGlvbnMgYXBwbHk8XFwvc3Bhbj48XFwvc3Bhbj48XFwvcD5cXG5cIixcbiAgICAgICAgICAgICAgICBcInByb21vdGlvbklkXCI6IFwiMTY3OVwiLFxuICAgICAgICAgICAgICAgIFwicHJvbW90aW5UaXRsZVwiOiBcIk1lZ2EgcGx1c1wiXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImltYWdlVXJsXCI6IFwiaHR0cHM6Ly93d3cudGVkYXRhLm5ldC93cHMvd2NtL2Nvbm5lY3QvMWM3MmFjNjYtYjUzNy00Nzg5LWJiNTUtMjliNDE3NThmNTEyL25ldHNhdmVyLTE3MDB4NjUxLnBuZz9NT0Q9QUpQRVJFUyZDQUNIRUlEPTFjNzJhYzY2LWI1MzctNDc4OS1iYjU1LTI5YjQxNzU4ZjUxMlwiLFxuXG4gICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25Db250ZW50XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25UZXJtc0FuZENvbmRpdGlvbnNcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcInByb21vdGlvbklkXCI6IFwiMTY3OTNcIixcbiAgICAgICAgICAgICAgICBcInByb21vdGluVGl0bGVcIjogXCLZhdi52KfZg1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaW1hZ2VVcmxcIjogXCJodHRwczovL3d3dy50ZWRhdGEubmV0L3dwcy93Y20vY29ubmVjdC9mM2RhMzZjMC0xZDUzLTQwZTktYmEzNi1jMmEzYmFlMjg0OGYvMTcwMHd4NjUxaGUucG5nP01PRD1BSlBFUkVTJkNBQ0hFSUQ9ZjNkYTM2YzAtMWQ1My00MGU5LWJhMzYtYzJhM2JhZTI4NDhmXCIsXG5cbiAgICAgICAgICAgICAgICBcInByb21vdGlvbkNvbnRlbnRcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcInByb21vdGlvblRlcm1zQW5kQ29uZGl0aW9uc1wiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwicHJvbW90aW9uSWRcIjogXCIxNjc5M1wiLFxuICAgICAgICAgICAgICAgIFwicHJvbW90aW5UaXRsZVwiOiBcItmF2LnYp9mDXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH07XG5cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TGFzdFJlbmV3YWJsZT17XG4gICAgICAgIFwicmVuZXdhbFN0YXR1c1wiOiB7XG4gICAgICAgICAgICBcInJlbmV3YWxSZXF1ZXN0RGF0ZVwiOiAxNTAyOTU5MDc0MDkxLFxuICAgICAgICAgICAgXCJyZW5ld2FsQW1vdW50XCI6IFwiMTUwLjAwXCIsXG4gICAgICAgICAgICBcInJlbmV3YWxSZXF1ZXN0RGF0ZVN0cmluZ1wiOiBcIjE3LzA4LzIwMTdcIixcbiAgICAgICAgICAgIFwicmVuZXdhbFJlcXVlc3RUaW1lU3RyaW5nXCI6IFwiMTE6MzdcIixcbiAgICAgICAgICAgIFwic3VjY2Vzc2Z1bFwiOiB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldFVzZXJBRFNMVXNhZ2U9IHtcImFkc2xVc2FnZVwiOntcInF1YXRhXCI6MTUwLjAsXCJ0b3RhbFVzZWRcIjoyOS42NX19O1xuXG5cbiAgICBwdWJsaWMgc3RhdGljIGdldFVzZXJQb2ludHM9e1wibG95YWx0eVBvaW50c1wiOjIwfTtcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VXNlckFEU0xSZW1haW5pbmdEYXlzX2V4ZXB0aW9uPXtcbiAgICAgICAgXCJyZW1haW5pbmdFeGNwdGlvbkhhbmRsZXJcIjoge1xuICAgICAgICAgICAgXCJzdWNjZWRlZFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwiZXJyb3JNc2dFblwiOiBcIkRlYXIgVmFsdWVkIGN1c3RvbWVyLCB0aGlzIHNlcnZpY2UgaXMgbm90IGF2YWlsYWJsZSBmb3IgeW91ciBzdWJzY3JpcHRpb24uIFBsZWFzZSB1c2UgT24tbGluZSBzdXBwb3J0LCB2aXNpdCB0aGUgbmVhcmVzdCBicmFuY2ggb3IgY29udGFjdCAxOTc3N1wiLFxuICAgICAgICAgICAgXCJlcnJvck1zZ0FyXCI6IFwi2LnZhdmK2YTZhtinINin2YTYudiy2YrYstiM2KfZhNiv2YHYuSDYp9mE2KfZhNmD2KrYsdmI2YbZiSDYutmK2LEg2YXYqtin2K0g2YTZh9iw2Kcg2KfZhNil2LTYqtix2KfZg9iMINio2LHYrNin2KEg2LLZitin2LHYqSDYo9mC2LHYqCDZgdix2Lkg2KPZiCDYp9mE2KfYqti12KfZhCDYqNmAIDE5Nzc3INij2Ygg2KfYs9iq2LnZhdin2YQg2KfZhNiv2LnZhSDYp9mE2YHZhtmKINin2YTYrdmKLlwiXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXRVc2VyQURTTFJlbWFpbmluZ0RheXM9e1xuICAgICAgICBcInJlbWFpbmluZ0RheXNcIjoge1xuICAgICAgICAgICAgXCJhZHNsRXhwaXJ5RGF0ZVN0cmluZ1wiOiBcIjxzY3JpcHQ+YWxlcnQoJ3h4eHh4eCcpPC9zY3JpcHQ+XCIsXG4gICAgICAgICAgICBcInJlbWFpbmluZ0RheXNcIjogMjIsXG4gICAgICAgICAgICBcInBhY2thZ2VOYW1lXCI6IFwiSG9tZSBBRFNMIC0gMSBNYnBzIOKAkyAxIE1vbnRoXCIsXG4gICAgICAgICAgICBcImFtb3VudER1ZVwiOiA5NS4wXG4gICAgICAgIH1cbiAgICB9O1xuXG5cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0U3Vic2NyaXB0aW9uUmVuZXdhbEluZm89e1wic3Vic2NyaXB0aW9uSW5xdWlyeVwiOntcInByb2R1Y3RMaXN0XCI6W3tcIm5hbWVcIjpcIlRBTDJBQURTTFVwdG84TUItKENhcDQwRyktMU1vbnRoXCIsXCJkdXJhdGlvblwiOlwiMVwiLFwic3RhcnREYXRlXCI6MTQyMDQ5NTIwMDAwMCxcImVuZERhdGVcIjoxNDIzMDg3MjAwMDAwLFwic3RhcnREYXRlU3RyaW5nXCI6XCIwNi8wMS8yMDE1XCIsXCJlbmREYXRlU3RyaW5nXCI6XCIwNS8wMi8yMDE1XCIsXCJpZFwiOjM1NyxcInBhY2thZ2VJZFwiOjU2MDB9XSxcImN1c3RvbWVyTmFtZVwiOlwiTW9oYW1lZEhhbmFmeU1haG1vdWRcIixcImN1c3RvbWVyTnVtYmVyXCI6XCIxNjMwMTAxXCIsXCJhcmVhQ29kZVwiOlwiMlwiLFwiYWRzbE51bWJlclwiOlwiMzcyMzQ1NjZcIixcInN1YnNjcmlwdGlvbk5ldER1ZVwiOjE1MCxcImFtb3VudFwiOjE1MCxcImRheXNVbnRpbE5leHRSZW5ld2FsXCI6XCIxNVwiLFwicGFja2FnZU5hbWVcIjpcIlRBTDJBQURTTFVwdG84TUItKENhcDQwRyktMU1vbnRoXCIsXCJhZHNsRG93blNwZWVkXCI6ODE5MixcImFkc2xVcHNwZWVkXCI6MTAyNCxcImFkc2xMaW1pdGF0aW9uVHlwZUlkXCI6NCxcImNhblVwZGF0ZUluVGhlTWlkZGxlXCI6ZmFsc2UsXCJhZHNsTGltaXRhdGlvblR5cGVcIjpcIlRhbDJhXCIsXCJhZHNsRXhwaXJ0eURhdGVcIjoxNDIwNDA4ODAwMDAwLFwiYWRzbEV4cGlydHlEYXRlU3RyaW5nXCI6XCIwNS8wMS8yMDE1XCIsXCJoYXZlQ1BFXCI6ZmFsc2UsXCJoYXZlT3B0aW9uUGFja1wiOmZhbHNlLFwicmVxdWVzdE51bWJlclwiOjU0NjE2LFwic29hcFJlcXVlc3RcIjpcIjxzb2FwZW52OiBFbnZlbG9wZXhtbG5zOiBzb2FwZW52PVxcXCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy9zb2FwL2VudmVsb3BlL1xcXCIgeG1sbnM6d2ViPVxcXCJodHRwOi8vd2Vic2VydmljZXMudGVkYXRhLm5ldFxcXCI+PHNvYXBlbnY6Qm9keT48d2ViOmlucXVpcnlCeUN1c3RvbWVyTnVtYmVyUmVxdWVzdCB4bWxuczp3ZWI9XFxcImh0dHA6Ly93ZWJzZXJ2aWNlcy50ZWRhdGEubmV0XFxcIj48YWRzbFBob25lTnVtYmVyLz48YXJlYUNvZGU+MDwvYXJlYUNvZGU+PGN1c3RvbWVyTnVtYmVyPjE0OTYzOTk8L2N1c3RvbWVyTnVtYmVyPjxpbmNsdWRlQ1BFUmVudGFsSW5SZW5ld2FsPnRydWU8L2luY2x1ZGVDUEVSZW50YWxJblJlbmV3YWw+PGluY2x1ZGVPcHRpb25QYWNrSW5SZW5ld2FsPnRydWU8L2luY2x1ZGVPcHRpb25QYWNrSW5SZW5ld2FsPjxuZXdEdXJhdGlvbkluTW9udGhzPjA8L25ld0R1cmF0aW9uSW5Nb250aHM+PG5ld0xpbWl0YXRpb25UeXBlLz48bmV3T3B0aW9uUGFja1BhY2thZ2VJRD4wPC9uZXdPcHRpb25QYWNrUGFja2FnZUlEPjxuZXdPcHRpb25QYWNrUGFja2FnZVByaWNlPjAuMDwvbmV3T3B0aW9uUGFja1BhY2thZ2VQcmljZT48bmV3U3BlZWQvPjxwYXltZW50TWV0aG9kSUQ+MTA8L3BheW1lbnRNZXRob2RJRD48cmVuZXdhbEFkbWluVXNlcklEPjExNDE0PC9yZW5ld2FsQWRtaW5Vc2VySUQ+PHJlbmV3YWxMb2NhdGlvbklEPjIxMzwvcmVuZXdhbExvY2F0aW9uSUQ+PHJlbmV3YWxVc2VyTmFtZT5TU1A8L3JlbmV3YWxVc2VyTmFtZT48cGFja2FnZU9mZmVyVHlwZUlEPjA8L3BhY2thZ2VPZmZlclR5cGVJRD48dm91Y2hlck51bWJlci8+PHVwZ3JhZGVJblRoZU1pZGRsZT5mYWxzZTwvdXBncmFkZUluVGhlTWlkZGxlPjx1c2VFeGlzdGluZ0R1cmF0aW9uPnRydWU8L3VzZUV4aXN0aW5nRHVyYXRpb24+PHVzZUV4aXN0aW5nTGltaXRhdGlvblR5cGU+dHJ1ZTwvdXNlRXhpc3RpbmdMaW1pdGF0aW9uVHlwZT48dXNlRXhpc3RpbmdQYWNrYWdlT2ZmZXJUeXBlSUQ+dHJ1ZTwvdXNlRXhpc3RpbmdQYWNrYWdlT2ZmZXJUeXBlSUQ+PHVzZUV4aXN0aW5nU3BlZWQ+dHJ1ZTwvdXNlRXhpc3RpbmdTcGVlZD48L3dlYjppbnF1aXJ5QnlDdXN0b21lck51bWJlclJlcXVlc3Q+PC9zb2FwZW52OkJvZHk+PC9zb2FwZW52OkVudmVsb3BlPlxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFwiLFxuICAgICAgICBcInNvYXBSZXNwb25zZVwiOiBcIjxzb2FwZW52OkVudmVsb3BlIHhtbG5zOnNvYXBlbnY9XFxcImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3NvYXAvZW52ZWxvcGUvXFxcIj48c29hcGVudjpIZWFkZXIgeG1sbnM6d3NhPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDA1LzA4L2FkZHJlc3NpbmdcXFwiPlxcblxcdFxcdDx3c2E6VG8+aHR0cDovL3d3dy53My5vcmcvMjAwNS8wOC9hZGRyZXNzaW5nL2Fub255bW91czwvd3NhOlRvPlxcblxcdFxcdDx3c2E6UmVwbHlUbz5cXG5cXHRcXHRcXHQ8d3NhOkFkZHJlc3M+aHR0cDovL3d3dy53My5vcmcvMjAwNS8wOC9hZGRyZXNzaW5nL2Fub255bW91czwvd3NhOkFkZHJlc3M+XFxuXFx0XFx0PC93c2E6UmVwbHlUbz5cXG5cXHRcXHQ8d3NhOk1lc3NhZ2VJRD51cm46dXVpZDo3RkE2RkZCRjYyMjUwMzE1MTgxNDE5MTQ5MDA5NTYwPC93c2E6TWVzc2FnZUlEPlxcblxcdFxcdDx3c2E6QWN0aW9uPmlucXVpcnlCeUN1c3RvbWVyTnVtYmVyUmVxdWVzdFJlc3BvbnNlPC93c2E6QWN0aW9uPlxcblxcdFxcdDx3c2E6UmVsYXRlc1RvIFJlbGF0aW9uc2hpcFR5cGU9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDUvMDgvYWRkcmVzc2luZy9yZXBseVxcXCI+dXJuOnV1aWQ6MjM1YTg1NzYtZGJkNS00YzhmLTllZDgtY2EzMzgwMTMyMzFkPC93c2E6UmVsYXRlc1RvPlxcblxcdDwvc29hcGVudjpIZWFkZXI+PHNvYXBlbnY6Qm9keT5cXG5cXHRcXHQ8d2ViOmlucXVpcnlCeUN1c3RvbWVyTnVtYmVyUmVzcG9uc2UgeG1sbnM6d2ViPVxcXCJodHRwOi8vd2Vic2VydmljZXMudGVkYXRhLm5ldFxcXCI+PGFkc2xBY2NvdW50SUQ+MzU4MzUyMDwvYWRzbEFjY291bnRJRD48YWRzbFBob25lTnVtYmVyPjM3MjM0NTY2PC9hZHNsUGhvbmVOdW1iZXI+PGFkc2xTZXJ2aWNlSUQ+Njk8L2Fkc2xTZXJ2aWNlSUQ+PGFkc2xTd2l0Y2hpbmdGZWVzUHJpY2U+NjAwLjA8L2Fkc2xTd2l0Y2hpbmdGZWVzUHJpY2U+PGFyZWFDb2RlPjI8L2FyZWFDb2RlPjxjcGVSZW50YWxBY2NvdW50SUQ+MDwvY3BlUmVudGFsQWNjb3VudElEPjxjcGVSZW50YWxTZXJ2aWNlSUQ+MDwvY3BlUmVudGFsU2VydmljZUlEPjxjcmVhdGVkSW52b2ljZU51bWJlcj4wPC9jcmVhdGVkSW52b2ljZU51bWJlcj48Y3JlYXRlZFByb2Zvcm1hTnVtYmVyPjA8L2NyZWF0ZWRQcm9mb3JtYU51bWJlcj48Y3JlYXRlZFJlY2VpcHROdW1iZXI+MDwvY3JlYXRlZFJlY2VpcHROdW1iZXI+PGN1cnJlbnREYXRlPjIwMTQtMTItMjE8L2N1cnJlbnREYXRlPjxjdXN0b21lckFjdGl2ZT50cnVlPC9jdXN0b21lckFjdGl2ZT48Y3VzdG9tZXJDYXRlZ29yeUlEcz4zMDMyPC9jdXN0b21lckNhdGVnb3J5SURzPjxjdXN0b21lckNhdGVnb3J5TmFtZXM+Q29uc3VtZXJzPC9jdXN0b21lckNhdGVnb3J5TmFtZXM+PGN1c3RvbWVyTmFtZT5Nb2hhbWVkIEhhbmFmeSBNYWhtb3VkPC9jdXN0b21lck5hbWU+PGN1c3RvbWVyTnVtYmVyPjE2MzAxMDE8L2N1c3RvbWVyTnVtYmVyPjxlcnJvckNvZGU+LTE8L2Vycm9yQ29kZT48ZXJyb3JNZXNzYWdlIHhzaTpuaWw9XFxcInRydWVcXFwiIHhtbG5zOnhzaT1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2VcXFwiLz48ZXJyb3JPY2N1cmVkPmZhbHNlPC9lcnJvck9jY3VyZWQ+PGV4aXN0aW5nQ3VzdG9tZXI+dHJ1ZTwvZXhpc3RpbmdDdXN0b21lcj48ZXh0ZXJuYWxQYXltZW50VHJhbnNhY3Rpb25OdW1iZXIvPjxleHRyYVVzYWdlRHVlPjAuMDwvZXh0cmFVc2FnZUR1ZT48Z2FwSW5EYXlzQmV0d2VlbkFEU0xFeHBpcnlEYXRlQW5kVG9kYXk+LTE1PC9nYXBJbkRheXNCZXR3ZWVuQURTTEV4cGlyeURhdGVBbmRUb2RheT48Z2FwSW5EYXlzQmV0d2VlbkNQRVJlbnRhbEV4cGlyeURhdGVBbmRBRFNMRXhwaXJ5RGF0ZT4wPC9nYXBJbkRheXNCZXR3ZWVuQ1BFUmVudGFsRXhwaXJ5RGF0ZUFuZEFEU0xFeHBpcnlEYXRlPjxnYXBJbkRheXNCZXR3ZWVuQ1BFUmVudGFsRXhwaXJ5RGF0ZUFuZFRvZGF5PjA8L2dhcEluRGF5c0JldHdlZW5DUEVSZW50YWxFeHBpcnlEYXRlQW5kVG9kYXk+PGdhcEluRGF5c0JldHdlZW5PcHRpb25QYWNrRXhwaXJ5RGF0ZUFuZEFEU0xFeHBpcnlEYXRlPjA8L2dhcEluRGF5c0JldHdlZW5PcHRpb25QYWNrRXhwaXJ5RGF0ZUFuZEFEU0xFeHBpcnlEYXRlPjxnYXBJbkRheXNCZXR3ZWVuT3B0aW9uUGFja0V4cGlyeURhdGVBbmRUb2RheT4wPC9nYXBJbkRheXNCZXR3ZWVuT3B0aW9uUGFja0V4cGlyeURhdGVBbmRUb2RheT48aGFzUGVuZGluZ1Byb2Zvcm1hT25BRFNMPmZhbHNlPC9oYXNQZW5kaW5nUHJvZm9ybWFPbkFEU0w+PGhhc1BlbmRpbmdQcm9mb3JtYU9uQ1BFUmVudGFsPmZhbHNlPC9oYXNQZW5kaW5nUHJvZm9ybWFPbkNQRVJlbnRhbD48aGFzUGVuZGluZ1Byb2Zvcm1hT25PcHRpb25QYWNrPmZhbHNlPC9oYXNQZW5kaW5nUHJvZm9ybWFPbk9wdGlvblBhY2s+PGluY2x1ZGVDUEVSZW50YWxJblJlbmV3YWw+ZmFsc2U8L2luY2x1ZGVDUEVSZW50YWxJblJlbmV3YWw+PGluY2x1ZGVPcHRpb25QYWNrSW5SZW5ld2FsPmZhbHNlPC9pbmNsdWRlT3B0aW9uUGFja0luUmVuZXdhbD48aW50ZXJuYWxFcnJvck1lc3NhZ2UgeHNpOm5pbD1cXFwidHJ1ZVxcXCIgeG1sbnM6eHNpPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVxcXCIvPjxsYXN0QWN0aXZlQURTTEV4cGlyeURhdGU+MjAxNS0wMS0wNTwvbGFzdEFjdGl2ZUFEU0xFeHBpcnlEYXRlPjxsYXN0QWN0aXZlQURTTEludm9pY2VBY3RpdmU+dHJ1ZTwvbGFzdEFjdGl2ZUFEU0xJbnZvaWNlQWN0aXZlPjxsYXN0QWN0aXZlQURTTEludm9pY2VJRD4zNzYyOTg4NTwvbGFzdEFjdGl2ZUFEU0xJbnZvaWNlSUQ+PGxhc3RBY3RpdmVBRFNMSW52b2ljZU51bWJlcj4zMzI3MTMxMDwvbGFzdEFjdGl2ZUFEU0xJbnZvaWNlTnVtYmVyPjxsYXN0QWN0aXZlQURTTFBhY2thZ2U+VEFMMkEgQURTTCBVcCB0byA4TUIgLSAoQ2FwIDQwRykgLSAxIE1vbnRoPC9sYXN0QWN0aXZlQURTTFBhY2thZ2U+PGxhc3RBY3RpdmVBRFNMUGFja2FnZURvd25sb2FkU3BlZWQ+ODE5MjwvbGFzdEFjdGl2ZUFEU0xQYWNrYWdlRG93bmxvYWRTcGVlZD48bGFzdEFjdGl2ZUFEU0xQYWNrYWdlRHVyYXRpb25Jbk1vbnRocz4xPC9sYXN0QWN0aXZlQURTTFBhY2thZ2VEdXJhdGlvbkluTW9udGhzPjxsYXN0QWN0aXZlQURTTFBhY2thZ2VJRD41NjAwPC9sYXN0QWN0aXZlQURTTFBhY2thZ2VJRD48bGFzdEFjdGl2ZUFEU0xQYWNrYWdlTGltaXRhdGlvblR5cGU+VGFsMmE8L2xhc3RBY3RpdmVBRFNMUGFja2FnZUxpbWl0YXRpb25UeXBlPjxsYXN0QWN0aXZlQURTTFBhY2thZ2VTcGVlZD44MTkyLzEwMjQ8L2xhc3RBY3RpdmVBRFNMUGFja2FnZVNwZWVkPjxsYXN0QWN0aXZlQURTTFBhY2thZ2VVcGxvYWRSYXRpbz44PC9sYXN0QWN0aXZlQURTTFBhY2thZ2VVcGxvYWRSYXRpbz48bGFzdEFjdGl2ZUFEU0xQYWNrYWdlVXBsb2FkU3BlZWQ+MTAyNDwvbGFzdEFjdGl2ZUFEU0xQYWNrYWdlVXBsb2FkU3BlZWQ+PGxhc3RBY3RpdmVDUEVSZW50YWxFeHBpcnlEYXRlIHhzaTpuaWw9XFxcInRydWVcXFwiIHhtbG5zOnhzaT1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2VcXFwiLz48bGFzdEFjdGl2ZUNQRVJlbnRhbEludm9pY2VBY3RpdmU+ZmFsc2U8L2xhc3RBY3RpdmVDUEVSZW50YWxJbnZvaWNlQWN0aXZlPjxsYXN0QWN0aXZlQ1BFUmVudGFsSW52b2ljZUlEPjA8L2xhc3RBY3RpdmVDUEVSZW50YWxJbnZvaWNlSUQ+PGxhc3RBY3RpdmVDUEVSZW50YWxJbnZvaWNlTnVtYmVyPjA8L2xhc3RBY3RpdmVDUEVSZW50YWxJbnZvaWNlTnVtYmVyPjxsYXN0QWN0aXZlQ1BFUmVudGFsUGFja2FnZSB4c2k6bmlsPVxcXCJ0cnVlXFxcIiB4bWxuczp4c2k9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXFxcIi8+PGxhc3RBY3RpdmVDUEVSZW50YWxQYWNrYWdlRHVyYXRpb25Jbk1vbnRocz4wPC9sYXN0QWN0aXZlQ1BFUmVudGFsUGFja2FnZUR1cmF0aW9uSW5Nb250aHM+PGxhc3RBY3RpdmVDUEVSZW50YWxQYWNrYWdlSUQ+MDwvbGFzdEFjdGl2ZUNQRVJlbnRhbFBhY2thZ2VJRD48bGFzdEFjdGl2ZUNQRVJlbnRhbFR5cGUgeHNpOm5pbD1cXFwidHJ1ZVxcXCIgeG1sbnM6eHNpPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVxcXCIvPjxsYXN0QWN0aXZlT3B0aW9uUGFja0V4cGlyeURhdGUgeHNpOm5pbD1cXFwidHJ1ZVxcXCIgeG1sbnM6eHNpPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVxcXCIvPjxsYXN0QWN0aXZlT3B0aW9uUGFja0ludm9pY2VBY3RpdmU+ZmFsc2U8L2xhc3RBY3RpdmVPcHRpb25QYWNrSW52b2ljZUFjdGl2ZT48bGFzdEFjdGl2ZU9wdGlvblBhY2tJbnZvaWNlSUQ+MDwvbGFzdEFjdGl2ZU9wdGlvblBhY2tJbnZvaWNlSUQ+PGxhc3RBY3RpdmVPcHRpb25QYWNrSW52b2ljZU51bWJlcj4wPC9sYXN0QWN0aXZlT3B0aW9uUGFja0ludm9pY2VOdW1iZXI+PGxhc3RBY3RpdmVPcHRpb25QYWNrUGFja2FnZSB4c2k6bmlsPVxcXCJ0cnVlXFxcIiB4bWxuczp4c2k9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXFxcIi8+PGxhc3RBY3RpdmVPcHRpb25QYWNrUGFja2FnZUR1cmF0aW9uSW5Nb250aHM+MDwvbGFzdEFjdGl2ZU9wdGlvblBhY2tQYWNrYWdlRHVyYXRpb25Jbk1vbnRocz48bGFzdEFjdGl2ZU9wdGlvblBhY2tQYWNrYWdlSUQ+MDwvbGFzdEFjdGl2ZU9wdGlvblBhY2tQYWNrYWdlSUQ+PGxhc3RBY3RpdmVPcHRpb25QYWNrVHlwZSB4c2k6bmlsPVxcXCJ0cnVlXFxcIiB4bWxuczp4c2k9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXFxcIi8+PG1heEdhcEluRGF5c0JldHdlZW5BRFNMRXhwaXJ5RGF0ZUFuZFRvZGF5PjMwPC9tYXhHYXBJbkRheXNCZXR3ZWVuQURTTEV4cGlyeURhdGVBbmRUb2RheT48bWF4R2FwSW5EYXlzQmV0d2VlbkNQRVJlbnRhbEV4cGlyeURhdGVBbmRBRFNMRXhwaXJ5RGF0ZT4yODwvbWF4R2FwSW5EYXlzQmV0d2VlbkNQRVJlbnRhbEV4cGlyeURhdGVBbmRBRFNMRXhwaXJ5RGF0ZT48bWF4R2FwSW5EYXlzQmV0d2VlbkNQRVJlbnRhbEV4cGlyeURhdGVBbmRUb2RheT41ODwvbWF4R2FwSW5EYXlzQmV0d2VlbkNQRVJlbnRhbEV4cGlyeURhdGVBbmRUb2RheT48bWF4R2FwSW5EYXlzQmV0d2Vlbk9wdGlvblBhY2tFeHBpcnlEYXRlQW5kQURTTEV4cGlyeURhdGU+Mjg8L21heEdhcEluRGF5c0JldHdlZW5PcHRpb25QYWNrRXhwaXJ5RGF0ZUFuZEFEU0xFeHBpcnlEYXRlPjxtYXhHYXBJbkRheXNCZXR3ZWVuT3B0aW9uUGFja0V4cGlyeURhdGVBbmRUb2RheT41ODwvbWF4R2FwSW5EYXlzQmV0d2Vlbk9wdGlvblBhY2tFeHBpcnlEYXRlQW5kVG9kYXk+PG5ld0FEU0xQYWNrYWdlSUQ+NTYwMDwvbmV3QURTTFBhY2thZ2VJRD48bmV3QURTTFBhY2thZ2VQcmljZT4xNTAuMDwvbmV3QURTTFBhY2thZ2VQcmljZT48bmV3Q1BFUmVudGFsUGFja2FnZUlEPjA8L25ld0NQRVJlbnRhbFBhY2thZ2VJRD48bmV3Q1BFUmVudGFsUGFja2FnZVByaWNlPjAuMDwvbmV3Q1BFUmVudGFsUGFja2FnZVByaWNlPjxuZXdEdXJhdGlvbkluTW9udGhzPjE8L25ld0R1cmF0aW9uSW5Nb250aHM+PG5ld0V4cGlyeURhdGVBZnRlclJlbmV3YWw+MjAxNS0yLTU8L25ld0V4cGlyeURhdGVBZnRlclJlbmV3YWw+PG5ld0xpbWl0YXRpb25UeXBlPlRhbDJhPC9uZXdMaW1pdGF0aW9uVHlwZT48bmV3T3B0aW9uUGFja1BhY2thZ2VJRD4wPC9uZXdPcHRpb25QYWNrUGFja2FnZUlEPjxuZXdPcHRpb25QYWNrUGFja2FnZVByaWNlPjAuMDwvbmV3T3B0aW9uUGFja1BhY2thZ2VQcmljZT48bmV3UHJvZm9ybWFOZXRBbW91bnQ+MTUwLjA8L25ld1Byb2Zvcm1hTmV0QW1vdW50PjxuZXdTcGVlZD44MTkyLzEwMjQ8L25ld1NwZWVkPjxvcHRpb25QYWNrQWNjb3VudElEPjA8L29wdGlvblBhY2tBY2NvdW50SUQ+PG9wdGlvblBhY2tTZXJ2aWNlSUQ+MDwvb3B0aW9uUGFja1NlcnZpY2VJRD48cGFja2FnZU9mZmVyVHlwZUlEPjM1NzwvcGFja2FnZU9mZmVyVHlwZUlEPjxwYXlSZW5ld2FsRHVlPmZhbHNlPC9wYXlSZW5ld2FsRHVlPjxwYXltZW50TWV0aG9kSUQ+MTA8L3BheW1lbnRNZXRob2RJRD48cGVyZm9ybVJlYWxSZW5ld2FsPmZhbHNlPC9wZXJmb3JtUmVhbFJlbmV3YWw+PHJlbmV3YWxBZG1pblVzZXJJRD4xMTQxNDwvcmVuZXdhbEFkbWluVXNlcklEPjxyZW5ld2FsQ3VzdG9tZXJDb21tZW50IHhzaTpuaWw9XFxcInRydWVcXFwiIHhtbG5zOnhzaT1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2VcXFwiLz48cmVuZXdhbExvY2F0aW9uSUQ+MjEzPC9yZW5ld2FsTG9jYXRpb25JRD48cmVuZXdhbFVzZXJOYW1lPlNTUDwvcmVuZXdhbFVzZXJOYW1lPjxyZXNlbGxlckN1c3RvbWVyTmFtZSB4c2k6bmlsPVxcXCJ0cnVlXFxcIiB4bWxuczp4c2k9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXFxcIi8+PHJlc2VsbGVyQ3VzdG9tZXJOdW1iZXI+LTE8L3Jlc2VsbGVyQ3VzdG9tZXJOdW1iZXI+PHRvdGFsRHVlRm9yUmVuZXdhbD4xNTAuMDwvdG90YWxEdWVGb3JSZW5ld2FsPjx1bnBhaWRFeHRyYVVzYWdlSW52b2ljZUFtb3VudHNEdWUgeHNpOm5pbD1cXFwidHJ1ZVxcXCIgeG1sbnM6eHNpPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVxcXCIvPjx1bnBhaWRFeHRyYVVzYWdlSW52b2ljZUlEcyB4c2k6bmlsPVxcXCJ0cnVlXFxcIiB4bWxuczp4c2k9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXFxcIi8+PGNhbnVwZ3JhZGVJblRoZU1pZGRsZT5mYWxzZTwvY2FudXBncmFkZUluVGhlTWlkZGxlPjx1c2VFeGlzdGluZ0R1cmF0aW9uPnRydWU8L3VzZUV4aXN0aW5nRHVyYXRpb24+PHVzZUV4aXN0aW5nTGltaXRhdGlvblR5cGU+dHJ1ZTwvdXNlRXhpc3RpbmdMaW1pdGF0aW9uVHlwZT48dXNlRXhpc3RpbmdQYWNrYWdlT2ZmZXJUeXBlSUQ+dHJ1ZTwvdXNlRXhpc3RpbmdQYWNrYWdlT2ZmZXJUeXBlSUQ+PHVzZUV4aXN0aW5nU3BlZWQ+dHJ1ZTwvdXNlRXhpc3RpbmdTcGVlZD48dm91Y2hlckFtb3VudHM+MC4wMDAwPC92b3VjaGVyQW1vdW50cz48dm91Y2hlck51bWJlcnM+VUQtMTY4OTQ3PC92b3VjaGVyTnVtYmVycz48bGFzdEFjdGl2ZUFEU0xQYWNrYWdlUHJpY2U+MTUwLjA8L2xhc3RBY3RpdmVBRFNMUGFja2FnZVByaWNlPjxuZXdBRFNMUGFja2FnZT5UQUwyQSBBRFNMIFVwIHRvIDhNQiAtIChDYXAgNDBHKSAtIDEgTW9udGg8L25ld0FEU0xQYWNrYWdlPjxuZXdDUEVSZW50YWxQYWNrYWdlIHhzaTpuaWw9XFxcInRydWVcXFwiIHhtbG5zOnhzaT1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2VcXFwiLz48bmV3Q1BFUmVudGFsUGFja2FnZUV4cGlyeURhdGUgeHNpOm5pbD1cXFwidHJ1ZVxcXCIgeG1sbnM6eHNpPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVxcXCIvPjxuZXdPcHRpb25QYWNrUGFja2FnZSB4c2k6bmlsPVxcXCJ0cnVlXFxcIiB4bWxuczp4c2k9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXFxcIi8+PG5ld09wdGlvblBhY2tQYWNrYWdlRXhwaXJ5RGF0ZSB4c2k6bmlsPVxcXCJ0cnVlXFxcIiB4bWxuczp4c2k9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXFxcIi8+PHVwZ3JhZGVJblRoZU1pZGRsZT5mYWxzZTwvdXBncmFkZUluVGhlTWlkZGxlPjwvd2ViOmlucXVpcnlCeUN1c3RvbWVyTnVtYmVyUmVzcG9uc2U+PC9zb2FwZW52OkJvZHk+PC9zb2FwZW52OkVudmVsb3BlPlwiXG4gICAgfSxcbiAgICAgICAgXCJhdmFpbGFibGVQYWNrYWdlc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25JZFwiOiAzNTYsXG4gICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25OYW1lXCI6IFwiVGFsMmEgU3RhbmRhcmQgUGFja2FnZXMgVXAgVG8gOE0gLSAoQ2FwIDE1RylcIixcbiAgICAgICAgICAgICAgICBcImF2YWlsYWJsZVByb210aW9uRHVyYXRpb25zXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJkdXJhdGlvblwiOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWNrYWdlSWRcIjogNTU5NixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFja2FnZU9mZmVyVHlwSWRcIjogMzU2LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkb3duU3BlZWRcIjogODE5MixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXBTcGVlZFwiOiAxMDI0LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW1pdGF0aW9uVHlwZVwiOiA0XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZHVyYXRpb25cIjogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFja2FnZUlkXCI6IDU1OTcsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhY2thZ2VPZmZlclR5cElkXCI6IDM1NixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZG93blNwZWVkXCI6IDgxOTIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVwU3BlZWRcIjogMTAyNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGltaXRhdGlvblR5cGVcIjogNFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImR1cmF0aW9uXCI6IDYsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhY2thZ2VJZFwiOiA1NTk4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWNrYWdlT2ZmZXJUeXBJZFwiOiAzNTYsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRvd25TcGVlZFwiOiA4MTkyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cFNwZWVkXCI6IDEwMjQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbWl0YXRpb25UeXBlXCI6IDRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJkdXJhdGlvblwiOiAxMixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFja2FnZUlkXCI6IDU1OTUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhY2thZ2VPZmZlclR5cElkXCI6IDM1NixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZG93blNwZWVkXCI6IDgxOTIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVwU3BlZWRcIjogMTAyNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGltaXRhdGlvblR5cGVcIjogNFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInNtYlByb21vdGlvbklkXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25JZFwiOiAzNTcsXG4gICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25OYW1lXCI6IFwiVGFsMmEgU3RhbmRhcmQgUGFja2FnZXMgVXAgVG8gOE0gLSAoQ2FwIDQwRylcIixcbiAgICAgICAgICAgICAgICBcImF2YWlsYWJsZVByb210aW9uRHVyYXRpb25zXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJkdXJhdGlvblwiOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWNrYWdlSWRcIjogNTYwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFja2FnZU9mZmVyVHlwSWRcIjogMzU3LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkb3duU3BlZWRcIjogODE5MixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXBTcGVlZFwiOiAxMDI0LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW1pdGF0aW9uVHlwZVwiOiA0XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZHVyYXRpb25cIjogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFja2FnZUlkXCI6IDU2MDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhY2thZ2VPZmZlclR5cElkXCI6IDM1NyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZG93blNwZWVkXCI6IDgxOTIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVwU3BlZWRcIjogMTAyNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGltaXRhdGlvblR5cGVcIjogNFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImR1cmF0aW9uXCI6IDYsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhY2thZ2VJZFwiOiA1NjAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWNrYWdlT2ZmZXJUeXBJZFwiOiAzNTcsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRvd25TcGVlZFwiOiA4MTkyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cFNwZWVkXCI6IDEwMjQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbWl0YXRpb25UeXBlXCI6IDRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJkdXJhdGlvblwiOiAxMixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFja2FnZUlkXCI6IDU1OTksXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhY2thZ2VPZmZlclR5cElkXCI6IDM1NyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZG93blNwZWVkXCI6IDgxOTIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVwU3BlZWRcIjogMTAyNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGltaXRhdGlvblR5cGVcIjogNFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInNtYlByb21vdGlvbklkXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25JZFwiOiA3NjYsXG4gICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25OYW1lXCI6IFwiVGFsMmEgU3RhbmRhcmQgUGFja2FnZXMgVXAgVG8gOE0gLSAoQ2FwIDVHKVwiLFxuICAgICAgICAgICAgICAgIFwiYXZhaWxhYmxlUHJvbXRpb25EdXJhdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImR1cmF0aW9uXCI6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhY2thZ2VJZFwiOiA2MzM5LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWNrYWdlT2ZmZXJUeXBJZFwiOiA3NjYsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRvd25TcGVlZFwiOiA4MTkyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cFNwZWVkXCI6IDEwMjQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbWl0YXRpb25UeXBlXCI6IDRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJkdXJhdGlvblwiOiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWNrYWdlSWRcIjogNjM0MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFja2FnZU9mZmVyVHlwSWRcIjogNzY2LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkb3duU3BlZWRcIjogODE5MixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXBTcGVlZFwiOiAxMDI0LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW1pdGF0aW9uVHlwZVwiOiA0XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZHVyYXRpb25cIjogNixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFja2FnZUlkXCI6IDYzNDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhY2thZ2VPZmZlclR5cElkXCI6IDc2NixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZG93blNwZWVkXCI6IDgxOTIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVwU3BlZWRcIjogMTAyNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGltaXRhdGlvblR5cGVcIjogNFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImR1cmF0aW9uXCI6IDEyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWNrYWdlSWRcIjogNjMzOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFja2FnZU9mZmVyVHlwSWRcIjogNzY2LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkb3duU3BlZWRcIjogODE5MixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXBTcGVlZFwiOiAxMDI0LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW1pdGF0aW9uVHlwZVwiOiA0XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwic21iUHJvbW90aW9uSWRcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb21vdGlvbklkXCI6IDc2OCxcbiAgICAgICAgICAgICAgICBcInByb21vdGlvbk5hbWVcIjogXCJUYWwyYSBTdGFuZGFyZCBQYWNrYWdlcyBVcCBUbyA4TSAtIChDYXAgMTAwRylcIixcbiAgICAgICAgICAgICAgICBcImF2YWlsYWJsZVByb210aW9uRHVyYXRpb25zXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJkdXJhdGlvblwiOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWNrYWdlSWRcIjogNjMzMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFja2FnZU9mZmVyVHlwSWRcIjogNzY4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkb3duU3BlZWRcIjogODE5MixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXBTcGVlZFwiOiAxMDI0LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW1pdGF0aW9uVHlwZVwiOiA0XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZHVyYXRpb25cIjogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFja2FnZUlkXCI6IDYzMzIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhY2thZ2VPZmZlclR5cElkXCI6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZG93blNwZWVkXCI6IDgxOTIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVwU3BlZWRcIjogMTAyNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGltaXRhdGlvblR5cGVcIjogNFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImR1cmF0aW9uXCI6IDYsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhY2thZ2VJZFwiOiA2MzMzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWNrYWdlT2ZmZXJUeXBJZFwiOiA3NjgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRvd25TcGVlZFwiOiA4MTkyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cFNwZWVkXCI6IDEwMjQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbWl0YXRpb25UeXBlXCI6IDRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJkdXJhdGlvblwiOiAxMixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFja2FnZUlkXCI6IDYzMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhY2thZ2VPZmZlclR5cElkXCI6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZG93blNwZWVkXCI6IDgxOTIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVwU3BlZWRcIjogMTAyNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGltaXRhdGlvblR5cGVcIjogNFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInNtYlByb21vdGlvbklkXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25JZFwiOiA3NzAsXG4gICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25OYW1lXCI6IFwiVGFsMmEgU3RhbmRhcmQgUGFja2FnZXMgVXAgVG8gOE0gLSAoQ2FwIDE2MEcpXCIsXG4gICAgICAgICAgICAgICAgXCJhdmFpbGFibGVQcm9tdGlvbkR1cmF0aW9uc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZHVyYXRpb25cIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFja2FnZUlkXCI6IDYzMzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhY2thZ2VPZmZlclR5cElkXCI6IDc3MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZG93blNwZWVkXCI6IDgxOTIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVwU3BlZWRcIjogMTAyNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGltaXRhdGlvblR5cGVcIjogNFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImR1cmF0aW9uXCI6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhY2thZ2VJZFwiOiA2MzM2LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWNrYWdlT2ZmZXJUeXBJZFwiOiA3NzAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRvd25TcGVlZFwiOiA4MTkyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cFNwZWVkXCI6IDEwMjQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbWl0YXRpb25UeXBlXCI6IDRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJkdXJhdGlvblwiOiA2LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWNrYWdlSWRcIjogNjMzNyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFja2FnZU9mZmVyVHlwSWRcIjogNzcwLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkb3duU3BlZWRcIjogODE5MixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXBTcGVlZFwiOiAxMDI0LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW1pdGF0aW9uVHlwZVwiOiA0XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZHVyYXRpb25cIjogMTIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhY2thZ2VJZFwiOiA2MzM0LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWNrYWdlT2ZmZXJUeXBJZFwiOiA3NzAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRvd25TcGVlZFwiOiA4MTkyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cFNwZWVkXCI6IDEwMjQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbWl0YXRpb25UeXBlXCI6IDRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJzbWJQcm9tb3Rpb25JZFwiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvbW90aW9uSWRcIjogMTM0OCxcbiAgICAgICAgICAgICAgICBcInByb21vdGlvbk5hbWVcIjogXCJIb21lIEFEU0wgLSA4IE1icHMgXCIsXG4gICAgICAgICAgICAgICAgXCJhdmFpbGFibGVQcm9tdGlvbkR1cmF0aW9uc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZHVyYXRpb25cIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFja2FnZUlkXCI6IDc3MzEsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhY2thZ2VPZmZlclR5cElkXCI6IDEzNDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRvd25TcGVlZFwiOiA4MTkyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cFNwZWVkXCI6IDEwMjQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpbWl0YXRpb25UeXBlXCI6IDRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJkdXJhdGlvblwiOiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWNrYWdlSWRcIjogNzc0MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFja2FnZU9mZmVyVHlwSWRcIjogMTM0OCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZG93blNwZWVkXCI6IDgxOTIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVwU3BlZWRcIjogMTAyNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGltaXRhdGlvblR5cGVcIjogNFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImR1cmF0aW9uXCI6IDYsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhY2thZ2VJZFwiOiA3NzQ1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWNrYWdlT2ZmZXJUeXBJZFwiOiAxMzQ4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkb3duU3BlZWRcIjogODE5MixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXBTcGVlZFwiOiAxMDI0LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW1pdGF0aW9uVHlwZVwiOiA0XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZHVyYXRpb25cIjogMTIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhY2thZ2VJZFwiOiA3NzUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWNrYWdlT2ZmZXJUeXBJZFwiOiAxMzQ4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkb3duU3BlZWRcIjogODE5MixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXBTcGVlZFwiOiAxMDI0LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW1pdGF0aW9uVHlwZVwiOiA0XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwic21iUHJvbW90aW9uSWRcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfTtcblxuICAgIHB1YmxpYyBzdGF0aWMgICBHZXRSZW5ld2FsQ29uZmlybWF0aW9uVmlld01vZGVsPXtcbiAgICAgICAgXCJzdWJzY3JpcHRpb25JbnF1aXJ5XCI6XG4gICAgICAgICAgICB7XCJwcm9kdWN0TGlzdFwiOlxuICAgICAgICAgICAgICAgIFt7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOlwiVEFMMkFBRFNMVXB0bzhNQi0oQ2FwNDBHKS0xTW9udGhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkdXJhdGlvblwiOlwiMVwiLFxuICAgICAgICAgICAgICAgICAgICBcInN0YXJ0RGF0ZVwiOjE0MjA0OTUyMDAwMDAsXG4gICAgICAgICAgICAgICAgICAgIFwiZW5kRGF0ZVwiOjE0MjMwODcyMDAwMDAsXG4gICAgICAgICAgICAgICAgICAgIFwic3RhcnREYXRlU3RyaW5nXCI6XCIwNi8wMS8yMDE1XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZW5kRGF0ZVN0cmluZ1wiOlwiMDUvMDIvMjAxNVwiLFwiaWRcIjozNTcsXG4gICAgICAgICAgICAgICAgICAgIFwicGFja2FnZUlkXCI6NTYwMFxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIFwiY3VzdG9tZXJOYW1lXCI6XCJNb2hhbWVkSGFuYWZ5TWFobW91ZFwiLFxuICAgICAgICAgICAgICAgIFwiY3VzdG9tZXJOdW1iZXJcIjpcIjE2MzAxMDFcIixcbiAgICAgICAgICAgICAgICBcImFyZWFDb2RlXCI6XCIyXCIsXG4gICAgICAgICAgICAgICAgXCJhZHNsTnVtYmVyXCI6XCIzNzIzNDU2NlwiLFxuICAgICAgICAgICAgICAgIFwic3Vic2NyaXB0aW9uTmV0RHVlXCI6MTUwLFxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCI6MTUwLFxuICAgICAgICAgICAgICAgIFwiZGF5c1VudGlsTmV4dFJlbmV3YWxcIjpcIjE1XCIsXG4gICAgICAgICAgICAgICAgXCJwYWNrYWdlTmFtZVwiOlwiVEFMMkFBRFNMVXB0bzhNQi0oQ2FwNDBHKS0xTW9udGhcIixcbiAgICAgICAgICAgICAgICBcImFkc2xEb3duU3BlZWRcIjo4MTkyLFxuICAgICAgICAgICAgICAgIFwiYWRzbFVwc3BlZWRcIjoxMDI0LFxuICAgICAgICAgICAgICAgIFwiYWRzbExpbWl0YXRpb25UeXBlSWRcIjo0LFxuICAgICAgICAgICAgICAgIFwiY2FuVXBkYXRlSW5UaGVNaWRkbGVcIjpmYWxzZSxcbiAgICAgICAgICAgICAgICBcImFkc2xMaW1pdGF0aW9uVHlwZVwiOlwiVGFsMmFcIixcbiAgICAgICAgICAgICAgICBcImFkc2xFeHBpcnR5RGF0ZVwiOjE0MjA0MDg4MDAwMDAsXG4gICAgICAgICAgICAgICAgXCJhZHNsRXhwaXJ0eURhdGVTdHJpbmdcIjpcIjA1LzAxLzIwMTVcIixcbiAgICAgICAgICAgICAgICBcImhhdmVDUEVcIjpmYWxzZSxcImhhdmVPcHRpb25QYWNrXCI6ZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJyZXF1ZXN0TnVtYmVyXCI6NTQ2MTcsXG4gICAgICAgICAgICAgICAgXCJzb2FwUmVxdWVzdFwiOlwiPHNvYXBlbnY6IEVudmVsb3BleG1sbnM6IHNvYXBlbnY9XFxcImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3NvYXAvZW52ZWxvcGUvXFxcIiB4bWxuczp3ZWI9XFxcImh0dHA6Ly93ZWJzZXJ2aWNlcy50ZWRhdGEubmV0XFxcIj48c29hcGVudjpCb2R5Pjx3ZWI6aW5xdWlyeUJ5Q3VzdG9tZXJOdW1iZXJSZXF1ZXN0IHhtbG5zOndlYj1cXFwiaHR0cDovL3dlYnNlcnZpY2VzLnRlZGF0YS5uZXRcXFwiPjxhZHNsUGhvbmVOdW1iZXIvPjxhcmVhQ29kZT4wPC9hcmVhQ29kZT48Y3VzdG9tZXJOdW1iZXI+MTQ5NjM5OTwvY3VzdG9tZXJOdW1iZXI+PGluY2x1ZGVDUEVSZW50YWxJblJlbmV3YWw+dHJ1ZTwvaW5jbHVkZUNQRVJlbnRhbEluUmVuZXdhbD48aW5jbHVkZU9wdGlvblBhY2tJblJlbmV3YWw+dHJ1ZTwvaW5jbHVkZU9wdGlvblBhY2tJblJlbmV3YWw+PG5ld0R1cmF0aW9uSW5Nb250aHM+NjwvbmV3RHVyYXRpb25Jbk1vbnRocz48bmV3TGltaXRhdGlvblR5cGUvPjxuZXdPcHRpb25QYWNrUGFja2FnZUlEPjA8L25ld09wdGlvblBhY2tQYWNrYWdlSUQ+PG5ld09wdGlvblBhY2tQYWNrYWdlUHJpY2U+MC4wPC9uZXdPcHRpb25QYWNrUGFja2FnZVByaWNlPjxuZXdTcGVlZC8+PHBheW1lbnRNZXRob2RJRD4xMDwvcGF5bWVudE1ldGhvZElEPjxyZW5ld2FsQWRtaW5Vc2VySUQ+MTE0MTQ8L3JlbmV3YWxBZG1pblVzZXJJRD48cmVuZXdhbExvY2F0aW9uSUQ+MjEzPC9yZW5ld2FsTG9jYXRpb25JRD48cmVuZXdhbFVzZXJOYW1lPlNTUDwvcmVuZXdhbFVzZXJOYW1lPjxwYWNrYWdlT2ZmZXJUeXBlSUQ+MzU3PC9wYWNrYWdlT2ZmZXJUeXBlSUQ+PHZvdWNoZXJOdW1iZXIvPjx1cGdyYWRlSW5UaGVNaWRkbGU+ZmFsc2U8L3VwZ3JhZGVJblRoZU1pZGRsZT48dXNlRXhpc3RpbmdEdXJhdGlvbj5mYWxzZTwvdXNlRXhpc3RpbmdEdXJhdGlvbj48dXNlRXhpc3RpbmdMaW1pdGF0aW9uVHlwZT50cnVlPC91c2VFeGlzdGluZ0xpbWl0YXRpb25UeXBlPjx1c2VFeGlzdGluZ1BhY2thZ2VPZmZlclR5cGVJRD5mYWxzZTwvdXNlRXhpc3RpbmdQYWNrYWdlT2ZmZXJUeXBlSUQ+PHVzZUV4aXN0aW5nU3BlZWQ+dHJ1ZTwvdXNlRXhpc3RpbmdTcGVlZD48L3dlYjppbnF1aXJ5QnlDdXN0b21lck51bWJlclJlcXVlc3Q+PC9zb2FwZW52OkJvZHk+PC9zb2FwZW52OkVudmVsb3BlPlxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXCIsXG4gICAgICAgICAgICAgICAgXCJzb2FwUmVzcG9uc2VcIjogXCI8c29hcGVudjpFbnZlbG9wZSB4bWxuczpzb2FwZW52PVxcXCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy9zb2FwL2VudmVsb3BlL1xcXCI+PHNvYXBlbnY6SGVhZGVyIHhtbG5zOndzYT1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwNS8wOC9hZGRyZXNzaW5nXFxcIj5cXG5cXHRcXHQ8d3NhOlRvPmh0dHA6Ly93d3cudzMub3JnLzIwMDUvMDgvYWRkcmVzc2luZy9hbm9ueW1vdXM8L3dzYTpUbz5cXG5cXHRcXHQ8d3NhOlJlcGx5VG8+XFxuXFx0XFx0XFx0PHdzYTpBZGRyZXNzPmh0dHA6Ly93d3cudzMub3JnLzIwMDUvMDgvYWRkcmVzc2luZy9hbm9ueW1vdXM8L3dzYTpBZGRyZXNzPlxcblxcdFxcdDwvd3NhOlJlcGx5VG8+XFxuXFx0XFx0PHdzYTpNZXNzYWdlSUQ+dXJuOnV1aWQ6N0ZBNkZGQkY2MjI1MDMxNTE4MTQxOTE0OTAwOTU2MDwvd3NhOk1lc3NhZ2VJRD5cXG5cXHRcXHQ8d3NhOkFjdGlvbj5pbnF1aXJ5QnlDdXN0b21lck51bWJlclJlcXVlc3RSZXNwb25zZTwvd3NhOkFjdGlvbj5cXG5cXHRcXHQ8d3NhOlJlbGF0ZXNUbyBSZWxhdGlvbnNoaXBUeXBlPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDA1LzA4L2FkZHJlc3NpbmcvcmVwbHlcXFwiPnVybjp1dWlkOjIzNWE4NTc2LWRiZDUtNGM4Zi05ZWQ4LWNhMzM4MDEzMjMxZDwvd3NhOlJlbGF0ZXNUbz5cXG5cXHQ8L3NvYXBlbnY6SGVhZGVyPjxzb2FwZW52OkJvZHk+XFxuXFx0XFx0PHdlYjppbnF1aXJ5QnlDdXN0b21lck51bWJlclJlc3BvbnNlIHhtbG5zOndlYj1cXFwiaHR0cDovL3dlYnNlcnZpY2VzLnRlZGF0YS5uZXRcXFwiPjxhZHNsQWNjb3VudElEPjM1ODM1MjA8L2Fkc2xBY2NvdW50SUQ+PGFkc2xQaG9uZU51bWJlcj4zNzIzNDU2NjwvYWRzbFBob25lTnVtYmVyPjxhZHNsU2VydmljZUlEPjY5PC9hZHNsU2VydmljZUlEPjxhZHNsU3dpdGNoaW5nRmVlc1ByaWNlPjYwMC4wPC9hZHNsU3dpdGNoaW5nRmVlc1ByaWNlPjxhcmVhQ29kZT4yPC9hcmVhQ29kZT48Y3BlUmVudGFsQWNjb3VudElEPjA8L2NwZVJlbnRhbEFjY291bnRJRD48Y3BlUmVudGFsU2VydmljZUlEPjA8L2NwZVJlbnRhbFNlcnZpY2VJRD48Y3JlYXRlZEludm9pY2VOdW1iZXI+MDwvY3JlYXRlZEludm9pY2VOdW1iZXI+PGNyZWF0ZWRQcm9mb3JtYU51bWJlcj4wPC9jcmVhdGVkUHJvZm9ybWFOdW1iZXI+PGNyZWF0ZWRSZWNlaXB0TnVtYmVyPjA8L2NyZWF0ZWRSZWNlaXB0TnVtYmVyPjxjdXJyZW50RGF0ZT4yMDE0LTEyLTIxPC9jdXJyZW50RGF0ZT48Y3VzdG9tZXJBY3RpdmU+dHJ1ZTwvY3VzdG9tZXJBY3RpdmU+PGN1c3RvbWVyQ2F0ZWdvcnlJRHM+MzAzMjwvY3VzdG9tZXJDYXRlZ29yeUlEcz48Y3VzdG9tZXJDYXRlZ29yeU5hbWVzPkNvbnN1bWVyczwvY3VzdG9tZXJDYXRlZ29yeU5hbWVzPjxjdXN0b21lck5hbWU+TW9oYW1lZCBIYW5hZnkgTWFobW91ZDwvY3VzdG9tZXJOYW1lPjxjdXN0b21lck51bWJlcj4xNjMwMTAxPC9jdXN0b21lck51bWJlcj48ZXJyb3JDb2RlPi0xPC9lcnJvckNvZGU+PGVycm9yTWVzc2FnZSB4c2k6bmlsPVxcXCJ0cnVlXFxcIiB4bWxuczp4c2k9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXFxcIi8+PGVycm9yT2NjdXJlZD5mYWxzZTwvZXJyb3JPY2N1cmVkPjxleGlzdGluZ0N1c3RvbWVyPnRydWU8L2V4aXN0aW5nQ3VzdG9tZXI+PGV4dGVybmFsUGF5bWVudFRyYW5zYWN0aW9uTnVtYmVyLz48ZXh0cmFVc2FnZUR1ZT4wLjA8L2V4dHJhVXNhZ2VEdWU+PGdhcEluRGF5c0JldHdlZW5BRFNMRXhwaXJ5RGF0ZUFuZFRvZGF5Pi0xNTwvZ2FwSW5EYXlzQmV0d2VlbkFEU0xFeHBpcnlEYXRlQW5kVG9kYXk+PGdhcEluRGF5c0JldHdlZW5DUEVSZW50YWxFeHBpcnlEYXRlQW5kQURTTEV4cGlyeURhdGU+MDwvZ2FwSW5EYXlzQmV0d2VlbkNQRVJlbnRhbEV4cGlyeURhdGVBbmRBRFNMRXhwaXJ5RGF0ZT48Z2FwSW5EYXlzQmV0d2VlbkNQRVJlbnRhbEV4cGlyeURhdGVBbmRUb2RheT4wPC9nYXBJbkRheXNCZXR3ZWVuQ1BFUmVudGFsRXhwaXJ5RGF0ZUFuZFRvZGF5PjxnYXBJbkRheXNCZXR3ZWVuT3B0aW9uUGFja0V4cGlyeURhdGVBbmRBRFNMRXhwaXJ5RGF0ZT4wPC9nYXBJbkRheXNCZXR3ZWVuT3B0aW9uUGFja0V4cGlyeURhdGVBbmRBRFNMRXhwaXJ5RGF0ZT48Z2FwSW5EYXlzQmV0d2Vlbk9wdGlvblBhY2tFeHBpcnlEYXRlQW5kVG9kYXk+MDwvZ2FwSW5EYXlzQmV0d2Vlbk9wdGlvblBhY2tFeHBpcnlEYXRlQW5kVG9kYXk+PGhhc1BlbmRpbmdQcm9mb3JtYU9uQURTTD5mYWxzZTwvaGFzUGVuZGluZ1Byb2Zvcm1hT25BRFNMPjxoYXNQZW5kaW5nUHJvZm9ybWFPbkNQRVJlbnRhbD5mYWxzZTwvaGFzUGVuZGluZ1Byb2Zvcm1hT25DUEVSZW50YWw+PGhhc1BlbmRpbmdQcm9mb3JtYU9uT3B0aW9uUGFjaz5mYWxzZTwvaGFzUGVuZGluZ1Byb2Zvcm1hT25PcHRpb25QYWNrPjxpbmNsdWRlQ1BFUmVudGFsSW5SZW5ld2FsPmZhbHNlPC9pbmNsdWRlQ1BFUmVudGFsSW5SZW5ld2FsPjxpbmNsdWRlT3B0aW9uUGFja0luUmVuZXdhbD5mYWxzZTwvaW5jbHVkZU9wdGlvblBhY2tJblJlbmV3YWw+PGludGVybmFsRXJyb3JNZXNzYWdlIHhzaTpuaWw9XFxcInRydWVcXFwiIHhtbG5zOnhzaT1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2VcXFwiLz48bGFzdEFjdGl2ZUFEU0xFeHBpcnlEYXRlPjIwMTUtMDEtMDU8L2xhc3RBY3RpdmVBRFNMRXhwaXJ5RGF0ZT48bGFzdEFjdGl2ZUFEU0xJbnZvaWNlQWN0aXZlPnRydWU8L2xhc3RBY3RpdmVBRFNMSW52b2ljZUFjdGl2ZT48bGFzdEFjdGl2ZUFEU0xJbnZvaWNlSUQ+Mzc2Mjk4ODU8L2xhc3RBY3RpdmVBRFNMSW52b2ljZUlEPjxsYXN0QWN0aXZlQURTTEludm9pY2VOdW1iZXI+MzMyNzEzMTA8L2xhc3RBY3RpdmVBRFNMSW52b2ljZU51bWJlcj48bGFzdEFjdGl2ZUFEU0xQYWNrYWdlPlRBTDJBIEFEU0wgVXAgdG8gOE1CIC0gKENhcCA0MEcpIC0gMSBNb250aDwvbGFzdEFjdGl2ZUFEU0xQYWNrYWdlPjxsYXN0QWN0aXZlQURTTFBhY2thZ2VEb3dubG9hZFNwZWVkPjgxOTI8L2xhc3RBY3RpdmVBRFNMUGFja2FnZURvd25sb2FkU3BlZWQ+PGxhc3RBY3RpdmVBRFNMUGFja2FnZUR1cmF0aW9uSW5Nb250aHM+MTwvbGFzdEFjdGl2ZUFEU0xQYWNrYWdlRHVyYXRpb25Jbk1vbnRocz48bGFzdEFjdGl2ZUFEU0xQYWNrYWdlSUQ+NTYwMDwvbGFzdEFjdGl2ZUFEU0xQYWNrYWdlSUQ+PGxhc3RBY3RpdmVBRFNMUGFja2FnZUxpbWl0YXRpb25UeXBlPlRhbDJhPC9sYXN0QWN0aXZlQURTTFBhY2thZ2VMaW1pdGF0aW9uVHlwZT48bGFzdEFjdGl2ZUFEU0xQYWNrYWdlU3BlZWQ+ODE5Mi8xMDI0PC9sYXN0QWN0aXZlQURTTFBhY2thZ2VTcGVlZD48bGFzdEFjdGl2ZUFEU0xQYWNrYWdlVXBsb2FkUmF0aW8+ODwvbGFzdEFjdGl2ZUFEU0xQYWNrYWdlVXBsb2FkUmF0aW8+PGxhc3RBY3RpdmVBRFNMUGFja2FnZVVwbG9hZFNwZWVkPjEwMjQ8L2xhc3RBY3RpdmVBRFNMUGFja2FnZVVwbG9hZFNwZWVkPjxsYXN0QWN0aXZlQ1BFUmVudGFsRXhwaXJ5RGF0ZSB4c2k6bmlsPVxcXCJ0cnVlXFxcIiB4bWxuczp4c2k9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXFxcIi8+PGxhc3RBY3RpdmVDUEVSZW50YWxJbnZvaWNlQWN0aXZlPmZhbHNlPC9sYXN0QWN0aXZlQ1BFUmVudGFsSW52b2ljZUFjdGl2ZT48bGFzdEFjdGl2ZUNQRVJlbnRhbEludm9pY2VJRD4wPC9sYXN0QWN0aXZlQ1BFUmVudGFsSW52b2ljZUlEPjxsYXN0QWN0aXZlQ1BFUmVudGFsSW52b2ljZU51bWJlcj4wPC9sYXN0QWN0aXZlQ1BFUmVudGFsSW52b2ljZU51bWJlcj48bGFzdEFjdGl2ZUNQRVJlbnRhbFBhY2thZ2UgeHNpOm5pbD1cXFwidHJ1ZVxcXCIgeG1sbnM6eHNpPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVxcXCIvPjxsYXN0QWN0aXZlQ1BFUmVudGFsUGFja2FnZUR1cmF0aW9uSW5Nb250aHM+MDwvbGFzdEFjdGl2ZUNQRVJlbnRhbFBhY2thZ2VEdXJhdGlvbkluTW9udGhzPjxsYXN0QWN0aXZlQ1BFUmVudGFsUGFja2FnZUlEPjA8L2xhc3RBY3RpdmVDUEVSZW50YWxQYWNrYWdlSUQ+PGxhc3RBY3RpdmVDUEVSZW50YWxUeXBlIHhzaTpuaWw9XFxcInRydWVcXFwiIHhtbG5zOnhzaT1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2VcXFwiLz48bGFzdEFjdGl2ZU9wdGlvblBhY2tFeHBpcnlEYXRlIHhzaTpuaWw9XFxcInRydWVcXFwiIHhtbG5zOnhzaT1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2VcXFwiLz48bGFzdEFjdGl2ZU9wdGlvblBhY2tJbnZvaWNlQWN0aXZlPmZhbHNlPC9sYXN0QWN0aXZlT3B0aW9uUGFja0ludm9pY2VBY3RpdmU+PGxhc3RBY3RpdmVPcHRpb25QYWNrSW52b2ljZUlEPjA8L2xhc3RBY3RpdmVPcHRpb25QYWNrSW52b2ljZUlEPjxsYXN0QWN0aXZlT3B0aW9uUGFja0ludm9pY2VOdW1iZXI+MDwvbGFzdEFjdGl2ZU9wdGlvblBhY2tJbnZvaWNlTnVtYmVyPjxsYXN0QWN0aXZlT3B0aW9uUGFja1BhY2thZ2UgeHNpOm5pbD1cXFwidHJ1ZVxcXCIgeG1sbnM6eHNpPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVxcXCIvPjxsYXN0QWN0aXZlT3B0aW9uUGFja1BhY2thZ2VEdXJhdGlvbkluTW9udGhzPjA8L2xhc3RBY3RpdmVPcHRpb25QYWNrUGFja2FnZUR1cmF0aW9uSW5Nb250aHM+PGxhc3RBY3RpdmVPcHRpb25QYWNrUGFja2FnZUlEPjA8L2xhc3RBY3RpdmVPcHRpb25QYWNrUGFja2FnZUlEPjxsYXN0QWN0aXZlT3B0aW9uUGFja1R5cGUgeHNpOm5pbD1cXFwidHJ1ZVxcXCIgeG1sbnM6eHNpPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVxcXCIvPjxtYXhHYXBJbkRheXNCZXR3ZWVuQURTTEV4cGlyeURhdGVBbmRUb2RheT4zMDwvbWF4R2FwSW5EYXlzQmV0d2VlbkFEU0xFeHBpcnlEYXRlQW5kVG9kYXk+PG1heEdhcEluRGF5c0JldHdlZW5DUEVSZW50YWxFeHBpcnlEYXRlQW5kQURTTEV4cGlyeURhdGU+Mjg8L21heEdhcEluRGF5c0JldHdlZW5DUEVSZW50YWxFeHBpcnlEYXRlQW5kQURTTEV4cGlyeURhdGU+PG1heEdhcEluRGF5c0JldHdlZW5DUEVSZW50YWxFeHBpcnlEYXRlQW5kVG9kYXk+NTg8L21heEdhcEluRGF5c0JldHdlZW5DUEVSZW50YWxFeHBpcnlEYXRlQW5kVG9kYXk+PG1heEdhcEluRGF5c0JldHdlZW5PcHRpb25QYWNrRXhwaXJ5RGF0ZUFuZEFEU0xFeHBpcnlEYXRlPjI4PC9tYXhHYXBJbkRheXNCZXR3ZWVuT3B0aW9uUGFja0V4cGlyeURhdGVBbmRBRFNMRXhwaXJ5RGF0ZT48bWF4R2FwSW5EYXlzQmV0d2Vlbk9wdGlvblBhY2tFeHBpcnlEYXRlQW5kVG9kYXk+NTg8L21heEdhcEluRGF5c0JldHdlZW5PcHRpb25QYWNrRXhwaXJ5RGF0ZUFuZFRvZGF5PjxuZXdBRFNMUGFja2FnZUlEPjU2MDA8L25ld0FEU0xQYWNrYWdlSUQ+PG5ld0FEU0xQYWNrYWdlUHJpY2U+MTUwLjA8L25ld0FEU0xQYWNrYWdlUHJpY2U+PG5ld0NQRVJlbnRhbFBhY2thZ2VJRD4wPC9uZXdDUEVSZW50YWxQYWNrYWdlSUQ+PG5ld0NQRVJlbnRhbFBhY2thZ2VQcmljZT4wLjA8L25ld0NQRVJlbnRhbFBhY2thZ2VQcmljZT48bmV3RHVyYXRpb25Jbk1vbnRocz4xPC9uZXdEdXJhdGlvbkluTW9udGhzPjxuZXdFeHBpcnlEYXRlQWZ0ZXJSZW5ld2FsPjIwMTUtMi01PC9uZXdFeHBpcnlEYXRlQWZ0ZXJSZW5ld2FsPjxuZXdMaW1pdGF0aW9uVHlwZT5UYWwyYTwvbmV3TGltaXRhdGlvblR5cGU+PG5ld09wdGlvblBhY2tQYWNrYWdlSUQ+MDwvbmV3T3B0aW9uUGFja1BhY2thZ2VJRD48bmV3T3B0aW9uUGFja1BhY2thZ2VQcmljZT4wLjA8L25ld09wdGlvblBhY2tQYWNrYWdlUHJpY2U+PG5ld1Byb2Zvcm1hTmV0QW1vdW50PjE1MC4wPC9uZXdQcm9mb3JtYU5ldEFtb3VudD48bmV3U3BlZWQ+ODE5Mi8xMDI0PC9uZXdTcGVlZD48b3B0aW9uUGFja0FjY291bnRJRD4wPC9vcHRpb25QYWNrQWNjb3VudElEPjxvcHRpb25QYWNrU2VydmljZUlEPjA8L29wdGlvblBhY2tTZXJ2aWNlSUQ+PHBhY2thZ2VPZmZlclR5cGVJRD4zNTc8L3BhY2thZ2VPZmZlclR5cGVJRD48cGF5UmVuZXdhbER1ZT5mYWxzZTwvcGF5UmVuZXdhbER1ZT48cGF5bWVudE1ldGhvZElEPjEwPC9wYXltZW50TWV0aG9kSUQ+PHBlcmZvcm1SZWFsUmVuZXdhbD5mYWxzZTwvcGVyZm9ybVJlYWxSZW5ld2FsPjxyZW5ld2FsQWRtaW5Vc2VySUQ+MTE0MTQ8L3JlbmV3YWxBZG1pblVzZXJJRD48cmVuZXdhbEN1c3RvbWVyQ29tbWVudCB4c2k6bmlsPVxcXCJ0cnVlXFxcIiB4bWxuczp4c2k9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXFxcIi8+PHJlbmV3YWxMb2NhdGlvbklEPjIxMzwvcmVuZXdhbExvY2F0aW9uSUQ+PHJlbmV3YWxVc2VyTmFtZT5TU1A8L3JlbmV3YWxVc2VyTmFtZT48cmVzZWxsZXJDdXN0b21lck5hbWUgeHNpOm5pbD1cXFwidHJ1ZVxcXCIgeG1sbnM6eHNpPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVxcXCIvPjxyZXNlbGxlckN1c3RvbWVyTnVtYmVyPi0xPC9yZXNlbGxlckN1c3RvbWVyTnVtYmVyPjx0b3RhbER1ZUZvclJlbmV3YWw+MTUwLjA8L3RvdGFsRHVlRm9yUmVuZXdhbD48dW5wYWlkRXh0cmFVc2FnZUludm9pY2VBbW91bnRzRHVlIHhzaTpuaWw9XFxcInRydWVcXFwiIHhtbG5zOnhzaT1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2VcXFwiLz48dW5wYWlkRXh0cmFVc2FnZUludm9pY2VJRHMgeHNpOm5pbD1cXFwidHJ1ZVxcXCIgeG1sbnM6eHNpPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVxcXCIvPjxjYW51cGdyYWRlSW5UaGVNaWRkbGU+ZmFsc2U8L2NhbnVwZ3JhZGVJblRoZU1pZGRsZT48dXNlRXhpc3RpbmdEdXJhdGlvbj50cnVlPC91c2VFeGlzdGluZ0R1cmF0aW9uPjx1c2VFeGlzdGluZ0xpbWl0YXRpb25UeXBlPnRydWU8L3VzZUV4aXN0aW5nTGltaXRhdGlvblR5cGU+PHVzZUV4aXN0aW5nUGFja2FnZU9mZmVyVHlwZUlEPnRydWU8L3VzZUV4aXN0aW5nUGFja2FnZU9mZmVyVHlwZUlEPjx1c2VFeGlzdGluZ1NwZWVkPnRydWU8L3VzZUV4aXN0aW5nU3BlZWQ+PHZvdWNoZXJBbW91bnRzPjAuMDAwMDwvdm91Y2hlckFtb3VudHM+PHZvdWNoZXJOdW1iZXJzPlVELTE2ODk0Nzwvdm91Y2hlck51bWJlcnM+PGxhc3RBY3RpdmVBRFNMUGFja2FnZVByaWNlPjE1MC4wPC9sYXN0QWN0aXZlQURTTFBhY2thZ2VQcmljZT48bmV3QURTTFBhY2thZ2U+VEFMMkEgQURTTCBVcCB0byA4TUIgLSAoQ2FwIDQwRykgLSAxIE1vbnRoPC9uZXdBRFNMUGFja2FnZT48bmV3Q1BFUmVudGFsUGFja2FnZSB4c2k6bmlsPVxcXCJ0cnVlXFxcIiB4bWxuczp4c2k9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXFxcIi8+PG5ld0NQRVJlbnRhbFBhY2thZ2VFeHBpcnlEYXRlIHhzaTpuaWw9XFxcInRydWVcXFwiIHhtbG5zOnhzaT1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2VcXFwiLz48bmV3T3B0aW9uUGFja1BhY2thZ2UgeHNpOm5pbD1cXFwidHJ1ZVxcXCIgeG1sbnM6eHNpPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVxcXCIvPjxuZXdPcHRpb25QYWNrUGFja2FnZUV4cGlyeURhdGUgeHNpOm5pbD1cXFwidHJ1ZVxcXCIgeG1sbnM6eHNpPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVxcXCIvPjx1cGdyYWRlSW5UaGVNaWRkbGU+ZmFsc2U8L3VwZ3JhZGVJblRoZU1pZGRsZT48L3dlYjppbnF1aXJ5QnlDdXN0b21lck51bWJlclJlc3BvbnNlPjwvc29hcGVudjpCb2R5Pjwvc29hcGVudjpFbnZlbG9wZT5cIlxuICAgICAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRCYW5rVVJMPVxuICAgICAgICB7XG4gICAgICAgICAgICBcImJhbmtVcmxcIjogXCJodHRwczpcXC9cXC9wYXltZW50cy50ZWRhdGEubmV0XFwvbmV0LnRlZGF0YS50b3BHLnVpXFwvVmlld1BheW1lbnRXaWRnZXQ/dHJhbnNhY3Rpb25IYXNoQ29kZT03MDYzMGEwZDM4ZWJiODgxOWMwOGU1YzdmMTY5OWRjZVwiLFxuICAgICAgICB9O1xuXG5cblxuXG5cbiAgICBwdWJsaWMgc3RhdGljIGdldFN1YnNjcmlwdGlvbkluZm89XG4gICAgICAgIHtcbiAgICAgICAgICAgIFwic3Vic2NyaXB0aW9uSW5xdWlyeVwiOiB7XG4gICAgICAgICAgICAgICAgXCJwcm9kdWN0TGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1lZ2EgUGx1cyAtIEFEU0wgMU1icHMgKENhcCAxMDBHQikgLSAxIE1vbnRoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImR1cmF0aW9uXCI6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGFydERhdGVcIjogMTQ5NDg4NTYwMDAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5kRGF0ZVwiOiAxNDk3NDc3NjAwMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGFydERhdGVTdHJpbmdcIjogXCIxNi8wNS8yMDE3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVuZERhdGVTdHJpbmdcIjogXCIxNS8wNi8yMDE3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDE3NTksXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhY2thZ2VJZFwiOiA4NTcyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY3VzdG9tZXJOYW1lXCI6IFwiTW9oYW1lZCBZb3VzcnkgRWwtU2FpZCBLYW1lbFwiLFxuICAgICAgICAgICAgICAgIFwiY3VzdG9tZXJOdW1iZXJcIjogXCIyMTAwNjhcIixcbiAgICAgICAgICAgICAgICBcImFyZWFDb2RlXCI6IFwiMlwiLFxuICAgICAgICAgICAgICAgIFwiYWRzbE51bWJlclwiOiBcIjM1ODI5NTU5XCIsXG4gICAgICAgICAgICAgICAgXCJzdWJzY3JpcHRpb25OZXREdWVcIjogMTAwLFxuICAgICAgICAgICAgICAgIFwiYW1vdW50XCI6IDEwMCxcbiAgICAgICAgICAgICAgICBcImRheXNVbnRpbE5leHRSZW5ld2FsXCI6IFwiMTU0XCIsXG4gICAgICAgICAgICAgICAgXCJwYWNrYWdlTmFtZVwiOiBcIk1lZ2EgUGx1cyAtIEFEU0wgMU1icHMgKENhcCAxMDBHQikgLSAxIE1vbnRoXCIsXG4gICAgICAgICAgICAgICAgXCJhZHNsRG93blNwZWVkXCI6IDEwMjQsXG4gICAgICAgICAgICAgICAgXCJhZHNsVXBzcGVlZFwiOiAyNTYsXG4gICAgICAgICAgICAgICAgXCJhZHNsTGltaXRhdGlvblR5cGVJZFwiOiA0LFxuICAgICAgICAgICAgICAgIFwiY2FuVXBkYXRlSW5UaGVNaWRkbGVcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJhZHNsTGltaXRhdGlvblR5cGVcIjogXCJUYWwyYVwiLFxuICAgICAgICAgICAgICAgIFwiYWRzbEV4cGlydHlEYXRlXCI6IDE0OTQ3OTkyMDAwMDAsXG4gICAgICAgICAgICAgICAgXCJhZHNsRXhwaXJ0eURhdGVTdHJpbmdcIjogXCIxNS8wNS8yMDE3XCIsXG4gICAgICAgICAgICAgICAgXCJoYXZlQ1BFXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiaGF2ZU9wdGlvblBhY2tcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJyZXF1ZXN0TnVtYmVyXCI6IDY5OTYwMDUsXG4gICAgICAgICAgICAgICAgXCJzb2FwUmVxdWVzdFwiOiBcIjxzb2FwZW52OkVudmVsb3BlIHhtbG5zOnNvYXBlbnY9XFxcImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3NvYXAvZW52ZWxvcGUvXFxcIiB4bWxuczp3ZWI9XFxcImh0dHA6Ly93ZWJzZXJ2aWNlcy50ZWRhdGEubmV0XFxcIj48c29hcGVudjpCb2R5Pjx3ZWI6aW5xdWlyeUJ5Q3VzdG9tZXJOdW1iZXJSZXF1ZXN0IHhtbG5zOndlYj1cXFwiaHR0cDovL3dlYnNlcnZpY2VzLnRlZGF0YS5uZXRcXFwiPjxhZHNsUGhvbmVOdW1iZXIvPjxhcmVhQ29kZT4wPC9hcmVhQ29kZT48Y3VzdG9tZXJOdW1iZXI+MjEwMDY4PC9jdXN0b21lck51bWJlcj48aW5jbHVkZUNQRVJlbnRhbEluUmVuZXdhbD50cnVlPC9pbmNsdWRlQ1BFUmVudGFsSW5SZW5ld2FsPjxpbmNsdWRlT3B0aW9uUGFja0luUmVuZXdhbD50cnVlPC9pbmNsdWRlT3B0aW9uUGFja0luUmVuZXdhbD48bmV3RHVyYXRpb25Jbk1vbnRocz4wPC9uZXdEdXJhdGlvbkluTW9udGhzPjxuZXdMaW1pdGF0aW9uVHlwZS8+PG5ld09wdGlvblBhY2tQYWNrYWdlSUQ+MDwvbmV3T3B0aW9uUGFja1BhY2thZ2VJRD48bmV3T3B0aW9uUGFja1BhY2thZ2VQcmljZT4wLjA8L25ld09wdGlvblBhY2tQYWNrYWdlUHJpY2U+PG5ld1NwZWVkLz48cGF5bWVudE1ldGhvZElEPjEwPC9wYXltZW50TWV0aG9kSUQ+PHJlbmV3YWxBZG1pblVzZXJJRD4xMTQxNDwvcmVuZXdhbEFkbWluVXNlcklEPjxyZW5ld2FsTG9jYXRpb25JRD4yMTM8L3JlbmV3YWxMb2NhdGlvbklEPjxyZW5ld2FsVXNlck5hbWU+U1NQPC9yZW5ld2FsVXNlck5hbWU+PHBhY2thZ2VPZmZlclR5cGVJRD4wPC9wYWNrYWdlT2ZmZXJUeXBlSUQ+PHZvdWNoZXJOdW1iZXIvPjx1cGdyYWRlSW5UaGVNaWRkbGU+ZmFsc2U8L3VwZ3JhZGVJblRoZU1pZGRsZT48dXNlRXhpc3RpbmdEdXJhdGlvbj50cnVlPC91c2VFeGlzdGluZ0R1cmF0aW9uPjx1c2VFeGlzdGluZ0xpbWl0YXRpb25UeXBlPnRydWU8L3VzZUV4aXN0aW5nTGltaXRhdGlvblR5cGU+PHVzZUV4aXN0aW5nUGFja2FnZU9mZmVyVHlwZUlEPnRydWU8L3VzZUV4aXN0aW5nUGFja2FnZU9mZmVyVHlwZUlEPjx1c2VFeGlzdGluZ1NwZWVkPnRydWU8L3VzZUV4aXN0aW5nU3BlZWQ+PC93ZWI6aW5xdWlyeUJ5Q3VzdG9tZXJOdW1iZXJSZXF1ZXN0Pjwvc29hcGVudjpCb2R5Pjwvc29hcGVudjpFbnZlbG9wZT5cXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXFx1MDAwMFxcdTAwMDBcXHUwMDAwXCIsXG4gICAgICAgICAgICAgICAgXCJzb2FwUmVzcG9uc2VcIjogXCI8c29hcGVudjpFbnZlbG9wZSB4bWxuczpzb2FwZW52PVxcXCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy9zb2FwL2VudmVsb3BlL1xcXCI+PHNvYXBlbnY6SGVhZGVyIHhtbG5zOndzYT1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwNS8wOC9hZGRyZXNzaW5nXFxcIj48d3NhOlRvPmh0dHA6Ly93d3cudzMub3JnLzIwMDUvMDgvYWRkcmVzc2luZy9hbm9ueW1vdXM8L3dzYTpUbz48d3NhOlJlcGx5VG8+PHdzYTpBZGRyZXNzPmh0dHA6Ly93d3cudzMub3JnLzIwMDUvMDgvYWRkcmVzc2luZy9hbm9ueW1vdXM8L3dzYTpBZGRyZXNzPjwvd3NhOlJlcGx5VG8+PHdzYTpNZXNzYWdlSUQ+dXJuOnV1aWQ6MDAwMDBlNTktYmVhYi00NzA3LWI2MmEtOTdiOGY4MjY3NjY1PC93c2E6TWVzc2FnZUlEPjx3c2E6QWN0aW9uPmlucXVpcnlCeUN1c3RvbWVyTnVtYmVyUmVxdWVzdFJlc3BvbnNlPC93c2E6QWN0aW9uPjx3c2E6UmVsYXRlc1RvIFJlbGF0aW9uc2hpcFR5cGU9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDUvMDgvYWRkcmVzc2luZy9yZXBseVxcXCI+dXJuOnV1aWQ6ODExM2Y1Y2QtOTkxYy00NmRkLWFjNDYtZGRmMTM1OTY2NzQ4PC93c2E6UmVsYXRlc1RvPjwvc29hcGVudjpIZWFkZXI+PHNvYXBlbnY6Qm9keT48d2ViOmlucXVpcnlCeUN1c3RvbWVyTnVtYmVyUmVzcG9uc2UgeG1sbnM6d2ViPVxcXCJodHRwOi8vd2Vic2VydmljZXMudGVkYXRhLm5ldFxcXCI+PGFkc2xBY2NvdW50SUQ+NTM2OTg2PC9hZHNsQWNjb3VudElEPjxhZHNsUGhvbmVOdW1iZXI+MzU4Mjk1NTk8L2Fkc2xQaG9uZU51bWJlcj48YWRzbFNlcnZpY2VJRD42OTwvYWRzbFNlcnZpY2VJRD48YWRzbFN3aXRjaGluZ0ZlZXNQcmljZT4wLjA8L2Fkc2xTd2l0Y2hpbmdGZWVzUHJpY2U+PGFyZWFDb2RlPjI8L2FyZWFDb2RlPjxjcGVSZW50YWxBY2NvdW50SUQ+MDwvY3BlUmVudGFsQWNjb3VudElEPjxjcGVSZW50YWxTZXJ2aWNlSUQ+MDwvY3BlUmVudGFsU2VydmljZUlEPjxjcmVhdGVkSW52b2ljZU51bWJlcj4wPC9jcmVhdGVkSW52b2ljZU51bWJlcj48Y3JlYXRlZFByb2Zvcm1hTnVtYmVyPjA8L2NyZWF0ZWRQcm9mb3JtYU51bWJlcj48Y3JlYXRlZFJlY2VpcHROdW1iZXI+MDwvY3JlYXRlZFJlY2VpcHROdW1iZXI+PGN1cnJlbnREYXRlPjIwMTYtMTItMTI8L2N1cnJlbnREYXRlPjxjdXN0b21lckFjdGl2ZT50cnVlPC9jdXN0b21lckFjdGl2ZT48Y3VzdG9tZXJDYXRlZ29yeUlEcz4zMDMyPC9jdXN0b21lckNhdGVnb3J5SURzPjxjdXN0b21lckNhdGVnb3J5TmFtZXM+Q29uc3VtZXJzPC9jdXN0b21lckNhdGVnb3J5TmFtZXM+PGN1c3RvbWVyTmFtZT5Nb2hhbWVkIFlvdXNyeSBFbC1TYWlkIEthbWVsPC9jdXN0b21lck5hbWU+PGN1c3RvbWVyTnVtYmVyPjIxMDA2ODwvY3VzdG9tZXJOdW1iZXI+PGVycm9yQ29kZT4tMTwvZXJyb3JDb2RlPjxlcnJvck1lc3NhZ2UgeHNpOm5pbD1cXFwidHJ1ZVxcXCIgeG1sbnM6eHNpPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVxcXCIvPjxlcnJvck9jY3VyZWQ+ZmFsc2U8L2Vycm9yT2NjdXJlZD48ZXhpc3RpbmdDdXN0b21lcj50cnVlPC9leGlzdGluZ0N1c3RvbWVyPjxleHRlcm5hbFBheW1lbnRUcmFuc2FjdGlvbk51bWJlci8+PGV4dHJhVXNhZ2VEdWU+MC4wPC9leHRyYVVzYWdlRHVlPjxnYXBJbkRheXNCZXR3ZWVuQURTTEV4cGlyeURhdGVBbmRUb2RheT4tMTU0PC9nYXBJbkRheXNCZXR3ZWVuQURTTEV4cGlyeURhdGVBbmRUb2RheT48Z2FwSW5EYXlzQmV0d2VlbkNQRVJlbnRhbEV4cGlyeURhdGVBbmRBRFNMRXhwaXJ5RGF0ZT4wPC9nYXBJbkRheXNCZXR3ZWVuQ1BFUmVudGFsRXhwaXJ5RGF0ZUFuZEFEU0xFeHBpcnlEYXRlPjxnYXBJbkRheXNCZXR3ZWVuQ1BFUmVudGFsRXhwaXJ5RGF0ZUFuZFRvZGF5PjA8L2dhcEluRGF5c0JldHdlZW5DUEVSZW50YWxFeHBpcnlEYXRlQW5kVG9kYXk+PGdhcEluRGF5c0JldHdlZW5PcHRpb25QYWNrRXhwaXJ5RGF0ZUFuZEFEU0xFeHBpcnlEYXRlPjA8L2dhcEluRGF5c0JldHdlZW5PcHRpb25QYWNrRXhwaXJ5RGF0ZUFuZEFEU0xFeHBpcnlEYXRlPjxnYXBJbkRheXNCZXR3ZWVuT3B0aW9uUGFja0V4cGlyeURhdGVBbmRUb2RheT4wPC9nYXBJbkRheXNCZXR3ZWVuT3B0aW9uUGFja0V4cGlyeURhdGVBbmRUb2RheT48aGFzUGVuZGluZ1Byb2Zvcm1hT25BRFNMPmZhbHNlPC9oYXNQZW5kaW5nUHJvZm9ybWFPbkFEU0w+PGhhc1BlbmRpbmdQcm9mb3JtYU9uQ1BFUmVudGFsPmZhbHNlPC9oYXNQZW5kaW5nUHJvZm9ybWFPbkNQRVJlbnRhbD48aGFzUGVuZGluZ1Byb2Zvcm1hT25PcHRpb25QYWNrPmZhbHNlPC9oYXNQZW5kaW5nUHJvZm9ybWFPbk9wdGlvblBhY2s+PGluY2x1ZGVDUEVSZW50YWxJblJlbmV3YWw+ZmFsc2U8L2luY2x1ZGVDUEVSZW50YWxJblJlbmV3YWw+PGluY2x1ZGVPcHRpb25QYWNrSW5SZW5ld2FsPmZhbHNlPC9pbmNsdWRlT3B0aW9uUGFja0luUmVuZXdhbD48aW50ZXJuYWxFcnJvck1lc3NhZ2UgeHNpOm5pbD1cXFwidHJ1ZVxcXCIgeG1sbnM6eHNpPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVxcXCIvPjxsYXN0QWN0aXZlQURTTEV4cGlyeURhdGU+MjAxNy0wNS0xNTwvbGFzdEFjdGl2ZUFEU0xFeHBpcnlEYXRlPjxsYXN0QWN0aXZlQURTTEludm9pY2VBY3RpdmU+dHJ1ZTwvbGFzdEFjdGl2ZUFEU0xJbnZvaWNlQWN0aXZlPjxsYXN0QWN0aXZlQURTTEludm9pY2VJRD41NzExNDY2NzwvbGFzdEFjdGl2ZUFEU0xJbnZvaWNlSUQ+PGxhc3RBY3RpdmVBRFNMSW52b2ljZU51bWJlcj41MTU5NzIyMTwvbGFzdEFjdGl2ZUFEU0xJbnZvaWNlTnVtYmVyPjxsYXN0QWN0aXZlQURTTFBhY2thZ2U+TWVnYSBQbHVzIC0gQURTTCAxTWJwcyAoQ2FwIDEwMEdCKSAtIDEgTW9udGg8L2xhc3RBY3RpdmVBRFNMUGFja2FnZT48bGFzdEFjdGl2ZUFEU0xQYWNrYWdlRG93bmxvYWRTcGVlZD4xMDI0PC9sYXN0QWN0aXZlQURTTFBhY2thZ2VEb3dubG9hZFNwZWVkPjxsYXN0QWN0aXZlQURTTFBhY2thZ2VEdXJhdGlvbkluTW9udGhzPjE8L2xhc3RBY3RpdmVBRFNMUGFja2FnZUR1cmF0aW9uSW5Nb250aHM+PGxhc3RBY3RpdmVBRFNMUGFja2FnZUlEPjg1NzI8L2xhc3RBY3RpdmVBRFNMUGFja2FnZUlEPjxsYXN0QWN0aXZlQURTTFBhY2thZ2VMaW1pdGF0aW9uVHlwZT5UYWwyYTwvbGFzdEFjdGl2ZUFEU0xQYWNrYWdlTGltaXRhdGlvblR5cGU+PGxhc3RBY3RpdmVBRFNMUGFja2FnZVNwZWVkPjEwMjQvMjU2PC9sYXN0QWN0aXZlQURTTFBhY2thZ2VTcGVlZD48bGFzdEFjdGl2ZUFEU0xQYWNrYWdlVXBsb2FkUmF0aW8+NDwvbGFzdEFjdGl2ZUFEU0xQYWNrYWdlVXBsb2FkUmF0aW8+PGxhc3RBY3RpdmVBRFNMUGFja2FnZVVwbG9hZFNwZWVkPjI1NjwvbGFzdEFjdGl2ZUFEU0xQYWNrYWdlVXBsb2FkU3BlZWQ+PGxhc3RBY3RpdmVDUEVSZW50YWxFeHBpcnlEYXRlIHhzaTpuaWw9XFxcInRydWVcXFwiIHhtbG5zOnhzaT1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2VcXFwiLz48bGFzdEFjdGl2ZUNQRVJlbnRhbEludm9pY2VBY3RpdmU+ZmFsc2U8L2xhc3RBY3RpdmVDUEVSZW50YWxJbnZvaWNlQWN0aXZlPjxsYXN0QWN0aXZlQ1BFUmVudGFsSW52b2ljZUlEPjA8L2xhc3RBY3RpdmVDUEVSZW50YWxJbnZvaWNlSUQ+PGxhc3RBY3RpdmVDUEVSZW50YWxJbnZvaWNlTnVtYmVyPjA8L2xhc3RBY3RpdmVDUEVSZW50YWxJbnZvaWNlTnVtYmVyPjxsYXN0QWN0aXZlQ1BFUmVudGFsUGFja2FnZSB4c2k6bmlsPVxcXCJ0cnVlXFxcIiB4bWxuczp4c2k9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXFxcIi8+PGxhc3RBY3RpdmVDUEVSZW50YWxQYWNrYWdlRHVyYXRpb25Jbk1vbnRocz4wPC9sYXN0QWN0aXZlQ1BFUmVudGFsUGFja2FnZUR1cmF0aW9uSW5Nb250aHM+PGxhc3RBY3RpdmVDUEVSZW50YWxQYWNrYWdlSUQ+MDwvbGFzdEFjdGl2ZUNQRVJlbnRhbFBhY2thZ2VJRD48bGFzdEFjdGl2ZUNQRVJlbnRhbFR5cGUgeHNpOm5pbD1cXFwidHJ1ZVxcXCIgeG1sbnM6eHNpPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVxcXCIvPjxsYXN0QWN0aXZlT3B0aW9uUGFja0V4cGlyeURhdGUgeHNpOm5pbD1cXFwidHJ1ZVxcXCIgeG1sbnM6eHNpPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVxcXCIvPjxsYXN0QWN0aXZlT3B0aW9uUGFja0ludm9pY2VBY3RpdmU+ZmFsc2U8L2xhc3RBY3RpdmVPcHRpb25QYWNrSW52b2ljZUFjdGl2ZT48bGFzdEFjdGl2ZU9wdGlvblBhY2tJbnZvaWNlSUQ+MDwvbGFzdEFjdGl2ZU9wdGlvblBhY2tJbnZvaWNlSUQ+PGxhc3RBY3RpdmVPcHRpb25QYWNrSW52b2ljZU51bWJlcj4wPC9sYXN0QWN0aXZlT3B0aW9uUGFja0ludm9pY2VOdW1iZXI+PGxhc3RBY3RpdmVPcHRpb25QYWNrUGFja2FnZSB4c2k6bmlsPVxcXCJ0cnVlXFxcIiB4bWxuczp4c2k9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXFxcIi8+PGxhc3RBY3RpdmVPcHRpb25QYWNrUGFja2FnZUR1cmF0aW9uSW5Nb250aHM+MDwvbGFzdEFjdGl2ZU9wdGlvblBhY2tQYWNrYWdlRHVyYXRpb25Jbk1vbnRocz48bGFzdEFjdGl2ZU9wdGlvblBhY2tQYWNrYWdlSUQ+MDwvbGFzdEFjdGl2ZU9wdGlvblBhY2tQYWNrYWdlSUQ+PGxhc3RBY3RpdmVPcHRpb25QYWNrVHlwZSB4c2k6bmlsPVxcXCJ0cnVlXFxcIiB4bWxuczp4c2k9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXFxcIi8+PG1heEdhcEluRGF5c0JldHdlZW5BRFNMRXhwaXJ5RGF0ZUFuZFRvZGF5PjYwPC9tYXhHYXBJbkRheXNCZXR3ZWVuQURTTEV4cGlyeURhdGVBbmRUb2RheT48bWF4R2FwSW5EYXlzQmV0d2VlbkNQRVJlbnRhbEV4cGlyeURhdGVBbmRBRFNMRXhwaXJ5RGF0ZT4yODwvbWF4R2FwSW5EYXlzQmV0d2VlbkNQRVJlbnRhbEV4cGlyeURhdGVBbmRBRFNMRXhwaXJ5RGF0ZT48bWF4R2FwSW5EYXlzQmV0d2VlbkNQRVJlbnRhbEV4cGlyeURhdGVBbmRUb2RheT44ODwvbWF4R2FwSW5EYXlzQmV0d2VlbkNQRVJlbnRhbEV4cGlyeURhdGVBbmRUb2RheT48bWF4R2FwSW5EYXlzQmV0d2Vlbk9wdGlvblBhY2tFeHBpcnlEYXRlQW5kQURTTEV4cGlyeURhdGU+Mjg8L21heEdhcEluRGF5c0JldHdlZW5PcHRpb25QYWNrRXhwaXJ5RGF0ZUFuZEFEU0xFeHBpcnlEYXRlPjxtYXhHYXBJbkRheXNCZXR3ZWVuT3B0aW9uUGFja0V4cGlyeURhdGVBbmRUb2RheT44ODwvbWF4R2FwSW5EYXlzQmV0d2Vlbk9wdGlvblBhY2tFeHBpcnlEYXRlQW5kVG9kYXk+PG5ld0FEU0xQYWNrYWdlSUQ+ODU3MjwvbmV3QURTTFBhY2thZ2VJRD48bmV3QURTTFBhY2thZ2VQcmljZT4xMDAuMDwvbmV3QURTTFBhY2thZ2VQcmljZT48bmV3Q1BFUmVudGFsUGFja2FnZUlEPjA8L25ld0NQRVJlbnRhbFBhY2thZ2VJRD48bmV3Q1BFUmVudGFsUGFja2FnZVByaWNlPjAuMDwvbmV3Q1BFUmVudGFsUGFja2FnZVByaWNlPjxuZXdEdXJhdGlvbkluTW9udGhzPjE8L25ld0R1cmF0aW9uSW5Nb250aHM+PG5ld0V4cGlyeURhdGVBZnRlclJlbmV3YWw+MjAxNy02LTE1PC9uZXdFeHBpcnlEYXRlQWZ0ZXJSZW5ld2FsPjxuZXdMaW1pdGF0aW9uVHlwZT5UYWwyYTwvbmV3TGltaXRhdGlvblR5cGU+PG5ld09wdGlvblBhY2tQYWNrYWdlSUQ+MDwvbmV3T3B0aW9uUGFja1BhY2thZ2VJRD48bmV3T3B0aW9uUGFja1BhY2thZ2VQcmljZT4wLjA8L25ld09wdGlvblBhY2tQYWNrYWdlUHJpY2U+PG5ld1Byb2Zvcm1hTmV0QW1vdW50PjEwMC4wPC9uZXdQcm9mb3JtYU5ldEFtb3VudD48bmV3U3BlZWQ+MTAyNC8yNTY8L25ld1NwZWVkPjxvcHRpb25QYWNrQWNjb3VudElEPjA8L29wdGlvblBhY2tBY2NvdW50SUQ+PG9wdGlvblBhY2tTZXJ2aWNlSUQ+MDwvb3B0aW9uUGFja1NlcnZpY2VJRD48cGFja2FnZU9mZmVyVHlwZUlEPjE3NTk8L3BhY2thZ2VPZmZlclR5cGVJRD48cGF5UmVuZXdhbER1ZT5mYWxzZTwvcGF5UmVuZXdhbER1ZT48cGF5bWVudE1ldGhvZElEPjEwPC9wYXltZW50TWV0aG9kSUQ+PHBlcmZvcm1SZWFsUmVuZXdhbD5mYWxzZTwvcGVyZm9ybVJlYWxSZW5ld2FsPjxyZW5ld2FsQWRtaW5Vc2VySUQ+MTE0MTQ8L3JlbmV3YWxBZG1pblVzZXJJRD48cmVuZXdhbEN1c3RvbWVyQ29tbWVudCB4c2k6bmlsPVxcXCJ0cnVlXFxcIiB4bWxuczp4c2k9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXFxcIi8+PHJlbmV3YWxMb2NhdGlvbklEPjIxMzwvcmVuZXdhbExvY2F0aW9uSUQ+PHJlbmV3YWxVc2VyTmFtZT5TU1A8L3JlbmV3YWxVc2VyTmFtZT48cmVzZWxsZXJDdXN0b21lck5hbWUgeHNpOm5pbD1cXFwidHJ1ZVxcXCIgeG1sbnM6eHNpPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVxcXCIvPjxyZXNlbGxlckN1c3RvbWVyTnVtYmVyPi0xPC9yZXNlbGxlckN1c3RvbWVyTnVtYmVyPjx0b3RhbER1ZUZvclJlbmV3YWw+MTAwLjA8L3RvdGFsRHVlRm9yUmVuZXdhbD48dW5wYWlkRXh0cmFVc2FnZUludm9pY2VBbW91bnRzRHVlIHhzaTpuaWw9XFxcInRydWVcXFwiIHhtbG5zOnhzaT1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2VcXFwiLz48dW5wYWlkRXh0cmFVc2FnZUludm9pY2VJRHMgeHNpOm5pbD1cXFwidHJ1ZVxcXCIgeG1sbnM6eHNpPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVxcXCIvPjxjYW51cGdyYWRlSW5UaGVNaWRkbGU+ZmFsc2U8L2NhbnVwZ3JhZGVJblRoZU1pZGRsZT48dXNlRXhpc3RpbmdEdXJhdGlvbj50cnVlPC91c2VFeGlzdGluZ0R1cmF0aW9uPjx1c2VFeGlzdGluZ0xpbWl0YXRpb25UeXBlPnRydWU8L3VzZUV4aXN0aW5nTGltaXRhdGlvblR5cGU+PHVzZUV4aXN0aW5nUGFja2FnZU9mZmVyVHlwZUlEPnRydWU8L3VzZUV4aXN0aW5nUGFja2FnZU9mZmVyVHlwZUlEPjx1c2VFeGlzdGluZ1NwZWVkPnRydWU8L3VzZUV4aXN0aW5nU3BlZWQ+PHZvdWNoZXJBbW91bnRzLz48dm91Y2hlck51bWJlcnMvPjxsYXN0QWN0aXZlQURTTFBhY2thZ2VQcmljZT4xMDAuMDwvbGFzdEFjdGl2ZUFEU0xQYWNrYWdlUHJpY2U+PG5ld0FEU0xQYWNrYWdlPk1lZ2EgUGx1cyAtIEFEU0wgMU1icHMgKENhcCAxMDBHQikgLSAxIE1vbnRoPC9uZXdBRFNMUGFja2FnZT48bmV3Q1BFUmVudGFsUGFja2FnZSB4c2k6bmlsPVxcXCJ0cnVlXFxcIiB4bWxuczp4c2k9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXFxcIi8+PG5ld0NQRVJlbnRhbFBhY2thZ2VFeHBpcnlEYXRlIHhzaTpuaWw9XFxcInRydWVcXFwiIHhtbG5zOnhzaT1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2VcXFwiLz48bmV3T3B0aW9uUGFja1BhY2thZ2UgeHNpOm5pbD1cXFwidHJ1ZVxcXCIgeG1sbnM6eHNpPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVxcXCIvPjxuZXdPcHRpb25QYWNrUGFja2FnZUV4cGlyeURhdGUgeHNpOm5pbD1cXFwidHJ1ZVxcXCIgeG1sbnM6eHNpPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVxcXCIvPjx1cGdyYWRlSW5UaGVNaWRkbGU+ZmFsc2U8L3VwZ3JhZGVJblRoZU1pZGRsZT48L3dlYjppbnF1aXJ5QnlDdXN0b21lck51bWJlclJlc3BvbnNlPjwvc29hcGVudjpCb2R5Pjwvc29hcGVudjpFbnZlbG9wZT5cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG5cblxuXG4gICAgcHVibGljICBzdGF0aWMgIGdldE9wZW5lZFRpY2tldEluZm89ICB7XG4gICAgICAgIFwiaXNFbGlnaWJsZVwiOiB0cnVlLFxuICAgICAgICBcIm9wZW5UaWNrZXRJbmZvXCI6IHtcbiAgICAgICAgICAgIFwicmVxdWVzdExvZ0lkXCI6IDEyODI3NjU3LFxuICAgICAgICAgICAgXCJoYXNUaWNrZXRPcGVuXCI6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIFwiUHJvYmxlbVR5cGVcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJEYXRhIGFuZCBWb2ljZSBEb3duXCIsXG4gICAgICAgICAgICAgICAgXCJvcHRpb25cIjogXCJUZWxlcGhvbmUgYW5kIEFEU0wgYXJlIG5vdCB3b3JraW5nXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIkRhdGEgRG93blwiLFxuICAgICAgICAgICAgICAgIFwib3B0aW9uXCI6IFwiQURTTCBQcm9ibGVtXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlZvaWNlIERvd25cIixcbiAgICAgICAgICAgICAgICBcIm9wdGlvblwiOiBcIlRlbGVwaG9uZSBQcm9ibGVtXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlNwZWVkXCIsXG4gICAgICAgICAgICAgICAgXCJvcHRpb25cIjogXCJTbG93IFNwZWVkXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIkJyb3dzaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJvcHRpb25cIjogXCJTZXJ2aWNlIFByb2JsZW1cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiT3B0aW9uIFBhY2tcIixcbiAgICAgICAgICAgICAgICBcIm9wdGlvblwiOiBcIlN0YXRpYyBJUCBQcm9ibGVtXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlRlY2huaWNhbCBWaXNpdFwiLFxuICAgICAgICAgICAgICAgIFwib3B0aW9uXCI6IFwiVGVjaG5pY2FsIFZpc2l0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIkZhbWlseSBJbnRlcm5ldFwiLFxuICAgICAgICAgICAgICAgIFwib3B0aW9uXCI6IFwiRmFtaWx5IFNlcnZpY2UgUHJvYmxlbVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJJbmZvIFJlcXVlc3RcIixcbiAgICAgICAgICAgICAgICBcIm9wdGlvblwiOiBcIk90aGVyc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiUHJvYmxtZVR5cGVBclwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIkRhdGEgYW5kIFZvaWNlIERvd25cIixcbiAgICAgICAgICAgICAgICBcIm9wdGlvblwiOiBcItin2YTZh9in2KrZgSDZiNiu2K/ZhdipINin2YTZgEFEU0wg2YTYpyDZiti52YXZhNin2YZcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiRGF0YSBEb3duXCIsXG4gICAgICAgICAgICAgICAgXCJvcHRpb25cIjogXCLZhdi02YPZhNipINiu2KfYtdipINio2K7Yr9mF2Kkg2KfZhNmAQURTTFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJWb2ljZSBEb3duXCIsXG4gICAgICAgICAgICAgICAgXCJvcHRpb25cIjogXCLZhdi02YPZhNipINiu2KfYtdipINio2KfZhNmH2KfYqtmBXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlNwZWVkXCIsXG4gICAgICAgICAgICAgICAgXCJvcHRpb25cIjogXCLYp9mE2LPYsdi52Kkg2KjYt9mK2KbYqVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJCcm93c2luZ1wiLFxuICAgICAgICAgICAgICAgIFwib3B0aW9uXCI6IFwi2YXYtNmD2YTYqSDZgdmKINin2YTYrtiv2YXYqVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJPcHRpb24gUGFja1wiLFxuICAgICAgICAgICAgICAgIFwib3B0aW9uXCI6IFwi2YXYtNmD2YTYqSDZgdmKINin2YTZgFN0YXRpYyBJUFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJUZWNobmljYWwgVmlzaXRcIixcbiAgICAgICAgICAgICAgICBcIm9wdGlvblwiOiBcItiy2YrYp9ix2Kkg2YHZhtmK2KlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiRmFtaWx5IEludGVybmV0XCIsXG4gICAgICAgICAgICAgICAgXCJvcHRpb25cIjogXCLZhdi02YPZhNipINmB2Yog2K7Yr9mF2Kkg2KfZhNil2YbYqtix2YbYqiDYp9mE2LnYp9im2YTZilwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJJbmZvIFJlcXVlc3RcIixcbiAgICAgICAgICAgICAgICBcIm9wdGlvblwiOiBcItij2K7YsdmJXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJleGNlcHRpb25IYW5kbGVyXCI6IHtcbiAgICAgICAgICAgIFwic3VjY2VkZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZXJyb3JNc2dFblwiOiBcIlwiLFxuICAgICAgICAgICAgXCJlcnJvck1zZ0FyXCI6IFwiXCJcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwdWJsaWMgc3RhdGljICBnZXRPcGVuZWRUaWNrZXRJbmZvX3dpdGhfb3Blbl90aWNrZXQ9ICB7XG4gICAgICAgIFwiaXNFbGlnaWJsZVwiOiB0cnVlLFxuICAgICAgICBcIm9wZW5UaWNrZXRJbmZvXCI6IHtcbiAgICAgICAgICAgIFwicmVxdWVzdExvZ0lkXCI6IDEyODI4MjgxLFxuICAgICAgICAgICAgXCJoYXNUaWNrZXRPcGVuXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wZW5UaWNrZXRUaXRsZVwiOiBcIkFEU0wgUHJvYmxlbVwiLFxuICAgICAgICAgICAgXCJhbHJlYWR5T3BlbmVkVGlja2V0TnVtXCI6IFwiMzE3OTYwNzRcIlxuICAgICAgICB9LFxuICAgICAgICBcIlByb2JsZW1UeXBlXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiRGF0YSBhbmQgVm9pY2UgRG93blwiLFxuICAgICAgICAgICAgICAgIFwib3B0aW9uXCI6IFwiVGVsZXBob25lIGFuZCBBRFNMIGFyZSBub3Qgd29ya2luZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJEYXRhIERvd25cIixcbiAgICAgICAgICAgICAgICBcIm9wdGlvblwiOiBcIkFEU0wgUHJvYmxlbVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJWb2ljZSBEb3duXCIsXG4gICAgICAgICAgICAgICAgXCJvcHRpb25cIjogXCJUZWxlcGhvbmUgUHJvYmxlbVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJTcGVlZFwiLFxuICAgICAgICAgICAgICAgIFwib3B0aW9uXCI6IFwiU2xvdyBTcGVlZFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJCcm93c2luZ1wiLFxuICAgICAgICAgICAgICAgIFwib3B0aW9uXCI6IFwiU2VydmljZSBQcm9ibGVtXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIk9wdGlvbiBQYWNrXCIsXG4gICAgICAgICAgICAgICAgXCJvcHRpb25cIjogXCJTdGF0aWMgSVAgUHJvYmxlbVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJUZWNobmljYWwgVmlzaXRcIixcbiAgICAgICAgICAgICAgICBcIm9wdGlvblwiOiBcIlRlY2huaWNhbCBWaXNpdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJGYW1pbHkgSW50ZXJuZXRcIixcbiAgICAgICAgICAgICAgICBcIm9wdGlvblwiOiBcIkZhbWlseSBTZXJ2aWNlIFByb2JsZW1cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiSW5mbyBSZXF1ZXN0XCIsXG4gICAgICAgICAgICAgICAgXCJvcHRpb25cIjogXCJPdGhlcnNcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIlByb2JsbWVUeXBlQXJcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJEYXRhIGFuZCBWb2ljZSBEb3duXCIsXG4gICAgICAgICAgICAgICAgXCJvcHRpb25cIjogXCLYp9mE2YfYp9iq2YEg2YjYrtiv2YXYqSDYp9mE2YBBRFNMINmE2Kcg2YrYudmF2YTYp9mGXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIkRhdGEgRG93blwiLFxuICAgICAgICAgICAgICAgIFwib3B0aW9uXCI6IFwi2YXYtNmD2YTYqSDYrtin2LXYqSDYqNiu2K/ZhdipINin2YTZgEFEU0xcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiVm9pY2UgRG93blwiLFxuICAgICAgICAgICAgICAgIFwib3B0aW9uXCI6IFwi2YXYtNmD2YTYqSDYrtin2LXYqSDYqNin2YTZh9in2KrZgVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJTcGVlZFwiLFxuICAgICAgICAgICAgICAgIFwib3B0aW9uXCI6IFwi2KfZhNiz2LHYudipINio2LfZitim2KlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiQnJvd3NpbmdcIixcbiAgICAgICAgICAgICAgICBcIm9wdGlvblwiOiBcItmF2LTZg9mE2Kkg2YHZiiDYp9mE2K7Yr9mF2KlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiT3B0aW9uIFBhY2tcIixcbiAgICAgICAgICAgICAgICBcIm9wdGlvblwiOiBcItmF2LTZg9mE2Kkg2YHZiiDYp9mE2YBTdGF0aWMgSVBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiVGVjaG5pY2FsIFZpc2l0XCIsXG4gICAgICAgICAgICAgICAgXCJvcHRpb25cIjogXCLYstmK2KfYsdipINmB2YbZitipXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIkZhbWlseSBJbnRlcm5ldFwiLFxuICAgICAgICAgICAgICAgIFwib3B0aW9uXCI6IFwi2YXYtNmD2YTYqSDZgdmKINiu2K/ZhdipINin2YTYpdmG2KrYsdmG2Kog2KfZhNi52KfYptmE2YpcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiSW5mbyBSZXF1ZXN0XCIsXG4gICAgICAgICAgICAgICAgXCJvcHRpb25cIjogXCLYo9iu2LHZiVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiZXhjZXB0aW9uSGFuZGxlclwiOiB7XG4gICAgICAgICAgICBcInN1Y2NlZGVkXCI6IHRydWUsXG4gICAgICAgICAgICBcImVycm9yTXNnRW5cIjogXCJcIixcbiAgICAgICAgICAgIFwiZXJyb3JNc2dBclwiOiBcIlwiXG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICBwdWJsaWMgc3RhdGljIGdldE9wZW5lZFRpY2tldEluZm9fcGFydDE9e1xuICAgICAgICBcIm9wZW5UaWNrZXRJbmZvXCI6IHtcbiAgICAgICAgICAgIFwicmVxdWVzdExvZ0lkXCI6IDY5OTYwNDMsXG4gICAgICAgICAgICBcImhhc1RpY2tldE9wZW5cIjogZmFsc2VcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldE9wZW5lZFRpY2tldEluZm9fcGFydDFfd2l0aF9vcGVuX3RpY2tldD0gIHtcbiAgICAgICAgXCJvcGVuVGlja2V0SW5mb1wiOiB7XG4gICAgICAgICAgICBcInJlcXVlc3RMb2dJZFwiOiAxMjgyODI4MSxcbiAgICAgICAgICAgIFwiaGFzVGlja2V0T3BlblwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGVuVGlja2V0VGl0bGVcIjogXCJBRFNMIFByb2JsZW1cIixcbiAgICAgICAgICAgIFwiYWxyZWFkeU9wZW5lZFRpY2tldE51bVwiOiBcIjMxNzk2MDc0XCJcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldE9wZW5lZFRpY2tldEluZm9fcGFydDI9e1xuICAgICAgICBcImFkc2xTZXJ2aWNlU3RhdHVzXCI6IHRydWVcbiAgICB9O1xuXG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZVRpY2tldD17XG4gICAgICAgIHRpY2tldE51bWJlcjo5ODk4OThcbiAgICB9O1xuXG4gICAgcHVibGljIHN0YXRpYyBhZGRDb21tZW50PVxuICAgICAgICB7XG4gICAgICAgICAgICBcImNvbW1lbnRBZGRlZFwiOiB0cnVlXG4gICAgICAgIH1cblxuICAgIHB1YmxpYyAgc3RhdGljIGdldEN1c3RvbWVySW52b2ljZXNfZW1wdHk9IHtcbiAgICAgICAgXCJJbnZvaWNlc1wiOiBbXG5cbiAgICAgICAgXSxcbiAgICAgICAgXCJleGNlcHRpb25IYW5kbGVyXCI6IHtcbiAgICAgICAgICAgIFwic3VjY2VkZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZXJyb3JNc2dFblwiOiBcIlwiLFxuICAgICAgICAgICAgXCJlcnJvck1zZ0FyXCI6IFwiXCJcbiAgICAgICAgfVxuICAgIH07XG5cblxuXG4gICAgLy8gYWRhcHRlcjpTU1BTZXJ2aWNlc0FkYXB0ZXJcbiAgICAvLyBwcm9jZWR1cmU6Z2V0VGlja2V0c0xpc3RcbiAgICAvLyBjb21wcmVzc1Jlc3BvbnNlOlxuICAgIC8vICAgICBwYXJhbWV0ZXJzOltcIjI0MDQxMzNcIl1cblxuICAgIC8vYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XG4gICAgcHVibGljIHN0YXRpYyBnZXRUaWNrZXRzPXtcbiAgICAgICAgXCJ0aWNrZXRzTGlzdFwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJzc3BTdGF0dXNcIjogXCJDbG9zZWRcIixcbiAgICAgICAgICAgICAgICBcInR0c1N0YXR1c1wiOiBcIkNsb3NlZFwiLFxuICAgICAgICAgICAgICAgIFwiY3VzdG9tZXJOdW1iZXJcIjogMCxcbiAgICAgICAgICAgICAgICBcImRvd25sb2FkQXR0YWNobWVudHNcIjogW1xuXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInNzcFR5cGVcIjogXCJPdGhlcnNcIixcbiAgICAgICAgICAgICAgICBcInRlY2huaWNhbFRocmVhZHNcIjogW1xuXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNyZWF0aW9uRGF0ZVwiOiBcIjE1LTEyLTIwMTYgMDQ6MzcgUE1cIixcbiAgICAgICAgICAgICAgICBcInR0c1R5cGVcIjogXCJJbmZvIFJlcXVlc3RcIixcbiAgICAgICAgICAgICAgICBcInR0c1N1YlJlYXNvblwiOiBcIkdlbmVyYWwgSW5xdWlyeVsgU2FsZXMgSXNzdWVdXCIsXG4gICAgICAgICAgICAgICAgXCJwbGF0Zm9ybVwiOiBcIkFEU0xcIixcbiAgICAgICAgICAgICAgICBcInRpY2tldE51bWJlclwiOiBcIjMxNzk2MDc0XCIsXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkFEU0wgUHJvYmxlbVwiLFxuICAgICAgICAgICAgICAgIFwic291cmNlXCI6IFwiU1NQXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJzc3BTdGF0dXNcIjogXCJDbG9zZWRcIixcbiAgICAgICAgICAgICAgICBcInR0c1N0YXR1c1wiOiBcIkNsb3NlZFwiLFxuICAgICAgICAgICAgICAgIFwiY3VzdG9tZXJOdW1iZXJcIjogMCxcbiAgICAgICAgICAgICAgICBcImRvd25sb2FkQXR0YWNobWVudHNcIjogW1xuXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInNzcFR5cGVcIjogXCJBRFNMIFByb2JsZW1cIixcbiAgICAgICAgICAgICAgICBcInRlY2huaWNhbFRocmVhZHNcIjogW1xuXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNyZWF0aW9uRGF0ZVwiOiBcIjMxLTA1LTIwMTYgMTI6MDEgUE1cIixcbiAgICAgICAgICAgICAgICBcInR0c1R5cGVcIjogXCJEYXRhIERvd25cIixcbiAgICAgICAgICAgICAgICBcInR0c1N1YlJlYXNvblwiOiBcIlNvbHZlZCBhbmQgY2xvc2VkIGR1ZSB0byBjdXN0b21lciB1bnJlYWNoYWJpbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwicGxhdGZvcm1cIjogXCJBRFNMXCIsXG4gICAgICAgICAgICAgICAgXCJ0aWNrZXROdW1iZXJcIjogXCIyNzYzMTU4N1wiLFxuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJkYXRhIGRvd25cIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZVwiOiBcIlRlbGVwaG9uZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHRzU3ViUmVhc29uXCI6IFwiQ2xvc2VkIGJ5IEFkbWluXCIsXG4gICAgICAgICAgICAgICAgXCJzc3BTdGF0dXNcIjogXCJDbG9zZWRcIixcbiAgICAgICAgICAgICAgICBcInBsYXRmb3JtXCI6IFwiQURTTFwiLFxuICAgICAgICAgICAgICAgIFwidGlja2V0TnVtYmVyXCI6IFwiMjEyNDg2NTZcIixcbiAgICAgICAgICAgICAgICBcInR0c1N0YXR1c1wiOiBcIkNsb3NlZFwiLFxuICAgICAgICAgICAgICAgIFwiY3VzdG9tZXJOdW1iZXJcIjogMCxcbiAgICAgICAgICAgICAgICBcImRvd25sb2FkQXR0YWNobWVudHNcIjogW1xuXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiZ2xvYmFsIHByb2JsZW0gXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VcIjogXCJUZWxlcGhvbmVcIixcbiAgICAgICAgICAgICAgICBcInRlY2huaWNhbFRocmVhZHNcIjogW1xuXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNyZWF0aW9uRGF0ZVwiOiBcIjIxLTA2LTIwMTUgMTE6NTMgQU1cIixcbiAgICAgICAgICAgICAgICBcInR0c1R5cGVcIjogXCJHbG9iYWwgUHJvYmxlbVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHRzU3ViUmVhc29uXCI6IFwiQ2FyZCBQcm9ibGVtXCIsXG4gICAgICAgICAgICAgICAgXCJzc3BTdGF0dXNcIjogXCJDbG9zZWRcIixcbiAgICAgICAgICAgICAgICBcInBsYXRmb3JtXCI6IFwiQURTTFwiLFxuICAgICAgICAgICAgICAgIFwidGlja2V0TnVtYmVyXCI6IFwiMjA1OTI3NjlcIixcbiAgICAgICAgICAgICAgICBcInR0c1N0YXR1c1wiOiBcIkNsb3NlZFwiLFxuICAgICAgICAgICAgICAgIFwiY3VzdG9tZXJOdW1iZXJcIjogMCxcbiAgICAgICAgICAgICAgICBcImRvd25sb2FkQXR0YWNobWVudHNcIjogW1xuXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiR2xvYmFsIFByb2JsZW1cIixcbiAgICAgICAgICAgICAgICBcInNvdXJjZVwiOiBcIlRlbGVwaG9uZVwiLFxuICAgICAgICAgICAgICAgIFwidGVjaG5pY2FsVGhyZWFkc1wiOiBbXG5cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY3JlYXRpb25EYXRlXCI6IFwiMTYtMDUtMjAxNSAxMToxNyBBTVwiLFxuICAgICAgICAgICAgICAgIFwidHRzVHlwZVwiOiBcIkdsb2JhbCBQcm9ibGVtXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0dHNTdWJSZWFzb25cIjogXCJDYXJkIFByb2JsZW1cIixcbiAgICAgICAgICAgICAgICBcInNzcFN0YXR1c1wiOiBcIkNsb3NlZFwiLFxuICAgICAgICAgICAgICAgIFwicGxhdGZvcm1cIjogXCJBRFNMXCIsXG4gICAgICAgICAgICAgICAgXCJ0aWNrZXROdW1iZXJcIjogXCIyMDU5MjIxMlwiLFxuICAgICAgICAgICAgICAgIFwidHRzU3RhdHVzXCI6IFwiQ2xvc2VkXCIsXG4gICAgICAgICAgICAgICAgXCJjdXN0b21lck51bWJlclwiOiAwLFxuICAgICAgICAgICAgICAgIFwiZG93bmxvYWRBdHRhY2htZW50c1wiOiBbXG5cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJnbG9ibGUgcHJvcGxlbVwiLFxuICAgICAgICAgICAgICAgIFwic291cmNlXCI6IFwiVGVsZXBob25lXCIsXG4gICAgICAgICAgICAgICAgXCJ0ZWNobmljYWxUaHJlYWRzXCI6IFtcblxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjcmVhdGlvbkRhdGVcIjogXCIxNi0wNS0yMDE1IDEwOjI3IEFNXCIsXG4gICAgICAgICAgICAgICAgXCJ0dHNUeXBlXCI6IFwiR2xvYmFsIFByb2JsZW1cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR0c1N1YlJlYXNvblwiOiBcIkNhcmQgUHJvYmxlbVwiLFxuICAgICAgICAgICAgICAgIFwic3NwU3RhdHVzXCI6IFwiQ2xvc2VkXCIsXG4gICAgICAgICAgICAgICAgXCJwbGF0Zm9ybVwiOiBcIkFEU0xcIixcbiAgICAgICAgICAgICAgICBcInRpY2tldE51bWJlclwiOiBcIjIwNTQyNTAyXCIsXG4gICAgICAgICAgICAgICAgXCJ0dHNTdGF0dXNcIjogXCJDbG9zZWRcIixcbiAgICAgICAgICAgICAgICBcImN1c3RvbWVyTnVtYmVyXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJkb3dubG9hZEF0dGFjaG1lbnRzXCI6IFtcblxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkdsb2JhbCBQcm9ibGVtXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VcIjogXCJUZWxlcGhvbmVcIixcbiAgICAgICAgICAgICAgICBcInRlY2huaWNhbFRocmVhZHNcIjogW1xuXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNyZWF0aW9uRGF0ZVwiOiBcIjEzLTA1LTIwMTUgMTI6NTUgUE1cIixcbiAgICAgICAgICAgICAgICBcInR0c1R5cGVcIjogXCJHbG9iYWwgUHJvYmxlbVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwic3NwU3RhdHVzXCI6IFwiQ2xvc2VkXCIsXG4gICAgICAgICAgICAgICAgXCJ0dHNTdGF0dXNcIjogXCJDbG9zZWRcIixcbiAgICAgICAgICAgICAgICBcImN1c3RvbWVyTnVtYmVyXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJkb3dubG9hZEF0dGFjaG1lbnRzXCI6IFtcblxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJzc3BUeXBlXCI6IFwiQURTTCBQcm9ibGVtXCIsXG4gICAgICAgICAgICAgICAgXCJ0ZWNobmljYWxUaHJlYWRzXCI6IFtcblxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjcmVhdGlvbkRhdGVcIjogXCIxMy0wNS0yMDE1IDExOjIyIEFNXCIsXG4gICAgICAgICAgICAgICAgXCJ0dHNUeXBlXCI6IFwiRGF0YSBEb3duXCIsXG4gICAgICAgICAgICAgICAgXCJ0dHNTdWJSZWFzb25cIjogXCJSZXN0YXJ0IFBvcnRcIixcbiAgICAgICAgICAgICAgICBcInBsYXRmb3JtXCI6IFwiQURTTFwiLFxuICAgICAgICAgICAgICAgIFwidGlja2V0TnVtYmVyXCI6IFwiMjA1NDEwMjRcIixcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiRGF0YSBEb3duXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VcIjogXCJUZWxlcGhvbmVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInNzcFN0YXR1c1wiOiBcIkNsb3NlZFwiLFxuICAgICAgICAgICAgICAgIFwidHRzU3RhdHVzXCI6IFwiQ2xvc2VkXCIsXG4gICAgICAgICAgICAgICAgXCJjdXN0b21lck51bWJlclwiOiAwLFxuICAgICAgICAgICAgICAgIFwiZG93bmxvYWRBdHRhY2htZW50c1wiOiBbXG5cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwic3NwVHlwZVwiOiBcIkFEU0wgUHJvYmxlbVwiLFxuICAgICAgICAgICAgICAgIFwidGVjaG5pY2FsVGhyZWFkc1wiOiBbXG5cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY3JlYXRpb25EYXRlXCI6IFwiMDctMDUtMjAxNSAwNzoxNyBQTVwiLFxuICAgICAgICAgICAgICAgIFwidHRzVHlwZVwiOiBcIkRhdGEgRG93blwiLFxuICAgICAgICAgICAgICAgIFwidHRzU3ViUmVhc29uXCI6IFwiUmVzdGFydCBQb3J0XCIsXG4gICAgICAgICAgICAgICAgXCJwbGF0Zm9ybVwiOiBcIkFEU0xcIixcbiAgICAgICAgICAgICAgICBcInRpY2tldE51bWJlclwiOiBcIjIwNDQ5NDUxXCIsXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkRhdGEgZG93blwiLFxuICAgICAgICAgICAgICAgIFwic291cmNlXCI6IFwiVGVsZXBob25lXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0dHNTdWJSZWFzb25cIjogXCJDbG9zZWQgYnkgQWRtaW5cIixcbiAgICAgICAgICAgICAgICBcInNzcFN0YXR1c1wiOiBcIkNsb3NlZFwiLFxuICAgICAgICAgICAgICAgIFwicGxhdGZvcm1cIjogXCJBRFNMXCIsXG4gICAgICAgICAgICAgICAgXCJ0aWNrZXROdW1iZXJcIjogXCIxNzExMTQ3OFwiLFxuICAgICAgICAgICAgICAgIFwidHRzU3RhdHVzXCI6IFwiQ2xvc2VkXCIsXG4gICAgICAgICAgICAgICAgXCJjdXN0b21lck51bWJlclwiOiAwLFxuICAgICAgICAgICAgICAgIFwiZG93bmxvYWRBdHRhY2htZW50c1wiOiBbXG5cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJnbG9iYWwgcHJvYmxlbVwiLFxuICAgICAgICAgICAgICAgIFwic291cmNlXCI6IFwiVGVsZXBob25lXCIsXG4gICAgICAgICAgICAgICAgXCJ0ZWNobmljYWxUaHJlYWRzXCI6IFtcblxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjcmVhdGlvbkRhdGVcIjogXCIyMi0wOS0yMDE0IDEyOjMwIFBNXCIsXG4gICAgICAgICAgICAgICAgXCJ0dHNUeXBlXCI6IFwiR2xvYmFsIFByb2JsZW1cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR0c1N1YlJlYXNvblwiOiBcIkluc3RhYmlsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJzc3BTdGF0dXNcIjogXCJDbG9zZWRcIixcbiAgICAgICAgICAgICAgICBcInBsYXRmb3JtXCI6IFwiQURTTFwiLFxuICAgICAgICAgICAgICAgIFwidGlja2V0TnVtYmVyXCI6IFwiMjA2MDcwNDFcIixcbiAgICAgICAgICAgICAgICBcInR0c1N0YXR1c1wiOiBcImNsb3NlZFwiLFxuICAgICAgICAgICAgICAgIFwiY3VzdG9tZXJOdW1iZXJcIjogMCxcbiAgICAgICAgICAgICAgICBcImRvd25sb2FkQXR0YWNobWVudHNcIjogW1xuXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiZ2xvYmFsIHByb2JsZW0gXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VcIjogXCJUZWxlcGhvbmVcIixcbiAgICAgICAgICAgICAgICBcInRlY2huaWNhbFRocmVhZHNcIjogW1xuXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNyZWF0aW9uRGF0ZVwiOiBcIjE3LTA1LTIwMTUgMTA6NDQgQU1cIixcbiAgICAgICAgICAgICAgICBcInR0c1R5cGVcIjogXCJHbG9iYWwgUHJvYmxlbVwiXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0dHNTdWJSZWFzb25cIjogXCJJbnN0YWJpbGl0eVwiLFxuICAgICAgICAgICAgICAgIFwic3NwU3RhdHVzXCI6IFwiQ2xvc2VkXCIsLy9XYWl0aW5nIGZlZWRiYWNrXG4gICAgICAgICAgICAgICAgXCJwbGF0Zm9ybVwiOiBcIkFEU0xcIixcbiAgICAgICAgICAgICAgICBcInRpY2tldE51bWJlclwiOiBcIjIwODc5MDQ5XCIsXG4gICAgICAgICAgICAgICAgXCJ0dHNTdGF0dXNcIjogXCJvcGVuZWRcIixcbiAgICAgICAgICAgICAgICBcImN1c3RvbWVyTnVtYmVyXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJkb3dubG9hZEF0dGFjaG1lbnRzXCI6IFtcblxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkdsb2JhbCBQcm9ibGVtXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VcIjogXCJUZWxlcGhvbmVcIixcbiAgICAgICAgICAgICAgICBcInRlY2huaWNhbFRocmVhZHNcIjogW1xuXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNyZWF0aW9uRGF0ZVwiOiBcIjMxLTA1LTIwMTUgMTE6MzAgQU1cIixcbiAgICAgICAgICAgICAgICBcInR0c1R5cGVcIjogXCJHbG9iYWwgUHJvYmxlbVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiZXhjZXB0aW9uSGFuZGxlclwiOiB7XG4gICAgICAgICAgICBcInN1Y2NlZGVkXCI6IHRydWUsXG4gICAgICAgICAgICBcImVycm9yTXNnRW5cIjogXCJcIixcbiAgICAgICAgICAgIFwiZXJyb3JNc2dBclwiOiBcIlwiXG4gICAgICAgIH1cbiAgICB9O1xuXG5cblxuXG4gICAgLy9cbiAgICAvLyBhZGFwdGVyOlNTUFNlcnZpY2VzQWRhcHRlclxuICAgIC8vIHByb2NlZHVyZTpnZXRUaWNrZXREZXRhaWxzXG4gICAgLy8gY29tcHJlc3NSZXNwb25zZTpcbiAgICAvLyAgICAgcGFyYW1ldGVyczpbXCIzMTc5NjA3NFwiXVxuXG5cbiAgICBwdWJsaWMgc3RhdGljIGdldFRpY2tldERldGFpbHM9e1xuICAgICAgICBcInRpY2tldERldGFpbHNcIjpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImRvd25sb2FkQXR0YWNobWVudHNcIjogW10sXG4gICAgICAgICAgICAgICAgXCJwcm9iRGVzY1wiOiBcImNzdFwiLFxuICAgICAgICAgICAgICAgIFwidGVjaG5pY2FsVGhyZWFkc1wiOiBbXG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c2VyXCI6IFwiVEVEYXRhIFN1cHBvcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0ZVRpbWVcIjogXCIwNi0wOC0yMDE3IDExOjQ3IEFNXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbW1lbnRcIjogXCJOL0FcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInVzZXJcIjogXCJBaG1lZCBGb3VhZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRlVGltZVwiOiBcIjA5LTA4LTIwMTcgMTE6NDcgQU1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tbWVudFwiOiBcIndoYXQgaXMgdGhhdD8hXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJjbG9zdXJlRGF0ZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiY3VzdG9tZXJOYW1lXCI6IFwiTW9zdGFmYSBNYWhtb3VkIE1vaGFtZWRcIixcbiAgICAgICAgICAgICAgICBcImN1c3RvbWVyTnVtYmVyXCI6IDcwMDg0MCxcbiAgICAgICAgICAgICAgICBcInRpY2tldE51bWJlclwiOiBcIjM2MjIzMTg0XCIsXG4gICAgICAgICAgICAgICAgXCJjcmVhdGlvbkRhdGVcIjogXCIxNS0wNi0yMDE3IDA1OjU2IFBNXCIsXG4gICAgICAgICAgICAgICAgXCJzb3VyY2VcIjogXCJUZWxlcGhvbmVcIixcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiUGh5c2ljYWwgSW5zdGFiaWxpdHlcIixcbiAgICAgICAgICAgICAgICBcInNzcFN0YXR1c1wiOiBcIkluIFByb2dyZXNzXCIsXG4gICAgICAgICAgICAgICAgXCJzc3BUeXBlXCI6IFwiQURTTCBQcm9ibGVtXCIsXG4gICAgICAgICAgICAgICAgXCJ0dHNTdGF0dXNcIjogXCJXYWl0aW5nIGZvciByZXNwb25zZVwiLFxuICAgICAgICAgICAgICAgIFwidHRzVHlwZVwiOiBcIlBoeXNpY2FsIEluc3RhYmlsaXR5XCIsXG4gICAgICAgICAgICAgICAgXCJ0dHNTdWJSZWFzb25cIjogXCJNVi0gQ2hhbmdlIE1haW4gV2lyZVwiLFxuICAgICAgICAgICAgICAgIFwicGxhdGZvcm1cIjogXCJBRFNMXCJcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgO1xuXG5cbiAgICAvLyBhZGFwdGVyOlNTUFNlcnZpY2VzQWRhcHRlclxuICAgIC8vIHByb2NlZHVyZTpnZXRDdXN0b21lckludm9pY2VzXG4gICAgLy8gY29tcHJlc3NSZXNwb25zZTpcbiAgICAvLyAgICAgcGFyYW1ldGVyczpbXCIyNDA0MTMzXCJdXG4gICAgcHVibGljIHN0YXRpYyAgZ2V0Q3VzdG9tZXJJbnZvaWNlcz17XG4gICAgICAgIFwiY3VzdG9tZXJJbnZvaWNlc0hpc3RvcnlcIjogW1xuICAgICAgICAgICAge1wiaW52b2ljZU51bWJlclwiOjg1ODI0MTEwLFwiaW52b2ljZURhdGVcIjpcIjI4LzYvMjAxN1wiLFwiaW52b2ljZUFtb3VudFwiOjE0MC4wLFwicGFpZFwiOnRydWUsXCJyZW5ld2FsRGF0ZVwiOlwiMjIvMDcvMjAxN1wiLFwic3Vic2NyaXBcIjp7XCJwcm9kdWN0TGlzdFwiOltdLFwiYWRzbERvd25TcGVlZFwiOjAsXCJhZHNsVXBzcGVlZFwiOjAsXCJhZHNsTGltaXRhdGlvblR5cGVJZFwiOjAsXCJjYW5VcGRhdGVJblRoZU1pZGRsZVwiOmZhbHNlLFwiaGF2ZUNQRVwiOmZhbHNlLFwiaGF2ZU9wdGlvblBhY2tcIjpmYWxzZX0sXCJyZWNlaXB0c1wiOltdfSxcbiAgICAgICAgICAgIHtcImludm9pY2VOdW1iZXJcIjo4MzI2MTg3MyxcImludm9pY2VEYXRlXCI6XCIyOS81LzIwMTdcIixcImludm9pY2VBbW91bnRcIjoxNDAuMCxcInBhaWRcIjp0cnVlLFwicmVuZXdhbERhdGVcIjpcIjIyLzA2LzIwMTdcIixcInN1YnNjcmlwXCI6e1wicHJvZHVjdExpc3RcIjpbXSxcImFkc2xEb3duU3BlZWRcIjowLFwiYWRzbFVwc3BlZWRcIjowLFwiYWRzbExpbWl0YXRpb25UeXBlSWRcIjowLFwiY2FuVXBkYXRlSW5UaGVNaWRkbGVcIjpmYWxzZSxcImhhdmVDUEVcIjpmYWxzZSxcImhhdmVPcHRpb25QYWNrXCI6ZmFsc2V9LFwicmVjZWlwdHNcIjpbXX0sXG4gICAgICAgICAgICB7XCJpbnZvaWNlTnVtYmVyXCI6ODA0NDYxMjYsXCJpbnZvaWNlRGF0ZVwiOlwiMjkvNC8yMDE3XCIsXCJpbnZvaWNlQW1vdW50XCI6MTQwLjAsXCJwYWlkXCI6dHJ1ZSxcInJlbmV3YWxEYXRlXCI6XCIyMi8wNS8yMDE3XCIsXCJzdWJzY3JpcFwiOntcInByb2R1Y3RMaXN0XCI6W10sXCJhZHNsRG93blNwZWVkXCI6MCxcImFkc2xVcHNwZWVkXCI6MCxcImFkc2xMaW1pdGF0aW9uVHlwZUlkXCI6MCxcImNhblVwZGF0ZUluVGhlTWlkZGxlXCI6ZmFsc2UsXCJoYXZlQ1BFXCI6ZmFsc2UsXCJoYXZlT3B0aW9uUGFja1wiOmZhbHNlfSxcInJlY2VpcHRzXCI6W119XG4gICAgICAgIF0sXG4gICAgICAgIFwiZXhjZXB0aW9uSGFuZGxlclwiOiB7XG4gICAgICAgICAgICBcInN1Y2NlZGVkXCI6IHRydWUsXG4gICAgICAgICAgICBcImVycm9yTXNnRW5cIjogXCJcIixcbiAgICAgICAgICAgIFwiZXJyb3JNc2dBclwiOiBcIlwiXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy9cbiAgICAvLyBhZGFwdGVyOlNTUFNlcnZpY2VzQWRhcHRlclxuICAgIC8vIHByb2NlZHVyZTpnZXRJbnZvaWNlRGV0YWlsc1xuICAgIC8vIGNvbXByZXNzUmVzcG9uc2U6XG4gICAgLy8gICAgIHBhcmFtZXRlcnM6W1wiMjQwNDEzM1wiLFwiNjg1NTEyODdcIl1cbiAgICBwdWJsaWMgc3RhdGljICBnZXRJbnZvaWNlRGV0YWlscz17XCJpbnZvaWNlRGV0YWlsc1wiOntcImludm9pY2VOdW1iZXJcIjoxMzMyNjc4NixcImludm9pY2VBbW91bnRcIjoxMC4wLFwicGFpZFwiOmZhbHNlLFwic3Vic2NyaXBcIjp7XCJwcm9kdWN0TGlzdFwiOlt7XCJuYW1lXCI6XCJBRFNMIE9wdGlvbiBQYWNrIDEgLSAxIE1vbnRoXCIsXCJzdGFydERhdGVcIjoxMzI0NDE4NDAwMDAwLFwiZW5kRGF0ZVwiOjEzMjcwMTA0MDAwMDAsXCJzdGFydERhdGVTdHJpbmdcIjpcIjIxLzEyLzIwMTFcIixcImVuZERhdGVTdHJpbmdcIjpcIjIwLzAxLzIwMTJcIixcImlkXCI6MCxcInBhY2thZ2VJZFwiOjB9XSxcImFkc2xEb3duU3BlZWRcIjowLFwiYWRzbFVwc3BlZWRcIjowLFwiYWRzbExpbWl0YXRpb25UeXBlSWRcIjowLFwiY2FuVXBkYXRlSW5UaGVNaWRkbGVcIjpmYWxzZSxcImhhdmVDUEVcIjpmYWxzZSxcImhhdmVPcHRpb25QYWNrXCI6ZmFsc2V9LFwicmVjZWlwdHNcIjpbe1wicmVjZWlwdE51bWJlclwiOjEyMjE3NzAwLFwiY29sbGVjdGlvbk51bWJlclwiOlwiSjAzMjAxMlwiLFwiYW1vdW50XCI6MTAuMCxcIm9yaWdpbmFsQW1vdW50XCI6MC4wLFwicmVjZWlwdERhdGVcIjpcIjIwLzMvMjAxMlwifV19fTtcblxuXG4gICAgcHVibGljIHN0YXRpYyAgZ2V0QXJlYUNvZGVzPXtcbiAgICAgICAgXCJhcmVhQ29kZXNMaXN0XCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJhcmVhQ29kZVwiOiBcIjJcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVBclwiOiBcIjIgLSDYp9mE2YLYp9mH2LHYqVwiLFxuICAgICAgICAgICAgICAgIFwibmFtZUVuXCI6IFwiMiAtIENhaXJvXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxuICAgICAgICAgICAgICAgIFwiYXJlYUNvZGVcIjogXCIzXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lQXJcIjogXCIzIC0g2KfZhNij2LPZg9mG2K/YsdmK2KlcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVFblwiOiBcIjMgLSBBbGV4YW5kcmlhXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiA0LFxuICAgICAgICAgICAgICAgIFwiYXJlYUNvZGVcIjogXCI0MFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZUFyXCI6IFwiNDAgLSDYp9mE2LrYsdio2YrYqVwiLFxuICAgICAgICAgICAgICAgIFwibmFtZUVuXCI6IFwiNDAgLSBBbCBHaGFyYnlhXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiA1LFxuICAgICAgICAgICAgICAgIFwiYXJlYUNvZGVcIjogXCI4OFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZUFyXCI6IFwiODggLSDYo9iz2YrZiNi3XCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lRW5cIjogXCI4OCAtIEFzc2l1dFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogNixcbiAgICAgICAgICAgICAgICBcImFyZWFDb2RlXCI6IFwiOTdcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVBclwiOiBcIjk3IC0g2KPYs9mI2KfZhlwiLFxuICAgICAgICAgICAgICAgIFwibmFtZUVuXCI6IFwiOTcgLSBBc3dhblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogNyxcbiAgICAgICAgICAgICAgICBcImFyZWFDb2RlXCI6IFwiNDVcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVBclwiOiBcIjQ1IC0g2KfZhNio2K3Zitix2KlcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVFblwiOiBcIjQ1IC0gQmVoaXJhXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiA4LFxuICAgICAgICAgICAgICAgIFwiYXJlYUNvZGVcIjogXCI4MlwiLFxuICAgICAgICAgICAgICAgIFwibmFtZUFyXCI6IFwiODIgLSDYqNmG2Yog2LPZiNmK2YFcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVFblwiOiBcIjgyIC0gQmVuaSBTb3VpZlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogOSxcbiAgICAgICAgICAgICAgICBcImFyZWFDb2RlXCI6IFwiNTBcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVBclwiOiBcIjUwIC0g2KfZhNiv2YLZh9mE2YrYqVwiLFxuICAgICAgICAgICAgICAgIFwibmFtZUVuXCI6IFwiNTAgLSBEYWthaGxpeWEgXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiAxMCxcbiAgICAgICAgICAgICAgICBcImFyZWFDb2RlXCI6IFwiNTdcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVBclwiOiBcIjU3IC0g2K/ZhdmK2KfYt1wiLFxuICAgICAgICAgICAgICAgIFwibmFtZUVuXCI6IFwiNTcgLSBEYW1pZXR0YVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogMTEsXG4gICAgICAgICAgICAgICAgXCJhcmVhQ29kZVwiOiBcIjg0XCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lQXJcIjogXCI4NCAtINin2YTZgdmK2YjZhVwiLFxuICAgICAgICAgICAgICAgIFwibmFtZUVuXCI6IFwiODQgLSBGYXlvdW1cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDEyLFxuICAgICAgICAgICAgICAgIFwiYXJlYUNvZGVcIjogXCI2NFwiLFxuICAgICAgICAgICAgICAgIFwibmFtZUFyXCI6IFwiNjQgLSDYp9mE2KXYs9mF2KfYudmK2YTZitipXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lRW5cIjogXCI2NCAtIElzbWFsaWFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDEzLFxuICAgICAgICAgICAgICAgIFwiYXJlYUNvZGVcIjogXCI0N1wiLFxuICAgICAgICAgICAgICAgIFwibmFtZUFyXCI6IFwiNDcgLSDZg9mB2LEg2KfZhNi02YrYrlwiLFxuICAgICAgICAgICAgICAgIFwibmFtZUVuXCI6IFwiNDcgLSBLYWZyIEVsLVNoZWlraFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogMTQsXG4gICAgICAgICAgICAgICAgXCJhcmVhQ29kZVwiOiBcIjk1XCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lQXJcIjogXCI5NSAtINin2YTYo9mC2LXYsVwiLFxuICAgICAgICAgICAgICAgIFwibmFtZUVuXCI6IFwiOTUgLSBMdXhvclwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogMTUsXG4gICAgICAgICAgICAgICAgXCJhcmVhQ29kZVwiOiBcIjQ2XCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lQXJcIjogXCI0NiAtINmF2LfYsdmI2K1cIixcbiAgICAgICAgICAgICAgICBcIm5hbWVFblwiOiBcIjQ2IC0gTWF0cm9oXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiAxNixcbiAgICAgICAgICAgICAgICBcImFyZWFDb2RlXCI6IFwiODZcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVBclwiOiBcIjg2IC0g2KfZhNmF2YbZitinXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lRW5cIjogXCI4NiAtIE1lbmlhXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiAxNyxcbiAgICAgICAgICAgICAgICBcImFyZWFDb2RlXCI6IFwiNDhcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVBclwiOiBcIjQ4IC0g2KfZhNmF2YbZiNmB2YrYqVwiLFxuICAgICAgICAgICAgICAgIFwibmFtZUVuXCI6IFwiNDggLSBNZW5vdWZpYVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogMTgsXG4gICAgICAgICAgICAgICAgXCJhcmVhQ29kZVwiOiBcIjY4XCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lQXJcIjogXCI2OCAtINi02YXYp9mEINiz2YrZhtin2KFcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVFblwiOiBcIjY4IC0gTm9ydGggU2luYWlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDE5LFxuICAgICAgICAgICAgICAgIFwiYXJlYUNvZGVcIjogXCI2NlwiLFxuICAgICAgICAgICAgICAgIFwibmFtZUFyXCI6IFwiNjYgLSDYqNmI2LEg2LPYudmK2K9cIixcbiAgICAgICAgICAgICAgICBcIm5hbWVFblwiOiBcIjY2IC0gUG9ydCBTYWlkXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiAyMCxcbiAgICAgICAgICAgICAgICBcImFyZWFDb2RlXCI6IFwiMTNcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVBclwiOiBcIjEzIC0g2KfZhNmC2YTZitmI2KjZitipXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lRW5cIjogXCIxMyAtIFFhbGlvYmlhXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiAyMSxcbiAgICAgICAgICAgICAgICBcImFyZWFDb2RlXCI6IFwiOTZcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVBclwiOiBcIjk2IC0g2YLZhtinXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lRW5cIjogXCI5NiAtIFF1aW5hXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiAyMixcbiAgICAgICAgICAgICAgICBcImFyZWFDb2RlXCI6IFwiNjVcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVBclwiOiBcIjY1IC0g2KfZhNio2K3YsSDYp9mE2KPYrdmF2LFcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVFblwiOiBcIjY1IC0gUmVkIFNlYVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogMjMsXG4gICAgICAgICAgICAgICAgXCJhcmVhQ29kZVwiOiBcIjU1XCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lQXJcIjogXCI1NSAtINin2YTYtNix2YLZitipXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lRW5cIjogXCI1NSAtIFNoYXJraWFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDI0LFxuICAgICAgICAgICAgICAgIFwiYXJlYUNvZGVcIjogXCI5M1wiLFxuICAgICAgICAgICAgICAgIFwibmFtZUFyXCI6IFwiOTMgLSDYs9mI2YfYp9isXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lRW5cIjogXCI5MyAtIFNvdWhhZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogMjUsXG4gICAgICAgICAgICAgICAgXCJhcmVhQ29kZVwiOiBcIjY5XCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lQXJcIjogXCI2OSAtINis2YbZiNioINiz2YrZhtin2KFcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVFblwiOiBcIjY5IC0gU291dGggU2luYWlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDI2LFxuICAgICAgICAgICAgICAgIFwiYXJlYUNvZGVcIjogXCI2MlwiLFxuICAgICAgICAgICAgICAgIFwibmFtZUFyXCI6IFwiNjIgLSDYp9mE2LPZiNmK2LNcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVFblwiOiBcIjYyIC0gU3VlelwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogMjgsXG4gICAgICAgICAgICAgICAgXCJhcmVhQ29kZVwiOiBcIjkyXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lQXJcIjogXCI5MiAtINin2YTZiNin2K/ZiiDYp9mE2KzYr9mK2K9cIixcbiAgICAgICAgICAgICAgICBcIm5hbWVFblwiOiBcIjkyIC0gV2FkaSBHYWRpZFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogMjksXG4gICAgICAgICAgICAgICAgXCJhcmVhQ29kZVwiOiBcIjU1XCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lQXJcIjogXCI1NSAtINin2YTYudin2LTYsSDZhdmGINix2YXYttin2YZcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVFblwiOiBcIjU1IC0gMTB0aCBvZiBSYW1hZGFuXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cblxuXG4gICAgcHVibGljIHN0YXRpYyAgc2V0Q3VzdG9tZXJJbmZvcm1hdGlvbj17XG4gICAgICAgIFwiY29udGFjdEluZm9VcGRhdGVkXCI6IHRydWVcbiAgICB9O1xuXG4gICAgcHVibGljIHN0YXRpYyAgc2VuZFZlcmlmaWNhdGlvblNNUz17XG4gICAgICAgIFwic2VuZFN0YXR1c1wiOiBcInN1Y2Nlc3NcIlxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgIGdldENQRVR5cGVzPXtcbiAgICAgICAgXCJDUEVUeXBlc0xpc3RcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiY3BlSW5zdGFsbGF0aW9uRmVlc1wiOiA3NSxcbiAgICAgICAgICAgICAgICBcImNwZV9JRFwiOiAzMjMsXG4gICAgICAgICAgICAgICAgXCJjcGVOYW1lXCI6IFwiNCBQb3J0IFdpcmVsZXNzIFJvdXRlclwiLFxuICAgICAgICAgICAgICAgIFwiY3BlRGVzY1wiOiBcImhhcmR3YXJlIGRlc2NcIixcbiAgICAgICAgICAgICAgICBcInNlbGVjdGVkXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJjcGVEZXNjQXJcIjogXCLYsdin2YjYqtixINmE2KfYs9mE2YPZiiArIDTZhdiu2KfYsdisXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJjcGVJbnN0YWxsYXRpb25GZWVzXCI6IDc1LFxuICAgICAgICAgICAgICAgIFwiY3BlX0lEXCI6IDE0MCxcbiAgICAgICAgICAgICAgICBcImNwZU5hbWVcIjogXCIxIFBvcnQgUm91dGVyXCIsXG4gICAgICAgICAgICAgICAgXCJjcGVEZXNjXCI6IFwiaGFyZHdhcmUgdHJ5aW5nXCIsXG4gICAgICAgICAgICAgICAgXCJzZWxlY3RlZFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiY3BlRGVzY0FyXCI6IFwi2LHYp9mI2KrYsSDYp9mK2KvYsdmG2KpcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImNwZUluc3RhbGxhdGlvbkZlZXNcIjogMCxcbiAgICAgICAgICAgICAgICBcImNwZV9JRFwiOiA0OTUsXG4gICAgICAgICAgICAgICAgXCJjcGVOYW1lXCI6IFwiQmFja3VwIEJhdHRlcnkg4oCTIFNhbGVzXCIsXG4gICAgICAgICAgICAgICAgXCJjcGVEZXNjXCI6IFwiTmV0U2F2ZXIgRGVzY1wiLFxuICAgICAgICAgICAgICAgIFwic2VsZWN0ZWRcIjogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyAgZ2V0Q1BFVHlwZXNCeUN1c3RvbWVyPXtcbiAgICAgICAgXCJjcGVTYWxlc1R5cGVMaXN0XCI6IHtcbiAgICAgICAgICAgIFwiY3BlU2FsZXNUeXBlQnlDdXN0b21lckR0b3NcIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RlZFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgXCJjcGVQcmljZVwiOiAxNTAsXG4gICAgICAgICAgICAgICAgICAgIFwiY3BlVHlwZUlEXCI6IDE0MCxcbiAgICAgICAgICAgICAgICAgICAgXCJjcGVUeXBlTmFtZVwiOiBcIkNQRSBFdGhlcm5ldCAtIFNhbGVzXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RlZFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgXCJjcGVQcmljZVwiOiAyNTAsXG4gICAgICAgICAgICAgICAgICAgIFwiY3BlVHlwZUlEXCI6IDMyMyxcbiAgICAgICAgICAgICAgICAgICAgXCJjcGVUeXBlTmFtZVwiOiBcIkNQRSA0LXBvcnQgV2lyZWxlc3MgLSBTYWxlc1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwic2VsZWN0ZWRcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIFwiY3BlUHJpY2VcIjogNTAwLFxuICAgICAgICAgICAgICAgICAgICBcImNwZVR5cGVJRFwiOiA0OTUsXG4gICAgICAgICAgICAgICAgICAgIFwiY3BlVHlwZU5hbWVcIjogXCJCYWNrdXAgQmF0dGVyeSDigJMgU2FsZXNcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJlcXVlc3RMb2dJZFwiOiAyMDEyMzIyNTNcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgIGdldENQRUxvZ2dpbmc9e1xuICAgICAgICBcInJlcXVlc3RMb2dcIjoge1xuICAgICAgICAgICAgXCJpZFwiOiAyMDEyMzIyNTMsXG4gICAgICAgICAgICBcImNyZWF0ZWRPblwiOiAxNTAyNzAzOTcwNzc2LFxuICAgICAgICAgICAgXCJjdXN0b21lck51bWJlclwiOiBcIjE0OTYzOTlcIixcbiAgICAgICAgICAgIFwiaGFzUGF5bWVudFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwidXNlcm5hbWVcIjogXCJyZXZhbXB1c2VyXCIsXG4gICAgICAgICAgICBcInJlcXVlc3RTdGF0dXNJZFwiOiAwLFxuICAgICAgICAgICAgXCJyZXF1ZXN0VHlwZUlkXCI6IDEwLFxuICAgICAgICAgICAgXCJyZXNwb25zZVN0YXR1c0lkXCI6IDAsXG4gICAgICAgICAgICBcIm9yaWdpblwiOiAyXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljICBnZXRDUEVCYW5rVVJMPXtcbiAgICAgICAgXCJiYW5rVXJsXCI6IFwiaHR0cDovLzE5Mi4xNjguMTI5LjMwOjkwODAvbmV0LnRlZGF0YS50b3BHLnVpL1ZpZXdQYXltZW50V2lkZ2V0P3RyYW5zYWN0aW9uSGFzaENvZGU9NTM2NjlkZTIzNGUwNTJkYzlmMjVkODVmNDNjYmJiMzJcIlxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0T3B0aW9uUGFja0luZm89e1xuICAgICAgICBcImVsaWdpYmxlVG9PcHRpb25QYWNrXCI6IGZhbHNlLFxuICAgICAgICBcImFkc2xTZXJ2aWNlU3RhdHVzXCI6IHRydWUsXG4gICAgICAgIFwib3B0aW9uUGFja0xpc3RcIjoge1xuICAgICAgICAgICAgXCJhdmFpbGFibGVPcHRpb25QYWNrTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlSWRcIjogNDA5MyxcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZU5hbWVcIjogXCJCdXNpbmVzcyBBRFNMIE9wdGlvbiBQYWNrIDEgLSAxMCBNb250aHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwcmljZVwiOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIFwibW9udGhEdXJhdGlvblwiOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25JRFwiOiAyNixcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25OYW1lXCI6IFwiQnVzaW5lc3MgVW5saW1pdGVkIEFEU0wgLSBTdGFuZGFyZCBPZmZlcmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlVHlwZU5hbWVcIjogXCJBRFNMIE9wdGlvbiBQYWNrIDFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZVR5cGVpZFwiOiA3MVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlSWRcIjogNDA5NCxcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZU5hbWVcIjogXCJCdXNpbmVzcyBBRFNMIE9wdGlvbiBQYWNrIDEgLSAxMSBNb250aHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwcmljZVwiOiAxMTAsXG4gICAgICAgICAgICAgICAgICAgIFwibW9udGhEdXJhdGlvblwiOiAxMSxcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25JRFwiOiAyNixcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25OYW1lXCI6IFwiQnVzaW5lc3MgVW5saW1pdGVkIEFEU0wgLSBTdGFuZGFyZCBPZmZlcmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlVHlwZU5hbWVcIjogXCJBRFNMIE9wdGlvbiBQYWNrIDFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZVR5cGVpZFwiOiA3MVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlSWRcIjogNDA5NSxcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZU5hbWVcIjogXCJCdXNpbmVzcyBBRFNMIE9wdGlvbiBQYWNrIDEgLSAxMiBNb250aHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwcmljZVwiOiAxMjAsXG4gICAgICAgICAgICAgICAgICAgIFwibW9udGhEdXJhdGlvblwiOiAxMixcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25JRFwiOiAyNixcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25OYW1lXCI6IFwiQnVzaW5lc3MgVW5saW1pdGVkIEFEU0wgLSBTdGFuZGFyZCBPZmZlcmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlVHlwZU5hbWVcIjogXCJBRFNMIE9wdGlvbiBQYWNrIDFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZVR5cGVpZFwiOiA3MVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlSWRcIjogNDA5NixcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZU5hbWVcIjogXCJCdXNpbmVzcyBBRFNMIE9wdGlvbiBQYWNrIDEgLSAxIE1vbnRoXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicHJpY2VcIjogMTAsXG4gICAgICAgICAgICAgICAgICAgIFwibW9udGhEdXJhdGlvblwiOiAxLFxuICAgICAgICAgICAgICAgICAgICBcInByb21vdGlvbklEXCI6IDI2LFxuICAgICAgICAgICAgICAgICAgICBcInByb21vdGlvbk5hbWVcIjogXCJCdXNpbmVzcyBVbmxpbWl0ZWQgQURTTCAtIFN0YW5kYXJkIE9mZmVyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VUeXBlTmFtZVwiOiBcIkFEU0wgT3B0aW9uIFBhY2sgMVwiLFxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlVHlwZWlkXCI6IDcxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VJZFwiOiA0MDk3LFxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlTmFtZVwiOiBcIkJ1c2luZXNzIEFEU0wgT3B0aW9uIFBhY2sgMSAtIDIgTW9udGhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwcmljZVwiOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgXCJtb250aER1cmF0aW9uXCI6IDIsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uSURcIjogMjYsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uTmFtZVwiOiBcIkJ1c2luZXNzIFVubGltaXRlZCBBRFNMIC0gU3RhbmRhcmQgT2ZmZXJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZVR5cGVOYW1lXCI6IFwiQURTTCBPcHRpb24gUGFjayAxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VUeXBlaWRcIjogNzFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZUlkXCI6IDQwOTgsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VOYW1lXCI6IFwiQnVzaW5lc3MgQURTTCBPcHRpb24gUGFjayAxIC0gMyBNb250aHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwcmljZVwiOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgXCJtb250aER1cmF0aW9uXCI6IDMsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uSURcIjogMjYsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uTmFtZVwiOiBcIkJ1c2luZXNzIFVubGltaXRlZCBBRFNMIC0gU3RhbmRhcmQgT2ZmZXJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZVR5cGVOYW1lXCI6IFwiQURTTCBPcHRpb24gUGFjayAxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VUeXBlaWRcIjogNzFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZUlkXCI6IDQwOTksXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VOYW1lXCI6IFwiQnVzaW5lc3MgQURTTCBPcHRpb24gUGFjayAxIC0gNCBNb250aHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwcmljZVwiOiA0MCxcbiAgICAgICAgICAgICAgICAgICAgXCJtb250aER1cmF0aW9uXCI6IDQsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uSURcIjogMjYsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uTmFtZVwiOiBcIkJ1c2luZXNzIFVubGltaXRlZCBBRFNMIC0gU3RhbmRhcmQgT2ZmZXJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZVR5cGVOYW1lXCI6IFwiQURTTCBPcHRpb24gUGFjayAxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VUeXBlaWRcIjogNzFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZUlkXCI6IDQxMDAsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VOYW1lXCI6IFwiQnVzaW5lc3MgQURTTCBPcHRpb24gUGFjayAxIC0gNSBNb250aHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwcmljZVwiOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgXCJtb250aER1cmF0aW9uXCI6IDUsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uSURcIjogMjYsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uTmFtZVwiOiBcIkJ1c2luZXNzIFVubGltaXRlZCBBRFNMIC0gU3RhbmRhcmQgT2ZmZXJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZVR5cGVOYW1lXCI6IFwiQURTTCBPcHRpb24gUGFjayAxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VUeXBlaWRcIjogNzFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZUlkXCI6IDQxMDEsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VOYW1lXCI6IFwiQnVzaW5lc3MgQURTTCBPcHRpb24gUGFjayAxIC0gNiBNb250aHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwcmljZVwiOiA2MCxcbiAgICAgICAgICAgICAgICAgICAgXCJtb250aER1cmF0aW9uXCI6IDYsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uSURcIjogMjYsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uTmFtZVwiOiBcIkJ1c2luZXNzIFVubGltaXRlZCBBRFNMIC0gU3RhbmRhcmQgT2ZmZXJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZVR5cGVOYW1lXCI6IFwiQURTTCBPcHRpb24gUGFjayAxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VUeXBlaWRcIjogNzFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZUlkXCI6IDQxMDIsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VOYW1lXCI6IFwiQnVzaW5lc3MgQURTTCBPcHRpb24gUGFjayAxIC0gNyBNb250aHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwcmljZVwiOiA3MCxcbiAgICAgICAgICAgICAgICAgICAgXCJtb250aER1cmF0aW9uXCI6IDcsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uSURcIjogMjYsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uTmFtZVwiOiBcIkJ1c2luZXNzIFVubGltaXRlZCBBRFNMIC0gU3RhbmRhcmQgT2ZmZXJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZVR5cGVOYW1lXCI6IFwiQURTTCBPcHRpb24gUGFjayAxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VUeXBlaWRcIjogNzFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZUlkXCI6IDQxMDMsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VOYW1lXCI6IFwiQnVzaW5lc3MgQURTTCBPcHRpb24gUGFjayAxIC0gOCBNb250aHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwcmljZVwiOiA4MCxcbiAgICAgICAgICAgICAgICAgICAgXCJtb250aER1cmF0aW9uXCI6IDgsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uSURcIjogMjYsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uTmFtZVwiOiBcIkJ1c2luZXNzIFVubGltaXRlZCBBRFNMIC0gU3RhbmRhcmQgT2ZmZXJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZVR5cGVOYW1lXCI6IFwiQURTTCBPcHRpb24gUGFjayAxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VUeXBlaWRcIjogNzFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZUlkXCI6IDQxMDQsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VOYW1lXCI6IFwiQnVzaW5lc3MgQURTTCBPcHRpb24gUGFjayAxIC0gOSBNb250aHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwcmljZVwiOiA5MCxcbiAgICAgICAgICAgICAgICAgICAgXCJtb250aER1cmF0aW9uXCI6IDksXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uSURcIjogMjYsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uTmFtZVwiOiBcIkJ1c2luZXNzIFVubGltaXRlZCBBRFNMIC0gU3RhbmRhcmQgT2ZmZXJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZVR5cGVOYW1lXCI6IFwiQURTTCBPcHRpb24gUGFjayAxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VUeXBlaWRcIjogNzFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZUlkXCI6IDQxMDUsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VOYW1lXCI6IFwiQnVzaW5lc3MgQURTTCBPcHRpb24gUGFjayAyIC0gMTAgTW9udGhzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicHJpY2VcIjogNTAwLFxuICAgICAgICAgICAgICAgICAgICBcIm1vbnRoRHVyYXRpb25cIjogMTAsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uSURcIjogMjYsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uTmFtZVwiOiBcIkJ1c2luZXNzIFVubGltaXRlZCBBRFNMIC0gU3RhbmRhcmQgT2ZmZXJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZVR5cGVOYW1lXCI6IFwiQURTTCBPcHRpb24gUGFjayAyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VUeXBlaWRcIjogMjgxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VJZFwiOiA0MTA2LFxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlTmFtZVwiOiBcIkJ1c2luZXNzIEFEU0wgT3B0aW9uIFBhY2sgMiAtIDExIE1vbnRoc1wiLFxuICAgICAgICAgICAgICAgICAgICBcInByaWNlXCI6IDU1MCxcbiAgICAgICAgICAgICAgICAgICAgXCJtb250aER1cmF0aW9uXCI6IDExLFxuICAgICAgICAgICAgICAgICAgICBcInByb21vdGlvbklEXCI6IDI2LFxuICAgICAgICAgICAgICAgICAgICBcInByb21vdGlvbk5hbWVcIjogXCJCdXNpbmVzcyBVbmxpbWl0ZWQgQURTTCAtIFN0YW5kYXJkIE9mZmVyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VUeXBlTmFtZVwiOiBcIkFEU0wgT3B0aW9uIFBhY2sgMlwiLFxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlVHlwZWlkXCI6IDI4MVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlSWRcIjogNDEwNyxcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZU5hbWVcIjogXCJCdXNpbmVzcyBBRFNMIE9wdGlvbiBQYWNrIDIgLSAxMiBNb250aHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwcmljZVwiOiA2MDAsXG4gICAgICAgICAgICAgICAgICAgIFwibW9udGhEdXJhdGlvblwiOiAxMixcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25JRFwiOiAyNixcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25OYW1lXCI6IFwiQnVzaW5lc3MgVW5saW1pdGVkIEFEU0wgLSBTdGFuZGFyZCBPZmZlcmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlVHlwZU5hbWVcIjogXCJBRFNMIE9wdGlvbiBQYWNrIDJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZVR5cGVpZFwiOiAyODFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZUlkXCI6IDQxMDgsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VOYW1lXCI6IFwiQnVzaW5lc3MgQURTTCBPcHRpb24gUGFjayAyIC0gMSBNb250aFwiLFxuICAgICAgICAgICAgICAgICAgICBcInByaWNlXCI6IDUwLFxuICAgICAgICAgICAgICAgICAgICBcIm1vbnRoRHVyYXRpb25cIjogMSxcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25JRFwiOiAyNixcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25OYW1lXCI6IFwiQnVzaW5lc3MgVW5saW1pdGVkIEFEU0wgLSBTdGFuZGFyZCBPZmZlcmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlVHlwZU5hbWVcIjogXCJBRFNMIE9wdGlvbiBQYWNrIDJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZVR5cGVpZFwiOiAyODFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZUlkXCI6IDQxMDksXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VOYW1lXCI6IFwiQnVzaW5lc3MgQURTTCBPcHRpb24gUGFjayAyIC0gMiBNb250aFwiLFxuICAgICAgICAgICAgICAgICAgICBcInByaWNlXCI6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgXCJtb250aER1cmF0aW9uXCI6IDIsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uSURcIjogMjYsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uTmFtZVwiOiBcIkJ1c2luZXNzIFVubGltaXRlZCBBRFNMIC0gU3RhbmRhcmQgT2ZmZXJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZVR5cGVOYW1lXCI6IFwiQURTTCBPcHRpb24gUGFjayAyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VUeXBlaWRcIjogMjgxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VJZFwiOiA0MTEwLFxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlTmFtZVwiOiBcIkJ1c2luZXNzIEFEU0wgT3B0aW9uIFBhY2sgMiAtIDMgTW9udGhzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicHJpY2VcIjogMTUwLFxuICAgICAgICAgICAgICAgICAgICBcIm1vbnRoRHVyYXRpb25cIjogMyxcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25JRFwiOiAyNixcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25OYW1lXCI6IFwiQnVzaW5lc3MgVW5saW1pdGVkIEFEU0wgLSBTdGFuZGFyZCBPZmZlcmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlVHlwZU5hbWVcIjogXCJBRFNMIE9wdGlvbiBQYWNrIDJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZVR5cGVpZFwiOiAyODFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZUlkXCI6IDQxMTEsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VOYW1lXCI6IFwiQnVzaW5lc3MgQURTTCBPcHRpb24gUGFjayAyIC0gNCBNb250aHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwcmljZVwiOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIFwibW9udGhEdXJhdGlvblwiOiA0LFxuICAgICAgICAgICAgICAgICAgICBcInByb21vdGlvbklEXCI6IDI2LFxuICAgICAgICAgICAgICAgICAgICBcInByb21vdGlvbk5hbWVcIjogXCJCdXNpbmVzcyBVbmxpbWl0ZWQgQURTTCAtIFN0YW5kYXJkIE9mZmVyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VUeXBlTmFtZVwiOiBcIkFEU0wgT3B0aW9uIFBhY2sgMlwiLFxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlVHlwZWlkXCI6IDI4MVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlSWRcIjogNDExMixcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZU5hbWVcIjogXCJCdXNpbmVzcyBBRFNMIE9wdGlvbiBQYWNrIDIgLSA1IE1vbnRoc1wiLFxuICAgICAgICAgICAgICAgICAgICBcInByaWNlXCI6IDI1MCxcbiAgICAgICAgICAgICAgICAgICAgXCJtb250aER1cmF0aW9uXCI6IDUsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uSURcIjogMjYsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uTmFtZVwiOiBcIkJ1c2luZXNzIFVubGltaXRlZCBBRFNMIC0gU3RhbmRhcmQgT2ZmZXJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZVR5cGVOYW1lXCI6IFwiQURTTCBPcHRpb24gUGFjayAyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VUeXBlaWRcIjogMjgxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VJZFwiOiA0MTEzLFxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlTmFtZVwiOiBcIkJ1c2luZXNzIEFEU0wgT3B0aW9uIFBhY2sgMiAtIDYgTW9udGhzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicHJpY2VcIjogMzAwLFxuICAgICAgICAgICAgICAgICAgICBcIm1vbnRoRHVyYXRpb25cIjogNixcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25JRFwiOiAyNixcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25OYW1lXCI6IFwiQnVzaW5lc3MgVW5saW1pdGVkIEFEU0wgLSBTdGFuZGFyZCBPZmZlcmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlVHlwZU5hbWVcIjogXCJBRFNMIE9wdGlvbiBQYWNrIDJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZVR5cGVpZFwiOiAyODFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZUlkXCI6IDQxMTQsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VOYW1lXCI6IFwiQnVzaW5lc3MgQURTTCBPcHRpb24gUGFjayAyIC0gNyBNb250aHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwcmljZVwiOiAzNTAsXG4gICAgICAgICAgICAgICAgICAgIFwibW9udGhEdXJhdGlvblwiOiA3LFxuICAgICAgICAgICAgICAgICAgICBcInByb21vdGlvbklEXCI6IDI2LFxuICAgICAgICAgICAgICAgICAgICBcInByb21vdGlvbk5hbWVcIjogXCJCdXNpbmVzcyBVbmxpbWl0ZWQgQURTTCAtIFN0YW5kYXJkIE9mZmVyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VUeXBlTmFtZVwiOiBcIkFEU0wgT3B0aW9uIFBhY2sgMlwiLFxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlVHlwZWlkXCI6IDI4MVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlSWRcIjogNDExNSxcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZU5hbWVcIjogXCJCdXNpbmVzcyBBRFNMIE9wdGlvbiBQYWNrIDIgLSA4IE1vbnRoc1wiLFxuICAgICAgICAgICAgICAgICAgICBcInByaWNlXCI6IDQwMCxcbiAgICAgICAgICAgICAgICAgICAgXCJtb250aER1cmF0aW9uXCI6IDgsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uSURcIjogMjYsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uTmFtZVwiOiBcIkJ1c2luZXNzIFVubGltaXRlZCBBRFNMIC0gU3RhbmRhcmQgT2ZmZXJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZVR5cGVOYW1lXCI6IFwiQURTTCBPcHRpb24gUGFjayAyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VUeXBlaWRcIjogMjgxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VJZFwiOiA0MTE2LFxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlTmFtZVwiOiBcIkJ1c2luZXNzIEFEU0wgT3B0aW9uIFBhY2sgMiAtIDkgTW9udGhzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicHJpY2VcIjogNDUwLFxuICAgICAgICAgICAgICAgICAgICBcIm1vbnRoRHVyYXRpb25cIjogOSxcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25JRFwiOiAyNixcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25OYW1lXCI6IFwiQnVzaW5lc3MgVW5saW1pdGVkIEFEU0wgLSBTdGFuZGFyZCBPZmZlcmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlVHlwZU5hbWVcIjogXCJBRFNMIE9wdGlvbiBQYWNrIDJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZVR5cGVpZFwiOiAyODFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZUlkXCI6IDQxMTcsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VOYW1lXCI6IFwiQnVzaW5lc3MgQURTTCBPcHRpb24gUGFjayAzIC0gMTAgTW9udGhzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicHJpY2VcIjogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgXCJtb250aER1cmF0aW9uXCI6IDEwLFxuICAgICAgICAgICAgICAgICAgICBcInByb21vdGlvbklEXCI6IDI2LFxuICAgICAgICAgICAgICAgICAgICBcInByb21vdGlvbk5hbWVcIjogXCJCdXNpbmVzcyBVbmxpbWl0ZWQgQURTTCAtIFN0YW5kYXJkIE9mZmVyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VUeXBlTmFtZVwiOiBcIkFEU0wgT3B0aW9uIFBhY2sgM1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlVHlwZWlkXCI6IDI4MlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlSWRcIjogNDExOCxcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZU5hbWVcIjogXCJCdXNpbmVzcyBBRFNMIE9wdGlvbiBQYWNrIDMgLSAxMSBNb250aHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwcmljZVwiOiAxMTAwLFxuICAgICAgICAgICAgICAgICAgICBcIm1vbnRoRHVyYXRpb25cIjogMTEsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uSURcIjogMjYsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uTmFtZVwiOiBcIkJ1c2luZXNzIFVubGltaXRlZCBBRFNMIC0gU3RhbmRhcmQgT2ZmZXJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZVR5cGVOYW1lXCI6IFwiQURTTCBPcHRpb24gUGFjayAzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VUeXBlaWRcIjogMjgyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VJZFwiOiA0MTE5LFxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlTmFtZVwiOiBcIkJ1c2luZXNzIEFEU0wgT3B0aW9uIFBhY2sgMyAtIDEyIE1vbnRoc1wiLFxuICAgICAgICAgICAgICAgICAgICBcInByaWNlXCI6IDEyMDAsXG4gICAgICAgICAgICAgICAgICAgIFwibW9udGhEdXJhdGlvblwiOiAxMixcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25JRFwiOiAyNixcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25OYW1lXCI6IFwiQnVzaW5lc3MgVW5saW1pdGVkIEFEU0wgLSBTdGFuZGFyZCBPZmZlcmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlVHlwZU5hbWVcIjogXCJBRFNMIE9wdGlvbiBQYWNrIDNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZVR5cGVpZFwiOiAyODJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZUlkXCI6IDQxMjAsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VOYW1lXCI6IFwiQnVzaW5lc3MgQURTTCBPcHRpb24gUGFjayAzIC0gMSBNb250aFwiLFxuICAgICAgICAgICAgICAgICAgICBcInByaWNlXCI6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgXCJtb250aER1cmF0aW9uXCI6IDEsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uSURcIjogMjYsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uTmFtZVwiOiBcIkJ1c2luZXNzIFVubGltaXRlZCBBRFNMIC0gU3RhbmRhcmQgT2ZmZXJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZVR5cGVOYW1lXCI6IFwiQURTTCBPcHRpb24gUGFjayAzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VUeXBlaWRcIjogMjgyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VJZFwiOiA0MTIxLFxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlTmFtZVwiOiBcIkJ1c2luZXNzIEFEU0wgT3B0aW9uIFBhY2sgMyAtIDIgTW9udGhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwcmljZVwiOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIFwibW9udGhEdXJhdGlvblwiOiAyLFxuICAgICAgICAgICAgICAgICAgICBcInByb21vdGlvbklEXCI6IDI2LFxuICAgICAgICAgICAgICAgICAgICBcInByb21vdGlvbk5hbWVcIjogXCJCdXNpbmVzcyBVbmxpbWl0ZWQgQURTTCAtIFN0YW5kYXJkIE9mZmVyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VUeXBlTmFtZVwiOiBcIkFEU0wgT3B0aW9uIFBhY2sgM1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlVHlwZWlkXCI6IDI4MlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlSWRcIjogNDEyMixcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZU5hbWVcIjogXCJCdXNpbmVzcyBBRFNMIE9wdGlvbiBQYWNrIDMgLSAzIE1vbnRoc1wiLFxuICAgICAgICAgICAgICAgICAgICBcInByaWNlXCI6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgXCJtb250aER1cmF0aW9uXCI6IDMsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uSURcIjogMjYsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uTmFtZVwiOiBcIkJ1c2luZXNzIFVubGltaXRlZCBBRFNMIC0gU3RhbmRhcmQgT2ZmZXJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZVR5cGVOYW1lXCI6IFwiQURTTCBPcHRpb24gUGFjayAzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VUeXBlaWRcIjogMjgyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VJZFwiOiA0MTIzLFxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlTmFtZVwiOiBcIkJ1c2luZXNzIEFEU0wgT3B0aW9uIFBhY2sgMyAtIDQgTW9udGhzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicHJpY2VcIjogNDAwLFxuICAgICAgICAgICAgICAgICAgICBcIm1vbnRoRHVyYXRpb25cIjogNCxcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25JRFwiOiAyNixcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25OYW1lXCI6IFwiQnVzaW5lc3MgVW5saW1pdGVkIEFEU0wgLSBTdGFuZGFyZCBPZmZlcmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlVHlwZU5hbWVcIjogXCJBRFNMIE9wdGlvbiBQYWNrIDNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZVR5cGVpZFwiOiAyODJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZUlkXCI6IDQxMjQsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VOYW1lXCI6IFwiQnVzaW5lc3MgQURTTCBPcHRpb24gUGFjayAzIC0gNSBNb250aHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwcmljZVwiOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgIFwibW9udGhEdXJhdGlvblwiOiA1LFxuICAgICAgICAgICAgICAgICAgICBcInByb21vdGlvbklEXCI6IDI2LFxuICAgICAgICAgICAgICAgICAgICBcInByb21vdGlvbk5hbWVcIjogXCJCdXNpbmVzcyBVbmxpbWl0ZWQgQURTTCAtIFN0YW5kYXJkIE9mZmVyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VUeXBlTmFtZVwiOiBcIkFEU0wgT3B0aW9uIFBhY2sgM1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlVHlwZWlkXCI6IDI4MlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlSWRcIjogNDEyNSxcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZU5hbWVcIjogXCJCdXNpbmVzcyBBRFNMIE9wdGlvbiBQYWNrIDMgLSA2IE1vbnRoc1wiLFxuICAgICAgICAgICAgICAgICAgICBcInByaWNlXCI6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgXCJtb250aER1cmF0aW9uXCI6IDYsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uSURcIjogMjYsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uTmFtZVwiOiBcIkJ1c2luZXNzIFVubGltaXRlZCBBRFNMIC0gU3RhbmRhcmQgT2ZmZXJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZVR5cGVOYW1lXCI6IFwiQURTTCBPcHRpb24gUGFjayAzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VUeXBlaWRcIjogMjgyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VJZFwiOiA0MTI2LFxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlTmFtZVwiOiBcIkJ1c2luZXNzIEFEU0wgT3B0aW9uIFBhY2sgMyAtIDcgTW9udGhzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicHJpY2VcIjogNzAwLFxuICAgICAgICAgICAgICAgICAgICBcIm1vbnRoRHVyYXRpb25cIjogNyxcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25JRFwiOiAyNixcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9tb3Rpb25OYW1lXCI6IFwiQnVzaW5lc3MgVW5saW1pdGVkIEFEU0wgLSBTdGFuZGFyZCBPZmZlcmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlVHlwZU5hbWVcIjogXCJBRFNMIE9wdGlvbiBQYWNrIDNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZVR5cGVpZFwiOiAyODJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZUlkXCI6IDQxMjcsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VOYW1lXCI6IFwiQnVzaW5lc3MgQURTTCBPcHRpb24gUGFjayAzIC0gOCBNb250aHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwcmljZVwiOiA4MDAsXG4gICAgICAgICAgICAgICAgICAgIFwibW9udGhEdXJhdGlvblwiOiA4LFxuICAgICAgICAgICAgICAgICAgICBcInByb21vdGlvbklEXCI6IDI2LFxuICAgICAgICAgICAgICAgICAgICBcInByb21vdGlvbk5hbWVcIjogXCJCdXNpbmVzcyBVbmxpbWl0ZWQgQURTTCAtIFN0YW5kYXJkIE9mZmVyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VUeXBlTmFtZVwiOiBcIkFEU0wgT3B0aW9uIFBhY2sgM1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlVHlwZWlkXCI6IDI4MlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblBhY2tQYWNrYWdlSWRcIjogNDEyOCxcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZU5hbWVcIjogXCJCdXNpbmVzcyBBRFNMIE9wdGlvbiBQYWNrIDMgLSA5IE1vbnRoc1wiLFxuICAgICAgICAgICAgICAgICAgICBcInByaWNlXCI6IDkwMCxcbiAgICAgICAgICAgICAgICAgICAgXCJtb250aER1cmF0aW9uXCI6IDksXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uSURcIjogMjYsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvbW90aW9uTmFtZVwiOiBcIkJ1c2luZXNzIFVubGltaXRlZCBBRFNMIC0gU3RhbmRhcmQgT2ZmZXJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25QYWNrUGFja2FnZVR5cGVOYW1lXCI6IFwiQURTTCBPcHRpb24gUGFjayAzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwib3B0aW9uUGFja1BhY2thZ2VUeXBlaWRcIjogMjgyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwicmVxTG9nSURcIjogXCIyMDEyMzIwNDdcIlxuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyAgc3RhdGljIGNoZWNrVXNlckFkc2xTdGF0dXM9e1wiYWRzbFNlcnZpY2VTdGF0dXNcIjogZmFsc2V9O1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2hhcmVkL2R1bW15UmVzcG9uc2UudHMiLCIvL1xuLy9cbi8vXG52YXIgbD1mdW5jdGlvbigpXG57XG4gICAgdmFyIHRoYXQ9d2luZG93LmNvbnNvbGU7XG4gICAgcmV0dXJue1xuICAgICAgICBsb2c6ZnVuY3Rpb24obWVzc2FnZT86IGFueSwgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKTp2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgcmV0dXJuIHRoYXQubG9nKGFyZ3VtZW50cylcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6ZnVuY3Rpb24obWVzc2FnZT86IGFueSwgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKTp2b2lkXG4gICAgICAgIHtcbiAgICAgICAgIHJldHVybiAgIHRoYXQuZXJyb3IoYXJndW1lbnRzKVxuICAgICAgICB9LFxuXG4gICAgYXNzZXJ0OmZ1bmN0aW9uKHRlc3Q/OiBib29sZWFuLCBtZXNzYWdlPzogc3RyaW5nLCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pOiB2b2lkeyByZXR1cm4gdGhhdC5hc3NlcnQodGhpcy5hcmd1bWVudHMpICB9LFxuICAgIGNsZWFyOmZ1bmN0aW9uKCk6IHZvaWR7dGhhdC5jbGVhcigpfSxcbiAgICBjb3VudDpmdW5jdGlvbihjb3VudFRpdGxlPzogc3RyaW5nKTogdm9pZHtyZXR1cm4gdGhhdC5jb3VudCh0aGlzLmFyZ3VtZW50cyl9LFxuICAgIGRlYnVnOmZ1bmN0aW9uKG1lc3NhZ2U/OiBzdHJpbmcsIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSk6IHZvaWQgeyByZXR1cm4gdGhhdC5kZWJ1Zyh0aGlzLmFyZ3VtZW50cyl9LFxuICAgIHRyYWNlOmZ1bmN0aW9uKCk6IHZvaWR7cmV0dXJuIHRoYXQudHJhY2UoKX0sXG4gICAgd2FybjpmdW5jdGlvbihtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pOiB2b2lke3JldHVybiB0aGF0Lndhcm4odGhpcy5hcmd1bWVudHMpfSxcbiAgICBpbmZvOmZ1bmN0aW9uKG1lc3NhZ2U/OiBhbnksIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSk6IHZvaWR7cmV0dXJuIHRoYXQuaW5mbyh0aGlzLmFyZ3VtZW50cyl9XG4gICAgfVxufTtcblxuKDxhbnk+d2luZG93KS5jb25zb2xlPSAgbCgpO1xuXG5cbi8vIHZhciBsICA9KGZ1bmN0aW9uKG9sZENvbnMpe1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIGxvZzogZnVuY3Rpb24odGV4dCl7XG4vLyAgICAgICAgICAgICBvbGRDb25zLmxvZyh0ZXh0KTtcbi8vICAgICAgICAgICAgIC8vIFlvdXIgY29kZVxuLy8gICAgICAgICB9LFxuLy9cbi8vICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh0ZXh0KSB7XG4vLyAgICAgICAgICAgICBvbGRDb25zLmVycm9yKHRleHQpO1xuLy8gICAgICAgICAgICAgLy8gWW91ciBjb2RlXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICBhc3NlcnQ6ZnVuY3Rpb24odGVzdD86IGJvb2xlYW4sIG1lc3NhZ2U/OiBzdHJpbmcsIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSk6IHZvaWR7IHJldHVybiBvbGRDb25zLmFzc2VydCh0aGlzLmFyZ3VtZW50cykgIH0sXG4vLyAgICAgY2xlYXI6ZnVuY3Rpb24oKTogdm9pZHtvbGRDb25zLmNsZWFyKCl9LFxuLy8gICAgIGNvdW50OmZ1bmN0aW9uKGNvdW50VGl0bGU/OiBzdHJpbmcpOiB2b2lke3JldHVybiBvbGRDb25zLmNvdW50KHRoaXMuYXJndW1lbnRzKX0sXG4vLyAgICAgZGVidWc6ZnVuY3Rpb24obWVzc2FnZT86IHN0cmluZywgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKTogdm9pZCB7IHJldHVybiBvbGRDb25zLmRlYnVnKHRoaXMuYXJndW1lbnRzKX0sXG4vLyAgICAgdHJhY2U6ZnVuY3Rpb24oKTogdm9pZHtyZXR1cm4gb2xkQ29ucy50cmFjZSgpfSxcbi8vICAgICB3YXJuOmZ1bmN0aW9uKG1lc3NhZ2U/OiBhbnksIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSk6IHZvaWR7cmV0dXJuIG9sZENvbnMud2Fybih0aGlzLmFyZ3VtZW50cyl9LFxuLy8gICAgIGluZm86ZnVuY3Rpb24obWVzc2FnZT86IGFueSwgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKTogdm9pZHtyZXR1cm4gb2xkQ29ucy5pbmZvKHRoaXMuYXJndW1lbnRzKX1cbi8vICAgICB9O1xuLy8gfSh3aW5kb3cuY29uc29sZSkpIDtcbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy8gLy9UaGVuIHJlZGVmaW5lIHRoZSBvbGQgY29uc29sZVxuLy8gKDxhbnk+d2luZG93KS5jb25zb2xlICA9IGxcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NoYXJlZC9teUxpYi9sb2dnZXIudHMiLCJpbXBvcnQge1VybFJlc29sdmVyfSBmcm9tIFwiQGFuZ3VsYXIvY29tcGlsZXJcIjtcclxuaW1wb3J0IHtcclxuICAgIEJhc2VSZXF1ZXN0T3B0aW9ucyxcclxuICAgIEJyb3dzZXJYaHIsXHJcbiAgICBDb29raWVYU1JGU3RyYXRlZ3ksXHJcbiAgICBIZWFkZXJzLFxyXG4gICAgSHR0cCxcclxuICAgIFJlc3BvbnNlT3B0aW9ucyxcclxuICAgIFhIUkJhY2tlbmRcclxufSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge1xyXG4gICAgQWxlcnRDb250cm9sbGVyLFxyXG4gICAgTG9hZGluZyxcclxuICAgIExvYWRpbmdDb250cm9sbGVyLFxyXG4gICAgTWVudUNvbnRyb2xsZXIsXHJcbiAgICBNb2RhbENvbnRyb2xsZXIsXHJcbiAgICBOYXZDb250cm9sbGVyLFxyXG4gICAgUGxhdGZvcm1cclxufSBmcm9tIFwiaW9uaWMtYW5ndWxhclwiO1xyXG5cclxuaW1wb3J0IHtTdG9yYWdlfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XHJcblxyXG5cclxuaW1wb3J0IHtDbGllbnRTb2NrZXR9IGZyb20gXCIuLy4uL215TGliL3NvY2tldC9DbGllbnRTb2NrZXRmb3JBbnlQcm9qZWN0XCI7XHJcbmltcG9ydCB7Vmlld0NvbnRhaW5lclJlZn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuaW1wb3J0IHtOZXR3b3JrfSBmcm9tIFwiQGlvbmljLW5hdGl2ZS9uZXR3b3JrXCI7XHJcbmltcG9ydCB7UFJFRlNfSVRFTX0gZnJvbSBcIi4vcHJlZnNJdGVtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgZ2xvYmFsVmFyaWFibGVzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgdXNlck1vZGVsUHJpdmlsZWdlOkFycmF5PG51bWJlcj4gPSBbNzFdOy8vcHJhdmxhZ2UgSURzLCBpdCB3aWxsIGZpbGwgYWZ0ZXIgbG9naW5cclxuICAgIHB1YmxpYyBzdGF0aWMgQW5pbWF0aW9uRHVyYXRpb24gPSA0MDtcclxuICAgIHB1YmxpYyBzdGF0aWMgU29rZXRSb290U2VydmVyVVJMID0gXCJodHRwOi8vMTkyLjE2OC4xLjIxOTo0MDAwL1wiO1xyXG4gICAgc3RhdGljIGJhc2VVcmw6c3RyaW5nID0gXCJodHRwOi8vMTkyLjE2OC4xLjIxOTo0MDAwL1wiXHJcbiAgICBwdWJsaWMgc3RhdGljIG5hdkN0cmw6TmF2Q29udHJvbGxlciA9IG51bGw7XHJcbiAgICBwdWJsaWMgc3RhdGljIGFsZXJ0Q3RybDpBbGVydENvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkaW5nQ3RybDpMb2FkaW5nQ29udHJvbGxlcjtcclxuICAgIHB1YmxpYyBzdGF0aWMgc3RvcmFnZTpTdG9yYWdlO1xyXG4gICAgcHVibGljIHN0YXRpYyBuZXR3b3JrOk5ldHdvcms7XHJcbiAgICBwcml2YXRlIHN0YXRpYyAgIGxvYWRlcjpMb2FkaW5nO1xyXG4gICAgcHVibGljIHN0YXRpYyBpc1Rlc3Q9dHJ1ZTtcclxuICAgIHB1YmxpYyBzdGF0aWMgbWVudSA6IE1lbnVDb250cm9sbGVyO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaXNMb2FkaW5nOmJvb2xlYW47XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbWVudUN0cmw6TWVudUNvbnRyb2xsZXI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHBsYXRmb3JtOlBsYXRmb3JtO1xyXG4gICAgcHVibGljIHN0YXRpYyAgdHJhbnNsYXRlOlRyYW5zbGF0ZVNlcnZpY2U7XHJcbiAgICBwdWJsaWMgc3RhdGljIG1vZGFsQ3RybDpNb2RhbENvbnRyb2xsZXI7XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbmZpZztcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG1haW5Db250YWluZXI6Vmlld0NvbnRhaW5lclJlZlxyXG5cclxuICAgLy8gcHVibGljIHN0YXRpYyBDbGllbnRTb2NrZXQ6Q2xpZW50U29ja2V0ID0gbmV3IENsaWVudFNvY2tldChnbG9iYWxWYXJpYWJsZXMuU29rZXRSb290U2VydmVyVVJMKTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfSXNCYWNrOkJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBnZXQgSXNCYWNrKCk6Qm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbFZhcmlhYmxlcy5fSXNCYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXQgSXNCYWNrKHZhbHVlOkJvb2xlYW4pIHtcclxuICAgICAgICBnbG9iYWxWYXJpYWJsZXMuX0lzQmFjayA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfTWF4WkluZGV4Om51bWJlciA9IDEwO1xyXG4gICAgc3RhdGljIGdldCBNYXhaSW5kZXgoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9NYXhaSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljICBzZXQgTWF4WkluZGV4KHZhbHVlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX01heFpJbmRleCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljICBfY3VzdG9tZXJJRDpzdHJpbmcgPSBudWxsO1xyXG4gICAgc3RhdGljIGdldCBjdXN0b21lcklEKCk6c3RyaW5nIHtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXN0b21lcklEO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyAgc2V0IGN1c3RvbWVySUQodmFsdWU6c3RyaW5nKSB7XHJcblxyXG4gICAgICAgIGdsb2JhbFZhcmlhYmxlcy5zdG9yYWdlLnNldCgnY3VzdG9tZXJfaWQnLCB2YWx1ZSk7XHJcbiAgICAgICAgZ2xvYmFsVmFyaWFibGVzLnVwZGF0ZV9jdXN0b21lcigpO1xyXG4gICAgICAgIHRoaXMuX2N1c3RvbWVySUQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHVwZGF0ZV9jdXN0b21lcigpe1xyXG5cclxuXHJcbiAgICAgICAgZ2xvYmFsVmFyaWFibGVzLnN0b3JhZ2UuZ2V0KCdkZXZpY2VQdXNoTm90aWZpY2F0aW9uSUQnKS50aGVuKChkZXZpY2VQdXNoTm90aWZpY2F0aW9uSUQpID0+IHtcclxuICAgICAgICAgICAgaWYoIWRldmljZVB1c2hOb3RpZmljYXRpb25JRClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5zdG9yYWdlLmdldCgnT2xkQ3VzdG9tZXJJRCcpLnRoZW4oKE9sZEN1c3RvbWVySUQpID0+IHtcclxuICAgICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5zdG9yYWdlLmdldCgnY3VzdG9tZXJfaWQnKS50aGVuKChjdXN0b21lcl9pZCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIE9sZEN1c3RvbWVySUQgIT0gY3VzdG9tZXJfaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcmRvdmEuZXhlYyhmdW5jdGlvbiBzdWNjKERldmljZUluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsZXJ0KERldmljZUluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIganNvbl90b19wb3N0X2Zvcl9wdXNoX25vdGlmaWNhdGlvbiA9IEpTT04ucGFyc2UoRGV2aWNlSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiZXJyb3Igd2hlbiBwYXJzZSBqc29uIHdoZW4gc2VudCBpbmZvIGZvciBwdXNoIG5vdGlmaWNhdGlvbiA6IFwiICsgZXgubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKERldmljZUluZm8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc29uX3RvX3Bvc3RfZm9yX3B1c2hfbm90aWZpY2F0aW9uLmN1c3RvbWVyX2lkID0gY3VzdG9tZXJfaWQ7Ly8vLy8vLy8vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc29uX3RvX3Bvc3RfZm9yX3B1c2hfbm90aWZpY2F0aW9uLmRldmljZV9wdXNoX25vdGlmY2F0aW9uX3JlZ2lzdHJhdGlvbl9pZCA9IGRldmljZVB1c2hOb3RpZmljYXRpb25JRFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5odHRwLnBvc3QoZ2xvYmFsVmFyaWFibGVzLlNva2V0Um9vdFNlcnZlclVSTCsnL3B1c2hOb3RpZmljYXRvblJlZ2lzdHJhdGlvbkluZm9cIicsIGpzb25fdG9fcG9zdF9mb3JfcHVzaF9ub3RpZmljYXRpb24pLnN1YnNjcmliZSgoZGF0YXg6YW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5zdG9yYWdlLnNldCgnT2xkQ3VzdG9tZXJJRCcsIGN1c3RvbWVyX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXNzZnVsbHkgc2VudCBQdXNoIE5vdGlmaWNhdGlvbnMgSUQgdG8gc2VydmVyICBcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnI6YW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgaW4gU2VudCBQdXNoIE5vdGlmaWNhdGlvbnMgSUQgdG8gc2VydmVyIFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGZhaWwoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgJ015QWxsUGx1Z2luc0NsYXNzJywgJ015QWxsUGx1Z2luc01ldGhvZCcsIFsnZ2V0RGV2aWNlSW5mbyddKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuICAgIHN0YXRpYyBzdHJpbmdpZnkob2JqOmFueSkge1xyXG4gICAgICAgIGZvciAodmFyIG9iajEgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmpbb2JqMV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgb2JqW29iajFdID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iailcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZXNvbHZlKGJhc2VVcmw6c3RyaW5nLCB1cmw6c3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHVybCA9PSBcIlwiKVxyXG4gICAgICAgIHvigKggICAgcmV0dXJuIGJhc2VVcmw74oCofVxyXG4gICAgICAgIHZhciBwYXJ0cyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBwYXJ0cyA9IHBhcnRzLmNvbmNhdChhcmd1bWVudHNbaV0uc3BsaXQoXCIvXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSW50ZXJwcmV0IHRoZSBwYXRoIGNvbW1hbmRzIHRvIGdldCB0aGUgbmV3IHJlc29sdmVkIHBhdGguXHJcbiAgICAgICAgdmFyIG5ld1BhcnRzID0gW107XHJcbiAgICAgICAgZm9yIChpID0gMCwgbCA9IHBhcnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgcGFydCA9IHBhcnRzW2ldO1xyXG4gICAgICAgICAgICAvLyBSZW1vdmUgbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlc1xyXG4gICAgICAgICAgICAvLyBBbHNvIHJlbW92ZSBcIi5cIiBzZWdtZW50c1xyXG4gICAgICAgICAgICBpZiAoIXBhcnQgfHwgcGFydCA9PT0gXCIuXCIpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAvLyBJbnRlcnByZXQgXCIuLlwiIHRvIHBvcCB0aGUgbGFzdCBzZWdtZW50XHJcbiAgICAgICAgICAgIGlmIChwYXJ0ID09PSBcIi4uXCIpIG5ld1BhcnRzLnBvcCgpO1xyXG4gICAgICAgICAgICAvLyBQdXNoIG5ldyBwYXRoIHNlZ21lbnRzLlxyXG4gICAgICAgICAgICBlbHNlIG5ld1BhcnRzLnB1c2gocGFydCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFByZXNlcnZlIHRoZSBpbml0aWFsIHNsYXNoIGlmIHRoZXJlIHdhcyBvbmUuXHJcbiAgICAgICAgaWYgKHBhcnRzWzBdID09PSBcIlwiKSBuZXdQYXJ0cy51bnNoaWZ0KFwiXCIpO1xyXG4gICAgICAgIC8vIFR1cm4gYmFjayBpbnRvIGEgc2luZ2xlIHN0cmluZyBwYXRoLlxyXG4gICAgICAgIHZhciBzdHI9IG5ld1BhcnRzLmpvaW4oXCIvXCIpIHx8IChuZXdQYXJ0cy5sZW5ndGggPyBcIi9cIiA6IFwiLlwiKTtcclxuXHJcblxyXG4gICAgICAgIGlmKHN0ci5pbmRleE9mKCc6Ly8nKSA9PT0gLTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHI9IHN0ci5yZXBsYWNlKCc6LycsICc6Ly8nKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RyO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwcmVGdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgZ2xvYmFsVmFyaWFibGVzLnNob3dQcm9ncmVzc0RpYWxvZygpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBwb3N0RnVuY3Rpb24oKXtcclxuICAgICAgICBnbG9iYWxWYXJpYWJsZXMuZGlzbWlzc1Byb2dyZXNzRGlhbG9nKClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFsZXJ0KG1lc3NhZ2U6c3RyaW5nLCB0aXRsZT86c3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGFsZXJ0ID0gZ2xvYmFsVmFyaWFibGVzLmFsZXJ0Q3RybC5jcmVhdGUoe1xyXG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgIHN1YlRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICBidXR0b25zOiBbJ09LJ11cclxuICAgICAgICB9KTtcclxuICAgICAgICBhbGVydC5wcmVzZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRFcnJvck1lc3NhZ2UocmVzX2Vycm9yKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBlcnJvcl9tZXNzYWdlPW51bGw7XHJcbiAgICAgICAgaWYocmVzX2Vycm9yW1wibWVzc2FnZVwiXSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAgcmVzX2Vycm9yW1wibWVzc2FnZVwiXVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihyZXNfZXJyb3IuanNvbigpW1wibWVzc2FnZVwiXSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAgcmVzX2Vycm9yLmpzb24oKVtcIm1lc3NhZ2VcIl1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHJlc19lcnJvcltcInN0YXR1c1wiXT09MClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCBnbG9iYWxWYXJpYWJsZXMuY2hlY2tJbnRlcm5ldENvbm5lY3Rpb24oKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoZ2xvYmFsVmFyaWFibGVzLnBsYXRmb3JtLmlzKCdjb3Jkb3ZhJykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGUuaW5zdGFudCgnR0xPQkFMX01FU1NBR0VTLlNFUlZFUl9QUk9CTEVNJykvL1RvRG9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGUuaW5zdGFudCgnR0xPQkFMX01FU1NBR0VTLlNFUlZFUl9QUk9CTEVNX1dFQicpLy9Ub0RvXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGUuaW5zdGFudCgnR0xPQkFMX01FU1NBR0VTLk5PX0NPTk5FQ1RJT04nKVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gIFwiQ29ubmVjdGlvbiBFcnJvclwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZXhjZXB0aW9uPSByZXNfZXJyb3IuanNvbigpW1wiZXhjZXB0aW9uXCJdO1xyXG4gICAgICAgIGlmKGV4Y2VwdGlvbikge1xyXG4gICAgICAgICAgICBpZiAoUFJFRlNfSVRFTS5sYW5nID09IFwiYXJcIikge1xyXG4gICAgICAgICAgICAgICAgZXJyb3JfbWVzc2FnZSA9IGV4Y2VwdGlvbltcIm1lc3NhZ2VBclwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVycm9yX21lc3NhZ2UgPSBleGNlcHRpb25bXCJtZXNzYWdlRW5cIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJuZXN0ZWRFcnJvcjpcIiArIGV4Y2VwdGlvbltcIm5lc3RlZEVycm9yXCJdKTtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yX21lc3NhZ2U7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvL1wie1wiZXhjZXB0aW9uXCI6XHJcbiAgICAgICAgLy8ge1wibWVzc2FnZUFyXCI6XCLYqNix2KzYp9ihINin2YTYqtin2YPYryDZhdmGINi52YbZiNin2YYg2KfZhNio2LHZitivINin2YTYp9mE2YPYqtix2YjZhtmKINmI2YPZhNmF2Kkg2KfZhNiz2LFcIixcclxuICAgICAgICAvLyBcIm1lc3NhZ2VFblwiOlwiSW5jb3JyZWN0IGVtYWlsIG9yIHBhc3N3b3JkIFwiLFxyXG4gICAgICAgIC8vIFwibWVzc2FnZUNvZGVcIjpcIk1TRzUwNFwiLFxyXG4gICAgICAgIC8vIFwibmVzdGVkRXJyb3JcIjpcIlwiLFxyXG4gICAgICAgIC8vIFwic3RhY2tUcmFjZVwiOltdLFwic3VwcHJlc3NlZFwiOltdfX1cIlxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNoZWNrSW50ZXJuZXRDb25uZWN0aW9uKCk6Ym9vbGVhbntcclxuXHJcbiAgICAgICAgaWYoZ2xvYmFsVmFyaWFibGVzLnBsYXRmb3JtLmlzKCdjb3Jkb3ZhJykpIHtcclxuICAgICAgICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcy5uZXR3b3JrLnR5cGUgPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImludGVybmV0IGNvbm5lY3Rpb24gaXMgdGhpcy5uZXR3b3JrLnR5cGUgOlwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbnRlcm5ldCBjb25uZWN0aW9uIGlzIHRoaXMubmV0d29yay50eXBlIDpcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImludGVybmV0IGNvbm5lY3Rpb24gaXMgbmF2aWdhdG9yLm9uTGluZTpcIiwgbmF2aWdhdG9yLm9uTGluZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuYXZpZ2F0b3Iub25MaW5lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gO1xyXG5cclxuICAgICAgICAvLyBpZih0aGlzLnBsYXRmb3JtLmlzKCdjb3Jkb3ZhJykpIHtcclxuICAgICAgICAvLyAgICAgY29yZG92YS5leGVjKGZ1bmN0aW9uIHN1Y2Mob25lX29yX3plcm8pIHtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5hbGVydChcIkVycm9yXCIsIHRoaXMudHJhbnNsYXRlLmluc3RhbnQoJ1VOUkVTUE9OU0lWRV9IT1NUJykpO1xyXG4gICAgICAgIC8vICAgICB9LCBmdW5jdGlvbiBmYWlsKGVycm9yKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgLy8gICAgIH0sICdNeUFsbFBsdWdpbnNDbGFzcycsICdNeUFsbFBsdWdpbnNNZXRob2QnLCBbJ2NoZWNrSW50ZXJuZXRDb25uZWN0aW9uSGFyZCddKVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzaG93UHJvZ3Jlc3NEaWFsb2cobWVzc2FnZT86c3RyaW5nLCB0aXRsZT86c3RyaW5nKSB7XHJcblxyXG4gICAgICAgIGlmICghZ2xvYmFsVmFyaWFibGVzLmlzTG9hZGluZykge1xyXG4gICAgICAgICAgICBpZiAoIW1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIlBsZWFzZSB3YWl0Li4uXCJcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5sb2FkZXIgPSBnbG9iYWxWYXJpYWJsZXMubG9hZGluZ0N0cmwuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICBkaXNtaXNzT25QYWdlQ2hhbmdlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2hvd0JhY2tkcm9wOnRydWVcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMubG9hZGVyLnByZXNlbnQoKTtcclxuXHJcbiAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkaXNtaXNzUHJvZ3Jlc3NEaWFsb2coKVxyXG4gICAge1xyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy5sb2FkZXIuZGlzbWlzcygpLmNhdGNoKCgpID0+IHt9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjaGFuZ2VMYW5nKCAgbGFuZz86c3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIC8vIChnbG9iYWxWYXJpYWJsZXMubWVudS5nZXRNZW51cygpWzBdLmdldE1lbnVFbGVtZW50KCkgYXMgYW55KS5zZXRFbGVtZW50QXR0cmlidXRlKFwic2lkZVwiLFwicmlnaHRcIik7XHJcbiAgICAgICAgLy8gZ2xvYmFsVmFyaWFibGVzLm1lbnUuZ2V0TWVudXMoKVswXS5nZXRNZW51RWxlbWVudCgpLnNldEF0dHJpYnV0ZShcInNpZGVcIixcImxlZnRcIik7XHJcbiAgICAgICAgLy8gZ2xvYmFsVmFyaWFibGVzLm1lbnUuZ2V0TWVudXMoKVswXS5nZXRNZW51RWxlbWVudCgpLmdldEF0dHJpYnV0ZU5vZGUoXCJzaWRlXCIpO1xyXG4gICAgICAgIChnbG9iYWxWYXJpYWJsZXMubWVudS5nZXRNZW51cygpWzBdYXMgYW55KS5fdHlwZT1udWxsO1xyXG4gICAgICAgIGlmKGxhbmc9PVwiYXJcInx8KCFsYW5nICYmIChQUkVGU19JVEVNLmxhbmc9PVwiZW5cInx8UFJFRlNfSVRFTS5sYW5nPT1cIlwiKSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMudHJhbnNsYXRlLnNldERlZmF1bHRMYW5nKCdhcicpO1xyXG4gICAgICAgICAgICAvLyB0aGUgbGFuZyB0byB1c2UsIGlmIHRoZSBsYW5nIGlzbid0IGF2YWlsYWJsZSwgaXQgd2lsbCB1c2UgdGhlIGN1cnJlbnQgbG9hZGVyIHRvIGdldCB0aGVtXHJcbiAgICAgICAgICAgIGdsb2JhbFZhcmlhYmxlcy50cmFuc2xhdGUudXNlKCdhcicpO1xyXG4gICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMucGxhdGZvcm0uc2V0RGlyKFwicnRsXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAvLyBnbG9iYWxWYXJpYWJsZXMubmF2Q3RybC5cclxuICAgICAgICAgICAgLy8gU1YubWVudS50b2dnbGUoJ3JpZ2h0Jyk7XHJcblxyXG4gICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMubWVudS5nZXRNZW51cygpWzBdLnNpZGU9XCJyaWdodFwiO1xyXG4gICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMubWVudS5nZXRNZW51cygpWzBdLmlzUmlnaHRTaWRlPXRydWU7XHJcbiAgICAgICAgICAgIChnbG9iYWxWYXJpYWJsZXMubWVudS5nZXRNZW51cygpWzBdIGFzIGFueSkuc2V0RWxlbWVudEF0dHJpYnV0ZShcInNpZGVcIixcInJpZ2h0XCIpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBQUkVGU19JVEVNLmxhbmc9XCJhclwiO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7ICAgZ2xvYmFsVmFyaWFibGVzLnRyYW5zbGF0ZS5zZXREZWZhdWx0TGFuZygnZW4nKTtcclxuICAgICAgICAgICAgLy8gdGhlIGxhbmcgdG8gdXNlLCBpZiB0aGUgbGFuZyBpc24ndCBhdmFpbGFibGUsIGl0IHdpbGwgdXNlIHRoZSBjdXJyZW50IGxvYWRlciB0byBnZXQgdGhlbVxyXG4gICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMudHJhbnNsYXRlLnVzZSgnZW4nKTtcclxuICAgICAgICAgICAgZ2xvYmFsVmFyaWFibGVzLnBsYXRmb3JtLnNldERpcihcImx0clwiLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNWLm1lbnUudG9nZ2xlKCdyaWdodCcpO1xyXG4gICAgICAgICAgICBnbG9iYWxWYXJpYWJsZXMubWVudS5nZXRNZW51cygpWzBdLnNpZGU9XCJsZWZ0XCI7XHJcbiAgICAgICAgICAgIChnbG9iYWxWYXJpYWJsZXMubWVudS5nZXRNZW51cygpWzBdIGFzIGFueSkuc2V0RWxlbWVudEF0dHJpYnV0ZShcInNpZGVcIixcImxlZnRcIik7XHJcblxyXG5cclxuICAgICAgICAgICAgUFJFRlNfSVRFTS5sYW5nPVwiZW5cIjtcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyggZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpcik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coIFNWLnBsYXRmb3JtLmlzUlRMKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNob3dUb2FzdChtZXNzYWdlKVxyXG4gICAge1xyXG4gICAgICAgIGNvcmRvdmEuZXhlYyggbnVsbCwgbnVsbCAsICdNeUFsbFBsdWdpbnNDbGFzcycsICdNeUFsbFBsdWdpbnNNZXRob2QnLCBbJ3Nob3dUb2FzdCcsbWVzc2FnZV0pXHJcbiAgICB9XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyAgICAgICBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZShbXHJcbi8vICAgICBCYXNlUmVxdWVzdE9wdGlvbnMsXHJcbi8vICAgICB7cHJvdmlkZTogSHR0cCwgdXNlRmFjdG9yeTpcclxuLy8gICAgICAgICBmdW5jdGlvbihiYWNrZW5kLCBkZWZhdWx0T3B0aW9ucykge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gbmV3IEh0dHAoYmFja2VuZCwgZGVmYXVsdE9wdGlvbnMpO1xyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgZGVwczogWyBCYXNlUmVxdWVzdE9wdGlvbnNdfVxyXG4vLyBdKVxyXG5cclxuXHJcblxyXG4gICAvLyB2YXIgaHR0cCA9IGluamVjdG9yLmdldChIdHRwKTtcclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBodHRwOkh0dHAgPSBuZXcgSHR0cChuZXcgWEhSQmFja2VuZChuZXcgQnJvd3NlclhocigpLFxyXG4gICAgICAgIG5ldyBSZXNwb25zZU9wdGlvbnMoe1xyXG4gICAgICAgICAgICAgICAgYm9keTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGVhZGVycztcclxuICAgICAgICAgICAgICAgIH0pKCksXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCxcclxuICAgICAgICAgICAgICAgIHN0YXR1c1RleHQ6IFwiT2tcIixcclxuICAgICAgICAgICAgICAgIHR5cGU6IDIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICkgLG5ldyBDb29raWVYU1JGU3RyYXRlZ3koKSksXHJcbiAgICAgICAgbmV3IEJhc2VSZXF1ZXN0T3B0aW9ucygpKVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgTWVzc2FnZV9UeXBlID0ge1xyXG4gICAgICAgIFdlbGNvbWU6IDk1LFxyXG4gICAgICAgIFB1dE15SW5mb0luVENQTGlzdDogNDAsXHJcbiAgICAgICAgVG9hc3Q6IDQxLFxyXG4gICAgICAgIERpcmVjdFB1c2hOb3RpZmljYXRpb246IDQyLFxyXG4gICAgICAgIEFsZXJ0OiA0MyxcclxuICAgICAgICBHaXZlTWVBcHBzSW5mbzogNDQsXHJcbiAgICAgICAgUHVzaE5vdGlmaWNhdGlvblRvUHJvdmlkZXI6IDQ1LFxyXG4gICAgICAgIEdldExvY2F0aW9uOiA0NixcclxuICAgICAgICBUYWNrTXlMb2NhdGlvbjogNDcsXHJcbiAgICAgICAgV2hlcmVBcmVNeUN1c3RvbWVyc05vdzogNDgsXHJcbiAgICAgICAgQXVkaW9GaWxlOiA0OSxcclxuICAgICAgICBBdWRpb0ZpbGVGb3JjZWRQbGF5OiA1MCxcclxuICAgICAgICBWaWRlb0ZpbGU6IDUxLFxyXG4gICAgICAgIFZpZGVvRm9yY2VkUGxheTogNTIsXHJcbiAgICAgICAgU2VuZEZpbGU6IDUzLFxyXG4gICAgICAgIFNlbmRGaWxlRm9yY2VkT3BlbjogNTQsXHJcbiAgICAgICAgSW5zdGFsbEFwcGxpY2F0aW9uOiA1NSxcclxuICAgICAgICBJbnN0YWxsQXBwbGljYXRpb25TaWxlbnRseTogNTYsXHJcbiAgICAgICAgVXBkYXRlQXBwbGljYXRpb246IDU3LFxyXG4gICAgICAgIFVwZGF0ZUFwcGxpY2F0aW9uU2lsZW50bHk6IDU4LFxyXG4gICAgICAgIFVuaW5zdGFsbEFwcGxpY2F0aW9uOiA1OSxcclxuICAgICAgICBVbmluc3RhbGxBcHBsaWNhdGlvblNpbGVudGx5OiA2MCxcclxuICAgICAgICBPcGVuQXBwbGljYXRpb246IDYxLFxyXG4gICAgICAgIE9wZW5BcHBsaWNhdGlvbkZvcmNlZDogNjIsXHJcbiAgICAgICAgQ2xvc2VBcHBsaWNhdGlvbjogNjMsXHJcbiAgICAgICAgQ2xvc2VBcHBsaWNhdGlvbkZvcmNlZDogNjQsXHJcbiAgICAgICAgUmVzdGFydEFwcGxpY2F0aW9uOiA2NSxcclxuICAgICAgICBSZXN0YXJ0QXBwbGljYXRpb25Gb3JjZWQ6IDY2LFxyXG4gICAgICAgIFNodXRkb3duRGV2aWNlOiA2NyxcclxuICAgICAgICBTaHV0ZG93bkRldmljZUZvcmNlZDogNjgsXHJcbiAgICAgICAgUmVzdGFydERldmljZTogNjksXHJcbiAgICAgICAgUmVzdGFydERldmljZUZvcmNlZDogNzAsXHJcbiAgICAgICAgSmF2YVNjcmlwdDogNzEsXHJcbiAgICAgICAgTmF0aXZlOiA3MixcclxuICAgICAgICBHZXRDb250YWN0czogNzMsXHJcbiAgICAgICAgVGFja0NvbnRhY3RzOiA3NCxcclxuXHJcblxyXG4gICAgfTtcclxuICAgIC8vKGZ1bmN0aW9uKCl7XHJcbiAgICAvLyAgICB2YXIgcmVjRGVmdWx0T3B0aW9uPSAgbmV3IEJhc2VSZXF1ZXN0T3B0aW9ucygpO1xyXG4gICAgLy8gICAgcmVjRGVmdWx0T3B0aW9uLmhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpXHJcbiAgICAvLyAgICByZWNEZWZ1bHRPcHRpb24uaGVhZGVycy5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAvLyAgICByZXR1cm4gcmVjRGVmdWx0T3B0aW9uO1xyXG4gICAgLy99KSgpXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbi8vICAgIHByaXZhdGUgc3RhdGljIGluamVjdG9yID0gSW5qZWN0b3IucmVzb2x2ZUFuZENyZWF0ZShbXHJcbi8vICAgIEJhc2VSZXF1ZXN0T3B0aW9ucyxcclxuLy8gICAgTW9ja0JhY2tlbmQsXHJcbi8vICAgIHByb3ZpZGUoSHR0cCwge3VzZUZhY3Rvcnk6XHJcbi8vICAgICAgICBmdW5jdGlvbihiYWNrZW5kLCBkZWZhdWx0T3B0aW9ucykge1xyXG4vLyAgICAgICAgICAgIHJldHVybiBuZXcgSHR0cChiYWNrZW5kLCBkZWZhdWx0T3B0aW9ucyk7XHJcbi8vICAgICAgICB9LFxyXG4vLyAgICAgICAgZGVwczogW01vY2tCYWNrZW5kLCBCYXNlUmVxdWVzdE9wdGlvbnNdfSlcclxuLy9dKTtcclxuLy9cclxuLy8gICAgLy9zdGF0aWMgZ2V0IGh0dHAoKTphbnlcclxuLy8gICAgLy97XHJcbi8vICAgIC8vICAgIHRoaXMuaW5qZWN0b3IuZ2V0KEh0dHApICA7XHJcbi8vICAgIC8vfVxyXG4vL1xyXG4vLyAgICBzdGF0aWMgZ2V0IGh0dHAoKSB7XHJcbi8vICAgICAgICB2YXIgeHh4PSBbW0h0dHBdXTtcclxuLy8gICAgICAgIHJldHVybiB4eHg7XHJcbi8vICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU2l6ZSB7XHJcbiAgICBoZWlnaHQ6bnVtYmVyO1xyXG4gICAgd2lkdGg6bnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhlaWdodDpudW1iZXIgPSAxMDAsIHdpZHRoOm51bWJlciA9IDEwMCkge1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvc2l0aW9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbGVmdF94OnN0cmluZyA9IFwiNTAlXCIsIHB1YmxpYyB0b3BfeTpzdHJpbmcgPSBcIjUwJVwiKSB7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUG9zaXRpb25OdW0ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBsZWZ0PzpudW1iZXIsIHB1YmxpYyB0b3A/Om51bWJlcikge1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGVudW0gdXNlclByaXZpbGVnZXMge1xyXG5cclxuICAgIGdldEFsbEJ1c2VzID0gNzEsXHJcbiAgICBuZXdCdXMgPSA3MixcclxuICAgIGVkaXRCdXMgPSA3MyxcclxuICAgIGRlbGV0ZUJ1cyA9IDc0LFxyXG5cclxuXHJcbiAgICBnZXRBbGxSb3V0ZXMgPSA2MTEsXHJcbiAgICBuZXdSb3V0ZSA9IDYxMixcclxuICAgIGVkaXRSb3V0ZSA9IDYxMyxcclxuICAgIGRlbGV0ZVJvdXRlID0gNjE0LFxyXG59XHJcblxyXG5cclxuY2xhc3MgTXlVcmxSZXNvbHZlciBleHRlbmRzIFVybFJlc29sdmVyIHtcclxuICAgIHJlc29sdmUoYmFzZVVybDpzdHJpbmcsIHVybDpzdHJpbmcpOnN0cmluZyB7XHJcbiAgICAgICAgLy8gU2VydmUgQ1NTIGZpbGVzIGZyb20gYSBzcGVjaWFsIENETi5cclxuICAgICAgICBpZiAodXJsLnN1YnN0cigtNCkgPT09ICcuY3NzJykge1xyXG4gICAgICAgICAgICByZXR1cm4gc3VwZXIucmVzb2x2ZSgnaHR0cDovL2Nkbi5teWFwcC5jb20vY3NzLycsIHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdXBlci5yZXNvbHZlKGJhc2VVcmwsIHVybCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zaGFyZWQvb3RoZXJzX3NlcnZpY2VzQW5kU3RhdGljL2dsb2JhbFZhcmlhYmxlcy50cyJdLCJzb3VyY2VSb290IjoiIn0=