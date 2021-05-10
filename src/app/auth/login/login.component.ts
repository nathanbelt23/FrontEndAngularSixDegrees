import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../services/usuario-service.service';
import { ModalLoginService } from '../../services/modal-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   mensage:string="";
  frmLogin = this.formBuilder.group(
    {
      email: ['nathanbelt23@gmail.com', [Validators.required, Validators.minLength(3)]],
      password: ['Password123$', [Validators.required, Validators.minLength(3)]],
      recordar: [false]
    }
  );

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private UsuarioService: UsuarioService,
    public ModalLoginService:ModalLoginService,


  ) {



  }

  ngOnInit(): void {
    let email = localStorage.getItem("email")
    if (email) {

      this.frmLogin.controls["email"].setValue(email);
      this.frmLogin.controls["recordar"].setValue(true);
    }

  }

  public login() {
    if (this.frmLogin.valid) {
      this.ModalLoginService.mensaje="";
      this.UsuarioService.login(this.getValueControl("email"), this.getValueControl("password"))
        .subscribe(p => {

           
          Swal.fire(
            {
                icon:'success',
                text:'Bienvenido',
                timer:2000
             }

           );
           this.ModalLoginService.eventLogin.emit(true);
           this.ModalLoginService.cerrarModal();
        },err => 
        {
            this.ModalLoginService.mensaje="Ingreso no valido";

        }
        
        

      );
    }

  }

  public getValueControl(control: string) {
    return this.frmLogin.controls[control].value;

  }

}
