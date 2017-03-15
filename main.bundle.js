webpackJsonp([1,4],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms_src_facade_async__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpensesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExpensesService = (function () {
    function ExpensesService(usersService) {
        this.usersService = usersService;
        //Expense Object structure: 
        // {
        //   name: string, 
        //   amount: number, 
        //   category: string
        // }
        //
        // mainList structure :
        // {
        //   "category1": [{Expense1}, {Expense2 }, {Expense3}],
        //   "category2": [{Expense1}, {Expense2 }]
        // }
        //retrieve data from local storage if present, otherwise create empty object
        this.mainList = {};
        //observable, used to update results in resultsComponent when data changes
        this.anounceChange = new __WEBPACK_IMPORTED_MODULE_1__angular_forms_src_facade_async__["a" /* EventEmitter */]();
        this.activeUser = this.usersService.activeUser;
        var id = this.activeUser.id;
        console.log(id);
        var users = this.usersService.users;
        console.log(users);
        this.mainList = users[id].expenses || {};
    }
    ExpensesService.prototype.addExpense = function (expense) {
        if (this.mainList.hasOwnProperty(expense.category)) {
            this.mainList[expense.category].push(expense);
            this.usersService.addExpenses(this.mainList);
            this.anounceChange.emit();
            console.log(this.usersService.users);
        }
        else {
            this.mainList[expense.category] = new Array;
            this.mainList[expense.category].push(expense);
            this.usersService.addExpenses(this.mainList);
            this.anounceChange.emit();
            console.log(this.usersService.users);
        }
    };
    ExpensesService.prototype.deleteExpense = function (expense) {
        var index = this.mainList[expense.category].indexOf(expense);
        this.mainList[expense.category].splice(index, 1);
        if (this.mainList[expense.category][0] == null) {
            delete this.mainList[expense.category];
        }
    };
    ExpensesService.prototype.editExpense = function () {
        this.usersService.addExpenses(this.mainList);
    };
    ExpensesService.prototype.getTotalExpenses = function () {
        var totalExpenses = 0;
        for (var category in this.mainList) {
            for (var _i = 0, _a = this.mainList[category]; _i < _a.length; _i++) {
                var expense = _a[_i];
                totalExpenses += expense.amount;
            }
        }
        return totalExpenses;
    };
    ExpensesService.prototype.getCategories = function () {
        return Object.keys(this.mainList);
    };
    ExpensesService.prototype.getCategoryTotalsArray = function () {
        var categoryTotals = [];
        for (var category in this.mainList) {
            var sum = 0;
            for (var _i = 0, _a = this.mainList[category]; _i < _a.length; _i++) {
                var expense = _a[_i];
                sum += expense.amount;
            }
            categoryTotals.push(sum);
        }
        return categoryTotals;
    };
    ExpensesService.prototype.getMainList = function () {
        return this.mainList;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], ExpensesService.prototype, "anounceChange", void 0);
    ExpensesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__users_service__["a" /* UsersService */]) === 'function' && _a) || Object])
    ], ExpensesService);
    return ExpensesService;
    var _a;
}());
//# sourceMappingURL=expenses.service.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms_src_facade_async__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncomesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IncomesService = (function () {
    function IncomesService(usersService) {
        this.usersService = usersService;
        //Income Object structure: 
        // {
        //   name: string, 
        //   amount: number, 
        //   category: string
        // }
        //
        // mainList structure :
        // {
        //   "category1": [{Income1}, {Income2 }, {Income3}],
        //   "category2": [{Income1}, {Income2 }]
        // }
        this.mainList = {};
        this.activeUser = {};
        this.anounceChange = new __WEBPACK_IMPORTED_MODULE_1__angular_forms_src_facade_async__["a" /* EventEmitter */]();
        this.activeUser = this.usersService.activeUser;
        var id = this.activeUser.id;
        var users = this.usersService.users;
        this.mainList = users[id].incomes || {};
    }
    IncomesService.prototype.addIncome = function (income) {
        if (this.mainList.hasOwnProperty(income.category)) {
            this.mainList[income.category].push(income);
            this.usersService.addIncomes(this.mainList);
            this.anounceChange.emit();
        }
        else {
            this.mainList[income.category] = new Array;
            this.mainList[income.category].push(income);
            this.usersService.addIncomes(this.mainList);
            this.anounceChange.emit();
        }
    };
    IncomesService.prototype.deleteIncome = function (income) {
        var index = this.mainList[income.category].indexOf(income);
        this.mainList[income.category].splice(index, 1);
        if (this.mainList[income.category][0] == null) {
            delete this.mainList[income.category];
        }
        this.usersService.addIncomes(this.mainList);
    };
    IncomesService.prototype.editIncome = function () {
        this.usersService.addIncomes(this.mainList);
    };
    IncomesService.prototype.getTotalIncomes = function () {
        var totalIncomes = 0;
        for (var category in this.mainList) {
            for (var _i = 0, _a = this.mainList[category]; _i < _a.length; _i++) {
                var expense = _a[_i];
                totalIncomes += expense.amount;
            }
        }
        return totalIncomes;
    };
    IncomesService.prototype.getCategories = function () {
        return Object.keys(this.mainList);
    };
    IncomesService.prototype.getCategoryTotalsArray = function () {
        var categoryTotals = [];
        for (var category in this.mainList) {
            var sum = 0;
            for (var _i = 0, _a = this.mainList[category]; _i < _a.length; _i++) {
                var expense = _a[_i];
                sum += expense.amount;
            }
            categoryTotals.push(sum);
        }
        return categoryTotals;
    };
    IncomesService.prototype.getMainList = function () {
        return this.mainList;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], IncomesService.prototype, "anounceChange", void 0);
    IncomesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__users_service__["a" /* UsersService */]) === 'function' && _a) || Object])
    ], IncomesService);
    return IncomesService;
    var _a;
}());
//# sourceMappingURL=incomes.service.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(id, firstName, lastName, email, password, expenses, incomes) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.expenses = expenses;
        this.incomes = incomes;
    }
    return User;
}());
//# sourceMappingURL=user.js.map

