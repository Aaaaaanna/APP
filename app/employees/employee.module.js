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
var forms_2 = require('@angular/forms');
var employee_list_component_1 = require('./employee-list.component');
var employee_add_component_1 = require('./employee-add.component');
var employee_filter_pipe_1 = require('./employee-filter.pipe');
var employee_service_1 = require('./employee.service');
var employee_edit_component_1 = require('./employee-edit.component');
var EmployeeModule = (function () {
    function EmployeeModule() {
    }
    EmployeeModule = __decorate([
        core_1.NgModule({
            declarations: [
                employee_list_component_1.EmployeeListComponent,
                employee_add_component_1.EmployeeAddComponent,
                employee_filter_pipe_1.EmployeeFilterPipe,
                employee_edit_component_1.EmployeeEditComponent
            ],
            imports: [
                forms_1.FormsModule,
                forms_2.ReactiveFormsModule,
                common_1.CommonModule,
                router_1.RouterModule.forChild([
                    { path: 'employees', component: employee_list_component_1.EmployeeListComponent },
                    { path: 'addEmployee', component: employee_add_component_1.EmployeeAddComponent },
                    { path: 'editEmployee', component: employee_edit_component_1.EmployeeEditComponent }
                ])
            ],
            providers: [
                employee_service_1.EmployeeService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], EmployeeModule);
    return EmployeeModule;
}());
exports.EmployeeModule = EmployeeModule;
//# sourceMappingURL=employee.module.js.map