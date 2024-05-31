import { metasDelDia, cumplimientoDiaProducto } from "../controllers/metas.controller";
import { Router } from "express"; 

export const routerMetas = Router()

routerMetas.post('/metasDia', metasDelDia)

routerMetas.get('/cumplimientoDiaProducto', cumplimientoDiaProducto)