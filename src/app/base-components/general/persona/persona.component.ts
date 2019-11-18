import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/base-services/service.service';
import { Persona } from 'src/app/base-models/Persona';
import { TipoDocumento } from 'src/app/base-models/TipoDocumento';
import { runInThisContext } from 'vm';
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {
  selectedTipoDoc: number = null;
  selectedTipoDocUpdate: number = null;
  persona: Persona = new Persona();
  per: Persona = new Persona();
  listPeople: Persona[] = [];
  tipodoc: TipoDocumento = new TipoDocumento();
  listTipoDoc: TipoDocumento[] = [];
  listTipoDocId: TipoDocumento[] = [];
  loadPersonaData: Persona[] = [];
  showDropDown = false;
  input: String;
  searchResult: Persona[] = [];
  constructor(private service: ServiceService, private router: Router) {}
  ngOnInit() {
    this.service.getPersona().subscribe(data => {
      this.listPeople = data['pers'];
    });
  }
  fillSelect() {
    this.service.getTipoDocumento().subscribe(data => {
      this.listTipoDoc = data['TIPODOC'];
    });
  }
  Guardar() {
    this.persona.id_tipo_documento = this.selectedTipoDoc;
    this.service.createPersona(this.persona).subscribe(data => {
      alert('Registro guardado correctamente...!');
      this.ngOnInit();
    });
  }
  selectTipoDoc(event: any) {
    this.selectedTipoDoc = event.target.value;
  }
  selectTipoDocUpdate(event: any) {
    this.selectedTipoDocUpdate = event.target.value;
  }

  loadPersona(persona: Persona): void {
    this.service.getPersonaId(persona.id_persona).subscribe(data => {
      this.loadPersonaData = data['pers'];
    });
  }

  Actualizar(pers: Persona) {
    pers.id_tipo_documento = this.selectedTipoDocUpdate;
    this.service.updatePersona(pers).subscribe(data => {
      this.per = data;
      alert('Registro modificado correctamente...!');
      this.ngOnInit();
    });
  }
  Eliminar(persona: Persona) {
    this.service.deletePersona(persona).subscribe(data => {
      alert('Registro eliminado correctamente');
      this.ngOnInit();
    });
  }
  toggleDropDown() {
    this.showDropDown = !this.showDropDown;
  }
  toggleDropDownOff() {
    this.showDropDown = false;
  }
  searchPersona() {
    if (this.input != '') {
      this.showDropDown = true;
      this.service.searchPersona(this.input).subscribe(data => {
        this.searchResult = data['return'];
      });
    } else {
      this.toggleDropDown();
    }
  }
  getInfo(persona: Persona) {
    this.toggleDropDownOff;
    this.service.getPersonaId(persona.id_persona).subscribe(data => {
      this.loadPersonaData = data['pers'];
    });
  }
  getTipoDoc(idtipodoc: number) {
    this.service.getTipoDocumentoId(idtipodoc).subscribe(data => {
      this.listTipoDocId = data['TIPODOC'];
    });
  }
}
