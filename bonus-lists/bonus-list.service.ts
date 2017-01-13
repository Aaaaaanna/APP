import { Injectable } from '@angular/core' ; 
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map' ;
import 'rxjs/add/operator/do' ;
import 'rxjs/add/operator/catch' ;

import { IBonusList } from './bonus-list';

@Injectable()
export class BonusListService {

    private _bonusListUrl = 'api/bonus-list.json';
    constructor (private _http: Http){

    }

    getBonusLists() : Observable <IBonusList[]>{
        return this._http.get(this._bonusListUrl)
        .map( (response: Response) => <IBonusList[]> response.json() )
        .do (data => console.log( 'ALL ' + JSON.stringify(data) ))
        .catch(this.handleError );
    } 
    private handleError(error : Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}