import { AfterViewInit, Component, OnInit } from '@angular/core';
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
  users!: User;
  id!: number;
  constructor(
    private userService: UserService,
    private auth: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getUser( this.id );
  }

  getUser( id: number ) {
    this.userService.userId( id ).subscribe( ( response: User ) => {
      this.users = response;
    } );
  }

}
