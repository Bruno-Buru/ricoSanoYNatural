import { Bebida } from "../main/Bebida"

import { PlanAlimenticio } from "../main/PlanAlimenticio"

test ("requerimiento 7:",()=>{

    const planAlimenticio=new PlanAlimenticio()
    const bebida1=new Bebida()
    const bebida2=new Bebida()


    planAlimenticio.agregarBebida(bebida1)
    planAlimenticio.agregarBebida(bebida2)

    expect(planAlimenticio.cantBebidas()).toBe(2)


})