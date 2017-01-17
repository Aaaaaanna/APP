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
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/do');
require('rxjs/add/operator/catch');
var LoginComponent = (function () {
    function LoginComponent(router, http) {
        this.router = router;
        this.http = http;
        this.pageTitle = 'Login';
        this.headers = new http_1.Headers();
        this.login = "";
        this.password = "";
    }
    LoginComponent.prototype.loginMe = function () {
        var _this = this;
        console.log(this.login);
        console.log(this.password);
        console.log(this.headers.toJSON());
        this.headers.append("crossDomain", "true");
        this.headers.append("content-type", "application/x-www-form-urlencoded");
        this.headers.append("Authorization", "Basic " + btoa(this.login + ":" + this.password));
        console.log(this.headers.toJSON());
        this.http.get('http://localhost:8080/employees', { headers: this.headers })
            .do(function (data) { return console.log('ALL' + JSON.stringify(data)); })
            .catch(this.handleError)
            .subscribe(function (response) {
            localStorage.setItem('id_token', response.json().id_token);
            alert(response.json());
            _this.router.navigate(['home']);
        }, function (error) {
            alert(error.text());
            console.log(error.text());
        });
    };
    LoginComponent.prototype.handleError = function (error) {
        console.error(error);
        alert("Failed ");
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    LoginComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/login/login.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map