import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component( {
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: [ './user-profile.component.scss' ]
} )
export class UserProfileComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userService: UserService,
    private auth: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( param => {
      const stringId = param.get( 'id' );
      let id: number;
      if ( stringId ) {
        id = parseFloat( stringId );
      }
      this.users.forEach( ( user: any ) => {
        if ( user.id === id )
          this.users = user;
        console.log( 'user', this.users );
        console.log( 'user', id );
      } );
    } );
  }

}
