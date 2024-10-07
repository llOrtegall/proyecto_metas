import { Test70Conn } from '../connections/test_92';
import { Request, Response } from 'express'


export const HorasBySucursal = async (req: Request, res: Response) => {
  const { id } = req.params

  if (!id) {
    return res.status(400).json({ message: 'Falta el código del punto de venta' })
  }

  try {
    
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Hubo un problema al obtener las horas de la sucursal. Por favor, inténtalo de nuevo más tarde.' })
  }
}