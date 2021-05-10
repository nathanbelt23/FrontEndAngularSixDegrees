import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ActorDirector } from '../../models/modelFilms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ActorDirectorService } from '../../services/actor-director.service';
import { FileUploadService } from '../../services/file-upload.service';
import Swal from 'sweetalert2';
import { ResponseAPI } from 'src/app/models/model';

@Component({
  selector: 'app-edit-actor-director',
  templateUrl: './edit-actor-director.component.html',

})
export class EditActorDirectorComponent implements OnInit {

form=this.FormBuilder.group(
{
  nombre:[, Validators.required],
  esActor:[true, Validators.required],
  esDirector:[false,Validators.required],
  urlFoto:['8.jpg']
}
);


public id: number = 0;
public imgTemp: any = null;
public archivoSubido: any = null;

ActorDirector={} as ActorDirector;

  constructor(private  FormBuilder:FormBuilder,
    private ActivatedRoute:ActivatedRoute,
    private ActorDirectorService:ActorDirectorService,
    
    private  Router:Router  

    ) {

    this.ActorDirector.urlFoto="8.jpg";
    this.id= ActivatedRoute.snapshot.params.id; 
    if(this.id>0)
    {
      this.traerDatosActorDirector();

    }
   
   }

   traerDatosActorDirector()
   {
        this.ActorDirectorService.obtenerActorDirector(this.id).subscribe(
            p=>{
                this.ActorDirector=p;
                this.form.reset(p);
            }

        );

   }


  ngOnInit(): void {
  }



  getControlValid(control: string) {
    return this.form.controls[control].invalid && this.form.controls[control].touched;
  }



  getControl(control: string) {
    return this.form.controls[control];
  }

  save()
  {


    this.ActorDirector= this.form.value;
    this.ActorDirector.actorDirectorID= this.id;
     if(this.id==0)
     {
        let nombre= (new Date()).getTime().toString()+".jpg";
        this.ActorDirector.urlFoto= nombre;
        this.ActorDirector.data= this.imgTemp;

   
        this.ActorDirectorService.crearActorDirector(this.ActorDirector).subscribe(
            p=>{
              this.showResult(p);
          
            }

        );
    
     }
     else
     {
    
      this.ActorDirector.data= this.imgTemp;

      this.ActorDirectorService.actualizarActorDirector(this.id, this.ActorDirector).subscribe(
          p=>{
            this.showResult(p);
        
          }

      );

     }
     
 
 
 
  }
  showResult(p: ResponseAPI) {


    Swal.fire(
      {
        icon: p.ok ? 'success' : 'error',
        text: p.message,
        timer: 2000
      }
    );

    if (p.ok) {
      this.Router.navigateByUrl('/dashboard/actorDirector');
    }


  }


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

}
