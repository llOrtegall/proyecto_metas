import { ProgressCircleComponent } from '../components/ui/ProgressCircle'
import { VentasDiaResumen } from '../components/ui/VentaDiaResumen'
import { GenerateQR } from '../components/ui/GeneraQrCod'
import { RenderCategoria } from '../components/ui/RenderCategoria'

interface PropsResumen {
  nombres: string
  codigo: number
  username: string
  version: string
  catergoria: string
}

function ResumenPage ({ nombres, codigo, username, catergoria, version }: PropsResumen) {
  return (
    <section className='w-full px-1 grid grid-cols-3 text-center font-semibold rounded-lg gap-2 text-gray-700 dark:text-white'>
      <h3 className='col-span-3 py-2 rounded-lg bg-slate-300 dark:bg-slate-900 dark:border dark:border-gray-500 xl:text-lg 2xl:text-2xl 2xl:py-4'>
        <span>Bienvenid@</span> <span className='text-blue-700 dark:text-yellow-400 pl-2 xl:text-lg 2xl:text-2xl'>{nombres}</span>
      </h3>

      <section className='col-span-1 flex flex-col gap-2'>

        <ProgressCircleComponent color='yellow' porcentaje={20} />

        <VentasDiaResumen venta={92314141} aspiracion={11024525} />

        <div className='w-full flex items-center rounded-lg justify-center py-2 dark:bg-slate-200'>
          <GenerateQR codigo={codigo} nombres={nombres} username={username} />
        </div>

      </section>

      <figure className='col-span-2 flex flex-col items-center justify-center bg-slate-300 dark:bg-slate-900 rounded-md dark:border dark:border-gray-500'>
        <RenderCategoria cat={catergoria} ver={version} />
      </figure>

    </section>
  )
}

export default ResumenPage
