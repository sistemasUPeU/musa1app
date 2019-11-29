import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { VinculacionRoutingModule } from "./vinculacion-routing.module";
import { VinculacionConductorComponent } from "./vinculacion-conductor/vinculacion-conductor.component";
import { FormsModule } from "@angular/forms";
import { VinculacionBusComponent } from "./vinculacion-bus/vinculacion-bus.component";
import { VinculacionService } from "src/app/base-services/vinculacion.service";
import { ClickOutsideDirective3 } from "src/app/base-directives/dropdown3.0.directive";
import { NgbDate, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  declarations: [
    VinculacionConductorComponent,
    VinculacionBusComponent,
    ClickOutsideDirective3
  ],
  imports: [
    CommonModule,
    VinculacionRoutingModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [VinculacionService]
})
export class VinculacionModule {}
