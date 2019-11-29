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

  listacsv: CronoBus[] = [];
  listacsvC: CronoBus[] = [];
  periodos: string[] = [];
  cc: CronoBus = new CronoBus();

  constructor( private service: CsvService, private serviceMes: GrupoService ) { }


  ngOnInit() {
    this.listar();
    this.listarC();

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
    const foodName = (<HTMLInputElement> document.getElementById(this.id)).value;
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
    this.service.createcrono().subscribe(data => {
      alert('Se genero correctamente !!!!');
      console.log('se genero');
      this.ngOnInit();
    });
  }

  listar() {
    this.service.getcro(1).subscribe( data => {
      this.listacsv = data['LIST_CRO'];
      console.log('hola' + this.listacsv);
      this.periodos[0] = data['LIST_CRO'][0].periodo;
    console.log(this.periodos);
      this.service.getcro(2).subscribe( data2 => {
        this.periodos[1] = data2['LIST_CRO'][0].periodo;
        for (let index = 0; index < this.listacsv.length; index++) {

          this.listacsv[index].padron2 = data2['LIST_CRO'][index].padron;
        }

        this.service.getcro(3).subscribe( data3 => {
          this.periodos[2] = data3['LIST_CRO'][0].periodo;
          for (let index = 0; index < this.listacsv.length; index++) {
            this.listacsv[index].padron3 = data3['LIST_CRO'][index].padron;
          }

          this.service.getcro(4).subscribe(data4 => {
            this.periodos[3] = data4['LIST_CRO'][0].periodo;
            for (let index = 0; index < this.listacsv.length; index++) {
              this.listacsv[index].padron4 = data4['LIST_CRO'][index].padron;

            }
          });
        });
      });
    });

  }

  listarC() {
    this.service.getcroC(1).subscribe( data => {
      this.listacsvC = data['LIST_CROCI'];
      console.log(this.listacsvC);
      this.service.getcroC(2).subscribe( data2 => {
        for (let index = 0; index < this.listacsvC.length; index++) {
          console.log(data2['LIST_CROCI'][index].padron);
          this.listacsvC[index].padron2 = data2['LIST_CROCI'][index].padron;
        }
        this.service.getcroC(3).subscribe( data3 => {
          for (let index = 0; index < this.listacsvC.length; index++) {
            this.listacsvC[index].padron3 = data3['LIST_CROCI'][index].padron;
          }
          this.service.getcroC(4).subscribe(data4 => {
            for (let index = 0; index < this.listacsvC.length; index++) {
              this.listacsvC[index].padron4 = data4['LIST_CROCI'][index].padron;

            }
          });
        });
      });
    });
  }

}
