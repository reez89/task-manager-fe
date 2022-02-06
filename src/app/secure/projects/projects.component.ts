import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Projects } from 'src/app/interfaces/projects';
import { ProjectsService } from 'src/app/services/projects.service';

@Component( {
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: [ './projects.component.scss' ]
} )
export class ProjectsComponent implements OnInit {
  displayedColumns: string[] = [ 'id', 'Project Name', 'Status', 'Client', 'Delivery', 'Action' ];
  projects!: Projects[];
  length = 100;
  pageSize = 5;
  pageEvent!: PageEvent;
  page = 1;


  constructor( private projectsService: ProjectsService ) {}

  ngOnInit(): void {
    this.loadProjects();
  }
  loadProjects() {
    this.projectsService.all( this.page, this.pageSize ).subscribe( ( response ) => {
      this.projects = response.data;
      this.length = response.meta.total;
      this.pageSize = response.meta.pageSize;
    } );
  }

  OnPageChange( page: PageEvent ) {
    this.pageSize = page.pageSize;
    this.page = page.pageIndex + 1;
    this.loadProjects();
  }

}
