import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

@Injectable()
export class EmpService {
  private empUrl = 'http://localhost:8088/api/emps';
  
  constructor(private _http: HttpClient) { }

  getEmployees(): Observable<any[]>{
    return this._http.get<any[]>(this.empUrl);
  }

}