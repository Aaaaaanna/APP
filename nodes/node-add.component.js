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
var employee_service_1 = require('../employees/employee.service');
var node_service_1 = require('./node.service');
var node_1 = require('./node');
var NodeAddComponent = (function () {
    function NodeAddComponent(_employeeService, _nodeService) {
        this._employeeService = _employeeService;
        this._nodeService = _nodeService;
        this.pageTitle = 'Add node';
        this.node = new node_1.Node();
    }
    NodeAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployees()
            .subscribe(function (employees) { return _this.employees = employees; }, function (error) { return _this.errorMessage = error; });
        this._nodeService.getNodes()
            .subscribe(function (nodes) { return _this.nodes = nodes; }, function (error) { return _this.errorMessage = error; });
    };
    NodeAddComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(JSON.stringify(this.node));
        this._nodeService.addNode(this.node)
            .subscribe(function (node) { return _this.node = node; });
    };
    NodeAddComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/nodes/node-add.component.html'
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService, node_service_1.NodeService])
    ], NodeAddComponent);
    return NodeAddComponent;
}());
exports.NodeAddComponent = NodeAddComponent;
//# sourceMappingURL=node-add.component.js.map