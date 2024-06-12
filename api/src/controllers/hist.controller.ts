/*
async function HistorialCategorias (codigo) {
  const [historial] = await pool.execute(
    `
    SELECT * FROM HIST_CATEGORIAS 
    WHERE SUCURSAL = ${codigo} 
    AND (ANHO = YEAR(CURRENT_DATE) 
    OR ANHO = YEAR(CURRENT_DATE) - 1);
    `
  )
  return historial
}

export const ConsultarHistorialCategorias = async (req, res) => {
  const { codigo } = req.body

  try {
    const historial = await HistorialCategorias(codigo)
    return res.status(200).json(historial)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Hubo un problema al obtener el historial de categorías. Por favor, inténtalo de nuevo más tarde.' })
  }
}
*/
import { HistModel } from '../models/hist.model'

import { Request, Response } from "express"
import { escape } from 'querystring'

export async function HistCat(req: Request, res: Response) {
  const { codigo } = req.query
  if (!codigo) return res.status(400).json({ error: 'Falta el código del punto de venta' })

  try {
    await HistModel.sync()
    const historial = await HistModel.findAll({
      attributes: ['ANHO', 'MES', 'CATEGORIA', 'VERSION'],
      where: { SUCURSAL: escape(codigo as string) }
    })

    return res.status(200).json(historial)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Hubo un problema al obtener el historial de categorías. Por favor, inténtalo de nuevo más tarde.' })
  }
}