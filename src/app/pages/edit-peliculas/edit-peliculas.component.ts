import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { PrimeNGConfig } from 'primeng/api';
import { ActorDirector, Pelicula, PeliculaActor, PeliculaDirector, ResponseAPI2 } from '../../models/modelFilms';
import Swal from 'sweetalert2';
import { ResponseAPI } from '../../models/model';

@Component({
  selector: 'app-edit-peliculas',
  templateUrl: './edit-peliculas.component.html',
  styleUrls: ['./edit-peliculas.component.css']
})
export class EditPeliculasComponent implements OnInit {
  form: FormGroup;
  id = 0;

  Actores: ActorDirector[] = [];
  Directores: ActorDirector[] = [];
  Pelicula = {} as Pelicula;

  constructor(
    private FormBuilder: FormBuilder,
    private PeliculasService: PeliculasService,
    private Router: Router,
    private ActivatedRoute: ActivatedRoute,
    private primengConfig: PrimeNGConfig


  ) {

    this.id = ActivatedRoute.snapshot.params.id;

    this.form = this.FormBuilder.group(
      {
        titulo: ['', [Validators.required]],
        descripcion: ['', [Validators.required]],
        costoAlquiler: [0, [Validators.required]],
        cantidadPeliculas: [0, [Validators.required]],
        estrellas: [0, [Validators.required]],
        urlPelicula: ["3.jpg", [Validators.required]],
        disponible: [true, [Validators.required]],
        lanzamiento: [new Date(), [Validators.required]],


      }

    );
    this.Pelicula.urlPelicula = "3.jpg";
    if (this.id > 0) {
      this.PeliculasService.obtenerPelicula(this.id).subscribe(
        p => {

          p.lanzamiento = new Date(p.lanzamiento.toString().substring(0, 10));
          this.form.reset(p);
          this.Pelicula = p;



        }

      );
    }
    this.cargarDirectores();
    this.cargarActores();

  }


  cargarDirectores() {
    this.PeliculasService.obtenerPeliculaDirectores(this.id).subscribe(
      p => {
        this.Directores = p;
      }
    );
  }

  cargarActores() {
    this.PeliculasService.obtenerPeliculaActor(this.id).subscribe(
      p => {
        this.Actores = p;
      }
    );
  }
  public imgTemp: any = null;
  public archivoSubido: any = null;
  subirImagen(archivo: File) {
    this.archivoSubido = archivo;
    if (!this.archivoSubido) {
      return;
    } else {
      const reader = new FileReader();
      const url64 = reader.readAsDataURL(archivo);

      reader.onloadend = () => {
        this.imgTemp = reader.result;
      }
    }
  }



  save() {

    let peliculaGuardar: Pelicula = this.form.value;

    peliculaGuardar.directorLnk = [];
    peliculaGuardar.actorlnk = [];
    this.Actores.forEach(element => {
      if (element.seleccionado) {

        var authorLnk = {} as PeliculaActor;
        authorLnk.actorDirectorID = element.actorDirectorID;
        authorLnk.peliculaID = this.id;
        peliculaGuardar.actorlnk.push(authorLnk)
      }
    });

    this.Directores.forEach(element => {
      if (element.seleccionado) {

        var directorLnk = {} as PeliculaDirector;
        directorLnk.actorDirectorID = element.actorDirectorID;
        directorLnk.peliculaID = this.id;
        peliculaGuardar.directorLnk.push(directorLnk)
      }
    });



    peliculaGuardar.data= this.imgTemp;
    if (this.id == 0) {
      this.PeliculasService.crearPelicula(peliculaGuardar).
        subscribe(p => this.showResult(p));
    }
    else {

      this.PeliculasService.actualizarPelicula(this.id, peliculaGuardar).
        subscribe(p => this.showResult(p));
    }

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
      this.Router.navigateByUrl('/dashboard/peliculas');
    }


  }





  es: any;

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.es = {
      firstDayOfWeek: 1,
      dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
      dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
      dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
      monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
      monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
      today: 'Hoy',
      clear: 'Borrar'
    }

    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);


  }

  getControlValid(control: string) {
    return this.form.controls[control].invalid && this.form.controls[control].touched;
  }



  getControl(control: string) {
    return this.form.controls[control];
  }

}
