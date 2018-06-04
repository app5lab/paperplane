webpackJsonp([10],{

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostPageModule", function() { return AddPostPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(125);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account__ = __webpack_require__(432);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_post__ = __webpack_require__(426);
>>>>>>> ae1630a576233fde526bb69701ba306f95d35791
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddPostPageModule = /** @class */ (function () {
    function AddPostPageModule() {
    }
    AddPostPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_post__["a" /* AddPostPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_post__["a" /* AddPostPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__add_post__["a" /* AddPostPage */]]
        })
    ], AddPostPageModule);
    return AddPostPageModule;
}());

//# sourceMappingURL=add-post.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 432:
=======
/***/ 426:
>>>>>>> ae1630a576233fde526bb69701ba306f95d35791
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPostPage; });
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
 * Generated class for the AddPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddPostPage = /** @class */ (function () {
    function AddPostPage(api, navCtrl, navParams) {
        this.api = api;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
<<<<<<< HEAD
        this.user = { firstname: 'hassan', lastname: 'ali', address: 'asdasdasdas', phone: '03000417591', email: 'megatubelite@gmail.com', password: 'qwerty', rp: 'qwerty' };
        this.settings = 'profile';
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/imgs/l.gif\"/>\n      <h3 style=\"text-align:center;\">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspLoading...</h3",
            duration: 30000
        });
        // loading.present();
=======
>>>>>>> ae1630a576233fde526bb69701ba306f95d35791
    }
    AddPostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPostPage');
    };
    AddPostPage.prototype.add = function () {
        this.api.getPostbyLoc('USA', 'Pakistan');
        //this.api.addPost('Macbook', '13inch 256ssd i7 8gb', '', '', '', '50', 'USA', 'Pakistan', '3', 'apple.com/macbook')
    };
    AddPostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
<<<<<<< HEAD
            selector: 'page-account',template:/*ion-inline-start:"C:\Users\tooth\OneDrive\Desktop\zip\src\pages\account\account.html"*/'<!--\n\n  Generated template for the AccountPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-segment [(ngModel)]="settings" color="light">\n\n      <ion-segment-button value="profile" checked>\n\n        Profile\n\n      </ion-segment-button>\n\n      <ion-segment-button value="info">\n\n        Info\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div [ngSwitch]="settings">\n\n    <ion-list *ngSwitchCase="\'profile\'">\n\n      <ion-card>\n\n        <div style="width: 100%;display: flex;justify-content: center; ">\n\n          <ion-avatar>\n\n            <img src="assets/imgs/logo.jpg">\n\n          </ion-avatar>\n\n        </div>\n\n        <ion-card-content>\n\n          <h2 style="text-align:center;">Hassan Ali</h2>\n\n        </ion-card-content>\n\n        <ion-list >\n\n           \n\n          <ion-item>\n\n              <ion-label floating>Address</ion-label>\n\n            <ion-input [disabled]="true" type="text" [(ngModel)]="user.address"></ion-input>\n\n          </ion-item>\n\n       \n\n        \n\n          <ion-item>\n\n            \n\n              <ion-label floating>Phone</ion-label>\n\n            <ion-input [disabled]="true" type="text" [(ngModel)]="user.phone"></ion-input>\n\n          </ion-item>\n\n        \n\n          <ion-item>\n\n              <ion-label floating>Email</ion-label>\n\n            <ion-input [disabled]="true" type="text"[(ngModel)]="user.email"></ion-input>\n\n          </ion-item>\n\n        \n\n\n\n\n\n          \n\n          <ion-item>\n\n          \n\n              <ion-badge  style="height:30%;" item-end>  <ion-icon name="create"></ion-icon>Edit</ion-badge>\n\n             \n\n          </ion-item>\n\n        </ion-list>\n\n\n\n      </ion-card>\n\n      <button style="width: 100%;" ion-button round outline (click)="logout()">Log Out</button>\n\n    </ion-list>\n\n  \n\n    <ion-list *ngSwitchCase="\'info\'">\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tooth\OneDrive\Desktop\zip\src\pages\account\account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], AccountPage);
    return AccountPage;
=======
            selector: 'page-add-post',template:/*ion-inline-start:"/Users/Hassan/Desktop/Ionic/zip/src/pages/add-post/add-post.html"*/'<!--\n  Generated template for the AddPostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>add-post</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button (click)=\'add()\'> Add </button>\n</ion-content>\n'/*ion-inline-end:"/Users/Hassan/Desktop/Ionic/zip/src/pages/add-post/add-post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], AddPostPage);
    return AddPostPage;
>>>>>>> ae1630a576233fde526bb69701ba306f95d35791
}());

//# sourceMappingURL=add-post.js.map

/***/ })

});
//# sourceMappingURL=10.js.map