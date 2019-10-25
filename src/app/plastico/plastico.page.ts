import { Component, OnInit } from '@angular/core';
import{ RestPlasticoService} from '../services/rest-plastico.service'
import { plastics } from '../modelos';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plastico',
  templateUrl: './plastico.page.html',
  styleUrls: ['./plastico.page.scss'],
})
export class PlasticoPage implements OnInit {
  public  plastico = new Array();
  private  volumen_tota : number
  public j : number
  constructor(private storage: Storage,private route:Router,private restPlastic:RestPlasticoService) { }

  ngOnInit() {
      this.plasticos();
  }

    plasticos(){

      this.restPlastic.verPlastico().subscribe((plast)=>{
        this.plastico=plast
        console.log(this.plastico[0].volumen)
        var acum = 0;
        for ( this.j = 0; this.j<this.plastico.length; this.j++){
          if( (this.plastico[this.j]) != null){
            acum=acum +(this.plastico[this.j].volumen)
          }                   
        }
        this.storage.set("platico",acum)
         console.log(acum)

         })
        
    }

}
