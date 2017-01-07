import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import  {FormsModule } from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeModule } from './employees/employee.module';
import { NodeModule } from './nodes/node.module';
import { TeamModule } from './teams/team.module';
import { BonusListModule } from './bonus-lists/bonus-list.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
imports: [BrowserModule,
        HttpModule,
        EmployeeModule,
        NodeModule,
        TeamModule,
        BonusListModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [ AppComponent],
    providers:[],
    bootstrap: [AppComponent]
    
})

export class AppModule { }