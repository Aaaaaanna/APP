import { Component, OnInit } from '@angular/core';
import { Team } from '../teams/team';
import { TeamService } from '../teams/team.service';
import { ActivatedRoute, Params  } from '@angular/router';
import { Employee } from '../employees/employee';
import { EmployeeService } from '../employees/employee.service';
@Component({
    templateUrl : 'app/teams/team-edit.component.html'
})

export class TeamEditComponent implements OnInit{
    pageTitle : String = 'Edit team' ; 
    errorMessage : string ;
    team : Team;
    employees : Employee[];
    

    constructor (private _teamService : TeamService, 
                private _employeeService : EmployeeService,
                private _route : ActivatedRoute){
                this.team = new Team();
                
    }
  
    ngOnInit() : void{
        this._route.params.subscribe(params => {
                this.team.teamId = params['id']});
        this._teamService.getTeamById(this.team.teamId)
        .subscribe(team => this.team = team,
        error => this.errorMessage = <any> error);
        this._employeeService.getEmployees()
        .subscribe(employees =>this.employees = employees,
        error => this.errorMessage = <any> error )
            

    }

    onSubmit(){
        this._teamService.updateTeam(this.team)
        .subscribe((team : Team) => this.team = team,
        error => this.errorMessage = <any> error);
    }
}