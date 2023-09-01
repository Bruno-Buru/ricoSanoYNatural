import { TipoComposicion } from "./TipoComposicion.enum";

export class Composicion{


    private tipo:TipoComposicion;
    private nombre:string;
    private porcentajes:number;



    public setPorcentaje(unPorcentaje:number){
        this.porcentajes=unPorcentaje
    }

    public getPorcentaje():number{
        return this.porcentajes
    }



    public setTipo(unTipo:TipoComposicion){
        this.tipo=unTipo
    }

    public getTipo():TipoComposicion{
        return this.tipo
    }


    public setNombre(unNombre:string){
        this.nombre=unNombre
    }

    public getNombre():string{
        return this.nombre
    }



}