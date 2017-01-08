import {ITeam} from '../teams/team';

export class IEmployee{
    employeeId: number; 
    teamId : ITeam;
	firstName : string ;
	lastName : string ;
	phoneNumber : string ;
	mobileNumber : string ;
	officeAddress : string ;
	emailAddress : string ;
}