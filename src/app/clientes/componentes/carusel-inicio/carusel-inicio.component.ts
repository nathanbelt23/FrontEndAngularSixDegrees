import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../../../models/modelFilms';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { ManejoComprasService } from '../../../services/manejo-compras.service';
const urlImagen= environment.urlImagen;
@Component({
  selector: 'app-carusel-inicio',
  templateUrl: './carusel-inicio.component.html',
  styleUrls: ['./carusel-inicio.component.css']
})
export class CaruselInicioComponent implements OnInit {

@Input()  peliculas:Pelicula[]=[]; 

 
	responsiveOptions;

	constructor(private router:Router,
    public ManejoComprasService : ManejoComprasService
    ) { 
		this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
	}
  ngOnInit(): void {
  }


  public verDetalle(Pelicula: Pelicula) {

    this.router.navigateByUrl(`/home/detalle/${Pelicula.peliculaID}`);

  }
}
