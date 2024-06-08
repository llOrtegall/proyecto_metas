import axios from 'axios'
import { useEffect, useState } from 'react'

function HistCatPage ({ codigo }: { codigo: number }) {
  const [historial, setHistorial] = useState([])

  useEffect(() => {
    axios.get(`/historial?codigo=${codigo}`)
      .then(res => {
        setHistorial(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [codigo])

  console.log(historial)
  return (
    <section className='flex w-full p-2'>
      <div className='w-1/2 p-2'>
        <h2 className='text-center font-semibold text-xl 2xl:text-2xl xl:grid-cols-2 pb-2'>Año Actual</h2>
        <ul className='grid grid-cols-1 xl:grid-cols-2 '>
          test demo
        </ul>
      </div>
    </section>
  )
}

export default HistCatPage
