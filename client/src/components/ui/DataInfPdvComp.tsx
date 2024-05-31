import { getColombiaTimeFecha, getColombiaTimeHora } from '../../services/time.services'
import { Loading } from '../animations/Loading'
import { useEffect, useState } from 'react'
import { PDVINFO } from '../../types/Pdv'

interface DataInfPdvProps {
  pdv: PDVINFO
}

// const FIVE_MINUTES_IN_MS = 5 * 60 * 1000

export function DataInfSucursal ({ pdv: { NOMBRE, SUPERVISOR } }: DataInfPdvProps) {
  const [fecha, setFecha] = useState<string>('')
  const [hora, setHora] = useState<string>('')

  useEffect(() => {
    getColombiaTimeFecha()
      .then(res => { setFecha(res.fecha) })
  }, [])

  useEffect(() => {
    getColombiaTimeHora()
      .then(res => { setHora(res.hora) })
  }, [])

  return (
    <>
      <article className='flex items-center justify-center text-center border py-1 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold'>
        <div className='text-xs lg:text-sm 2xl:text-xl'>Fecha: {fecha || <Loading />}</div>
      </article>
      <article className='flex items-center justify-center text-center border py-1 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold'>
        <div className='text-xs lg:text-sm 2xl:text-xl'> Hora: {hora || <Loading />}</div>
      </article>
      <article className='flex items-center justify-center text-center border py-1 rounded-md bg-slate-300 dark:bg-slate-900 font-semibold gap-4'>
        <div className='text-xs lg:text-sm 2xl:text-xl overflow-hidden overflow-ellipsis whitespace-nowrap'>{NOMBRE || <Loading />}</div>
        <div className='text-xs lg:text-sm 2xl:text-xl overflow-hidden overflow-ellipsis whitespace-nowrap'>{SUPERVISOR || <Loading />}</div>
      </article>
    </>
  )
}
