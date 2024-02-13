import jwt from 'jsonwebtoken';
const jwt_key = process.env.JWT_KEY;

export const verificarToken = (token) =>{

    try {
        let descodificado = jwt.verify(token, jwt_key);
        if(descodificado){
            return descodificado;
        }else {
            return false;
        }
        
    } catch (error) {
        return false;
    }
}
