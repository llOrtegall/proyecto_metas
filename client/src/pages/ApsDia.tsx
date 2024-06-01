import { BarraProgressProduct } from '../components/ui/ProgresoProducto'
import { ArrowsIcon } from '../components/icons'
import { MetasProducto } from '../types/Metas'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface AspDiaPageProps {
  codigo: number
  zona: string
}

function AspDiaPage ({ codigo, zona }: AspDiaPageProps) {
  const [metas, setMetas] = useState<MetasProducto[]>([])

  useEffect(() => {
    axios.get('/cumplimientoDiaProducto', { params: { codigo, zona } })
      .then(res => setMetas(res.data))
      .catch(err => console.error(err))
  }, [])

  const [isAscending, setIsAscending] = useState(false)

  // Verifica que los datos existen antes de intentar ordenarlos
  const sortedData = Array.isArray(metas)
    ? [...metas]
        .sort((a, b) => {
        // Siempre coloca el elemento con id 'especial' en primer lugar
          if (a.id === 17) return -1
          if (b.id === 17) return 1

          // Para todos los demás elementos, ordena por porcentaje
          return isAscending ? parseFloat(a.porcentaje) - parseFloat(b.porcentaje) : parseFloat(b.porcentaje) - parseFloat(a.porcentaje)
        })
    : []

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
        {metas && (
          sortedData.map(meta => (
            <BarraProgressProduct
              key={meta.id} pruducto={meta.producto} ventaActual={meta.ventaActual} aspiracionDia={meta.aspiracionDia}
              percentage={parseFloat(meta.porcentaje)} percentage2={parseFloat(meta.porcentaje2)}
            />
          ))
        )}
      </div>
    </section>

  )
}

export default AspDiaPage
