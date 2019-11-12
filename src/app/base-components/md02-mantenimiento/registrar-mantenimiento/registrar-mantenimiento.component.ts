import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/base-services/service.service';
import { Mantenimiento } from 'src/app/base-models/Mantenimiento';
import { DetalleMantenimiento } from 'src/app/base-models/DetalleMantenimiento';
@Component({
  selector: 'app-registrar-mantenimiento',
  templateUrl: './registrar-mantenimiento.component.html',
  styleUrls: ['./registrar-mantenimiento.component.scss']
})
export class RegistrarMantenimientoComponent implements OnInit {
  listDetalleMantenimiento: DetalleMantenimiento[] = [];
  listMantenimiento: Mantenimiento[] = [];
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getMantenimiento().subscribe( (data) => {
      this.listMantenimiento = data['LISTA_MANTENIMIENTO'];
      console.log(this.listMantenimiento);
    });
  }

}
