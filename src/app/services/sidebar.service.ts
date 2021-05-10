import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [

        
        
        { titulo: 'Main', url: '/' },
        { titulo: 'Actor/Director', url: 'actorDirector' },

        { titulo: 'Peliculas', url: 'peliculas' },

        { titulo: 'Recepcion', url: 'recepcionPeliculas' },

        { titulo: 'Reporte', url: 'reporteExcel' }
        


     /*

       
        { titulo: 'Excel', url: 'Report' },
        { titulo: 'Settings', url: 'Settings'},*/
        


 /*        { titulo: 'Gráficas', url: 'grafica1' },
        { titulo: 'rxjs', url: 'rxjs' },
        { titulo: 'Promesas', url: 'promesas' },
        { titulo: 'ProgressBar', url: 'progress' }, */
      ]
    },
  ];

  constructor() { }
}
