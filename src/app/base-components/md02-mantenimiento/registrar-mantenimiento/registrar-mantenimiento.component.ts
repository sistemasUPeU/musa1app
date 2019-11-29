import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/base-services/service.service';
import { Mantenimiento } from 'src/app/base-models/Mantenimiento';
import { DetalleMantenimiento } from 'src/app/base-models/DetalleMantenimiento';
import { TipoMantenimiento } from 'src/app/base-models/TipoMantenimiento';
import { Bus } from 'src/app/base-models/Bus';
import { Padron } from 'src/app/base-models/Padron';
import { Router } from '@angular/router';

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
  detallemantenimiento: DetalleMantenimiento = new DetalleMantenimiento();
  loadMantenimientoData: Mantenimiento[] = [];
  loadDetalleMantenimientoData: DetalleMantenimiento[] = [];
  padron:String;
  listId: Padron[] = [];
  
  


  constructor(private service: ServiceService, private router: Router) { }
  p: number = 1;
  p2: number = 1;
  
  ngOnInit() {
    this.service.getMantenimiento().subscribe( (data) => {
      this.listMantenimiento = data['LISTA_MANTENIMIENTO'];
      console.log(this.listMantenimiento);
    });
  }
  filterMantenimientoHtml = ''; 
  
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
  loadMantenimiento(mantenimiento: Mantenimiento): void {
    this.service.getMantenimientoId(mantenimiento.id_mantenimiento).subscribe((data) => {
      this.loadMantenimientoData = data['MANT'];
    })
  }
  
 

  listardetalle_mant(id: number){
    console.log(id);
    this.service.getMantenimientoId2(id).subscribe( (data) => {
        this.listDetalleMantenimiento = data['LIST_ACCIONES_MANT'];
    } );
  }
  loadDetalleMantenimientoBueno(detalle_mantenimiento: DetalleMantenimiento): void {
    detalle_mantenimiento.revision="Bueno"
    this.service.updateDetalleMantenimiento(detalle_mantenimiento).subscribe(data => {  
      this.ngOnInit();
    })
  }
  loadDetalleMantenimientoMalo(detalle_mantenimiento: DetalleMantenimiento): void {
    detalle_mantenimiento.revision="Malo"
    this.service.updateDetalleMantenimiento(detalle_mantenimiento).subscribe(data => {
      this.ngOnInit();
    })
  }

  Actualizar(mant: Mantenimiento) {
    this.service.updateMantenimiento(mant).subscribe((data) => {
      this.mantenimiento = data;
      alert('Observaciones Registradas Satisfactoriamente...!');
      this.ngOnInit();
    })
  }
}
