import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  navigate2 : any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router 
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  sideMenu(){
    this.navigate =
    [
      {
        title : "Home",
        url   : "/home",
        icon  : "home"
      },
      {
        title : "Metales",
        children:[
          {
           title:"Lista-Editar-Borrar metales ",
            url   : "/metales",
           icon  : "build"
          },
          {
            title : "Grafico de metales",
            url   : "/graficos",
            icon  : "analytics"
          },
          {
            title : "Agregar metales",
            url   : "/agregar-metales",
            icon  : "add-circle"
          },
        ]
        
      },
      {
        title : "Plastico",
        url   : "/plastico",
        icon  : "wine"
      },
      {
        title : "Vidrio",
        url   : "/vidrio",
        icon  : "cube"
      },
      {
        title : "Grafico dinero recuadado",
        url   : "/grafico-reciclaje",
        icon  : "analytics"
      }
   
    ]


    this.navigate2 =
    [
      {
        title : "Home",
        url   : "/home",
        icon  : "home"
      },
      {
        title : "Plastico",
        url   : "/plastico",
        icon  : "wine"
      },
      {
        title : "Metales",
        url   : "/metales",
        icon  : "build"
      },
      {
        title : "Grafico dinero recuadado",
        url   : "/grafico-reciclaje",
        icon  : "analytics"
      },
      
   
    ]
  }
}
