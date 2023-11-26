import { Router } from "express";
export const autenticarRouters = Router();
import { autenticacion, verificarToken } from "../controllers/autenticacionControllers.js";

//autenticar usuario
autenticarRouters.post('/autenticar', autenticacion);
//verificarAutenticacion del usuario
autenticarRouters.post('/verificarToken', verificarToken);
