import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/base-services/service.service';
import { Persona } from 'src/app/base-models/Persona';
import { TipoDocumento } from 'src/app/base-models/TipoDocumento';
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {
  selectedTipoDoc: number = null;
  persona: Persona = new Persona();
  per: Persona = new Persona();
  listPeople: Persona[] = [];
  tipodoc: TipoDocumento = new TipoDocumento();
  listTipoDoc: TipoDocumento[] = [];
  loadPersonaData: Persona[] = [];
  constructor(private service: ServiceService, private router: Router) { }
  ngOnInit() {
    this.service.getPersona().subscribe((data) => {
      this.listPeople = data['pers'];
      console.log(this.listPeople);
    })
  }
  fillSelect() {
    this.service.getTipoDocumento().subscribe((data) => {
      this.listTipoDoc = data['TIPODOC'];
      console.log(this.listTipoDoc);
    })
  }
  Guardar() {
    this.persona.id_tipo_documento=this.selectedTipoDoc;
    console.log(this.persona)
    this.service.createPersona(this.persona).subscribe(data =>{
      alert('Registro guardado correctamente...!');
      this.ngOnInit();
    });
  }
  selectTipoDoc(event: any) {
    this.selectedTipoDoc = event.target.value;
  }
  
  loadPersona(persona: Persona): void {
    this.service.getPersonaId(persona.id_persona).subscribe((data) => {
      this.loadPersonaData = data['pers'];
    })
  }
  
  Actualizar(persona: Persona) {
    console.log(persona)
    this.service.updatePersona(persona).subscribe((data) => {
      this.per = data;
      alert('Registro modificado correctamente...!');
      this.ngOnInit();
    })
  }
  Eliminar(persona: Persona) {
    this.service.deletePersona(persona).subscribe(data => {
      alert('Registro eliminado correctamente');
      this.ngOnInit();
    })
  }
}
