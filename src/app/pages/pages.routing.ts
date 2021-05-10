import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


import { SecutyLoginGuard } from '../guards/secuty-login.guard';

import { ActorDirectorComponent } from './actor-director/actor-director.component';
import { ListPeliculasComponent } from './list-peliculas/list-peliculas.component';
import { EditPeliculasComponent } from './edit-peliculas/edit-peliculas.component';
import { RecibirPeliculaComponent } from './recibir-pelicula/recibir-pelicula.component';
import { ReporteExcelComponent } from './reporte-excel/reporte-excel.component';
import { EditActorDirectorComponent } from './edit-actor-director/edit-actor-director.component';


const routes: Routes = [
    { 
        path: 'dashboard', 
        component: PagesComponent,
        canActivate: [ SecutyLoginGuard],
        children: [
            { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },

            { path: 'actorDirector', component: ActorDirectorComponent, data: { titulo: 'Actores/Directores'}},

            { path: 'edit-actorDirector/:id', component: EditActorDirectorComponent,
             data: { titulo: 'Edicion Actor/Director'}},


            { path: 'peliculas', component: ListPeliculasComponent, data: { titulo: 'Peliculas'}},
            { path: 'pelicula/:id', component: EditPeliculasComponent, data: { titulo: 'Edicion de pelicula'}},


            { path: 'recepcionPeliculas', component: RecibirPeliculaComponent, data: { titulo: 'Recepcion peliculas'}},


            { path: 'reporteExcel', component: ReporteExcelComponent, data: { titulo: 'Reporte excel'}},
            { path: 'Settings', component:AccountSettingsComponent , data: { titulo: 'Settings' } },
          
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


