import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/base-services/service.service';
import { Router } from '@angular/router';
import { RevisionTecnica } from 'src/app/base-models/RevisionTecnica';

@Component({
  selector: 'app-revision-tecnica',
  templateUrl: './revision-tecnica.component.html',
  styleUrls: ['./revision-tecnica.component.scss']
})
export class RevisionTecnicaComponent implements OnInit {
  listRevisionTecnica: RevisionTecnica = new RevisionTecnica();

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getRevisionTecnica().subscribe((data)=> {
      this.listRevisionTecnica = data['REV'];
      console.log(this.listRevisionTecnica);
    })
  }

}
