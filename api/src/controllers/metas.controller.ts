import { MetasProducts } from '../models/metasproducts.model'
import { Request, Response } from "express"
import { escape } from 'querystring'
import { fn } from "sequelize"

export const metasDelDia = async (req: Request, res: Response) => {
  const { codigo } = req.body

  if (!codigo) return res.status(400).json({ message: 'Faltan codigo' })

  // !!: Revisar codigo ya que es posible una sql injection en la variable codigo se debe intentar escapar y/o validar sanitizar ...
  // TODO: por el momento se usara escape de querystring sin emabrgo toca mejorar este aspecto en el futuro

  try {
    await MetasProducts.sync()
    const metaDiaProdc = await MetasProducts.findOne({
      attributes: ['CHANCE', 'PAGAMAS', 'PAGATODO', 'GANE5', 'PATA_MILLONARIA', 'DOBLECHANCE', 'CHANCE_MILLONARIO'],
      where: { SUCURSAL: escape(codigo), FECHA: fn('CURDATE') }
    })

    if (!metaDiaProdc) return res.status(404).json({ message: 'No se encontraron metas para el codigo y fecha proporcionados' })

    // TODO: mejorar esta logica se podria crear una funcion reutilizable para sumar los productos
    const sumaProducts = (
      metaDiaProdc.dataValues.CHANCE + metaDiaProdc.dataValues.PAGAMAS +
      metaDiaProdc.dataValues.PAGATODO + metaDiaProdc.dataValues.GANE5 +
      metaDiaProdc.dataValues.PATA_MILLONARIA + metaDiaProdc.dataValues.DOBLECHANCE +
      metaDiaProdc.dataValues.CHANCE_MILLONARIO
    )

    const ventaActual = await MetasProducts.findOne({
      attributes: ['PROMEDIO_DIARIO_CHANCE', 'PROMEDIO_DIARIO_PAGAMAS', 'PROMEDIO_DIARIO_PAGATODO', 'PROMEDIO_DIARIO_GANE5', 'PROMEDIO_DIARIO_PATAMI', 'PROMEDIO_DIARIO_DOBLECHANCE', 'PROMEDIO_DIARIO_CHMILL'],
      where: { SUCURSAL: escape(codigo), FECHA: fn('CURDATE') }
    })

    const aspiracionDia = (
      ventaActual?.dataValues.PROMEDIO_DIARIO_CHANCE + ventaActual?.dataValues.PROMEDIO_DIARIO_PAGAMAS +
      ventaActual?.dataValues.PROMEDIO_DIARIO_PAGATODO + ventaActual?.dataValues.PROMEDIO_DIARIO_GANE5 +
      ventaActual?.dataValues.PROMEDIO_DIARIO_PATAMI + ventaActual?.dataValues.PROMEDIO_DIARIO_DOBLECHANCE +
      ventaActual?.dataValues.PROMEDIO_DIARIO_CHMILL
    )

    const porcentajeCumplimiento = parseFloat(((sumaProducts / aspiracionDia) * 100).toFixed(2))

    return res.status(200).json({ venta_actual: sumaProducts, aspiracion: aspiracionDia, cumplimiento: porcentajeCumplimiento })
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener las metas', error })
  }
}

