import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from './usuario-service.service';
const urlImagen= environment.urlImagen;
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {


  constructor(
        public httpClient: HttpClient,
        public UsuarioService:UsuarioService
  ) { }

  actualizarFotoActores(
    archivo: File,
    id: string
   
  ) {

   // const url = `${urlImagen}/${id}`;
   const url = `${urlImagen}`;
  
    const  parametros ={
        file:archivo

    }

    return this.httpClient.post(url, parametros, this.UsuarioService.headers);
   
 

  }
}
