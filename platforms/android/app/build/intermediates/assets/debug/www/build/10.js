webpackJsonp([10],{

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightsPageModule", function() { return FlightsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flights__ = __webpack_require__(620);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__flights__["a" /* FlightsPage */]),
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

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FlightsPage = /** @class */ (function () {
    function FlightsPage(modal, http, navCtrl, navParams, platform, api, alert) {
        var _this = this;
        this.modal = modal;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.api = api;
        this.alert = alert;
        this.flightss = [];
        var user = JSON.parse(localStorage.getItem('zip_user'));
        this.api.getFlights(user.id).then(function (data) {
            _this.flightss = data;
            console.log(_this.flightss);
        });
    }
    FlightsPage.prototype.ionViewDidLoad = function () {
        this.platform.ready().then(function () {
        });
    };
    FlightsPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        var user = JSON.parse(localStorage.getItem('zip_user'));
        this.api.getFlights(user.id).then(function (data) {
            _this.flightss = data;
            refresher.complete();
            console.log('re run');
        });
    };
    FlightsPage.prototype.addflight = function () {
        // var  scr = 'USA';
        // var scity = 'New York';
        // var dcr = 'Pakistan';
        // var dct = 'Lahore';
        // var time = '15:34:23';
        // var userid =  '1';
        // this.api.addFlight(scr, scity, dcr, dct, time, userid)
        this.modal.create('AddflightPage').present();
        // this.api.getFlights(user.id).then( (data) => {
        //   // this.flightss = data
        //   console.log(data);
        // })
    };
    FlightsPage.prototype.flights = function () {
        // this.navCtrl.push('AddflightPage')
    };
    FlightsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-flights',template:/*ion-inline-start:"/Users/Hassan/Desktop/Ionic/src/pages/flights/flights.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>FLIGHTS</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg">\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n\n  <ion-card id=\'asd\' *ngIf="flightss.length == 0" class="Main">\n    <ion-card-content text-center>\n      <ion-card-title>\n        Travelling Somewhere?\n      </ion-card-title>\n      <p>\n        Post a flight and start making money!\n      </p>\n      <br>\n      <br>\n      <button style=" border: 1px solid #4d077c; border-radius: 0 40px !important;" ion-button outline item-center (click)=\'addflight()\'>Add Flight</button>\n    </ion-card-content>\n  </ion-card>\n  <ion-fab right bottom *ngIf="flightss.length != 0" (click)=\'flights()\'>\n    <button id=\'tha\' ion-fab color="primary">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n  <div *ngIf="flightss.length != 0">\n    <div *ngFor=\'let flight of flightss\'>\n      <ion-card text-center class="crd">\n        <ion-grid>\n          <ion-row style="height: 70px;">\n            <ion-col col-4 align-self-center>\n              <h1>{{flight.source_country}}</h1>\n            </ion-col>\n\n            <ion-col col-4 align-self-center>\n              <h1>{{flight.source_city}}</h1>\n            </ion-col>\n\n            <ion-col col-4 align-self-center>\n              <h2>\n                <span>{{flight.date}}</span>\n              </h2>\n            </ion-col>\n\n            <ion-col col-4 align-self-center>\n              <h1>{{flight.destination_country}}</h1>\n            </ion-col>\n            <ion-col col-4 align-self-center>\n              <h1>{{flight.destination_city}}</h1>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <button ion-button outline style="width: 48%;">Remove</button>\n            <button ion-button style="width: 48%;">Edit</button>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/Hassan/Desktop/Ionic/src/pages/flights/flights.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FlightsPage);
    return FlightsPage;
}());

//# sourceMappingURL=flights.js.map

/***/ })

});
//# sourceMappingURL=10.js.map