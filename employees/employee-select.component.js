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
var employee_1 = require('./employee');
var employee_service_1 = require('./employee.service');
var router_1 = require('@angular/router');
var EmployeeSelectComponent = (function () {
    function EmployeeSelectComponent(_employeeService, _router) {
        this._employeeService = _employeeService;
        this._router = _router;
        this.employeeUrl = 'http://localhost:3000';
        this.pageTitle = "Select employee";
        this.employee = new employee_1.IEmployee();
    }
    EmployeeSelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployees()
            .subscribe(function (employees) { return _this.employees = employees; }, function (error) { return _this.errorMessage = error; });
    };
    EmployeeSelectComponent.prototype.editEmployee = function () {
        console.log(JSON.stringify(this.employee));
        var employeeId = this.employee ? this.employee.employeeId : null;
        this._router.navigate(['/editEmployee', { id: employeeId }]);
    };
    EmployeeSelectComponent.prototype.deleteEmployee = function () {
        var _this = this;
        this._employeeService
            .deleteEmployee(this.employee.employeeId)
            .subscribe(function (employee) { return _this.employee = employee; }, function (error) { return _this.errorMessage = error; });
    };
    EmployeeSelectComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/employees/employee-select.component.html'
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService, router_1.Router])
    ], EmployeeSelectComponent);
    return EmployeeSelectComponent;
}());
exports.EmployeeSelectComponent = EmployeeSelectComponent;
//# sourceMappingURL=employee-select.component.js.map