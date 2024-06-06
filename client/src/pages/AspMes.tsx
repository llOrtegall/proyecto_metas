import { BarraProgressProduct } from '../components/ui/ProgresoProducto'
import { useFecthMetasData } from '../hooks/useFetchData'
import { sortData } from '../utils/funtions'
import { MetasProps } from '../types/Metas'
import { useMemo, useState } from 'react'
import { HeaderComponent } from '../components/ui/headerComponent'

function AspMesPage ({ codigo, zona }: MetasProps) {
  const { data, isLoading } = useFecthMetasData('/cumpMesAct', zona, codigo)
  const [isAscending, setIsAscending] = useState(false)

  const sortedData = useMemo(() => {
    return Array.isArray(data) ? sortData(data, isAscending) : []
  }, [data, isAscending])

  return (
    <main className='relative'>
      <HeaderComponent setIsAscending={setIsAscending} isAscending={isAscending} isLoading={isLoading} text='Mes Actual' />
      <section className='grid grid-cols-4 gap-2 px-2'>
        {data && (
          sortedData.map(meta => (
            <BarraProgressProduct
              key={meta.id} pruducto={meta.producto} ventaActual={meta.ventaActual} aspiracionDia={meta.aspiracionDia}
              percentage={parseFloat(meta.porcentaje)} percentage2={parseFloat(meta.porcentaje2)}
            />
          ))
        )}
      </section>
    </main>
  )
}

export default AspMesPage
