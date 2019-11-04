import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/base-services/service.service';
import { ApiResponsePersona, Per } from 'src/app/base-models/Persona';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }
  personas$ : Observable<Array<Per>>;

  ngOnInit() {
    this.personas$ = this.service.getPersona()
    .pipe(map((apiResponsePersona: ApiResponsePersona) => apiResponsePersona.pers))
  }
}
