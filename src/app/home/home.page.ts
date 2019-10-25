import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ RestMetalService} from '../services/rest-metal.service'
import{Storage} from '@ionic/storage'
import{ RestPlasticoService} from '../services/rest-plastico.service'
import { plastics } from '../modelos';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public  metales = new Array();

  public  lunes : Number;
  public  martes : Number;
  public  miercoles : Number;
  public  jueves : Number;
  public  viernes : Number;
  public  sabado : Number;
  public  domingo : Number;

  public  n_metales: number
  public  n_lunes =new Array(); 
  public  n_martes =new Array(); 
  public  n_miercoles =new Array(); 
  public  n_jueves =new Array(); 
  public  n_viernes=new Array(); 
  public  n_sabado =new Array(); 
  public  n_domingo =new Array(); 

  public day = new Array
  
  public largo : Number;
  public i : number;
  public  plastico = new Array();
  private  volumen_tota : number
  public j : number
  reducer = (accumulator, currentValue) => accumulator + currentValue;

 
  constructor(private restMetales:RestMetalService,private route:Router,
    private storage:Storage,private restPlastic:RestPlasticoService) { }
  ngOnInit() {
    this.pla();
    
    
  
  }
  pla(){

    this.restPlastic.verPlastico().subscribe((plast)=>{
      this.plastico=plast
      var acum = 0;
      for ( this.j = 0; this.j<this.plastico.length; this.j++){
        if( (this.plastico[this.j]) != null){
          acum=acum +(this.plastico[this.j].volumen)
        }                   
      }
     this.volumen_tota=acum
    //  console.log(this.volumen_tota )
        
       })
       this.metales_total();
  }
 
  metales_total(){
      
    this.restMetales.verMetalesa().subscribe((metal)=>{
      this.metales=metal
      this.largo = Object.keys(metal).length; 
      for(var i=0;i<this.largo;i++){
                   if(this.metales[i].dia=="lunes"){
                         
                      //    this.lunes.push(this.metales[i])
                          //this.n_lunes= this.n_lunes+ this.metales[i].kilos
                          this.n_lunes.push(this.metales[i].kilos)
                         // console.log(this.lunes)
                      }
                      else if(this.metales[i].dia=="martes"){
                       // this.martes.push(this.metales[i])
                        this.n_martes.push(this.metales[i].kilos)
                       // this.n_martes= this.n_martes+this.metales[i].kilos
                    }
                    else if(this.metales[i].dia=="miercoles"){
                    //  this.miercoles.push(this.metales[i])
                      this.n_miercoles.push(this.metales[i].kilos)
                     // this.n_miercoles= this.n_miercoles+this.metales[i].kilos
                  }
                  else if(this.metales[i].dia=="jueves"){
                   // this.jueves.push(this.metales[i])
                    this.n_jueves.push(this.metales[i].kilos)
                   // this.n_jueves= this.n_jueves+this.metales[i].kilos
                }
                else if(this.metales[i].dia=="viernes"){
                //  this.viernes.push(this.metales[i])
                  this.n_viernes.push(this.metales[i].kilos)
                 // this.n_viernes= this.n_viernes+this.metales[i].kilos
              }
              else if(this.metales[i].dia=="sabado"){
               // this.sabado.push(this.metales[i])
                this.n_sabado.push(this.metales[i].kilos)
               // this.n_sabado= this.n_sabado+this.metales[i].kilos
            }
            else if(this.metales[i].dia=="domingo"){
             // this.domingo.push(this.metales[i])
              this.n_domingo.push(this.metales[i].kilos)
              //this.n_domingo=  this.n_domingo+this.metales[i].kilos
            }
            
      }
      
  
      var acum = 0;
      for (var j = 0; j<=this.n_lunes.length; j++){
        if( (this.n_lunes[j]) != null){
            acum=acum +(this.n_lunes[j])
        }
      }
      this.day.push(acum)
  
  
        var acum = 0;
        for (var j = 0; j<=this.n_martes.length; j++){
          if( (this.n_martes[j]) != null){
              acum=acum +(this.n_martes[j])
          }
        }
        this.day.push(acum)
        var acum = 0;
        for (var j = 0; j<=this.n_miercoles.length; j++){
          if( (this.n_miercoles[j]) != null){
              acum=acum +(this.n_miercoles[j])
          }
        }
        this.day.push(acum)
        var acum = 0;
        for (var j = 0; j<=this.n_jueves.length; j++){
          if( (this.n_jueves[j]) != null){
              acum=acum +(this.n_jueves[j])
          }
        }
        this.day.push(acum)
        var acum = 0;
        for (var j = 0; j<=this.n_viernes.length; j++){
          if( (this.n_viernes[j]) != null){
              acum=acum +(this.n_viernes[j])
          }
        }
        this.day.push(acum)
  
        var acum = 0;
        for (var j = 0; j<=this.n_sabado.length; j++){
          if( (this.n_sabado[j]) != null){
              acum=acum +(this.n_sabado[j])
          }
        }
        this.day.push(acum)
   
        var acum = 0;
        for (var j = 0; j<=this.n_domingo.length; j++){
          if( (this.n_domingo[j]) != null){
              acum=acum +(this.n_domingo[j])
          }
        }
        
        this.day.push(acum)
        var acum = 0;
        for (var j = 0; j<=this.day.length; j++){
          if( (this.day[j]) != null){
              acum=acum +(this.day[j])
          }
        }
        this.storage.set("volumen",this.volumen_tota)
        this.storage.set("total_metal",acum)
        this.storage.set("dias",this.day)
  
  
  
  })
  
  
  }

}
