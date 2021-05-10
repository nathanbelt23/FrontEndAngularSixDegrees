import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario-service.service';

@Injectable({
  providedIn: 'root'
})
export class EstoyLogueadoGuard implements CanActivate {

  constructor( private UsuarioService: UsuarioService,
    private router: Router) {}



  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
     console.log('Can activate');
     if(localStorage.getItem("token"))
     {
      return  localStorage.getItem("token").length>0 ;
     }
     else
     {
        this.router.navigateByUrl('/home');

     }
      
  }
  
}
