import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/base-models/Categoria';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/base-services/service.service';
import { Marca } from 'src/app/base-models/Marca';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {
  listCat: Categoria[] = [];
  categoria: Categoria = new Categoria;
  loadCat: Categoria[]= [];
  cat: Categoria = new Categoria;

  listMarca: Marca[]=[];
  marca: Marca= new Marca;
  loadMar: Marca[]=[];
  mar: Marca= new Marca;
  constructor(private service: ServiceService , private router:Router) { }
  ngOnInit() {
    this.listarCategoria();
    this.listarMarca()
  }
  listarCategoria(){
    this.service.getCategoria().subscribe((data)=>{
      this.listCat = data['LIS_CAT'];
    })
  }
  guardar(){
    this.service.createCategoria(this.categoria).subscribe(data=>{
      alert("Registro guardado correcto...!");
      this.listarCategoria();
    })
  }

  loadCate(categoria:Categoria):void{
    this.service.getCategoriaId(categoria.id_categoria).subscribe(data=>{
      this.loadCat = data['LIS_CAT']
    })
  }
  actualizar(categoria:Categoria){
    this.service.UpdateCategoria(categoria).subscribe((data) =>{
        this.cat = data;
        alert("Registro modificado correctamente...!")
        this.listarCategoria();
    })
  }

  Eliminar(categoria : Categoria){
    this.service.deleteCategoria(categoria).subscribe((data)=>{
      alert("Registro eliminado correctamente");
      this.listarCategoria();
    })
  }

  ////////////////////////////////

  listarMarca(){
    this.service.getMarca().subscribe((data)=>{
      console.log(data);
      this.listMarca = data['LIS_MAR'];
    })
  }

  guardarmarca(){
    this.service.createMarca(this.marca).subscribe(data=>{
      alert("Registro guardado correctamente...!");
      this.listarMarca();
    })
  }

  loadMarca(marca:Marca):void{
    this.service.getMarcaId(marca.id_marca).subscribe(data=>{
      this.loadMar = data['LIS_MAR'];
    })
  }
  actualizarmarca(marca:Marca){
    this.service.updatemarca(marca).subscribe((data)=>{
      this.mar = data;
      alert("Registro modificado correctamente...!")
      this.listarMarca();
    })
  }

  Eliminarmarca(marca: Marca){
    this.service.deletemarca(marca).subscribe((data)=>{
      alert("Registro eliminado correctamente...!")
      this.listarMarca();
    })
  }
}
