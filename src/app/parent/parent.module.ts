import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentsComponent } from './parents/parents.component';
import { ParentRoutingModule } from './parent-routing.module';
//import { MbscModule } from '@mobiscroll/angular-lite';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
//import { CalendarComponent } from './calendar/calendar.component'
import { from } from 'rxjs';

@NgModule({
  declarations: [ParentsComponent],
  imports: [
     CommonModule, 
     ParentRoutingModule,
     BrowserModule,
     //MbscModule,
     FormsModule,
     ReactiveFormsModule,
     HttpClientModule,
     HttpClientJsonpModule
    ]
})
export class ParentModule { }
