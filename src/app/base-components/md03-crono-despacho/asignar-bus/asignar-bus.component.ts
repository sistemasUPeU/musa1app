import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Bus } from 'src/app/base-models/Bus';
import { AsignarbusService } from 'src/app/base-services/asignarbus/asignarbus.service';
import { AsignarBus } from 'src/app/base-models/AsignarBus';
import { Paradero } from 'src/app/base-models/Paradero';
import { element } from 'protractor';

@Component({
  selector: 'app-asignar-bus',
  templateUrl: './asignar-bus.component.html',
  styleUrls: ['./asignar-bus.component.scss']
})
export class AsignarBusComponent implements OnInit {
  bus: Bus = new Bus();
  listBus: Bus[] = [];
  asignarbus: AsignarBus = new AsignarBus();
  Listasignarbus: AsignarBus[] = [];
  id_bus: number ;

  paradero: Paradero = new Paradero();
  listparadero: Paradero[] = [];
  id_paradero: number;
  parade: String;

  num: number;
  numeroma: number[] = [];
  snum: number;

  check : any;

  constructor(private service: AsignarbusService, private router: Router) { }

  ngOnInit() {
    this.service.getBus().subscribe((data) => {
      this.listBus = data['b'];
    });
    this.listartodo();
    this.listarnumero();
     // console.log('listasa' + this.Listasignarbus);

     this.service.getParadero().subscribe((data)=>{
          //   console.log(data);

            this.listparadero = data['LS'];

     });
    }

  listartodo() {
   // console.log("llege")
    this.service.getAsignarBus().subscribe((data) => {
   //   console.log('listar todo ' + data);
       this.Listasignarbus = data['CU'];
     });
  }

  onSelect(val) {
    console.log(val);
  this.listparadero.filter(x => x.id_paradero = val);

  }

  listarnumero() {

    this.service.getAsignarBus().subscribe((data) => {
      // console.log(data);
       this.Listasignarbus = data['CU'];
       for (let index = 0; index < this.Listasignarbus.length; index++) {
         this.num = this.Listasignarbus[index].numero;
       }

       for (let index = 0; index < this.num; index++) {
        this.numeroma[index] = index + 1;
      console.log(this.numeroma);
     }

     });
  }

  selectnum(event: any) {
    this.snum = event.target.value;
  }

  selectpa(event: any) {
    this.id_paradero = event.target.value;
  }
  filtrar() {
   // console.log('numero' + this.snum );
    if ( this.snum < 1) {
      this.ngOnInit();
    } else {
     // console.log('estoy aqui')
    this.service.getfill(this.snum).subscribe( (data) => {
      this.Listasignarbus = data['Fil'];
    });
  }
  this.parade = this.listparadero[(this.id_paradero) - 1].paradero;
  console.log('para' + this.listparadero[(this.id_paradero) - 1].paradero);
  }

  selectbus(event: any) {
    this.id_bus = event.target.value;
  }

  actualizar(id: number) {
    
    
    this.check = id;
   // let element = (<HTMLInputElement> document.getElementById(this.check));
    
    if ((<HTMLInputElement> document.getElementById(this.check)).checked === true) {
      this.asignarbus.fijo = 1;
    } else {
      this.asignarbus.fijo = 0;
    }

    this.asignarbus.id_orden_grupo = id;
    this.asignarbus.id_paradero = this.id_paradero;
    this.asignarbus.id_bus = this.id_bus;
  
   
console.log(this.asignarbus);
   
 
   this.service.updateDetalleBusGrupo(this.asignarbus).subscribe((data)=>{
      this.asignarbus.id_bus=this.id_bus;
      alert("se registro satisfactoriamente");
   })

  }



  }
