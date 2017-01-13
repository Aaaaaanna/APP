import {IEmployee} from '../employees/employee';


export class ITeam{
    teamId : number;
    teamManager : IEmployee;
    teamName : string;
}