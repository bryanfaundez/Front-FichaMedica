import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { kine, stora, interconsulta } from '../models/ficha.models';
import{rut} from 'src/app/models/ficha.models';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(public http : HttpClient) { }
vari : string

verFichas( ) : Observable <kine[]> {

return this.http.get<kine[]>("http://localhost:3000/datosmedicos")
} 

seleccionarFichas(stora:stora ) : Observable <kine[]> {
  console.log(stora)
  return this.http.get<kine[]>("http://localhost:3000/datosmedicos/" + stora.id_stora)
  } 

agregarInterconsulta(interconsulta:interconsulta): Observable<any>{
  return this.http.post<any>("http://localhost:3000/interconsulta",interconsulta)

}  
}
