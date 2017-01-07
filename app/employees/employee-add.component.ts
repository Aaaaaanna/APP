import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { ITeam } from '../teams/team';
import { TeamService } from '../teams/team.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
    templateUrl : 'app/employees/employee-add.component.html'
})

export class EmployeeAddComponent implements OnInit{
    pageTitle : String = 'Add employee' ; 
    submitted = false;
    teams : ITeam[];
    employee : IEmployee;
    errorMessage : string;
    employeeForm: FormGroup;

    constructor (private _employeeService : EmployeeService,
                 private _teamService : TeamService,
                 private _formBuilder : FormBuilder)
    {

    }

    ngOnInit(): void{
        this._teamService.getTeams()
        .subscribe(teams => this.teams = teams,
            error => this.errorMessage = <any> error);
        this.employeeForm = this._formBuilder.group({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            mobileNumber: '',
            officeAddress:'',
            emailAddress:'',
            teamId:''
        });    
    }
 /*   addEmployee(employee: IEmployee): void {
        if (!employee) { return; }
        this._employeeService.addEmployee(employee);
    } */
    onSubmit({ value, valid }: { value: IEmployee, valid: boolean })  { 
        this.submitted = true; 
        console.log(value,valid);
        this.employee = value;
        
        
       // this.employee.teamId = Number(this.employee.teamId); 
       // this.employee.employeeId = 5;
        console.log(this.employee);
        this._employeeService.addEmployee(this.employee)
      /*  this.employee.firstName = this.employeeForm.value('firstName');
        this.employee.lastName = this.employeeForm.value('lastName');
        this.employee.phoneNumber = this.employeeForm.value('phoneNumber');
        this.employee.mobileNumber = this.employeeForm.value('mobileNumber');
        this.employee.officeAddress = this.employeeForm.value('officeAddress');
        this.employee.emailAddress = this.employeeForm.value('emailAddress');
        this.employee.teamId = this.employeeForm.value('teamName').split(" ", 2)
        JSON.stringify(this.employee);
        //this._employeeService.addEmployee(this.employee);
        */
    }
    


}