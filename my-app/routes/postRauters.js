import { Router } from "express";
import { verTodosPosts, verPost, createPost, editPost, deletePost } from "../controllers/postControllers.js";
export const postRouters = Router();
//const { userRouters } = require('express').Router();

// ver usuarios
postRouters.get('/posts', verTodosPosts)
//ver usuario
postRouters.get('/post/:id', verPost)
//crear usuario
postRouters.post('/post', createPost)
//editar usuario
postRouters.put('/post', editPost)
//eliminar usuario
postRouters.delete('/post', deletePost)
