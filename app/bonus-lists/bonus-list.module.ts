import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//import {BonusListComponent} from './bonus-list.component';
import {BonusListAddComponent} from './bonus-list-add.component';

@NgModule({
    declarations: [
//        BonusListComponent,
        BonusListAddComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
  //          { path : 'bonus-lists', component : BonusListComponent },
            { path : 'addBonusList', component : BonusListAddComponent  }, 
           
        ])
    ]
})
export class BonusListModule{
    
}