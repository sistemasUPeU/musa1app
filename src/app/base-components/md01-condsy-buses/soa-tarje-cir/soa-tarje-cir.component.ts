import { Component, OnInit } from '@angular/core';
import { Bus } from 'src/app/base-models/Bus';
import { ServiceService } from 'src/app/base-services/service.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-soa-tarje-cir',
  templateUrl: './soa-tarje-cir.component.html',
  styleUrls: ['./soa-tarje-cir.component.scss']
})
export class SoaTarjeCirComponent implements OnInit {
  listBus: Bus[] = [];
  b: Bus = new Bus();
  selectedBus: number= null;
  constructor(private service : ServiceService, private router: Router) { }

  ngOnInit() {
    this.listar();

  }

  listar(){
    this.service.getBus().subscribe((data) => {
      this.listBus = data['b'];
      console.log(this.listBus);
    })
  }

  selectBus(event:any){
    this.selectedBus = event.target.value;
  }

}
