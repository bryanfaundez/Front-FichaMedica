import { Component, OnInit } from '@angular/core';
import{interconsulta }from "../models/ficha.models"
import { RestService } from '../servicios/rest.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

    interconsulta:interconsulta = new interconsulta();
  constructor( private interconsultaServicio : RestService,  private route:Router ) { }

  ngOnInit() {
  }
enviar(){
  
  this.interconsultaServicio.agregarInterconsulta(this.interconsulta).subscribe(()=>{

    alert('Interconsulta agregada')
    this.route.navigateByUrl("/lista-interconsulta"); 
  },
  error=>{
    console.log(error)
    alert('No se ha guardado correctamente')
  })

}


}