/***/ }),

/***/ 334:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 334;


/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(469);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(538),
            styles: [__webpack_require__(523)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dropdown_directive__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__main_results_results_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__main_add_Entry_add_expense_add_expense_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__main_add_entry_add_income_add_income_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__main_add_entry_add_entry_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__detail_report_detail_report_component__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__main_main_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__landing_landing_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_login_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__signup_signup_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__user_user_component__ = __webpack_require__(468);
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




















var userRoutes = [
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_15__main_main_component__["a" /* MainComponent */] },
    { path: 'report', component: __WEBPACK_IMPORTED_MODULE_14__detail_report_detail_report_component__["a" /* DetailReportComponent */] }
];
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_16__landing_landing_component__["a" /* LandingComponent */] },
    { path: 'user/:id', component: __WEBPACK_IMPORTED_MODULE_19__user_user_component__["a" /* UserComponent */], children: userRoutes },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__dropdown_directive__["a" /* DropdownDirective */],
                __WEBPACK_IMPORTED_MODULE_10__main_results_results_component__["a" /* ResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__main_add_Entry_add_expense_add_expense_component__["a" /* AddExpenseComponent */],
                __WEBPACK_IMPORTED_MODULE_12__main_add_entry_add_income_add_income_component__["a" /* AddIncomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__main_add_entry_add_entry_component__["a" /* AddEntryComponent */],
                __WEBPACK_IMPORTED_MODULE_14__detail_report_detail_report_component__["a" /* DetailReportComponent */],
                __WEBPACK_IMPORTED_MODULE_15__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_16__landing_landing_component__["a" /* LandingComponent */],
                __WEBPACK_IMPORTED_MODULE_17__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_18__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_19__user_user_component__["a" /* UserComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_0__users_service__["a" /* UsersService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__incomes_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__expenses_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailReportComponent = (function () {
    function DetailReportComponent(expensesService, incomesService) {
        this.expensesService = expensesService;
        this.incomesService = incomesService;
        this.updateData();
    }
    DetailReportComponent.prototype.updateData = function () {
        this.expensesMainList = this.expensesService.getMainList();
        this.incomesMainList = this.incomesService.getMainList();
        this.totalExpenses = this.expensesService.getTotalExpenses();
        this.totalIncomes = this.incomesService.getTotalIncomes();
        //categpries of expenses/incomes (labels) -- checking first that its not empty, otherwise assign "no expenses" to it
        this.expensesCategoryArray = this.expensesService.getCategories()[0] && this.expensesService.getCategories() || ["No Expenses"];
        this.incomesCategoryArray = this.incomesService.getCategories()[0] && this.incomesService.getCategories() || ["No Incomes"];
        //total expenses/incomes for  each category
        this.expensesCategoryTotalsArray = this.expensesService.getCategoryTotalsArray()[0] && this.expensesService.getCategoryTotalsArray() || [0];
        this.incomesCategoryTotalsArray = this.incomesService.getCategoryTotalsArray()[0] && this.incomesService.getCategoryTotalsArray() || [0];
    };
    DetailReportComponent.prototype.ngOnInit = function () {
    };
    DetailReportComponent.prototype.deleteExpense = function (expense) {
        this.expensesService.deleteExpense(expense);
        this.updateData();
    };
    DetailReportComponent.prototype.deleteIncome = function (income) {
        this.incomesService.deleteIncome(income);
        this.updateData();
    };
    DetailReportComponent.prototype.enableEdit = function (element) {
        element.disabled = false;
    };
    DetailReportComponent.prototype.disableEdit = function (element) {
        element.disabled = true;
        //to save updated list to local storage
        this.expensesService.editExpense();
        this.incomesService.editIncome();
        this.updateData();
    };
    DetailReportComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-detail-report',
            template: __webpack_require__(539),
            styles: [__webpack_require__(524)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__expenses_service__["a" /* ExpensesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__expenses_service__["a" /* ExpensesService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__incomes_service__["a" /* IncomesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__incomes_service__["a" /* IncomesService */]) === 'function' && _b) || Object])
    ], DetailReportComponent);
    return DetailReportComponent;
    var _a, _b;
}());
//# sourceMappingURL=detail-report.component.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = (function () {
    function DropdownDirective(elementRef) {
        this.elementRef = elementRef;
        this.opened = false;
    }
    DropdownDirective.prototype.onClick = function () {
        this.opened = !this.opened;
    };
    DropdownDirective.prototype.onLeave = function () {
        this.opened = false;
    };
    Object.defineProperty(DropdownDirective.prototype, "onOpen", {
        get: function () {
            return this.opened;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], DropdownDirective.prototype, "onClick", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], DropdownDirective.prototype, "onLeave", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.open'), 
        __metadata('design:type', Object)
    ], DropdownDirective.prototype, "onOpen", null);
    DropdownDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appDropdown]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object])
    ], DropdownDirective);
    return DropdownDirective;
    var _a;
}());
//# sourceMappingURL=dropdown.directive.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Expense; });
var Expense = (function () {
    function Expense(name, amount, category) {
        this.name = name;
        this.amount = amount;
        this.category = category;
    }
    return Expense;
}());
//# sourceMappingURL=expense.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(usersService, router) {
        this.usersService = usersService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        this.usersService.logout();
        this.router.navigate(['']);
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(540),
            styles: [__webpack_require__(525)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UsersService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b;
}());
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Income; });
var Income = (function () {
    function Income(name, amount, category) {
        this.name = name;
        this.amount = amount;
        this.category = category;
    }
    return Income;
}());
//# sourceMappingURL=income.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = (function () {
    // @HostListener('window:resize', ['$event'])
    // onResize(event) {
    //   this.height = event.target.innerHeight;
    //   this.width = event.target.innerWidth;
    // }
    function LandingComponent() {
        this.height = document.documentElement.clientHeight;
        this.width = document.documentElement.clientWidth;
        this.signupView = true;
        this.loginView = false;
    }
    LandingComponent.prototype.onResize = function (event) {
        this.height = event.target.innerHeight;
        this.width = event.target.innerWidth;
    };
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent.prototype.openSignup = function () {
        this.loginView = false;
        this.signupView = true;
        console.log(this.loginView);
    };
    LandingComponent.prototype.openLogin = function () {
        this.signupView = false;
        this.loginView = true;
        console.log(this.loginView);
    };
    LandingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(541),
            styles: [__webpack_require__(526)]
        }), 
        __metadata('design:paramtypes', [])
    ], LandingComponent);
    return LandingComponent;
}());
//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(usersService, router) {
        this.usersService = usersService;
        this.router = router;
        this.userToBeLogged = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
        this.wrongEmailPassword = false;
        //emitter recieved by landing page to activate login upon clicking go to login <a> element
        this.createAccountClicked = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onClick = function () {
        this.createAccountClicked.emit();
    };
    LoginComponent.prototype.onSubmit = function () {
        //loginUser method, logs in the user and returns its id, reutrn null if didnt log in successfuly
        var id = this.usersService.loginUser(this.userToBeLogged);
        if (id) {
            this.router.navigate(['user', id, 'main']);
        }
        else {
            this.wrongEmailPassword = true;
        }
        ;
        this.userToBeLogged = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], LoginComponent.prototype, "createAccountClicked", void 0);
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(542),
            styles: [__webpack_require__(527)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UsersService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__expenses_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expense__ = __webpack_require__(457);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddExpenseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddExpenseComponent = (function () {
    function AddExpenseComponent(expensesService) {
        this.expensesService = expensesService;
        this.expense = new __WEBPACK_IMPORTED_MODULE_2__expense__["a" /* Expense */]("", 0, "Bills");
        //viewOn is the variable used in *ngIf to populate the view, and its bound from the parent component(AddEntryComponent)
        this.viewOn = false;
    }
    AddExpenseComponent.prototype.ngOnInit = function () { };
    AddExpenseComponent.prototype.onSubmit = function () {
        this.expensesService.addExpense(this.expense);
        //after adding expense create a new instance, so it wont update the same old instance
        this.expense = new __WEBPACK_IMPORTED_MODULE_2__expense__["a" /* Expense */]("", 0, "Bills");
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], AddExpenseComponent.prototype, "viewOn", void 0);
    AddExpenseComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-expense',
            template: __webpack_require__(543),
            styles: [__webpack_require__(528)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__expenses_service__["a" /* ExpensesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__expenses_service__["a" /* ExpensesService */]) === 'function' && _a) || Object])
    ], AddExpenseComponent);
    return AddExpenseComponent;
    var _a;
}());
//# sourceMappingURL=add-expense.component.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEntryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddEntryComponent = (function () {
    function AddEntryComponent() {
        //variables to toggle view between add-expense and add-income components
        this.expense = true;
        this.income = false;
    }
    AddEntryComponent.prototype.ngOnInit = function () {
    };
    AddEntryComponent.prototype.toggleView = function (tab) {
        if (tab === "expense") {
            this.expense = true;
            this.income = false;
        }
        else if (tab === "income") {
            this.income = true;
            this.expense = false;
        }
    };
    AddEntryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-entry',
            template: __webpack_require__(544),
            styles: [__webpack_require__(529)]
        }), 
        __metadata('design:paramtypes', [])
    ], AddEntryComponent);
    return AddEntryComponent;
}());
//# sourceMappingURL=add-entry.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__incomes_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__income__ = __webpack_require__(459);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddIncomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddIncomeComponent = (function () {
    function AddIncomeComponent(incomesService) {
        this.incomesService = incomesService;
        this.income = new __WEBPACK_IMPORTED_MODULE_2__income__["a" /* Income */]("", 0, "Salary");
        //viewOn is the variable used in *ngIf to populate the view, and its bound from the parent component(AddEntryComponent)
        this.viewOn = false;
    }
    AddIncomeComponent.prototype.openView = function () {
        this.viewOn = true;
    };
    AddIncomeComponent.prototype.ngOnInit = function () { };
    AddIncomeComponent.prototype.onSubmit = function () {
        this.incomesService.addIncome(this.income);
        //after adding expense create a new instance, so it wont update the same old instance
        this.income = new __WEBPACK_IMPORTED_MODULE_2__income__["a" /* Income */]("", 0, "Salary");
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], AddIncomeComponent.prototype, "viewOn", void 0);
    AddIncomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-add-income',
            template: __webpack_require__(545),
            styles: [__webpack_require__(530)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__incomes_service__["a" /* IncomesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__incomes_service__["a" /* IncomesService */]) === 'function' && _a) || Object])
    ], AddIncomeComponent);
    return AddIncomeComponent;
    var _a;
}());
//# sourceMappingURL=add-income.component.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = (function () {
    function MainComponent(activeRoute) {
        this.activeRoute = activeRoute;
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(546),
            styles: [__webpack_require__(531)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], MainComponent);
    return MainComponent;
    var _a;
}());
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__incomes_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__expenses_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultsComponent = (function () {
    function ResultsComponent(expensesService, incomesService) {
        this.expensesService = expensesService;
        this.incomesService = incomesService;
        this.totalExpenses = this.expensesService.getTotalExpenses();
        this.totalIncomes = this.incomesService.getTotalIncomes();
        this.expenseIncomePercent = this.totalExpenses / this.totalIncomes * 100;
        //categpries of expenses (labels) -- checking first that its not empty, otherwise assign "no expenses" to it
        this.categoryArray = this.expensesService.getCategories()[0] && this.expensesService.getCategories() || ["No Expenses"];
        //total expenses for each category
        this.categoryTotalsArray = this.expensesService.getCategoryTotalsArray()[0] && this.expensesService.getCategoryTotalsArray() || [0];
        // Doughnut
        this.doughnutChartLabels = this.categoryArray;
        this.doughnutChartData = this.categoryTotalsArray;
    }
    ResultsComponent.prototype.updateResults = function () {
        this.totalExpenses = this.expensesService.getTotalExpenses();
        this.totalIncomes = this.incomesService.getTotalIncomes();
        this.expenseIncomePercent = this.totalExpenses / this.totalIncomes * 100;
        //only update arrays if there is data, otherwise put ['no expenses'] and [100]
        this.categoryArray = this.expensesService.getCategories()[0] && this.expensesService.getCategories() || ["No Expenses"];
        this.categoryTotalsArray = this.expensesService.getCategoryTotalsArray()[0] && this.expensesService.getCategoryTotalsArray() || [0];
        this.doughnutChartLabels = this.categoryArray;
        this.doughnutChartData = this.categoryTotalsArray;
    };
    ResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //update results whenever expenses or incomes changes
        this.expensesService.anounceChange.subscribe(function (p) { _this.updateResults(); });
        this.incomesService.anounceChange.subscribe(function (p) { _this.updateResults(); });
    };
    // events, 
    ResultsComponent.prototype.chartClicked = function (e) { };
    ResultsComponent.prototype.chartHovered = function (e) { };
    ResultsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-results',
            template: __webpack_require__(547),
            styles: [__webpack_require__(532)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__expenses_service__["a" /* ExpensesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__expenses_service__["a" /* ExpensesService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__incomes_service__["a" /* IncomesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__incomes_service__["a" /* IncomesService */]) === 'function' && _b) || Object])
    ], ResultsComponent);
    return ResultsComponent;
    var _a, _b;
}());
//# sourceMappingURL=results.component.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(UsersService, router, activeRoute) {
        this.UsersService = UsersService;
        this.router = router;
        this.activeRoute = activeRoute;
        this.userToBeAdded = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
        //used to style email input if email is unavailable
        this.emailUnAvailable = false;
        //emitter recieved by landing page to activate login upon clicking go to login <a> element
        this.goToLoginClicked = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]();
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onClick = function () {
        this.goToLoginClicked.emit();
    };
    SignupComponent.prototype.onSubmit = function () {
        var id = Math.floor(Math.random() * 1000000);
        //keep generating ids in case of a duplicate in users list
        while (this.UsersService.users.hasOwnProperty(id)) {
            id = Math.floor(Math.random() * 1000000);
        }
        this.userToBeAdded.id = id;
        //only navigate if user is added, addUser function return false if email is taken
        if (this.UsersService.addUser(this.userToBeAdded)) {
            this.router.navigate(['user', id, 'main']);
        }
        else {
            this.emailUnAvailable = true;
        }
        this.userToBeAdded = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], SignupComponent.prototype, "goToLoginClicked", void 0);
    SignupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(548),
            styles: [__webpack_require__(533)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UsersService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */]) === 'function' && _d) || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__incomes_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__expenses_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(549),
            styles: [__webpack_require__(534)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__expenses_service__["a" /* ExpensesService */], __WEBPACK_IMPORTED_MODULE_0__incomes_service__["a" /* IncomesService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], UserComponent);
    return UserComponent;
}());
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ 469:
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

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".expense-amount {\r\n    text-align: right;\r\n}\r\n\r\n.expense-name {\r\n    text-align: left;\r\n}\r\n\r\n.thead-expense {\r\n    background-color: #c0392b;\r\n    color: white;\r\n}\r\n\r\n.thead-income {\r\n    background-color: #16a085;\r\n    color: white;\r\n}\r\n\r\n#expense-container {\r\n    border: 1px solid #c0392b;\r\n    border-radius: 10px;\r\n    padding: 0;\r\n    margin: 10px;\r\n}\r\n\r\n#income-container {\r\n    border: 1px solid #16a085;\r\n    border-radius: 10px;\r\n    padding: 0;\r\n    margin: 10px;\r\n}\r\n\r\ntable th {\r\n    border: none;\r\n}\r\n\r\n.total {\r\n    padding: 20px;\r\n    text-align: center;\r\n    color: white;\r\n    font-size: 1.4em;\r\n}\r\n\r\n#total-expense {\r\n    background-color: #c0392b;\r\n}\r\n\r\n#total-income {\r\n    background-color: #16a085;\r\n}\r\n\r\n#extra-cash {\r\n    background-color: grey;\r\n    border-radius: 5px;\r\n}\r\n\r\n.form-control {\r\n    width: 75px;\r\n    display: inline-block;\r\n    height: 27px;\r\n}\r\n\r\n.form-control:disabled {\r\n    cursor: default;\r\n    border: none;\r\n    background-color: white;\r\n    box-shadow: none;\r\n}\r\n\r\nbutton {\r\n    margin-right: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "#main-container {\r\n    background: -webkit-linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/https:/okashoon.github.io/angular-expense-planner/assets/images/expenses.svg') no-repeat center center fixed;\r\n    background: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/https:/okashoon.github.io/angular-expense-planner/assets/images/expenses.svg') no-repeat center center fixed;\r\n    background-size: cover;\r\n    text-align: center;\r\n    -webkit-filter: drop-shadow(10);\r\n            filter: drop-shadow(10)\r\n}\r\n\r\n#title {\r\n    position: absolute;\r\n    top: 20%;\r\n    left: 30%;\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "#main-container {\r\n    background-color: white;\r\n    border: 1px solid grey;\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 30%;\r\n    width: 45%;\r\n    height: 45%;\r\n    max-width: 400px;\r\n}\r\n\r\n.form-control,\r\n.btn {\r\n    margin-top: 20px;\r\n}\r\n\r\na:hover {\r\n    cursor: pointer;\r\n}\r\n\r\na {\r\n    margin-top: 10px;\r\n}\r\n\r\n#password-error {\r\n    float: left;\r\n    color: red;\r\n    margin-left: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".centered {\r\n    margin: 0 auto;\r\n    width: 90%;\r\n}\r\n\r\n.input-group {\r\n    margin-bottom: 30px;\r\n}\r\n\r\nform {\r\n    padding: 30px;\r\n    background-color: white;\r\n}\r\n\r\nbutton {\r\n    background-color: #c0392b;\r\n}\r\n\r\ni {\r\n    margin-right: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".income {\r\n    border-radius: 10px;\r\n    background-color: #16a085;\r\n    padding: 5px;\r\n}\r\n\r\n.expense {\r\n    border-radius: 10px;\r\n    background-color: #c0392b;\r\n    padding: 5px;\r\n}\r\n\r\n#expense-a {\r\n    background-color: #c0392b;\r\n    color: white;\r\n}\r\n\r\nli.active #expense-a {\r\n    background-color: white;\r\n    color: #3498db;\r\n}\r\n\r\nli.active #income-a {\r\n    background-color: white;\r\n    color: #3498db;\r\n}\r\n\r\n#income-a {\r\n    background-color: #16a085;\r\n    color: white;\r\n}\r\n\r\n.nav-tabs {\r\n    border: none;\r\n}\r\n\r\na {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".centered {\r\n    margin: auto;\r\n    width: 90%;\r\n}\r\n\r\n.input-group {\r\n    margin-bottom: 30px;\r\n}\r\n\r\nform {\r\n    padding: 30px;\r\n    background-color: white;\r\n}\r\n\r\nbutton {\r\n    background-color: #16a085;\r\n}\r\n\r\ni {\r\n    margin-right: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".total {\r\n    border-radius: 5%;\r\n    text-align: center;\r\n    margin-top: 2px;\r\n    margin-right: 2px;\r\n}\r\n\r\n#results-container {\r\n    text-align: center;\r\n    border: 1px solid grey;\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n}\r\n\r\n#income-expense-container {\r\n    text-align: center;\r\n}\r\n\r\n#total-income {\r\n    text-align: right;\r\n    padding: 10px;\r\n}\r\n\r\n#report i {\r\n    position: initial;\r\n}\r\n\r\n#report {\r\n    display: block;\r\n    margin: 50px auto;\r\n}\r\n\r\ncanvas {\r\n    height: 800px;\r\n}\r\n\r\nbody {\r\n    margin: 30px 0px;\r\n}\r\n\r\n.progress {\r\n    position: relative;\r\n    height: 100px;\r\n    background-color: #16a085;\r\n}\r\n\r\n.progress>.progress-expense {\r\n    position: absolute;\r\n    top: 5px;\r\n    color: white;\r\n    text-align: right;\r\n}\r\n\r\n.progress>.progress-remaining {\r\n    position: absolute;\r\n    bottom: 5px;\r\n    right: 0px;\r\n    padding: 3px 10px 2px;\r\n    color: #ecf0f1;\r\n    text-align: right;\r\n}\r\n\r\n.progress-bar {\r\n    background-color: #c0392b;\r\n}\r\n\r\ni {\r\n    position: relative;\r\n    top: 15px;\r\n    right: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "#main-container {\r\n    background-color: white;\r\n    border: 1px solid grey;\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 30%;\r\n    width: 400px;\r\n    height: 350px;\r\n    max-width: 500px;\r\n}\r\n\r\n.form-control,\r\n.btn {\r\n    margin-top: 20px;\r\n}\r\n\r\na:hover {\r\n    cursor: pointer;\r\n}\r\n\r\na {\r\n    display: inline-block;\r\n    margin-top: 10px;\r\n}\r\n\r\n#email-error {\r\n    color: red;\r\n    float: left;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 538:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 539:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <app-header></app-header>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\" id=\"expense-container\">\r\n            <!--iterate through categories and create a separate table for each category-->\r\n            <table class=\"table \" *ngFor=\"let category of expensesCategoryArray; let i = index\">\r\n                <thead class=\"thead-expense\">\r\n                    <tr>\r\n                        <th class=\"expense-name\">{{category}}</th>\r\n                        <th class=\"expense-amount\">Total: {{expensesCategoryTotalsArray[i]}} L.E</th>\r\n                        <th></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <!--iterate through expenses in that category-->\r\n                    <tr *ngFor=\"let expense of expensesMainList[category]; let k = index\">\r\n                        <td class=\"expense-name\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{expense.name}}</td>\r\n                        <td class=\"expense-amount\">\r\n                            <!--amount is put in a disabled input element, which is styled like a normal text, that changes styling if toggled to \r\n                        non-disabled to a normal text input, toggling is done by edit button - enableEdit function-->\r\n                            <input #expenseAmount (keyup.enter)=\"disableEdit(expenseAmount)\" disabled class=\"form-control form-control-sm\" type=\"number\" [(ngModel)]=\"expense.amount\"> L.E\r\n                        </td>\r\n                        <td>\r\n                            <button (click)=\"deleteExpense(expense)\" class=\"btn btn-danger pull-right\"> <i class=\"fa fa-trash-o\"></i></button>\r\n                            <button (click)=\"enableEdit(expenseAmount)\" class=\"btn btn-success pull-right\"><i class=\"fa fa-pencil\"></i></button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <div id=\"total-expense\" class=\"total\">\r\n                Total: {{totalExpenses}} L.E\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-5\" id=\"income-container\">\r\n            <!--iterate through categories and create a separate table for each category-->\r\n            <table class=\"table \" *ngFor=\"let category of incomesCategoryArray; let i = index\">\r\n                <thead class=\"thead-income\">\r\n                    <tr>\r\n                        <th class=\"expense-name\">{{category}}</th>\r\n                        <th class=\"expense-amount\">Total: {{incomesCategoryTotalsArray[i]}} L.E</th>\r\n                        <th></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <!--iterate through expenses in that category-->\r\n                    <tr *ngFor=\"let income of incomesMainList[category]; let k = 'index + 1' \">\r\n                        <td class=\"expense-name\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{income.name}}</td>\r\n                        <td class=\"expense-amount\">\r\n                            <!--amount is put in a disabled input element, which is styled like a normal text, that changes styling if toggled to \r\n                        non-disabled to a normal text input, toggling is done by edit button - enableEdit function-->\r\n                            <input #incomeAmount (keyup.enter)=\"disableEdit(incomeAmount)\" disabled class=\"form-control form-control-sm\" type=\"number\" [(ngModel)]=\"income.amount\"> L.E\r\n                        </td>\r\n                        <td>\r\n                            <button (click)=\"deleteIncome(income)\" class=\"btn btn-danger pull-right\"> <i class=\"fa fa-trash-o\"></i></button>\r\n                            <button (click)=\"enableEdit(incomeAmount)\" class=\"btn btn-success pull-right\"><i class=\"fa fa-pencil\"></i></button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <div id=\"total-income\" class=\"total\">\r\n                Total: {{totalIncomes}} L.E\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\" class=\"total\" id=\"extra-cash\">\r\n            Extra Cash: {{totalIncomes - totalExpenses}} L.E\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 540:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" routerLink=\"../main\">Expense Planner</a>\r\n        </div>\r\n\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li><a routerLink=\"../main\">Main</a></li>\r\n                <li><a routerLink=\"../report\">Report</a></li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li class=\"dropdown\" appDropdown>\r\n                    <a class=\"dropdown-toggle\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">User <span class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a (click)=\"logout()\">Logout</a></li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ 541:
/***/ (function(module, exports) {

module.exports = "<div (window:resize)=\"onResize($event)\" [style.width.px]=\"width\" [style.height.px]=\"height\" id=\"main-container\">\n    <span id=\"title\">\n        <h2>Expense Planner</h2>\n        <h3>The easy way to take control of your money</h3>\n    </span>\n    <app-login (createAccountClicked)=\"openSignup()\" *ngIf=\"loginView\"></app-login>\n    <app-signup (goToLoginClicked)=\"openLogin()\" *ngIf=\"signupView\"></app-signup>\n</div>"

/***/ }),

/***/ 542:
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\">\n    <h3>Login</h3>\n    <form (ngSubmit)=\"onSubmit()\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <input type=\"email\" class=\"form-control\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"userToBeLogged.email\" required>\n            </div>\n            <div class=\"col-md-12\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"userToBeLogged.password\" required>\n            </div>\n            <span id=\"password-error\" *ngIf=\"wrongEmailPassword\">Incorrect Email or Password </span>\n\n        </div>\n\n        <button class=\"btn btn-primary btn-block \" type=\"submit\"><i class=\"fa \"></i>Login</button>\n        <a (click)=\"onClick()\">Create account</a>\n    </form>\n</div>"

/***/ }),

