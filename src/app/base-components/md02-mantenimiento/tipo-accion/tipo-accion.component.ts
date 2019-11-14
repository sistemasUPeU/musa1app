import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/base-services/service.service';
import { TipoAccion } from 'src/app/base-models/TipoAccion';

@Component({
  selector: 'app-tipo-accion',
  templateUrl: './tipo-accion.component.html',
  styleUrls: ['./tipo-accion.component.scss']
})
export class TipoAccionComponent implements OnInit {
  selectedTipoAccion: number=null;
  tipoaccion: TipoAccion= new TipoAccion();
  listartipoaccion: TipoAccion[]=[];
  loadtipoacciondata: TipoAccion[]=[];

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getTipoAccion().subscribe(data=>{this.listartipoaccion=data['tipa']
    console.log(this.listartipoaccion)
  })

  }
  guardartipo(){
    this.service.createTipoAccion(this.tipoaccion).subscribe(data=>alert('Se ingreso correctamente'))
    console.log(this.tipoaccion)
    this.ngOnInit();
  }
  /*cargar los datos en el Modal, en el input text*/
  loadtipoaccion(tipoaccion: TipoAccion): void{
    this.service.getTipoAccionId(tipoaccion.id_tipo_accion).subscribe(data=>{
      this.listartipoaccion = data['tipa'];
    })
  }
  eliminar(tipoaccion: TipoAccion){
    this.service.deleteTipoAccion(tipoaccion).subscribe(data => {
      alert('Registro eliminado correctamente');
      this.ngOnInit();
    })
  }
}
