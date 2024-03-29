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
            message: 'error interno del servidor al buscar usuario'
        });
    }
}
//crear usuario
export const createUsuario = async (req, res) => {
    try {
        const { usuario, password, nombre, apellido } = req.body;
        const newUsers = new usersModel({
            usuario: usuario,
            password: password,
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
        const { id, usuario, password, nombre, apellido } = req.body;
        // faltaria una validacion
        await usersModel.findByIdAndUpdate( id, {
            usuario: usuario, password: password, nombre: nombre, apellido: apellido
        });
        return res.json({ message: 'usuario modificado con exito' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'error interno del servidor al intentar modificar el usuario no encontrado'
        });
    }
}
//eliminar usuario
export const deleteUsuario = async (req, res) => {
    
    try {
        const { id } = req.body;
        console.log(req.body);
        await usersModel.findByIdAndDelete(id);
        return res.json({ message: 'usuario Eliminado con exito' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'error interno del servidor al intentar eliminar usuario'
        });
    }
}
