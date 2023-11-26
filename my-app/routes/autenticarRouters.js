import { Router } from "express";
import { autenticacion, verificarToken } from "../controllers/autenticacionControllers.js";
export const autenticarRouters = Router();
//autenticar usuario
autenticarRouters.post('/autenticar', autenticacion);
//verificarAutenticacion del usuario
autenticarRouters.post('/verificarToken', verificarToken);
