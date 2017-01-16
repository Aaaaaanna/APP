import { Employee } from '../employees/employee';

export class Node{
    nodeId : number; 
	parentNode : Node;
	employee : Employee; 
	ownBonus : number; 
	teamBonus : number; 
	level : number;
	state: string; 
}