const express = require('express');
const app = express();
const port = 3030
const path = require('path');

app.use(express.static(path.join(__dirname,'public')));


app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')))
app.get('/ofertas', (req, res) => res.sendFile(path.join(__dirname, 'views', 'ofertas.html')))
app.get('/tiendasOficiales', (req, res) => res.sendFile(path.join(__dirname, 'views', 'tiendasOficiales.html')))
app.get('/vender', (req, res) => res.sendFile(path.join(__dirname, 'views', 'vender.html')))
app.get('/ayuda', (req, res) => res.sendFile(path.join(__dirname, 'views', 'ayuda.html')))

app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`))

