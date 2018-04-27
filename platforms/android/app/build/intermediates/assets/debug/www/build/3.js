webpackJsonp([3],{

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(415);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_css_animator__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_css_animator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_css_animator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(126);
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
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(ref, statusBar, animationService, loading, navCtrl, navParams) {
        this.ref = ref;
        this.statusBar = statusBar;
        this.loading = loading;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.active = false;
        this.active2 = false;
        this.posts = [];
        this.posts2 = [];
        this.animator = animationService.builder();
        this.posts.push({
            active: 'false',
            user: { name: 'Hassan Ali', img: 'assets/imgs/logo.jpg' },
            product: { name: 'Nike Air', price: '200', from: 'USA', to: 'Pakistan', reward: '10', img: 'assets/imgs/s1.jpg' }
        });
        this.posts.push({
            active: 'false',
            user: { name: 'Uzair Ali', img: 'assets/imgs/logo.jpg' },
            product: { name: 'Nike Air', price: '200', from: 'USA', to: 'UAE', reward: '10', img: 'assets/imgs/s1.jpg' }
        });
        this.posts.push({
            active: 'false',
            user: { name: 'Uzair Ali', img: 'assets/imgs/logo.jpg' },
            product: { name: 'Nike Air', price: '200', from: 'USA', to: 'UAE', reward: '10', img: 'assets/imgs/s1.jpg' }
        });
        this.loading.create({
            spinner: 'hide',
            content: "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\n               &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\n               Loading\n               <img src = \"assets/imgs/planes.gif\">",
        });
    }
    HomePage.prototype.s = function () {
    };
    HomePage.prototype.animateElem = function (post, ele) {
        //this.animator.stop( ele._elementRef.nativeElement );
        if (post.active == 'true') {
            ele._elementRef.nativeElement.innerText = 'Make an Offer';
            post.active = 'false';
        }
        else {
            ele._elementRef.nativeElement.innerText = 'Cancel';
            post.active = 'true';
        }
        //this.animator.setType( 'flipInX' ).show( ele._elementRef.nativeElement )
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.go = function () {
        this.navCtrl.push('AccountPage');
    };
    HomePage.prototype.openProduct = function () {
        this.navCtrl.push('ProductDetailsPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('ok'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "myElem", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Hassan/Desktop/Ionic/zipship/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-md-6 col-lg-4 col-xl-3 *ngFor=\'let post of posts;\' >\n          <ion-card [ngClass]="{\'offer\': post.active == \'true\'}" class="meracard">\n            <ion-item>\n              <ion-avatar item-start>\n                <img src="{{post.user.img}}">\n              </ion-avatar>\n              <h2>{{post.user.name}}</h2>\n              <p>Posted 17 min ago</p>\n            </ion-item>\n        \n            <ion-card-content style="display: flex;padding-bottom: 0;" (click)="openProduct()">\n              <img src="assets/imgs/s1.jpg" style="max-width: 35%;height: 35%;margin-right: 10px; border-radius: 5px;">\n              <ion-card-title style="width: 60%;">\n                <h3>\n                  <b> {{post.product.name}} </b>\n                </h3>\n                <ion-label style="margin-top: 0;margin-bottom: 0;"> Price\n                  <b>${{post.product.price}}</b>\n                </ion-label>\n                <ion-label style="margin-top: 5px;margin-bottom: 0;font-size: 12px;">\n                  From\n                  <b>{{post.product.from}}</b>\n                </ion-label>\n                <ion-label style="margin-top: 3px;margin-bottom: 0;font-size: 12px;">\n                  To\n                  <b>{{post.product.to}}</b>\n                </ion-label>\n              </ion-card-title>\n            </ion-card-content>\n        \n            <ion-card class="card2" [ngClass]="{\'offer2\': post.active == \'true\'}">\n              <ion-card-content style="padding-top: 0;" class=\'cus\'>\n                <div>\n                  <ion-label style="text-align: center;margin-bottom: 3px;">\n                    <u> Traveler\'s Reward </u>\n                  </ion-label>\n                  <h1>from\n                    <b>${{post.product.reward}}</b>\n                  </h1>\n                  <button #ok class="gh" (click)="animateElem(post,ok);" ion-button icon-left block outline color="primary">\n                    Make an Offer\n                  </button>\n                </div>\n                <div class=\'asd\' [ngClass]="{\'sho\': post.active == \'true\'}">\n                  <ion-item>\n                    <ion-label>Amount</ion-label>\n                    <ion-input type="number" value=""></ion-input>\n                  </ion-item>\n                  <button class="test" ion-button icon-left block outline color="primary">\n                    Send Offer\n                  </button>\n                </div>\n              </ion-card-content>\n            </ion-card>\n          </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/Hassan/Desktop/Ionic/zipship/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_2_css_animator__["AnimationService"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=3.js.map