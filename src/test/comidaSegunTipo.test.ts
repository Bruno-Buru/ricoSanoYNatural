import { Comida } from "../main/Comida"
import { PlanAlimenticio } from "../main/PlanAlimenticio"
import { TipoComida } from "../main/TipoComida.enum"

test("requerimiento 3:",()=>{

const planAlimenticio= new PlanAlimenticio()

const comida1 = new Comida()
const comida2 = new Comida()
const comida3 = new Comida()
const comida4 = new Comida()
const comida5 = new Comida()
const comida6 = new Comida()

planAlimenticio.agregarComida(comida1)
planAlimenticio.agregarComida(comida2)
planAlimenticio.agregarComida(comida3)
planAlimenticio.agregarComida(comida4)
planAlimenticio.agregarComida(comida5)
planAlimenticio.agregarComida(comida6)

comida1.setTipo(TipoComida.ALMUERZO)
comida2.setTipo(TipoComida.CENA)
comida3.setTipo(TipoComida.DESAYUNO)
comida4.setTipo(TipoComida.MERIENDA)
comida5.setTipo(TipoComida.DESAYUNO)
comida6.setTipo(TipoComida.DESAYUNO)



expect(planAlimenticio.cantDeComidaSegunTipo(TipoComida.CENA,TipoComida.DESAYUNO)).toBe(4)







})