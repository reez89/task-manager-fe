import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../classes/auth';
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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.auth.user().subscribe(
      user => {
        Auth.userEmitter.emit( user );
      },
      err => { this.router.navigate( [ '/login' ] ); }
    );
  }

}
