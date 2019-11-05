import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/base-services/service.service';
import { Requisito } from 'src/app/base-models/Requisito';


@Component({
  selector: 'app-requisito',
  templateUrl: './requisito.component.html',
  styleUrls: ['./requisito.component.scss']
})
export class RequisitoComponent implements OnInit {
  requisito: Requisito = new Requisito();
  listReq: Requisito[] = [];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getRequisito().subscribe((data) => {
      this.listReq = data['req'];
    })
  }

  

}
