import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../common/material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SecureComponent } from './secure.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule( {
  declarations: [
    SecureComponent,
    DashboardComponent,
    ToolbarComponent,
    ProfileComponent,
    UsersComponent,
    UserProfileComponent,
    UserCreateComponent,
  ],
  exports: [
    DashboardComponent,
    ToolbarComponent,
    SecureComponent
  ],

  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
} )
export class SecureModule {}
