import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ModalLoginService } from './modal-login.service';
import { UsuarioService } from './usuario-service.service';
import { PeliculaAlquilerService } from './pelicula-alquiler.service';
import { Pelicula } from '../models/modelFilms';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ManejoComprasService {
  pelicula: Pelicula;
  booOperacionAlquiler:boolean=false;
  suscriptor: Subscription;
  constructor(
    private router: Router,
    public ModalLoginService: ModalLoginService,
    public UsuarioService: UsuarioService,
    public PeliculaAlquilerService: PeliculaAlquilerService

  ) {


    this.ModalLoginService.eventLogin.subscribe(
      p => {
        if(this.booOperacionAlquiler)
        {
         this.Alquiler();
         this.booOperacionAlquiler= false;
        }

      }

    );

   }


   public alquilarFilme(p: Pelicula) {
    this.booOperacionAlquiler=true;
    this.pelicula = p;
    if (this.UsuarioService.estaLogueado()) {
      this.Alquiler();
    }
    else {
      this.ModalLoginService.showMaximizableDialog();
    }
  }


  public Alquiler() {


    Swal.fire(
      {
        title: 'Esta seguro  de alquilar esta pelicula?',
        text: "De alquilar esta pelicula!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Siiiiii !'
      }
    ).then((result) => {

      if (result.isConfirmed) {
        this.PeliculaAlquilerService.crearAlquiler(this.pelicula.peliculaID).subscribe(

          p => {
            Swal.fire(
              {
                title: 'Informacion de tu alquiler',
                text: p.message,
                icon: p.ok ? 'success' : 'error',
                timer: 1500
              }
            );
            this.booOperacionAlquiler= false;
            this.PeliculaAlquilerService.consultaPeliculaUsuario(true).subscribe(p=>{});
          }

        );
      }
    }
    );
  }

}
