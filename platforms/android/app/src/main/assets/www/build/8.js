webpackJsonp([8],{

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(632);
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

/***/ 632:
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Tajallah Shafaqat\Documents\zipship\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>ZIPSHIP</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content>\n\n  <ion-fab right bottom>\n\n    <button id=\'tha\' (click)=\'addPost()\' ion-fab color="primary">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n  <ion-card id=\'maincard\' style="margin: 0;width: 100% !important;">\n\n    <!-- <img style="height: 100%;" src="assets/imgs/map1.jpg" /> -->\n\n    <div class="card-a" padding>\n\n      <h1 style="color:white;margin-bottom: 15px;font-size: 25px;">\n\n        Get items from anywhere in the world delivered to you by trusted travellers. \n\n      </h1>  \n\n      <ion-item style="border-radius: 20px;   border: 1px solid #4d077c;  border-radius: 0 0 40px 40px !important;">\n\n        <ion-input   placeholder="Paste a link to create order"></ion-input>\n\n      </ion-item>\n\n    </div>\n\n  </ion-card>\n\n  <div *ngIf="posts.length == 0">\n\n    <ion-card>\n\n        <ion-card-content text-center>\n\n            <ion-card-title>\n\n              No Posts To Show!\n\n            </ion-card-title>\n\n            <p>\n\n              Click the + icon to make a request or Add a flight and start making money!\n\n            </p>\n\n          </ion-card-content>\n\n    </ion-card >\n\n  </div>\n\n  <ion-grid style="min-height: 100%; " *ngIf="posts.length > 0    ">\n\n      <ion-col col-12 col-md-6 col-lg-4 col-xl-4 *ngFor=\'let post of posts;\' style="height: 100%;">\n\n          <ion-card [ngClass]="{\'offer\': post.active == \'true\'}" class="meracard">\n\n            <ion-item>\n\n              <ion-avatar item-start>\n\n                <img src="{{post.dp}}">\n\n              </ion-avatar>\n\n              <h2>{{post.firstname}} {{post.lastname}}</h2>\n\n              <p>Posted {{post.created_at}}</p>\n\n            </ion-item>\n\n        \n\n            <ion-card-content style="display: flex;padding-bottom: 0;" (click)="openProduct()">\n\n              <img class="im" src="{{post.image_1}}">\n\n              <ion-card-title style="width: 60%;">\n\n                <h3>\n\n                  <b> {{post.title}} </b>\n\n                </h3>\n\n                <ion-label style="margin-top: 0;margin-bottom: 0;"> Price\n\n                  <b>${{post.item_price}}</b>\n\n                </ion-label>\n\n                <ion-label style="margin-top: 5px;margin-bottom: 0;font-size: 12px;">\n\n                  From\n\n                  <b>{{post.from_country}},{{post.from_city}}</b>\n\n                </ion-label>\n\n                <ion-label style="margin-top: 3px;margin-bottom: 0;font-size: 12px;">\n\n                  To\n\n                  <b>{{post.to_country}},{{post.to_city}}</b>\n\n                </ion-label>\n\n              </ion-card-title>\n\n            </ion-card-content>\n\n        \n\n            <ion-card class="card2" [ngClass]="{\'offer2\': post.active == \'true\'}">\n\n              <ion-card-content style="padding-top: 0;" class=\'cus\'>\n\n                <div>\n\n                  <ion-label style="text-align: center;margin-bottom: 3px;">\n\n                    <u> Traveler\'s Reward </u>\n\n                  </ion-label>\n\n                  <h1>from\n\n                    <b>${{post.traveler_reward}}</b>\n\n                  </h1>\n\n                  <button #ok class="gh" (click)="animateElem(post,ok);" ion-button icon-left block outline color="primary">\n\n                    Make an Offer\n\n                  </button>\n\n                </div>\n\n                <div [ngClass]="{\'sho\': post.active == \'true\'}">\n\n                  <ion-item>\n\n                    <ion-label>Amount</ion-label>\n\n                    <ion-input type="number" value=""></ion-input>\n\n                  </ion-item>\n\n                  <ion-item (click)=\'flight()\'>\n\n                    <ion-label>Select Flight</ion-label>\n\n                    <ion-input disabled type="number" value=""></ion-input>\n\n                  </ion-item>\n\n                  <button ion-button icon-left block outline color="primary" (click)=\'makebid()\'>\n\n                    Send Offer\n\n                  </button>\n\n                </div>\n\n              </ion-card-content>\n\n            </ion-card>\n\n          </ion-card>\n\n      </ion-col>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Tajallah Shafaqat\Documents\zipship\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_2_css_animator__["AnimationService"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=8.js.map