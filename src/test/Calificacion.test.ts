import { Objetivo } from "../main/Objetivo";
import { PlanAlimenticio } from "../main/PlanAlimenticio"
import { CalificacionObjetivos } from "../main/calificacion.enum";

test ("requerimiento 1 Permitir obtener la calificación final de un plan alimenticio, en base al cumplimiento de sus objetivos.EXCELENTE",()=>{

    const planAlimenticio = new PlanAlimenticio();
    const objetivo1= new Objetivo()
    const objetivo2= new Objetivo()
    const objetivo3= new Objetivo()
    const objetivo4= new Objetivo()
    const objetivo5= new Objetivo()

    objetivo1.alcanzar()
    objetivo2.alcanzar()
    objetivo3.alcanzar()
    objetivo4.alcanzar()
    objetivo5.alcanzar()


    planAlimenticio.agregarObjetivo(objetivo1)
    planAlimenticio.agregarObjetivo(objetivo2)
    planAlimenticio.agregarObjetivo(objetivo3)
    planAlimenticio.agregarObjetivo(objetivo4)
    planAlimenticio.agregarObjetivo(objetivo5)


expect(planAlimenticio.calcularResultado()).toBe(CalificacionObjetivos.EXCELENTE)

})



test ("requerimiento 1 Permitir obtener la calificación final de un plan alimenticio, en base al cumplimiento de sus objetivos.MUY_BUENA",()=>{

    const planAlimenticio = new PlanAlimenticio();
    const objetivo1= new Objetivo()
    const objetivo2= new Objetivo()
    const objetivo3= new Objetivo()
    const objetivo4= new Objetivo()
    const objetivo5= new Objetivo()

    objetivo1.alcanzar()
    objetivo2.alcanzar()
    objetivo3.alcanzar()
    objetivo4.alcanzar()
    
    


    planAlimenticio.agregarObjetivo(objetivo1)
    planAlimenticio.agregarObjetivo(objetivo2)
    planAlimenticio.agregarObjetivo(objetivo3)
    planAlimenticio.agregarObjetivo(objetivo4)
    planAlimenticio.agregarObjetivo(objetivo5)


expect(planAlimenticio.calcularResultado()).toBe(CalificacionObjetivos.MUY_BUENA)



}





)

test ("requerimiento 1 Permitir obtener la calificación final de un plan alimenticio, en base al cumplimiento de sus objetivos.BUENA",()=>{

    const planAlimenticio = new PlanAlimenticio();
    const objetivo1= new Objetivo()
    const objetivo2= new Objetivo()
    const objetivo3= new Objetivo()
    const objetivo4= new Objetivo()
    

    objetivo1.alcanzar()
    objetivo2.alcanzar()
    
  
    


    planAlimenticio.agregarObjetivo(objetivo1)
    planAlimenticio.agregarObjetivo(objetivo2)
    planAlimenticio.agregarObjetivo(objetivo3)
    planAlimenticio.agregarObjetivo(objetivo4)
    


expect(planAlimenticio.calcularResultado()).toBe(CalificacionObjetivos.BUENA)



})


test ("requerimiento 1 Permitir obtener la calificación final de un plan alimenticio, en base al cumplimiento de sus objetivos.regular",()=>{

    const planAlimenticio = new PlanAlimenticio();
    const objetivo1= new Objetivo()
    const objetivo2= new Objetivo()
    const objetivo3= new Objetivo()
    const objetivo4= new Objetivo()
    

    objetivo1.alcanzar()
    
   
  
    


    planAlimenticio.agregarObjetivo(objetivo1)
    planAlimenticio.agregarObjetivo(objetivo2)
    planAlimenticio.agregarObjetivo(objetivo3)
    planAlimenticio.agregarObjetivo(objetivo4)
    


expect(planAlimenticio.calcularResultado()).toBe(CalificacionObjetivos.REGULAR)



})
