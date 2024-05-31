import express from 'express';
import morgan from 'morgan'
import cors from 'cors'
import 'dotenv/config'

import { UserRouter } from './routes/user.routes';
import { infopdvRouter } from './routes/infopdv.routes'

const PORT = process.env.PORT || 3030
const app = express();

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.use('/api/v1', UserRouter)

app.use('/api/v1', infopdvRouter)

app.get('/api/v1/dataTime', async (_req, res) => {
  try {
    const response = await fetch('http://worldtimeapi.org/api/timezone/America/Bogota')
    const data = await response.json()

    const { datetime } = data // "2024-02-23T09:38:19.557255-05:00"

    const fecha = datetime.split('T')[0]
    const hora = datetime.split('T')[1].split('.')[0]

    res.json({ fecha, hora })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al obtener la fecha y hora' })
  }
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});