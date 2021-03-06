webpackJsonp([14],{

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllChatsPageModule", function() { return AllChatsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_chats__ = __webpack_require__(618);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AllChatsPageModule = /** @class */ (function () {
    function AllChatsPageModule() {
    }
    AllChatsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__all_chats__["a" /* AllChatsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__all_chats__["a" /* AllChatsPage */]),
            ],
        })
    ], AllChatsPageModule);
    return AllChatsPageModule;
}());

//# sourceMappingURL=all-chats.module.js.map

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(328);
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
 * Generated class for the AllChatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllChatsPage = /** @class */ (function () {
    function AllChatsPage(navCtrl, navParams, api) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.chats = [];
        var user = JSON.parse(localStorage.getItem('zip_user'));
        api.firebase().ref('rooms/' + user.id).once('value', function (data) {
            // console.log(data.val());
            if (data.val() != null)
                _this.chats = data.val();
        });
    }
    AllChatsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllChatsPage');
    };
    AllChatsPage.prototype.openChat = function () {
        this.navCtrl.push('Chat');
    };
    AllChatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-all-chats',template:/*ion-inline-start:"C:\Users\Tajallah Shafaqat\Documents\zipship\src\pages\all-chats\all-chats.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>chat</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card id=\'asd\' *ngIf="chats.length == 0" class="Main">\n\n    <ion-card-content text-center>\n\n      <p>\n\n        No chats to display!\n\n      </p>\n\n      <br>\n\n      <br>\n\n      <button style=" border: 1px solid #4d077c; border-radius: 0 40px !important;" ion-button outline item-center (click)=\'addflight()\'>Add Flight</button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card style="border: 1px solid #4d077c; border-radius: 0 40px !important;" *ngFor="let chat of chats">\n\n    <ion-list >\n\n      <ion-item (click)=\'openChat()\'>\n\n        <ion-avatar item-start>\n\n          <img src="assets/imgs/qasim.jpeg">\n\n        </ion-avatar>\n\n        <h2>Hamza</h2>\n\n        <p>{{chat.msg}}</p>\n\n        <ion-note item-end>3:43 pm</ion-note>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Tajallah Shafaqat\Documents\zipship\src\pages\all-chats\all-chats.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], AllChatsPage);
    return AllChatsPage;
}());

//# sourceMappingURL=all-chats.js.map

/***/ })

});
//# sourceMappingURL=14.js.map