import 'dotenv/config';
import fileUpload from 'express-fileupload';
import express from 'express';
import { userRouters } from './routes/userRouters.js';
import { autenticarRouters } from './routes/autenticarRouters.js';
import { fileRouters } from './routes/fileRouters.js';
import { geoRefRouters } from './routes/geoRefRauters.js';

//constantes
const app = express();
const port = process.env.PPORT;
const host = process.env.HOST;
 /*Middlewares */
 /*
app.use(function(req, res, next){
  console.log("ingreso a los Middlewares")
  res.status(500).send('se ingreso al middlewares')
})
*/
app.use(fileUpload());
app.use(express.json());
/* archivos staticos*/
app.use(express.static('my-app/public/css')) 

/* Rutas */
app.use(userRouters);
app.use(autenticarRouters);
app.use(fileRouters);
app.use(geoRefRouters);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Servidor Express corriendo http://${host}:${port}`)
})
