import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from '../../environments/environment';
import{firebaseConfig} from "../../environments/environment";
import { Router } from '@angular/router';
import{Storage} from '@ionic/storage'

@Component({
  selector: 'app-storage',
  templateUrl: './storage.page.html',
  styleUrls: ['./storage.page.scss'],
})
export class StoragePage implements OnInit {

  constructor( private route:Router,private local_storage: Storage) { 
  
    
  }

  ngOnInit() {
    
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
   }
  }


}
