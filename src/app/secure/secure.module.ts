import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../common/material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SecureComponent } from './secure.component';
import { RouterModule } from '@angular/router';



@NgModule( {
  declarations: [
    SecureComponent,
    DashboardComponent,
    ToolbarComponent,
  ],
  exports: [
    DashboardComponent,
    ToolbarComponent,
    SecureComponent
  ],

  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
} )
export class SecureModule {}
