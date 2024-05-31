import { Request, Response } from "express"

/*
async function BuscarMetasDelDia (codigo) {
  const [metas] = await pool.execute(
    `
    select 
      mp.CHANCE+mp.PAGAMAS+mp.PAGATODO+mp.GANE5+mp.PATA_MILLONARIA+mp.DOBLECHANCE+mp.CHANCE_MILLONARIO venta_actual,
      mp.PROMEDIO_DIARIO_CHANCE+mp.PROMEDIO_DIARIO_PAGAMAS+mp.PROMEDIO_DIARIO_PAGATODO+mp.PROMEDIO_DIARIO_PATAMI+mp.PROMEDIO_DIARIO_DOBLECHANCE+mp.PROMEDIO_DIARIO_CHMILL asp_dia
      from METASPRODUCTOS mp, INFORMACION_PUNTOSVENTA ip WHERE mp.SUCURSAL = ${codigo} and mp.FECHA=CURDATE() and mp.SUCURSAL=ip.CODIGO;
    `
  )
  return metas
}
*/

export const metasDelDia = async (req: Request, res: Response) => {
  const { codigo } = req.body

  if(!codigo) return res.status(400).json({ message: 'Faltan codigo' })

  // try {
  //   const [metas] = await BuscarMetasDelDia(codigo)

  //   res.status(200).json(metas)
  // } catch (error) {
  //   console.error('Error al obtener las metas del día:', error)
  //   res.status(500).json({ message: 'Hubo un problema al obtener las metas del día. Por favor, inténtalo de ResumenDia más tarde.' })
  // }
}