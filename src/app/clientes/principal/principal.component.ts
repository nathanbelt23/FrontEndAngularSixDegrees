import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../models/modelFilms';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  Peliculas: Pelicula[] = [];
  constructor(private PeliculasService: PeliculasService) {


  }


  ngOnInit(): void {
    this.LoadPeliculas();
  }
  LoadPeliculas() {

    this.PeliculasService.obtenerPeliculas().subscribe(p => {
      this.Peliculas = p;

    });
  }

}
