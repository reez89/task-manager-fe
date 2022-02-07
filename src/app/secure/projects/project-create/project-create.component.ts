import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/interfaces/clients';
import { Projects } from 'src/app/interfaces/projects';
import { User } from 'src/app/interfaces/user';
import { ClientsService } from 'src/app/services/clients.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component( {
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: [ './project-create.component.scss' ]
} )
export class ProjectCreateComponent implements OnInit {

  form!: FormGroup;
  clients: Client[] = [];
  projects: Projects[] = [];
  hide = true;

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectsService,
    private clientService: ClientsService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.loadItems();

    this.form = this.fb.group( {
      projectName: [ '', Validators.required ],
      clientName: '',
      expectedDelivery: [ '', Validators.required ],
      status: [ '', Validators.required ],
      client_id: ''
    } );

  }

  loadItems() {
    this.projectService.all().subscribe( projects => {
      this.projects = projects.data;
    } );
    this.clientService.all().subscribe( clients => {
      this.clients = clients.data;
    } );
  }

  onSubmit() {
    this.projectService.create( this.form.getRawValue() ).subscribe(

      () => { this.router.navigate( [ '/projects' ] ); console.log( this.form ); }
    );
  }

}
