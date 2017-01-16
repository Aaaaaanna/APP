import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Employee } from './employee';



@Injectable()
export class EmployeeService {
    private _employeeUrl = 'http://localhost:8080/employees';
    private headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    constructor(private _http: Http) {

    }

    getEmployees(): Observable<Employee[]> {
        return this._http.get(this._employeeUrl)
            .map((response: Response) => <Employee[]>response.json())
            .do(data => console.log('ALL ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    getEmployeeById(employeeId: number): Observable<Employee> {
        return this._http.get(this._employeeUrl + '/' + employeeId)
            .map((response: Response) => <Employee>response.json())
            .do(data => console.log('ALL ' + JSON.stringify(data)))
            .catch(this.handleError);

    }
    updateEmployee(employee: Employee): Observable<Employee> {
        return this._http.put(this._employeeUrl + '/' + employee.employeeId, JSON.stringify(employee), { headers: this.headers })
            .map((response: Response) => <Employee>response.json())
            .catch(this.handleUpdateError);
    }
    addEmployee(employee: Employee): Observable<Employee> {
        console.log(JSON.stringify(employee));
        return this._http.post(this._employeeUrl, JSON.stringify(employee), { headers: this.headers })
            .map((response: Response) => <Employee>response.json())
            .do(data => console.log('ALL' + JSON.stringify(data)))
            .catch(this.handleAddError);
    }

    deleteEmployee(id: number): Observable<Employee> {
        console.log(id);
        return this._http.delete(this._employeeUrl + '/' + id)
            .map((res: Response) => <Employee>res.json())
            .do(data => console.log('ALL' + JSON.stringify(data)))
            .catch(this.handleDeleteError);

    }

    private handleError(error: Response) {
        console.error(error);
        alert("Failed process employee operation ");
        return Observable.throw(error.json().error || 'Server error');
    }
    private handleUpdateError(error: Response) {
        console.error(error);
        alert("Failed to update employee");
        return Observable.throw(error.json().error || 'Server error');
    }

    private handleAddError(error: Response) {
        console.error(error);
        alert("Failed to add employee");
        return Observable.throw(error.json().error || 'Server error');
    }
    private handleDeleteError(error: Response) {
        console.error(error);
        alert("Failed to delete employee");
        return Observable.throw(error.json().error || 'Server error');
    }
}