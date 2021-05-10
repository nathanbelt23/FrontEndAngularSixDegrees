import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { PrincipalComponent } from './principal/principal.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { MiHistorialComponent } from './componentes/mi-historial/mi-historial.component';
import { EstoyLogueadoGuard } from '../guards/estoy-logueado.guard';



const routes: Routes = [
    { 
        
        path: 'home', component: HomeComponent
        , children:[
            { path: '', component: PrincipalComponent},
            { path: 'principal', component: PrincipalComponent},
            { path: 'detalle/:id', component: DetalleComponent},
            { path: 'miHistorial', component: MiHistorialComponent, canActivate:[EstoyLogueadoGuard]},
            
        ]

    },
  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientesRoutingModule {}
