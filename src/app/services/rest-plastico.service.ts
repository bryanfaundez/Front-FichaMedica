import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import{ plastics} from '../modelos'
@Injectable({
  providedIn: 'root'
})
export class RestPlasticoService {
  public url : string
  constructor(public http : HttpClient) { 
    this.url= 'http://104.197.10.193:3000/plastics/'
  }
   
  verPlastico():Observable<plastics[]>{
    return this.http.get<plastics[]>(this.url)
  }
        

}
