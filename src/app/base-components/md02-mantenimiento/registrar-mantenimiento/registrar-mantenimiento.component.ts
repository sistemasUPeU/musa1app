import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/base-services/service.service';
import { Mantenimiento } from 'src/app/base-models/Mantenimiento';
import { DetalleMantenimiento } from 'src/app/base-models/DetalleMantenimiento';
import { TipoMantenimiento } from 'src/app/base-models/TipoMantenimiento';
import { Bus } from 'src/app/base-models/Bus';
import { Padron } from 'src/app/base-models/Padron';
@Component({
  selector: 'app-registrar-mantenimiento',
  templateUrl: './registrar-mantenimiento.component.html',
  styleUrls: ['./registrar-mantenimiento.component.scss']
})
export class RegistrarMantenimientoComponent implements OnInit {
  listDetalleMantenimiento: DetalleMantenimiento[] = [];
  listMantenimiento: Mantenimiento[] = [];
  listTipoMantenimiento: TipoMantenimiento[] = [];
  selectedTipoMantenimiento: number = null;
  bus: Bus = new Bus();
  mantenimiento: Mantenimiento = new Mantenimiento();

  padron:String;
  listId: Padron[] = [];

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getMantenimiento().subscribe( (data) => {
      this.listMantenimiento = data['LISTA_MANTENIMIENTO'];
      console.log(this.listMantenimiento);
    });
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
