import { Component, OnInit } from '@angular/core';
import {ServiceService } from 'src/app/base-services/service.service';
import { Pedido } from 'src/app/base-models/Pedido';
import {TipoMantenimiento} from 'src/app/base-models/TipoMantenimiento';
import { Mantenimiento } from 'src/app/base-models/Mantenimiento';
import {Padron} from 'src/app/base-models/Padron';
import {DetalleMantenimiento} from 'src/app/base-models/DetalleMantenimiento';
import {Bus} from 'src/app/base-models/Bus';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {
  listpedido:Pedido[] = [];
  listDetalleMantenimiento: DetalleMantenimiento[] = [];
  tipomantenimiento : TipoMantenimiento = new TipoMantenimiento();
  listMantenimiento: Mantenimiento[] = [];
  listTipoMantenimiento : TipoMantenimiento [] = [];
  selectedTipoMantenimiento: number = null;

  padron:String;
  listId: Padron[] = [];
  bus: Bus = new Bus();
  mantenimiento: Mantenimiento = new Mantenimiento();
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getPedido().subscribe((data)=>{
      this.listpedido = data['LIST_FECHA'];
      console.log(this.listpedido);
    
  })
  this.service.getTipoMantenimiento().subscribe((data) => {
    this.listTipoMantenimiento = data['TIPO_MANT'];
    console.log(this.listTipoMantenimiento);
  })
}


fillSelect() {
  this.service.getTipoMantenimiento().subscribe((data) => {
    this.listTipoMantenimiento = data['TIPO_MANT'];
    console.log(this.listTipoMantenimiento);
  })
}

selectTipoMantenimiento(event: any) {
  this.selectedTipoMantenimiento = event.target.value;
}
Guardar() {
  this.mantenimiento.id_bus=this.listId[0].id_bus;
  this.mantenimiento.id_tipo_mantenimiento=this.selectedTipoMantenimiento;
  console.log(this.mantenimiento);
  this.service.createMantenimiento(this.mantenimiento).subscribe(data =>{
    alert('Registro guardado correctamente...!');
    this.ngOnInit();
  });
}
getid(padron: String) {
  console.log('padron'  + padron);
  this.service.getObtenerid(padron).subscribe( (data) => {
    this.listId = data['SALIDA_BUS'];
    this.Guardar();
  });
}
}
