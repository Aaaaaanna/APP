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
var team_1 = require('./team');
var team_service_1 = require('./team.service');
var employee_service_1 = require('../employees/employee.service');
var TeamAddComponent = (function () {
    function TeamAddComponent(_teamService, _employeeService) {
        this._teamService = _teamService;
        this._employeeService = _employeeService;
        this.pageTitle = "Add team";
        this.team = new team_1.Team();
    }
    TeamAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployees()
            .subscribe(function (employees) { return _this.employees = employees; }, function (error) { return _this.errorMessage = error; });
    };
    TeamAddComponent.prototype.onSubmit = function () {
        var _this = this;
        this._teamService.addTeam(this.team)
            .subscribe(function (team) { return _this.team = team; });
    };
    TeamAddComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/teams/team-add.component.html'
        }), 
        __metadata('design:paramtypes', [team_service_1.TeamService, employee_service_1.EmployeeService])
    ], TeamAddComponent);
    return TeamAddComponent;
}());
exports.TeamAddComponent = TeamAddComponent;
//# sourceMappingURL=team-add.component.js.map