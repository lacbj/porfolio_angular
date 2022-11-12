import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './conponentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './conponentes/acerca-de/acerca-de.component';
import { ProyectosComponent } from './conponentes/proyectos/proyectos.component';
import { ExperienciaComponent } from './conponentes/experiencia/experiencia.component';
import { EstudiosComponent } from './conponentes/estudios/estudios.component';
import{HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ProyectosComponent,
    ExperienciaComponent,
    EstudiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
