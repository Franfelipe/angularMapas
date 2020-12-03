import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroMapaComponent } from './views/primeiro-mapa/primeiro-mapa.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroMapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
