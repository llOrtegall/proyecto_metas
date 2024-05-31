import { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import { getColombiaTime } from '../../services/time.services'
import { Loading } from '../animations/Loading'
import { PDVINFO } from '../../types/Pdv'

interface DataInfPdvProps {
  pdv: PDVINFO
}

const FIVE_MINUTES_IN_MS = 5 * 60 * 1000

export function DataInfSucursal ({ pdv: { NOMBRE, SUPERVISOR } }: DataInfPdvProps) {
  const [fecha, setFecha] = useState<string>('')
  const [hora, setHora] = useState<string>('')
  const [error, setError] = useState<string | null>(null)

  const intervalIdRef = useRef<number | null>(null)

  const fetchTime = useCallback(() => {
    getColombiaTime()
      .then(response => {
        setFecha(response.fecha)
        setHora(response.hora)
      })
      .catch(error => {
        console.error('Error fetching time:', error)
        setError('Error fetching time')
      })
  }, [])

  const date = useMemo(() => {
    if (!hora) {
      return null
    }

    const [timePart, period] = hora.split(' ')
    const [hours, minutes, seconds] = timePart.split(':').map(Number)
    const date = new Date()
    date.setHours(hours + (period === 'pm' ? 12 : 0))
    date.setMinutes(minutes)
    date.setSeconds(seconds)

    return date
  }, [hora])

  useEffect(() => {
    fetchTime()
    const fetchIntervalId = setInterval(fetchTime, FIVE_MINUTES_IN_MS)

    return () => {
      clearInterval(fetchIntervalId)
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current)
      }
    }
  }, [fetchTime])

  useEffect(() => {
    if (!date) {
      return
    }

    intervalIdRef.current = setInterval(() => {
      const newDate = new Date(date.getTime() + 1000)
      const newHours = newDate.getHours()
      const newPeriod = newHours >= 12 ? 'pm' : 'am'
      const newTimePart = `${newHours % 12 || 12}:${newDate.getMinutes().toString().padStart(2, '0')}:${newDate.getSeconds().toString().padStart(2, '0')}`
      setHora(`${newTimePart} ${newPeriod}`)
    }, 1000)

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current)
      }
    }
  }, [date])

  if (error) {
    return <div>Error: {error}</div>
  }
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
