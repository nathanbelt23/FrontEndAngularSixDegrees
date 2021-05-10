import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule  }  from '@angular/common/http';


// Modulos
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PipesModule } from './pipes/pipes.module';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import  { registerLocaleData }  from '@angular/common';
import  localEs   from '@angular/common/locales/es';
import { ClientesModule } from './clientes/clientes.module';


registerLocaleData(localEs);

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    HttpClientModule,
    PipesModule,
    TableModule,
    CalendarModule,
    ClientesModule

],
  exports:[

  ], 
  bootstrap: [AppComponent]
, providers:[{
provide:LOCALE_ID,
useValue:"es"

}]

})
export class AppModule { }
