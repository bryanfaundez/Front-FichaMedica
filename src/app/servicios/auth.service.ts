import { Injectable } from '@angular/core';
import{AngularFireAuth, AngularFireAuthModule} from "@angular/fire/auth"
import { promise } from 'protractor';
import { resolve, reject } from 'q';
import{Router}from "@angular/router"
import{ AngularFirestore  }from "@angular/fire/firestore"
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth,private router:Router, private db:AngularFirestore) { }
  
  login(email:string, password:string){

      return new Promise((resolve,rejected)=>{
            this.AFauth.auth.signInWithEmailAndPassword(email,password).then(user=>{
              resolve(user);
            }).catch(err=> rejected(err) );
      })
  }

  logout(){
    this.AFauth.auth.signOut().then(() =>{
      this.router.navigate(['/login']);
    })
  }
  register(email:string, password : string,name:string,apellido:string,rut:string){
    return new Promise((resolve,reject)=>{
      this.AFauth.auth.createUserWithEmailAndPassword(email,password).then(res=>{
        console.log(res.user.uid); 
        const uid =res.user.uid;
        this.db.collection('users').doc(uid).set({
          uid: uid,
          name:name,
          apellido:apellido,
          rut:rut
        })
        resolve(res)
      }).catch(err=>reject)
    })
  }
}
