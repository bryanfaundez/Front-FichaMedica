export interface kine{
       id: number
       rut: number
       nombres: string
       paterno: string
       materno: string
       riesgo: string
       ergo_fecha_ing: Date
       ergo_fecha_egr: Date
       ergo_vol_ing: number 
       ergo_voml_ing: number
       ergo_voml_egr: number
       ergo_fcmax_egr: number
       ergo_pulso_ing: number
       ergo_pulso_egr: number
       ergo_ve_ing: number
       ergo_ve_egr: number
       ergo_mets_ing: number
       ergo_mets_egr: number
       created_at: Date
       updated_at: Date
} 

export class rut{
    id_ficha : number
    
    constructor(datos?:rut){
        if(datos != null  ){
            this.id_ficha=datos.id_ficha;
            return
        }
        this.id_ficha=this.id_ficha;
    }
}
export class stora{
    id_stora : number
    
    constructor(datos?:stora){
        if(datos != null  ){
            this.id_stora=datos.id_stora;
            return
        }
        this.id_stora=this.id_stora;
    }
}

export class codigo{
    id_codigo : number
    
    constructor(datos?:codigo){
        if(datos != null  ){
            this.id_codigo=datos.id_codigo;
            return
        }
        this.id_codigo=this.id_codigo;
    }
}

export interface interconsulta{
    nombre_medico : string
    nombre_paciente :string
    rut_paciente:number
    genero:string
    peso_paciente :  number
    altura_paciente : number
    presion_cardiaca : number
    observaciones_medicas:string
    fecha_atencion:Date

}

export class interconsulta{
    id: number
    nombre_medico : string
    nombre_paciente :string
    rut_paciente:number
    genero:string
    peso_paciente :  number
    altura_paciente : number
    presion_cardiaca : number
    observaciones_medicas:string
    fecha_atencion:Date

    constructor(datos?: interconsulta){
            if(datos != null ){
                this.nombre_medico=datos.nombre_medico;
                this.nombre_paciente=datos.nombre_paciente;
                this.rut_paciente=datos.rut_paciente;
                this.genero=datos.genero;
                this.peso_paciente=datos.peso_paciente;
                this.altura_paciente=datos.altura_paciente;
                this.presion_cardiaca=datos.presion_cardiaca;
                this.observaciones_medicas=datos.observaciones_medicas;
                this.fecha_atencion=datos.fecha_atencion;
                return
            }
            this.nombre_medico=this.nombre_medico;
            this.nombre_paciente=this.nombre_paciente;
            this.rut_paciente=this.rut_paciente;
            this.genero=this.genero;
            this.peso_paciente=this.peso_paciente;
            this.altura_paciente=this.altura_paciente;
            this.presion_cardiaca=this.presion_cardiaca;
            this.observaciones_medicas=this.observaciones_medicas;
            this.fecha_atencion=this.fecha_atencion;
    }

}