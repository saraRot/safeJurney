import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentsComponent } from './parents/parents.component';
import { ParentRoutingModule } from './parent-routing.module';

@NgModule({
  declarations: [ParentsComponent],
  imports: [ CommonModule, ParentRoutingModule]
})
export class ParentModule { }
