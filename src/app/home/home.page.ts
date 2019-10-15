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
import { AlertController } from '@ionic/angular';
import{firebaseConfig} from "../../environments/environment";

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
  public text = "";
  public text1 = "No_Permitido";
  students: any;

  constructor(public alertController: AlertController,private restServices:RestService,  private route:Router , private storage: Storage , public authservice: AuthService,public actionSheetController: ActionSheetController,private db : AngularFirestore  )   {}

  ngOnInit() {   

    
    var user = firebase.auth().currentUser;
    var name, email, uid, rut,persona;
   if (user != null) {
        name = user.displayName;
        email = user.email;
        uid = user.uid;
        console.log(email+" "+" "+uid)
      } 
      this.storage.set("uid",uid)

//-----------------------------------------------------------
this.db.doc('users/'+uid).snapshotChanges().subscribe(data=>{

  persona= data.payload.get("rut");
        this.storage.set("rut",persona)
  })
  }
codigo(){
  this.text='' 
 var charset = "abcdefghijklmnopqrstuvwxyz0123456789#%*.,;";
 for (var i = 0; i < 10; i++)
   this.text += charset.charAt(Math.floor(Math.random() * charset.length));
  this.presentAlert()
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
       
       this.db.collection('codigo').doc(rut).set({
        uid: uid,
        name:nombre,
        apellido:apellido,
        rut:rut,
        codigo:this.text
      })
      console.log(this.text)
      setTimeout(() => {
        this.text=this.text1
        console.log('Async operation has ended');
        
        this.db.collection('codigo').doc(rut).set({
          uid: uid,
          name:nombre,
          apellido:apellido,
          rut:rut,
          codigo:this.text
        })

        console.log(this.text)
      }, 180000);
    })

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
async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Entregue este codigo a su medico',
    subHeader: this.text,
    message: 'Caducara al usar o al pasar 10 min',
    buttons: ['OK']
  });

  await alert.present();
}

}




  