import jwt from 'jsonwebtoken';
import { usersModel } from '../model/userModel.js';
const jwt_key = process.env.JWT_KEY;
console.log(jwt_key);

//autenticar
export const autenticacion = async (req, res) => {
    try {
        const { usuario, password } = req.body
        const usuarioEnContrado = await usersModel.findOne({
            usuario, password 
        });
        if (!usuarioEnContrado) {
            return res.status(404).json({ mensaje: 'usuario no exste' });
        }
        const datos = {
            id: usuarioEnContrado._id,
            usuario: usuarioEnContrado.usuario,
            nombre: usuarioEnContrado.nombre,
            apellido: usuarioEnContrado.apellido,
        }

        let token = jwt.sign(datos, jwt_key, {expiresIn: '1h'});

        res.json({ token: token, datos: datos });
        
    } catch (error) {
        res.status(500).json({ message: 'se ha generado un error', error: error});
    }
}

//registrar
export const registrar = (req, res) => {
    // let token = jwt.sign({ id: 1 }, jwt_key);

}
//descodificar token
export const verificarToken = (req, res) => {
    const token = req.body.token;
    try {
        console.log(token);
        let descodificado = jwt.verify(token, jwt_key);
        res.json({ datos: descodificado });
        console.log(descodificado);
    } catch (error) {
        res.status(500).json({ message: 'se ha generado un error', error: error, });

    }


}