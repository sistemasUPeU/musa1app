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
  }

}
