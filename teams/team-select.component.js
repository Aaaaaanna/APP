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
var router_1 = require('@angular/router');
var TeamSelectComponent = (function () {
    function TeamSelectComponent(_teamService, _router) {
        this._teamService = _teamService;
        this._router = _router;
        this.pageTitle = "Select team";
        this._teamUrl = 'http://localhost:3000';
        this.team = new team_1.Team();
    }
    TeamSelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._teamService.getTeams()
            .subscribe(function (teams) { return _this.teams = teams; }, function (error) { return _this.errorMessage = error; });
    };
    TeamSelectComponent.prototype.editTeam = function () {
        console.log(JSON.stringify(this.team));
        var teamId = this.team ? this.team.teamId : null;
        this._router.navigate(['/editTeam', { id: teamId }]);
    };
    TeamSelectComponent.prototype.deleteTeam = function () {
        var _this = this;
        this._teamService.deleteTeam(this.team.teamId)
            .subscribe(function (team) { return _this.team = team; }, function (error) { return _this.errorMessage = error; });
    };
    TeamSelectComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/teams/team-select.component.html'
        }), 
        __metadata('design:paramtypes', [team_service_1.TeamService, router_1.Router])
    ], TeamSelectComponent);
    return TeamSelectComponent;
}());
exports.TeamSelectComponent = TeamSelectComponent;
//# sourceMappingURL=team-select.component.js.map