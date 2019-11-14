import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/base-services/service.service';
import { Opcion } from 'src/app/base-models/Opcion';

@Component({
  selector: 'app-opcion',
  templateUrl: './opcion.component.html',
  styleUrls: ['./opcion.component.scss']
})
export class OpcionComponent implements OnInit {
  opcion: Opcion = new Opcion();
  listOpciones: Opcion[] = []
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getOpcion().subscribe(data => {
      this.listOpciones = data['opc'];
    })
  }

}
