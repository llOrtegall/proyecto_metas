import { useEffect } from 'react'
import { useAuth } from '../auth/AuthContext'
import axios from 'axios'

export function InfoPdvComponent () {
  const { user } = useAuth()

  useEffect(() => {
    axios.post('/infopdv', { codigo: user.codigo })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <section className='grid grid-cols-2 w-full sm:text-xs lg:text-lg justify-around py-2 gap-2'>
      <article className='flex items-center justify-center text-center border py-1 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold'>
        <div className='text-xs lg:text-sm 2xl:text-xl'>Fecha: {/* Fecha || <Cargando /> */}</div>
      </article>
      <article className='flex items-center justify-center text-center border py-1 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold'>
        <div className='text-xs lg:text-sm 2xl:text-xl'> Hora: {/* Hora || <Cargando /> */}</div>
      </article>
      <article className='flex items-center justify-center text-center border py-1 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold gap-4'>
        <div className='text-xs lg:text-sm 2xl:text-xl overflow-hidden overflow-ellipsis whitespace-nowrap'>{/* NOMBRE || <Cargando /> */}</div>
        <div className='text-xs lg:text-sm 2xl:text-xl overflow-hidden overflow-ellipsis whitespace-nowrap'>{/* SUPERVISOR || <Cargando /> */}</div>
      </article>
      {/*
        // eslint-disable-next-line eqeqeq
        VERSION != 0
          ? (
            <article className='flex justify-center text-center border py-1 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold gap-2'>
              <p className='text-xs lg:text-sm 2xl:text-xl'>Categoria: {CATEGORIA || ''} </p>
              <p className='text-xs lg:text-sm 2xl:text-xl'>Clasificación: 💎 {VERSION || ''} 💎</p>
            </article>
            )
          : (
            <article className='flex items-center justify-center text-center border py-1 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold gap-2'>
              <p>Categoria:</p>
              <p>{CATEGORIA} </p>
            </article>
            )
            */
      }

    </section>
  )
}
