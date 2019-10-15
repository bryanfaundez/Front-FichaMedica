import { Component, OnInit } from '@angular/core';
import { RestService } from '../servicios/rest.service';
import{kine} from '../models/ficha.models'
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import{rut} from '../models/ficha.models'
import{codigo} from '../models/ficha.models'
import{stora} from '../models/ficha.models'
import {MatTableDataSource} from '@angular/material/table'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';

import * as firebase from 'firebase/app';
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
    public nombre:string
    public apellido:string
    public i : number;
    public  lista = new Array();
    codig:codigo=new codigo();

  constructor(private restServices:RestService, private activatedRoute: ActivatedRoute,
     private storage: Storage,private db : AngularFirestore) { 

  }

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
      //---------------------------------
      
        this.restServices.verFichas().subscribe((fichas)=>{
          this.user = fichas;
          this.largo = Object.keys(this.user).length;      
                for( this.i = 0 ; this.i < this.largo ; this.i++  ){                 
                        if(this.user[this.i].rut == persona ){
                                   this.lista.push(this.user[this.i])
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
}
