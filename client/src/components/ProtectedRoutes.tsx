import { Navigate, Outlet } from 'react-router-dom'
import { InfoPdvComponent } from './InfoPdvComponent'
import { NavBar } from './NavBar'
import { type FC } from 'react'
import { PDVINFO } from '../types/Pdv'

interface ProtectedRouteProps {
  redirectTo?: string
  isAllowed: boolean
  pdvInfo: PDVINFO
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ isAllowed, redirectTo = '/login', pdvInfo }) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />
  }

  return (
    <>
      <nav className='w-3/12'>
        <NavBar />
      </nav>
      <main className='w-9/12'>
        <InfoPdvComponent pdv={pdvInfo} />
        <Outlet />
      </main>
    </>
  )
}
