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
var NodeService = (function () {
    function NodeService(_http) {
        this._http = _http;
        this._nodeUrl = 'http://localhost:8080/nodes';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    }
    NodeService.prototype.getNodes = function () {
        return this._http.get(this._nodeUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('ALL ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    NodeService.prototype.addNode = function (node) {
        console.log(JSON.stringify(node));
        return this._http.post(this._nodeUrl, JSON.stringify(node), { headers: this.headers })
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('ALL' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    NodeService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    NodeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NodeService);
    return NodeService;
}());
exports.NodeService = NodeService;
//# sourceMappingURL=node.service.js.map