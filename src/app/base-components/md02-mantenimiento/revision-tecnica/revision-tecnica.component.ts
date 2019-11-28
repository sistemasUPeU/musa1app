import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/base-services/service.service';
import { Router } from '@angular/router';
import { RevisionTecnica } from 'src/app/base-models/RevisionTecnica';
import { Placa } from 'src/app/base-models/Placa';
import { Bus } from 'src/app/base-models/Bus';

@Component({
  selector: 'app-revision-tecnica',
  templateUrl: './revision-tecnica.component.html',
  styleUrls: ['./revision-tecnica.component.scss']
})
export class RevisionTecnicaComponent implements OnInit {
  listRevisionTecnica: RevisionTecnica = new RevisionTecnica();
  listIdPlaca: Placa[]= [];
  bus: Bus = new Bus();
  placa: String;
  revisiones: RevisionTecnica = new RevisionTecnica();
  loadRevisionTecnicaData: RevisionTecnica[] =[];
  revs: RevisionTecnica = new RevisionTecnica();

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getRevisionTecnica().subscribe((data)=> {
      this.listRevisionTecnica = data['REV'];
      console.log(this.listRevisionTecnica);
    })
  }

  filterRevisionHtml = '';
  
  getidplaca(placa: String){
    console.log('placa' + placa);
    this.service.getObteneridplaca(placa).subscribe((data)=>{
      this.listIdPlaca = data['BUS_IDE'];
      this.GuardarRev();
    })
  }

  GuardarRev(){
    this.revisiones.id_bus=this.listIdPlaca[0].id_bus;
    console.log(this.revisiones);
    this.service.createRevisionTecnica(this.revisiones).subscribe(data =>{
      alert('Revision guardado correctamente...!');
      this.ngOnInit();
    })
  }

  loadRevisionTecnica(revisiones: RevisionTecnica): void {
    this.service.getRevisionTecnicaId(revisiones.id_revision_tecnica).subscribe((data) =>{
      console.log(data);
      this.loadRevisionTecnicaData = data['REV'];
    })
  }

  EliminarRev(revisiones: RevisionTecnica){
    this.service.deleteRevisionTecnica(revisiones).subscribe(data =>{
      alert('Registro eliminado correctamente');
      this.ngOnInit();
    })
  }

  ActualizarRev(revi: RevisionTecnica) {
    this.service.updateRevisionTecnica(revi).subscribe((data)=>{
      this.revs = data;
      alert('Registro modificado correctamente...!');
      this.ngOnInit();
    })
  }

 


}

