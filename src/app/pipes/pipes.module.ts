import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './im-agen.pipe';



@NgModule({
  declarations: [ImagenPipe],
  imports: [
    CommonModule
  ],
  exports:[ImagenPipe]
})
export class PipesModule { }
