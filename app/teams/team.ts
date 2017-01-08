import {IEmployee} from '../employees/employee';


export class ITeam{
    teamId : number;
    teamManagerId : IEmployee;
    teamName : string;
}