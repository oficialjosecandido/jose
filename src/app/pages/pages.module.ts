// Core Module
import { NgModule } from '@angular/core';

// Common module
import { CommonModule } from '@angular/common';

// Shared module
import { SharedModule } from '../shared/shared.module';

// Routing
import { PagesRoutingModule } from './pages-routing.module';

// Components
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
  ]
})
export class PagesModule { }
