import { Router } from "express";
import { verTodosPosts, verPost, createPost, editPost, deletePost } from "../controllers/postControllers.js";
export const postRouters = Router();
//const { userRouters } = require('express').Router();

// ver todos los post
postRouters.get('/posts', verTodosPosts)
//ver solo un post
postRouters.get('/post/:id', verPost)
//crear post
postRouters.post('/post', createPost)
//editar post
postRouters.put('/post', editPost)
//eliminar post
postRouters.delete('/post', deletePost)
