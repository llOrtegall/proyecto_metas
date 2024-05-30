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

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});