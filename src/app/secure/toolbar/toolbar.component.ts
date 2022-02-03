import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component( {
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: [ './toolbar.component.scss' ]
} )
export class ToolbarComponent implements OnInit {
  @Output() navToggle = new EventEmitter<boolean>();

  toggleActive: boolean = false;

  navOpen() {
    this.navToggle.emit( true );
  }
  ngOnInit(): void {
  }

}
