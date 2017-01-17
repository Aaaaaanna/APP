import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Component({
    templateUrl: 'app/login/login.component.html'
})
export class LoginComponent{
    pageTitle: String = 'Login';
    errorMessage: String;
    headers = new Headers();
    login :string  = "";
    password : string = "";
   constructor(public router: Router, public http: Http) {
  }

 
  loginMe() {
    console.log(this.login);
    console.log(this.password);
    console.log(this.headers.toJSON());
    this.headers.append("crossDomain","true");
    this.headers.append("content-type","application/x-www-form-urlencoded" );
    this.headers.append("Authorization", "Basic " + btoa(this.login + ":" + this.password)); 
    console.log(this.headers.toJSON());
    this.http.get('http://localhost:8080/employees',{ headers: this.headers })
      .do(data => console.log('ALL' + JSON.stringify(data)))
      .catch(this.handleError)
      .subscribe(
        response => {
          localStorage.setItem('id_token', response.json().id_token);alert(response.json());
          this.router.navigate(['home']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }
  private handleError(error: Response) {
        console.error(error);
        alert("Failed ");
        return Observable.throw(error.json().error || 'Server error');
    }
}
