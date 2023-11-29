import { Router } from "express";
import { optenerProvincias } from "../controllers/geoRefControllers.js";
export const geoRefRouters = Router();

geoRefRouters.get('/optenerProvincias', optenerProvincias);
