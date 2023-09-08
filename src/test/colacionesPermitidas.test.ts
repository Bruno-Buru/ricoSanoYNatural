import { Colacion } from "../main/Colacion"
import { PlanAlimenticio } from "../main/PlanAlimenticio"

test ("requerimiento 6:",()=>{

    const planAlimenticio=new PlanAlimenticio()
    const colacion1=new Colacion()
    const colacion2=new Colacion()


    planAlimenticio.agregarColacion(colacion1)
    planAlimenticio.agregarColacion(colacion2)

    expect(planAlimenticio.cantColaciones()).toBe(2)


})