import { usersModel } from "../model/userModel.js";

// ver todos usuarios
export const verTodosUsuarios = async (req, res) => {
    try {
        const usuarios = await usersModel.find();
        return res.json(usuarios);
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'error del servidor'
        });
    }
}
//ver solo un usuario
export const verUsuario = async (req, res) => {
    // return res.json('Ruta ver usuario')
    try {
        const { id } = req.params;
        const usuarioEncontrado = await usersModel.findById(id);
        return res.json(usuarioEncontrado);
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'error interno del servidor al crear usuario'
        });
    }
}
//crear usuario
export const createUsuario = async (req, res) => {
    try {
        const { usuario, nombre, apellido } = req.body;
        const newUsers = new usersModel({
            usuario: usuario,
            nombre: nombre,
            apellido: apellido
        })
        await newUsers.save();
        return res.json({ message: 'usuario creado con exito' });
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'error del servidor'
        });
    }
}
//editar usuario
export const editUsuario = async (req, res) => {
    try {
        const { id, usuario, nombre, apellido } = req.body;
        
        await usersModel.findByIdAndUpdate( id, {
            usuario: usuario, nombre: nombre, apellido: apellido
        });
        return res.json({ message: 'usuario modificado con exito' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'error interno del servidor al intentar modificar el usuario'
        });
    }
}
//eliminar usuario
export const deleteUsuario = async (req, res) => {
    try {
        const { id } = req.body;
        
        await usersModel.findByIdAndDelete(id);
        return res.json({ message: 'usuario Eliminado con exito' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'error interno del servidor al intentar eliminar usuario'
        });
    }
}
