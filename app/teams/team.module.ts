import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TeamAddComponent } from './team-add.component';
import { TeamEditComponent } from './team-edit.component';
import { TeamListComponent } from './team-list.component';
import { TeamService } from './team.service';

@NgModule({
    declarations: [
        TeamAddComponent,
        TeamEditComponent, 
        TeamListComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
           // { path : 'nodes', component : NodeListComponent },
            { path : 'addTeam', component : TeamAddComponent },
            { path : 'editTeam', component : TeamEditComponent },
            { path : 'teams', component: TeamListComponent}
           
        ])
    ],
    providers: [
        TeamService
    ]
})
export class TeamModule{
    
}