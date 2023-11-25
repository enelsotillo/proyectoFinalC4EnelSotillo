
const listaUsuarios = [
    {nombre:"Juan"},
    {nombre:"Jose"}
]

// ver usuarios
export const verTodosUsuarios = (req, res) =>{
    try {
        return res.json(listaUsuarios);
    } catch (error) {
        console.error(error)
      return res.status(500).json({
         message: 'error del servidor'
    });
 }
} 
//ver usuario
export const verUsuario = (req, res) =>{
   // return res.json('Ruta ver usuario')
   try {
    return res.json({message: 'ver usuario'})
   } catch (error) {
    console.error(error)
    return res.status(500).json({
        message: 'error del servidor'
   });
 }
}

//crear usuario
export const createUsuario = (req, res) =>{
    // return listaUsuarios;
    try {
        return res.json({message:' crear usuario'})
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'error del servidor'
       });
    }
}
//editar usuario
export const editUsuario = (req, res) =>{
    //return listaUsuarios;
    try {
        return res.json({message:'Ruta editar usuario'})
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'error del servidor'
       });
    }
}
//eliminar usuario
export const deleteUsuario = (req, res) =>{
   // return listaUsuarios;
   try {
    return res.json({message:'Ruta Eliminar usuario'})
   } catch (error) {
    console.error(error)
    return res.status(500).json({
        message: 'error del servidor'
   });
   }
}
