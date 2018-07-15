webpackJsonp([9],{

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(621);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HistoryPageModule = /** @class */ (function () {
    function HistoryPageModule() {
    }
    HistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__history__["a" /* HistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__history__["a" /* HistoryPage */]),
            ],
        })
    ], HistoryPageModule);
    return HistoryPageModule;
}());

//# sourceMappingURL=history.module.js.map

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_css_animator__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_css_animator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_css_animator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(171);
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
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoryPage = /** @class */ (function () {
    function HistoryPage(api, event, Keyboard, alert, ref, statusBar, animationService, loading, navCtrl, navParams) {
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
        this.settings = 'myposts';
        this.settings1 = 'flight';
        this.settings2 = 'bids';
        this.a = false;
        this.active = 0;
        this.active2 = false;
        this.posts = [];
        this.posts2 = [];
        this.flight_id = '';
        this.animator = animationService.builder();
        this.event.publish('open');
        this.api.allFlights.forEach(function (item) {
            _this.api.getPostbyLoc(item.source_country, item.destination_country).then(function (data) {
                _this.posts.push(data);
            });
        });
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
    }
    HistoryPage.prototype.keyboardCheck = function () {
        throw new Error("Method not implemented.");
    };
    HistoryPage.prototype.animateElem = function (post, ele) {
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
    HistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HistoryPage.prototype.flight = function () {
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
    HistoryPage.prototype.makebid = function () {
        // this.api.bid()
    };
    HistoryPage.prototype.go = function () {
        this.navCtrl.push('AccountPage');
    };
    HistoryPage.prototype.openProduct = function () {
        this.navCtrl.push('ProductDetailsPage');
    };
    HistoryPage.prototype.addPost = function () {
        this.navCtrl.push('AddPostPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('ok'),
        __metadata("design:type", Object)
    ], HistoryPage.prototype, "myElem", void 0);
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-history',template:/*ion-inline-start:"/Users/Hassan/Desktop/Ionic/src/pages/history/history.html"*/'<!--\n  Generated template for the HistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-header>\n        <ion-toolbar>\n          <ion-segment [(ngModel)]="settings" color="light">\n            <ion-segment-button value="myposts" checked>\n              My Posts\n            </ion-segment-button>\n            <ion-segment-button value="mybids">\n              My Bids\n            </ion-segment-button>\n            <ion-segment-button value="bids" >\n                Bids Made\n              </ion-segment-button>\n              <!-- <ion-segment-button value="flight" >\n                  Flights\n                </ion-segment-button> -->\n          </ion-segment>\n        </ion-toolbar>\n      </ion-header>\n\n</ion-header>\n\n\n\n<ion-content >\n\n\n  <div [ngSwitch]="settings">\n    <ion-list *ngSwitchCase="\'myposts\'" style="margin-top: 10%">\n      <ion-grid style="min-height: 100%;">\n          <ion-col col-12 col-md-6 col-lg-4 col-xl-4 *ngFor=\'let post of posts;\' style="height: 100%;">\n              <ion-card >\n                <ion-item>\n                  <ion-avatar item-start>\n                    <img src="{{post.user.img}}">\n                  </ion-avatar>\n                  <h2>{{post.user.name}}</h2>\n                  <p>Posted 17 min ago</p>\n                </ion-item>\n\n                <ion-card-content style="display: flex;padding-bottom: 0;" (click)="openProduct()">\n                  <img class="im" src="assets/imgs/s1.jpg">\n                  <ion-card-title style="width: 60%;">\n                    <h3>\n                      <b> {{post.product.name}} </b>\n                    </h3>\n                    <ion-label style="margin-top: 0;margin-bottom: 0;"> Price\n                      <b>${{post.product.price}}</b>\n                    </ion-label>\n                    <ion-label style="margin-top: 5px;margin-bottom: 0;font-size: 12px;">\n                      From\n                      <b>{{post.product.from}}</b>\n                    </ion-label>\n                    <ion-label style="margin-top: 3px;margin-bottom: 0;font-size: 12px;">\n                      To\n                      <b>{{post.product.to}}</b>\n                    </ion-label>\n                  </ion-card-title>\n                </ion-card-content>\n\n                <ion-card >\n                  <ion-card-content style="padding-top: 0;" class=\'cus\'>\n                    <div>\n                      <ion-label style="text-align: center;margin-bottom: 3px;">\n                        <u> Traveler\'s Reward </u>\n                      </ion-label>\n                      <h1>from\n                        <b>${{post.product.reward}}</b>\n                      </h1>\n                      <!-- <button #ok class="gh" (click)="animateElem(post,ok);" ion-button icon-left block outline color="primary">\n                        Make an Offer\n                      </button> -->\n                    </div>\n                    <!-- <div [ngClass]="{\'sho\': post.active == \'true\'}">\n                      <ion-item>\n                        <ion-label>Amount</ion-label>\n                        <ion-input type="number" value=""></ion-input>\n                      </ion-item>\n                      <ion-item (click)=\'flight()\'>\n                        <ion-label>Select Flight</ion-label>\n                        <ion-input disabled type="number" value=""></ion-input>\n                      </ion-item>\n                      <button ion-button icon-left block outline color="primary" (click)=\'makebid()\'>\n                        Send Offer\n                      </button>\n                    </div> -->\n                  </ion-card-content>\n                </ion-card>\n              </ion-card>\n          </ion-col>\n      </ion-grid>\n\n    </ion-list>\n\n      <ion-list *ngSwitchCase="\'mybids\'" style="margin-top: 15%">\n        <ion-card style="border-radius:0 40px">\n            <ion-grid>\n            <ion-row>\n              <ion-col>\n                  <ion-avatar item-start>\n                      <img src="assets/imgs/s1.jpg" style="border-radius:20px;">\n                    </ion-avatar>\n              </ion-col>\n\n              <ion-col>\n                <ion-row>\n                    <h2>Hassan Ali</h2>\n                </ion-row>\n\n                <ion-row>\n                    <h2>Date</h2>\n                </ion-row>\n                <ion-row>\n                    <h2>Post title</h2>\n                </ion-row>\n              </ion-col>\n\n              <ion-col align-self-center>\n                  <h2 style="font-size: 50px" >$25</h2>\n              </ion-col>\n\n            </ion-row>\n\n            </ion-grid>\n            <button ion-button full style="border-radius:0 40px">Accept offer</button>\n          </ion-card>\n        </ion-list>\n\n\n\n        <ion-list *ngSwitchCase="\'bids\'" style="margin-top: 15%" >\n\n            <ion-card>\n                <ion-grid>\n                <ion-row>\n                  <ion-col>\n                      <ion-avatar item-start>\n                          <img src="assets/imgs/s1.jpg">\n                        </ion-avatar>\n                  </ion-col>\n\n                  <ion-col>\n                    <ion-row>\n                        <h2>Hassan Ali</h2>\n                    </ion-row>\n\n                    <ion-row>\n                        <h2>Date</h2>\n                    </ion-row>\n                    <ion-row>\n                        <h2>Post title</h2>\n                    </ion-row>\n                  </ion-col>\n\n                  <ion-col>\n                      <h2 style="font-size: 30px">$25</h2>\n                  </ion-col>\n\n                </ion-row>\n\n                </ion-grid>\n                <button ion-button full>Accept offer</button>\n              </ion-card>\n\n\n              <ion-card>\n                  <ion-grid>\n                  <ion-row>\n                    <ion-col>\n                        <ion-avatar item-start>\n                            <img src="assets/imgs/s1.jpg">\n                          </ion-avatar>\n                    </ion-col>\n\n                    <ion-col>\n                      <ion-row>\n                          <h2>Hassan Ali</h2>\n                      </ion-row>\n\n                      <ion-row>\n                          <h2>Date</h2>\n                      </ion-row>\n                      <ion-row>\n                          <h2>Post title</h2>\n                      </ion-row>\n                    </ion-col>\n\n                    <ion-col>\n                        <h2 style="font-size: 30px">$25</h2>\n                    </ion-col>\n\n                  </ion-row>\n\n                  </ion-grid>\n                  <button ion-button full>Accept offer</button>\n                </ion-card>\n\n          </ion-list>\n\n\n          <ion-list *ngSwitchCase="\'flight\'">\n            </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Hassan/Desktop/Ionic/src/pages/history/history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_2_css_animator__["AnimationService"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ })

});
//# sourceMappingURL=9.js.map