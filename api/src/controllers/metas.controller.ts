import { ReturnCompanyAtributesMetProducts, ReturnArrayMetProducts } from '../utils/fnMetasProducts'
import { ReturnCompanyAtriCumMesActu, ReturArrayCumpMesActProducts } from '../utils/fnCumMesAct'

import { vtaMesAntCump } from '../models/vtaMesAntPro.model'
import { MetasMesActProd } from '../models/ventaMesActProd.model'
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

export const cumplimientoDiaProducto = async (req: Request, res: Response) => {
  const { codigo, zona } = req.query
  if (!codigo || !zona) return res.status(400).json({ error: 'Falta el código del punto de venta' })
  if (zona !== '39627' && zona !== '39628') return res.status(400).json({ error: 'Zona invalida ' })

  try {
    await MetasProducts.sync()
    const metas = await MetasProducts.findOne({
      attributes: ReturnCompanyAtributesMetProducts(zona),
      where: { SUCURSAL: escape(codigo as string), FECHA: fn('CURDATE') }
    })

    const result = ReturnArrayMetProducts(zona, metas?.dataValues)

    return res.status(200).json(result)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Hubo un problema al obtener el cumplimiento del día por producto. Por favor, inténtalo de nuevo más tarde.' })
  }
}

export const cumplimientoMesActualProducto = async (req: Request, res: Response) => {
  const { codigo, zona } = req.query
  if (!codigo || !zona) return res.status(400).json({ error: 'Falta el código del punto de venta' })
  if (zona !== '39627' && zona !== '39628') return res.status(400).json({ error: 'Zona invalida ' })

  try {
    await MetasMesActProd.sync()
    const metasMesAct = await MetasMesActProd.findOne({
      attributes: ReturnCompanyAtriCumMesActu(zona),
      where: { SUCURSAL: escape(codigo as string), ZONA: escape(zona as string), FECHA: fn('CURDATE') }
    })

    const result = ReturArrayCumpMesActProducts(zona, metasMesAct?.dataValues)

    return res.status(200).json(result)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Hubo un problema al obtener el cumplimiento del mes actual por producto. Por favor, inténtalo de nuevo más tarde.' })
  }
}

export const vtaMesAntPro = async (req: Request, res: Response) => {
  const { codigo, zona } = req.query
  if (!codigo || !zona) return res.status(400).json({ error: 'Falta el código del punto de venta' })
  if (zona !== '39627' && zona !== '39628') return res.status(400).json({ error: 'Zona invalida ' })

  const getMesAnt = new Date().getMonth()
  
  try {
    await vtaMesAntCump.sync()

    const metasMesAnt = await vtaMesAntCump.findOne({
      attributes: ReturnCompanyAtriCumMesActu(zona),
      where: { SUCURSAL: escape(codigo as string), ZONA: escape(zona as string), MES: getMesAnt }
    })

    return res.status(200).json(metasMesAnt)

  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Hubo un problema al obtener el cumplimiento del mes anterior por producto. Por favor, inténtalo de nuevo más tarde.' })
  }
}

/* 
// TODO: Mes Anterior Por Producto
async function CumMesAntProdYumbo (codigo) {
  const [cumplimiento] = await pool.execute(
    `
    select 
      mp.EJE_CHANCE, mp.VTM_CHANCE,
      mp.EJE_PAGAMAS, mp.VTM_PAGAMAS, 
      mp.EJE_PAGATODO, mp.VTM_PAGATODO, 
      mp.EJE_GANE5, mp.VTM_GANE5, 
      mp.EJE_PATA_MILLONARIA, mp.VTM_PATA_MILLONARIA, 
      mp.EJE_DOBLECHANCE, mp.VTM_DOBLECHANCE,
      mp.EJE_CHANCE_MILLONARIO, mp.VTM_CHANCE_MILLONARIO,  
      mp.EJE_ASTRO, mp.VTM_ASTRO,
      mp.EJE_LOTERIA_FISICA, mp.VTM_LOTERIA_FISICA, 
      mp.EJE_LOTERIA_VIRTUAL, mp.VTM_LOTERIA_VIRTUAL,
      mp.EJE_BETPLAY, mp.VTM_BETPLAY, 
      mp.EJE_GIROS, mp.VTM_GIROS, 
      mp.EJE_SOAT, mp.VTM_SOAT, 
      mp.EJE_RECAUDOS, mp.VTM_RECAUDOS, 
      mp.EJE_RECARGAS, mp.VTM_RECARGAS,
      mp.EJE_RASPE, mp.VTM_RASPE
    from 
      HIST_META_ACUMULADO mp, 
      INFORMACION_PUNTOSVENTA ip 
    WHERE 
      mp.SUCURSAL = ${codigo} 
      and mp.MES=MONTH(DATE_ADD(DATE_ADD(LAST_DAY(NOW()), INTERVAL 1 DAY),INTERVAL -2 MONTH)) 
      and mp.SUCURSAL=ip.codigo;
    `
  )

  return cumplimiento
}

async function CumMesAntProdJamundi (codigo) {
  const [cumplimiento] = await pool.execute(
    `
    select 
      mp.EJE_CHANCE, mp.VTM_CHANCE,
      mp.EJE_CHOLADITO, mp.VTM_CHOLADITO, 
      mp.EJE_PAGATODO_JAMUNDI, mp.VTM_PAGATODO_JAMUNDI,
      mp.EJE_GANE5, mp.VTM_GANE5,
      mp.EJE_PATA_MILLONARIA, mp.VTM_PATA_MILLONARIA,
      mp.EJE_DOBLECHANCE, mp.VTM_DOBLECHANCE,
      mp.EJE_CHANCE_MILLONARIO, mp.VTM_CHANCE_MILLONARIO,
      mp.EJE_ASTRO, mp.VTM_ASTRO,
      mp.EJE_LOTERIA_FISICA, mp.VTM_LOTERIA_FISICA,
      mp.EJE_LOTERIA_VIRTUAL, mp.VTM_LOTERIA_VIRTUAL,
      mp.EJE_BETPLAY, mp.VTM_BETPLAY,
      mp.EJE_GIROS, mp.VTM_GIROS,
      mp.EJE_SOAT,mp.VTM_SOAT,
      mp.EJE_RECAUDOS, mp.VTM_RECAUDOS,
      mp.EJE_RECARGAS, mp.VTM_RECARGAS,
      mp.EJE_RASPE, mp.VTM_RASPE
    from
      HIST_META_ACUMULADO mp,
      INFORMACION_PUNTOSVENTA ip
      WHERE 
      mp.SUCURSAL = ${codigo} 
      and mp.MES=MONTH(DATE_ADD(DATE_ADD(LAST_DAY(NOW()), INTERVAL 1 DAY),INTERVAL -2 MONTH)) 
      and mp.SUCURSAL=ip.codigo;
    `
  )
  return cumplimiento
}

export const cumplimientoMesAnteriorProducto = async (req, res) => {
  const { codigo, zona } = req.body
  let cumplimiento
  try {
    if (zona === 39627) {
      [cumplimiento] = await CumMesAntProdYumbo(codigo)
      return res.status(200).json(cumplimiento)
    } else if (zona === 39628) {
      [cumplimiento] = await CumMesAntProdJamundi(codigo)
      return res.status(200).json(cumplimiento)
    } else {
      return res.status(400).json({ message: 'Zona no encontrada' })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Hubo un problema al obtener el cumplimiento del mes anterior por producto. Por favor, inténtalo de nuevo más tarde.' })
  }
}
*/