import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BonusListService } from './bonus-list.service';
import { BonusListComponent } from './bonus-list.component';
import { BonusListAddComponent } from './bonus-list-add.component';
import { BonusListDistributeComponent } from './bonus-list-distribute.component';
import { EmployeeListComponent } from '../employees/employee-list.component';

@NgModule({
    declarations: [
        BonusListComponent,
        BonusListAddComponent,
        BonusListDistributeComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            { path : 'bonusLists', component : BonusListComponent },
            { path : 'addBonusList', component: BonusListAddComponent },
            { path : 'distribute', component: BonusListDistributeComponent },
            { path : 'employees', component : EmployeeListComponent }
        ])
    ],
    providers: [BonusListService]
})
export class BonusListModule {

}