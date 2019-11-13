import { Component, OnInit } from '@angular/core';
import {ServiceService} from 'src/app/base-services/service.service';
import { Router } from '@angular/router';
import {Bus} from 'src/app/base-models/Bus';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {
  bus : Bus = new Bus();
  listBus: Bus[] = [];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getBus().subscribe((data) => {
      this.listBus = data['b']
  })
  }
}
