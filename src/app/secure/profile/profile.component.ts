import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component( {
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: [ './profile.component.scss' ]
} )
export class ProfileComponent implements OnInit {

  user!: User;
  id!: number;

  constructor(
    private auth: AuthService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.auth.user().subscribe(
      user => {
        this.user = user,
          console.log( user );
        this.id = user.id;
        console.log( this.id );
      }
    );
  }

}
