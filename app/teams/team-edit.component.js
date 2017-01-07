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
var team_service_1 = require('../teams/team.service');
var TeamEditComponent = (function () {
    function TeamEditComponent(_teamService) {
        this._teamService = _teamService;
        this.pageTitle = 'Edit team';
    }
    TeamEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._teamService.getTeamById(1)
            .subscribe(function (team) { return _this.team = team; }, function (error) { return _this.errorMessage = error; });
    };
    TeamEditComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/teams/team-edit.component.html'
        }), 
        __metadata('design:paramtypes', [team_service_1.TeamService])
    ], TeamEditComponent);
    return TeamEditComponent;
}());
exports.TeamEditComponent = TeamEditComponent;
//# sourceMappingURL=team-edit.component.js.map