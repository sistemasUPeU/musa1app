import { Component, OnInit } from '@angular/core';
import { Bus } from 'src/app/base-models/Bus';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/base-services/service.service';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.scss']
})
export class BusesComponent implements OnInit {
  bus : Bus = new Bus();
  listBus: Bus[] = [];
  constructor(private service: ServiceService , private router: Router) { }

  ngOnInit() {
    this.service.getBus().subscribe((data) => {
      this.listBus = data['b']
    })
  }

}
