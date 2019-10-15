import { Component, OnInit } from '@angular/core';
import{ AuthService}from '../servicios/auth.service'
import{Router} from '@angular/router'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

    public name : string
    public apellido : string
    public rut : string 
    public email : string 
    public password :string

  constructor( private auth:AuthService, private router:Router) { }

  ngOnInit() {
  }

  OnSubmitRegister(){
      this.auth.register(this.email,this.password,this.name,this.apellido,this.rut).then(auth=>{
        this.router.navigate(['home'])
        console.log(auth)
      }).catch(err=>alert("No se pudo registar por favor revisar los datos ingresados")) 
  }

}
