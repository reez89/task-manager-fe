import { AfterViewInit, Component } from '@angular/core';
import { SidenavService } from './sidenav/sidenav.service';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
} )
export class AppComponent implements AfterViewInit {
  title = 'task-manager-fe';

  constructor( private sidenavService: SidenavService ) {
  }

  ngAfterViewInit(): void {
    // this.sidenavService.setSidenav( this.sidenav );
  }
}
