import axios from "axios";

export const optenerProvincias = async (req, res) => {
  try {
    const url = "https://infra.datos.gob.ar/catalog/modernizacion/dataset/7/distribution/7.2/download/provincias.json";
    const respuesta = await axios.get(url);

    if (typeof respuesta.data === "array") {
      const provincias = respuesta.data.map((provincia) => ({
        id: provincia.id,
        nombre: provincia.nombre,
      }));

      return res.status(200).json({
        
        mensaje: "Provincias obtenidas correctamente",
        provincias,
        
      });
    } else {
      return res.status(400).json({
        mensaje: "El formato de la respuesta no es válido",
      });
    }
  } catch (error) {
    return res.status(500).json({
      mensaje: "Se ha generado un error",
      error,
    });
  }
};