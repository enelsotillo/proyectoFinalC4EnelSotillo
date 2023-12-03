import { Router } from "express";
import { createComents, deleteComents, editComents, verComents, verTodosComents } from "../controllers/comentsControllers.js";
export const comentRouters = Router();

//const { userRouters } = require('express').Router();

// ver usuarios
comentRouters.get('/coments', verTodosComents);
//ver usuario
comentRouters.get('/coment/:id', verComents);
//crear usuario
comentRouters.post('/coment', createComents);
//editar usuario
comentRouters.put('/coment', editComents);
//eliminar usuario
comentRouters.delete('/coment', deleteComents);
