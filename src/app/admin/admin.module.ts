import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAccessComponent } from './admin-access/admin-access.component';
import { AdminRoutingModule } from './admin-routing.module';
import { DynamicListComponent } from '../personalities/dynamic-list/dynamic-list.component';
import { StudentDetailsComponent } from '../students/student-details/student-details.component';
import { FormsModule } from '@angular/forms';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { LenderDetailsComponent } from '../lender/lender-details/lender-details.component';
import { TransportationDetailsComponent } from '../transportation/transportation-details/transportation-details.component';
import { DriverDetailsComponent } from '../driver/driver-details/driver-details.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
//import { TransportationListComponent } from 'transportation/transportation-list/transportation-list.component';
// import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: 
  [
    AdminAccessComponent,
    DriverDetailsComponent,
    StudentDetailsComponent, 
    TransportationDetailsComponent, 
    DynamicListComponent, 
    LenderDetailsComponent, 
    AdminDetailsComponent
  ],
  imports: 
  [ 
    CommonModule, 
    AdminRoutingModule, 
    FormsModule, 
    MatGoogleMapsAutocompleteModule
  ]
})
export class AdminModule { }
