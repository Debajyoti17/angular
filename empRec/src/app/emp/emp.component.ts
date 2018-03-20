import { Component, OnInit, ViewChild } from '@angular/core';
import {Observable} from 'rxjs/observable';
import {EmpService} from './../service/emp.service'
import {DataSource} from '@angular/cdk/collections';
import {Sort, MatSort} from '@angular/material';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  public index: number=0;
  public employee;
  public note;
  dataSource = new EmployeeDataSource(this._empService);
  displayedColumns = ['empId', 'name', 'address', 'salary', 'dept', 'age', 'createdAt', 'updatedAt'];
  sortedData: Sort;
  matDataSource = new MatTableDataSource<any>();
  constructor(private _empService: EmpService) {
    // this.sortedData = this.employee.slice();
    console.log("emp dat--------: "+JSON.stringify(this.employeeData()));
   }
  
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) matSort: MatSort;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    // this.matDataSource.sortData = this.matDataSource;
    this.matDataSource.paginator = this.paginator;
  }

  ngOnInit() {
  }

  employeeData() {
    this._empService.getEmployees().subscribe(
      data =>{this.employee = data;},
      err=> {console.error(err);},
      () => {console.log("Data has loaded properly");}
    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.matDataSource.filter = filterValue;
  }

  sortData(sort: Sort) {
    const data = this.employee.slice();
    console.log("In SortDat ------ this.employee ---:"+this.employee+"---"+JSON.stringify(this.employee));
    if (!sort.active || sort.direction == '') {
      this.sortedData = data;
      console.log("sotData ........... >> "+JSON.stringify(this.sortedData)+"===--------------==="+JSON.stringify(data));
      return;
    }

    this.sortedData = data.sort((a, b) => {
      let isAsc = sort.direction == 'desc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'empId': return compare(+a.empId, +b.empId, isAsc);
        case 'address': return compare(+a.address, +b.address, isAsc);
        case 'dept': return compare(+a.dept, +b.dept, isAsc);
        case 'age': return compare(+a.age, +b.age, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

export class EmployeeDataSource extends DataSource<any> {
  
  constructor(private _empService: EmpService) {
    super();
    this._empService.getEmployees();
  }

  // Connect function called by the table to retrieve one stream containing the data to render. 
  connect(): Observable<any[]> {
       
    return this._empService.getEmployees();
  }

  disconnect() {}
}
