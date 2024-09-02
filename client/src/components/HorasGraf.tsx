import { useAuth } from '../auth/AuthContext'
import { AreaChart } from '@tremor/react'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface IHoras {
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

export const ProductHorasGraf = () => {
  const [data, setData] = useState<IHoras[]>([])
  const { user } = useAuth()

  useEffect(() => {
    axios.get(`/horas/${user.codigo}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <section className='h-[80vh] flex items-center justify-center mx-4'>
      <AreaChart
        data={data} index='HORA'
        categories={['CHANCE', 'CHANCE_META']}
        colors={['violet', 'cyan']}
        valueFormatter={(number: number) =>
          `$${Intl.NumberFormat('us').format(number).toString()}`}
        onValueChange={(v) => console.log(v)}
      />
    </section>
  )
}
