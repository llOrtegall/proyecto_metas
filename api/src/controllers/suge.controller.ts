import { Request, Response } from 'express';
import { SugModel } from '../models/sug.model'

async function Sugeridos (codigo: string, user: string) {
  const res = await SugModel.sequelize?.query(
    `
      SELECT SUGERIDO1, (VTA_CHANCE + VTA_PAGAMAS + VTA_PAGATODO + VTA_GANE5 + VTA_PATA_MILLONARIA + VTA_DOBLECHANCE + VTA_CHANCE_MILLONARIO) VTA_SUGERIDO, META_SUG1 
      FROM SUGERIDOS_VENDEDOR WHERE FECHA=CURDATE() AND SUCURSAL=${codigo} AND USUARIO='${user}'
    `
  )

  return res
}

export const SugeridosPrimeraConsulta = async (req: Request, res: Response) => {
  const { codigo, user } = req.body

  if(!codigo || !user) {
    return res.status(400).json({ message: 'Por favor, complete todos los campos.' })
  }

  try {
    const cumplimiento = await Sugeridos(codigo, user)

    console.log(cumplimiento);
    
    // if (cumplimiento === undefined) {
    //   return res.status(404).json({ message: `No Se Generado Sugeridos, Para El Usuario ${user.slice(2)} Por El Momento, Validar En 5 min` })
    // }
    return res.status(200).json('ok')
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Hubo un problema al obtener los sugeridos de la primera consulta. Por favor, inténtalo de nuevo más tarde.' })
  }
}
/*
// TODO: Sugeridos Segunda Consulta
async function Sugeridos2 (codigo, user) {
  const [cumplimiento] = await pool.execute(
    `
    SELECT SUGERIDO1 as SUGERIDO2, (VTA_CHANCE + VTA_PAGAMAS + VTA_PAGATODO + VTA_GANE5 + VTA_PATA_MILLONARIA + VTA_DOBLECHANCE + VTA_CHANCE_MILLONARIO) VTA_SUGERIDO, META_SUG1*2 META_SUGERIDO1 
    FROM SUGERIDOS_VENDEDOR 
    WHERE FECHA=CURDATE() AND concat(USUARIO, SUCURSAL) IN (SELECT DISTINCT concat(USUARIO, SUCURSAL) 
    FROM CUMPLIMIENTO_SUGERIDOS_VEND 
    where FECHA=CURDATE()) AND SUCURSAL=${codigo} AND USUARIO='${user}';
    `
  )
  return cumplimiento
}

export const SugeridosSegundaConsulta = async (req, res) => {
  const { codigo, user } = req.body
  try {
    const [cumplimiento] = await Sugeridos2(codigo, user)
    if (cumplimiento === undefined) {
      return res.status(404).json({ message: `No Se Generado Sugeridos, Para El Usuario ${user.slice(2)} Por El Momento, Validar En 5 min` })
    }
    return res.status(200).json(cumplimiento)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Hubo un problema al obtener los sugeridos de la segunda consulta. Por favor, inténtalo de nuevo más tarde.' })
  }
}
*/