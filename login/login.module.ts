import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild([
            { path : 'login', component : LoginComponent },
        ])
    ],
    providers: [
    ]
})
export class LoginModule{
    
}