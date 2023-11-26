import path from 'node:path';
import files from 'express-fileupload';
import { fileURLToPath } from 'node:url';
//establecer las rutas en el path
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
//ruta para guardar archivos
const rutaGuardarArchivoPrincipal = __dirname + '/../../tmp/';
//funcion subir archivo 
export const subirFile = (req, res) => {
   console.log(rutaGuardarArchivoPrincipal);
     
    try {
        const archivo = req.files.miArchivo;
        const rutaGuadar = rutaGuardarArchivoPrincipal + archivo.name;
        return archivo.mv(rutaGuadar, function (err) {
            console.log(rutaGuardarArchivoPrincipal);
            if (err) {
                return res.status(500).json({ err });
            }
            return res.json('Archivo enviado con exito');
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error });
    }
}