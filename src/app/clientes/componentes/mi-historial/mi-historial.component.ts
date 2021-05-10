import { Component, OnInit } from '@angular/core';
import { PeliculaAlquiler, ResponseAPI2 } from '../../../models/modelFilms';
import { PeliculaAlquilerService } from '../../../services/pelicula-alquiler.service';
import { UsuarioService } from '../../../services/usuario-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mi-historial',
  templateUrl: './mi-historial.component.html',
  styleUrls: ['./mi-historial.component.css']
})
export class MiHistorialComponent implements OnInit {

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
    this.PeliculaAlquilasService.consultaPeliculaUsuario(true)
      .subscribe(p => {
        this.Peliculas = p;
        console.warn(p);
        this.booCargando = false;
      });

  }

  cancelar(id: number) {

    Swal.fire(
      {
        title: 'Esta seguro?',
        text: "Si la efectua no se podra reversar la operacion",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Cancelala!'
      }
    ).then((result) => {

      if (result.isConfirmed == true) {

        this.booCargando = true;

          this.PeliculaAlquilasService.cancelarAlquiler(id).subscribe(p=>{

              this.showResult(p);

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
