import { postsModel } from "../model/postModel.js";

// ver todos usuarios
export const verTodosPosts = async (req, res) => {
    try {
        const posts = await postsModel.find();
        return res.json(posts);
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'error del servidor'
        });
    }
}
//ver solo un usuario
export const verPost = async (req, res) => {
    // return res.json('Ruta ver usuario')
    try {
        const { id } = req.params;
        const postEncontrado = await postsModel.findById(id);
        return res.json(postEncontrado);
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'error interno del servidor al crear nuevo post'
        });
    }
}
//crear usuario
export const createPost = async (req, res) => {
    try {
        const { titulo, descripcion, postFotoURL  } = req.body;
        const newPost = new postsModel({
            titulo: titulo,
            descripcion: descripcion,
            postFotoURL: postFotoURL
        })
        await newPost.save();
        return res.json({ message: 'post creado con exito' });
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'error del servidor'
        });
    }
}
//editar usuario
export const editPost = async (req, res) => {
    try {
        const { id, titulo, descripcion, postFotoURL } = req.body;
        
        await postsModel.findByIdAndUpdate( id, {
            titulo: titulo, descripcion: descripcion, postFotoURL: postFotoURL
        });
        return res.json({ message: 'post modificado con exito' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'error interno del servidor al intentar modificar el post'
        });
    }
}
//eliminar usuario
export const deletePost = async (req, res) => {
    try {
        const { id } = req.body;
        
        await postsModel.findByIdAndDelete(id);
        return res.json({ message: 'post Eliminado con exito' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'error interno del servidor al intentar eliminar post'
        });
    }
}
