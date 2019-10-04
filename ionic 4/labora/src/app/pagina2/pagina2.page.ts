import { Component, OnInit } from '@angular/core';
import { RestService } from '../servicios/rest.service';
import{kine} from '../models/ficha.models'
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import{rut} from '../models/ficha.models'
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
    textoBuscar ='';
    public nombre:string
    public apellido:string
  constructor(private restServices:RestService, private activatedRoute: ActivatedRoute, private storage: Storage,private db : AngularFirestore) { 

  }

  ngOnInit() {

    var user = firebase.auth().currentUser;
    var name, email, uid, rut;
   if (user != null) {
        name = user.displayName;
        email = user.email;
        uid = user.uid;
        console.log(email+" "+" "+uid)
      } 
      this.db.doc('users/'+uid).snapshotChanges().subscribe(data=>{
          rut = data.payload.get("rut");
          this.apellido = data.payload.get("apellido")
          this.nombre = data.payload.get("name")
           console.log(this.nombre+" "+this.apellido+" "+" "+rut)
          })

    this.storage.get('name').then((val) => {  
      this.stora.id_stora=val;
      this.restServices.seleccionarFichas(this.stora).subscribe((fichas)=>{
           this.user = fichas;
           this.user= Array.of(this.user)
        },error=>{
       // console.log("Hola")
       }
    )});

    
  }
}
