import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/employees/employee-select.component.html'
})
export class EmployeeSelectComponent implements OnInit {
    private employeeUrl = 'http://localhost:3000';
    private employees: Employee[];
    private employee: Employee;
    private errorMessage: string;
    private pageTitle: string = "Select employee";
    constructor(private _employeeService: EmployeeService,
        private _router: Router,
    ) {
        this.employee = new Employee();
    }

    ngOnInit(): void {
        this._employeeService.getEmployees()
            .subscribe(employees => this.employees = employees,
            error => this.errorMessage = <any>error);
    }

    editEmployee() {
        console.log(JSON.stringify(this.employee));
        let employeeId = this.employee ? this.employee.employeeId : null
        this._router.navigate(['/editEmployee', { id: employeeId }]);
    }
    deleteEmployee() {
        this._employeeService
            .deleteEmployee(this.employee.employeeId)
            .subscribe(employee => this.employee = employee, 
            error => this.errorMessage = <any>error)

    }
}