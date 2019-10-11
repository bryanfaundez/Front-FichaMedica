import { Component, OnInit } from '@angular/core';
import{interconsulta }from "../models/ficha.models"
import { RestService } from '../servicios/rest.service';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

    interconsulta:interconsulta = new interconsulta();
  constructor( private interconsultaServicio : RestService) { }

  ngOnInit() {
  }
enviar(){
  
  console.log(this.interconsulta)
  this.interconsultaServicio.agregarInterconsulta(this.interconsulta).subscribe(()=>{
    console.log("Se guardo")
    alert('Se ha guardado correctamente')
  },
  error=>{
    console.log(error)
    alert('No se ha guardado correctamente')
  })

}
}
