import { Router } from "express";
import { subirFile } from "../controllers/fileControllers.js";
export const fileRouters = Router();

//subir archivo
fileRouters.post('/subirArchivo', subirFile);
