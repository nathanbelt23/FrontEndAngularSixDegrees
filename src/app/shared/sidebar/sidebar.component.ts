import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { ProfileService } from '../../services/profile.service';
import { UsuarioService } from '../../services/usuario-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuItems: any[];

  constructor( private sidebarService: SidebarService
      ,public  ProfileService:ProfileService
      ,public UsuarioService :UsuarioService
    ) {
    this.menuItems = sidebarService.menu;
   
  }

  ngOnInit(): void {
  }

}
