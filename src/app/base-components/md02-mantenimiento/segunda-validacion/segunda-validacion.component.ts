import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/base-services/service.service';
import { Mantenimiento } from 'src/app/base-models/Mantenimiento';

@Component({
  selector: 'app-segunda-validacion',
  templateUrl: './segunda-validacion.component.html',
  styleUrls: ['./segunda-validacion.component.scss']
})
export class SegundaValidacionComponent implements OnInit {
  mante: Mantenimiento = new Mantenimiento();
  listamantenimiento:[]=[];

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getValidacion2().subscribe( (data) => {
      this.listamantenimiento = data['mant'];
      console.log(this.listamantenimiento);
    });
  }
}
