import { Component, OnInit } from '@angular/core';
import { RestService } from '../servicios/rest.service';
import{rut, interconsulta} from '../models/ficha.models'
import { Storage } from '@ionic/storage';
import {Router } from '@angular/router';
import{AuthService}from "../servicios/auth.service"
import { ActionSheetController } from '@ionic/angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';

import * as firebase from 'firebase/app';
@Component({
  selector: 'app-lista-interconsulta',
  templateUrl: './lista-interconsulta.page.html',
  styleUrls: ['./lista-interconsulta.page.scss'],
})
export class ListaInterconsultaPage implements OnInit {
  rut:rut =   new rut();

  public user: Object;
  public largo : Number;
  public nombre:string
  public apellido:string
  public i : number;
  public  interconsulta = new Array();

  constructor(private restServices:RestService,  private route:Router , private storage: Storage ,
     public authservice: AuthService,public actionSheetController: ActionSheetController 
    ,private db : AngularFirestore) { }

  ngOnInit() {

    var user = firebase.auth().currentUser;
    var name, email, uid, rut,persona;
   if (user != null) {
        name = user.displayName;
        email = user.email;
        uid = user.uid;
        console.log(email+" "+" "+uid)
      } 

//-----------------------------------------------------------
this.db.doc('users/'+uid).snapshotChanges().subscribe(data=>{

  persona= data.payload.get("rut");
  this.apellido = data.payload.get("apellido")
  this.nombre = data.payload.get("name")
   console.log(this.nombre+" "+this.apellido+" "+" "+rut)
        this.storage.set("rut",persona)
        this.restServices.verInterconsulta().subscribe((fichas)=>{
          this.user = fichas;
          this.largo = Object.keys(this.user).length;      
                for( this.i = 0 ; this.i < this.largo ; this.i++  ){                 
                        if(this.user[this.i].rut_paciente == persona ){
                                   this.interconsulta.push(this.user[this.i])
                        }
                }       
          },error=>{
              // console.log("hola")
              }
          )
        //------------------------------------------------------------------------------------------------ 
    })
//-------------------------------------------   
  
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
