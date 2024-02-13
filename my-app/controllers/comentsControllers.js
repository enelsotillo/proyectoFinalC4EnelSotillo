import { comentsModel } from '../model/comentsModel.js'
import { verificarToken } from "../utils/token.js";

// ver todos comentarios
export const verTodosLosComents = async (req, res) => {
    try {
        const { idPosts } = req.params;
        const comentsEnContrados = await comentsModel.find({
            postrs: idPosts,
        }).populate('autor', '-password -usuario');
        return res.json(comentsEnContrados);
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'error interno del servidor a la lista de comentarios del post '
        });
    }
}
//ver solo un usuario
export const verComents = async (req, res) => {
    // return res.json('Ruta ver usuario')
    try {
        const { id } = req.params;
        const comentsEncontrado = await comentsModel.findById(id);
        return res.json(comentsEncontrado);
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'error interno del servidor x comentario no encontrado'
        });
    }
}
//crear comentario
export const createComents = async (req, res) => {
    try {
        const { comentario, idPosts } = req.body;
        const { token } = req.headers;
        const tokenValido = verificarToken(token);
        if(!tokenValido){
            return res.status(500).json({
                mensaje: 'el token no es valido',
            })
        }
        const autor = tokenValido.id;
        const newComents = new comentsModel({
            comentario: comentario,
            autor: autor,
            postrs: idPosts,
        })
        console.log({postrs:idPosts});
        await newComents.save();
        return res.json({ message: 'comentario creado con exito' });
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'error interno del servidor al crear comentario'
        });
    }
}
//editar comentario
export const editComents = async (req, res) => {
    try {
      const { id, comentario, autor, idPosts } = req.body;
  
      // Validar el token y la autoría
      const { token } = req.headers;
      const tokenValido = verificarToken(token);
      if (!tokenValido) {
        return res.status(401).json({ message: 'El token no es válido' });
      }
      const autorId = tokenValido.id;
  
      // Validar la existencia del comentario
      const editComent = await comentsModel.findById(id);
      if (!editComent) {
        return res.status(404).json({ message: 'Comentario no encontrado' });
      }
  
      // Validar la autoría del comentario
      if (editComent.autor.toString() !== autorId) {
        return res.status(403).json({ message: 'No autorizado para editar el comentario' });
      }
  
      // Actualizar el comentario
      await comentsModel.findByIdAndUpdate(id, { comentario });
      res.json({ message: 'Comentario modificado con éxito' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  };
//eliminar comentario
export const deleteComents = async (req, res) => {
    try {
        const { id } = req.body;

        await comentsModel.findByIdAndDelete(id);
        return res.json({ message: 'comentario Eliminado con exito' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'error interno del servidor al intentar eliminar coment'
        });
    }
}
