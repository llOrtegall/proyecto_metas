import { User } from '../types/User'

function ResumenPage ({ user }:{user: User}) {
  return (
    <section>
      <h1>Resumen Aspiración Día</h1>
      <p>Bienvenido @ {user.nombres}</p>
      <p>{user.codigo}</p>
    </section>
  )
}

export default ResumenPage
