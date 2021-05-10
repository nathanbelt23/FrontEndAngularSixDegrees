import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

// Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SecutyLoginGuard } from './guards/secuty-login.guard';
import { ClientesRoutingModule } from './clientes/clientes-routing';


const routes: Routes = [


  { path: '', redirectTo: '/home', pathMatch: 'full'      },
  { path: '**', component: NopagefoundComponent },
    

];



@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
    AuthRoutingModule,
    ClientesRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
