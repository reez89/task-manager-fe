import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PubblicComponent } from './pubblic.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../common/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from '../secure/toolbar/toolbar.component';



@NgModule( {
  declarations: [
    PubblicComponent,
    RegisterComponent,
    LoginComponent,
  ],
  exports: [
    RegisterComponent,
    LoginComponent,
    PubblicComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
} )
export class PublicModule {}
