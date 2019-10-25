import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';
import{ RestMetalService} from '../services/rest-metal.service'
import{dia}from '../modelos'
import{Storage} from '@ionic/storage'
@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.page.html',
  styleUrls: ['./graficos.page.scss'],
})
export class GraficosPage implements OnInit {


  constructor(private restMetales:RestMetalService,private route:Router,
    private storage:Storage) { }

  ngOnInit() {
    
    //this.datosfechas()
    this.useAnotherOneWithWebpack();

  }
  useAnotherOneWithWebpack() {
    
    this.storage.get("dias").then((val)=>{
   
    var ctx = (<any>document.getElementById('canvas-chart')).getContext('2d');

    var chart = new Chart(ctx, {
     
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
            datasets: [{
              label: "Kilos de metales reciclados x dia",
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              data: [val[0], val[1], val[2],val[3], val[4], val[5], val[6]],
              borderWidth: 4
            }]
       }
    });
  })

  }



}
