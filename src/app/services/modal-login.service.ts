import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalLoginService {


  public  boolLogin:boolean=true;
  displayMaximizable:boolean=false;


  mensaje="";
  @Output()  eventLogin:EventEmitter<boolean> = new EventEmitter()

  constructor() { }

    
  showMaximizableDialog() {
    this.mensaje="";
    this.displayMaximizable = true;
    this.boolLogin= true;
}


  mostrarRegistro()
  {
    this.boolLogin=false;
  }

  mostrarLogin()
  {
    this.boolLogin=true;
  }

 cerrarModal()
 {

  this.displayMaximizable = false;
 }



}
