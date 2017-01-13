import { Component, OnInit } from '@angular/core';
import { IBonusList } from './bonus-list';
import { BonusListService } from './bonus-list.service';

@Component({
    templateUrl : 'app/bonus-lists/bonus-list.component.html'
    //,styleUrls: ['app/employees/employee-list.component.css']
})
export class BonusListComponent implements OnInit {
    message : string;
    bonusLists : IBonusList[];
    errorMessage : string;
    pageTitle : string = "Bonus-list list";
    constructor (private _bonusListService : BonusListService){

    }
    ngOnInit(): void{
        this._bonusListService.getBonusLists()
            .subscribe(bonusLists => this.bonusLists = bonusLists,
            error => this.errorMessage = <any> error);
    }
}