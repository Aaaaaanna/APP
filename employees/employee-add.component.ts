import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { Team } from '../teams/team';
import { TeamService } from '../teams/team.service';

@Component({
    templateUrl : 'app/employees/employee-add.component.html'
})

export class EmployeeAddComponent implements OnInit{
    pageTitle : String = 'Add employee' ; 
    teams : Team[];
    employee : Employee;
    errorMessage : String;


    constructor (private _employeeService : EmployeeService,
                 private _teamService : TeamService,

                 )
    {
        this.employee = new Employee();

    }

    ngOnInit(): void{
        this._teamService.getTeams()
        .subscribe(teams => this.teams = teams,
            error => this.errorMessage = <any> error);

   }

   onSubmit()  { 
        console.log(this.employee);
        this._employeeService.addEmployee(this.employee)
        .subscribe((employee : Employee) =>this.employee = employee)
    }
    


}
