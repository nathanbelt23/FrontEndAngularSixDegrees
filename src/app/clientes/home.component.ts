import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
import { ModalLoginService } from '../services/modal-login.service';
import { UsuarioService } from '../services/usuario-service.service';
import { PeliculaAlquilerService } from '../services/pelicula-alquiler.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public SettingsService:SettingsService
    , public ModalLoginService: ModalLoginService
    ,private UsuarioService: UsuarioService
    ,private PeliculaAlquilerService:PeliculaAlquilerService
    ) { 


        this.UsuarioService.datosSession();
        this.PeliculaAlquilerService.datosAlquiler();
    }

  ngOnInit(): void {
  }



}
