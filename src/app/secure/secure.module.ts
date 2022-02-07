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
import { RolesComponent } from './roles/roles.component';
import { ProjectsComponent } from './projects/projects.component';
import { SearchfilterPipe } from '../searchfilter.pipe';
import { TasksComponent } from './tasks/tasks.component';
import { TasksCreateComponent } from './tasks/tasks-create/tasks-create.component';
import { TaskUpdateComponent } from './tasks/task-update/task-update.component';
import { ProjectCreateComponent } from './projects/project-create/project-create.component';



@NgModule( {
  declarations: [
    SecureComponent,
    DashboardComponent,
    ToolbarComponent,
    ProfileComponent,
    UsersComponent,
    UserProfileComponent,
    UserCreateComponent,
    RolesComponent,
    ProjectsComponent,
    SearchfilterPipe,
    TasksComponent,
    TasksCreateComponent,
    TaskUpdateComponent,
    ProjectCreateComponent,
  ],
  exports: [
    DashboardComponent,
    ToolbarComponent,
    SecureComponent,
    SearchfilterPipe,
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
