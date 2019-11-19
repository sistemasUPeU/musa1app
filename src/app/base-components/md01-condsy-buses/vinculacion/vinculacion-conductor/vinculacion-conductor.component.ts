import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/base-services/service.service';
import { CursoConductor } from 'src/app/base-models/CursoConductor';
import { Persona } from 'src/app/base-models/Persona';
import { Requisito } from 'src/app/base-models/Requisito';

@Component({
  selector: 'app-vinculacion-conductor',
  templateUrl: './vinculacion-conductor.component.html',
  styleUrls: ['./vinculacion-conductor.component.scss']
})
export class VinculacionConductorComponent implements OnInit {
  constructor(private service: ServiceService, private router: Router) {}
  cursoConductor: CursoConductor = new CursoConductor();
  showDropDown = false;
  searchResult: CursoConductor[] = [];
  input: String;
  loadPersonaData: Persona[] = [];
  loadReqsData: Requisito[] = [];
  divBody = -1;

  ngOnInit() {}
  toggleDropDown() {
    this.showDropDown = !this.showDropDown;
  }
  toggleDropDownOff() {
    this.showDropDown = false;
  }
  searchPersona() {
    if (this.input != '') {
      this.service.searchCursoConductor(this.input).subscribe(data => {
        this.searchResult = data['return'];
      });
    } else {
      this.toggleDropDownOff();
    }
  }
  loadInput(nombre: String) {
    this.toggleDropDownOff;
    this.input = nombre;
  }
  storePersona(persona: Persona) {
    this.service.getPersonaId(persona.id_persona).subscribe(data => {
      this.loadPersonaData = data['pers'];
    });
  }
  cargarRequisitosVinculacionConductor() {
    this.service.cargarRequisitosVinculacionConductor().subscribe(data => {
      this.loadReqsData = data['reqs'];
      console.log(this.loadReqsData);
    });
  }
  AddUrl(index) {
    this.divBody = -1;
    document.getElementById(index).classList.remove('bg-warning');
    document.getElementById(index).classList.add('bg-success');
  }
  openUrl(index) {
    this.divBody = index;
    document.getElementById(index).classList.remove('bg-success');
    document.getElementById(index).classList.add('bg-warning');
  }
}
