import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';
 const urlImagen= environment.urlImagen;
@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(value: string, tipo: string="peliculas"): string {

    value= value.replace('"', '');
  return `${urlImagen}/download/${value}/${tipo}`;
  

}

}
