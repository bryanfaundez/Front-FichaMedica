import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import{ AuthGuard} from "../app/guards/auth.guard"
import{ nologinGuard} from "../app/guards/nologin.guard"
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate:[AuthGuard] },
  { path: 'pagina2', loadChildren: './pagina2/pagina2.module#Pagina2PageModule', canActivate:[AuthGuard] },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule',canActivate:[nologinGuard] },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule',canActivate:[nologinGuard] },
  { path: 'agregar', loadChildren: './agregar/agregar.module#AgregarPageModule', canActivate:[AuthGuard] },
  { path: 'lista-interconsulta', loadChildren: './lista-interconsulta/lista-interconsulta.module#ListaInterconsultaPageModule', canActivate:[AuthGuard] },
  { path: 'editar-interconsulta', loadChildren: './editar-interconsulta/editar-interconsulta.module#EditarInterconsultaPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 