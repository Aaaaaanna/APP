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
var node_service_1 = require('../nodes/node.service');
var router_1 = require('@angular/router');
var BonusListDistributeComponent = (function () {
    function BonusListDistributeComponent(_bonusListService, _employeeService, _nodeService, _router) {
        this._bonusListService = _bonusListService;
        this._employeeService = _employeeService;
        this._nodeService = _nodeService;
        this._router = _router;
        this.pageTitle = 'Distribute';
        this.toDistribute = 4000000;
        this.sum = 0;
        this.overloaded = false;
        this.bonusList = new bonus_list_1.BonusList();
        this.bonusList.node = null;
        this.bonusList.state = "";
    }
    BonusListDistributeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._bonusListService.getBonusListById(1)
            .subscribe(function (bonusList) { return _this.bonusList = bonusList; }, function (error) { return _this.errorMessage = error; });
        this._employeeService.getEmployeeById(29)
            .subscribe(function (employee) { return _this.employee = employee; }, function (error) { return _this.errorMessage = error; });
        this._bonusListService.getNodes(5068, 29)
            .subscribe(function (nodes) { return _this.nodes = nodes; }, function (error) { return _this.errorMessage = error; });
    };
    BonusListDistributeComponent.prototype.ngAfterViewInit = function () {
        this.sum = 0;
    };
    BonusListDistributeComponent.prototype.onSubmit = function () {
        var _this = this;
        this._bonusListService.updateNodes(this.nodes)
            .subscribe(function (nodes) { return _this.nodes = nodes; }, function (error) { return _this.errorMessage = error; });
        this._router.navigate(['/bonusLists']);
    };
    BonusListDistributeComponent.prototype.onChange = function () {
        this.sum = 0;
        for (var i = 0; i < this.nodes.length; i++) {
            this.sum += this.nodes[i].ownBonus;
            this.sum += this.nodes[i].teamBonus;
        }
        ;
        if (this.sum > this.toDistribute) {
            this.overloaded = true;
        }
        else
            this.overloaded = false;
    };
    BonusListDistributeComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/bonus-lists/bonus-list-distribute.component.html'
        }), 
        __metadata('design:paramtypes', [bonus_list_service_1.BonusListService, employee_service_1.EmployeeService, node_service_1.NodeService, router_1.Router])
    ], BonusListDistributeComponent);
    return BonusListDistributeComponent;
}());
exports.BonusListDistributeComponent = BonusListDistributeComponent;
//# sourceMappingURL=bonus-list-distribute.component.js.map