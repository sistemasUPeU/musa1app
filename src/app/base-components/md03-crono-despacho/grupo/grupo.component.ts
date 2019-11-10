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
  prueba: any = [];
  id_mes: number ;
  varmes: String = 'Mes';
  grupos: Grupo[] = [];
  grupo: Grupo = new Grupo();
  hora: String[] = [];
  minuto: String[] = [];

  listmes: Mes[] = [];
  ngOnInit() {
    this.service.getgrupo().subscribe( (data) => {
      this.grupos = data['grup'];
      console.log(this.grupos[0].id_mes);
      this.id_mes = this.grupos[0].id_mes;
      console.log('id' + this.id_mes);
    });
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



   /* console.log('voy a encontrar el mes');
    console.log('quiero encontrar' + this.listmes);
    for (let index = 0; index < this.listmes.length; index++) {
      console.log('holas' + this.listmes[index].mes);
      if (this.listmes[index].id_mes === this.grupos[0].id_mes) {
        console.log('holas' + this.listmes[index].mes);
      this.varmes = this.listmes[index].mes;
      }
    }*/
  }

  fillSelec() {
    this.minuto =  this.service.getminutos();
    this.hora = this.service.gethora();
  }

}
