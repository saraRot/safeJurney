import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAccessComponent } from './admin-access/admin-access.component';
import { AdminRoutingModule } from './admin-routing.module';
import { DynamicListComponent } from '../personalities/dynamic-list/dynamic-list.component';
import { StudentDetailsComponent } from '../students/student-details/student-details.component';
import { FormsModule } from '@angular/forms';
//import { TransportationListComponent } from 'transportation/transportation-list/transportation-list.component';
// import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [AdminAccessComponent, StudentDetailsComponent, DynamicListComponent],
  imports: [ CommonModule, AdminRoutingModule, FormsModule]
})
export class AdminModule { }
