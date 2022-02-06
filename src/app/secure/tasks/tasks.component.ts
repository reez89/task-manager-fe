import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Tasks } from 'src/app/interfaces/task';
import { AuthService } from 'src/app/services/auth.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component( {
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: [ './tasks.component.scss' ]
} )
export class TasksComponent implements OnInit {

  isAdmin: boolean = false;
  displayedColumns: string[] = [ 'id', 'Title', 'Description', 'Priority', 'State', 'User Id', 'Action' ];
  tasks!: Tasks[];
  length = 100;
  pageSize = 5;
  pageEvent!: PageEvent;
  page = 1;
  constructor( private tasksService: TasksService, private auth: AuthService ) {}

  ngOnInit(): void {
    this.loadTasks();
    this.auth.userType.subscribe( ( value ) => {
      if ( value?.role?.name === 'Admin' )
        this.isAdmin = true;
    } );
  }


  loadTasks() {
    this.tasksService.all( this.page, this.pageSize ).subscribe( ( response ) => {
      this.tasks = response.data;
      this.length = response.meta.total;
      this.pageSize = response.meta.pageSize;
    } );
  }

  OnPageChange( page: PageEvent ) {
    this.pageSize = page.pageSize;
    this.page = page.pageIndex + 1;
    this.loadTasks();
  }

  deleteTask( i: number ) {
    if ( confirm( 'Are you sure you want to delete this task?' ) ) {
      this.tasksService.delete( i ).subscribe( () => {
        this.tasks = this.tasks.filter( task => task.id !== i );
        this.loadTasks();
      } );
    }
  }


}
