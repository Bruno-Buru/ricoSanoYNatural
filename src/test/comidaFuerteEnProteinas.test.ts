import { Comida } from "../main/Comida";
import { Composicion } from "../main/Composicion";
import { PlanAlimenticio } from "../main/PlanAlimenticio"
import { TipoComida } from "../main/TipoComida.enum";
import { TipoComposicion } from '../main/TipoComposicion.enum';

test("Requerimiento 4:Permitir saber si el plan alimenticio es “fuerte en proteínas”: ",()=>{

    const planAlimenticio = new PlanAlimenticio;

    const comida1 = new Comida()
    const comida2 = new Comida()
   
    
    const composicion1 = new Composicion();
    const composicion2 = new Composicion();
    const composicion3 = new Composicion();
    const composicion4 = new Composicion();
    

    composicion1.setNombre("milanesa")
    composicion1.setPorcentaje(100)
    composicion1.setTipo(TipoComposicion.PROTEINAS)

    composicion2.setNombre("arroz")
    composicion2.setPorcentaje(20)
    composicion2.setTipo(TipoComposicion.CARBOHIDRATOS)

    comida1.agregarComposicion(composicion1)
    comida1.agregarComposicion(composicion2)

    composicion3.setNombre("carne")
    composicion3.setPorcentaje(100);
    composicion3.setTipo(TipoComposicion.PROTEINAS)

    composicion4.setNombre("papas")
    composicion4.setPorcentaje(10)
    composicion4.setTipo(TipoComposicion.CARBOHIDRATOS)

    comida2.agregarComposicion(composicion3)
    comida2.agregarComposicion(composicion4)

    comida1.setTipo(TipoComida.ALMUERZO)
    comida2.setTipo(TipoComida.CENA)
    

    planAlimenticio.agregarComida(comida1)
    planAlimenticio.agregarComida(comida2)
    
    expect(planAlimenticio.fuerteEnProteinas()).toBe(true)
    
})