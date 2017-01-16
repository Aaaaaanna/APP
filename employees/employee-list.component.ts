import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';


@Component({
    templateUrl : 'app/employees/employee-list.component.html'
    //,styleUrls: ['app/employees/employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
    message : string;
    employees : Employee[];
    errorMessage : string;
    pageTitle : string = "Employee List";
    constructor (private _employeeService : EmployeeService) {
    }
    ngOnInit(): void{
        this._employeeService.getEmployees()
            .subscribe(employees => this.employees = employees,
            error => this.errorMessage = <any> error);

    }
}