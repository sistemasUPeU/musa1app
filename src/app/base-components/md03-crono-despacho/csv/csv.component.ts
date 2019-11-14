import { Component, OnInit } from '@angular/core';

import { CsvService } from '../../../base-services/csv/csv.service';
import { GrupoService } from '../../../base-services/grupo/grupo.service';
import { Mes } from '../../../base-models/Mes';
import { Periodo } from '../../../base-models/Periodo';
import { CronoBus } from '../../../base-models/CronoBus';



@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.scss']
})
export class CsvComponent implements OnInit {
  id: any;
  listmes: Mes[] = [];
  listperi: Periodo[] = [];
  per: Periodo = new Periodo();
  smes: number = null;

  cc: CronoBus = new CronoBus();

  constructor( private service: CsvService, private serviceMes: GrupoService ) { }

  ngOnInit() {
  }

  listarmes() {
    this.serviceMes.getmes().subscribe( data => {
      this.listmes = data['MES'];
    });
    this.listarp();
  }

  listarp() {
    this.service.getperiodo().subscribe( data => {
   console.log(data);
   this.listperi = data['peri'];
   console.log('gr' + this.listperi);
    });

  }
  selectmes(event: any) {
    this.smes = event.target.value;
  }

  edit(p: Periodo) {
    this.id = p.id_periodo;
    let foodName = (<HTMLInputElement> document.getElementById(this.id)).value;
    p.nombre_periodo = foodName;
    this.service.update(p).subscribe( data => {
      this.per = data;
    });

    console.log('haber' + foodName);
    this.listarmes();
  }

  Guardar() {
    this.cc.id_mes = this.smes;
    this.service.create(this.cc).subscribe( data => {
      console.log('se creo');
    });

  }

}
