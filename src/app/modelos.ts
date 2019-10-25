export interface Metales {
    kilos:number
    fecha_ingreso:Date
    dia:string

}
export class metales{
    id:number
    kilos : number
    fecha_ingreso:Date
    dia:string
    constructor(datos?:metales){
        if(datos != null  ){
            this.kilos=datos.kilos;
            this.fecha_ingreso=datos.fecha_ingreso
            this.dia=datos.dia
            return
        }
        this.dia=this.dia
        this.kilos=this.kilos;
        this.fecha_ingreso=this.fecha_ingreso
    }
}
export class dia{
    dia:Date
    constructor(datos?:dia){
        if(datos != null  ){
            this.dia=datos.dia;
                    return
        }
        this.dia=this.dia;
        
    }
}
export interface plastics {
    volumen:number
    created_at:Date

}
export class plastics{
    id:number
    volumen : number
    created_at:Date
    
    constructor(datos?:plastics){
        if(datos != null  ){
            this.volumen=datos.volumen;
            this.created_at=datos.created_at
            
            return
        }
        this.volumen=this.volumen
        this.created_at=this.created_at;
       
    }
}