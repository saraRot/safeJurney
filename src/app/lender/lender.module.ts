import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LenderAccessComponent } from './lender-access/lender-access.component';
import { PresenceComponent } from './presence/presence.component';
import { LenderRoutingModule } from './lender-routing.module';
import { NavigateMapsComponent } from './navigate-maps/navigate-maps.component';
import { FormsModule } from '@angular/forms';
import { LenderDetailsComponent } from './lender-details/lender-details.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
//import { RoutingMapComponent } from './routing-map/routing-map.component';

@NgModule({
  declarations: [ 
    LenderAccessComponent, 
    PresenceComponent, 
    NavigateMapsComponent, 
    //RoutingMapComponent,
  ],
  imports: [
    CommonModule,
    LenderRoutingModule, 
    FormsModule,  
    AgmCoreModule,
    AgmDirectionModule,
    MatGoogleMapsAutocompleteModule, 
  ],
})
export class LenderModule { }
