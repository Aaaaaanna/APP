import {IEmployee} from '../employees/employee';


export interface ITeam{
    teamId : number;
    teamManagerId : IEmployee;
    teamName : string;
}