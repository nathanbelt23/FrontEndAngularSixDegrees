import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from './usuario-service.service';
import { Pelicula, ActorDirector, ResponseAPI2 } from '../models/modelFilms';
const urlAPI= environment.urlAPI;

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor( private HttpClient:HttpClient ,private UsuarioService: UsuarioService) {

     }

     obtenerPeliculas() {
      const url = `${ urlAPI }/Peliculas`;
      let parametros= {
          opcion:1

      }
      return this.HttpClient.post<Pelicula[]>( url, parametros );
    }


    obtenerPelicula(id:number) {
      const url = `${ urlAPI }/Peliculas/${id}`;
      return this.HttpClient.get<Pelicula>( url);
    }

    obtenerPeliculaActor(id:number) {
      const url = `${ urlAPI }/Peliculas/ActorDirector`;
      const params={
        opcion:1,
        id
      };
      return this.HttpClient.post<ActorDirector[]>( url,params, this.UsuarioService.headers);
    }

    obtenerPeliculaDirectores(id:number) {
      const url = `${ urlAPI }/Peliculas/ActorDirector`;
      const params={
        opcion:2,
        id
      };
      return this.HttpClient.post<ActorDirector[]>( url, params,this.UsuarioService.headers);

}


crearPelicula(data:Pelicula) {
  const url = `${ urlAPI }/Peliculas/Crear`;
 return this.HttpClient.post<ResponseAPI2>( url,data, this.UsuarioService.headers);
}


actualizarPelicula(id:number,data:Pelicula) {
 const url = `${ urlAPI }/Peliculas/${id}`;
 return this.HttpClient.put<ResponseAPI2>( url,data, this.UsuarioService.headers);
}


}

