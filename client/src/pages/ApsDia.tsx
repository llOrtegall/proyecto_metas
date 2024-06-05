import { BarraProgressProduct } from '../components/ui/ProgresoProducto'
import { useFecthMetasData } from '../hooks/useFetchData'
import { MetasProps } from '../types/Metas'
import { ArrowsIcon } from '../components/icons'
import { useMemo, useState } from 'react'
import { sortData } from '../utils/funtions'

function AspDiaPage ({ codigo, zona }: MetasProps) {
  const { data, error, isLoading } = useFecthMetasData('/cumpDiaProd', zona, codigo)

  const [isAscending, setIsAscending] = useState(true)

  const sortedData = useMemo(() => {
    return Array.isArray(data) ? sortData(data, isAscending) : []
  }, [data, isAscending])

  return (
    <section>
      <section className='w-full flex items-center justify-center gap-10'>
        <h1 className='text-2xl font-semibold'>Aspiración Día Actual</h1>
        <button onClick={() => setIsAscending(!isAscending)} className='flex p-3 items-center justify-center bg-blue-600 text-lg rounded-md gap-4 text-white font-semibold hover:bg-blue-500'>
          <p className='text-center'>Cambiar Orden</p>
          <ArrowsIcon />
        </button>
      </section>
      <div className='grid grid-cols-4 gap-2 px-2'>
        {isLoading ? <p>Cargando...</p> : null}
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
