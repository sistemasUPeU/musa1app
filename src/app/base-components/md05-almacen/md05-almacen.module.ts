import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Md05AlmacenRoutingModule } from './md05-almacen-routing.module';
import { ProductoComponent } from './producto/producto.component';

@NgModule({
  declarations: [ProductoComponent],
  imports: [
    CommonModule,
    Md05AlmacenRoutingModule
  ]
})
export class Md05AlmacenModule { }
