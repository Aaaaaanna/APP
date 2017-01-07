import { IEmployee } from '../employees/employee';

export interface INode{
    nodeId : number; 
	parentNode : INode;
	employee : IEmployee; 
	ownBonus : number; 
	teamBonus : number; 
	level : number;
	state: string; 
}