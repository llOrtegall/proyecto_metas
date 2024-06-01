import axios from 'axios'
import { useEffect } from 'react'

interface AspDiaPageProps {
  codigo: number
  zona: string
}

function AspDiaPage ({ codigo, zona }: AspDiaPageProps) {
  console.log(zona)
  useEffect(() => {
    axios.get('/cumplimientoDiaProducto', { params: { codigo, zona } })
      .then(res => console.log(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h1>{codigo}</h1>
      <h1>{zona}</h1>
    </div>
  )
}

export default AspDiaPage
