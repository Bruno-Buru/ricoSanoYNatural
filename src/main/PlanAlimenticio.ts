import { Bebida } from "./Bebida";
import { Colacion } from "./Colacion";
import { Comida } from "./Comida";
import { Duracion } from "./Duracion.enum";
import { Objetivo } from "./Objetivo";
import { Paciente } from "./Paciente";
import { Profesional } from "./Profesional";

export class PlanAlimenticio{

    private nombre:string;
    private duracion:Duracion;
    private profesionalAsignado:Profesional;
    private pacienteAsigando:Paciente;
    private edadDelPaciente:number;
    private pesoActualPaciente:number;
    private medidaDeCintura:number
    private comidas: Comida[];
    private colaciones: Colacion[];
    private bebidas: Bebida[];
    private objetivos: Objetivo[];

    constructor(){
        this.comidas=[];
        this.colaciones=[];
        this.bebidas=[];
        this.objetivos=[];

    }

    



    public getComidas():Comida[]{
        return this.comidas
    }




    public getColacion():Colacion[]{
        return this.colaciones
    }

    public getBebidas():Bebida[]{
        return this.bebidas
    }

    public getObjetivos():Objetivo[]{
        return this.objetivos
    }



    public setNombre(unNombre:string){
        this.nombre=unNombre
    }

    public getNombre():string{
        return this.nombre
    }


    
    public setDuracion(unaDuracion:Duracion){
        this.duracion=unaDuracion
    }

    public getDuracion():Duracion{
        return this.duracion
    }


    public setProfesional(unProfesional:Profesional){
        this.profesionalAsignado=unProfesional
    }

    public getProfesional():Profesional{
        return this.profesionalAsignado
    }




    public setPaciente(unPaciente:Paciente){
        this.pacienteAsigando=unPaciente
    }

    public getPaciente():Paciente{
        return this.pacienteAsigando
    }
    

    public setEdadPaciente(unaEdad:number){
        this.edadDelPaciente=unaEdad
    }

    public getEdadDelPaciente():number{
        return this.edadDelPaciente
    }

    

    public setPesoPaciente(unPeso:number){
        this.pesoActualPaciente=unPeso
    }

    public getPesoPaciente():number{
        return this.pesoActualPaciente
    }



    public setMedidaDeCintura(unaMedida:number){
        this.medidaDeCintura=unaMedida
    }

    public getMedidaDeCintura():number{
        return this.medidaDeCintura
    }




}