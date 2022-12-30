import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// inicio de sevicio

import{ColoresService} from "./servicios/colores.service"

// fin servicio


import { AppComponent } from './app.component';
import { EncabezadoComponent } from './conponentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './conponentes/acerca-de/acerca-de.component';
import { ProyectosComponent } from './conponentes/proyectos/proyectos.component';
import { ExperienciaComponent } from './conponentes/experiencia/experiencia.component';

import { EstudiosComponent } from './conponentes/estudios/estudios.component';
import{HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './conponentes/home/home.component';
import { LoginComponent } from './conponentes/login/login.component';
import {  FormsModule } from '@angular/forms';
import { ProgresoComponent } from "./conponentes/progreso/progreso.component";


@NgModule({
    declarations: [
        AppComponent,
        EncabezadoComponent,
        AcercaDeComponent,
        ProyectosComponent,
        ExperienciaComponent,
        EstudiosComponent,
        HomeComponent,
        LoginComponent,
        ProgresoComponent
    ],
    providers: [
        ColoresService
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
       
    ]
})
export class AppModule { }
