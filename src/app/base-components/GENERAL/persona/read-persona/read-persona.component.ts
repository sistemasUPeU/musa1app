import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/base-services/service.service';
import { ApiResponsePersona, Per } from 'src/app/base-models/Persona';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";


@Component({
  selector: 'app-read-persona',
  templateUrl: './read-persona.component.html',
  styleUrls: ['./read-persona.component.scss']
})
export class ReadPersonaComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }
  personas$ : Observable<Array<Per>>;

  ngOnInit() {
    this.personas$ = this.service.getPersona()
    .pipe(map((apiResponsePersona: ApiResponsePersona) => apiResponsePersona.pers))
  }

}
