import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ParentsComponent } from './parents/parents.component';


const Routes: Route[] = [
  { path: '',  component: ParentsComponent}
];
@NgModule({
  imports: [ RouterModule.forChild(Routes) ],
  exports: []
})
export class ParentRoutingModule { }
