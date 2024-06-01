import { IProduct, ProductsYumbo } from "../types/interfaces"

// TODO: falta validar Servired
const Servired = ["CHANCE", "PAGAMAS", "PAGATODO", "GANE5", "PAGATODO_JAMUNDI", "CHOLADITO", "PATA_MILLONARIA", "DOBLECHANCE", "CHANCE_MILLONARIO", "ASTRO", "LOTERIA_FISICA", "LOTERIA_VIRTUAL", "BETPLAY", "GIROS", "SOAT", "RECAUDOS", "RECARGAS", "ZONA", "CCOSTO", "SUCURSAL", "MT_CHANCE", "PROMEDIO_DIARIO_CHANCE", "MT_PAGAMAS", "PROMEDIO_DIARIO_PAGAMAS", "MT_PAGATODO", "PROMEDIO_DIARIO_PAGATODO", "MT_GANE5", "PROMEDIO_DIARIO_GANE5", "MT_PAGATODO_JAMUNDI", "PROMEDIO_DIARIO_PGTJAMUNDI", "MT_CHOLADITO", "PROMEDIO_DIARIO_CHOLADITO", "MT_PATA_MILLONARIA", "PROMEDIO_DIARIO_PATAMI", "MT_DOBLECHANCE", "PROMEDIO_DIARIO_DOBLECHANCE", "MT_CHANCE_MILLONARIO", "PROMEDIO_DIARIO_CHMILL", "MT_ASTRO", "PROMEDIO_DIARIO_ASTRO", "MT_LOTERIA_FISICA", "PROMEDIO_DIARIO_LF", "MT_LOTERIA_VIRTUAL", "PROMEDIO_DIARIO_LV", "MT_BETPLAY", "PROMEDIO_DIARIO_BETPLAY", "MT_GIROS", "PROMEDIO_DIARIO_GIROS", "MT_SOAT", "PROMEDIO_DIARIO_SOAT", "MT_RECAUDOS", "PROMEDIO_DIARIO_RECAUDOS", "MT_RECARGAS", "PROMEDIO_DIARIO_RECARGAS", "PROMO1", "META_PROMO1", "PROMO2", "META_PROMO2"]

// TODO: falta validar Multired
const Multired = ["ASTRO", "CHANCE", "CHANCE_MILLONARIO", "DOBLECHANCE", "PAGAMAS", "BETPLAY", "PAGATODO", "RECARGAS", "GANE5", "PATA_MILLONARIA", "LOTERIA_VIRTUAL", "LOTERIA_FISICA", "PROMO1", "PROMO2", "SOAT", "GIROS", "RECAUDOS", "PROMEDIO_DIARIO_CHANCE", "PROMEDIO_DIARIO_ASTRO", "PROMEDIO_DIARIO_PAGAMAS", "PROMEDIO_DIARIO_PAGATODO", "PROMEDIO_DIARIO_GANE5", "PROMEDIO_DIARIO_PATAMI", "PROMEDIO_DIARIO_DOBLECHANCE", "PROMEDIO_DIARIO_CHMILL", "PROMEDIO_DIARIO_LF", "PROMEDIO_DIARIO_BETPLAY", "PROMEDIO_DIARIO_GIROS", "PROMEDIO_DIARIO_SOAT", "PROMEDIO_DIARIO_RECAUDOS", "PROMEDIO_DIARIO_RECARGAS", "PROMEDIO_DIARIO_LV", "MT_CHANCE", "MT_PAGAMAS", "MT_PAGATODO", "MT_GANE5", "MT_PATA_MILLONARIA", "MT_DOBLECHANCE", "MT_CHANCE_MILLONARIO", "MT_ASTRO", "MT_LOTERIA_FISICA", "MT_LOTERIA_VIRTUAL", "MT_BETPLAY", "MT_GIROS", "MT_SOAT", "MT_RECAUDOS", "MT_RECARGAS", "META_PROMO1", "META_PROMO2"]

export function ProductsReturn(zona: string) {
  if (zona === '39628') return Multired
  if (zona === '39627') return Servired
}

function calcularPorcentaje(actual: number, metaDia: number) {
  const percentage = (actual * 100) / metaDia
  return Math.min(100, percentage).toFixed(2)
}

function calcularPorcentajeSinLimite(actual: number, metaDia: number) {
  const percentage = (actual * 100) / metaDia
  return percentage.toFixed(2)
}

