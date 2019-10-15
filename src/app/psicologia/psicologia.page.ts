import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { RestService } from '../servicios/rest.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-psicologia',
  templateUrl: './psicologia.page.html',
  styleUrls: ['./psicologia.page.scss'],
})
export class PsicologiaPage implements OnInit {
  public user: Object;
  public largo : Number;
  public nombre:string
  public apellido:string
  public i : number;
  public persona:number

  public  psicologia = new Array();
  constructor(private db : AngularFirestore,private restServices:RestService, private storage: Storage ) { }

  ngOnInit() {


      this.storage.get("rut").then((perona=>{
        this.persona=perona
        this.restServices.verpsicologia().subscribe((fichas)=>{
          //console.log(fichas)
          this.user = fichas;
          this.largo = Object.keys(this.user).length;      
          
                for( this.i = 0 ; this.i < this.largo ; this.i++  ){    
                         console.log(this.user[this.i].rut)         
                        if(this.user[this.i].rut == this.persona ){
                             
                                   this.psicologia.push(this.user[this.i])
                        }
                }       
          },error=>{
              // console.log("hola")
              }
          )
      }))
      //---------------------------------
      
        //------------------------------------------------------------------------------------------------ 
  
//-------------------------------------------   
  }
  

}
