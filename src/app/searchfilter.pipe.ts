import { Pipe, PipeTransform } from '@angular/core';
import { User } from './interfaces/user';

@Pipe( {
  name: 'searchfilter'
} )
export class SearchfilterPipe implements PipeTransform {

  transform( Users: User[], searchValue: string ): User[] {

    if ( !Users || !searchValue ) return Users;
    return Users.filter( users => users.userName.toLowerCase().includes( searchValue.toLowerCase() ) );
  }

}
