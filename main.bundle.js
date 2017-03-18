webpackJsonp([1,4],{

/***/ 289:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 289;


/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(401);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dog_data_structure__ = __webpack_require__(400);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Dog Food Calculator';
        this.year = 2017;
        this.month = 1;
        this.day = 3;
        this.today = new Date();
        this.clickMessage = '';
    }
    // todayYear = new Date().toISOString().slice(0,4).valueOf();//(0,10)
    //birthday:TheDate = new TheDate();
    AppComponent.prototype.onClickSubmit = function () {
        // console.log(this.kg);    
        var bJDN = this.julianDayNumber(this.year, this.month, this.day);
        var tJDN = this.julianDayNumber(this.today.getFullYear(), (this.today.getMonth() + 1), this.today.getDate());
        var birthStage = this.whichBirthStage(bJDN, tJDN);
        var weightStage = this.whichWeightStage(this.kg);
        var stage = 5 * birthStage + weightStage;
        console.log("birthStage = " + birthStage);
        console.log("weightStage = " + weightStage);
        console.log("Stage = " + stage);
        if (birthStage < 3 && weightStage < 5) {
            var spoonTotal = this.caculateSpoon(this.kg, stage);
            var spoonNum = spoonTotal * 8 * 30 / 4 / 15;
            this.clickMessage = '目前每餐餵 ' + spoonNum + ' 湯匙 (一湯匙 15ml)';
        }
        else {
            this.clickMessage = '您的狗狗不適用此飼料';
        }
        //  console.log("spoonTotal = " + spoonTotal);
        //  console.log("Spoon = " + spoonNum);
        //  console.log("bJDN : " + bJDN);
        //  console.log("tJDN : " + tJDN);
        //  console.log("Stage : " + birthStage);
    };
    AppComponent.prototype.julianDayNumber = function (year, month, day) {
        year += 8000;
        if (month < 3) {
            year--;
            month += 12;
        }
        return (year * 365) + (year / 4) - (year / 100) + (year / 400) - 1200820 + (month * 153 + 3) / 5 - 92 + day - 1;
    };
    AppComponent.prototype.whichBirthStage = function (bJDN, tJDN) {
        var difDays = tJDN - bJDN;
        if (difDays >= 0 && difDays < 123) {
            return 0;
        }
        else if (difDays >= 123 && difDays < 245) {
            return 1;
        }
        else if (difDays >= 245 && difDays < 366) {
            return 2;
        }
        else {
            return 10;
        }
    };
    AppComponent.prototype.whichWeightStage = function (kg) {
        if (kg >= 0.9 && kg <= 4.9) {
            return 0;
        }
        else if (kg >= 5 && kg <= 9.4) {
            return 1;
        }
        else if (kg >= 9.5 && kg <= 13.9) {
            return 2;
        }
        else if (kg >= 14 && kg <= 18.5) {
            return 3;
        }
        else if (kg >= 18.6 && kg <= 22.7) {
            return 4;
        }
        else {
            return 10;
        }
    };
    AppComponent.prototype.caculateSpoon = function (kg, stage) {
        var spoon = 0;
        var a1 = __WEBPACK_IMPORTED_MODULE_1__dog_data_structure__["a" /* FEEDS */][stage]["a1"];
        var a2 = __WEBPACK_IMPORTED_MODULE_1__dog_data_structure__["a" /* FEEDS */][stage]["a2"];
        var a3 = __WEBPACK_IMPORTED_MODULE_1__dog_data_structure__["a" /* FEEDS */][stage]["a3"];
        var a4 = __WEBPACK_IMPORTED_MODULE_1__dog_data_structure__["a" /* FEEDS */][stage]["a4"];
        console.log("KG = " + kg);
        console.log("a1 : " + a1);
        console.log("a2 : " + a2);
        console.log("a3 : " + a3);
        console.log("a4 : " + a4);
        return a1 + (kg - a2) * a3 / a4;
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(457),
            styles: [__webpack_require__(455)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(398);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TheDate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FEEDS; });
var TheDate = (function () {
    function TheDate() {
    }
    return TheDate;
}());
var FEEDS = [
    { "a1": 0.25, "a2": 0.9, "a3": 1.25, "a4": 4 },
    { "a1": 1.5, "a2": 5, "a3": 1, "a4": 4.4 },
    { "a1": 2.5, "a2": 9.5, "a3": 1, "a4": 4.4 },
    { "a1": 3.5, "a2": 14, "a3": 1, "a4": 4.5 },
    { "a1": 4.5, "a2": 18.6, "a3": 0.75, "a4": 4.08 },
    { "a1": 0.25, "a2": 0.9, "a3": 1, "a4": 4 },
    { "a1": 1.25, "a2": 5, "a3": 1, "a4": 4.4 },
    { "a1": 2.25, "a2": 9.5, "a3": 0.75, "a4": 4.4 },
    { "a1": 3, "a2": 14, "a3": 0.75, "a4": 4.5 },
    { "a1": 3.75, "a2": 18.6, "a3": 0.5, "a4": 4.08 },
    { "a1": 0.25, "a2": 0.9, "a3": 0.75, "a4": 4 },
    { "a1": 1, "a2": 5, "a3": 0.75, "a4": 4.4 },
    { "a1": 1.75, "a2": 9.5, "a3": 0.75, "a4": 4.4 },
    { "a1": 2.5, "a2": 14, "a3": 0.5, "a4": 4.5 },
    { "a1": 3, "a2": 18.6, "a3": 0.5, "a4": 4.08 }
];
//# sourceMappingURL=dog-data-structure.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(189)();
// imports


// module
exports.push([module.i, "/*app-root{\r\n    width: 50%;\r\n    max-width: 800px;\r\n    background-color:  #e6ffcc;\r\n}*/\r\n.title{\r\n    background-color: rgba(77,77,77,0.8);\r\n    color: #ccff99;\r\n    font-weight: 900;\r\n    max-width: 600px;\r\n    padding: 20px 40px;\r\n\r\n    border-radius: 10px;\r\n    box-shadow:  0px 0px 10px rgba(0,0,0,0.2), 0px 25px 60px -10px rgba(0,0,0,0.3);  \r\n}\r\n\r\n.page{\r\n    padding: 15px;\r\n    margin: 15px;\r\n    max-width: 600px;\r\n    background-color: #fff;\r\n    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);\r\n    border-radius: 5px;    \r\n    color: #555\r\n}\r\n/*.page.input-data*/\r\ninput{\r\n    width: 140px;\r\n    border: solid 1px gray;\r\n    padding: 4px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 457:
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"app-component\">-->\r\n  <h1 class=\"title\">\r\n    {{title}}\r\n  </h1>\r\n\r\n<div class=\"page\">\r\n  <div class = \"input-data\">\r\n    \r\n    請輸入資料：<br/>\r\n    狗狗目前 <input type=\"number\" placeholder=\"可以至小數點第一位\" min=0.9 max=22.6 [(ngModel)]=\"kg\" /> 公斤<br/>\r\n    \r\n    <span>狗狗生日</span>\r\n    西元 <input type=\"number\" min=1989 max=2017 [(ngModel)]=\"year\"/> 年\r\n    <input type=\"number\" min=\"1\" max=\"12\" [(ngModel)]=\"month\"/> 月\r\n    <input type=\"number\" min=\"1\" max=\"31\" [(ngModel)]=\"day\"/> 日\r\n    \r\n    <br/>  <br/>\r\n    您所輸入的資料如下<br/>\r\n    公斤數：{{kg}} <br/>\r\n    生日：{{year}}年{{month}}月{{day}}日<br/><br/>\r\n\r\n    確認無誤請送出資料\r\n    <button (click)=\"onClickSubmit()\" >送出</button>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf = \"clickMessage\" class=\"page\">\r\n\r\n  <div class=\"output-data\">\r\n    <br/>\r\n    {{clickMessage}}\r\n    <br/>\r\n    <br/>\r\n    <hr/>\r\n    <!--<br/>\r\n    狗狗生日{{birthday | date}}\r\n    目前每餐餵 {{spoonNum}} 湯匙<br/>\r\n    (一湯匙15ml)<br/>-->\r\n  </div>\r\n\r\n\r\n  <div class=\"memo\">\r\n    <br/>\r\n    公式：(公斤及歲數對應的數量(湯匙/oz)*8oz*30ml/4(餐))/15ml(一湯匙的量)\r\n    <br/>\r\n    <br/>\r\n    <hr/>\r\n  </div>\r\n  \r\n</div>  \r\n<!--</div>-->"

/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(290);


/***/ })

},[470]);
//# sourceMappingURL=main.bundle.js.map