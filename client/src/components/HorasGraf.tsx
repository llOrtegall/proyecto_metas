import { useAuth } from '../auth/AuthContext'
import { useParams } from 'react-router-dom'
import { AreaChart } from '@tremor/react'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface IHoras {
  id: number
  hora: string
  chance: number
}

const data = [
  {
    "id": 44,
    "hora": "13:00:00",
    "chance": 435353,
    "meta": 400000
  },
  {
    "id": 193,
    "hora": "13:30:00",
    "chance": 445613,
    "meta": 300000
  },
  {
    "id": 342,
    "hora": "14:00:00",
    "chance": 445613,
    "meta": 200000
  },
  {
    "id": 491,
    "hora": "14:30:00",
    "chance": 452659,
    "meta": 400000
  },
  {
    "id": 640,
    "hora": "15:00:00",
    "chance": 484383,
    "meta": 300000
  }, 
  {
    "meta": 300000,
  }, 
  {
    "meta": 400000,
  },
  {
    "meta": 200000,
  }, 
  {
    "meta": 100000,
  }
]

export const ProductHorasGraf = () => {
  // const [data, setData] = useState<IHoras[]>([])
  // const { user } = useAuth()

  // const { producto } = useParams()
  // const param = producto?.toLocaleLowerCase()!;

  // useEffect(() => {
  //   axios.get(`/horas/${user.codigo}/${param}`)
  //     .then(res => setData(res.data))
  //     .catch(err => console.log(err))
  // }, [])

  // console.log(data);

  return (
    <section className='h-[80vh] flex items-center justify-center mx-4'>
      <AreaChart
        data={data} index='hora'
        categories={['chance', 'meta']}
        colors={['green', 'rose']}
        valueFormatter={(number: number) =>
          `${Intl.NumberFormat('CO').format(number).toString()}`}
        onValueChange={(v) => console.log(v)}
      />
    </section>
  )
}
