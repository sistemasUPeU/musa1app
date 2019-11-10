import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Md05AlmacenRoutingModule } from './md05-almacen-routing.module';
<<<<<<< HEAD
import { ProductoComponent } from './producto/producto.component';import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductoComponent,
  ],
  imports: [
    CommonModule,
    Md05AlmacenRoutingModule,
    FormsModule
=======
import { ProductoComponent } from './producto/producto.component';
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
>>>>>>> 6cbbd425c83b79976b18fce4d45fc2dcda933989
  ]
})
export class Md05AlmacenModule { }
