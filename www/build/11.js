webpackJsonp([11],{

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostPageModule", function() { return AddPostPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_post__ = __webpack_require__(431);
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

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(249);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddPostPage = /** @class */ (function () {
    function AddPostPage(image, file, api, navCtrl, navParams) {
        this.image = image;
        this.file = file;
        this.api = api;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.files = [];
    }
    AddPostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPostPage');
    };
    AddPostPage.prototype.upload = function () {
        var _this = this;
        var options = {
            quality: 50,
            maximumImagesCount: 3
        };
        // this.camera.getPicture( options ).then( ( imageData ) =>
        // {
        //   // imageData is either a base64 encoded string or a file URI
        //   // If it's base64:
        //   this.files = 'data:image/jpeg;base64,' + imageData;
        // }, ( err ) =>
        // {
        //   // Handle error
        //   console.log(err);
        // } );
        this.image.getPictures(options).then(function (results) {
            _this.files = results;
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
            }
        }, function (err) { });
    };
    AddPostPage.prototype.add = function () {
        this.api.getPostbyLoc('USA', 'Pakistan');
        //this.api.addPost('Macbook', '13inch 256ssd i7 8gb', '', '', '', '50', 'USA', 'Pakistan', '3', 'apple.com/macbook')
    };
    AddPostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-post',template:/*ion-inline-start:"C:\Users\tooth\OneDrive\Desktop\zip\src\pages\add-post\add-post.html"*/'<!--\n\n  Generated template for the AddPostPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>add-post</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n\n\n        <ion-item>\n\n          <ion-label floating>Title</ion-label>\n\n          <ion-input type="text"></ion-input>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-label floating>Discription</ion-label>\n\n          <ion-input type="text"></ion-input>\n\n        </ion-item>\n\n      \n\n        <div>\n\n          <ion-item>\n\n            <ion-label floating>Images</ion-label>\n\n            <ion-input type="text"></ion-input>\n\n          </ion-item>\n\n          <button ion-button full round (click)="upload()">\n\n            Choose Images\n\n          </button>\n\n          <img src="{{file}}" *ngFor="let file of files">\n\n          \n\n        </div>\n\n\n\n          <ion-item>\n\n              <ion-label floating>Traveler Reward</ion-label>\n\n              <ion-input type="number"></ion-input>\n\n            </ion-item>\n\n            \n\n            <ion-item>\n\n                <ion-label floating>From</ion-label>\n\n                <ion-input type="text"></ion-input>\n\n              </ion-item>\n\n\n\n           <ion-item>\n\n                <ion-label floating>To</ion-label>\n\n                <ion-input type="text"></ion-input>\n\n           </ion-item>\n\n\n\n           <ion-item>\n\n              <ion-label floating>Note</ion-label>\n\n              <ion-input type="text"></ion-input>\n\n         </ion-item>\n\n\n\n         <ion-item>\n\n            <ion-label floating>Item_url</ion-label>\n\n            <ion-input type="text"></ion-input>\n\n       </ion-item>\n\n\n\n       <ion-item>\n\n          <ion-label floating></ion-label>\n\n          <ion-input type="date"></ion-input>\n\n     </ion-item>\n\n\n\n     <ion-item>\n\n        <ion-label floating>Quantity</ion-label>\n\n        <ion-input type="number"></ion-input>\n\n   </ion-item>\n\n\n\n    </ion-list>\n\n  <button ion-button full round (click)=\'add()\'> Add </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tooth\OneDrive\Desktop\zip\src\pages\add-post\add-post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */], File, __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], AddPostPage);
    return AddPostPage;
}());

//# sourceMappingURL=add-post.js.map

/***/ })

});
//# sourceMappingURL=11.js.map