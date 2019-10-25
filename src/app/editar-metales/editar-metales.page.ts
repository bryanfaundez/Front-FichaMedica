import { Component, OnInit } from '@angular/core';
import {metales} from '../modelos'
import { RestMetalService } from '../services/rest-metal.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-editar-metales',
  templateUrl: './editar-metales.page.html',
  styleUrls: ['./editar-metales.page.scss'],
})
export class EditarMetalesPage implements OnInit {
  metal:metales = new metales();
  public metales: Object
 
  constructor(private restMetales:RestMetalService,private route:Router,private storage: Storage) { }

  ngOnInit() {
    this.storage.get('metales').then((val) => {  
      this.metales = val
       this.metales= Array.of(this.metales)
       console.log(this.metales)
       
     });
    
  }
  editar(metales : metales ){
    
console.log(metales)
    this.metal=metales
    console.log(metales.id)
 this.restMetales.editarMetales(this.metal,(this.metal.id).toString()).subscribe(()=>{
    alert("Editado con exito")
    this.route.navigateByUrl("/metales");
    
   },erro=>{
    this.route.navigateByUrl("/");
  
  }) 
  }

}
