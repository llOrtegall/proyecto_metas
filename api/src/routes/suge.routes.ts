import { Router } from 'express'
import { SugeridosPrimeraConsulta } from '../controllers/suge.controller'

export const RouteSuge = Router()

RouteSuge.post('/SugeridosPrimeraConsulta', SugeridosPrimeraConsulta)

