import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { ServiceService } from 'src/app/base-services/service.service';
import {EncrDecrService} from 'src/app/base-services/encr-decr.service';
import { GrupoService } from 'src/app/base-services/grupo/grupo.service';
import { FilterBusPipe } from './Search/filter-bus.pipe';




@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule
    ],
    declarations: [AppComponent],
    providers: [AuthGuard, ServiceService, GrupoService, EncrDecrService],
    bootstrap: [AppComponent]
})
export class AppModule {}
