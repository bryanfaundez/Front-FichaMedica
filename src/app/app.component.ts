import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;

  constructor(
    private menu: MenuController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    router:Router
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
        title : "FichaKine",
        url   : "/pagina2",
        icon  : "walk"
      },
      {
        title : "Interconsulta",
        url   : "/lista-interconsulta",
        icon  : "medkit"
      },
      {
        title : "Psicologia",
        url   : "/psicologia",
        icon  : "happy"
      },
      {
        title : "File",
        url   : "/storage",
        icon  : "happy"
      },
    ]
  }
  openEnd() {
    console.log("cerraando")
    this.menu.close()
  }
}
