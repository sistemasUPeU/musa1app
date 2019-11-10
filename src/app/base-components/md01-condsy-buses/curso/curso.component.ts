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
  selectCursos: Curso[] = [];
  listPersona: Persona[] = [];
  loadPersonaData: Persona [] = [];
  loadCursoConductorData: CursoConductor [] = [];
  listCursoConductor: CursoConductor[] = [];
  listCursoConductorPersona: CursoConductor[] = [];
  showDropDown=false;
  showViewPersona=false;
  showViewConductor=false;
  input:String;
  searchResult: Persona[] = [];
  fecha_i: any;
  fecha_f: any;
  fecha_emision: any;
  fecha_caducidad: any;
  selectedCurso: number = null;
  buttonText: String = ''
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.changeView();
    console.log(this.buttonText)
  }
  changeView() {
    this.showViewConductor=!this.showViewConductor;
    console.log(this.showViewConductor)
    if(this.showViewConductor!=this.showViewPersona){
      console.log(this.showViewConductor)
      console.log(this.showViewPersona)
      this.sortbyCurso();
      this.buttonText = 'Por Persona'
      console.log(this.buttonText)
    }else{
      console.log(this.showViewPersona)
      this.showViewPersona=!this.showViewPersona;
      this.sortbyPersona();
      this.buttonText = 'Por Curso'
      console.log(this.buttonText)
    }
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
        this.listCursos = updatedListCursos.filter(item => !!item.listCursoConductor && item.listCursoConductor.length > 0);
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
      this.listPersona = updatedListPersona.filter(item => !!item.listCursoConductorPersona && item.listCursoConductorPersona.length > 0);
      console.log(updatedListPersona)
    })
  }
  toggleDropDown() {
    this.showDropDown=!this.showDropDown;
  }
  toggleDropDownOff() {
    this.showDropDown=false;
  }
  searchPersona() {
    if(this.input!=''){
      console.log(this.input);
      this.service.searchPersona(this.input).subscribe((data) => {
      this.searchResult = data['return']
      })
    }else{
      console.log('Input vacio');
      this.toggleDropDownOff();
    }
  }
  loadInput(nombre:String) {
    this.toggleDropDownOff;
    this.input=nombre
    console.log(this.input);
  }
  fillCursoSelect() {
    this.service.getCurso().subscribe((data) => {
      this.selectCursos=data['cur']
    })
  }
  parseFecha(fecha: any) {
    const parsedFecha = fecha.day + '/' + fecha.month + '/' + fecha.year
    return parsedFecha;
  }
  selectCurso(event: any) {
    this.selectedCurso = event.target.value;
  }
  storePersona(persona: Persona) {
    this.service.getPersonaId(persona.id_persona).subscribe((data) => {
      this.loadPersonaData = data['pers'];
    })
  }
  Guardar(idpersona:number) {
    this.cursoConductor.f_inicio=this.parseFecha(this.fecha_i);
    this.cursoConductor.f_fin=this.parseFecha(this.fecha_f);
    this.cursoConductor.id_persona=idpersona;
    this.cursoConductor.id_curso=this.selectedCurso;
    console.log(this.cursoConductor)
    this.service.createCursoConductor(this.cursoConductor).subscribe(data =>{
      alert('Registro guardado correctamente...!');
      this.ngOnInit();
    });
  }
  loadCursoConductor(cursoConductor: CursoConductor):void {
    if(cursoConductor.carnet_c!=null) {
      alert('Carnet ya actualizado')
    }else{
      this.service.getCursoConductorId(cursoConductor.id_curso_conductor).subscribe((data) => {
        this.loadCursoConductorData = data['dato'];
      })
    }
  }
  Actualizar(cursoConductor: CursoConductor) {
    cursoConductor.f_emision=this.parseFecha(this.fecha_emision);
    cursoConductor.f_caducidad=this.parseFecha(this.fecha_caducidad);
    delete cursoConductor.estado
    delete cursoConductor.f_fin
    delete cursoConductor.f_inicio
    delete cursoConductor.id_curso
    delete cursoConductor.id_persona
    delete cursoConductor.nombre_curso
    delete cursoConductor.nombre_persona
    console.log(cursoConductor)
    this.service.updateCursoConductor(cursoConductor).subscribe((data) => {
      this.cursoConductor = data;
      alert('Registro modificado correctamente...!');
      this.ngOnInit();
    })
  }
}
