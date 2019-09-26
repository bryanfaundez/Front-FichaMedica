import { Component } from '@angular/core';
import { RestService } from '../servicios/rest.service';
import{rut} from '../models/ficha.models'
import{kine} from '../models/ficha.models'
import { Storage } from '@ionic/storage';

import { Route, Router } from '@angular/router';
import{AuthService}from "../servicios/auth.service"
import { auth } from 'firebase';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  rut:rut =   new rut();
 
  public usuarios: Object
  kine:kine[];
  user: Object
  public largo : Number;
  public i : number;
 public text = "";
// randomstring = require("randomstring");

  constructor(private restServices:RestService,  private route:Router , private storage: Storage , public authservice: AuthService,public actionSheetController: ActionSheetController  )   {}

  guardar(){
    this.storage.clear()

    this.restServices.verFichas().subscribe((fichas)=>{
      this.user = fichas;
      this.largo = Object.keys(this.user).length;
      console.log(Object.keys(this.user).length);
      
      console.log("rut " + this.rut.id_ficha)

      for( this.i = 0 ; this.i < this.largo ; this.i++  ){
        if(this.user[this.i].rut ==this.rut.id_ficha ){
          console.log(this.user[this.i].riesgo)
          console.log(this.user[this.i].nombres)
          console.log(this.i)
          break;
        }
      }

      this.rut.id_ficha=this.i+1;
      console.log(this.user)
      this.storage.set('name', this.rut.id_ficha);
      console.log("i to rut"+ this.rut.id_ficha)
       this.go()  
  })
  }

  go() {
    this.route.navigateByUrl("/pagina2");
    
}
codigo(){
 // console.log(this.randomstring.generate())
this.text=''
  
 var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
 
 for (var i = 0; i < 10; i++)
   this.text += charset.charAt(Math.floor(Math.random() * charset.length));

  console.log(this.text)
  alert(this.text)
  return this.text ;
 
}
onlogout(){
  this.authservice.logout();
}

async presentActionSheet() {
  const actionSheet = await this.actionSheetController.create({
    header: 'Opciones',
    buttons: [{
      text: 'Desconectarse',
      role: 'destructive',
      icon: 'close',
      handler: () => {
        this.onlogout()
      }
    }, {
      text: 'Generar token',
      icon: 'share',
      handler: () => {
        this.codigo()
      },
    
    }]
  });
  await actionSheet.present();
}

}




  