import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { LenderAccessComponent } from './lender/lender-access/lender-access.component';
import { PresenceComponent } from './lender/presence/presence.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentHttpService } from './services/student-http.service';
import { AppRoutingModule } from './app.routing.module';
import { LenderModule } from './lender/lender.module';
import { ParentModule } from './parent/parent.module';
import { AdminModule } from './admin/admin.module';
import { FormsModule } from "@angular/forms";
import { LoginHttpService } from './login/login-http.service';
import { RouterModule } from '@angular/router';
import { DynamicListComponent } from './personalities/dynamic-list/dynamic-list.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { AgmCoreModule } from '@agm/core';
import { NavigateMapsComponent } from './lender/navigate-maps/navigate-maps.component';
import { AgmDirectionModule } from 'agm-direction'; 
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';

@NgModule({
     imports:
          [
               BrowserModule,
               FormsModule,
               HttpClientModule,
               AppRoutingModule,
               RouterModule,
               LenderModule,
               ParentModule,
               AdminModule,
               AgmCoreModule.forRoot({apiKey: '', libraries: ["places"]}),
               //AgmDirectionModule,
               // BrowserAnimationsModule,
               // MatGoogleMapsAutocompleteModule,
          ],
     declarations: [AppComponent, LoginComponent, AutocompleteComponent],
    // exports: [AgmCoreModule, AgmDirectionModule],
     providers: [StudentHttpService, LoginHttpService],
     bootstrap: [AppComponent],
})
export class AppModule {

}
