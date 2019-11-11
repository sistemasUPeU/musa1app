import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/base-services/service.service';
import { Pedido } from 'src/app/base-models/Pedido';
import { DetallePedido } from 'src/app/base-models/DetallePedido';

@Component({
  selector: 'app-autorizar-pedido',
  templateUrl: './autorizar-pedido.component.html',
  styleUrls: ['./autorizar-pedido.component.scss']
})
export class AutorizarPedidoComponent implements OnInit {
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
  Eliminar(pedido: Pedido) {
    console.log("estamos por eliminar esto xdxd");
    console.log(pedido);
    this.service.deletePedido(pedido).subscribe(data => {
    alert('Registro eliminado correctamente');
    this.lispedi = this.lispedi.filter (c => c!=pedido);
    this.ngOnInit();
   })
  }

}
