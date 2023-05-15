// Core Module
import { NgModule } from '@angular/core';

// Router Module
import { RouterModule, Routes } from '@angular/router';

// Guards
import { AuthGuard } from '../shared/guards/auth.guard';

// Components
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
