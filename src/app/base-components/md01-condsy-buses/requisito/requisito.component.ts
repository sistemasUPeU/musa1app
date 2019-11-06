import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/base-services/service.service';
import { Requisito } from 'src/app/base-models/Requisito';
import { TipoRequisito } from 'src/app/base-models/TipoRequisito';


@Component({
  selector: 'app-requisito',
  templateUrl: './requisito.component.html',
  styleUrls: ['./requisito.component.scss']
})
export class RequisitoComponent implements OnInit {
  selectedTipoReq: number = null;
  selectedTipoReqUpdate: number = null;
  selectedObligatorio: number = null;
  selectedObligatorioUpdate: number = null;
  requisito: Requisito = new Requisito();
  tiporeq: TipoRequisito = new TipoRequisito();
  listReq: Requisito[] = [];
  listTipoReq: TipoRequisito[] = [];
  loadReqData: Requisito[] = [];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getRequisito().subscribe((data) => {
      this.listReq = data['req'];
    })
  }
  fillSelect() {
    this.service.getTipoRequisito().subscribe((data) => {
      this.listTipoReq = data['tipo_req'];
    })
  }
  Guardar() {
    this.requisito.id_tipo_requisito=this.selectedTipoReq;
    if(this.selectedObligatorio==1){
      this.requisito.obligatorio='Obligatorio'
    }else{
      this.requisito.obligatorio='No Obligatorio'
    }
    console.log(this.requisito)
    this.service.createRequisito(this.requisito).subscribe(data =>{
      alert('Registro guardado correctamente...!');
      this.ngOnInit();
    });
  }
  selectTipoReq(event: any) {
    this.selectedTipoReq = event.target.value;
  }
  selectTipoReqUpdate(event: any) {
    this.selectedTipoReqUpdate = event.target.value;
    console.log(this.selectedTipoReqUpdate)
  }
  selectObligatorio(event: any) {
    this.selectedObligatorio = event.target.value;
  }
  selectObligatorioUpdate(event: any) {
    this.selectedObligatorioUpdate = event.target.value;
  }
  loadRequisito(requisito: Requisito): void {
    this.service.getRequisitoId(requisito.id_requisito).subscribe((data) => {
      this.loadReqData = data['req'];
    })
  }
  Actualizar(reqs: Requisito) {
    reqs.id_tipo_requisito=this.selectedTipoReqUpdate;
    console.log(reqs.id_tipo_requisito);
    if(this.selectedObligatorioUpdate==1){
      this.requisito.obligatorio='Obligatorio'
    }else{
      this.requisito.obligatorio='No Obligatorio'
    }
    console.log(reqs)
    this.service.updateRequisito(reqs).subscribe((data) => {
      this.requisito=data;
      alert('Registro modificado correctamente...!');
      this.ngOnInit();
    })
  }
  Eliminar(requisito: Requisito) {
    this.service.deleteRequisito(requisito).subscribe(data => {
      alert('Registro eliminado correctamente');
      this.ngOnInit();
    })
  }
}
