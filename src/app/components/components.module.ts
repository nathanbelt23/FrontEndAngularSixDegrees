import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { PipesModule } from '../pipes/pipes.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [



  ],
  exports: [
   
  ],
  imports: [
   PipesModule,
   CommonModule,
   BrowserModule,
   FormsModule,
   ReactiveFormsModule
  ]
})
export class ComponentsModule { }
