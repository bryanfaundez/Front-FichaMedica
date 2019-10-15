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


import { environment } from '../environments/environment';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore'

import { File } from '@ionic-native/file/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
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
    ReactiveFormsModule,
    AngularFirestoreModule
  ],

  providers: [
    StatusBar,
    SplashScreen,
    RestService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy,
     },
     AngularFirestore,
     FileChooser,
     File,
     { provide: FirestoreSettingsToken, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
