webpackJsonp([2],{

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up__ = __webpack_require__(447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignUpPageModule = /** @class */ (function () {
    function SignUpPageModule() {
    }
    SignUpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */]]
        })
    ], SignUpPageModule);
    return SignUpPageModule;
}());

//# sourceMappingURL=sign-up.module.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(246);
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
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignUpPage = /** @class */ (function () {
    function SignUpPage(alert, load, api, navCtrl, navParams) {
        this.alert = alert;
        this.load = load;
        this.api = api;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = { firstname: 'hassan', lastname: 'ali', address: 'asdasdasdas', phone: '03000417591', email: 'megatubelite@gmail.com', password: 'qwerty', rp: 'qwerty' };
    }
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
    };
    SignUpPage.prototype.register = function () {
        var l = this.load.create({});
        l.setContent('Signing In...');
        l.present();
        var that = this;
        if (this.user.password == this.user.rp) {
            this.api.register(this.user.firstname, this.user.lastname, this.user.address, this.user.phone, this.user.email, this.user.password).then(function (r) {
                console.log(r);
                if (r) {
                    that.navCtrl.pop();
                    l.dismiss();
                }
                else {
                    that.alert.create({ title: 'Invalid Username or Password', buttons: ['OK'] }).present();
                    l.dismiss();
                }
            });
        }
        else {
            this.alert.create({ title: 'Passwords do not match.', buttons: ['OK'] }).present();
        }
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sign-up',template:/*ion-inline-start:"/Users/Hassan/Desktop/Ionic/zip/src/pages/sign-up/sign-up.html"*/'<!--\n  Generated template for the SignUpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sign Up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list>\n\n  <ion-item>\n    <ion-label floating>First Name</ion-label>\n    <ion-input type="text" [(ngModel)]="user.firstname"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Last Name</ion-label>\n    <ion-input type="text" [(ngModel)]="user.lastname"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Address</ion-label>\n    <ion-input type="text" [(ngModel)]="user.address"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Phone</ion-label>\n    <ion-input type="text" [(ngModel)]="user.phone"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Email</ion-label>\n    <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Retype Password</ion-label>\n    <ion-input type="password" [(ngModel)]="user.rp"></ion-input>\n  </ion-item>\n  <br> <br>\n  <div style="width: 100%;display: flex;justify-content: center;">\n    <button ion-button round (click)=\'register()\'> Register </button>\n  </div>\n\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Hassan/Desktop/Ionic/zip/src/pages/sign-up/sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ })

});
//# sourceMappingURL=2.js.map