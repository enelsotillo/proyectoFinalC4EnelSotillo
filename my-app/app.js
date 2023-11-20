import express from 'express';

//constantes
const app = express();
const port = 3000;
const host = 'localhost';
 /*Middlewares */
 /*
app.use(function(req, res, next){
  console.log("ingreso a los Middlewares")
  res.status(500).send('se ingreso al middlewares')
})
*/
function validarUsuario(req, res, next){
 const usurioValido = true;
 if(usurioValido){
  next();
 }else{
  res.status(401).send('usuario no autorizado')
 }
}
/* archivos staticos*/
app.use(express.static('my-app/public/css')) 

/* Rutas */
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/user', [validarUsuario], (req, res) =>{
  try {
    res.send('usuarios valido');
  } catch (error) {
    res.status(500).send('ocurrio un error en el servior')
  }
    
});
app.get('/301', (req, res) =>{
  res.status(301).send('lista de usuarios');
});

app.listen(port, () => {
  console.log(`Servidor Express corriendo http://${host}:${port}`)
})
