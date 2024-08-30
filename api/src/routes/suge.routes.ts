import { Router } from 'express'
import { SugeridosPrimeraConsulta, SugeridosSegundaConsulta } from '../controllers/suge.controller'

export const RouteSuge = Router()

RouteSuge.post('/SugeridosPrimeraConsulta', SugeridosPrimeraConsulta)

RouteSuge.post('/SugeridosSegundaConsulta', SugeridosSegundaConsulta)