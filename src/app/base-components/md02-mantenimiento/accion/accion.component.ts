import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/base-services/service.service';
import { TipoAccion } from 'src/app/base-models/TipoAccion';
import { Accion } from 'src/app/base-models/Accion';

@Component({
  selector: 'app-accion',
  templateUrl: './accion.component.html',
  styleUrls: ['./accion.component.scss']
})
export class AccionComponent implements OnInit {
  tipoaccion: TipoAccion= new TipoAccion();
  listartipoaccion: TipoAccion[]=[];
  accion: Accion= new Accion();
  listaraccion: Accion[]=[];
  selectTipoMan: number=null;
  constructor(private service: ServiceService) { }

  /*listar accion*/
  ngOnInit() {
    this.service.getAccion().subscribe(data=>{
      this.listaraccion=data['ac'];
      console.log(this.accion.nom_accion);
    })
  }
  /*guardar accion - selectTipoMan*/
  guardaraccion(){
    this.accion.id_tipo_accion=this.selectTipoMan
    console.log(this.accion)
    this.service.createAccion(this.accion).subscribe(data=>{
      alert('Se registro correctamente ...')
      this.ngOnInit();
    })
  }
  /*metodo para traer los datos de tipo accion al desplegable*/
  traertipoaccion(){
    this.service.getTipoAccion().subscribe(data =>{
      this.listartipoaccion = data['tipa']
      console.log(this.listartipoaccion)
    })
  }
  selectedTipoMan(event: any){
    this.selectTipoMan = event.target.value;

  }
  eliminar(accion: Accion){
    this.service.deleteAccion(accion).subscribe(data=>{
      alert('Se elimino correctamente ...')
      this.ngOnInit();
    })
  }

}
