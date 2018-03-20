import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';
import {EmpService} from './service/emp.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpComponent    
  ],
  imports: [
    BrowserModule, HttpClientModule, MatTableModule, MatPaginatorModule, MatSortModule, BrowserAnimationsModule, FormsModule, MatButtonToggleModule, MatFormFieldModule, MatInputModule
  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
