import { Component, OnInit } from '@angular/core';


import Swal from 'sweetalert2';
import { PeliculaAlquilerService } from '../../services/pelicula-alquiler.service';
import { UsuarioService } from '../../services/usuario-service.service';
import { ResponseAPI2, PeliculaAlquiler } from '../../models/modelFilms';

@Component({
  selector: 'app-recibir-pelicula',
  templateUrl: './recibir-pelicula.component.html',
  styleUrls: ['./recibir-pelicula.component.css']
})
export class RecibirPeliculaComponent implements OnInit {

 booCargando = false;
 

  public Peliculas: PeliculaAlquiler[] = [];
  constructor(private PeliculaAlquilasService: PeliculaAlquilerService
    ,private UsuarioService: UsuarioService 
    ) { }


  ngOnInit(): void {
    this.cargarPeliculasAlquiladas();
  }

  cargarPeliculasAlquiladas() {

    this.booCargando = true;
    this.PeliculaAlquilasService.consultaPeliculaAEntregar()
      .subscribe(p => {
        this.Peliculas = p;
        console.warn(p);
        this.booCargando = false;
      });

  }

  recibirAlquiler(id: number) {

    Swal.fire(
      {
        title: 'Esta seguro?',
        text: "Si la efectua no se podra reversar la operacion",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Recibela!'
      }
    ).then((result) => {

      if (result.isConfirmed == true) {

        this.booCargando = true;

          this.PeliculaAlquilasService.recibirAlquiler(id).subscribe(p=>{

              this.showResult(p);
              this.cargarPeliculasAlquiladas();
          });

      }
    });

  }


  showResult(p: ResponseAPI2) {


    Swal.fire(
      {
        icon: p.ok ? 'success' : 'error',
        text: p.message,
        timer: 2000
      }
    );

    if (p.ok) {
      this.cargarPeliculasAlquiladas();
    }

  }


}
