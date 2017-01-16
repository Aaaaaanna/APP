import { Component, OnInit } from '@angular/core';
import { Team } from './team';
import { TeamService } from './team.service';


@Component({
    templateUrl : 'app/teams/team-list.component.html'
    //,styleUrls: ['app/teams/team-list.component.css']
})
export class TeamListComponent implements OnInit {
    message : string;
    teams : Team[];
    errorMessage : string;
    pageTitle : string = "Team List";
    constructor (private _teamService : TeamService) {
    }
    ngOnInit(): void{
        this._teamService.getTeams()
            .subscribe(teams => this.teams = teams,
            error => this.errorMessage = <any> error);

    }
}