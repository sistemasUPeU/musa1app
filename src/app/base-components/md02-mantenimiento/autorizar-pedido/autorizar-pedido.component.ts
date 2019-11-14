import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/base-services/service.service';
import { Pedido } from 'src/app/base-models/Pedido';
import { DetallePedido } from 'src/app/base-models/DetallePedido';
import { when } from 'q';

@Component({
  selector: 'app-autorizar-pedido',
  templateUrl: './autorizar-pedido.component.html',
  styleUrls: ['./autorizar-pedido.component.scss']
})
export class AutorizarPedidoComponent implements OnInit {
  pedido: Pedido = new Pedido();
  listdetalle: DetallePedido[] = [];
  lispedi: Pedido[] = [];
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getPedido().subscribe( (data) => {
      this.lispedi = data['LIST_FECHA'];
      console.log(this.lispedi);
    });
  }

  listardetalle(id: number){
    console.log(id);
    this.service.getPedidoId(id).subscribe( (data) => {
        this.listdetalle = data['LIST_DETALLE'];
    } );
  }

  ActualizarPedido(pedido: Pedido){
    this.service.updatePedido(pedido).subscribe((data) => {
      console.log("hola");
      this.ngOnInit();
    })
  }

}
