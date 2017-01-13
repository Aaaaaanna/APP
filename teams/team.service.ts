import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { ITeam } from './team';

@Injectable()
export class TeamService {

    private _teamUrl = 'http://localhost:8080/teams';
    private headers = new Headers ({ 'Content-Type': 'application/json;charset=UTF-8' });
    constructor(private _http: Http) {

    }

    getTeams(): Observable <ITeam[]> {
        return this._http.get(this._teamUrl)
            .map((response: Response) => <ITeam[]>response.json())
            .do(data => console.log('ALL ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    getTeamById(teamId: number): Observable <ITeam> {
        return this._http.get(this._teamUrl + '/' + teamId)
            .map((response: Response) => <ITeam>response.json())
            .do(data => console.log('ALL ' + JSON.stringify(data)))
            .catch(this.handleError)

    }
    addTeam( team: ITeam): Observable <ITeam> {
        return this._http.post(this._teamUrl, JSON.stringify(team), { headers: this.headers })
            .map((response: Response) => <ITeam>response.json())
            .do(data => console.log('ALL' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    updateTeam( team: ITeam): Observable <ITeam> {
        console.log(JSON.stringify(team));
        return this._http.put(this._teamUrl + '/' + team.teamId, JSON.stringify(team), { headers: this.headers })
            .map((response: Response) => <ITeam> response.json())
            .do(data => console.log('ALL' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    deleteTeam(id: number) :Observable<ITeam> {
        return this._http.delete(this._teamUrl + '/' + id)
                .map((response : Response)=> <ITeam> response.json())
                .do(data =>console.log("ALL" + JSON.stringify(data)))
                .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}