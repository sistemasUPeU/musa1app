import { Component, OnInit } from '@angular/core';
import { AsignarConductor } from 'src/app/base-models/asignarconductor';
import { AsignarconductorService } from 'src/app/base-services/asignarconductor/asignarconductor.service';
import { Router } from '@angular/router';

import { Bus } from 'src/app/base-models/Bus';

@Component({
  selector: 'app-asignar-conductor',
  templateUrl: './asignar-conductor.component.html',
  styleUrls: ['./asignar-conductor.component.scss']
})
export class AsignarConductorComponent implements OnInit {
  bus: Bus= new Bus();
  listarbus : Bus[] = [];
  asignarconductor: AsignarConductor = new AsignarConductor();
  Listasignarconductor: AsignarConductor[] = [];

  constructor(private service: AsignarconductorService , private router: Router) { }

  ngOnInit() {
    this.service.getBus().subscribe((data) => {
      this.listarbus = data['b'];
    });
 
    this.listartodo();
  
  }


  listartodo() {
    // console.log("llege")
     this.service.getasignarconductor().subscribe((data) => {
    //   console.log('listar todo ' + data);
        this.Listasignarconductor = data['CU'];
      
      });
     
   }
   filterasignarconductorHtml = '';

 
}
