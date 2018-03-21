import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { EmpService } from './../service/emp.service'
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements AfterViewInit {
  employee;
  dataSource = new MatTableDataSource(this.employee);

  displayedColumns = ['empId', 'name', 'address', 'salary', 'dept', 'age', 'createdAt', 'updatedAt'];
  sortedData: MatSort;
  constructor(private _empService: EmpService) {

    this._empService.getEmployees().subscribe(result => {
      if (!result)
        return;
      this.employee = result;
      this.dataSource.data = this.employee;
    });

  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) matSort: MatSort;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.matSort;
    this.dataSource.paginator = this.paginator;
    console.log("ngAfter----after------------:");
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  sortData(sort: MatSort) {
    const data = this.employee.slice();
    if (!sort.active || sort.direction == '') {
      this.sortedData = data;
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
