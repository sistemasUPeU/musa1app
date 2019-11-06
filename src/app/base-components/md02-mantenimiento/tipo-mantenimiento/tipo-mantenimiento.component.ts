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
  tman: TipoMantenimiento = new TipoMantenimiento();
  listTipoMantenimiento: TipoMantenimiento[] = [];
  loadTipoMantenimientoData: TipoMantenimiento[] = [];
  constructor(private service: ServiceService, private router: Router) { }
  
  ngOnInit() {
    this.service.getTipoMantenimiento().subscribe((data) => {
      this.listTipoMantenimiento = data['TIPO_MANT'];
      console.log(this.listTipoMantenimiento);
    })
  }
  Guardar() {
    console.log(this.tipomantenimiento)
    this.service.createTipoMantenimiento(this.tipomantenimiento).subscribe(data =>{
      alert('Registro guardado correctamente...!');
      this.ngOnInit();
    });
  }

}
