webpackJsonp([9],{

/***/ 585:
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
        this.api = api;
        this.event = event;
        this.Keyboard = Keyboard;
        this.alert = alert;
        this.ref = ref;
        this.statusBar = statusBar;
        this.loading = loading;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.SwipedTabsIndicator = null;
        this.tabs = [];
        this.settings = 'myposts';
        this.settings1 = 'flight';
        this.settings2 = 'bids';
        this.a = false;
        this.active = 0;
        this.active2 = false;
        this.posts = [];
        this.posts2 = [];
        this.flight_id = '';
        this.tabs = ["My Posts", "My Bids", "Bids Made", "Something"];
        this.animator = animationService.builder();
        /*   this.event.publish('open');
           this.api.allFlights.forEach(item=>{
             this.api.getPostbyLoc().then(data=>{
               this.posts.push(data)
             })
           })
       */
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
    HistoryPage.prototype.ionViewDidEnter = function () {
        this.SwipedTabsIndicator = document.getElementById("indicator");
    };
    HistoryPage.prototype.selectTab = function (index) {
        this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (100 * index) + '%,0,0)';
        this.SwipedTabsSlider.slideTo(index, 500);
    };
    HistoryPage.prototype.updateIndicatorPosition = function () {
        // this condition is to avoid passing to incorrect index
        if (this.SwipedTabsSlider.length() > this.SwipedTabsSlider.getActiveIndex()) {
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)';
        }
    };
    HistoryPage.prototype.animateIndicator = function ($event) {
        if (this.SwipedTabsIndicator)
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress * (this.SwipedTabsSlider.length() - 1)) * 100) + '%,0,0)';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('SwipedTabsSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], HistoryPage.prototype, "SwipedTabsSlider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('ok'),
        __metadata("design:type", Object)
    ], HistoryPage.prototype, "myElem", void 0);
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-history',template:/*ion-inline-start:"C:\Users\Tajallah Shafaqat\Documents\zipship\src\pages\history\history.html"*/'<!--\n\n  Generated template for the HistoryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-header>\n\n     <!--  dont touch it. slides will be finished <ion-toolbar>\n\n          <ion-segment [(ngModel)]="settings" color="light">\n\n            <ion-segment-button value="myposts" checked>\n\n              MY POSTS\n\n            </ion-segment-button>\n\n            <ion-segment-button value="mybids">\n\n              MY BIDS\n\n            </ion-segment-button>\n\n            <ion-segment-button value="bids" >\n\n                BIDS MADE\n\n              </ion-segment-button>\n\n              <!-- <ion-segment-button value="flight" >\n\n                  Flights\n\n            //    </ion-segment-button> \n\n          </ion-segment>\n\n        </ion-toolbar>-->\n\n      </ion-header>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content>\n\n  <ion-segment  class="SwipedTabs-tabs"  >\n\n		<ion-segment-button *ngFor=\'let tab of tabs ; let i = index \' value="IngoreMe" (click)="selectTab(i)"\n\n		[ngClass]=\'{ "SwipedTabs-activeTab" : ( this.SwipedTabsSlider  && ( this.SwipedTabsSlider.getActiveIndex() === i || (  tabs.length -1 === i&& this.SwipedTabsSlider.isEnd()))) }\' >\n\n			{{tab}}\n\n		</ion-segment-button>\n\n  </ion-segment>\n\n  \n\n\n\n  <div id=\'indicator\' class="SwipedTabs-indicatorSegment" [ngStyle]="{\'width.%\': (100/this.tabs.length)}"></div>\n\n\n\n	<ion-slides #SwipedTabsSlider  (ionSlideDrag)="animateIndicator($event)"\n\n							(ionSlideWillChange)="updateIndicatorPosition()"\n\n							(ionSlideDidChange)="updateIndicatorPosition()"\n\n							(pan)="updateIndicatorPosition()"\n\n							[pager]="false"\n\n				>\n\n	\n\n  \n\n    	<ion-slide>\n\n   \n\n      <ion-grid style="min-height: 100%;">\n\n          <ion-col col-12 col-md-6 col-lg-4 col-xl-4 *ngFor=\'let post of posts;\' style="height: 100%;">\n\n              <ion-card >\n\n                <ion-item>\n\n                  <ion-avatar item-start>\n\n                    <img src="{{post.user.img}}">\n\n                  </ion-avatar>\n\n                  <h2>{{post.user.name}}</h2>\n\n                  <p>Posted 17 min ago</p>\n\n                </ion-item>\n\n\n\n                <ion-card-content style="display: flex;padding-bottom: 0;" (click)="openProduct()">\n\n                  <img class="im" src="assets/imgs/s1.jpg">\n\n                  <ion-card-title style="width: 60%;">\n\n                    <h3>\n\n                      <b> {{post.product.name}} </b>\n\n                    </h3>\n\n                    <ion-label style="margin-top: 0;margin-bottom: 0;"> Price\n\n                      <b>${{post.product.price}}</b>\n\n                    </ion-label>\n\n                    <ion-label style="margin-top: 5px;margin-bottom: 0;font-size: 12px;">\n\n                      From\n\n                      <b>{{post.product.from}}</b>\n\n                    </ion-label>\n\n                    <ion-label style="margin-top: 3px;margin-bottom: 0;font-size: 12px;">\n\n                      To\n\n                      <b>{{post.product.to}}</b>\n\n                    </ion-label>\n\n                  </ion-card-title>\n\n                </ion-card-content>\n\n\n\n                <ion-card >\n\n                  <ion-card-content style="padding-top: 0;" class=\'cus\'>\n\n                    <div>\n\n                      <ion-label style="text-align: center;margin-bottom: 3px;">\n\n                        <u> Traveler\'s Reward </u>\n\n                      </ion-label>\n\n                      <h1>from\n\n                        <b>${{post.product.reward}}</b>\n\n                      </h1>\n\n                      <!-- <button #ok class="gh" (click)="animateElem(post,ok);" ion-button icon-left block outline color="primary">\n\n                        Make an Offer\n\n                      </button> -->\n\n                    </div>\n\n                    <!-- <div [ngClass]="{\'sho\': post.active == \'true\'}">\n\n                      <ion-item>\n\n                        <ion-label>Amount</ion-label>\n\n                        <ion-input type="number" value=""></ion-input>\n\n                      </ion-item>\n\n                      <ion-item (click)=\'flight()\'>\n\n                        <ion-label>Select Flight</ion-label>\n\n                        <ion-input disabled type="number" value=""></ion-input>\n\n                      </ion-item>\n\n                      <button ion-button icon-left block outline color="primary" (click)=\'makebid()\'>\n\n                        Send Offer\n\n                      </button>\n\n                    </div> -->\n\n                  </ion-card-content>\n\n                </ion-card>\n\n              </ion-card>\n\n          </ion-col>\n\n      </ion-grid>\n\n\n\n   \n\n\n\n  </ion-slide>\n\n\n\n\n\n  <ion-slide>\n\n              <ion-card style="border-radius:10px">\n\n            <ion-grid>\n\n            <ion-row>\n\n              <ion-col>\n\n                  <ion-avatar item-start>\n\n                      <img src="assets/imgs/s1.jpg" style="border-radius:20px;">\n\n                    </ion-avatar>\n\n              </ion-col>\n\n\n\n              <ion-col>\n\n                <ion-row>\n\n                    <h2>Hassan Ali</h2>\n\n                </ion-row>\n\n\n\n                <ion-row>\n\n                    <h2>Date</h2>\n\n                </ion-row>\n\n                <ion-row>\n\n                    <h2>Post title</h2>\n\n                </ion-row>\n\n              </ion-col>\n\n\n\n              <ion-col align-self-center>\n\n                  <h2 style="font-size: 50px" >$25</h2>\n\n              </ion-col>\n\n\n\n            </ion-row>\n\n\n\n            </ion-grid>\n\n           <!-- <button ion-button full style="border-radius:0 40px">Accept offer</button> -->\n\n          </ion-card>\n\n      \n\n\n\n      </ion-slide>\n\n\n\n      <ion-slide>\n\n\n\n       \n\n\n\n            <ion-card style="border-radius:10px"> \n\n                <ion-grid>\n\n                <ion-row>\n\n                  <ion-col>\n\n                      <ion-avatar item-start>\n\n                          <img src="assets/imgs/s1.jpg">\n\n                        </ion-avatar>\n\n                  </ion-col>\n\n\n\n                  <ion-col>\n\n                    <ion-row>\n\n                        <h2>Hassan Ali</h2>\n\n                    </ion-row>\n\n\n\n                    <ion-row>\n\n                        <h2>Date</h2>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <h2>Post title</h2>\n\n                    </ion-row>\n\n                  </ion-col>\n\n\n\n                  <ion-col>\n\n                      <h2 style="font-size: 30px">$25</h2>\n\n                  </ion-col>\n\n\n\n                </ion-row>\n\n\n\n                </ion-grid>\n\n                <button ion-button full>Accept offer</button>\n\n              </ion-card>\n\n\n\n\n\n              <ion-card style="border-radius:0 40px">\n\n                  <ion-grid>\n\n                  <ion-row>\n\n                    <ion-col>\n\n                        <ion-avatar item-start>\n\n                            <img src="assets/imgs/s1.jpg">\n\n                          </ion-avatar>\n\n                    </ion-col>\n\n\n\n                    <ion-col>\n\n                      <ion-row>\n\n                          <h2>Hassan Ali</h2>\n\n                      </ion-row>\n\n\n\n                      <ion-row>\n\n                          <h2>Date</h2>\n\n                      </ion-row>\n\n                      <ion-row>\n\n                          <h2>Post title</h2>\n\n                      </ion-row>\n\n                    </ion-col>\n\n\n\n                    <ion-col>\n\n                        <h2 style="font-size: 30px">$25</h2>\n\n                    </ion-col>\n\n\n\n                  </ion-row>\n\n\n\n                  </ion-grid>\n\n                  <button ion-button full>Accept offer</button>\n\n                </ion-card>\n\n\n\n         \n\n\n\n        </ion-slide>\n\n\n\n<ion-slide>\n\n\n\n\n\n</ion-slide>\n\n\n\n   \n\n      </ion-slides> <!--         <ion-list *ngSwitchCase="\'flight\'">\n\n            </ion-list> -->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Tajallah Shafaqat\Documents\zipship\src\pages\history\history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_2_css_animator__["AnimationService"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ })

});
//# sourceMappingURL=9.js.map