import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';

import { MaterialModule } from './common/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PubblicComponent } from './pubblic/pubblic.component';
import { SecureComponent } from './secure/secure.component';
import { LoginComponent } from './pubblic/login/login.component';
import { RegisterComponent } from './pubblic/register/register.component';
import { SecureModule } from './secure/secure.module';
import { PublicModule } from './pubblic/public.module';

@NgModule( {
  declarations: [
    AppComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SecureModule,
    PublicModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule {}
