import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from 'src/app/interfaces/role';
import { RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user.service';

@Component( {
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: [ './user-create.component.scss' ]
} )
export class UserCreateComponent implements OnInit {
  form!: FormGroup;
  roles: Role[] = [];
  hide = true;
  constructor( private fb: FormBuilder,
    private roleService: RoleService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.form = this.fb.group( {
      userName: '',
      password: '',
      role_id: ''
    } );

    this.roleService.all().subscribe( res => {
      this.roles = res;
    } );
  }

  onSubmit() {
    this.userService.create( this.form.getRawValue() ).subscribe(
      () => this.router.navigate( [ '/users' ] )
    );
  }

}
