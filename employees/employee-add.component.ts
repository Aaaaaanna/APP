import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { ITeam } from '../teams/team';
import { TeamService } from '../teams/team.service';

@Component({
    templateUrl : 'app/employees/employee-add.component.html'
})

export class EmployeeAddComponent implements OnInit{
    pageTitle : String = 'Add employee' ; 
    teams : ITeam[];
    employee : IEmployee;
    errorMessage : String;


    constructor (private _employeeService : EmployeeService,
                 private _teamService : TeamService,

                 )
    {
        this.employee = new IEmployee();

    }

    ngOnInit(): void{
        this._teamService.getTeams()
        .subscribe(teams => this.teams = teams,
            error => this.errorMessage = <any> error);

   }

   onSubmit()  { 
        console.log(this.employee);
        this._employeeService.addEmployee(this.employee)
        .subscribe((employee : IEmployee) =>this.employee = employee)
    }
    


}