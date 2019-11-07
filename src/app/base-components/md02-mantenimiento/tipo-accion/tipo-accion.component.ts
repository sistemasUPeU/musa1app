import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/base-services/service.service';
import { TipoAccion } from 'src/app/base-models/TipoAccion';

@Component({
  selector: 'app-tipo-accion',
  templateUrl: './tipo-accion.component.html',
  styleUrls: ['./tipo-accion.component.scss']
})
export class TipoAccionComponent implements OnInit {

  tipoacc: TipoAccion= new TipoAccion

  constructor(private service: ServiceService) { }

  ngOnInit() {
  }
  guardartipo(){
    this.service.createTipoAccion(this.tipoacc).subscribe(data=>alert('Se ingreso correctamente'))
  }

}
