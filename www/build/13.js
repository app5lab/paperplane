webpackJsonp([13],{

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostPageModule", function() { return AddPostPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_post__ = __webpack_require__(603);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_post__["a" /* AddPostPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__add_post__["a" /* AddPostPage */]]
        })
    ], AddPostPageModule);
    return AddPostPageModule;
}());

//# sourceMappingURL=add-post.module.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(332);
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
        this.post = { title: '', des: '', image1: '', image2: '', image3: '', treward: '', from: '', to: '', note: '', url: '', qty: '' };
    }
    AddPostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPostPage');
    };
    AddPostPage.prototype.upload = function () {
        var _this = this;
        var options = {
            quality: 50,
            maximumImagesCount: 3,
            outputType: 0
        };
        this.image.hasReadPermission().then(function () {
            _this.image.getPictures(options).then(function (results) {
                for (var i = 0; i < results.length; i++) {
                    _this.files[i] = 'data:image/jpeg;base64,' + results[i];
                    if (i == 0)
                        _this.post.image1 = _this.files[i];
                    else if (i == 1)
                        _this.post.image2 = _this.files[i];
                    else if (i == 2)
                        _this.post.image2 = _this.files[i];
                }
            }, function (err) { console.log('err' + err); });
        });
    };
    AddPostPage.prototype.add = function () {
        this.api.addPost(this.post.title, this.post.des, this.post.image1, this.post.image2, this.post.image3, this.post.treward, this.post.from, this.post.to, this.post.qty, this.post.url);
    };
    AddPostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-post',template:/*ion-inline-start:"C:\Users\tooth\OneDrive\Desktop\zip\src\pages\add-post\add-post.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>add-post</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item>\n\n          <ion-label floating>Title</ion-label>\n\n          <ion-input [(ngModel)]="post.title" type="text"></ion-input>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-label floating>Discription</ion-label>\n\n          <ion-input [(ngModel)]="post.des" type="text"></ion-input>\n\n        </ion-item>\n\n      \n\n        <div>\n\n          <ion-item>\n\n            <ion-label floating>Images</ion-label>\n\n            <ion-input type="text"></ion-input>\n\n          </ion-item>\n\n          <button ion-button full round (click)="upload()">\n\n            Choose Images\n\n          </button>\n\n          <img src="{{file}}" *ngFor="let file of files">\n\n        </div>\n\n\n\n          <ion-item>\n\n              <ion-label floating>Traveler Reward</ion-label>\n\n              <ion-input [(ngModel)]="post.treward" type="number"></ion-input>\n\n            </ion-item>\n\n            \n\n            <ion-item>\n\n                <ion-label floating>From</ion-label>\n\n                <ion-input [(ngModel)]="post.from" type="text"></ion-input>\n\n              </ion-item>\n\n\n\n           <ion-item>\n\n                <ion-label floating>To</ion-label>\n\n                <ion-input [(ngModel)]="post.to" type="text"></ion-input>\n\n           </ion-item>\n\n\n\n           <ion-item>\n\n              <ion-label floating>Note</ion-label>\n\n              <ion-input [(ngModel)]="post.note"type="text"></ion-input>\n\n         </ion-item>\n\n\n\n         <ion-item>\n\n            <ion-label floating>Item_url</ion-label>\n\n            <ion-input [(ngModel)]="post.url"type="text"></ion-input>\n\n       </ion-item>\n\n\n\n       <ion-item>\n\n          <ion-label floating></ion-label>\n\n          <ion-input type="date"></ion-input>\n\n     </ion-item>\n\n\n\n     <ion-item>\n\n        <ion-label floating>Quantity</ion-label>\n\n        <ion-input type="number" [(ngModel)]="post.qty"></ion-input>\n\n   </ion-item>\n\n\n\n    </ion-list>\n\n  <button ion-button full round (click)=\'add()\'> Add </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tooth\OneDrive\Desktop\zip\src\pages\add-post\add-post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], AddPostPage);
    return AddPostPage;
}());

//# sourceMappingURL=add-post.js.map

/***/ })

});
//# sourceMappingURL=13.js.map