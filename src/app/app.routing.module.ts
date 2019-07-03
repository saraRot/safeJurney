import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresenceComponent } from './lender/presence/presence.component';
import { LoginComponent } from './login/login.component';
import { LenderModule } from './lender/lender.module';
import { ParentModule } from './parent/parent.module';
import { AdminModule } from './admin/admin.module';


export const APP_ROUTES: Routes= [
     { path: 'login',  component: LoginComponent},
     { path: 'lender', loadChildren: ()=> LenderModule},
     { path: 'parent', loadChildren: ()=> ParentModule},
     { path: 'admin', loadChildren: ()=> AdminModule},
     { path: 'admin/:id', loadChildren: ()=> AdminModule},
     { path: "",   redirectTo: '/login', pathMatch: 'full' }
    // { path: '**', component: PageNotFoundComponent }
   ];
     
     @NgModule({
        imports: [ RouterModule.forRoot(APP_ROUTES) ],
        exports: []
    })
     export class AppRoutingModule { }
         