import { metasDelDia, cumplimientoDiaProducto, cumplimientoMesActualProducto, vtaMesAntPro } from "../controllers/metas.controller";
import { Router } from "express"; 

export const routerMetas = Router()

routerMetas.post('/metasDia', metasDelDia)

routerMetas.get('/cumplimientoDiaProducto', cumplimientoDiaProducto)

routerMetas.get('/cumpMesAct', cumplimientoMesActualProducto)

routerMetas.get('/cumpMesAnt', vtaMesAntPro)