import { Composicion } from "./Composicion";
import { TipoComida } from "./TipoComida.enum";
import { TipoComposicion } from "./TipoComposicion.enum";

export class Comida {
    private tipo:TipoComida;
    private descripcion:string;
    private composiciones:Composicion[]
    


    constructor(){
        this.composiciones=[]
    }


    public setTipo(untipo:TipoComida){
        this.tipo=untipo
    }

    public getTipo():TipoComida{
        return this.tipo
    }

    public setDescripocion(unaDescripcion:string){
        this.descripcion=unaDescripcion
    }

    public getDescripcion():string{
        return this.descripcion
    }
    



    public getComposicion():Composicion[]{
        return this.composiciones
    }


    public porcentajeDeProteinas():number{
        var composiocionesProteicas= this.composiciones.filter((composicion)=> composicion.getTipo() === TipoComposicion.PROTEINAS)
        var sumaDeComposicionesProteicas=0
        composiocionesProteicas.forEach(proteina => {
            sumaDeComposicionesProteicas += proteina.getPorcentaje()
        }  )
        return sumaDeComposicionesProteicas

    }

    public porcentajeDeVerde():number{
        var composiocionesVerdes= this.composiciones.filter((composicion)=> composicion.getTipo() === TipoComposicion.VEGETALES)
        var sumaDeComposicionesProteicas=0
        composiocionesVerdes.forEach(verde => {
            sumaDeComposicionesProteicas += verde.getPorcentaje()
        }  )
        return sumaDeComposicionesProteicas

    }


    public agregarComposicion(unaComposicion:Composicion){
        this.composiciones.push(unaComposicion)
    }


}