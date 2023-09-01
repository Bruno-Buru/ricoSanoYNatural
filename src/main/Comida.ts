import { Composicion } from "./Composicion";
import { TipoComida } from "./TipoComida.enum";

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







}