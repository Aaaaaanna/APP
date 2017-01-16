import { Component, OnInit,AfterViewInit } from '@angular/core';
import { Employee } from '../employees/employee';
import { BonusList } from './bonus-list';
import { BonusListService } from './bonus-list.service';
import { EmployeeService } from '../employees/employee.service';
import { NodeService } from '../nodes/node.service';
import { Router } from '@angular/router';
import { Node } from '../nodes/node';

@Component({
    templateUrl: 'app/bonus-lists/bonus-list-distribute.component.html'
})
export class BonusListDistributeComponent implements OnInit, AfterViewInit {
    pageTitle: String = 'Distribute';
    employees: Employee[];
    bonusList: BonusList;
    errorMessage: String;
    nodes: Node[];
    node: Node;
    employee: Employee;
    toDistribute: number = 4000000;
    sum: number = 0;
    overloaded : Boolean = false;
    constructor(private _bonusListService: BonusListService,
        private _employeeService: EmployeeService,
        private _nodeService: NodeService,
        private _router: Router
    ) {
        this.bonusList = new BonusList();
        this.bonusList.node = null;
        this.bonusList.state = "";
        
    }
 

    ngOnInit(): void {

        this._bonusListService.getBonusListById(1)
            .subscribe(bonusList => this.bonusList = bonusList
            , error => this.errorMessage = <any>error);

        this._employeeService.getEmployeeById(29)
            .subscribe(employee => this.employee = employee,
            error => this.errorMessage = <any>error);


        this._bonusListService.getNodes(5068, 29)
            .subscribe(nodes => this.nodes = nodes,
            error => this.errorMessage = <any>error
            );
            
    }
    ngAfterViewInit():void{
       this.sum = 0;
       
    }
    onSubmit(): void {
        this._bonusListService.updateNodes(this.nodes)
            .subscribe((nodes: Node[]) => this.nodes = nodes, error => this.errorMessage = <any>error 
            );
            
        this._router.navigate(['/bonusLists'], );

    }
    onChange():void{
        this.sum = 0 ;   
        for(let i = 0; i < this.nodes.length; i++){
            this.sum += this.nodes[i].ownBonus;
            this.sum += this.nodes[i].teamBonus;
        };
        if (this.sum > this.toDistribute){
            this.overloaded = true;
        }
        else this.overloaded = false;
    }

}