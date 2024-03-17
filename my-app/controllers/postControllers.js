import { comentsModel } from "../model/comentsModel.js";
import { postsModel } from "../model/postModel.js";
import { verificarToken } from "../utils/token.js";


// ver todos los posts
export const verTodosPosts = async (req, res) => {
    try {
        const posts = await postsModel.find().populate('autor');
        return res.json(posts);
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'error del servidor al cargar lista de publicaciones'
        });
    }
}
//ver solo un post
export const verPost = async (req, res) => {
    // return res.json('Ruta ver usuario')
    try {
        const { id } = req.params;
        const postEncontrado = await postsModel.findById(id);
        return res.json(postEncontrado);
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'error interno del servidor obtener publicacion'
        });
    }
}
//crear post
export const createPost = async (req, res) => {
    try {
        const { titulo, descripcion, postFotoURL } = req.body;
        
        const { token } = req.headers;
        console.log(token)
        const tokenValido = verificarToken(token);

        console.log(tokenValido);
        if (!tokenValido) {
        return res.status(500).json({
            message: 'El token no es valido',
        });
        }


        const autor = tokenValido.id;

        const newPost = new postsModel({
            titulo: titulo,
            descripcion: descripcion,
            postFotoURL: postFotoURL,
            autor: autor,
        })
        await newPost.save();

        return res.json({ message: 'post creado con exito' });
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'error interno del servidor al intentar crear publicacion',
            error: error,
        });
    }
}
//editar post
export const editPost = async (req, res) => {
    try {
        const { id, titulo, descripcion, postFotoURL } = req.body;

        //validar el autor .....
        const { token } = req.headers;
        console.log(token)
        const tokenValido = verificarToken(token);

       // console.log(tokenValido);
        if (!tokenValido) {
        return res.status(500).json({
            message: 'El token no es valido',
        });
        }


        const autorId = tokenValido.id;
        //
        const post = await postsModel.findById(id);

        if(post.autor.toString() !== autorId){
            return res.status(500).json({
                message: 'El autor no es valido',
            });
        }

        await postsModel.findByIdAndUpdate(id, {
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
//eliminar post
export const deletePost = async (req, res) => {
    try {
        const { id } = req.body;
        //eliminar el post
        await postsModel.findByIdAndDelete(id);
        // Comprobar si se encontró el post antes de eliminar los comentarios
        if (!deletePost) {
            return res.status(404).json({ mensaje: 'Post no encontrado' });
        }
        //eliminar el comentario
        //await comentsModel.deleteMany({ postrs: id });
        await comentsModel.deleteMany({postrs:id});
        return res.json({ message: 'post y comentarios, Eliminado con exito' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'error interno del servidor al intentar eliminar post'
        });
    }
}
