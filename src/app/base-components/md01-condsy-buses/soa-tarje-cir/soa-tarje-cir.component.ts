import { Component, OnInit } from '@angular/core';
import { Bus } from 'src/app/base-models/Bus';
import { ServiceService } from 'src/app/base-services/service.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import { VinculacionService } from 'src/app/base-services/vinculacion.service';
import { VistaVinculacion } from 'src/app/base-models/VistaVinculacionBus';
import { Vinculacion } from 'src/app/base-models/Vinculacion';
import { VinculacionRequisito } from 'src/app/base-models/VinculacionRequisito';
import { TipoRequisito } from 'src/app/base-models/TipoRequisito';
import { Requisito } from 'src/app/base-models/Requisito';

@Component({
  selector: 'app-soa-tarje-cir',
  templateUrl: './soa-tarje-cir.component.html',
  styleUrls: ['./soa-tarje-cir.component.scss']
})
export class SoaTarjeCirComponent implements OnInit {
  listBus: Bus[] = [];
  b: Bus = new Bus();
  selectedBus: number= null;
  fileupload :File =null;
  uploadedFilePath: string = null;
  vinculaciones: VistaVinculacion[];
  requisitos: Requisito[];
  selectedVincu2: number= null;
  Vincu: Vinculacion=new Vinculacion();
  vreqs_modal: VinculacionRequisito[] = [];
  Vinculac: VinculacionRequisito= new VinculacionRequisito();
  estados: string = '1';
  requisito_modal = []
  constructor(private router: Router,private http: HttpClient,private  service2: VinculacionService) { }

  ngOnInit() {
    this.cargar();
    this.cargarRequisitosVinculacionBus();
  }
  
  /*onfileseleted(event){
    this.fileupload=<File>event.target.files[0];
    console.log(event);
  }
  
  uploadfiles(file:File){
    const fd=new FormData();
    fd.append('image',this.fileupload,this.fileupload.name);
    this.http.post('http://localhost:8090/upload2/upload',fd)
    .subscribe(res =>{
      console.log(res);
    });
   /* this.service.chargefile(this.fileupload).subscribe(data =>{
      alert('Archivo enviado correctamente');
    })
    var inputFiles = document.getElementById("FileSubida");
    const formData = new FormData();
      formData.append('file', this.fileupload);
      this.http.post('url/to/your/api', formData)
        .subscribe(res => {
          console.log(res);
          this.uploadedFilePath = res.data.filePath;
          alert('SUCCESS !!');
        })
  }
  /*guardar(){
    this.bus.estado=this.estadobus;
    this.bus.id_persona_propietario=this.selectedPerson;
    this.service.createBus(this.bus).subscribe(data =>{
      alert('Registro guardado correctamente...!');
      this.ngOnInit();
    });
  }*/
  cargar(){
    console.log("si entraste");
    this.service2.listarVistaVinculacionBus().subscribe((data) => {
      this.vinculaciones = data['vcs']
      console.log(this.vinculaciones);
    })
  }
  selectedVincu(event:any){
    this.selectedVincu2 = event.target.value;
    console.log(this.selectedVincu2);
  }

  chargeRequest(){
    console.log("estamos en si")
    this.service2.ListRequest().subscribe((data)=>{
      this.requisitos = data['tr']
      console.log(this.requisitos)
    })
  }

  validar() {
    this.Vinculac.id_vinculacion=this.selectedVincu2;
    this.Vinculac.estado=this.estados;
    console.log("ya estas dentro:"+this.Vinculac.id_vinculacion)
    //this.service2.addRequiVincu(this.Vinculac).subscribe(data=>{
      for (let i = 0; i < this.vreqs_modal.length; i++) {
        this.Vinculac.fecha_vencimiento_doc=this.vreqs_modal[i].fecha_vencimiento_doc;
        this.Vinculac.url=this.vreqs_modal[i].url;
        this.Vinculac.id_requisito=this.vreqs_modal[i].id_requisito;
        if (this.Vinculac.url==null || this.Vinculac.fecha_vencimiento_doc==null) {
            alert("Ingrese URL  o Fecha de Vencimiento");
            break;
        } else {
        console.log(this.vreqs_modal[i].fecha_vencimiento_doc+" url ::" +this.vreqs_modal[i].url+"id"+this.vreqs_modal[i].id_requisito)
        this.service2.addRequiVincu(this.Vinculac).subscribe(data1 => {
            alert("Validacion registrada correctamente")
          });
        }
        break;
      }
      this.ngOnInit();
  }

  cargarRequisitosVinculacionBus() {
    this.service2.ListRequest().subscribe(data => {
      this.requisito_modal = data["tr"];
      for (let i = 0; i < this.requisito_modal.length; i++) {
        this.vreqs_modal[i] = new VinculacionRequisito();
        this.vreqs_modal[i].id_requisito = this.requisito_modal[i].id_requisito;
        this.vreqs_modal[i].fecha_vencimiento_doc= this.requisito_modal[i].fecha_vencimiento_doc;
        this.vreqs_modal[i].url = this.requisito_modal[i].url;
      }
    });
  }
  
  
}
