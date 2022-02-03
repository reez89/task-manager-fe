import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pubblic/login/login.component';
import { PubblicComponent } from './pubblic/pubblic.component';
import { RegisterComponent } from './pubblic/register/register.component';
import { DashboardComponent } from './secure/dashboard/dashboard.component';
import { SecureComponent } from './secure/secure.component';

const routes: Routes = [
  {
    path: '',
    component: SecureComponent,
    children: [
      { path: '', component: DashboardComponent },
    ]
  },

  {
    path: '',
    component: PubblicComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]
  },


];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule {}
