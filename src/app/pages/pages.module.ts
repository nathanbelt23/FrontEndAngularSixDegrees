import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';

import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';

import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {TabViewModule} from 'primeng/tabview';
import {ToolbarModule} from 'primeng/toolbar';
import {SplitButtonModule} from 'primeng/splitbutton';

import {ButtonModule} from 'primeng/button';
import {BlockUIModule} from 'primeng/blockui';
import {PanelModule} from 'primeng/panel';
import {RippleModule} from 'primeng/ripple';
import {InputTextModule} from 'primeng/inputtext';

import {DialogModule} from 'primeng/dialog';
import {MessageModule} from 'primeng/message';
import {KeyFilterModule} from 'primeng/keyfilter';



import { ActorDirectorComponent } from './actor-director/actor-director.component';
import { ListPeliculasComponent } from './list-peliculas/list-peliculas.component';
import { EditActorDirectorComponent } from './edit-actor-director/edit-actor-director.component';
import { EditPeliculasComponent } from './edit-peliculas/edit-peliculas.component';
import { RecibirPeliculaComponent } from './recibir-pelicula/recibir-pelicula.component';
import { ReporteExcelComponent } from './reporte-excel/reporte-excel.component';

registerLocaleData(localEs);


@NgModule({
  declarations: [
    DashboardComponent,

    PagesComponent,
    AccountSettingsComponent,

    ActorDirectorComponent,
    ListPeliculasComponent,
    EditActorDirectorComponent,
    EditPeliculasComponent,
    RecibirPeliculaComponent,
    ReporteExcelComponent,
  ],
  exports: [
    DashboardComponent,
    PagesComponent,
    AccountSettingsComponent,

  ],
  imports: [
    CommonModule,

    SharedModule,
    RouterModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
    PipesModule,
    AutoCompleteModule,
    TabViewModule,
    ToolbarModule,
    SplitButtonModule,
    BlockUIModule,
    ButtonModule,
    PanelModule,
    RippleModule,
    DialogModule,
    KeyFilterModule,
		InputTextModule,
		MessageModule


  ], providers: [{
    provide: LOCALE_ID,
    useValue: "es"

  }]

})
export class PagesModule { }
