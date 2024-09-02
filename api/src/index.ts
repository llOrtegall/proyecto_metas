import express from 'express';
import morgan from 'morgan'
import cors from 'cors'
import 'dotenv/config'

import { infopdvRouter } from './routes/infopdv.routes'
import { routerMetas } from './routes/metas.routes'
import { UserRouter } from './routes/user.routes';
import { RouteHist } from './routes/hist.routes'
import { RouteSuge } from './routes/suge.routes'

const PORT = process.env.PORT || 3030
const app = express();

const v1 = '/api/v1'

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.use(v1, UserRouter)
app.use(v1, infopdvRouter)
app.use(v1, routerMetas)
app.use(v1, RouteHist)
app.use(v1, RouteSuge)

app.get('/api/v1/dataTime', async (_req, res) => {
  try {
    const response = await fetch('http://worldtimeapi.org/api/timezone/America/Bogota')
    const data = await response.json()
    const { datetime } = data // "2024-02-23T09:38:19.557255-05:00"
    const fecha = datetime.split('T')[0]
    res.json({ fecha })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al obtener la fecha' })
  }
})

app.get('/api/v1/dataTime2', async (_req, res) => {
  try {
    const response = await fetch('http://worldtimeapi.org/api/timezone/America/Bogota')
    const data = await response.json()
    const { datetime } = data // "2024-02-23T09:38:19.557255-05:00"
    const hora = datetime.split('T')[1].split('.')[0]
    res.json({ hora })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al obtener la fecha' })
  }
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
