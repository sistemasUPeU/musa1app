import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Md05AlmacenRoutingModule } from './md05-almacen-routing.module';
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
  ]
})
export class Md05AlmacenModule { }
