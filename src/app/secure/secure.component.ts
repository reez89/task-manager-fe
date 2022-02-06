import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Auth } from '../classes/auth';
import { DialogComponent } from '../common/dialog/dialog.component';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

@Component( {
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: [ './secure.component.scss' ]
} )
export class SecureComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.auth.user().subscribe(
      user => {
        Auth.userEmitter.emit( user );
        if ( user ) {
          this.auth.isLoggedIn.next( true );
          this.auth.userType.next( user );
          if ( user.role?.name !== 'Admin' ) {
            this.auth.isLoggedIn.next( true );
            this.auth.userType.next( user );
            setTimeout( () => {
              this.dialog.open( DialogComponent );
            }, 1000 );
          }
        } else {
          this.auth.isLoggedIn.next( false );
        }
      },
      err => { this.router.navigate( [ '/login' ] ); }
    );
  }

}
