export class Objetivo{

    private alcanzado:boolean;
    private descripcion:string;

    constructor(){
        this.alcanzado=false
    }

    public alcanzar(){
        this.alcanzado=true
    }

    public setDescripocion(unaDescripcion:string){
        this.descripcion=unaDescripcion
    }

    public getDescripcion():string{
        return this.descripcion
    }
        

    public cumplido(){
        return this.alcanzado;
    }
    
}