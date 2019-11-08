import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/base-services/service.service';
import { Router } from '@angular/router';
import { Producto } from 'src/app/base-models/Producto';
import { Marca } from 'src/app/base-models/Marca';
import { Categoria } from 'src/app/base-models/Categoria';
import { UnidadMedida } from 'src/app/base-models/UnidadMedida';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  selectedMarca: number = null;
  selectedMarcaUpdate: number = null;
  selectedCategoria: number= null;
  selectedCategoriaUpdate: number= null;
  selectedUnidadMedida: number= null;
  selectedUnidadMedidaUpdate: number= null;
  producto: Producto = new Producto();
  prod: Producto = new Producto();
  listProducto: Producto[] = [];
  marca: Marca = new Marca();
  listMarca: Marca[]=[];
  listMarcaId: Marca[] =[];
  categoria: Categoria =new Categoria();
  listCategoria:Categoria[] = [];
  listCategoriaId: Categoria[]=[];
  unidadmedida: UnidadMedida= new UnidadMedida();
  listUnidadMedida: UnidadMedida[] =[];
  listUnidadMedidaId: UnidadMedida[] =[];
  loadProductoData: Producto[] =[];
  showDropDown= false;
  input:String;
  searchResult: Producto[] =[];

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getProducto().subscribe((data) =>{
      this.listProducto= data['prod'];
      console.log(this.listProducto);
    })
  }


  fillSelectMarca() {
      this.service.getMarca().subscribe((data) => {
        this.listMarca = data['m'];
        console.log(this.listMarca);
      })
  }

  fillSelectCategoria() {
    this.service.getCategoria().subscribe((data) => {
      this.listCategoria = data['cat'];
      console.log(this.listCategoria);
    })
  }
  fillSelectUnidadMedida() {
    this.service.getUnidadMedida().subscribe((data) => {
      this.listUnidadMedida = data['unid_med'];
      console.log(this.listUnidadMedida);
    })
  }
  Guardar(){
    this.producto.id_categoria=this.selectedCategoria;
    this.producto.id_unidad_medida=this.selectedUnidadMedida;
    this.producto.id_marca=this.selectedMarca;
    console.log(this.producto)
    this.service.createProducto(this.producto).subscribe(data =>{
      alert('Registro guardado correctamente.....!');
      this.ngOnInit();
    });
  }
  selectCategoria(event: any){
    this.selectedCategoria = event.target.value;
  }
  selectCategoriaUpdate(event:any){
    this.selectedCategoriaUpdate = event.target.value;
  }
  selectUnidadMedida(event: any){
    this.selectedUnidadMedida = event.target.value;
  }
  selectUnidadMedidaUpdate(event: any){
    this.selectedUnidadMedidaUpdate = event.target.value;
  }
  selectMarca(event: any){
    this.selectedMarca = event.target.value;
  }
  selectMarcaUpdate(event: any){
    this.selectedMarcaUpdate = event.target.value;
  }

  loadProducto(producto: Producto):void {
    this.service.getProductoId(producto.id_producto).subscribe((data)=>{
      this.loadProductoData = data['lis_prod'];
    })
  }

  Actualizar(produ: Producto){
    produ.id_categoria=this.selectedCategoriaUpdate;
    produ.id_unidad_medida=this.selectedUnidadMedidaUpdate;
    produ.id_marca=this.selectedMarcaUpdate;
    this.service.updateProducto(produ).subscribe((data)=>{
      this.prod=data;
      alert('Registro modificado correctamente....!');
      this.ngOnInit();
    })
  }
  Eliminar(producto: Producto){
    this.service.deleteProducto(producto).subscribe(data =>{
      alert('Registro eliminado correctamente');
      this.ngOnInit();
    })
  }
  toggleDropDown(){
    this.showDropDown=!this.showDropDown;
  }
  toogleDropDownOff(){
    this.showDropDown=false;
  }
  searchProducto(){
    if(this.input!=''){
      console.log(this.input);
      this.service.searchProducto(this.input).subscribe((data)=>{
      this.searchResult = data['return']
      })
    }else{
      console.log('Input vacio');
      this.toogleDropDownOff();
    }
  }
  getInfo(producto:Producto){
    this.toogleDropDownOff;
    this.service.getProductoId(producto.id_producto).subscribe((data)=>{
      this.loadProductoData = data['lis_prod'];
    })
  }
  getCate(idcategoria: number) {
    console.log(idcategoria)
    this.service.getProductoId(idcategoria).subscribe((data)=>{
      this.listCategoriaId = data['cat'];
    })
  }
  getUnidad(idunidad:number){
    console.log(idunidad)
    this.service.getUnidadMedidaId(idunidad).subscribe((data)=>{
      this.listUnidadMedidaId = data['unid_med'];
    })
  }
  getMarcas(idmarc:number){
    console.log(idmarc)
    this.service.getMarcaId(idmarc).subscribe((data) =>{
      this.listMarcaId = data['m'];
    })
  }
}
