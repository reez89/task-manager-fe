import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable( {
  providedIn: 'root'
} )
export class AuthService {

  constructor( protected http: HttpClient ) {}

  login( body: any ): Observable<any> {
    return this.http.post( `${environment.AuthApi}/login`, body );
  }


  logout(): Observable<void> {
    return this.http.post<void>( `${environment.AuthApi}/logout`, {} );
  }

  register( body: any ): Observable<User> {
    return this.http.post<User>( `${environment.AuthApi}/register`, body );

  }

  user(): Observable<User> {
    return this.http.get<User>( `${environment.AuthApi}/user` );
  }


  userId( id: number ): Observable<User> {
    return this.http.get<User>( `${environment.CreationApi}/user/${id}` );
  }


}
