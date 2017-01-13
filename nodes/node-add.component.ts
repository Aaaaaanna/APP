import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employees/employee.service';
import { IEmployee } from '../employees/employee';
import { NodeService } from './node.service';
import { INode } from './node';

@Component({
    templateUrl: 'app/nodes/node-add.component.html'
})

export class NodeAddComponent implements OnInit {
    private pageTitle: String = 'Add node';
    private employees: IEmployee[];
    private nodes: INode[];
    private node : INode;
    private errorMessage: string;
    constructor(private _employeeService: EmployeeService,
                    private _nodeService: NodeService) {
        this.node = new INode();
     }
    ngOnInit(): void {
        this._employeeService.getEmployees()
            .subscribe(employees => this.employees = employees,
            error => this.errorMessage = <any>error);
        this._nodeService.getNodes()
            .subscribe(nodes => this.nodes = nodes,
            error => this.errorMessage = <any>error);
    }
    onSubmit(){
        console.log(JSON.stringify(this.node))
        this._nodeService.addNode(this.node)
        .subscribe(node => this.node = node);
    }
}