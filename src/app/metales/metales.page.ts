import { Component, OnInit } from '@angular/core';
import{ RestMetalService} from '../services/rest-metal.service'
import { metales } from '../modelos';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-metales',
  templateUrl: './metales.page.html',
  styleUrls: ['./metales.page.scss'],
})
export class MetalesPage implements OnInit {
  
  public  metales = new Array();

  constructor( private restMetales:RestMetalService,private storage: Storage,private route:Router) { }

  ngOnInit() {

   this.restMetales.verMetalesa().subscribe((metal)=>{
        this.metales=metal
        console.log(this.metales)
   })

  }
  EditarMetales(metales:metales){   
    //console.log(interconsulta);
    this.storage.set('metales',metales)
    this.storage.get('metales').then((val) => {
    });
    this.route.navigateByUrl("/editar-metales");  
   
}
EliminarInterconsulta(id_metal:number){
  this.restMetales.eliminarMetales(id_metal).subscribe(data=>{
    alert("Metal  eliminado")
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

}
