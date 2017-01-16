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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/do');
require('rxjs/add/operator/catch');
var TeamService = (function () {
    function TeamService(_http) {
        this._http = _http;
        this._teamUrl = 'http://localhost:8080/teams';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    }
    TeamService.prototype.getTeams = function () {
        return this._http.get(this._teamUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('ALL ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    TeamService.prototype.getTeamById = function (teamId) {
        return this._http.get(this._teamUrl + '/' + teamId)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('ALL ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    TeamService.prototype.addTeam = function (team) {
        return this._http.post(this._teamUrl, JSON.stringify(team), { headers: this.headers })
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('ALL' + JSON.stringify(data)); })
            .catch(this.handleAddError);
    };
    TeamService.prototype.updateTeam = function (team) {
        console.log(JSON.stringify(team));
        return this._http.put(this._teamUrl + '/' + team.teamId, JSON.stringify(team), { headers: this.headers })
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('ALL' + JSON.stringify(data)); })
            .catch(this.handleUpdateError);
    };
    TeamService.prototype.deleteTeam = function (id) {
        return this._http.delete(this._teamUrl + '/' + id)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log("ALL" + JSON.stringify(data)); })
            .catch(this.handleDeleteError);
    };
    TeamService.prototype.handleError = function (error) {
        console.error(error);
        alert("Failed process team operation ");
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    TeamService.prototype.handleUpdateError = function (error) {
        console.error(error);
        alert("Failed to update team");
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    TeamService.prototype.handleAddError = function (error) {
        console.error(error);
        alert("Failed to add team");
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    TeamService.prototype.handleDeleteError = function (error) {
        console.error(error);
        alert("Failed to delete team");
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    TeamService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TeamService);
    return TeamService;
}());
exports.TeamService = TeamService;
//# sourceMappingURL=team.service.js.map