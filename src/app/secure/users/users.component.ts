import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component( {
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.scss' ]
} )
export class UsersComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'User Name', 'Role', 'Action' ];
  length = 100;
  pageSize = 2;
  pageEvent!: PageEvent;
  users: User[] = [];
  page = 1;

  constructor( private userService: UserService ) {}

  ngOnInit() {
    this.loadUsers( this.page );

  }

  loadUsers( page: number ) {
    this.userService.all( page ).subscribe( ( response ) => {
      this.users = response.data; console.log( response );
      this.length = response.meta.total;
      this.pageSize = response.meta.total / 2;
      console.log( this.length );
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



}
