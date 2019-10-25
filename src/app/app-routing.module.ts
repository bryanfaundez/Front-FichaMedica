import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'metales', loadChildren: './metales/metales.module#MetalesPageModule' },
  { path: 'graficos', loadChildren: './graficos/graficos.module#GraficosPageModule' },
  { path: 'vidrio', loadChildren: './vidrio/vidrio.module#VidrioPageModule' },
  { path: 'plastico', loadChildren: './plastico/plastico.module#PlasticoPageModule' },
  { path: 'agregar-metales', loadChildren: './agregar-metales/agregar-metales.module#AgregarMetalesPageModule' },
  { path: 'editar-metales', loadChildren: './editar-metales/editar-metales.module#EditarMetalesPageModule' },
  { path: 'grafico-reciclaje', loadChildren: './grafico-reciclaje/grafico-reciclaje.module#GraficoReciclajePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
