import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';



@Component( {
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
} )
export class DashboardComponent implements OnInit {

  isAdmin: boolean = false;

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
  }


}
