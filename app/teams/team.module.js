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
var team_add_component_1 = require('./team-add.component');
var team_edit_component_1 = require('./team-edit.component');
var team_list_component_1 = require('./team-list.component');
var team_service_1 = require('./team.service');
var TeamModule = (function () {
    function TeamModule() {
    }
    TeamModule = __decorate([
        core_1.NgModule({
            declarations: [
                team_add_component_1.TeamAddComponent,
                team_edit_component_1.TeamEditComponent,
                team_list_component_1.TeamListComponent
            ],
            imports: [
                forms_1.FormsModule,
                common_1.CommonModule,
                router_1.RouterModule.forChild([
                    // { path : 'nodes', component : NodeListComponent },
                    { path: 'addTeam', component: team_add_component_1.TeamAddComponent },
                    { path: 'editTeam', component: team_edit_component_1.TeamEditComponent },
                    { path: 'teams', component: team_list_component_1.TeamListComponent }
                ])
            ],
            providers: [
                team_service_1.TeamService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TeamModule);
    return TeamModule;
}());
exports.TeamModule = TeamModule;
//# sourceMappingURL=team.module.js.map