/***/ 543:
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n\r\n    <div *ngIf=\"viewOn\">\r\n        <form (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"input-group centered\">\r\n                <input type=\"text\" class=\"form-control \" placeholder=\"Expense\" name=\"title\" [(ngModel)]=\"expense.name\" required>\r\n            </div>\r\n            <div class=\"input-group centered\">\r\n                <label for=\"category\">Category:</label>\r\n                <select class=\"form-control\" name=\"category\" [(ngModel)]=\"expense.category\">\r\n                    <option>Bills</option>\r\n                    <option>Education</option>\r\n                    <option>Transport</option>\r\n                    <option>Clothes</option>\r\n                    <option>Entertainment</option>\r\n                    <option>Food</option>\r\n                    <option>Gifts</option>\r\n                    <option>Health</option>\r\n                    <option>House</option>\r\n                    <option>Pets</option>\r\n                    <option>Sports</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"input-group  centered\">\r\n                <span class=\"input-group-addon\">EGP</span>\r\n                <input type=\"number\" class=\"form-control\" placeholder=\"amount\" name=\"amount\" [(ngModel)]=\"expense.amount\" required>\r\n                <span class=\"input-group-addon \">LE</span>\r\n\r\n            </div>\r\n            <button class=\"btn btn-success btn-block \" type=\"submit\"><i class=\"fa fa-cart-arrow-down\"></i>Add Expense</button>\r\n        </form>\r\n    </div>"

