import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { UsuarioLogin,  } from '../models/model';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

const urlAPI = environment.urlAPI;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public usuario = {} as UsuarioLogin;

  constructor(private HttpClient: HttpClient, private Router:Router) { 

    this.datosSession();
  }



  public login(email: string, password: string) {

    let url = `${urlAPI}/usuario/login`;
    let parameters = {
      email,
      password

    };

    return this.HttpClient.post<UsuarioLogin>(url, parameters)
      .pipe(tap((p: UsuarioLogin) => {

        localStorage.setItem("usuario", JSON.stringify(p));
        this.usuario = p;
        this.guardarLocalStorage(p.token);

      }
      ));
    ;


  }
  //---Funciones  de token--//
  get token(): string {
    return localStorage.getItem('token') || '';
  }
  get headers() {
    return {
      headers: {
        'Authorization': `Bearer ${this.token}`
      }
    }
  }



  guardarLocalStorage(token: string,) {
    localStorage.setItem('token', token);
  }


  crearUsuario(formData: any) {


    const  {nombre, email, password}= formData;

    let params={
      nombre, 
      email, 
      password
    };

    return this.HttpClient.post(`${urlAPI}/usuario/registrar`, params)
      .pipe(tap((p: UsuarioLogin) => {
        localStorage.setItem("usuario", JSON.stringify(p));
        this.usuario = p;
        this.guardarLocalStorage(p.token);
      }
      )
      )
    ;
  }



  public estaLogueado()
  {
    if (localStorage.getItem("token"))
    {
       return  true;
    }
      
    
    return  false;

  }
  public cerraSession()
  {
    if (localStorage.getItem("usuario")) {
      localStorage.removeItem("usuario");
    }

    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
    }

    if (localStorage.getItem("Alquiler")) {
      localStorage.removeItem("Alquiler");
   
    }


    this.usuario={}  as UsuarioLogin;
    this.Router.navigateByUrl('/home');

  }

  public datosSession()
  {


    if(localStorage.getItem("usuario")){
      let strUsuario: string = localStorage.getItem("usuario")?.toString() || '';
      this.usuario = JSON.parse(strUsuario);
    }
    
   return  this.usuario;
  }


  esAdmin()
  {
     return  this.usuario.email=="nathanbelt23@gmail.com"?true:false;

  }

}
