import { Component, OnInit } from '@angular/core';
import { Pelicula, ResponseAPI2 } from '../../models/modelFilms';
import { UsuarioService } from '../../services/usuario-service.service';
import Swal from 'sweetalert2';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-list-peliculas',
  templateUrl: './list-peliculas.component.html',
  styleUrls: ['./list-peliculas.component.css']
})
export class ListPeliculasComponent implements OnInit {
  booCargando = false;



  public Peliculas: Pelicula[] = [];
  constructor(private PeliculasService: PeliculasService
    ,private UsuarioService: UsuarioService
    ) { }


  ngOnInit(): void {
    this.cargarPeliculas();
  }

  cargarPeliculas() {

    this.booCargando = true;
    this.PeliculasService.obtenerPeliculas()
      .subscribe(p => {
        this.Peliculas = p;
        console.warn(p);
        this.booCargando = false;
      });

  }

  delete(id: number) {

    Swal.fire(
      {
        title: 'Esta seguro?',
        text: "Si la efectua no se podra reversar la operacion",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Borralo!'
      }
    ).then((result) => {

      if (result.isConfirmed == true) {

        this.booCargando = true;

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
      this.cargarPeliculas();
    }

  }

}