/***/ }),

/***/ 544:
/***/ (function(module, exports) {

module.exports = "<div [class.income]=\"income\" [class.expense]=\"expense\">\r\n    <ul class=\"nav nav-tabs\">\r\n        <li [class.active]=\"income\"><a id=\"income-a\" type=\"button\" (click)=\"toggleView('income')\">Add Income</a></li>\r\n        <li [class.active]=\"expense\"><a id=\"expense-a\" (click)=\"toggleView('expense')\">Add Expense</a></li>\r\n    </ul>\r\n    <app-add-income [viewOn]=\"income\"></app-add-income>\r\n    <app-add-expense [viewOn]=\"expense\"></app-add-expense>\r\n</div>"

/***/ }),

/***/ 545:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"viewOn\">\r\n    <form (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"input-group centered\">\r\n            <input type=\"text\" class=\"form-control \" placeholder=\"Income\" name=\"title\" [(ngModel)]=\"income.name\" required>\r\n        </div>\r\n        <div class=\"input-group centered\">\r\n            <label for=\"category\">Category:</label>\r\n            <select class=\"form-control\" name=\"category\" [(ngModel)]=\"income.category\">\r\n                    <option>Salary</option>\r\n                    <option>Deposits</option>\r\n                    <option>Savings</option>\r\n                    <option>Bonus</option>\r\n                    <option>Rent</option>\r\n                    <option>Other</option>\r\n                </select>\r\n        </div>\r\n        <div class=\"input-group  centered \">\r\n            <span class=\"input-group-addon\">EGP</span>\r\n            <input type=\"number\" class=\"form-control\" placeholder=\"amount\" name=\"amount\" [(ngModel)]=\"income.amount\" required>\r\n            <span class=\"input-group-addon \">LE</span>\r\n        </div>\r\n        <button class=\"btn btn-success btn-block \" type=\"submit \"><i class=\"fa fa-money\"></i>Add Income</button>\r\n    </form>\r\n</div>"

