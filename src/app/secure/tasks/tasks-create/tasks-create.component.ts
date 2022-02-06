import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { TasksService } from 'src/app/services/tasks.service';
import { UserService } from 'src/app/services/user.service';

@Component( {
  selector: 'app-tasks-create',
  templateUrl: './tasks-create.component.html',
  styleUrls: [ './tasks-create.component.scss' ]
} )
export class TasksCreateComponent implements OnInit {

  form!: FormGroup;
  users: User[] = [];
  hide = true;

  constructor(
    private fb: FormBuilder,
    private tasksService: TasksService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.all().subscribe( res => {
      this.users = res.data;

    } );


    this.form = this.fb.group( {
      title: [ '', Validators.required ],
      description: [ '', Validators.required ],
      priority: [ '', Validators.required ],
      state: [ '', Validators.required ],
      project_id: '',
      user_id: '',
    } );

  }

  onSubmit() {
    this.tasksService.create( this.form.getRawValue() ).subscribe(

      () => { this.router.navigate( [ '/tasks' ] ); console.log( this.form ); }
    );
  }

}
