import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../../models/modelFilms';
import { PeliculasService } from '../../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  pelicula = {} as Pelicula;
  id: number = 0;
  constructor(private PeliculasService: PeliculasService, private ActivatedRoute: ActivatedRoute) {
    this.id = this.ActivatedRoute.snapshot.params.id;

  }


  ngOnInit(): void {
    this.cargarPelicula();
  }
  cargarPelicula() {
    this.PeliculasService.obtenerPelicula(this.id).subscribe(
      p => this.pelicula = p
    );
  }

}
