import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/observable';
import {EmpService} from './../service/emp.service'
@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  public index: number=0;
  employee: Observable<any[]>;
  notes: Observable<any[]>;
  items: string[];
  data: Observable<any[]>;
  columns: string[];
  constructor(private _emp: EmpService) {
    
   }
  
  ngOnInit() {
    this.data = this._emp.getData();
    this.columns=this._emp.getColumns();
    this.notes=this._emp.getNotes();
    console.log("this.notes : "+this.notes+ " --- "+JSON.stringify(this.notes));
    this.items=this._emp.getItems();
    this.employee=this._emp.getEmployees();
    console.log("this.employee : "+this.employee+ " --- "+JSON.stringify(this.employee));

  }
}
