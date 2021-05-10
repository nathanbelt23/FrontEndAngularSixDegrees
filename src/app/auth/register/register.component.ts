import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario-service.service';
import Swal from 'sweetalert2';
import { ModalLoginService } from '../../services/modal-login.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css' ]
})
export class RegisterComponent {

  public formSubmitted = false;

  public registerForm = this.fb.group({
    nombre: ['Usuario', Validators.required ],
    email: ['usuario@gmail.com', [ Validators.required, Validators.email ] ],
    password: ['Password123$', Validators.required ],
    password2: ['Password123$', Validators.required ],
    terminos: [ true, Validators.required ],
  }, {
    validators: this.passwordsIguales('password', 'password2')
  });

  constructor( private fb: FormBuilder,
               private usuarioService: UsuarioService,
               private router: Router,
               public ModalLoginService:ModalLoginService
               ) { }

  crearUsuario() {
    this.formSubmitted = true;


    if ( this.registerForm.invalid ) {
      return;
    }

    // Realizar el posteo
    this.usuarioService.crearUsuario( this.registerForm.value )
        .subscribe( resp => {
          
          // Navegar al Dashboard
          
          Swal.fire(
              {
                  icon:'success',
                  text:'Registro exitoso',
                  timer:2000
               }

          );
          this.ModalLoginService.eventLogin.emit(true);
           this.ModalLoginService.cerrarModal();

        }, (err) => {
          // Si sucede un error
          console.log(err);
          Swal.fire('Error', err, 'error' );
        });


  }

  campoNoValido( campo: string ): boolean {
    
    if ( this.registerForm.get(campo).invalid && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }

  }

  contrasenasNoValidas() {
    const pass1 = this.registerForm.get('password').value;
    const pass2 = this.registerForm.get('password2').value;

    if ( (pass1 !== pass2) && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }

  }

  aceptaTerminos() {
    return !this.registerForm.get('terminos').value && this.formSubmitted;
  }

  passwordsIguales(pass1Name: string, pass2Name: string ) {

    return ( formGroup: FormGroup ) => {

      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);

      if ( pass1Control.value === pass2Control.value ) {
        pass2Control.setErrors(null)
      } else {
        pass2Control.setErrors({ noEsIgual: true })
      }


    }
  }

}