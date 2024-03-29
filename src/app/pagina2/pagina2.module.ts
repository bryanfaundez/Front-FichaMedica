import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Pagina2Page } from './pagina2.page';
import{PipesModule}from '../pipes/pipes.module'
const routes: Routes = [
  {
    path: '',
    component: Pagina2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Pagina2Page]
})
export class Pagina2PageModule {}
