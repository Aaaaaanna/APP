import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { INode } from './node';


@Injectable()
export class NodeService {
    private _nodeUrl = 'http://localhost:8080/nodes';
    private headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' })
    constructor(private _http: Http) {

    }
    getNodes(): Observable<INode[]> {
        return this._http.get(this._nodeUrl)
            .map((response: Response) => <INode[]>response.json())
            .do(data => console.log('ALL ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    addNode (node : INode) : Observable<INode>{
        console.log(JSON.stringify(node));
        return this._http.post(this._nodeUrl ,JSON.stringify(node), {headers: this.headers} )
                .map((response : Response)=><INode> response.json())
                .do( data => console.log('ALL' + JSON.stringify(data)))
                .catch(this.handleError);
     }


    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}