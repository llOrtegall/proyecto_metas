import { ProtectedRoute } from './components/ProtectedRoutes'
import { Routes, Route } from 'react-router-dom'
import AspMenAntPage from './pages/ApsMesAnt'
import { useAuth } from './auth/AuthContext'
import HistCatPage from './pages/HistCate'
import LoginPage from './pages/LoginForm'
import ResumenPage from './pages/Resumen'
import AspMesPage from './pages/AspMes'
import AspDiaPage from './pages/ApsDia'
import { useEffect } from 'react'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api/v1'

function App () {
  const { user, login, logout } = useAuth()

  useEffect(() => {
    const token = localStorage.getItem('tokenMetas')
    if (token !== null) {
      login(token)
    } else {
      logout()
      console.log('No Token')
    }
  }, [])

  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path='/' element={<ResumenPage />} />
          <Route path='/aspiracionDia' element={<AspDiaPage />} />
          <Route path='/aspiracionMesActual' element={<AspMesPage />} />
          <Route path='/aspiracionMesAnterior' element={<AspMenAntPage />} />
          <Route path='/sugeridos' element={<AspDiaPage />} />
          <Route path='/historial' element={<HistCatPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
