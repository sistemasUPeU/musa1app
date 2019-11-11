import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  ]
})
export class Md05AlmacenModule { }
