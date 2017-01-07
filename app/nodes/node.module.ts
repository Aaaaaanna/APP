import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NodeAddComponent } from './node-add.component';
@NgModule({
    declarations: [
        NodeAddComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
           // { path : 'nodes', component : NodeListComponent },
            { path : 'addNode', component : NodeAddComponent  }, 
           
        ])
    ]
})
export class NodeModule{
    
}