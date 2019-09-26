import { Pipe, PipeTransform } from '@angular/core';
import{kine} from '../models/ficha.models'
@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(user:kine[],texto: string): kine[] {
    
    if(texto.length==0){return user}
    texto=texto.toLocaleLowerCase();
   return user.filter((kine)=>{
        return kine.riesgo.toLocaleLowerCase().includes(texto);
    })
  }

}
