import { Component, OnInit } from '@angular/core';
import { ActorDirectorService } from '../../services/actor-director.service';
import { ActorDirector, ResponseAPI2 } from '../../models/modelFilms';
import Swal from 'sweetalert2';
import { ResponseAPI } from '../../models/model';
import { UsuarioService } from '../../services/usuario-service.service';

@Component({
  selector: 'app-actor-director',
  templateUrl: './actor-director.component.html',
  styleUrls: ['./actor-director.component.css']
})
export class ActorDirectorComponent implements OnInit {




  booCargando: boolean = false;

  public ActorDirector: ActorDirector[] = [];
  constructor(private ActorDirectorService: ActorDirectorService
 
    ) { }


  ngOnInit(): void {
    this.cargarActorDirector();
  }

  cargarActorDirector() {

    this.booCargando = true;
    this.ActorDirectorService.obtenerActorDirectores()
      .subscribe(p => {
        this.ActorDirector = p;
        console.warn(p);
        this.booCargando = false;
      });

  }

  delete(id: number) {

    Swal.fire(
      {
        title: 'Esta seguro?',
        text: "Si la efectua no se podra reversar la operacion",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Borralo!'
      }
    ).then((result) => {

      if (result.isConfirmed == true) {

        

        this.ActorDirectorService.eliminarActorDirector(id).subscribe(

            p=>{

                this.showResult(p);
                this.cargarActorDirector();
            }
        );

      }
    });

  }


  showResult(p: ResponseAPI2) {


    Swal.fire(
      {
        icon: p.ok ? 'success' : 'error',
        text: p.message,
        timer: 2000
      }
    );

    if (p.ok) {
      this.cargarActorDirector();
    }

  }


}
