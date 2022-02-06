import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './sidenav.service';

@Component( {
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: [ './sidenav.component.scss' ]
} )
export class SidenavComponent implements OnInit {

  @Output() navToggle = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {
  };

  closeNav() {
    this.navToggle.emit( false );
  }

}
