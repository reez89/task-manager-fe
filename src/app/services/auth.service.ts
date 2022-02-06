import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';
import { map, tap } from 'rxjs/operators';

@Injectable( {
  providedIn: 'root'
} )
export class AuthService {

  users!: User;

  isLoggedIn = new BehaviorSubject( false );

  userType = new BehaviorSubject( this.users );

  constructor( protected http: HttpClient ) {}

  login( body: any ): Observable<any> {
    return this.http.post( `${environment.AuthApi}/login`, body, { withCredentials: true } );
  }


  logout(): Observable<void> {
    return this.http.post<void>( `${environment.AuthApi}/logout`, {} ).pipe(
      tap( () => {
        this.isLoggedIn.next( false );
      } )
    );
  }

  register( body: any ): Observable<User> {
    return this.http.post<User>( `${environment.AuthApi}/register`, body );

  }

  user(): Observable<User> {
    return this.http.get<User>( `${environment.AuthApi}/user` );
  }


}
