import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';

import { MaterialModule } from './common/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SecureModule } from './secure/secure.module';
import { PublicModule } from './pubblic/public.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CredentialInterceptor } from './interceptors/credential.interceptor';
import { DialogComponent } from './common/dialog/dialog.component';

@NgModule( {
  declarations: [
    AppComponent,
    SidenavComponent,
    DialogComponent,
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
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: CredentialInterceptor,
    multi: true
  } ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {}
