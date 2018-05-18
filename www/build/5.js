webpackJsonp([5],{

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightsPageModule", function() { return FlightsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flights__ = __webpack_require__(421);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FlightsPageModule = /** @class */ (function () {
    function FlightsPageModule() {
    }
    FlightsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__flights__["a" /* FlightsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__flights__["a" /* FlightsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__flights__["a" /* FlightsPage */]
            ]
        })
    ], FlightsPageModule);
    return FlightsPageModule;
}());

//# sourceMappingURL=flights.module.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(246);
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
 * Generated class for the FlightsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FlightsPage = /** @class */ (function () {
    function FlightsPage(http, navCtrl, navParams, platform, googleMaps) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.googleMaps = googleMaps;
        this.location = new __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["c" /* LatLng */](42.346903, -71.135101);
    }
    FlightsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var element = _this.mapElement.nativeElement;
            _this.map = _this.googleMaps.create(element);
            _this.map.one(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY).then(function () {
                var options = {
                    target: _this.location,
                    zoom: 8
                };
                _this.map.moveCamera(options);
            });
        });
    };
    FlightsPage.prototype.initializeMap = function () {
        var minZoomLevel = 2;
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 7,
            center: { lat: 41.85, lng: -87.65 }
        });
        // var flightPlanCoordinates = [
        //   { lat: 37.772, lng: -122.214 },
        //   { lat: 21.291, lng: -157.821 },
        //   { lat: -18.142, lng: 178.431 },
        //   { lat: -27.467, lng: 153.027 }
        // ];
        // var flightPath = new google.maps.Polyline( {
        //   path: flightPlanCoordinates,
        //   geodesic: true,
        //   strokeColor: '#FF0000',
        //   strokeOpacity: 1.0,
        //   strokeWeight: 2
        // } );
        // flightPath.setMap( this.map );
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], FlightsPage.prototype, "mapElement", void 0);
    FlightsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-flights',template:/*ion-inline-start:"/Users/Hassan/Desktop/Ionic/zip/src/pages/flights/flights.html"*/'<!--\n  Generated template for the FlightsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>flights</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-card *ngIf="false">\n  <ion-card-content text-center>\n    <ion-card-title>\n      Travelling Somewhere?\n    </ion-card-title>\n    <p>\n      Post a flight and start making money!\n    </p>\n    <br><br>\n    <button ion-button outline item-center>Add Flight</button>\n  </ion-card-content>\n</ion-card>\n\n\n<!-- <ion-card> -->\n\n\n\n<div #map id="map" style="height:100%"></div>\n<!-- \n  <ion-item>\n    <ion-icon name="football" item-start large></ion-icon>\n    <h2>Museum of Football</h2>\n    <p>11 N. Way St, Madison, WI 53703</p>\n  </ion-item>\n\n  <ion-item>\n    <ion-icon name="wine" item-left large></ion-icon>\n    <h2>Institute of Fine Cocktails</h2>\n    <p>14 S. Hop Avenue, Madison, WI 53703</p>\n  </ion-item>\n\n  <ion-item>\n    <span item-left>18 min</span>\n    <span item-left>(2.6 mi)</span>\n    <button ion-button icon-left clear item-end>\n      <ion-icon name="navigate"></ion-icon>\n      Start\n    </button>\n  </ion-item>\n\n</ion-card> -->\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Hassan/Desktop/Ionic/zip/src/pages/flights/flights.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */]])
    ], FlightsPage);
    return FlightsPage;
}());

//# sourceMappingURL=flights.js.map

/***/ })

});
//# sourceMappingURL=5.js.map