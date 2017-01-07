import { Component, OnInit } from '@angular/core';
import { ITeam } from '../teams/team';
import { TeamService } from '../teams/team.service';

@Component({
    templateUrl : 'app/teams/team-edit.component.html'
})

export class TeamEditComponent implements OnInit{
    pageTitle : String = 'Edit team' ; 
    errorMessage : string ;
    team : ITeam;
    teamService : TeamService; 

    constructor (private _teamService : TeamService) {
    }
    ngOnInit() : void{
        this._teamService.getTeamById(1)
        .subscribe(team => this.team = team,
        error => this.errorMessage = <any> error);
    }
}