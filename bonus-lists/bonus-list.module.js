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
var bonus_list_service_1 = require('./bonus-list.service');
var bonus_list_component_1 = require('./bonus-list.component');
var bonus_list_add_component_1 = require('./bonus-list-add.component');
var bonus_list_distribute_component_1 = require('./bonus-list-distribute.component');
var employee_list_component_1 = require('../employees/employee-list.component');
var BonusListModule = (function () {
    function BonusListModule() {
    }
    BonusListModule = __decorate([
        core_1.NgModule({
            declarations: [
                bonus_list_component_1.BonusListComponent,
                bonus_list_add_component_1.BonusListAddComponent,
                bonus_list_distribute_component_1.BonusListDistributeComponent
            ],
            imports: [
                forms_1.FormsModule,
                common_1.CommonModule,
                router_1.RouterModule.forChild([
                    { path: 'bonusLists', component: bonus_list_component_1.BonusListComponent },
                    { path: 'addBonusList', component: bonus_list_add_component_1.BonusListAddComponent },
                    { path: 'distribute', component: bonus_list_distribute_component_1.BonusListDistributeComponent },
                    { path: 'employees', component: employee_list_component_1.EmployeeListComponent }
                ])
            ],
            providers: [bonus_list_service_1.BonusListService]
        }), 
        __metadata('design:paramtypes', [])
    ], BonusListModule);
    return BonusListModule;
}());
exports.BonusListModule = BonusListModule;
//# sourceMappingURL=bonus-list.module.js.map