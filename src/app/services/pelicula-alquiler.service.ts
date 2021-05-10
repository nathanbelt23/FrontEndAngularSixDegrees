import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from './usuario-service.service';
import { Pelicula, ActorDirector, ResponseAPI2, PeliculaAlquiler } from '../models/modelFilms';
import { tap } from 'rxjs/operators';
const urlAPI = environment.urlAPI;
@Injectable({
  providedIn: 'root'
})
export class PeliculaAlquilerService {

  peliculaAlquiler:PeliculaAlquiler[]=[];

  constructor(private HttpClient: HttpClient, private UsuarioService: UsuarioService) {

    if(!localStorage.getItem("Alquiler")){
      this.peliculaAlquiler=[];
    }


   }
  crearAlquiler(id: number) {

    let url = `${urlAPI}/PeliculaAlquiler/crear`
    let params = {
      peliculaID: id,
      userName: this.UsuarioService.usuario.email
    }
    return this.HttpClient.post<ResponseAPI2>(url, params, this.UsuarioService.headers);

  }

  cancelarAlquiler(id: number) {

    let url = `${urlAPI}/PeliculaAlquiler/Cancelar`
    let params = {
      peliculaID: id,
      id,
      userName: this.UsuarioService.usuario.email
    }
    return this.HttpClient.post<ResponseAPI2>(url, params, this.UsuarioService.headers);

  }



  devolverAlquiler(id: number) {

    let url = `${urlAPI}/PeliculaAlquiler/Devolver`
    let params = {
      peliculaID: id,
      userName: this.UsuarioService.usuario.email
    }
    return this.HttpClient.post<ResponseAPI2>(url, params, this.UsuarioService.headers);

  }


  
  consultaPeliculaUsuario( booEscribirStorage:boolean) {

    let url = `${urlAPI}/PeliculaAlquiler/ConsultaPeliculaUsuario`
    let params = {
      opcion: 3,
      userName: this.UsuarioService.usuario.email
    }
    return this.HttpClient.post<PeliculaAlquiler[]>(url, params, this.UsuarioService.headers)
    .pipe(tap((p: PeliculaAlquiler[]) => {
      if(booEscribirStorage)
      {
        localStorage.setItem("Alquiler", JSON.stringify(p));
      }
      
      this.peliculaAlquiler = p;

    }
    ));
    ;

  }



    
  consultaPeliculaAEntregar( ) {

    let url = `${urlAPI}/PeliculaAlquiler/ConsultaPeliculaUsuario`
    let params = {
      opcion: 1,
      userName: this.UsuarioService.usuario.email
    }
    return this.HttpClient.post<PeliculaAlquiler[]>(url, params, this.UsuarioService.headers);

  }


  consultaPeliculaTodas( ) {

    let url = `${urlAPI}/PeliculaAlquiler/ConsultaPeliculaUsuario`
    let params = {
      opcion: 4,
      userName: this.UsuarioService.usuario.email
    }
    return this.HttpClient.post<PeliculaAlquiler[]>(url, params, this.UsuarioService.headers);

  }



  public datosAlquiler()
  {



    if(localStorage.getItem("Alquiler")){
      let Alquiler: string = localStorage.getItem("Alquiler")?.toString() || '';
      this.peliculaAlquiler = JSON.parse(Alquiler);
    }
    
   return  this.peliculaAlquiler;
  }



recibirAlquiler(id: number) {

  let url = `${urlAPI}/PeliculaAlquiler/Recibir`

  let params = {
    peliculaID: id,
    id,
    userName: this.UsuarioService.usuario.email
  }
  return this.HttpClient.post<ResponseAPI2>(url, params, this.UsuarioService.headers);

}


}
