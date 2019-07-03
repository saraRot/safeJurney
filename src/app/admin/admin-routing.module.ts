import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { AdminAccessComponent } from './admin-access/admin-access.component';
import { DynamicListComponent } from '../personalities/dynamic-list/dynamic-list.component';
//import { TransportationListComponent } from 'transportation/transportation-list/transportation-list.component';


const Routes: Route[] = [
  { path: '',  component:AdminAccessComponent },
  { path: 'personalities/dynamic-list/:personality',  component:DynamicListComponent },
  // { path: 'transportation/transportation-list',  component:TransportationListComponent },
];
@NgModule({
  imports: [ RouterModule.forChild(Routes) ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
