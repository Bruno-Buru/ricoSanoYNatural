import { Sexo } from "./Sexo.enum";

export class Paciente{

    private nombre:string;
    private apellido : string;
    private fechaDeNacimiento:Date;
    private sexo:Sexo;
    private disciplina:string

    public setNombre(unNombre:string){
        this.nombre=unNombre
    }

    public getNombre():string{
        return this.nombre
    }

    public setApellido(unApellido:string){
        this.apellido=unApellido   
    }

    public getApellido():string{
        return this.apellido
    }


    public setEdad(unaFecha:Date){
        this.fechaDeNacimiento=unaFecha  
    }

    public getEdad():Date{
        return this.fechaDeNacimiento
    }


    public setSexo(unSexo:Sexo){
        this.sexo=unSexo
    }

    public getSexo():Sexo{
        return this.sexo
    }


    public setDisciplina(unaDisciplina:string){
        this.disciplina=unaDisciplina 
    }

    public getDisciplina():string{
        return this.disciplina
    }




}