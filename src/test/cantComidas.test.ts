import { Comida } from "../main/Comida"
import { PlanAlimenticio } from "../main/PlanAlimenticio"

test ("requerimiento 2:Permitir saber la cantidad total de comidas de un plan alimenticio.",()=>{

const planAlimenticio = new PlanAlimenticio();

const comida1 = new Comida()
const comida2 = new Comida()
const comida3 = new Comida()
    

planAlimenticio.agregarComida(comida1)
planAlimenticio.agregarComida(comida2)
planAlimenticio.agregarComida(comida3)


expect(planAlimenticio.cantComidas()).toBe(3)
})