/*
async function CumplimientoDiaProductoYumbo (codigo) {
  const [cumplimiento] = await pool.execute(
    `
    select mp.CHANCE, mp.PROMEDIO_DIARIO_CHANCE, mp.PAGAMAS, mp.PROMEDIO_DIARIO_PAGAMAS, mp.PAGATODO, mp.PROMEDIO_DIARIO_PAGATODO,
      mp.GANE5, mp.PROMEDIO_DIARIO_GANE5, mp.PATA_MILLONARIA, mp.PROMEDIO_DIARIO_PATAMI, mp.DOBLECHANCE, mp.PROMEDIO_DIARIO_DOBLECHANCE,
      mp.CHANCE_MILLONARIO, mp.PROMEDIO_DIARIO_CHMILL, mp.ASTRO, mp.PROMEDIO_DIARIO_ASTRO, mp.LOTERIA_FISICA, mp.PROMEDIO_DIARIO_LF,
      mp.LOTERIA_VIRTUAL, mp.PROMEDIO_DIARIO_LV, mp.BETPLAY, mp.PROMEDIO_DIARIO_BETPLAY, mp.GIROS, mp.PROMEDIO_DIARIO_GIROS, mp.SOAT,
      mp.PROMEDIO_DIARIO_SOAT, mp.RECAUDOS, mp.PROMEDIO_DIARIO_RECAUDOS, mp.RECARGAS, mp.PROMEDIO_DIARIO_RECARGAS, mp.PROMO1, mp.META_PROMO1,
      mp.PROMO2, mp.META_PROMO2
    from 
      METASPRODUCTOS mp,
      INFORMACION_PUNTOSVENTA ip
    WHERE 
      mp.SUCURSAL = ${codigo} 
      and mp.FECHA = CURDATE() 
      and mp.SUCURSAL = ip.CODIGO;
    `
  )
  return cumplimiento
}
async function CumplimientoDiaProductoJamundi (codigo) {
  const [cumplimiento] = await pool.execute(
    `
    select
      mp.CHANCE, mp.PROMEDIO_DIARIO_CHANCE, mp.CHOLADITO, mp.PROMEDIO_DIARIO_CHOLADITO, mp.PAGATODO_JAMUNDI, mp.PROMEDIO_DIARIO_PGTJAMUNDI,
      mp.GANE5, mp.PROMEDIO_DIARIO_GANE5, mp.PATA_MILLONARIA, mp.PROMEDIO_DIARIO_PATAMI, mp.DOBLECHANCE, mp.PROMEDIO_DIARIO_DOBLECHANCE,
      mp.CHANCE_MILLONARIO, mp.PROMEDIO_DIARIO_CHMILL, mp.ASTRO, mp.PROMEDIO_DIARIO_ASTRO, mp.LOTERIA_FISICA, mp.PROMEDIO_DIARIO_LF,
      mp.LOTERIA_VIRTUAL, mp.PROMEDIO_DIARIO_LV, mp.BETPLAY, mp.PROMEDIO_DIARIO_BETPLAY, mp.GIROS, mp.PROMEDIO_DIARIO_GIROS, mp.SOAT,
      mp.PROMEDIO_DIARIO_SOAT, mp.RECAUDOS, mp.PROMEDIO_DIARIO_RECAUDOS, mp.RECARGAS, mp.PROMEDIO_DIARIO_RECARGAS, mp.PROMO1, mp.META_PROMO1,
      mp.PROMO2, mp.META_PROMO2
    from
      METASPRODUCTOS mp,
      INFORMACION_PUNTOSVENTA ip
    WHERE
      mp.SUCURSAL = ${codigo}
      and mp.FECHA = CURDATE()
      and mp.SUCURSAL = ip.CODIGO;
  `
  )
  return cumplimiento
}
*/

