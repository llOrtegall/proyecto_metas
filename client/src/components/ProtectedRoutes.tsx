import { Navigate, Outlet } from 'react-router-dom'
import { NavBar } from './NavBar'
import { type FC } from 'react'

interface ProtectedRouteProps {
  isAllowed: boolean
  redirectTo?: string
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ isAllowed, redirectTo = '/login' }) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />
  }

  // flex flex-col px-4 gap-2 justify-around h-[90vh] items-center pt-10 w-[30vw] 2xl'

  return (
    <>
      <nav className='w-3/12'>
        <NavBar />
      </nav>
      <main className='w-9/12'>
        <Outlet />
      </main>
    </>
  )
}
