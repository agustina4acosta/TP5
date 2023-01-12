const express = require('express');
const app = express();
const port = 3030
const path = require('path');

app.use(express.static(path.join(__dirname,'public')));


app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')))
app.get('/ofertas', (req, res) => res.sendFile(path.join(__dirname, 'views', 'ofertas.html')))
app.get('/login',(req,res) => res.sendFile(path.join(__dirname ,'views', 'login.html')) )

app.get('/register',(req, res) => res.sendFile(path.join(__dirname, 'views', 'register.html')))

app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`))

