import { Component, OnInit } from '@angular/core';
import { ServiceService } from "src/app/base-services/service.service";
import { Mantenimiento } from "src/app/base-models/Mantenimiento";
import { DetalleMantenimiento } from "src/app/base-models/DetalleMantenimiento";

@Component({
  selector: 'app-validar-jefe-mantenimiento',
  templateUrl: './validar-jefe-mantenimiento.component.html',
  styleUrls: ['./validar-jefe-mantenimiento.component.scss']
})
export class ValidarJefeMantenimientoComponent implements OnInit {

  listMantenimiento: Mantenimiento[] = [];
  listDetalleMantenimiento: DetalleMantenimiento[] = [];
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getMantenimiento2().subscribe((data)=>{
      this.listMantenimiento = data['LISTA_MANTENIMIENTO'];
      console.log(this.listMantenimiento);
    })
  }

  listardetalle_mant(id: number){
    console.log(id);
    this.service.getMantenimientoId2(id).subscribe( (data) => {
        this.listDetalleMantenimiento = data['LIST_ACCIONES_MANT'];
    } );
  }

}