// TODO: falta validar Servired
const Servired = [
  "CHANCE", "PAGAMAS", "PAGATODO", "GANE5", "PAGATODO_JAMUNDI", "CHOLADITO",
  "PATA_MILLONARIA", "DOBLECHANCE", "CHANCE_MILLONARIO", "ASTRO", "LOTERIA_FISICA",
  "LOTERIA_VIRTUAL", "BETPLAY", "GIROS", "SOAT", "RECAUDOS", "RECARGAS", "ZONA",
  "CCOSTO", "SUCURSAL", "MT_CHANCE", "PROMEDIO_DIARIO_CHANCE", "MT_PAGAMAS",
  "PROMEDIO_DIARIO_PAGAMAS", "MT_PAGATODO", "PROMEDIO_DIARIO_PAGATODO",
  "MT_GANE5", "PROMEDIO_DIARIO_GANE5", "MT_PAGATODO_JAMUNDI", "PROMEDIO_DIARIO_PGTJAMUNDI",
  "MT_CHOLADITO", "PROMEDIO_DIARIO_CHOLADITO", "MT_PATA_MILLONARIA", "PROMEDIO_DIARIO_PATAMI",
  "MT_DOBLECHANCE", "PROMEDIO_DIARIO_DOBLECHANCE", "MT_CHANCE_MILLONARIO", "PROMEDIO_DIARIO_CHMILL",
  "MT_ASTRO", "PROMEDIO_DIARIO_ASTRO", "MT_LOTERIA_FISICA", "PROMEDIO_DIARIO_LF", "MT_LOTERIA_VIRTUAL",
  "PROMEDIO_DIARIO_LV", "MT_BETPLAY", "PROMEDIO_DIARIO_BETPLAY", "MT_GIROS", "PROMEDIO_DIARIO_GIROS",
  "MT_SOAT", "PROMEDIO_DIARIO_SOAT", "MT_RECAUDOS", "PROMEDIO_DIARIO_RECAUDOS", "MT_RECARGAS",
  "PROMEDIO_DIARIO_RECARGAS", "PROMO1", "META_PROMO1", "PROMO2", "META_PROMO2"
]

// TODO: falta validar Multired
const Multired = [ "ASTRO", "CHANCE", "CHANCE_MILLONARIO", "DOBLECHANCE", "PAGAMAS", "BETPLAY", "PAGATODO", "RECARGAS", "GANE5", "PATA_MILLONARIA", "LOTERIA_VIRTUAL", "LOTERIA_FISICA", "PROMO1", "PROMO2", "SOAT", "GIROS", "RECAUDOS", "PROMEDIO_DIARIO_CHANCE", "PROMEDIO_DIARIO_ASTRO", "PROMEDIO_DIARIO_PAGAMAS", "PROMEDIO_DIARIO_PAGATODO", "PROMEDIO_DIARIO_GANE5", "PROMEDIO_DIARIO_PATAMI", "PROMEDIO_DIARIO_DOBLECHANCE", "PROMEDIO_DIARIO_CHMILL","PROMEDIO_DIARIO_LF", "PROMEDIO_DIARIO_BETPLAY", "PROMEDIO_DIARIO_GIROS", "PROMEDIO_DIARIO_SOAT", "PROMEDIO_DIARIO_RECAUDOS", "PROMEDIO_DIARIO_RECARGAS", "PROMEDIO_DIARIO_LV", "MT_CHANCE", "MT_PAGAMAS", "MT_PAGATODO", "MT_GANE5", "MT_PATA_MILLONARIA", "MT_DOBLECHANCE","MT_CHANCE_MILLONARIO", "MT_ASTRO", "MT_LOTERIA_FISICA", "MT_LOTERIA_VIRTUAL", "MT_BETPLAY", "MT_GIROS", "MT_SOAT", "MT_RECAUDOS", "MT_RECARGAS", "META_PROMO1", "META_PROMO2" ]

function ProductsReturn (zona: string) {
  if(zona === '39628') return Multired
  if(zona === '39627') return Servired
}

export const cumplimientoDiaProducto = async (req: Request, res: Response) => {
  const { codigo, zona } = req.query

  if (!codigo || !zona) return res.status(400).json({ error: 'Falta el código del punto de venta' })

  if(zona !== '39627' && zona !== '39628') return res.status(400).json({ error: 'Zona no encontrada' })

  try {
    await MetasProducts.sync()
    const metas = await MetasProducts.findOne({
      attributes: ProductsReturn(zona as string),
      where: { SUCURSAL: escape(codigo as string), FECHA: fn('CURDATE') }
    })

    return res.status(200).json(metas)
  } catch (error) {
    return res.status(500).json({ error: 'Hubo un problema al obtener el cumplimiento del día por producto. Por favor, inténtalo de nuevo más tarde.' })
  }
}