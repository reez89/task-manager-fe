import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pubblic/login/login.component';
import { PubblicComponent } from './pubblic/pubblic.component';
import { RegisterComponent } from './pubblic/register/register.component';
import { DashboardComponent } from './secure/dashboard/dashboard.component';
import { ProfileComponent } from './secure/profile/profile.component';
import { SecureComponent } from './secure/secure.component';
import { UserProfileComponent } from './secure/user-profile/user-profile.component';
import { UserCreateComponent } from './secure/users/user-create/user-create.component';
import { UsersComponent } from './secure/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: SecureComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'profile', component: ProfileComponent, children: [
          { path: ':id', component: UserProfileComponent },
        ]
      },
      { path: 'users', component: UsersComponent },
      { path: 'users/create', component: UserCreateComponent },

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