export function parsearInfoArrayMultired(data: ProductsYumbo) {
  const ASTRO = {
    id: 1,
    producto: 'Astro',
    ventaActual: data.ASTRO,
    aspiracionDia: data.PROMEDIO_DIARIO_ASTRO,
    porcentaje: calcularPorcentaje(data.ASTRO, data.PROMEDIO_DIARIO_ASTRO),
    porcentaje2: calcularPorcentajeSinLimite(data.ASTRO, data.PROMEDIO_DIARIO_ASTRO)
  }
  const CHANCE = {
    id: 2,
    producto: 'Chance',
    ventaActual: data.CHANCE,
    aspiracionDia: data.PROMEDIO_DIARIO_CHANCE,
    porcentaje: calcularPorcentaje(data.CHANCE, data.PROMEDIO_DIARIO_CHANCE),
    porcentaje2: calcularPorcentajeSinLimite(data.CHANCE, data.PROMEDIO_DIARIO_CHANCE)
  }
  const CHANCE_MILLONARIO = {
    id: 3,
    producto: 'Chance Millonario',
    ventaActual: data.CHANCE_MILLONARIO,
    aspiracionDia: data.PROMEDIO_DIARIO_CHMILL,
    porcentaje: calcularPorcentaje(data.CHANCE_MILLONARIO, data.PROMEDIO_DIARIO_CHMILL),
    porcentaje2: calcularPorcentajeSinLimite(data.CHANCE_MILLONARIO, data.PROMEDIO_DIARIO_CHMILL)
  }
  const DOBLECHANCE = {
    id: 4,
    producto: 'Doble Chance',
    ventaActual: data.DOBLECHANCE,
    aspiracionDia: data.PROMEDIO_DIARIO_DOBLECHANCE,
    porcentaje: calcularPorcentaje(data.DOBLECHANCE, data.PROMEDIO_DIARIO_DOBLECHANCE),
    porcentaje2: calcularPorcentajeSinLimite(data.DOBLECHANCE, data.PROMEDIO_DIARIO_DOBLECHANCE)
  }
  const PAGAMAS = {
    id: 5,
    producto: 'Paga Más',
    ventaActual: data.PAGAMAS,
    aspiracionDia: data.PROMEDIO_DIARIO_PAGAMAS,
    porcentaje: calcularPorcentaje(data.PAGAMAS, data.PROMEDIO_DIARIO_PAGAMAS),
    porcentaje2: calcularPorcentajeSinLimite(data.PAGAMAS, data.PROMEDIO_DIARIO_PAGAMAS)
  }
  const BETPLAY = {
    id: 6,
    producto: 'Betplay',
    ventaActual: data.BETPLAY,
    aspiracionDia: data.PROMEDIO_DIARIO_BETPLAY,
    porcentaje: calcularPorcentaje(data.BETPLAY, data.PROMEDIO_DIARIO_BETPLAY),
    porcentaje2: calcularPorcentajeSinLimite(data.BETPLAY, data.PROMEDIO_DIARIO_BETPLAY)
  }
  const PAGATODO = {
    id: 7,
    producto: 'Paga Todo',
    ventaActual: data.PAGATODO,
    aspiracionDia: data.PROMEDIO_DIARIO_PAGATODO,
    porcentaje: calcularPorcentaje(data.PAGATODO, data.PROMEDIO_DIARIO_PAGATODO),
    porcentaje2: calcularPorcentajeSinLimite(data.PAGATODO, data.PROMEDIO_DIARIO_PAGATODO)
  }
  const RECARGAS = {
    id: 8,
    producto: 'Recargas',
    ventaActual: data.RECARGAS,
    aspiracionDia: data.PROMEDIO_DIARIO_RECARGAS,
    porcentaje: calcularPorcentaje(data.RECARGAS, data.PROMEDIO_DIARIO_RECARGAS),
    porcentaje2: calcularPorcentajeSinLimite(data.RECARGAS, data.PROMEDIO_DIARIO_RECARGAS)
  }
  const GANE5 = {
    id: 9,
    producto: 'Gane 5',
    ventaActual: data.GANE5,
    aspiracionDia: data.PROMEDIO_DIARIO_GANE5,
    porcentaje: calcularPorcentaje(data.GANE5, data.PROMEDIO_DIARIO_GANE5),
    porcentaje2: calcularPorcentajeSinLimite(data.GANE5, data.PROMEDIO_DIARIO_GANE5)
  }
  const PATA_MILLONARIA = {
    id: 10,
    producto: 'Pata Millonaria',
    ventaActual: data.PATA_MILLONARIA,
    aspiracionDia: data.PROMEDIO_DIARIO_PATAMI,
    porcentaje: calcularPorcentaje(data.PATA_MILLONARIA, data.PROMEDIO_DIARIO_PATAMI),
    porcentaje2: calcularPorcentajeSinLimite(data.PATA_MILLONARIA, data.PROMEDIO_DIARIO_PATAMI)
  }
  const LOTERIA_VIRTUAL = {
    id: 11,
    producto: 'Lotería Virtual',
    ventaActual: data.LOTERIA_VIRTUAL,
    aspiracionDia: data.PROMEDIO_DIARIO_LV,
    porcentaje: calcularPorcentaje(data.LOTERIA_VIRTUAL, data.PROMEDIO_DIARIO_LV),
    porcentaje2: calcularPorcentajeSinLimite(data.LOTERIA_VIRTUAL, data.PROMEDIO_DIARIO_LV)
  }
  const LOTERIA_FISICA = {
    id: 12,
    producto: 'Lotería Física',
    ventaActual: data.LOTERIA_FISICA,
    aspiracionDia: data.PROMEDIO_DIARIO_LF,
    porcentaje: calcularPorcentaje(data.LOTERIA_FISICA, data.PROMEDIO_DIARIO_LF),
    porcentaje2: calcularPorcentajeSinLimite(data.LOTERIA_FISICA, data.PROMEDIO_DIARIO_LF)
  }
  const PROMO1 = {
    id: 13,
    producto: 'Promo 1',
    ventaActual: data.PROMO1,
    aspiracionDia: data.META_PROMO1,
    porcentaje: calcularPorcentaje(data.PROMO1, data.META_PROMO1),
    porcentaje2: calcularPorcentajeSinLimite(data.PROMO1, data.META_PROMO1)
  }
  const PROMO2 = {
    id: 14,
    producto: 'Promo 2',
    ventaActual: data.PROMO2,
    aspiracionDia: data.META_PROMO2,
    porcentaje: calcularPorcentaje(data.PROMO2, data.META_PROMO2),
    porcentaje2: calcularPorcentajeSinLimite(data.PROMO2, data.META_PROMO2)
  }
  const SOAT = {
    id: 15,
    producto: 'Soat',
    ventaActual: data.SOAT,
    aspiracionDia: data.PROMEDIO_DIARIO_SOAT,
    porcentaje: calcularPorcentaje(data.SOAT, data.PROMEDIO_DIARIO_SOAT),
    porcentaje2: calcularPorcentajeSinLimite(data.SOAT, data.PROMEDIO_DIARIO_SOAT)
  }
  const GIROS = {
    id: 16,
    producto: 'Giros',
    ventaActual: data.GIROS,
    aspiracionDia: data.PROMEDIO_DIARIO_GIROS,
    porcentaje: calcularPorcentaje(data.GIROS, data.PROMEDIO_DIARIO_GIROS),
    porcentaje2: calcularPorcentajeSinLimite(data.GIROS, data.PROMEDIO_DIARIO_GIROS)
  }
  const RECAUDOS = {
    id: 17,
    producto: 'Recaudos',
    ventaActual: data.RECAUDOS,
    aspiracionDia: data.PROMEDIO_DIARIO_RECAUDOS,
    porcentaje: calcularPorcentaje(data.RECAUDOS, data.PROMEDIO_DIARIO_RECAUDOS),
    porcentaje2: calcularPorcentajeSinLimite(data.RECAUDOS, data.PROMEDIO_DIARIO_RECAUDOS)
  }

  let ventaActualAzarCal = 0; let aspiracionDiaAzarCal = 0
  ventaActualAzarCal =
    data?.CHANCE +
    data?.PAGAMAS +
    data?.PAGATODO +
    data?.GANE5 +
    data?.PATA_MILLONARIA +
    data?.DOBLECHANCE +
    data?.CHANCE_MILLONARIO

  aspiracionDiaAzarCal =
    data?.PROMEDIO_DIARIO_CHANCE +
    data?.PROMEDIO_DIARIO_PAGAMAS +
    data?.PROMEDIO_DIARIO_PAGATODO +
    data?.PROMEDIO_DIARIO_GANE5 +
    data?.PROMEDIO_DIARIO_PATAMI +
    data?.PROMEDIO_DIARIO_DOBLECHANCE +
    data?.PROMEDIO_DIARIO_CHMILL

  const JUEGOS_AZAR = {
    id: 18,
    producto: 'Venta Total Chance',
    ventaActual: ventaActualAzarCal,
    aspiracionDia: aspiracionDiaAzarCal,
    porcentaje: calcularPorcentaje(ventaActualAzarCal, aspiracionDiaAzarCal),
    porcentaje2: calcularPorcentajeSinLimite(ventaActualAzarCal, aspiracionDiaAzarCal)
  }

  return [ASTRO, CHANCE, CHANCE_MILLONARIO, DOBLECHANCE, PAGAMAS, BETPLAY, PAGATODO, RECARGAS, GANE5, PATA_MILLONARIA, LOTERIA_VIRTUAL, LOTERIA_FISICA, PROMO1, PROMO2, SOAT, GIROS, RECAUDOS, JUEGOS_AZAR]
}