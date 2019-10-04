import { Component, OnInit } from '@angular/core';
import { RestService } from '../servicios/rest.service';
import{rut, interconsulta} from '../models/ficha.models'
import { Storage } from '@ionic/storage';
import {Router } from '@angular/router';
import{AuthService}from "../servicios/auth.service"
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-lista-interconsulta',
  templateUrl: './lista-interconsulta.page.html',
  styleUrls: ['./lista-interconsulta.page.scss'],
})
export class ListaInterconsultaPage implements OnInit {
  rut:rut =   new rut();
  public interconsulta: Object
  user: Object

  constructor(private restServices:RestService,  private route:Router , private storage: Storage , public authservice: AuthService,public actionSheetController: ActionSheetController ) { }

  ngOnInit() {
    this.restServices.verInterconsulta().subscribe((fichas)=>{
        this.interconsulta = fichas;   
        // console.log(this.interconsulta)
     },error=>{
     // console.log("Hola")
     })
  }
EditarInterconsulta(interconsulta:interconsulta){   
    //console.log(interconsulta);
    this.storage.set('interconsulta',interconsulta)
    this.storage.get('interconsulta').then((val) => {
    });
    this.route.navigateByUrl("/editar-interconsulta");  
   
}
EliminarInterconsulta(id_interconsulta:number){
  this.restServices.eliminarInterconsulta(id_interconsulta).subscribe(data=>{
    alert("Interconsulta eliminada")
    this.ngOnInit();
  },error=>{ 
     
  })
}

doRefresh(event) {
  console.log('Begin async operation');
  setTimeout(() => {
    console.log('Async operation has ended');
    this.ngOnInit();
    event.target.complete();
  }, 2000);
}
nueva(){
  this.route.navigateByUrl("/agregar");
}
}
