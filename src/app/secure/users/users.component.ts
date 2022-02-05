import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component( {
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.scss' ]
} )
export class UsersComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'User Name', 'Role', 'Action' ];
  length = 100;
  pageSize = 5;
  pageEvent!: PageEvent;
  users: User[] = [];
  page = 1;

  constructor(
    private userService: UserService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadUsers( this.page );
  }

  loadUsers( page: number ) {
    this.userService.all( page ).subscribe( ( response ) => {
      this.users = response.data;
      this.length = response.meta.total;
      // this.pageSize = response.meta.total;
    } );
  }

  // setPageSizeOptions( setPageSizeOptionsInput: string ) {
  //   if ( setPageSizeOptionsInput ) {
  //     this.pageSizeOptions = setPageSizeOptionsInput.split( ',' ).map( str => +str );
  //   }
  // }

  OnPageChange( page: PageEvent ) {
    this.loadUsers( page.pageIndex + 1 );
  }

  deleteUser( i: number ) {
    if ( confirm( 'Are you sure you want to delete this user' ) ) {
      this.userService.delete( i ).subscribe( () => {
        this.users = this.users.filter( user => user.id !== i );
        this.loadUsers( this.page );
      } );
    }
  }



}
