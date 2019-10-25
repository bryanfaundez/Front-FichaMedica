import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import{ Metales} from '../modelos'

@Injectable({
  providedIn: 'root'
})
export class RestMetalService {
 public url : string

  constructor(public http : HttpClient
          ) {
            this.url= 'http://35.193.42.58:3000/deposito_metales/'
           }

          agregarMetales(interconsulta:Metales): Observable<any>{
            return this.http.post<any>(this.url,interconsulta)
          
          }  
          editarMetales(interconsulta:Metales, id:string):Observable<any>{
            return this.http.patch<any>(this.url+id,interconsulta)
          }
          
          verMetalesa():Observable<Metales[]>{
            return this.http.get<Metales[]>(this.url)
          }
          eliminarMetales(Metales:number):Observable<any>{
            return this.http.delete<Metales[]>(this.url + Metales)
          }          

}
