import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Team } from './team';

@Injectable()
export class TeamService {

    private _teamUrl = 'http://localhost:8080/teams';
    private headers = new Headers ({ 'Content-Type': 'application/json;charset=UTF-8' });
    constructor(private _http: Http) {

    }

    getTeams(): Observable <Team[]> {
        return this._http.get(this._teamUrl)
            .map((response: Response) => <Team[]>response.json())
            .do(data => console.log('ALL ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    getTeamById(teamId: number): Observable <Team> {
        return this._http.get(this._teamUrl + '/' + teamId)
            .map((response: Response) => <Team>response.json())
            .do(data => console.log('ALL ' + JSON.stringify(data)))
            .catch(this.handleError)

    }
    addTeam( team: Team): Observable <Team> {
        return this._http.post(this._teamUrl, JSON.stringify(team), { headers: this.headers })
            .map((response: Response) => <Team>response.json())
            .do(data => console.log('ALL' + JSON.stringify(data)))
            .catch(this.handleAddError);
    }

    updateTeam( team: Team): Observable <Team> {
        console.log(JSON.stringify(team));
        return this._http.put(this._teamUrl + '/' + team.teamId, JSON.stringify(team), { headers: this.headers })
            .map((response: Response) => <Team> response.json())
            .do(data => console.log('ALL' + JSON.stringify(data)))
            .catch(this.handleUpdateError);
    }
    deleteTeam(id: number) :Observable <Team> {
        return this._http.delete(this._teamUrl + '/' + id)
                .map((response : Response )=> <number> response.json())
                .do(data =>console.log("ALL" + JSON.stringify(data)))
                .catch(this.handleDeleteError);
    }

    
    private handleError(error: Response) {
        console.error(error);
        alert("Failed process team operation ");
        return Observable.throw(error.json().error || 'Server error');
    }
    private handleUpdateError(error: Response) {
        console.error(error);
        alert("Failed to update team");
        return Observable.throw(error.json().error || 'Server error');
    }

    private handleAddError(error: Response) {
        console.error(error);
        alert("Failed to add team");
        return Observable.throw(error.json().error || 'Server error');
    }
    private handleDeleteError(error: Response) {
        console.error(error);
        alert("Failed to delete team");
        return Observable.throw(error.json().error || 'Server error');
    }
}