import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Role } from 'src/app/interfaces/role';
import { RoleService } from 'src/app/services/role.service';

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
    private roleService: RoleService
  ) {}

  ngOnInit(): void {

    this.form = this.fb.group( {
      userName: '',
      password: '',
      role: ''
    } );

    this.roleService.all().subscribe( res => {
      this.roles = res;
    } );
  }

  onSubmit() {
    console.log( this.form.getRawValue() );
  }

}
