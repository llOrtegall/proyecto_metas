import { AreaChart } from '@tremor/react'

const chartdata = [
  { date: '6:00 am', venta: 2890, aspiración: 2338 },
  { date: '7:00 am', venta: 2756, aspiración: 2103 },
  { date: '8:00 am', venta: 3322, aspiración: 2194 },
  { date: '9:00 am', venta: 3470, aspiración: 2108 },
  { date: '10:00 am', venta: 2403, aspiración: 1812 },
  { date: '11:00 am', venta: 3129, aspiración: 1726 },
  { date: '12:00 am', venta: 3490, aspiración: 1982 },
  { date: '01:00 pm', venta: 2903, aspiración: 2012 },
  { date: '02:00 pm', venta: 2643, aspiración: 2342 },
  { date: '03:00 pm', venta: 2837, aspiración: 2473 },
  { date: '04:00 pm', venta: 2954, aspiración: 3848 },
  { date: '05:00 pm', venta: 3239, aspiración: 3736 },
  { date: '06:00 pm', venta: 3239, aspiración: 3736 },
  { date: '07:00 pm', venta: 3239, aspiración: 3736 },
  { date: '08:00 pm', venta: 3239, aspiración: 3736 },
  { date: '09:00 pm', venta: 3239, aspiración: 3736 },
  { date: '10:00 pm', venta: 3239, aspiración: 3736 }
]

export const ProductHorasGraf = () => (
  <section className='h-[80vh] flex items-center justify-center'>
    <AreaChart
      data={chartdata} index='date'
      categories={['venta', 'aspiración']}
      colors={['violet', 'cyan']}
      valueFormatter={(number: number) =>
        `$${Intl.NumberFormat('us').format(number).toString()}`}
      onValueChange={(v) => console.log(v)}
    />
  </section>

)
