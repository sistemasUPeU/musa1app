import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LanguageTranslationModule } from "./shared/modules/language-translation/language-translation.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthGuard } from "./shared";
import { ServiceService } from "src/app/base-services/service.service";
import { EncrDecrService } from "src/app/base-services/encr-decr.service";
import { GrupoService } from "src/app/base-services/grupo/grupo.service";
import { FilterBusPipe } from "./Search/filter-bus.pipe";
import { FilterProductoPipe } from "./search/filter-producto.pipe";
import { FilterRevisionPipe } from "./search/filter-revision.pipe";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LanguageTranslationModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  declarations: [AppComponent],
  providers: [AuthGuard, ServiceService, GrupoService, EncrDecrService],
  bootstrap: [AppComponent]
})
export class AppModule {}
