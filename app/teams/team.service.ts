import { Injectable } from '@angular/core' ; 
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map' ;
import 'rxjs/add/operator/do' ;
import 'rxjs/add/operator/catch' ;

import { ITeam } from './team';



@Injectable()
export class TeamService {

    private _teamUrl = 'http://localhost:8080/teams'; 
    constructor (private _http: Http){

    }

    getTeams() : Observable <ITeam[]>{
        return this._http.get(this._teamUrl)
        .map( (response: Response) => <ITeam[]> response.json() )
        .do (data => console.log( 'ALL ' + JSON.stringify(data) ))
        .catch(this.handleError );
    } 
    getTeamById (teamId : number ) : Observable <ITeam> {
        return this._http.get(this._teamUrl + '/'+teamId)
        .map( (response : Response) => <ITeam> response.json())
        .do (data => console.log( 'ALL ' + JSON.stringify(data) ))
        .catch(this.handleError)
        
    }


    private handleError(error : Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}