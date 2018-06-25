webpackJsonp([13],{

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account__ = __webpack_require__(431);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccountPageModule = /** @class */ (function () {
    function AccountPageModule() {
    }
    AccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */]
            ]
        })
    ], AccountPageModule);
    return AccountPageModule;
}());

//# sourceMappingURL=account.module.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(126);
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
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountPage = /** @class */ (function () {
    function AccountPage(app, loadingCtrl, navCtrl, navParams) {
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = { firstname: 'hassan', lastname: 'ali', address: 'asdasdasdas', phone: '03000417591', email: 'megatubelite@gmail.com', password: 'qwerty', rp: 'qwerty' };
        this.settings = 'profile';
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/imgs/l.gif\"/>\n      <h3 style=\"text-align:center;\">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspLoading...</h3",
            duration: 30000
        });
        // loading.present();
    }
    AccountPage.prototype.logout = function () {
        this.app.getRootNav().setRoot('LoginPage');
    };
    AccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountPage');
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-account',template:/*ion-inline-start:"/Users/Hassan/Desktop/Ionic/zip/src/pages/account/account.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-segment [(ngModel)]="settings" color="light">\n      <ion-segment-button value="profile" checked>\n        Profile\n      </ion-segment-button>\n      <ion-segment-button value="info">\n        Info\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div [ngSwitch]="settings">\n    <ion-list *ngSwitchCase="\'profile\'">\n      <ion-card>\n        <div style="width: 100%;display: flex;justify-content: center; ">\n          <ion-avatar>\n            <img src="assets/imgs/logo.jpg">\n          </ion-avatar>\n        </div>\n        <ion-card-content>\n          <h2 style="text-align:center;">Hassan Ali</h2>\n        </ion-card-content>\n        <ion-list >\n           \n          <ion-item>\n              <ion-label floating>Address</ion-label>\n            <ion-input [disabled]="true" type="text" [(ngModel)]="user.address"></ion-input>\n          </ion-item>\n       \n        \n          <ion-item>\n            \n              <ion-label floating>Phone</ion-label>\n            <ion-input [disabled]="true" type="text" [(ngModel)]="user.phone"></ion-input>\n          </ion-item>\n        \n          <ion-item>\n              <ion-label floating>Email</ion-label>\n            <ion-input [disabled]="true" type="text"[(ngModel)]="user.email"></ion-input>\n          </ion-item>\n        \n\n\n          \n          <ion-item>\n          \n              <ion-badge  style="height:30%;" item-end>  <ion-icon name="create"></ion-icon>Edit</ion-badge>\n             \n          </ion-item>\n        </ion-list>\n\n      </ion-card>\n      <button style="width: 100%;" ion-button round outline (click)="logout()">Log Out</button>\n    </ion-list>\n  \n    <ion-list *ngSwitchCase="\'info\'">\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Hassan/Desktop/Ionic/zip/src/pages/account/account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ })

});
//# sourceMappingURL=13.js.map