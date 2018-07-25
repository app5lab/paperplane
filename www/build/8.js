webpackJsonp([8],{

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(623);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
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

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_css_animator__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_css_animator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_css_animator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(328);
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
    function HomePage(api, event, Keyboard, alert, ref, statusBar, animationService, loading, navCtrl, navParams) {
        // this.animator = animationService.builder();
        var _this = this;
        this.api = api;
        this.event = event;
        this.Keyboard = Keyboard;
        this.alert = alert;
        this.ref = ref;
        this.statusBar = statusBar;
        this.loading = loading;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.a = false;
        this.active = 0;
        this.active2 = false;
        this.posts = [];
        this.posts2 = [];
        this.flight_id = '';
        // this.event.subscribe( 'open', () =>
        // {
        //   this.keyboardCheck();
        // } )
        // this.event.publish('open');
        // this.api.allFlights.forEach(item=>{ 
        //   this.api.getPostbyLoc(item.source_country,item.destination_country).then(data=>{
        //     this.posts.push(data)
        //   })
        // })   
        this.api.getPostbyLoc().then(function (data) {
            data.forEach(function (element) {
                _this.posts.push(element);
            });
            console.log(_this.posts.length);
        });
        // this.posts.push(
        //   {
        //     active: 'false',
        //     user: { name: 'Hassan Ali', img:'assets/imgs/logo.jpg'},
        //     product: { name: 'Nike Air', price: '200', from: 'USA', to: 'Pakistan', reward: '10', img:'assets/imgs/s1.jpg'}
        //   })
        // this.posts.push(
        //   {
        //     active: 'false',        
        //     user: { name: 'Uzair Ali', img: 'assets/imgs/logo.jpg' },
        //     product: { name: 'Nike Air', price: '200', from: 'USA', to: 'UAE', reward: '10', img: 'assets/imgs/s1.jpg' }
        //   })
    }
    HomePage.prototype.animateElem = function (post, ele) {
        //this.animator.stop( ele._elementRef.nativeElement );
        if (post.active == 'true') {
            ele._elementRef.nativeElement.innerText = 'Make an Offer';
            post.active = 'false';
            this.active = this.active - 1;
        }
        else {
            ele._elementRef.nativeElement.innerText = 'Cancel';
            post.active = 'true';
            this.active = this.active + 1;
        }
        //this.animator.setType( 'flipInX' ).show( ele._elementRef.nativeElement )
    };
    HomePage.prototype.keyboardCheck = function () {
        // this.event.publish('open')
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.flight = function () {
        var _this = this;
        var alert = this.alert.create({
            title: 'Choose your flight'
        });
        this.api.allFlights.forEach(function (element) {
            alert.addInput({
                type: 'radio',
                label: element.source_country + ' - ' + element.destination_country,
                value: element.id,
                checked: false
            });
        });
        alert.addButton({
            text: 'Confirm',
            handler: function (data) {
                _this.flight_id = data;
            }
        });
        alert.present();
    };
    HomePage.prototype.makebid = function () {
        // this.api.bid()
    };
    HomePage.prototype.go = function () {
        this.navCtrl.push('AccountPage');
    };
    HomePage.prototype.openProduct = function () {
        this.navCtrl.push('ProductDetailsPage');
    };
    HomePage.prototype.addPost = function () {
        this.navCtrl.push('AddPostPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('ok'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "myElem", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Hassan/Desktop/Ionic/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>ZipShip</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content>\n  <ion-fab right bottom>\n    <button id=\'tha\' (click)=\'addPost()\' ion-fab color="primary">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n  <ion-card id=\'maincard\' style="margin: 0;width: 100% !important;">\n    <!-- <img style="height: 100%;" src="assets/imgs/map1.jpg" /> -->\n    <div class="card-a" padding>\n      <h1 style="color:white;margin-bottom: 15px;font-size: 30px;">\n        Get items from anywhere in the world delivered to you by trusted travellers. \n      </h1>  \n      <ion-item style="border-radius: 20px;   border: 1px solid #4d077c;  border-radius: 0 0 40px 40px !important;">\n        <ion-input   placeholder="Paste a link to create order"></ion-input>\n      </ion-item>\n    </div>\n  </ion-card>\n  <div *ngIf="posts.length == 0">\n    <ion-card>\n        <ion-card-content text-center>\n            <ion-card-title>\n              No Posts To Show!\n            </ion-card-title>\n            <p>\n              Click the + icon to make a request or Add a flight and start making money!\n            </p>\n          </ion-card-content>\n    </ion-card>\n  </div>\n  <ion-grid style="min-height: 100%; " *ngIf="posts.length > 0    ">\n      <ion-col col-12 col-md-6 col-lg-4 col-xl-4 *ngFor=\'let post of posts;\' style="height: 100%;">\n          <ion-card [ngClass]="{\'offer\': post.active == \'true\'}" class="meracard">\n            <ion-item>\n              <ion-avatar item-start>\n                <img src="{{post.dp}}">\n              </ion-avatar>\n              <h2>{{post.firstname}} {{post.lastname}}</h2>\n              <p>Posted {{post.created_at}}</p>\n            </ion-item>\n        \n            <ion-card-content style="display: flex;padding-bottom: 0;" (click)="openProduct()">\n              <img class="im" src="{{post.image_1}}">\n              <ion-card-title style="width: 60%;">\n                <h3>\n                  <b> {{post.title}} </b>\n                </h3>\n                <ion-label style="margin-top: 0;margin-bottom: 0;"> Price\n                  <b>${{post.item_price}}</b>\n                </ion-label>\n                <ion-label style="margin-top: 5px;margin-bottom: 0;font-size: 12px;">\n                  From\n                  <b>{{post.from_country}},{{post.from_city}}</b>\n                </ion-label>\n                <ion-label style="margin-top: 3px;margin-bottom: 0;font-size: 12px;">\n                  To\n                  <b>{{post.to_country}},{{post.to_city}}</b>\n                </ion-label>\n              </ion-card-title>\n            </ion-card-content>\n        \n            <ion-card class="card2" [ngClass]="{\'offer2\': post.active == \'true\'}">\n              <ion-card-content style="padding-top: 0;" class=\'cus\'>\n                <div>\n                  <ion-label style="text-align: center;margin-bottom: 3px;">\n                    <u> Traveler\'s Reward </u>\n                  </ion-label>\n                  <h1>from\n                    <b>${{post.traveler_reward}}</b>\n                  </h1>\n                  <button #ok class="gh" (click)="animateElem(post,ok);" ion-button icon-left block outline color="primary">\n                    Make an Offer\n                  </button>\n                </div>\n                <div [ngClass]="{\'sho\': post.active == \'true\'}">\n                  <ion-item>\n                    <ion-label>Amount</ion-label>\n                    <ion-input type="number" value=""></ion-input>\n                  </ion-item>\n                  <ion-item (click)=\'flight()\'>\n                    <ion-label>Select Flight</ion-label>\n                    <ion-input disabled type="number" value=""></ion-input>\n                  </ion-item>\n                  <button ion-button icon-left block outline color="primary" (click)=\'makebid()\'>\n                    Send Offer\n                  </button>\n                </div>\n              </ion-card-content>\n            </ion-card>\n          </ion-card>\n      </ion-col>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/Hassan/Desktop/Ionic/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Keyboard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Keyboard */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_css_animator__["AnimationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_css_animator__["AnimationService"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _k || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=8.js.map