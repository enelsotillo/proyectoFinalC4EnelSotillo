import { Router } from "express";
import { createUsuario, deleteUsuario, editUsuario, verTodosUsuarios, verUsuario } from "../controllers/userController.js";
export const userRouters = Router();
//const { userRouters } = require('express').Router();

// ver usuarios
userRouters.get('/usuarios', verTodosUsuarios)
//ver usuario
userRouters.get('/usuario', verUsuario)
//crear usuario
userRouters.post('/usuario', createUsuario)
//editar usuario
userRouters.put('/usuario', editUsuario)
//eliminar usuario
userRouters.delete('/usuario', deleteUsuario)
