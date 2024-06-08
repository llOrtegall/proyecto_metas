import { RenderCategoria } from '../components/ui/RenderCategoria'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface Historial {
  ANHO: number
  MES: number
  CATEGORIA: string
  VERSION: string
}

function HistCatPage ({ codigo }: { codigo: number }) {
  const [historial, setHistorial] = useState<Historial[]>([])

  useEffect(() => {
    axios.get('/historial', { params: { codigo } })
      .then(res => { setHistorial(res.data) })
      .catch(err => { console.log(err) })
  }, [codigo])

  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  const annoActual = new Date().getFullYear()
  const annoAnterior = annoActual - 1

  const historialActual = historial.filter(hist => hist.ANHO === annoActual)
  const historialAnterior = historial.filter(hist => hist.ANHO === annoAnterior)

  return (
    <section className='flex items-center justify-around'>

      <section className='flex flex-col items-center'>
        <h1 className='py-2 bg-blue-200 px-2 rounded-lg text-2xl font-semibold'>Año Anterior: {annoAnterior}</h1>
        <article className='grid grid-cols-3 gap-12'>
          {
            historialAnterior.map(hist => (
              <ul key={hist.MES} className=''>
                <p className='text-center py-1 font-semibold text-lg'>{meses[hist.MES - 1]}</p>
                <figure className='w-32'>
                  <RenderCategoria cat={hist.CATEGORIA} ver={hist.VERSION} />
                </figure>
              </ul>
            ))
          }
        </article>

      </section>

      <section className='flex flex-col items-center'>
        <h1 className='py-2 bg-blue-200 px-2 rounded-lg text-2xl font-semibold'>Año Anterior: {annoActual}</h1>
        <article className='grid grid-cols-3 gap-12'>
          {
            historialActual.map(hist => (
              <ul key={hist.MES} className=''>
                <p className='text-center py-1 font-semibold text-lg'>{meses[hist.MES - 1]}</p>
                <figure className='w-32'>
                  <RenderCategoria cat={hist.CATEGORIA} ver={hist.VERSION} />
                </figure>
              </ul>
            ))
          }
        </article>
      </section>
    </section>
  )
}

export default HistCatPage
