webpackJsonp([12],{

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostPageModule", function() { return AddPostPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_post__ = __webpack_require__(432);
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

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(248);
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
    function AddPostPage(image, api, navCtrl, navParams) {
        this.image = image;
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
            maximumImagesCount: 3,
            outputType: 1
        };
        this.image.getPictures(options).then(function (results) {
            var i = 0;
            results.forEach(function (Img) {
                _this.files[i++] = 'data:image/jpeg;base64,' + Img;
            });
            console.log(_this.files[0]);
        }, function (err) { });
    };
    AddPostPage.prototype.add = function () {
        // this.api.getPostbyLoc('USA', 'Pakistan')
        this.api.addPost('Macbook', '13inch 256ssd i7 8gb', this.files[0], '', '', '50', 'USA', 'Pakistan', '3', 'apple.com/macbook');
    };
    AddPostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-post',template:/*ion-inline-start:"/Users/Hassan/Desktop/Ionic/zip/src/pages/add-post/add-post.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>add-post</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n          <ion-label floating>Title</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label floating>Description</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n      \n        <div>\n          <ion-item>\n            <ion-label floating>Images</ion-label>\n            <ion-input type="text"></ion-input>\n          </ion-item>\n          <button ion-button full round (click)="upload()">\n            Choose Images\n          </button>\n          <img src="{{file}}" *ngFor="let file of files">\n        </div>\n\n          <ion-item>\n              <ion-label floating>Traveler Reward</ion-label>\n              <ion-input type="number"></ion-input>\n            </ion-item>\n            \n            <ion-item>\n                <ion-label floating>From</ion-label>\n                <ion-input type="text"></ion-input>\n              </ion-item>\n\n           <ion-item>\n                <ion-label floating>To</ion-label>\n                <ion-input type="text"></ion-input>\n           </ion-item>\n\n           <ion-item>\n              <ion-label floating>Note</ion-label>\n              <ion-input type="text"></ion-input>\n         </ion-item>\n\n         <ion-item>\n            <ion-label floating>Item_url</ion-label>\n            <ion-input type="text"></ion-input>\n       </ion-item>\n\n       <ion-item>\n          <ion-label floating></ion-label>\n          <ion-input type="date"></ion-input>\n     </ion-item>\n\n     <ion-item>\n        <ion-label floating>Quantity</ion-label>\n        <ion-input type="number"></ion-input>\n   </ion-item>\n\n    </ion-list>\n  <button ion-button full round (click)=\'add()\'> Add </button>\n</ion-content>\n'/*ion-inline-end:"/Users/Hassan/Desktop/Ionic/zip/src/pages/add-post/add-post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], AddPostPage);
    return AddPostPage;
}());

//# sourceMappingURL=add-post.js.map

/***/ })

});
//# sourceMappingURL=12.js.map