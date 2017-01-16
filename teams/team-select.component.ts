import { Component, OnInit } from '@angular/core';
import { Team } from './team';
import { TeamService } from './team.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/teams/team-select.component.html'
})
export class TeamSelectComponent implements OnInit {
    private pageTitle: String = "Select team";
    private errorMessage: String;
    private _teamUrl = 'http://localhost:3000';
    private team: Team;
    private teams: Team[];

    constructor(private _teamService: TeamService,
        private _router: Router) {
            this.team = new Team();
    }

    ngOnInit():void {
        this._teamService.getTeams()
            .subscribe(teams => this.teams = teams,
            error => this.errorMessage = <any>error);
    }
    editTeam() {
        console.log(JSON.stringify(this.team));
        let teamId = this.team ? this.team.teamId : null
        this._router.navigate(['/editTeam', { id: teamId }]);
    }
    deleteTeam() {
        this._teamService.deleteTeam(this.team.teamId)
            .subscribe(team => this.team = team,
            error => this.errorMessage = <any>error);
    }

}