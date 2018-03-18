import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    BrowserModule, HttpClientModule, MatTableModule
  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
