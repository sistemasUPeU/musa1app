import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/base-services/service.service';
import { Mantenimiento } from 'src/app/base-models/Mantenimiento';
import { DetalleMantenimiento } from 'src/app/base-models/DetalleMantenimiento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-segunda-validacion',
  templateUrl: './segunda-validacion.component.html',
  styleUrls: ['./segunda-validacion.component.scss']
})
export class SegundaValidacionComponent implements OnInit {
  listamantenimiento:Mantenimiento[]=[];
  listadetallemantenimiento: DetalleMantenimiento[]=[];
  cargarmantenimiento: Mantenimiento[]=[];
  cargarmantenimientodata: Mantenimiento[]=[];

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    /*Lista todo los datos provenientes de Validacion de jefe de mantenimiento*/
    this.service.getMantenimiento3().subscribe((data) => {
      this.listamantenimiento = data['LISTA_MANTENIMIENTO'];
      console.log(this.listamantenimiento);
    });
  }
  loadMantenimientoUpdate_Positivo(mantenimiento: Mantenimiento): void {
    mantenimiento.estado=2;
    console.log(mantenimiento.id_mantenimiento);
    this.service.updateValidar(mantenimiento).subscribe(data => {  
      console.log(data);
      alert("¡ Ahora el mecanico esta autorizado para realizar sus pedidos !")
      document.getElementById("fila").style.background="rgb(171, 223, 171)";
      this.ngOnInit();
    })
  }
  loadMantenimientoUpdate_Negativo(mantenimiento: Mantenimiento): void {
    mantenimiento.estado=0;
    console.log(mantenimiento.id_mantenimiento);
    this.service.updateValidar(mantenimiento).subscribe(data => {  
      this.ngOnInit();
      alert("¡ El registro a sido denegado!")
    })
  }

}
