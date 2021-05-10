import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario-service.service';
import { ModalLoginService } from '../../../services/modal-login.service';
import { PeliculaAlquiler } from '../../../models/modelFilms';
import { PeliculaAlquilerService } from '../../../services/pelicula-alquiler.service';

@Component({
  selector: 'app-header-client',
  templateUrl: './header-client.component.html',
  styleUrls: ['./header-client.component.css']
})
export class HeaderClientComponent implements OnInit {

  constructor(public  usuarioService:UsuarioService, 
    public ModalLoginService:ModalLoginService,
    public PeliculaAlquilerService:PeliculaAlquilerService
    ) { }

  ngOnInit(): void {
  }

}
