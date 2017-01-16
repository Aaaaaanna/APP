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
var BonusListService = (function () {
    function BonusListService(_http) {
        this._http = _http;
        this._bonusListUrl = 'http://localhost:8080/bonuses';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    }
    BonusListService.prototype.getBonusLists = function () {
        return this._http.get(this._bonusListUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('ALL ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    BonusListService.prototype.getNodes = function (nodeId, employeeId) {
        return this._http.get(this._bonusListUrl + '/' + nodeId + "/" + employeeId)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('ALL ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    BonusListService.prototype.updateNodes = function (nodes) {
        return this._http.put(this._bonusListUrl, JSON.stringify(nodes), { headers: this.headers })
            .map(function (response) { return response; })
            .do(function (data) { return console.log('ALL ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    BonusListService.prototype.getBonusListById = function (id) {
        return this._http.get(this._bonusListUrl + '/' + id)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('ALL ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    BonusListService.prototype.addBonusList = function (bonusList) {
        return this._http.post(this._bonusListUrl, JSON.stringify(bonusList), { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BonusListService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    BonusListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BonusListService);
    return BonusListService;
}());
exports.BonusListService = BonusListService;
//# sourceMappingURL=bonus-list.service.js.map