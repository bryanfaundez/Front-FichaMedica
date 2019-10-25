import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import{ Metales} from '../modelos'

@Injectable({
  providedIn: 'root'
})
export class RestVidrioService {
  public url : string
  constructor(public http : HttpClient) {
    this.url= 'http://35.193.42.58:3000/deposito_metales/'
   }
   verVidrio():Observable<Metales[]>{
    return this.http.get<Metales[]>(this.url)
  }
      
}
