import { BarraProgressProduct } from '../components/ui/ProgresoProducto'
import { useFecthMetasData } from '../hooks/useFetchData'
import { sortData } from '../utils/funtions'
import { MetasProps } from '../types/Metas'
import { useMemo, useState } from 'react'
import { HeaderComponent } from '../components/ui/headerComponent'

function AspDiaPage ({ codigo, zona }: MetasProps) {
  const { data, isLoading } = useFecthMetasData('/cumpDiaProd', zona, codigo)
  const [isAscending, setIsAscending] = useState(false)

  const sortedData = useMemo(() => {
    return Array.isArray(data) ? sortData(data, isAscending) : []
  }, [data, isAscending])

  return (
    <section className=''>
      <HeaderComponent setIsAscending={setIsAscending} isLoading={isLoading} isAscending={isAscending} text='Día Actual' />
      <article className='grid grid-cols-2 gap-2'>
        {
            sortedData.map(meta => (
              <BarraProgressProduct
                key={meta.id} pruducto={meta.producto} ventaActual={meta.ventaActual} aspiracionDia={meta.aspiracionDia}
                percentage={parseFloat(meta.porcentaje)} percentage2={parseFloat(meta.porcentaje2)}
              />
            ))
        }
      </article>
    </section>

  )
}

export default AspDiaPage
