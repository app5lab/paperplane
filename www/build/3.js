webpackJsonp([3],{

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(431);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(246);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(api, Keyboard, platform, alert, navCtrl, navParams, load) {
        this.api = api;
        this.Keyboard = Keyboard;
        this.platform = platform;
        this.alert = alert;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.load = load;
        this.username = 'hassan@appslab.io';
        this.password = '123456';
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        // this.platform.ready().then( () =>
        // {
        //   this.Keyboard.disableScroll( true );
        // } );
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        // this.platform.ready().then( () =>
        // {
        //   this.Keyboard.disableScroll( false );
        // } );
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var l = this.load.create({});
        l.setContent('Signing In...');
        l.present();
        this.api.login(this.username, this.password).then(function (r) {
            if (r) {
                _this.navCtrl.setRoot('TabsPage');
                l.dismiss();
            }
            else {
                _this.alert.create({ title: 'Invalid Username or Password', buttons: ['OK'] }).present();
                l.dismiss();
            }
        });
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push('SignUpPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\tooth\OneDrive\Desktop\zip\src\pages\login\login.html"*/'<ion-content padding class="getstart">\n\n    <img src="assets/imgs/final.png" alt="" style="height: 350px;">\n\n      <ion-item class="in">\n\n        <ion-label fixed>\n\n          <ion-icon name="person"></ion-icon>\n\n          Username</ion-label>\n\n        <ion-input type="text" [(ngModel)]="username"></ion-input>\n\n      </ion-item>\n\n    <br>\n\n    <ion-item class="in">\n\n      <ion-label fixed>\n\n        <ion-icon name="lock"></ion-icon>\n\n         Password</ion-label>\n\n      <ion-input type="password" [(ngModel)]="password"></ion-input>\n\n    </ion-item>\n\n<br>\n\n    \n\n    <button id=\'t\' ion-button full round (click)="login()">Sign In</button>\n\n    <br>\n\n    <br>\n\n    <br> \n\n    <div style="width: 100%;display: flex;justify-content: center;">\n\n      <button ion-button outline color=light round style="width: 60%;" (click)=\'signup()\'>\n\n        Sign Up?\n\n      </button>   \n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tooth\OneDrive\Desktop\zip\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=3.js.map