import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { Team } from '../teams/team';
import { TeamService } from '../teams/team.service';
import { ActivatedRoute, Params } from '@angular/router';

import { SelectModule } from 'ng2-select/ng2-select';

@Component({
    templateUrl: 'app/employees/employee-edit.component.html'

})

export class EmployeeEditComponent implements OnInit {
    pageTitle: String = 'Edit employee';
    employee: Employee;
    errorMessage: string;
    teams: Array<Team>;
    actTeam :Team;
   
    constructor(private _employeeService: EmployeeService,
        private _teamService: TeamService,
        private _route: ActivatedRoute) {
        this.employee = new Employee();
        this.teams = new Array<Team>();
    }
    ngOnInit(): void {
        this._route.params.subscribe(params => {
            this.employee.employeeId = params['id']
        });
        this._employeeService.getEmployeeById(this.employee.employeeId)
            .subscribe(employee => this.employee = employee,
            error => this.errorMessage = <any>error);
        this._teamService.getTeams()
            .subscribe(teams => this.teams = teams,
            error => this.errorMessage = <any>error);
            
    }

    onSubmit() {
        console.log(this.employee);
        this._employeeService.updateEmployee(this.employee)
            .subscribe((employee: Employee) => this.employee = employee)
    }
}
