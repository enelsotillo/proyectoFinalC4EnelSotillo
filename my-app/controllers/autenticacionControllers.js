import jwt from 'jsonwebtoken';
const jwt_key = process.env.JWT_KEY;
console.log(jwt_key);
const listaUsuarios =  [
    {id:1, usuario:'enel', password: '123123'},
    {id:2, usuario:'rafael', password: '110123'},
    {id:3, usuario:'rey', password: '110100'}
]
//autenticar
export const autenticacion =(req, res) =>{
    try {
    const usuario = req.body.usuario
    let token = jwt.sign({ usuario: usuario }, jwt_key);
    res.json({token: token});
    } catch (error) {
        res.status(500).json({message: 'se ha generado un error', error: error,});
    }
    const usuario = req.body.usuario
    let token = jwt.sign({ usuario: usuario }, jwt_key);
    res.json({token: token});
}
//registrar
export const registrar =(req, res) =>{
   // let token = jwt.sign({ id: 1 }, jwt_key);

}
//descodificar token
export const verificarToken = (req, res) => {
    const token = req.body.token;
    try {    
    console.log(token);
    let descodificado = jwt.verify(token, jwt_key);
    res.json({datos: descodificado});
    console.log(descodificado);
    } catch (error) {
        res.status(500).json({message: 'se ha generado un error', error: error,});
        
    }
    

}