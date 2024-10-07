import { useAuth } from '../auth/AuthContext'
import { useParams } from 'react-router-dom'
import { AreaChart } from '@tremor/react'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface IHoras {
  id: number
  hora: string
  chance: number
  gane5: number
  astro: number
}

export const ProductHorasGraf = () => {
  const [data, setData] = useState<IHoras[]>([])
  const { user } = useAuth()

  const { producto } = useParams()
  const param = producto?.toLocaleLowerCase()!;

  useEffect(() => {
    axios.get(`/horas/${user.codigo}/${param}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <section className='h-[80vh] flex items-center justify-center mx-4'>
      {/* <AreaChart
        data={Astro} index='hora'
        categories={['ventaActual', 'aspiracionDia']}
        colors={['violet', 'cyan']}
        valueFormatter={(number: number) =>
          `$${Intl.NumberFormat('us').format(number).toString()}`}
        onValueChange={(v) => console.log(v)}
      /> */}
    </section>
  )
}
