import { Router } from "express";
import { createComents, deleteComents, editComents, verComents, verTodosLosComents } from "../controllers/comentsControllers.js";
export const comentRouters = Router();

//const { userRouters } = require('express').Router();

// ver todos los comentarios 
comentRouters.get('/coments/:idPosts', verTodosLosComents);
//ver comentario
comentRouters.get('/coment/:id', verComents);
//crear comentario
comentRouters.post('/coment', createComents);
//editar comentario
comentRouters.put('/coment', editComents);
//eliminar comentario
comentRouters.delete('/coment', deleteComents);
