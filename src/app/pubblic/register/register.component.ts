import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component( {
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.scss' ]
} )
export class RegisterComponent implements OnInit {

  username = '';
  password = '';
  passwordConfirm = '';
  role = '';
  hide = true;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}


  ngOnInit(): void {
  }

  submit() {
    this.auth.register( {
      userName: this.username,
      password: this.password,
      password_confirm: this.passwordConfirm,
      role: 1,
    } ).subscribe(
      () => {
        this.router.navigate( [ '/login' ] );
      }
    );
  }

}
