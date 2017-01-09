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
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var node_add_component_1 = require('./node-add.component');
var node_service_1 = require('./node.service');
var NodeModule = (function () {
    function NodeModule() {
    }
    NodeModule = __decorate([
        core_1.NgModule({
            declarations: [
                node_add_component_1.NodeAddComponent
            ],
            imports: [
                forms_1.FormsModule,
                common_1.CommonModule,
                router_1.RouterModule.forChild([
                    //{ path : 'nodes', component : NodeListComponent },
                    { path: 'addNode', component: node_add_component_1.NodeAddComponent },
                ])
            ],
            providers: [
                node_service_1.NodeService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], NodeModule);
    return NodeModule;
}());
exports.NodeModule = NodeModule;
//# sourceMappingURL=node.module.js.map