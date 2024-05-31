import { DataInfSucursal } from './ui/DataInfPdvComp'
import { useAuth } from '../auth/AuthContext'
import { useEffect, useState } from 'react'
import { PDVINFO } from '../types/Pdv'
import axios from 'axios'

export function InfoPdvComponent () {
  const [pdv, setPdv] = useState<PDVINFO>()
  const { user } = useAuth()

  useEffect(() => {
    axios.post('/infopdv', { codigo: user.codigo })
      .then((res) => {
        console.log(res.data)
        setPdv(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [user.codigo])

  return (
    <section className='grid grid-cols-2 w-full sm:text-xs lg:text-lg justify-around py-2 px-1 gap-2'>
      {pdv && <DataInfSucursal pdv={pdv} />}
      {
        pdv?.VERSION !== '0'
          ? (
            <article className='flex justify-center text-center border py-1 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold gap-2'>
              <p className='text-xs lg:text-sm 2xl:text-xl'>Categoria: {pdv?.CATEGORIA || ''} </p>
              <p className='text-xs lg:text-sm 2xl:text-xl'>Clasificación: 💎 {pdv?.VERSION || ''} 💎</p>
            </article>
            )
          : (
            <article className='flex items-center justify-center text-center border py-1 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold gap-2'>
              <p>Categoria:</p>
              <p>{pdv?.CATEGORIA} </p>
            </article>
            )
      }

    </section>
  )
}
