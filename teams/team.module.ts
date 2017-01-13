import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TeamAddComponent } from './team-add.component';
import { TeamEditComponent } from './team-edit.component';
import { TeamListComponent } from './team-list.component';
import { TeamService } from './team.service';
import { TeamFilterPipe } from './team-filter.pipe';
import { TeamSelectComponent } from './team-select.component';
import { EmployeeListComponent } from '../employees/employee-list.component';
@NgModule({
    declarations: [
        TeamAddComponent,
        TeamEditComponent, 
        TeamListComponent,
        TeamFilterPipe,
        TeamSelectComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
           // { path : 'nodes', component : NodeListComponent },
            { path : 'addTeam', component : TeamAddComponent },
            { path : 'editTeam', component : TeamEditComponent },
            { path : 'teams', component: TeamListComponent},
            { path : 'selectTeam', component : TeamSelectComponent},
            { path : 'employees', component : EmployeeListComponent}
        ])
    ],
    providers: [
        TeamService
    ]
})
export class TeamModule{
    
}