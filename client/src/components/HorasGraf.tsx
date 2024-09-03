import { useAuth } from '../auth/AuthContext'
import { AreaChart } from '@tremor/react'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface IHoras {
  FECHA: string
  HORA: string
  ASTRO: number
  CHANCE: number
  PAGAMAS: number
  PAGATODO: number
  PATA_MILLONARIA: number
  DOBLECHANCE: number
}

const ventaxhora = [
  { ID: 1, HORA: '6:00', valor: 4000 },
  { ID: 2, HORA: '7:00', valor: 10000 },
  { ID: 3, HORA: '8:00', valor: 18000 },
  { ID: 4, HORA: '9:00', valor: 22000 },
  { ID: 5, HORA: '10:00', valor: 30000 },
  { ID: 6, HORA: '11:00', valor: 2000 },
  { ID: 7, HORA: '12:00', valor: 2000 },
  { ID: 9, HORA: '13:00', valor: 2000 },
  { ID: 10, HORA: '14:00', valor: 2000 },
  { ID: 11, HORA: '15:00', valor: 2000 },
  { ID: 12, HORA: '16:00', valor: 2000 },
  { ID: 13, HORA: '17:00', valor: 2000 },
  { ID: 14, HORA: '18:00', valor: 2000 },
  { ID: 15, HORA: '19:00', valor: 2000 },
  { ID: 16, HORA: '08:00', valor: 2000 },
  { ID: 17, HORA: '09:00', valor: 2000 },
  { ID: 18, HORA: '10:00', valor: 2000 }
]

export const ProductHorasGraf = () => {
  const [data, setData] = useState<IHoras[]>([])
  const { user } = useAuth()

  console.log(data)

  const Astro = data.map((data, index) => {
    return {
      id: index + 1,
      producto: 'ASTRO',
      hora: ventaxhora[index].HORA,
      ventaActual: data.ASTRO,
      aspiracionDia: ventaxhora[index].valor
    }
  })

  console.log(Astro)

  useEffect(() => {
    axios.get(`/horas/${user.codigo}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <section className='h-[80vh] flex items-center justify-center mx-4'>
      <AreaChart
        data={Astro} index='hora'
        categories={['ventaActual', 'aspiracionDia']}
        colors={['violet', 'cyan']}
        valueFormatter={(number: number) =>
          `$${Intl.NumberFormat('us').format(number).toString()}`}
        onValueChange={(v) => console.log(v)}
      />
    </section>
  )
}
