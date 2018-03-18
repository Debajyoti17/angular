import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

@Injectable()
export class EmpService {
  private noteUrl = 'http://localhost:8088/api/notes';
  private empUrl = 'http://localhost:8088/api/emps';
  DATA: any[] =
    [
      {
        name: 'Earl of Lemongrab',
        age: 'Unknown',
        species: 'Lemon Candy',
        occupation: 'Earl, Heir to the Candy Kingdom Throne'
      },
      {
        name: 'Bonnibel Bubblegum',
        age: '19',
        species: 'Gum Person',
        occupation: 'Returned Ruler of the Candy Kingdom'
      },
      {
        name: 'Phoebe',
        age: '16',
        species: 'Flame Person',
        occupation: 'Ruler of the Fire Kingdom'
      },
      {
        name: 'Lumpy Space Princess',
        age: '18',
        species: 'Lumpy Space Person',
        occupation: 'Babysitter'
      }
    ]
  constructor(private _http: HttpClient) { }

  getEmployees(): Observable<any[]>{
    return this._http.get<any[]>(this.empUrl);
  }
  getNotes(): Observable<any[]>{
    return this._http.get<any[]>(this.noteUrl);
  }
  getItems(): string[]{
    return ["title", "content"];
  }
  getData(): Observable<any[]>{
    return Observable.of(this.DATA).delay(100);
  }
  getColumns(): string[]{
    return ["name", "age", "species", "occupation"]
  };

}