import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Pelicula, PeliculaAlquiler } from '../../models/modelFilms';
import { SelectItem } from '../../../assets/primeng/api/selectitem';
import { PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';
import { ModalLoginService } from '../../services/modal-login.service';
import { UsuarioService } from '../../services/usuario-service.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { PeliculaAlquilerService } from '../../services/pelicula-alquiler.service';
import { ManejoComprasService } from '../../services/manejo-compras.service';

@Component({
  selector: 'app-dataview-peliculas',
  templateUrl: './dataview-peliculas.component.html',
  styleUrls: ['./dataview-peliculas.component.scss']
})
export class DataviewPeliculasComponent implements OnInit, OnDestroy {
  @Input() peliculas: Pelicula[] = [];


  suscriptor: Subscription;
  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;

  sortkey = "costoAlquiler";


  pelicula: Pelicula;
  booOperacionAlquiler:boolean=false;
  constructor(private primengConfig: PrimeNGConfig, private router: Router,
    public ModalLoginService: ModalLoginService,
    public UsuarioService: UsuarioService,
    public PeliculaAlquilerService: PeliculaAlquilerService,
    public ManejoComprasService : ManejoComprasService

  ) {


    /*
    this.suscriptor = this.ModalLoginService.eventLogin.subscribe(
      p => {
        if(this.booOperacionAlquiler)
        {
         this.Alquiler();
         this.booOperacionAlquiler= false;
        }

      }

    );*/
  }


  ngOnDestroy(): void {
   // this.suscriptor.unsubscribe();
  }

  ngOnInit(): void {

    this.sortOptions = [
      { label: 'Costo alquiler mayor a menor ', value: '!costoAlquiler' },
      { label: 'Costo alquiler menor a  mayor', value: 'costoAlquiler' }
    ];

    this.primengConfig.ripple = true;
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

   
  public alquilarFilme(p: Pelicula) {
    this.booOperacionAlquiler=true;
    this.pelicula = p;
    if (this.UsuarioService.estaLogueado()) {
      this.Alquiler();
    }
    else {
      this.ModalLoginService.showMaximizableDialog();
    }
  }


  public Alquiler() {


    Swal.fire(
      {
        title: 'Esta seguro  de alquilar esta pelicula?',
        text: "De alquilar esta pelicula!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Siiiiii !'
      }
    ).then((result) => {

      if (result.isConfirmed) {
        this.PeliculaAlquilerService.crearAlquiler(this.pelicula.peliculaID).subscribe(

          p => {
            Swal.fire(
              {
                title: 'Informacion de tu alquiler',
                text: p.message,
                icon: p.ok ? 'success' : 'error',
                timer: 1500
              }
            );
            this.booOperacionAlquiler= false;
            this.PeliculaAlquilerService.consultaPeliculaUsuario(true).subscribe(p=>{});
          }

        );
      }
    }
    );
  }



  public verDetalle(Pelicula: Pelicula) {

    this.router.navigateByUrl(`/home/detalle/${Pelicula.peliculaID}`);

  }
}
