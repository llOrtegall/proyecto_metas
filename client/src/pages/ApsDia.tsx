import { BarraProgressProduct } from '../components/ui/ProgresoProducto'
import { Loading } from '../components/animations/Loading'
import { useFecthMetasData } from '../hooks/useFetchData'
import { ArrowsIcon } from '../components/icons'
import { sortData } from '../utils/funtions'
import { MetasProps } from '../types/Metas'
import { useMemo, useState } from 'react'

function AspDiaPage ({ codigo, zona }: MetasProps) {
  const { data, error, isLoading } = useFecthMetasData('/cumpDiaProd', zona, codigo)
  const [isAscending, setIsAscending] = useState(false)

  const sortedData = useMemo(() => {
    return Array.isArray(data) ? sortData(data, isAscending) : []
  }, [data, isAscending])

  return (
    <section className='relative'>
      <section className='w-full flex items-center justify-center gap-10 py-4'>
        <h1 className='text-2xl font-semibold'>Aspiración Día Actual</h1>
        <button onClick={() => setIsAscending(!isAscending)} className='flex p-3 items-center justify-center bg-blue-600 text-lg rounded-md gap-4 text-white font-semibold hover:bg-blue-500'>
          <p className='text-center'>Cambiar Orden</p>
          <ArrowsIcon />
        </button>

        {
          isLoading
            ? (
              <div className='absolute z-50 left-8 top-2 flex flex-col items-center justify-center'>
                <Loading />
                <p className='text-blue-600 font-semibold'>Cargando y/o Actualizando Información ...</p>
              </div>
              )
            : null
        }

      </section>
      <div className='grid grid-cols-4 gap-2 px-2'>
        {error ? <p>Ocurrió un error al solicitar la data recargue la página o intentelo más tarde</p> : null}
        {
            sortedData.map(meta => (
              <BarraProgressProduct
                key={meta.id} pruducto={meta.producto} ventaActual={meta.ventaActual} aspiracionDia={meta.aspiracionDia}
                percentage={parseFloat(meta.porcentaje)} percentage2={parseFloat(meta.porcentaje2)}
              />
            ))
        }
      </div>
    </section>

  )
}

export default AspDiaPage
