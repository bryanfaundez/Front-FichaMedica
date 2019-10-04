import { Component } from '@angular/core';
import { RestService } from '../servicios/rest.service';
import{rut} from '../models/ficha.models'
import{kine} from '../models/ficha.models'
import{codigo} from '../models/ficha.models'
import { Storage } from '@ionic/storage';
import { Route, Router } from '@angular/router';
import{AuthService}from "../servicios/auth.service"
import { auth } from 'firebase';
import { ActionSheetController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import {  take , map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  rut:rut =   new rut();
  codig:codigo=new codigo();
  public usuarios: Object
  kine:kine[];
  user: Object
  public largo : Number;
  public i : number;
  public text = "";
  students: any;

  constructor(private restServices:RestService,  private route:Router , private storage: Storage , public authservice: AuthService,public actionSheetController: ActionSheetController,private db : AngularFirestore  )   {}

  guardar(){
     var user = firebase.auth().currentUser;
      var name, email, uid, rut,apellido,nombre;
     if (user != null) {
          name = user.displayName;
          email = user.email;
          uid = user.uid;
          console.log(email+" "+" "+uid)
        } 
        this.db.doc('users/'+uid).snapshotChanges().subscribe(data=>{
            rut = data.payload.get("rut");
            apellido = data.payload.get("apellido")
            nombre = data.payload.get("name")
             console.log(nombre+" "+apellido+" "+" "+rut)
                //---------------------------------
                  this.storage.clear()
                  this.restServices.verFichas().subscribe((fichas)=>{
                    this.user = fichas;
                    this.largo = Object.keys(this.user).length;
         
                          for( this.i = 0 ; this.i < this.largo ; this.i++  ){
                                  if(this.user[this.i].rut == rut ){
                                    //console.log(this.user[this.i].riesgo)
                                    //console.log(this.user[this.i].nombres)
                                    //console.log(this.i)
                                    
                                    break;
                                  }
                          }
                             // this.rut.id_ficha=this.i+1;
                              this.codig.id_codigo=this.i+1;
                              //console.log(this.user)
                              this.storage.set('name', this.codig.id_codigo);
                              //console.log("i to rut"+ this.rut.id_ficha)
                              this.go()  
                    },error=>{
                        // console.log("hola")
                        }
                    )
                  //------------------------------------------------------------------------------------------------ 


        })
  }


go() {  
    this.route.navigateByUrl("/pagina2");  
}
codigo(){
  this.text='' 
 var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
 for (var i = 0; i < 10; i++)
   this.text += charset.charAt(Math.floor(Math.random() * charset.length));
  alert("Tu codigo es"+this.text)
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
interconsulta(){
  this.route.navigateByUrl("/lista-interconsulta"); 
}

}




  