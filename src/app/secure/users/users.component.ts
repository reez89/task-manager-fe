import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component( {
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.scss' ]
} )
export class UsersComponent implements OnInit {

  isLoggedIn = false;
  displayedColumns: string[] = [ 'id', 'User Name', 'Role', 'Action' ];
  length = 100;
  pageSize = 5;
  pageEvent!: PageEvent;
  users: User[] = [];
  page = 1;
  searchValue: string = '';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private auth: AuthService

  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.all( this.page, this.pageSize ).subscribe( ( response ) => {
      this.users = response.data;
      this.length = response.meta.total;
      this.pageSize = response.meta.pageSize;
    } );
  }

  OnPageChange( page: PageEvent ) {
    this.pageSize = page.pageSize;
    this.page = page.pageIndex + 1;
    this.loadUsers();
  }

  deleteUser( i: number ) {
    if ( confirm( 'Are you sure you want to delete this user' ) ) {
      this.userService.delete( i ).subscribe( () => {
        this.users = this.users.filter( user => user.id !== i );
        this.loadUsers();
      } );
    }
  }



}
