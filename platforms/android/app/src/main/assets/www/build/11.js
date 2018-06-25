webpackJsonp([11],{

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddflightPageModule", function() { return AddflightPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addflight__ = __webpack_require__(433);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddflightPageModule = /** @class */ (function () {
    function AddflightPageModule() {
    }
    AddflightPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addflight__["a" /* AddflightPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addflight__["a" /* AddflightPage */]),
            ],
        })
    ], AddflightPageModule);
    return AddflightPageModule;
}());

//# sourceMappingURL=addflight.module.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddflightPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(245);
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
 * Generated class for the AddflightPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddflightPage = /** @class */ (function () {
    function AddflightPage(api, navCtrl, navParams) {
        this.api = api;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddflightPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddflightPage');
    };
    AddflightPage.prototype.addflightt = function () {
        // this.api.addFlight()
    };
    AddflightPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-addflight',template:/*ion-inline-start:"/Users/Hassan/Desktop/Ionic/zip/src/pages/addflight/addflight.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>addflight</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div style="height: 30%;"></div>\n    <ion-list>\n            <ion-item>\n              <ion-label floating>Source Country</ion-label>\n              <ion-select [(ngModel)]="gender">\n                <ion-option value="f">USA</ion-option>\n              </ion-select>\n            </ion-item>\n\n            <ion-item>\n              <ion-label floating>Destination Country</ion-label>\n              <ion-select [(ngModel)]="gender">\n                <ion-option value="f">Pakistan</ion-option>\n              </ion-select>\n            </ion-item>\n            \n            <ion-item>\n                <ion-label floating></ion-label>\n                <ion-input type="date"></ion-input>\n           </ion-item>\n\n           <button ion-button full round item-center >Add</button>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Hassan/Desktop/Ionic/zip/src/pages/addflight/addflight.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], AddflightPage);
    return AddflightPage;
}());

//# sourceMappingURL=addflight.js.map

/***/ })

});
//# sourceMappingURL=11.js.map