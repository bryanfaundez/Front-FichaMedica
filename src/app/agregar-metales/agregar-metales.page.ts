import { Component, OnInit } from '@angular/core';
import{ RestMetalService} from '../services/rest-metal.service'
import{metales}from '../modelos'
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-metales',
  templateUrl: './agregar-metales.page.html',
  styleUrls: ['./agregar-metales.page.scss'],
})
export class AgregarMetalesPage implements OnInit {

  metales:metales = new metales();
  constructor(private restMetales:RestMetalService,private route:Router) { }

  ngOnInit() {
  }
  enviar(){
    console.log(this.restMetales)
    this.restMetales.agregarMetales(this.metales).subscribe(()=>{
  
      alert('Metales agregados')
      this.route.navigateByUrl("/metales"); 
    },
    error=>{
      console.log(error)
      alert('No se ha guardado correctamente')
    })
  
  }

}
