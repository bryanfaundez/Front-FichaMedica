import { Component, OnInit } from '@angular/core';
import{AuthService}from "../servicios/auth.service"
import{Router, Route} from "@angular/router"
import{ AngularFirestore  }from "@angular/fire/firestore"
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string
  password:string
  constructor(private authService : AuthService,public router:Router, private db:AngularFirestore,private storage: Storage ) { }

  ngOnInit() {
      this.storage.clear()
  } 

  onSubmitLogin(){
    this.authService.login(this.email,this.password).then(res =>{
         
        this.router.navigate(['/home']);
    }).catch(err=> alert('los datos son incorrectos o no existe el usuario'))
  }

}
