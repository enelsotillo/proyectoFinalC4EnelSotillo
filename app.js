import express from 'express';

//constantes
const app = express()
const port = 3000;
const host = 'localhost';



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Servidor Express corriendo http://${host}:${port}`)
})
