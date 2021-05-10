import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from './usuario-service.service';
import { ActorDirector, ResponseAPI2 } from '../models/modelFilms';
const urlAPI= environment.urlAPI;

@Injectable({
  providedIn: 'root'
})
export class ActorDirectorService {

  constructor( private HttpClient:HttpClient ,private UsuarioService: UsuarioService) {

  }
  obtenerActorDirectores() {
    const url = `${ urlAPI }/ActorDirector`;
    let parametros= {
        opcion:1

    }
    return this.HttpClient.post<ActorDirector[]>( url, parametros, this.UsuarioService.headers );
  }


  obtenerActorDirector(id:number) {
    const url = `${ urlAPI }/ActorDirector/${id}`;
    return this.HttpClient.get<ActorDirector>( url, this.UsuarioService.headers);
  }

  crearActorDirector(ActorDirector:ActorDirector)
  {
    const url = `${ urlAPI }/ActorDirector/Creacion`
    return this.HttpClient.post<ResponseAPI2>( url,ActorDirector ,  this.UsuarioService.headers);
  }

  actualizarActorDirector(id:number, ActorDirector:ActorDirector)
  {
    const url = `${ urlAPI }/ActorDirector/${id}`;
    return this.HttpClient.put<ResponseAPI2>( url,ActorDirector ,  this.UsuarioService.headers);
  }
  
  
  eliminarActorDirector(id:number) {
    const url = `${ urlAPI }/ActorDirector/${id}`;
    return this.HttpClient.delete<ResponseAPI2>( url, this.UsuarioService.headers);
  }

}
