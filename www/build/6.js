webpackJsonp([6],{

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders__ = __webpack_require__(629);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrdersPageModule = /** @class */ (function () {
    function OrdersPageModule() {
    }
    OrdersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orders__["a" /* OrdersPage */]),
            ],
        })
    ], OrdersPageModule);
    return OrdersPageModule;
}());

//# sourceMappingURL=orders.module.js.map

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(95);
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
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrdersPage = /** @class */ (function () {
    function OrdersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OrdersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrdersPage');
    };
    OrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-orders',template:/*ion-inline-start:"/Users/Hassan/Desktop/Ionic/src/pages/orders/orders.html"*/'<!--\n  Generated template for the OrdersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>orders</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-grid style="min-height: 100%;">\n        <ion-col col-12 col-md-6 col-lg-4 col-xl-4 *ngFor=\'let post of posts;\' style="height: 100%;">\n            <ion-card [ngClass]="{\'offer\': post.active == \'true\'}" class="meracard">\n              <ion-item>\n                <ion-avatar item-start>\n                  <img src="{{post.user.img}}">\n                </ion-avatar>\n                <h2>{{post.user.name}}</h2>\n                <p>Posted 17 min ago</p>\n              </ion-item>\n          \n              <ion-card-content style="display: flex;padding-bottom: 0;" (click)="openProduct()">\n                <img class="im" src="assets/imgs/s1.jpg">\n                <ion-card-title style="width: 60%;">\n                  <h3>\n                    <b> {{post.product.name}} </b>\n                  </h3>\n                  <ion-label style="margin-top: 0;margin-bottom: 0;"> Price\n                    <b>${{post.product.price}}</b>\n                  </ion-label>\n                  <ion-label style="margin-top: 5px;margin-bottom: 0;font-size: 12px;">\n                    From\n                    <b>{{post.product.from}}</b>\n                  </ion-label>\n                  <ion-label style="margin-top: 3px;margin-bottom: 0;font-size: 12px;">\n                    To\n                    <b>{{post.product.to}}</b>\n                  </ion-label>\n                </ion-card-title>\n              </ion-card-content>\n          \n              <ion-card class="card2" [ngClass]="{\'offer2\': post.active == \'true\'}">\n                <ion-card-content style="padding-top: 0;" class=\'cus\'>\n                  <div>\n                    <ion-label style="text-align: center;margin-bottom: 3px;">\n                      <u> Traveler\'s Reward </u>\n                    </ion-label>\n                    <h1>from\n                      <b>${{post.product.reward}}</b>\n                    </h1>\n                    <ion-label style="text-align:left;margin-bottom: 3px;">\n                        Amount\n                    </ion-label>\n                    <ion-label style="text-align:right;margin-bottom: 3px;">\n                        $500\n                    </ion-label>\n                    <ion-label style="text-align: left;margin-bottom: 3px;">\n                       Flight\n                    </ion-label>\n                    <ion-label style="text-align:right;margin-bottom: 3px;">\n                       BLU AIRLINE.\n                    </ion-label>\n                  </div>\n                </ion-card-content>\n              </ion-card>\n            </ion-card>\n        </ion-col>\n    </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Hassan/Desktop/Ionic/src/pages/orders/orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], OrdersPage);
    return OrdersPage;
}());

//# sourceMappingURL=orders.js.map

/***/ })

});
//# sourceMappingURL=6.js.map