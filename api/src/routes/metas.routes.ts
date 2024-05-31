import { metasDelDia } from "../controllers/metas.controller";
import { Router } from "express"; 

export const routerMetas = Router()

routerMetas.post('/metasDia', metasDelDia)