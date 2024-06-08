import { RenderCategoria } from './ui/RenderCategoria'
import { Historial } from '../types/interfaces'

export function HistComponent ({ data }:{data: Historial[]}) {
  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

  return (
    <article className='grid grid-cols-3'>
      {
      data.map(hist => (
        <ul key={hist.MES} className='flex flex-col w-full items-center gap-2 pt-2'>
          <p className='w-full text-center font-semibold text-lg'>{meses[hist.MES - 1]}</p>
          <figure className='lg:w-20 xl:w-28 2xl:w-32 3xl:w-40'>
            <RenderCategoria cat={hist.CATEGORIA} ver={hist.VERSION} />
          </figure>
        </ul>
      ))
    }
    </article>
  )
}
