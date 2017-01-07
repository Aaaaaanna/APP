import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { EmployeeListComponent } from './employee-list.component';
import { EmployeeAddComponent } from './employee-add.component';
import { EmployeeFilterPipe } from './employee-filter.pipe';
import { EmployeeService } from './employee.service';
import { EmployeeEditComponent } from './employee-edit.component';


@NgModule({
    declarations: [
        EmployeeListComponent,
        EmployeeAddComponent,
        EmployeeFilterPipe,
        EmployeeEditComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild([
            { path : 'employees', component : EmployeeListComponent },
            { path : 'addEmployee', component : EmployeeAddComponent  }, 
            { path : 'editEmployee', component : EmployeeEditComponent }
        ])
    ],
    providers: [
        EmployeeService
    ]
})
export class EmployeeModule{
    
}