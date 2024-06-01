/* {
  "ASTRO": 38900,
  "CHANCE": 52745,
  "CHANCE_MILLONARIO": 0,
  "DOBLECHANCE": 2000,
  "PAGAMAS": 9000,
  "BETPLAY": 10000,
  "PAGATODO": 36200,
  "RECARGAS": 14000,
  "GANE5": 2000,
  "PATA_MILLONARIA": 3000,
  "LOTERIA_VIRTUAL": 0,
  "LOTERIA_FISICA": 20000,
  "PROMO1": 0,
  "PROMO2": 8000,
  "SOAT": 7800,
  "GIROS": 8,
  "RECAUDOS": 5,
  "PROMEDIO_DIARIO_CHANCE": 787766,
  "PROMEDIO_DIARIO_ASTRO": 128774,
  "PROMEDIO_DIARIO_PAGAMAS": 21493,
  "PROMEDIO_DIARIO_PAGATODO": 133962,
  "PROMEDIO_DIARIO_GANE5": 10125,
  "PROMEDIO_DIARIO_PATAMI": 35432,
  "PROMEDIO_DIARIO_DOBLECHANCE": 95220,
  "PROMEDIO_DIARIO_CHMILL": 26218,
  "PROMEDIO_DIARIO_LF": 130292,
  "PROMEDIO_DIARIO_BETPLAY": 122806,
  "PROMEDIO_DIARIO_GIROS": 24,
  "PROMEDIO_DIARIO_SOAT": 67336,
  "PROMEDIO_DIARIO_RECAUDOS": 45,
  "PROMEDIO_DIARIO_RECARGAS": 150913,
  "PROMEDIO_DIARIO_LV": 26263,
  "MT_CHANCE": 18355704,
  "MT_PAGAMAS": 500808,
  "MT_PAGATODO": 3121440,
  "MT_GANE5": 226102,
  "MT_PATA_MILLONARIA": 722400,
  "MT_DOBLECHANCE": 2218720,
  "MT_CHANCE_MILLONARIO": 560000,
  "MT_ASTRO": 3000546,
  "MT_LOTERIA_FISICA": 3127000,
  "MT_LOTERIA_VIRTUAL": 499000,
  "MT_BETPLAY": 2947350,
  "MT_GIROS": 583,
  "MT_SOAT": 1616040,
  "MT_RECAUDOS": 1078,
  "MT_RECARGAS": 3621900,
  "META_PROMO1": 4,
  "META_PROMO2": 50988
} */

export interface ProductsYumbo {
  ASTRO: number
  CHANCE: number
  CHANCE_MILLONARIO: number
  DOBLECHANCE: number
  PAGAMAS: number
  BETPLAY: number
  PAGATODO: number
  RECARGAS: number
  GANE5: number
  PATA_MILLONARIA: number
  LOTERIA_VIRTUAL: number
  LOTERIA_FISICA: number
  PROMO2: number
  SOAT: number
  GIROS: number
  RECAUDOS: number
  PROMEDIO_DIARIO_CHANCE: number
  PROMEDIO_DIARIO_ASTRO: number
  PROMEDIO_DIARIO_PAGAMAS: number
  PROMEDIO_DIARIO_PAGATODO: number
  PROMEDIO_DIARIO_GANE5: number
  PROMEDIO_DIARIO_PATAMI: number
  PROMEDIO_DIARIO_DOBLECHANCE: number
  PROMEDIO_DIARIO_CHMILL: number
  PROMEDIO_DIARIO_LF: number
  PROMEDIO_DIARIO_BETPLAY: number
  PROMEDIO_DIARIO_GIROS: number
  PROMEDIO_DIARIO_SOAT: number
  PROMEDIO_DIARIO_RECAUDOS: number
  PROMEDIO_DIARIO_RECARGAS: number
  PROMEDIO_DIARIO_LV: number
  MT_CHANCE: number
  MT_PAGAMAS: number
  MT_PAGATODO: number
  MT_GANE5: number
  MT_PATA_MILLONARIA: number
  MT_DOBLECHANCE: number
  MT_CHANCE_MILLONARIO: number
  MT_ASTRO: number
  MT_LOTERIA_FISICA: number
  MT_LOTERIA_VIRTUAL: number
  MT_BETPLAY: number
  MT_GIROS: number
  MT_SOAT: number
  MT_RECAUDOS: number
  MT_RECARGAS: number
  META_PROMO2: number
}

export interface ProductsJamundi {
  CHANCE: number
  PAGATODO: number
  GANE5: number
  PAGATODO_JAMUNDI: number
  CHOLADITO: number
  DOBLECHANCE: number
  CHANCE_MILLONARIO: number
  ASTRO: number
  LOTERIA_FISICA: number
  LOTERIA_VIRTUAL: number
  BETPLAY: number
  GIROS: number
  SOAT: number
  RECAUDOS: number
  RECARGAS: number
  PROMO1: number
  PROMO2: number
  MT_CHANCE: number
  MT_PAGATODO: number
  MT_GANE5: number
  MT_PAGATODO_JAMUNDI: number
  MT_CHOLADITO: number
  MT_PATA_MILLONARIA: number
  MT_DOBLECHANCE: number
  MT_CHANCE_MILLONARIO: number
  MT_ASTRO: number
  MT_LOTERIA_FISICA: number
  MT_LOTERIA_VIRTUAL: number
  MT_BETPLAY: number
  MT_GIROS: number
  MT_SOAT: number
  MT_RECAUDOS: number
  MT_RECARGAS: number
  META_PROMO1: number
  META_PROMO2: number
  PROMEDIO_DIARIO_SOAT: number
  PROMEDIO_DIARIO_CHANCE: number
  PROMEDIO_DIARIO_PAGATODO: number
  PROMEDIO_DIARIO_GANE5: number
  PROMEDIO_DIARIO_PGTJAMUNDI: number
  PROMEDIO_DIARIO_CHOLADITO: number
  PROMEDIO_DIARIO_PATAMI: number
  PROMEDIO_DIARIO_DOBLECHANCE: number
  PROMEDIO_DIARIO_CHMILL: number
  PROMEDIO_DIARIO_ASTRO: number
  PROMEDIO_DIARIO_LV: number
  PROMEDIO_DIARIO_LF: number
  PROMEDIO_DIARIO_BETPLAY: number
  PROMEDIO_DIARIO_GIROS: number
  PROMEDIO_DIARIO_RECAUDOS: number
  PROMEDIO_DIARIO_RECARGAS: number
}

export interface IProduct {
  id: number
  producto: string
  ventaActual: number
  aspiracionDia: number
  porcentaje: number
  porcentaje2: number
}