webpackJsonp([14],{

/***/ 140:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 140;

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		413,
		13
	],
	"../pages/add-post/add-post.module": [
		414,
		12
	],
	"../pages/addflight/addflight.module": [
		415,
		11
	],
	"../pages/card/card.module": [
		416,
		10
	],
	"../pages/chat/chat.module": [
		417,
		9
	],
	"../pages/conversation/conversation.module": [
		418,
		8
	],
	"../pages/flights/flights.module": [
		419,
		7
	],
	"../pages/history/history.module": [
		420,
		6
	],
	"../pages/home/home.module": [
		421,
		5
	],
	"../pages/login/login.module": [
		422,
		4
	],
	"../pages/orders/orders.module": [
		423,
		3
	],
	"../pages/product-details/product-details.module": [
		424,
		0
	],
	"../pages/sign-up/sign-up.module": [
		425,
		2
	],
	"../pages/tabs/tabs.module": [
		426,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 183;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_http__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_md5__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_md5__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiProvider = /** @class */ (function () {
    function ApiProvider(http) {
        this.http = http;
        this.allFlights = [];
    }
    ApiProvider.prototype.login = function (email, pass) {
        var _this = this;
        var dataa = ({
            "email": email + "",
            "password": pass + "",
            "key": 'login',
            "sec": '((|m5DlhrplfKx1'
        });
        //console.log(JSON.stringify(dataa));
        var promise = new Promise(function (resolve) {
            _this.http.setDataSerializer('json');
            _this.http.post('https://zipship.io/api/manage-data.php', dataa, {})
                .then(function (res) {
                if (res.data != 'Invalid User' && res.data != 'Security Key is invalid') {
                    var data = JSON.parse(res.data);
                    var temp = {
                        email: data.email,
                        id: data.id,
                        fname: data.firstname,
                        lname: data.lastname,
                        verified: data.verified,
                        created: data.created,
                        phone: data.phone,
                        address: data.address
                    };
                    var t = JSON.stringify(temp);
                    localStorage.setItem('zip_user', t);
                    localStorage.setItem('zip_login', 'true');
                    resolve(true);
                }
                else
                    resolve(false);
            });
        });
        return promise;
    };
    ApiProvider.prototype.addFlight = function (src_cr, src_ct, des_cr, des_ct, time, id) {
        var _this = this;
        var dataa = {
            source_country: src_cr,
            source_city: src_ct,
            destination_country: des_cr,
            destination_city: des_ct,
            time: time,
            userid: id,
            key: 'addflight',
            sec: '((|m5DlhrplfKx1'
        };
        var promise = new Promise(function (resolve) {
            _this.http.setDataSerializer('json');
            _this.http.post('https://zipship.io/api/flight-data.php', dataa, {})
                .then(function (res) {
                console.log(res);
                //   resolve( true );
                // else
                //   resolve( false )
            });
        });
        return promise;
    };
    ApiProvider.prototype.getFlights = function (id) {
        var _this = this;
        var datas = {
            id: id,
            key: 'userId',
            sec: '((|m5DlhrplfKx1'
        };
        var promise = new Promise(function (resolve) {
            _this.http.setDataSerializer('json');
            _this.http.post('https://zipship.io/api/flight-data.php', datas, {})
                .then(function (res) {
                if (res.data != 'Invalid Data' && res.data != 'Security Key is invalid') {
                    if (res.data != "")
                        _this.allFlights = JSON.parse(res.data);
                    resolve(_this.allFlights);
                }
                else
                    resolve('false');
            });
        });
        return promise;
    };
    ApiProvider.prototype.register = function (firstname, lastname, address, phone, email, password) {
        var _this = this;
        var p = __WEBPACK_IMPORTED_MODULE_2_md5__(password);
        console.log(p);
        var data = {
            email: email,
            password: p,
            firstname: firstname,
            lastname: lastname,
            address: address,
            phone: phone,
            key: 'create',
            sec: '((|m5DlhrplfKx1'
        };
        var promise = new Promise(function (resolve) {
            _this.http.setDataSerializer('json');
            _this.http.post('https://zipship.io/api/manage-data.php', data, {})
                .then(function (res) {
                if (res.data != 'User already Exist' && res.data == '1')
                    resolve(true);
                else
                    resolve(false);
            });
        });
        return promise;
    };
    ApiProvider.prototype.addPost = function (title, des, im1, im2, im3, tr, from, to, touser, buy) {
        var _this = this;
        var data = {
            title: title,
            description: des,
            image1: im1,
            image2: im2,
            image3: im3,
            treward: tr,
            from: from,
            to: to,
            touser: touser,
            buy: buy,
            key: 'addPost',
            sec: '((|m5DlhrplfKx1'
        };
        var promise = new Promise(function (resolve) {
            _this.http.setDataSerializer('json');
            _this.http.post('https://zipship.io/api/user-posts.php', data, {})
                .then(function (res) {
                console.log(res);
                // if ( res.data != 'User already Exist' && res.data == '1' )
                //   resolve( true );
                // else
                //   resolve( false )
            });
        });
        return promise;
    };
    ApiProvider.prototype.getPostbyLoc = function (from, to) {
        var _this = this;
        var data = {
            from_loc: from,
            to_loc: to,
            key: 'getPostbyLoc',
            sec: '((|m5DlhrplfKx1'
        };
        var promise = new Promise(function (resolve) {
            _this.http.setDataSerializer('json');
            _this.http.post('https://zipship.io/api/user-posts.php', data, {})
                .then(function (res) {
                console.log(res);
                if (res.data != 'Data not Found' && res.data != 'Security Key is invalid') {
                    resolve(JSON.parse(res.data));
                }
                else
                    resolve('false');
            });
        });
        return promise;
    };
    ApiProvider.prototype.bid = function (pid, uid, amount, flight) {
        var _this = this;
        var data = {
            post_id: pid,
            user_id: uid,
            amount: amount,
            flight_id: flight,
            key: 'addbid',
            sec: '((|m5DlhrplfKx1'
        };
        var promise = new Promise(function (resolve) {
            _this.http.setDataSerializer('json');
            _this.http.post('https://zipship.io/api/biddingBc.php', data, {})
                .then(function (res) {
                console.log(res);
                // if ( res.data != 'User already Exist' && res.data == '1' )
                //   resolve( true );
                // else
                //   resolve( false )
            });
        });
        return promise;
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_http__["a" /* HTTP */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(262);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_responsive__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_css_animator__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_css_animator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_css_animator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_maps__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_api_api__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_http__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_transfer__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_image_picker__ = __webpack_require__(248);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7_css_animator__["AnimatesDirective"],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4_ngx_responsive__["a" /* ResponsiveModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    scrollAssist: false,
                    autoFocusAssist: false,
                    iconMode: 'ios',
                    pageTransition: 'ios-transition',
                    mode: 'ios'
                }, {
                    links: [
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-post/add-post.module#AddPostPageModule', name: 'AddPostPage', segment: 'add-post', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addflight/addflight.module#AddflightPageModule', name: 'AddflightPage', segment: 'addflight', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/card/card.module#CardPageModule', name: 'CardPage', segment: 'card', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/conversation/conversation.module#ConversationPageModule', name: 'ConversationPage', segment: 'conversation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flights/flights.module#FlightsPageModule', name: 'FlightsPage', segment: 'flights', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orders/orders.module#OrdersPageModule', name: 'OrdersPage', segment: 'orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-details/product-details.module#ProductDetailsPageModule', name: 'ProductDetailsPage', segment: 'product-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7_css_animator__["AnimationService"],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_11__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_15__ionic_native_image_picker__["a" /* ImagePicker */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import *as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyAjwOubcsmoO19VAyY3D-7SxJLVavG4wQU",
    authDomain: "zipship-645ad.firebaseapp.com",
    databaseURL: "https://zipship-645ad.firebaseio.com",
    projectId: "zipship-645ad",
    storageBucket: "zipship-645ad.appspot.com",
    messagingSenderId: "853143982866"
};
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = "LoginPage";
        platform.ready().then(function () {
            statusBar.backgroundColorByHexString('#571a94');
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // statusBar.styleDefault();
            splashScreen.hide();
        });
        // firebase.initializeApp(config);
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Hassan/Desktop/Ionic/zip/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Hassan/Desktop/Ionic/zip/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[254]);
//# sourceMappingURL=main.js.map