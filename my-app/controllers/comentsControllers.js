import { comentsModel } from '../model/comentsModel.js'

// ver todos usuarios
export const verTodosComents = async (req, res) => {
    try {
        const coments = await comentsModel.find();
        return res.json(coments);
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'error del servidor'
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
            message: 'error interno del servidor al coment'
        });
    }
}
//crear usuario
export const createComents = async (req, res) => {
    try {
        const { comentario  } = req.body;
        const newComents = new comentsModel({
            comentario: comentario
        })
        await newComents.save();
        return res.json({ message: 'coment creado con exito' });
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'error interno del servidor al crear coment'
        });
    }
}
//editar usuario
export const editComents = async (req, res) => {
    try {
        const { id, comentario } = req.body;
        
        await comentsModel.findByIdAndUpdate( id, {
            comentario: comentario
        });
        return res.json({ message: 'coment modificado con exito' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'error interno del servidor al intentar modificar el coment'
        });
    }
}
//eliminar usuario
export const deleteComents = async (req, res) => {
    try {
        const { id } = req.body;
        
        await comentsModel.findByIdAndDelete(id);
        return res.json({ message: 'coment Eliminado con exito' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'error interno del servidor al intentar eliminar coment'
        });
    }
}
