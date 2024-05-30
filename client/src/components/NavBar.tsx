import { CalendarAntIcon, CalendarIcon, Dashboard, DocsIcon, SunIcon } from './icons'
// import { useAuth } from '../auth/AuthContext.jsx'
import { NavLink } from 'react-router-dom'
import { LogoImage } from './ui/LogoImage'
// import { Switch } from '@tremor/react'

export function NavBar () {
  // const { darkMode, toggleTheme } = useTheme()

  return (
    <>
      <figure className=''>
        <LogoImage zona={39627} key={39627} />
      </figure>

      <ul className='flex flex-col gap-2 2xl:gap-4'>
        <li>
          <NavLink className='hover:text-blue-600 hover:underline lg:flex lg:items-center lg:gap-2 lg:py-2 0xl:gap-6' to='/resumen'>
            <Dashboard />
            <span className='hidden lg:block text-xs lg:text-sm lg:font-semibold 0xl:text-lg 2xl:text-2xl'>Resumen De Aspiración</span>
          </NavLink>
        </li>
        <li>
          <NavLink className='hover:text-blue-600 hover:underline lg:flex lg:items-center lg:gap-2 lg:py-2 0xl:gap-6' to='/aspiracionDia'>
            <SunIcon />
            <span className='hidden lg:block text-xs lg:text-sm lg:font-semibold 0xl:text-lg 2xl:text-2xl'>Aspiración Del Día</span>
          </NavLink>
        </li>
        <li>
          <NavLink className='hover:text-blue-600 hover:underline lg:flex lg:items-center lg:gap-2 lg:py-2 0xl:gap-6' to='/aspiracionMesActual'>
            <CalendarIcon />
            <span className='hidden lg:block text-xs lg:text-sm lg:font-semibold 0xl:text-lg 2xl:text-2xl'>Aspiración Mes Actual</span>
          </NavLink>
        </li>
        <li>
          <NavLink className='hover:text-blue-600 hover:underline lg:flex lg:items-center lg:gap-2 lg:py-2 0xl:gap-6' to='/aspiracionMesAnterior'>
            <CalendarAntIcon />
            <span className='hidden lg:block text-xs lg:text-sm lg:font-semibold 0xl:text-lg 2xl:text-2xl'>Aspiración Mes Anterior</span>
          </NavLink>
        </li>
        <li>
          <NavLink className='hover:text-blue-600 hover:underline lg:flex lg:items-center lg:gap-2 lg:py-2 0xl:gap-6' to='/sugeridos'>
            <DocsIcon />
            <span className='hidden lg:block text-xs lg:text-sm lg:font-semibold 0xl:text-lg 2xl:text-2xl'>Sugeridos</span>
          </NavLink>
        </li>
        <li>
          <NavLink className='hover:text-blue-600 hover:underline lg:flex lg:items-center lg:gap-2 lg:py-2 0xl:gap-6' to='/historial'>
            <DocsIcon />
            <span className='hidden lg:block text-xs lg:text-sm lg:font-semibold 0xl:text-lg 2xl:text-2xl'>Historial Categorias</span>
          </NavLink>
        </li>
      </ul>

      <section className='w-full flex flex-col gap-2 2xl:gap-4 items-center justify-center'>
        {/* <section className='pt-4 min-w-56 py-2 flex justify-center bg-blue-700 rounded-md'>
          <Switch id='switch' name='switch' checked={darkMode} onChange={toggleTheme} className='w-full' />
        </section> */}

        <button className='min-w-56 2xl:py-4 text-white font-semibold bg-blue-700 p-2 rounded-md hover:bg-blue-500'>
          Cerrar Sesión
        </button>

        <p className='text-center text-base text-balance'>La sesión se cerrará automáticamente cada 2 horas por seguridad</p>
      </section>

    </>
  )
}
