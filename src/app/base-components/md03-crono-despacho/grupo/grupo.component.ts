import { Component, OnInit } from '@angular/core';

import { GrupoService } from '../../../base-services/grupo/grupo.service';
import { Grupo } from '../../../base-models/Grupo';
import { Mes } from '../../../base-models/Mes';


@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.scss']
})
export class GrupoComponent implements OnInit {


  constructor( private service: GrupoService) { }
  id_mes = -1;
  grupos: Grupo[] = [];
  grupo: Grupo = new Grupo();
  newgrupo: Grupo = new Grupo();

  hora: String[] = [];
  minuto: String[] = [];
  shora: String = null;
  sminuto: String = null;
  hora_inicio: String;

  mes_grupo: number;
  smes: number = null;
  varmes: String = 'Mes';
  listmes: Mes[] = [];

  mostrar = true;
  ngOnInit() {
    this.listar();
    this.encontrarmes();
  }

  encontrarmes() {
    this.service.getmes().subscribe( (data) => {
      this.listmes = data['MES'];
      for (let index = 0; index < this.listmes.length; index++) {
        if (this.listmes[index].id_mes === this.id_mes) {
        this.varmes = this.listmes[index].mes;
        }
      }
    });
  }

  listar() {
    this.service.getgrupo().subscribe( (data) => {
      this.grupos = data['grup'];
      console.log(this.grupos);
      if (this.grupos.length !== 0) {
        console.log('no soy undefiend');
         this.id_mes = this.grupos[0].id_mes;
      }
    });

  }
  update() {
    this.service.update().subscribe( (data) => {
      this.grupo = data;
    });
  }

  fillSelec() {
    this.minuto =  this.service.getminutos();
    this.hora = this.service.gethora();
  }

  selecthora(event: any) {
    this.shora = event.target.value;
  }


  selectminuto(event: any) {
    this.sminuto = event.target.value;

  }

  selectmes(event: any) {
    this.smes = event.target.value;
  }


  guardar() {
    this.newgrupo.hora_inicio = this.shora + ':' + this.sminuto + ':00';
    this.newgrupo.id_mes = this.smes;
    this.mes_grupo = this.smes;
    console.log(this.newgrupo);
    if (this.mostrar === true) {
      this.update();
    }

    this.service.creategrupo(this.newgrupo).subscribe(data => {
      alert('El grupo h asido creado correctamente...!!');
    });
    this.ngOnInit();
  }



  Eliminar( g: Grupo) {
    this.service.delete(g).subscribe(data => {
      alert('Se ha eliminado');
      this.grupos = this.grupos.filter( c => c !== g);
    });
  }

}
