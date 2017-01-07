import {ITeam} from '../teams/team';

export interface IEmployee{
    employeeId: number; 
    teamId : ITeam;
	firstName : string ;
	lastName : string ;
	phoneNumber : string ;
	mobileNumber : string ;
	officeAddress : string ;
	emailAddress : string ;
}