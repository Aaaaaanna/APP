"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var bonus_list_1 = require('./bonus-list');
var bonus_list_service_1 = require('./bonus-list.service');
var employee_service_1 = require('../employees/employee.service');
var BonusListAddComponent = (function () {
    function BonusListAddComponent(_bonusListService, _employeeService) {
        this._bonusListService = _bonusListService;
        this._employeeService = _employeeService;
        this.pageTitle = 'Add bonus list';
        this.bonusList = new bonus_list_1.BonusList();
        this.bonusList.node = null;
        this.bonusList.state = "";
    }
    BonusListAddComponent.prototype.ngOnInit = function () {
    };
    BonusListAddComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.bonusList);
        this._bonusListService.addBonusList(this.bonusList)
            .subscribe(function (bonusList) { return _this.bonusList = bonusList; });
    };
    BonusListAddComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/bonus-lists/bonus-list-add.component.html'
        }), 
        __metadata('design:paramtypes', [bonus_list_service_1.BonusListService, employee_service_1.EmployeeService])
    ], BonusListAddComponent);
    return BonusListAddComponent;
}());
exports.BonusListAddComponent = BonusListAddComponent;
//# sourceMappingURL=bonus-list-add.component.js.map