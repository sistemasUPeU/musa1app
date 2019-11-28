import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/base-services/service.service';
import { Pedido } from 'src/app/base-models/Pedido';
import { DetallePedido } from 'src/app/base-models/DetallePedido';
import { Mantenimiento } from 'src/app/base-models/Mantenimiento';

@Component({
  selector: 'app-autorizar-pedido',
  templateUrl: './autorizar-pedido.component.html',
  styleUrls: ['./autorizar-pedido.component.scss']
})
export class AutorizarPedidoComponent implements OnInit {
  pedido: Pedido = new Pedido();
  listdetalle: DetallePedido[] = [];
  lispedi: Pedido[] = [];
  loadPedido: Pedido[] = [];
  listMantenimiento: Mantenimiento[] = [];

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getMantenimiento().subscribe( (data) => {
      this.listMantenimiento = data['LISTA_MANTENIMIENTO'];
      console.log(this.listMantenimiento);
    });
  }

  listardetalle(id: number){
    console.log(id);
    this.service.getPedidoId(id).subscribe( (data) => {
        this.listdetalle = data['LIST_DETALLE'];
    } );
  }
  loadPedidoUpdate_Positivo(pedi: Pedido): void {
    pedi.estado=1;
    console.log(pedi.id_pedido);
    this.service.updateStatus(pedi).subscribe(data => {  
      alert('Registro Autorizado con Éxito');
      this.ngOnInit();
      
    })
  }
  loadPedidoUpdate_Negativo(pedi: Pedido): void {
    pedi.estado=2;
    console.log(pedi.id_pedido);
    this.service.updateStatus(pedi).subscribe(data => {  
      alert('Registro Denegado con Éxito');
      this.ngOnInit();
    })
  }

}
