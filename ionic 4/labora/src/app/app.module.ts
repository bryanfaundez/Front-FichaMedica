import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RestService } from './servicios/rest.service';
import { HttpClient } from 'selenium-webdriver/http';
import{HttpClientModule} from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import{PipesModule}from '../app/pipes/pipes.module'

import{firebaseConfig} from "../environments/environment";
import{AngularFireModule}from "@angular/fire";
import{AngularFireAuthModule} from "@angular/fire/auth"
import{AngularFirestore}from "@angular/fire/firestore"


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    PipesModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    ReactiveFormsModule
  ],

  providers: [
    StatusBar,
    SplashScreen,
    RestService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy,
     },
     AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
