import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/base-services/service.service';
import { CursoConductor } from 'src/app/base-models/CursoConductor';
import { Curso } from 'src/app/base-models/Curso';
import { Persona } from 'src/app/base-models/Persona';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {
  curso: Curso = new Curso();
  persona: Persona = new Persona();
  cursoConductor: CursoConductor = new CursoConductor();
  listCursos: Curso[] = [];
  listPersona: Persona[] = [];
  listCursoConductor: CursoConductor[] = [];
  listCursoConductorPersona: CursoConductor[] = [];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.sortbyCurso();
  }
  sortbyCurso() {
    this.service.getCurso().subscribe((data) => {
      this.listCursos = data['cur']
      console.log(this.listCursos)
      // ensure to call the getCursoConductor() when you retrieved the data
      this.getCursoConductor()
    })
  }
  getCursoFromId(idCurso: any) {
      return this.listCursos.find(item => item && item.id_curso === idCurso);
  }
  getCursoConductor() {
      this.service.getCursoConductor().subscribe((data) => {
        // we are filtering data received for only existing "id_curso" from listCursos.
        const listCursoConductor = data['dato'].filter(element => !!this.getCursoFromId(element.id_curso));
        // then we update the actual listCursos by adding a new property "listCursoConductor" which
        // will contain all the associated data.
        const updatedListCursos = this.listCursos.map(curso => {
          return {...curso, listCursoConductor: listCursoConductor.filter(item => item.id_curso === curso.id_curso)};
        });
        this.listCursos = updatedListCursos;
        console.log(updatedListCursos)
      })
  }
  sortbyPersona() {
    this.service.getPersona().subscribe((data) => {
      this.listPersona = data['pers']
      console.log(this.listPersona)
    })
    this.getCursoConductorPersona()
  }
  getPersonaFromId(idPersona: any) {
    return this.listPersona.find(item => item && item.id_persona === idPersona);
}
getCursoConductorPersona() {
    this.service.getCursoConductor().subscribe((data) => {
      // we are filtering data received for only existing "id_persona" from listPersona.
      const listCursoConductorPersona = data['dato'].filter(element => !!this.getPersonaFromId(element.id_persona));
      // then we update the actual listCursos by adding a new property "listCursoConductor" which
      // will contain all the associated data.
      const updatedListPersona = this.listPersona.map(persona => {
        return {...persona, listCursoConductorPersona: listCursoConductorPersona.filter(item => item.id_persona === persona.id_persona)};
      });
      this.listPersona = updatedListPersona;
      console.log(updatedListPersona)
    })
}
}
