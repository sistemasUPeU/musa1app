import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/base-services/service.service';
import { TipoMantenimiento } from 'src/app/base-models/TipoMantenimiento';
@Component({
  selector: 'app-tipo-mantenimiento',
  templateUrl: './tipo-mantenimiento.component.html',
  styleUrls: ['./tipo-mantenimiento.component.scss']
})
export class TipoMantenimientoComponent implements OnInit {
  tipomantenimiento: TipoMantenimiento = new TipoMantenimiento();
  listTipoMantenimiento: TipoMantenimiento[] = [];
  loadTipoMantenimientoData: TipoMantenimiento[] = [];
  constructor(private service: ServiceService, private router: Router) { }
  
  ngOnInit() {
    this.service.getTipoMantenimiento().subscribe((data) => {
      this.listTipoMantenimiento = data['TIPO_MANT'];
      console.log(this.listTipoMantenimiento);
    })
  }
  filterTipoMantenimientoHtml = ''; 
  Guardar() {
    console.log(this.tipomantenimiento)
    this.service.createTipoMantenimiento(this.tipomantenimiento).subscribe(data =>{
      alert('Registro guardado correctamente...!');
      this.ngOnInit();
    });
  }
  loadTipoMantenimiento(tipomantenimiento: TipoMantenimiento): void {
    this.service.getTipoMantenimientoId(tipomantenimiento.id_tipo_mantenimiento).subscribe((data) => {
      console.log(tipomantenimiento.id_tipo_mantenimiento);
      this.loadTipoMantenimientoData = data['TIPO_MANT'];
      
    })
  }
  Eliminar(tipomantenimiento: TipoMantenimiento) {
    this.service.deleteTipoMantenimiento(tipomantenimiento).subscribe(data => {
      alert('Registro eliminado correctamente');
      this.ngOnInit();
    })
  }
  Actualizar(tipomant: TipoMantenimiento) {
    this.service.updateTipoMantenimiento(tipomant).subscribe((data) => {
      this.tipomantenimiento = data;
      alert('Registro modificado correctamente...!');
      this.ngOnInit();
    })
  }

}