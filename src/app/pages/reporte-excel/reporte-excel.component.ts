import { Component, OnInit } from '@angular/core';
import { PeliculaAlquilerService } from '../../services/pelicula-alquiler.service';
import { UsuarioService } from '../../services/usuario-service.service';
import {  PeliculaAlquiler } from '../../models/modelFilms';
import * as XLSX from 'xlsx'; 
@Component({
  selector: 'app-reporte-excel',
  templateUrl: './reporte-excel.component.html',
  styleUrls: ['./reporte-excel.component.css']
})
export class ReporteExcelComponent implements OnInit {

  booCargando = false;
 

  public Peliculas: PeliculaAlquiler[] = [];
  constructor(private PeliculaAlquilasService: PeliculaAlquilerService
    ,private UsuarioService: UsuarioService 
    ) { }


  ngOnInit(): void {
    this.consultaPeliculaTodas();
  }

  consultaPeliculaTodas() {

    this.booCargando = true;
    this.PeliculaAlquilasService.consultaPeliculaTodas()
      .subscribe(p => {
        this.Peliculas = p;
        console.warn(p);
        this.booCargando = false;
      });

  }

  fileName= 'ExcelSheet.xlsx';  

  exportexcel(): void 
      {
         /* table id is passed over here */   
         let element = document.getElementById('excel-table'); 
         const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
  
         /* generate workbook and add the worksheet */
         const wb: XLSX.WorkBook = XLSX.utils.book_new();
         XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
         /* save to file */
         XLSX.writeFile(wb, this.fileName);
        
      }
}
