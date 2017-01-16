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
import { EmployeeSelectComponent } from './employee-select.component';
import { TeamListComponent} from '../teams/team-list.component';
import { SelectModule} from 'ng2-select/ng2-select';
@NgModule({
    declarations: [
        EmployeeListComponent,
        EmployeeAddComponent,
        EmployeeFilterPipe,
        EmployeeEditComponent,
        EmployeeSelectComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        SelectModule,
        RouterModule.forChild([
            { path : 'employees', component : EmployeeListComponent },
            { path : 'addEmployee', component : EmployeeAddComponent  }, 
            { path : 'editEmployee', component : EmployeeEditComponent },
            { path : 'selectEmployee', component : EmployeeSelectComponent },
            { path : 'teams', component : TeamListComponent}
        ])
    ],
    providers: [
        EmployeeService
    ]
})
export class EmployeeModule{
    
}