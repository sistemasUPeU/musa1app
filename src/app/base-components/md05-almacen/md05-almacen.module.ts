import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ramita
import { Md05AlmacenRoutingModule } from './md05-almacen-routing.module';
import { ProductoComponent } from './producto/producto.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductoComponent,
  ],
  imports: [
    CommonModule,
    Md05AlmacenRoutingModule,
    FormsModule
<<<<<<< HEAD
=======
=======
import { ProductoComponent } from './producto/producto.component';
import { Md05AlmacenRoutingModule } from './md05-almacen-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';
import { FormsModule } from '@angular/forms';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ProductoComponent, CategoriaComponent],
  imports: [
    CommonModule,
    Md05AlmacenRoutingModule,
    FormsModule,
    NgbModule
>>>>>>> df8c6a0873e83fac9f064b2f4d7066b7d68d3e5f
>>>>>>> ramita
  ]
})
export class Md05AlmacenModule { }
