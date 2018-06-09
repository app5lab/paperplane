webpackJsonp([6],{

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightsPageModule", function() { return FlightsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flights__ = __webpack_require__(433);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FlightsPageModule = /** @class */ (function () {
    function FlightsPageModule() {
    }
    FlightsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__flights__["a" /* FlightsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__flights__["a" /* FlightsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__flights__["a" /* FlightsPage */]
            ]
        })
    ], FlightsPageModule);
    return FlightsPageModule;
}());

//# sourceMappingURL=flights.module.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the FlightsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FlightsPage = /** @class */ (function () {
    function FlightsPage(http, navCtrl, navParams, platform, googleMaps) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.googleMaps = googleMaps;
    }
    FlightsPage.prototype.ionViewDidLoad = function () {
        this.platform.ready().then(function () {
        });
    };
    FlightsPage.prototype.addFlight = function () {
        // var data = {
        //   firstname:'Hassan',
        //   lastname:'Ali',
        //   address:'363 E1 Johar Town',
        //   email:'ali@appslab.io',
        //   phone:'03134698550',
        //   password:'test123',
        //   key:'create',
        //   sec:'((|m5DlhrplfKx1'
        // }
        var data = {
            email: 'hassan@appslab.io',
            password: '123456',
            key: 'login',
            sec: '((|m5DlhrplfKx1'
        };
        this.http.post('https://zipship.io/manage-data.php', data).subscribe(function (res) {
            console.log((res));
        });
        //console.log( md5( '123456' ) )//= '$2y$10$MIVI73kil.V3WvspSjg87eK/QsGgH3NPUgqj8cIq0URYEyFBKO2fa' ); 
        // this.http.get( 'https://zipship.io/retrieve-data.php' ).subscribe( res =>
        // {
        //   console.log(JSON.parse( res._body )); 
        // })
    };
    FlightsPage.prototype.flights = function () {
        this.navCtrl.push('AddflightPage');
    };
    FlightsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-flights',template:/*ion-inline-start:"C:\Users\tooth\OneDrive\Desktop\zip\src\pages\flights\flights.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>flights</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n <ion-content padding class="bg">\n\n \n\n<ion-card id=\'asd\' *ngIf="true" class="Main" >\n\n  <ion-card-content text-center>\n\n    <ion-card-title>\n\n      Travelling Somewhere?\n\n    </ion-card-title>\n\n    <p>\n\n      Post a flight and start making money!\n\n    </p>\n\n    <br><br>\n\n    <button ion-button outline item-center (click)=\'addFlight()\' (click)=\'flights()\'>Add Flight</button>\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n\n\n\n\n<ion-card text-center class="crd">\n\n  <ion-grid>\n\n    <ion-row style="height: 70px;">\n\n        <ion-col col-4 align-self-center>\n\n            <h1>USA</h1>\n\n        </ion-col>\n\n        \n\n        <ion-col col-4 align-self-center>\n\n          <h2>\n\n            <span>11/06</span>\n\n          </h2>\n\n        </ion-col>\n\n\n\n        <ion-col col-4 align-self-center>\n\n            <h1>Pakistan</h1>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <button ion-button outline style="width: 48%;">Remove</button>\n\n        <button ion-button style="width: 48%;">Edit</button>\n\n    </ion-row>\n\n  </ion-grid>\n\n  \n\n</ion-card>\n\n<ion-card text-center class="crd1">\n\n    <ion-grid>\n\n      <ion-row style="height: 70px;">\n\n          <ion-col col-4 align-self-center>\n\n              <h1>Paris</h1>\n\n          </ion-col>\n\n          \n\n          <ion-col col-4 align-self-center>\n\n            <h2>\n\n              <span>11/06</span>\n\n            </h2>\n\n          </ion-col>\n\n  \n\n          <ion-col col-4 align-self-center>\n\n              <h1>Pakistan</h1>\n\n          </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n          <button ion-button outline style="width: 48%;">Remove</button>\n\n          <button ion-button style="width: 48%;">Edit</button>\n\n      </ion-row>\n\n    </ion-grid>\n\n    \n\n  </ion-card>\n\n\n\n<ion-card text-center class="crd2">\n\n    <ion-grid>\n\n      <ion-row style="height: 70px;">\n\n          <ion-col col-4 align-self-center>\n\n              <h1>UAE</h1>\n\n          </ion-col>\n\n          \n\n          <ion-col col-4 align-self-center>\n\n            <h2>\n\n              <span>11/06</span>\n\n            </h2>\n\n          </ion-col>\n\n  \n\n          <ion-col col-4 align-self-center>\n\n              <h1>Pakistan</h1>\n\n          </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n          <button ion-button outline style="width: 48%;">Remove</button>\n\n          <button ion-button style="width: 48%;">Edit</button>\n\n      </ion-row>\n\n    </ion-grid>\n\n    \n\n  </ion-card>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tooth\OneDrive\Desktop\zip\src\pages\flights\flights.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */]])
    ], FlightsPage);
    return FlightsPage;
}());

//# sourceMappingURL=flights.js.map

/***/ })

});
//# sourceMappingURL=6.js.map