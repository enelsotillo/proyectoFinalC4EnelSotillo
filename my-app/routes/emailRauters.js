import { Router } from "express";
import { enviarEmail } from "../controllers/emailControllers.js";
export const emailRouters = Router();

emailRouters.post('/enviarEmail', enviarEmail);