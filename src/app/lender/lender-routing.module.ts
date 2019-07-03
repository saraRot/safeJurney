import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LenderAccessComponent } from './lender-access/lender-access.component';
import { PresenceComponent } from './presence/presence.component';

export const Routes: Route[] = [
  { path: 'lender/presence',  component: PresenceComponent},
  { path: 'lender/presence/:transportationCode',  component: PresenceComponent},
  { path: 'lender/access',  component: LenderAccessComponent},
 // { path: 'lender',  component: LenderAccessComponent},
  { path: '',   redirectTo: '/lender/access', pathMatch: 'full' } 
];
@NgModule({
  imports: [ RouterModule.forChild(Routes) ],
  exports: []
})
export class LenderRoutingModule {

 }
