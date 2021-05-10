import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../../models/modelFilms';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.component.html',
  styleUrls: ['./actores.component.css']
})
export class ActoresComponent implements OnInit {


@Input() pelicula= {} as  Pelicula;
  ngOnInit(): void {
  }

   
	responsiveOptions;

	constructor() { 
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

}
