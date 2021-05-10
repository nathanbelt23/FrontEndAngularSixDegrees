import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { UsuarioService } from '../../services/usuario-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor(public ProfileService:ProfileService, public  UsuarioService:UsuarioService) { }

  ngOnInit(): void {
  }

}
