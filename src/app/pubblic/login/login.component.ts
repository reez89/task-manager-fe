import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
} )
export class LoginComponent implements OnInit {
  form!: FormGroup;
  hide = true;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group( {
      userName: '',
      password: '',
      role_id: '',
    } );
  }

  submit() {
    this.auth.login( this.form.getRawValue() ).subscribe( () => {
      this.router.navigate( [ '' ] );
    } );
  }

}
