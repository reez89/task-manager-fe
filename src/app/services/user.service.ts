import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable( {
  providedIn: 'root'
} )
export class UserService {
  endpoint = `${environment.CreationApi}/user`;
  constructor( private http: HttpClient ) {}

  all( page: number ): Observable<any> {
    return this.http.get<any>( `${this.endpoint}?page=${page}` );
  }
}