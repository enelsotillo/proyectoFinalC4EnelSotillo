import 'dotenv/config';
import fileUpload from 'express-fileupload';
import express from 'express';
import cors from "cors";
import { userRouters } from './routes/userRouters.js';
import { autenticarRouters } from './routes/autenticarRouters.js';
import { fileRouters } from './routes/fileRouters.js';
import { geoRefRouters } from './routes/geoRefRauters.js';
import { emailRouters } from './routes/emailRauters.js';
import { conexionMongoose } from './config/mongooseConfi.js';
import { postRouters } from './routes/postRauters.js';
import { comentRouters } from './routes/comentRouters.js';

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
app.use(cors());
/* archivos staticos*/
app.use(express.static('my-app/public/css')) 

/* Rutas */
app.use(userRouters);
app.use(autenticarRouters);
app.use(fileRouters);
app.use(geoRefRouters);
app.use(emailRouters);
app.use(postRouters);
app.use(comentRouters);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  conexionMongoose();
  console.log(`Servidor Express corriendo http://${host}:${port}`)
})
