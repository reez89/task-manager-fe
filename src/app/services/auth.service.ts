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

  isLoggedIn = new BehaviorSubject( false );

  constructor( protected http: HttpClient ) {}

  login( body: any ): Observable<any> {
    return this.http.post( `${environment.AuthApi}/login`, body ).pipe(
      map( ( response ) => {
        if ( response ) {
          this.isLoggedIn.next( true );
        } else
          this.isLoggedIn.next( false );
      } )
    );
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
