import { Injectable } from '@angular/core' ; 
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map' ;
import 'rxjs/add/operator/do' ;
import 'rxjs/add/operator/catch' ;
import { Node } from '../nodes/node';
import { BonusList } from './bonus-list';

@Injectable()
export class BonusListService {

    private _bonusListUrl = 'http://localhost:8080/bonuses';
    private headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    constructor (private _http: Http){

    }

    getBonusLists() : Observable <BonusList[]>{
        return this._http.get(this._bonusListUrl)
        .map( (response: Response) => <BonusList[]> response.json() )
        .do (data => console.log( 'ALL ' + JSON.stringify(data) ))
        .catch(this.handleError );
        
    
    }
   getNodes( nodeId : number, employeeId : number ) : Observable<Node[]>{
        return this._http.get(this._bonusListUrl + '/' + nodeId + "/" + employeeId)
        .map ((response : Response) => <Node[]> response.json())
        .do (data => console.log ('ALL ' + JSON.stringify(data) ))
        .catch (this.handleError);
        
    }
    updateNodes( nodes: Node[] ) : Observable<Node[]>{
        return this._http.put(this._bonusListUrl ,JSON.stringify(nodes), {headers :this.headers})
        .map ((response : Response) => <Response> response)
        .do (data => console.log ('ALL ' + JSON.stringify(data) ))
        .catch (this.handleError);
    }
    getBonusListById(id : number):Observable<BonusList>{
         return this._http.get(this._bonusListUrl + '/' + id)
            .map((response: Response) => <BonusList>response.json())
            .do(data => console.log('ALL ' + JSON.stringify(data)))
            .catch(this.handleError);
    } 

    addBonusList(bonusList : BonusList) : Observable <BonusList>{
        return this._http.post(this._bonusListUrl,  JSON.stringify(bonusList), { headers: this.headers })
        .map ((response : Response) => <BonusList> response.json())
        .catch(this.handleError);
    }
    private handleError(error : Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}