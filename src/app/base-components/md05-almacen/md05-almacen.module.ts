import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoComponent } from './producto/producto.component';
import { Md05AlmacenRoutingModule } from './md05-almacen-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';
import { FormsModule } from '@angular/forms';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterProductoPipe } from 'src/app/Search/filter-producto.pipe';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [ProductoComponent,FilterProductoPipe ,CategoriaComponent],
  imports: [
    CommonModule,
    Md05AlmacenRoutingModule,
    FormsModule,NgxPaginationModule,
    NgbModule]
})
export class Md05AlmacenModule { }
