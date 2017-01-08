import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { ITeam } from '../teams/team';
import { TeamService } from '../teams/team.service';

@Component({
    templateUrl : 'app/employees/employee-edit.component.html'
})

export class EmployeeEditComponent implements OnInit{
    pageTitle : String = 'Edit employee' ; 
    employee : IEmployee ;
    errorMessage : string ;
    teams : ITeam[];

    constructor (private _employeeService : EmployeeService ,
                 private _teamService: TeamService) {
    
        this.employee = new IEmployee();                     
    }
    ngOnInit() : void{
        this._employeeService.getEmployeeById(1)
        .subscribe(employee => this.employee = employee,
        error => this.errorMessage = <any> error);
        this._teamService.getTeams()
        .subscribe(teams => this.teams = teams,
            error => this.errorMessage = <any> error);
    
    }
 /*   updateEmployee(): void(){
        this._employeeService.update(this.employee)
    ;

    }*/
}