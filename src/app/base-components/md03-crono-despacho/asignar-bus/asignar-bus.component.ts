import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Bus } from 'src/app/base-models/Bus';
import { AsignarbusService } from 'src/app/base-services/asignarbus/asignarbus.service';
import { AsignarBus } from 'src/app/base-models/AsignarBus';
import { Paradero } from 'src/app/base-models/Paradero';

@Component({
  selector: 'app-asignar-bus',
  templateUrl: './asignar-bus.component.html',
  styleUrls: ['./asignar-bus.component.scss']
})
export class AsignarBusComponent implements OnInit {
  bus : Bus = new Bus();
  listBus: Bus[] = [];
  asignarbus: AsignarBus = new AsignarBus();
  Listasignarbus: AsignarBus[] = [];
  paradero: Paradero= new Paradero();
  listparadero: Paradero[] = [];

  constructor(private service: AsignarbusService, private router: Router) { }

  ngOnInit() {
    this.service.getBus().subscribe((data) => {
      this.listBus = data['b']
      
    })
    this.service.getAsignarBus().subscribe((data)=>{
     // console.log(data);
      this.Listasignarbus=data['CU']});
     // console.log('listasa' + this.Listasignarbus);

     this.service.getParadero().subscribe((data)=>{
          //   console.log(data);
            
            this.listparadero=data['LS']

     });
  }
  

  onSelect(val){
    console.log(val);
  this.listparadero.filter(x => x.id_paradero==val);
 
  }


  /* Actualizar(pers: Persona) {
    pers.id_tipo_documento=this.selectedTipoDocUpdate;
    this.service.updatePersona(pers).subscribe((data) => {
      this.per = data;
      alert('');
      this.ngOnInit();
    })
  }
  */
  }
