import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LenderAccessComponent } from './lender-access/lender-access.component';
import { PresenceComponent } from './presence/presence.component';
import { LenderRoutingModule } from './lender-routing.module';

@NgModule({
  declarations: [ LenderAccessComponent, PresenceComponent],
  imports: [ CommonModule ,LenderRoutingModule ]
})
export class LenderModule { }
