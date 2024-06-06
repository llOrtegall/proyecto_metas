import { CalendarAntIcon, CalendarIcon, Dashboard, DocsIcon, SunIcon, CategoriaIcon } from './icons'
import { useTheme } from '../context/ThemeContext'
import { NavLinkItem } from './ui/NavLinkItem'
import { useAuth } from '../auth/AuthContext'
import { LogoImage } from './ui/LogoImage'
import { Switch } from '@tremor/react'

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
    <ul className='flex flex-col h-screen items-center justify-around'>
      <LogoImage zona={39627} key={39627} />

      <li className='flex flex-col gap-4 font-semibold'>
        {navLinks.map(link => <NavLinkItem key={link.id} path={link.path} icon={link.icon} label={link.label} />)}
      </li>

      <li className=''>
        <section className=''>
          <Switch id='switch' name='switch' checked={darkMode} onChange={toggleTheme} className='w-full' />
        </section>

        <button className='' onClick={logout}>
          Cerrar Sesión
        </button>

        <p className=''>La sesión se cerrará automáticamente cada 2 horas por seguridad</p>
      </li>
    </ul>
  )
}
