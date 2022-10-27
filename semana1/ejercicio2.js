const express = require('express')
const app = express()
const port = 3002

app.get('/clientes', (req, res) => {
  res.send('Bienvenido Usuario!')
})

app.listen(port, () => {
  console.log(`Servidor Iniciado con el puerto ${port}`)
})