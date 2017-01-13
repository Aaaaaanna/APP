import {ITeam} from '../teams/team';

export class IEmployee{
    employeeId: number; 
    team : ITeam;
	firstName : string ;
	lastName : string ;
	phoneNumber : string ;
	mobileNumber : string ;
	officeAddress : string ;
	emailAddress : string ;
}