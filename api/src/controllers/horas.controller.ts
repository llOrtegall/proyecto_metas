import { Request, Response } from "express"
import { pool_test } from '../connections/test_92'
import { RowDataPacket } from "mysql2"

interface IHoras extends RowDataPacket {
  FECHA: string
  HORA: string
  CHANCE: number
  PAGAMAS: number
  PAGATODO: number
  PAGATODO_JAMUNDI: number
  CHOLADITO: number
  PATA_MILLONARIA: number
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
  created_at: string
  updated_at: string
}

export const HorasBySucursal = async (req: Request, res: Response) => {
  const { id } = req.params

  if (!id) {
    return res.status(400).json({ message: 'Falta el código del punto de venta' })
  }

  try {
    const table = `table_${id}`
    const query = `SELECT * FROM ${table} WHERE FECHA = CURDATE();`


    const [rows] = await pool_test.execute(query);

    if (!rows) {
      return res.status(404).json({ message: `No se encontraron horas para el punto de venta ${id} por el momento, validar en 5 min.` })
    }

    const data = rows as IHoras[]

    return res.status(200).json(data)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Hubo un problema al obtener las horas de la sucursal. Por favor, inténtalo de nuevo más tarde.' })
  }
}