/***/ }),

/***/ 546:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <app-header></app-header>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n            <app-results></app-results>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <app-add-entry></app-add-entry>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 547:
/***/ (function(module, exports) {

module.exports = "<div id=\"results-container\">\r\n\r\n    <div id=\"myChart\">\r\n        <canvas baseChart [data]=\"doughnutChartData\" [labels]=\"doughnutChartLabels\" [chartType]=\"'doughnut'\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n    </div>\r\n    <div id=\"total-income\">\r\n        <strong>Total Income: {{totalIncomes}}</strong>\r\n    </div>\r\n    <div class=\"progress\">\r\n        <div class=\"progress-bar\" [style.width]=\"expenseIncomePercent + '%'\"></div>\r\n        <strong [style.left]=\"expenseIncomePercent - 15 + '%'\" class=\"progress-expense\"><i class=\"fa fa-cart-arrow-down fa-2x\"></i>Expenses<br>{{totalExpenses}}</strong>\r\n        <strong class=\"progress-remaining\"><i class=\"fa fa-dollar fa-2x\"></i>Remaining Cash<br>{{totalIncomes - totalExpenses}}</strong>\r\n    </div>\r\n\r\n</div>\r\n<button routerLink=\"../report\" routerLinkACtive=\"active\" id=\"report\" class=\"btn btn-success btn-lg\">\r\n        <i class=\"fa fa-list-alt fa-lg\"></i>\r\n        &nbsp;Detailed Report\r\n    </button>"

/***/ }),

