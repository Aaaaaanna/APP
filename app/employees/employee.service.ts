import { Injectable } from '@angular/core' ; 
import { Http, Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map' ;
import 'rxjs/add/operator/do' ;
import 'rxjs/add/operator/catch' ;

import { IEmployee } from './employee';



@Injectable()
export class EmployeeService {

    private _employeeUrl = 'http://localhost:8080/employees'; 
    private headers = new Headers ({'Content-Type':'application/json'})
    constructor (private _http: Http){

    }

    getEmployees() : Observable <IEmployee[]>{
        return this._http.get(this._employeeUrl)
        .map( (response: Response) => <IEmployee[]> response.json() )
        .do (data => console.log( 'ALL ' + JSON.stringify(data) ))
        .catch(this.handleError );
    } 
    getEmployeeById (employeeId : number ) : Observable <IEmployee> {
        return this._http.get(this._employeeUrl + '/1')
        .map( (response : Response) => <IEmployee> response.json())
        .do (data => console.log( 'ALL ' + JSON.stringify(data) ))
        .catch(this.handleError);
        
    }
    updateEmployee (employee : IEmployee) : Observable <IEmployee>{
        return this._http.put(this._employeeUrl+'/1', JSON.stringify(employee),{headers:this.headers} )
        .catch(this.handleError);
        
    }
    addEmployee (employee : IEmployee){
       
        console.log(JSON.stringify(employee));

        this._http.post(this._employeeUrl, JSON.stringify(employee), {headers:this.headers} )
        .map( (response : Response) => <IEmployee> response.json())
        .do (data=>console.log('ALL'+ JSON.stringify(data) ))
        .catch(this.handleError)
        ;
    }
   
    private handleError(error : Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}