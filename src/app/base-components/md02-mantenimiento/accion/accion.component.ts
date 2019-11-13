import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/base-services/service.service';
import { TipoAccion } from 'src/app/base-models/TipoAccion';
import { Accion } from 'src/app/base-models/Accion';

@Component({
  selector: 'app-accion',
  templateUrl: './accion.component.html',
  styleUrls: ['./accion.component.scss']
})
export class AccionComponent implements OnInit {
  tipoaccion: TipoAccion= new TipoAccion();
  listartipoaccion: TipoAccion[]=[];
  accion: Accion= new Accion();
  listaraccion: Accion[]=[];
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getAccion().subscribe(data=>{
      this.listaraccion=data['ac'];
      console.log(this.accion.nom_accion);
    })
  }
  guardaraccion(){
    this.accion.id_tipo_accion=this.tipoaccion.id_tipo_accion
    console.log(this.accion)
    this.service.createAccion(this.accion).subscribe(data=>{
      alert('Se registro correctamente ...')
      this.ngOnInit();
    })
  }

}
