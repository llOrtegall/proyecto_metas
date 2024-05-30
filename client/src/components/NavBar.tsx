import { CalendarAntIcon, CalendarIcon, Dashboard, DocsIcon, SunIcon, CategoriaIcon } from './icons'
import { useTheme } from '../context/ThemeContext'
// import { useAuth } from '../auth/AuthContext.jsx'
import { NavLinkItem } from './ui/NavLinkItem'
import { LogoImage } from './ui/LogoImage'
import { Switch } from '@tremor/react'
import { useAuth } from '../auth/AuthContext'

const navLinks = [
  { id: 1, path: '/', icon: Dashboard, label: 'Resumen De Aspiración' },
  { id: 2, path: '/aspiracionDia', icon: SunIcon, label: 'Aspiración Del Día' },
  { id: 3, path: '/aspiracionMesActual', icon: CalendarIcon, label: 'Aspiración Mes Actual' },
  { id: 4, path: '/aspiracionMesAnterior', icon: CalendarAntIcon, label: 'Aspiración Mes Anterior' },
  { id: 5, path: '/historial', icon: CategoriaIcon, label: 'Historial Categorias' },
  { id: 6, path: '/sugeridos', icon: DocsIcon, label: 'Sugeridos' }
]

export function NavBar () {
  const { darkMode, toggleTheme } = useTheme()
  const { logout } = useAuth()

  return (
    <ul className='flex h-full flex-col items-center justify-around bg-slate-200 dark:bg-slate-900'>
      <li className=''>
        <LogoImage zona={39627} key={39627} />
      </li>

      <li className='flex flex-col gap-6 font-semibold text-2xl'>
        {navLinks.map(link => <NavLinkItem key={link.id} path={link.path} icon={link.icon} label={link.label} />)}
      </li>

      <li className='w-full flex flex-col gap-2 2xl:gap-4 items-center justify-center'>
        <section className='pt-4 min-w-56 py-2 flex justify-center bg-blue-700 rounded-md'>
          <Switch id='switch' name='switch' checked={darkMode} onChange={toggleTheme} className='w-full' />
        </section>

        <button className='min-w-56 2xl:py-4 text-white font-semibold bg-blue-700 p-2 rounded-md hover:bg-blue-500' onClick={logout}>
          Cerrar Sesión
        </button>

        <p className='text-center text-base text-balance px-6'>La sesión se cerrará automáticamente cada 2 horas por seguridad</p>
      </li>
    </ul>
  )
}
