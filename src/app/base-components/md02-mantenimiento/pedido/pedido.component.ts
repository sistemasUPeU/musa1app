import { Component, OnInit } from '@angular/core';
import {ServiceService } from 'src/app/base-services/service.service';
import { Pedido } from 'src/app/base-models/Pedido';
import {TipoMantenimiento} from 'src/app/base-models/TipoMantenimiento';
import { Mantenimiento } from 'src/app/base-models/Mantenimiento';
import {Padron} from 'src/app/base-models/Padron';
import {DetalleMantenimiento} from 'src/app/base-models/DetalleMantenimiento';
import {Bus} from 'src/app/base-models/Bus';
import {DetallePedido} from 'src/app/base-models/DetallePedido';
import { Producto } from 'src/app/base-models/Producto';
import { Marca } from 'src/app/base-models/Marca';

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
  listdetalle: DetallePedido[] = [];
  listTipoMantenimiento : TipoMantenimiento [] = [];
  selectedTipoMantenimiento: number = null;
  detallemantenimiento: DetalleMantenimiento = new DetalleMantenimiento();
  selectedMarca: number = null;
  loadProductoData: Producto[] =[];
  showDropDown= false;
  listProducto: Producto[] = [];
  marca: Marca = new Marca();
  listMarca: Marca[]=[];
  loadMantenimientoData: Mantenimiento[] = [];
  loadDetalleMantenimientoData: DetalleMantenimiento[] = [];

  padron:String;
  listId: Padron[] = [];
  bus: Bus = new Bus();
  mantenimiento: Mantenimiento = new Mantenimiento();
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getMantenimiento().subscribe( (data) => {
      this.listMantenimiento = data['LISTA_MANTENIMIENTO'];
      console.log(this.listMantenimiento);
    });
    this.service.getProducto().subscribe((data) =>{
      this.listProducto= data['LIS_PROD'];
      console.log(this.listProducto);
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

listardetalle(id: number){
  console.log(id);
  this.service.getPedidoId(id).subscribe( (data) => {
      this.listdetalle = data['LIST_DETALLE'];
  } );
}
loadProducto(producto: Producto):void {
  this.service.getProductoId(producto.id_producto).subscribe((data)=>{
    this.loadProductoData = data['LIS_PROD'];
  })
}
toggleDropDown(){
  this.showDropDown=!this.showDropDown;
}
toogleDropDownOff(){
  this.showDropDown=false;
}
getInfo(producto:Producto){
  this.toogleDropDownOff;
  this.service.getProductoId(producto.id_producto).subscribe((data)=>{
    this.loadProductoData = data['LIS_PROD'];
  })
}

fillSelectMarca() {
  this.service.getMarca().subscribe((data) => {
    this.listMarca = data['LIS_MAR'];
    console.log(this.listMarca);
  })
}

 mensaje(){
    alert("Se envio correctamente");
  }

}
