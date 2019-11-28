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
      this.listProducto= data['LIS_PROD'];
      console.log(this.listProducto);
    })
  }

  filterProductoHtml = '';

  fillSelectMarca() {
      this.service.getMarca().subscribe((data) => {
        this.listMarca = data['LIS_MAR'];
        console.log(this.listMarca);
      })
  }

  fillSelectCategoria() {
    this.service.getCategoria().subscribe((data) => {
      this.listCategoria = data['LIS_CAT'];
      console.log(this.listCategoria);
    })
  }
  fillSelectUnidadMedida() {
    this.service.getUnidadMedida().subscribe((data) => {
      this.listUnidadMedida = data['LIS_UM'];
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
      console.log(producto);
      this.loadProductoData = data['LIS_PROD'];
    })
  }

  ActualizarProd(producto: Producto){
    producto.id_categoria=this.selectedCategoriaUpdate;
    producto.id_unidad_medida=this.selectedUnidadMedidaUpdate;
    producto.id_marca=this.selectedMarcaUpdate;
      this.service.updateProducto(producto).subscribe((data)=>{
        this.prod = data;
        alert('Registro modificado correctamente...!');
        this.ngOnInit();
      })
  }
  Eliminar(producto: Producto){
    console.log(producto);
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
      this.loadProductoData = data['LIS_PROD'];
    })
  }
  getCategoria(idcategoria: number) {
    console.log(idcategoria)
    this.service.getProductoId(idcategoria).subscribe((data)=>{
      this.listCategoriaId = data['LIS_CAT'];
    })
  }
  getUnidad(idunidad:number){
    console.log(idunidad)
    this.service.getUnidadMedidaId(idunidad).subscribe((data)=>{
      this.listUnidadMedidaId = data['LIS_UM'];
    })
  }
  getMarcas(idmc:number){
    console.log(idmc)
    this.service.getMarcaId(idmc).subscribe((data) =>{
      this.listMarcaId = data['LIS_MAR'];
    })
  }
 
}
