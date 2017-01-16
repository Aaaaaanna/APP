import { Component, OnInit } from '@angular/core';
import { Employee } from '../employees/employee';
import { BonusList  } from './bonus-list';
import { BonusListService } from './bonus-list.service';
import { Node } from '../nodes/node';
import { EmployeeService } from '../employees/employee.service';
@Component({
    templateUrl : 'app/bonus-lists/bonus-list-add.component.html'
})

export class BonusListAddComponent implements OnInit{
    pageTitle : String = 'Add bonus list' ; 
    employees : Employee[];
    bonusList : BonusList;
    errorMessage : String;

constructor (private _bonusListService : BonusListService,
            private _employeeService : EmployeeService){
                this.bonusList = new BonusList();
                this.bonusList.node = null;
                this.bonusList.state = "";
            }
ngOnInit(){
}

onSubmit(){
        console.log(this.bonusList);
        this._bonusListService.addBonusList(this.bonusList)
        .subscribe((bonusList : BonusList) =>this.bonusList = bonusList)

} 

}