webpackJsonp([7],{

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationPageModule", function() { return ConversationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conversation__ = __webpack_require__(432);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConversationPageModule = /** @class */ (function () {
    function ConversationPageModule() {
    }
    ConversationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__conversation__["a" /* ConversationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__conversation__["a" /* ConversationPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__conversation__["a" /* ConversationPage */]
            ]
        })
    ], ConversationPageModule);
    return ConversationPageModule;
}());

//# sourceMappingURL=conversation.module.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the ConversationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConversationPage = /** @class */ (function () {
    function ConversationPage(_zone) {
        this._zone = _zone;
        this.messages = [];
        this.chatBox = "";
        this.btnEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.messages = [];
        this.chatBox = "";
        this.init();
    }
    // ionViewWillEnter ()
    // {
    //   this.databaseService.getJson( "messages" )
    //     .then( messages =>
    //     {
    //       if ( messages )
    //       {
    //         this.messages = this.messages.concat( _.sortBy( messages, ['epoch'] ) );
    //       }
    //       this.scrollToBottom();
    //     } );
    //   this.socketService.connect();
    // }
    ConversationPage.prototype.ionViewWillLeave = function () {
        // this.socketService.disconnect();
    };
    ConversationPage.prototype.init = function () {
        // this.socketService.messages.subscribe( ( chatMessage: ChatMessage ) =>
        // {
        //   this._zone.run( () =>
        //   {
        //     this.messages.push( chatMessage );
        //   } );
        //   this.scrollToBottom();
        // } );
    };
    ConversationPage.prototype.sendMessage = function () {
        this.btnEmitter.emit("sent clicked");
        this.txtChat.setFocus();
        var message = this.txtChat.content;
        this.send(message);
        this.txtChat.clearInput();
    };
    ConversationPage.prototype.send = function (message) {
        //todo read email from database
        var from = "annaggarwal@paypal.com";
        // this.socketService.newRequest( UtilService.formatMessageRequest( message, from ) );
        this.chatBox = '';
        this.scrollToBottom();
    };
    ConversationPage.prototype.scrollToBottom = function () {
        var _this = this;
        this._zone.run(function () {
            setTimeout(function () {
                _this.content.scrollToBottom(300);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('txtChat'),
        __metadata("design:type", Object)
    ], ConversationPage.prototype, "txtChat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
        __metadata("design:type", Object)
    ], ConversationPage.prototype, "content", void 0);
    ConversationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-conversation',template:/*ion-inline-start:"C:\Users\tooth\OneDrive\Desktop\zip\src\pages\conversation\conversation.html"*/'<!--suppress ALL -->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content #content>\n\n  <ion-list no-lines>\n\n    <ion-item *ngFor="let msg of messages">\n\n      <chat-bubble [chatMessage]="msg"></chat-bubble>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n<ion-footer no-border class="chatPageFooter" [keyboardAttach]="content" [btnClicked]="btnEmitter">\n\n  <ion-toolbar>\n\n    <ion-item no-lines>\n\n      <ion-label style="margin:0px;"></ion-label>\n\n      <div item-content style="width:100%;">\n\n        <elastic-textarea #txtChat placeholder="Send a message" lineHeight="20" maxExpand="5"></elastic-textarea>\n\n      </div>\n\n    </ion-item>\n\n    <ion-buttons right style="margin-left:10px">\n\n      <button ion-button icon-only style="margin-top: -15px;" [disabled]="txtChat.content.trim().length<1" (click)="sendMessage()">\n\n        <ion-icon name="md-send"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\tooth\OneDrive\Desktop\zip\src\pages\conversation\conversation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], ConversationPage);
    return ConversationPage;
}());

//# sourceMappingURL=conversation.js.map

/***/ })

});
//# sourceMappingURL=7.js.map