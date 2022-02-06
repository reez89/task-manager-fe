import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable( {
  providedIn: 'root'
} )
export abstract class RestService {

  abstract get endpoint(): string;

  constructor( protected http: HttpClient ) {}


  all( page?: number, pageSize?: number ): Observable<any> {
    let url = this.endpoint;
    if ( page ) {
      url += `?page=${page}`;
    }
    if ( pageSize ) {
      url += `&pageSize=${pageSize}`;
    }
    return this.http.get<any>( url );
  }

  userId( id: number ): Observable<any> {
    return this.http.get<any>( `${environment.CreationApi}/user/${id}` );
  }


  create( body: any ): Observable<any> {
    return this.http.post<any>( `${this.endpoint}`, body );
  }

  delete( id: number ): Observable<void> {
    return this.http.delete<void>( `${this.endpoint}/${id}` );
  }
}
