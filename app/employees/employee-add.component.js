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
var employee_service_1 = require('./employee.service');
var team_service_1 = require('../teams/team.service');
var forms_1 = require('@angular/forms');
var EmployeeAddComponent = (function () {
    function EmployeeAddComponent(_employeeService, _teamService, _formBuilder) {
        this._employeeService = _employeeService;
        this._teamService = _teamService;
        this._formBuilder = _formBuilder;
        this.pageTitle = 'Add employee';
        this.submitted = false;
    }
    EmployeeAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._teamService.getTeams()
            .subscribe(function (teams) { return _this.teams = teams; }, function (error) { return _this.errorMessage = error; });
        this.employeeForm = this._formBuilder.group({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            mobileNumber: '',
            officeAddress: '',
            emailAddress: '',
            teamId: ''
        });
    };
    /*   addEmployee(employee: IEmployee): void {
           if (!employee) { return; }
           this._employeeService.addEmployee(employee);
       } */
    EmployeeAddComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        console.log(value, valid);
        this.employee = value;
        // this.employee.teamId = Number(this.employee.teamId); 
        // this.employee.employeeId = 5;
        console.log(this.employee);
        this._employeeService.addEmployee(this.employee);
        /*  this.employee.firstName = this.employeeForm.value('firstName');
          this.employee.lastName = this.employeeForm.value('lastName');
          this.employee.phoneNumber = this.employeeForm.value('phoneNumber');
          this.employee.mobileNumber = this.employeeForm.value('mobileNumber');
          this.employee.officeAddress = this.employeeForm.value('officeAddress');
          this.employee.emailAddress = this.employeeForm.value('emailAddress');
          this.employee.teamId = this.employeeForm.value('teamName').split(" ", 2)
          JSON.stringify(this.employee);
          //this._employeeService.addEmployee(this.employee);
          */
    };
    EmployeeAddComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/employees/employee-add.component.html'
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService, team_service_1.TeamService, forms_1.FormBuilder])
    ], EmployeeAddComponent);
    return EmployeeAddComponent;
}());
exports.EmployeeAddComponent = EmployeeAddComponent;
//# sourceMappingURL=employee-add.component.js.map