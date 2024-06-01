import { ProtectedRoute } from './components/ProtectedRoutes'
import { Routes, Route } from 'react-router-dom'
import AspMenAntPage from './pages/ApsMesAnt'
import { useAuth } from './auth/AuthContext'
import HistCatPage from './pages/HistCate'
import LoginPage from './pages/LoginForm'
import ResumenPage from './pages/Resumen'
import AspMesPage from './pages/AspMes'
import AspDiaPage from './pages/ApsDia'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { PDVINFO } from './types/Pdv'
import SugeridosPage from './pages/Sugeridos'

axios.defaults.baseURL = 'http://localhost:3000/api/v1'

// TODO: a futuro debemos aplicar lazy load para la carga de las paginas ya que el bundle es muy grande
function App () {
  const { user, login, logout } = useAuth()
  const [pdv, setPdv] = useState<PDVINFO>({ CATEGORIA: '', VERSION: '', DIRECCION: '', NOMBRE: '', SUPERVISOR: '', ZONA: '' })

  useEffect(() => {
    const token = localStorage.getItem('tokenMetas')
    if (token !== null) {
      login(token)
    } else {
      logout()
      console.log('No Token')
    }
  }, [])

  useEffect(() => {
    if (user.codigo !== 0) {
      axios.post('/infopdv', { codigo: user.codigo })
        .then((res) => {
          setPdv(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [user.codigo])

  console.log(pdv)
  return (
    <>
      <Routes>
        <Route path='/login' index element={<LoginPage />} />
        <Route element={<ProtectedRoute isAllowed={!!user} pdvInfo={pdv} />}>
          <Route path='/' element={<ResumenPage nombres={user.nombres} codigo={user.codigo} username={user.username} catergoria={pdv.CATEGORIA} version={pdv.VERSION} />} />
          <Route path='/aspiracionDia' element={<AspDiaPage codigo={user.codigo} zona={pdv.ZONA} />} />
          <Route path='/aspiracionMesActual' element={<AspMesPage />} />
          <Route path='/aspiracionMesAnterior' element={<AspMenAntPage />} />
          <Route path='/sugeridos' element={<SugeridosPage />} />
          <Route path='/historial' element={<HistCatPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
