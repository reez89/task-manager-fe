import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from '../services/auth.service';
import { SidenavService } from './sidenav.service';

@Component( {
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: [ './sidenav.component.scss' ]
} )
export class SidenavComponent implements OnInit {

  isAdmin: boolean = false;

  @Output() navToggle = new EventEmitter<boolean>();
  constructor( private auth: AuthService ) {}

  ngOnInit(): void {
    this.auth.isLoggedIn.subscribe( value => {
      if ( value ) {
        this.auth.userType.subscribe( user => {
          if ( user?.role?.name !== 'Admin' )
            this.isAdmin = false;
          else
            this.isAdmin = true;
        } );
      }
    } );
  };

  closeNav() {
    this.navToggle.emit( false );
  }

}
