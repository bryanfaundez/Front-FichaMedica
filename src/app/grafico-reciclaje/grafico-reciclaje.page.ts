import { Component, OnInit } from '@angular/core';
import{Storage} from "@ionic/storage"
import { Chart } from 'chart.js';

@Component({
  selector: 'app-grafico-reciclaje',
  templateUrl: './grafico-reciclaje.page.html',
  styleUrls: ['./grafico-reciclaje.page.scss'],
})
export class GraficoReciclajePage implements OnInit {

  constructor(private storage: Storage) { }

  ngOnInit() {
    
    this.showChart();
  }
  showChart() {
    this.storage.get("volumen").then((vol)=>{
      this.storage.get("total_metal").then((total)=>{
    var tora
    tora=Math.trunc(total)
    var ctx = (<any>document.getElementById('yudhatp-chart')).getContext('2d');
    var chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
        labels: ["Metales $ ", "Plastico $"],
        datasets: [{
              label: "This is chart",
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
              data: [total*300, vol*500],
              borderWidth: 1
        }]
       }
    });
  })
})
  }

}
