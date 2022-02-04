import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Auth } from 'src/app/classes/auth';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';


@Component( {
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: [ './toolbar.component.scss' ]
} )
export class ToolbarComponent implements OnInit {
  @Output() navToggle = new EventEmitter<boolean>();
  user!: User;

  toggleActive: boolean = false;

  constructor( private auth: AuthService ) {}
  navOpen() {
    this.navToggle.emit( true );
  }
  ngOnInit(): void {
    Auth.userEmitter.subscribe(
      user => this.user = user
    );
  }

  logout() {
    this.auth.logout().subscribe( () => console.log( 'success' ) );
  }

}
