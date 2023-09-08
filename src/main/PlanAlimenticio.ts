import { Bebida } from "./Bebida";
import { Colacion } from "./Colacion";
import { Comida } from "./Comida";
import { Composicion } from "./Composicion";
import { Duracion } from "./Duracion.enum";
import { Objetivo } from './Objetivo';
import { Paciente } from "./Paciente";
import { Profesional } from "./Profesional";
import { TipoComida } from './TipoComida.enum';
import { CalificacionObjetivos } from './calificacion.enum';

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


    public cantDeObjetivos():number{
        return this.objetivos.length

    }



    public calcularResultado():CalificacionObjetivos{
        let cantidadObjetivos = this.cantDeObjetivos()
        let cantidadDeObjetivosCumplidos = this.objetivos.filter((objetivo)=> objetivo.cumplido()).length
        if(cantidadObjetivos===cantidadDeObjetivosCumplidos){
          return CalificacionObjetivos.EXCELENTE
        }
          
        let porcentajeObjetivos = (cantidadDeObjetivosCumplidos
            *100)/cantidadObjetivos

        if(porcentajeObjetivos >= 60){
            return CalificacionObjetivos.MUY_BUENA
        }

        if(porcentajeObjetivos <60 && porcentajeObjetivos >=50){
            return CalificacionObjetivos.BUENA
        }
        else{
            return CalificacionObjetivos.REGULAR
        }
        
        
    }



    public agregarObjetivo(objetivo:Objetivo){
        this.objetivos.push(objetivo)
    }


    public agregarComida(comida:Comida){
        this.comidas.push(comida)
    }

    public cantComidas(){
        return this.comidas.length
    }
   

    public comidasDeTipo(comida1:TipoComida,comida2:TipoComida){
        return this.comidas.filter((comida)=>comida.getTipo() == comida1 || comida.getTipo() == comida2)
    }



    public cantDeComidaSegunTipo(comida1:TipoComida,comida2:TipoComida){

        return this.comidas.filter((comida)=>comida.getTipo() == comida1 || comida.getTipo() == comida2).length

    }

    public fuerteEnProteinas(){
        var comidasAC= this.comidasDeTipo(TipoComida.ALMUERZO,TipoComida.CENA)

        var porcentajeProteina=0

        comidasAC.forEach((comida) => {

        porcentajeProteina  += comida.porcentajeDeProteinas()

        })

        var promedio= porcentajeProteina/comidasAC.length

        return promedio >50;
    }


    public bienVerde(){
        var comidasAC= this.comidasDeTipo(TipoComida.ALMUERZO,TipoComida.CENA)

        var porcentajeVerde=0

        comidasAC.forEach((comida) => {

        porcentajeVerde  += comida.porcentajeDeVerde()

        })

        var promedio= porcentajeVerde/comidasAC.length

        return promedio >35;
    }
    

    

    
    public agregarColacion(colacion:Colacion){
        this.colaciones.push(colacion)
    }

    public agregarBebida(bebida:Bebida){
        this.bebidas.push(bebida)
    }


    public cantColaciones(){
        return this.colaciones.length
    }

    public cantBebidas(){
        return this.bebidas.length
    }
}