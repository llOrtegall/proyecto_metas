import { BarraProgressProduct } from '../components/ui/ProgresoProducto'
import { ArrowsIcon } from '../components/icons'
import { MetasProducto } from '../types/Metas'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface ApsMetasProps {
  codigo: number
  zona: string
}

const ObtenerMes = () => {
  const fecha = new Date()
  return fecha.toLocaleString('es-ES', { month: 'long' })
}

function AspMenAntPage ({ codigo, zona }: ApsMetasProps) {
  const [data, setData] = useState<MetasProducto[]>([])
  const [isAscending, setIsAscending] = useState(false)

  const sortedData = Array.isArray(data)
    ? [...data]
        .sort((a, b) => {
          // Siempre coloca el elemento con id 'especial' en primer lugar
          if (a.id === 17) return -1
          if (b.id === 17) return 1

          // Para todos los demás elementos, ordena por porcentaje
          return isAscending ? parseFloat(a.porcentaje) - parseFloat(b.porcentaje) : parseFloat(b.porcentaje) - parseFloat(a.porcentaje)
        })
    : []

  useEffect(() => {
    axios.get('/cumpMesAnt', { params: { codigo, zona } })
      .then(res => setData(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <section className='w-full flex items-center justify-center gap-10'>
        <h1 className='text-2xl font-semibold '>Aspiración Mes Actual: {ObtenerMes().toUpperCase()}</h1>
        <button
          onClick={() => setIsAscending(!isAscending)}
          className='flex p-3 items-center justify-center bg-blue-600 text-lg rounded-md gap-4 text-white font-semibold hover:bg-blue-500'
        >
          <p className='text-center'>Cambiar Orden</p>
          <ArrowsIcon />
        </button>
      </section>

      <div className='grid grid-cols-4 gap-2 px-2'>
        {data && (
          sortedData.map(meta => (
            <BarraProgressProduct
              key={meta.id} pruducto={meta.producto} ventaActual={meta.ventaActual} aspiracionDia={meta.aspiracionDia}
              percentage={parseFloat(meta.porcentaje)} percentage2={parseFloat(meta.porcentaje2)}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default AspMenAntPage
