import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalLoginService } from '../../services/modal-login.service';


@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrls: ['./auth-container.component.css']
})
export class AuthContainerComponent implements OnInit {

  constructor(private Router:Router,public ModalLoginService: ModalLoginService) {


   }

  ngOnInit(): void {
  }


  
}