/***/ 548:
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\">\n    <h3>Create account</h3>\n    <form (ngSubmit)=\"onSubmit()\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"First Name\" name=\"first-name\" [(ngModel)]=\"userToBeAdded.firstName\" required>\n            </div>\n            <div class=\"col-md-6\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" name=\"last-name\" [(ngModel)]=\"userToBeAdded.lastName\" required>\n            </div>\n            <div class=\"col-md-12\">\n                <input type=\"email\" class=\"form-control\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"userToBeAdded.email\" required>\n                <span id=\"email-error\" *ngIf=\"emailUnAvailable\">Email is already taken</span>\n            </div>\n            <div class=\"col-md-12\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"userToBeAdded.password\" required>\n            </div>\n\n        </div>\n\n        <button class=\"btn btn-primary btn-block \" type=\"submit\"><i class=\"fa \"></i>Create Account</button>\n        <a (click)=\"onClick()\">Already have account</a>\n    </form>\n</div>"

/***/ }),

/***/ 549:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(335);


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersService = (function () {
    function UsersService() {
        this.users = {};
        console.log("users service created");
        this.users = JSON.parse(localStorage.getItem("users")) || {};
    }
    UsersService.prototype.storeData = function () {
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem("users", JSON.stringify(this.users));
        }
        else {
            console.log("Local storage is not supported by your browser");
        }
    };
    UsersService.prototype.addUser = function (user) {
        for (var id in this.users) {
            if (user.email === this.users[id].email) {
                return false;
            }
        }
        this.users[user.id] = user;
        this.loginUser(user);
        this.storeData();
        return true;
    };
    //assigns active user to the user passed in argument if he meets criteria and return true, else return false
    UsersService.prototype.loginUser = function (user) {
        for (var id in this.users) {
            if (user.email === this.users[id].email && user.password === this.users[id].password) {
                this.activeUser = this.users[id];
                return this.users[id].id;
            }
        }
    };
    UsersService.prototype.logout = function () {
        this.activeUser = null;
    };
    UsersService.prototype.addExpenses = function (expenses) {
        var id = this.activeUser.id;
        this.users[id].expenses = expenses;
        this.storeData();
    };
    UsersService.prototype.addIncomes = function (incomes) {
        var id = this.activeUser.id;
        this.users[id].incomes = incomes;
    };
    UsersService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], UsersService);
    return UsersService;
}());
//# sourceMappingURL=users.service.js.map

/***/ })

},[567]);
//# sourceMappingURL=main.bundle.js.map