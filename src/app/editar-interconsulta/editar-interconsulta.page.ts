import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { RestService } from '../servicios/rest.service';
import { ActionSheetController } from '@ionic/angular';
import{rut, interconsulta} from '../models/ficha.models'
import {Router } from '@angular/router';
@Component({
  selector: 'app-editar-interconsulta',
  templateUrl: './editar-interconsulta.page.html',
  styleUrls: ['./editar-interconsulta.page.scss'],
})
export class EditarInterconsultaPage implements OnInit {

  public interconsulta: Object
  consulta:interconsulta = new interconsulta();

  constructor( private storage: Storage,  private route:Router ,private restServices:RestService,public actionSheetController: ActionSheetController, private interconsultaServicio : RestService ) { }

  ngOnInit() {
    this.storage.get('interconsulta').then((val) => {  
     this.interconsulta = val
      this.interconsulta= Array.of(this.interconsulta)
      
    });
    
  }

  enviar(interconsulta :interconsulta ){

    this.consulta=interconsulta[0]  
  this.restServices.editarInterconsulta(this.consulta,(this.consulta.id).toString()).subscribe(()=>{
    alert("Editado con exito")
    this.route.navigateByUrl("/lista-interconsulta");
    
   },erro=>{
    //this.route.navigateByUrl("/lista-interconsulta");
  
   }) 
  }

}
