import { Component, OnInit } from '@angular/core';
import { RestService } from '../servicios/rest.service';
import{kine} from '../models/ficha.models'
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import{rut} from '../models/ficha.models'
import{stora} from '../models/ficha.models'
import {MatTableDataSource} from '@angular/material/table'




@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {
     stora:stora =   new stora();
    kine:kine[];
   public user: Object;
    public largo : Number;
    textoBuscar ='';
  constructor(private restServices:RestService, private activatedRoute: ActivatedRoute, private storage: Storage) { 

  }

  ngOnInit() {

    this.storage.get('name').then((val) => {
      //console.log('Your age is', val);     
      this.stora.id_stora=val;
      //console.log("busqueda "+ this.stora.id_stora)

      this.restServices.seleccionarFichas(this.stora).subscribe((fichas)=>{
        //console.log(this.stora.id_stora)
        //console.log("listo")
           this.user = fichas;
           //console.log(this.user)
           this.user= Array.of(this.user)
          // console.log(this.user)
             //console.log(Object.keys(this.usuarios[0]))
             //console.log(Object.getOwnPropertyNames(this.usuarios[0]))
          
        })

    });

    
  }
  buscarUsuario(event){
    const texto = event.target.value;
    this.textoBuscar=texto
      console.log(texto)
  }
}
