import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/base-services/service.service';
import { ApiResponsePersona, Per, Persona } from 'src/app/base-models/Persona';
import { ApiResponseTipoDocumento, Tipodoc, TipoDocumento } from 'src/app/base-models/TipoDocumento';

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {
  selectedTipoDoc: number = null;
  persona: Persona = new Persona();
  constructor(private service: ServiceService, private router: Router) { }
  personas$ : Observable<Array<Per>>;
  tipodocs$ : Observable<Array<Tipodoc>>;
  ngOnInit() {
    this.personas$ = this.service.getPersona()
    .pipe(map((apiResponsePersona: ApiResponsePersona) => apiResponsePersona.pers))
  }
  fillSelect() {
    this.tipodocs$ = this.service.getTipoDocumento()
    .pipe(map((apiRespondeTipoDocumento: ApiResponseTipoDocumento) => apiRespondeTipoDocumento.TIPODOC));
  }
  ListarPersona(){
    this.personas$ = this.service.getPersona()
    .pipe(map((apiResponsePersona: ApiResponsePersona) => apiResponsePersona.pers));
  }
  Guardar() {
    this.persona.ID_TIPO_DOCUMENTO=this.selectedTipoDoc;
    let c = JSON.stringify(this.persona);
    alert(c);
    this.service.createPersona(this.persona).subscribe(data =>{
      alert('Registro guardado correctamente...!');
      this.ListarPersona();
    });
  }
  selectTipoDoc(event: any) {
    this.selectedTipoDoc = event.target.value;
  }
  Eliminar(persona: Persona) {
    this.service.deletePersona(persona).subscribe(data => {
      alert('Registro eliminado correctamente');
      this.ListarPersona();
    })
  }
}
