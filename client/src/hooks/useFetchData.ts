import { MetasProducto } from '../types/Metas'
import { useEffect, useState } from 'react'
import axios from 'axios'

function sortData (data: MetasProducto[], isAscending: boolean): MetasProducto[] {
  return [...data].sort((a, b) => {
    // Siempre coloca el elemento con id 'especial' en primer lugar
    if (a.id === 17) return -1
    if (b.id === 17) return 1

    // Para todos los demás elementos, ordena por porcentaje
    return isAscending ? parseFloat(a.porcentaje) - parseFloat(b.porcentaje) : parseFloat(b.porcentaje) - parseFloat(a.porcentaje)
  })
}

export function useFecthMetasData (url: string, company: string, codigo: number) {
  const [data, setData] = useState<MetasProducto[]>([])
  const [error, setError] = useState<Error | null>(null)
  const [isAscending, setIsAscending] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    axios.get(url, { params: { codigo, zona: company } })
      .then(res => setData(res.data))
      .catch(err => setError(err))
      .finally(() => setIsLoading(false))
  }, [url, company, codigo])

  // Verifica que los datos existen antes de intentar ordenarlos
  const sortedData = Array.isArray(data) ? sortData(data, isAscending) : []

  return { sortedData, isLoading, error, setIsAscending, isAscending }
}
