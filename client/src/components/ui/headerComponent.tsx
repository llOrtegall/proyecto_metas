import { Loading } from '../animations/Loading'
import { ArrowsIcon } from '../icons'

interface HeaderComponentProps {
  setIsAscending: (value: boolean) => void
  isLoading: boolean
  isAscending: boolean
}

export function HeaderComponent ({ setIsAscending, isLoading, isAscending }: HeaderComponentProps) {
  return (
    <section className='w-full flex items-center justify-center gap-10 py-4'>
      <h1 className='text-2xl font-semibold'>Aspiración Día Actual</h1>
      <button onClick={() => setIsAscending(!isAscending)} className='flex p-3 items-center justify-center bg-blue-600 text-lg rounded-md gap-4 text-white font-semibold hover:bg-blue-500'>
        <p className='text-center'>Cambiar Orden</p>
        <ArrowsIcon />
      </button>

      {
      isLoading
        ? (
          <div className='absolute z-50 left-8 top-2 flex flex-col items-center justify-center'>
            <Loading />
            <p className='text-blue-600 font-semibold'>Cargando y/o Actualizando Información ...</p>
          </div>
          )
        : null
    }

    </section>
  )
}
