import { Component, OnInit } from '@angular/core';
import { ITeam } from './team';
import { IEmployee } from '../employees/employee';
import { TeamService } from './team.service';
import { EmployeeService } from '../employees/employee.service';



@Component({
    templateUrl : 'app/teams/team-add.component.html'
})
export class TeamAddComponent implements OnInit {
    pageTitle : String = "Add team";
    team : ITeam; 
    employees : IEmployee[];
    errorMessage : String;

    constructor (private _teamService : TeamService,
                 private _employeeService : EmployeeService ){
                     this.team = new ITeam();
                 }
    ngOnInit(): void{
        this._employeeService.getEmployees()
        .subscribe(employees => this.employees = employees,
            error => this.errorMessage = <any> error);
    }             
    onSubmit(){
        this._teamService.addTeam(this.team)
        .subscribe(team => this.team = team);
    }
}