import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import  { registerLocaleData }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import  localEs   from '@angular/common/locales/es';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import { CarouselModule } from 'src/assets/primeng/carousel';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

import { HomeComponent } from './home.component';
import { PrincipalComponent } from './principal/principal.component';
import { CaruselInicioComponent } from './componentes/carusel-inicio/carusel-inicio.component';


import { DataviewPeliculasComponent } from './dataview-peliculas/dataview-peliculas.component';

import { PipesModule } from '../pipes/pipes.module';
import { HeaderClientComponent } from './componentes/header-client/header-client.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { ActoresComponent } from './componentes/actores/actores.component';
import { DirectoresComponent } from './componentes/directores/directores.component';
import { AuthModule } from '../auth/auth.module';
import { MiHistorialComponent } from './componentes/mi-historial/mi-historial.component';


registerLocaleData(localEs);


@NgModule({
  declarations: [HomeComponent, PrincipalComponent, CaruselInicioComponent,
     DataviewPeliculasComponent, HeaderClientComponent, DetalleComponent,
    ActoresComponent,
    DirectoresComponent,
    MiHistorialComponent
    ]
     ,
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
   


    PipesModule,
    AuthModule,

    DataViewModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    RatingModule,
    CarouselModule,
    CardModule,
    TableModule
  
  ],
  exports: [RouterModule]


})
export class ClientesModule { }
