import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PubblicComponent } from './pubblic.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../common/material';



@NgModule( {
  declarations: [
    PubblicComponent,
    RegisterComponent,
    LoginComponent,
  ],
  exports: [
    RegisterComponent,
    LoginComponent,
    PubblicComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
} )
export class PublicModule {}
