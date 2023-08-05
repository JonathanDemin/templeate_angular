import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicioComponent } from './servicio/servicio.component';
import { BoxComponent } from './servicio/box/box.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServicioComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    HttpClienteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
