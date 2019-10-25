import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GraficoReciclajePage } from './grafico-reciclaje.page';

const routes: Routes = [
  {
    path: '',
    component: GraficoReciclajePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GraficoReciclajePage]
})
export class GraficoReciclajePageModule {}
