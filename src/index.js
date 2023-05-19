const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
require('dotenv').config();
const cors = require('cors');
const {getPosts, postPost, putPost, deletePosts} = require('./controllers/callbacks');

const app = express();
//generar constante que determina el puerto a usar
const PORT = process.env.PORT || 3000;

app.use(cors());

// Configura body-parser para parsear las solicitudes JSON
app.use(bodyParser.json());

// Configura la conexión a la base de datos PostgreSQL a través de variables de entorno
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    allowExitOnIdle: true
});


// Ruta para obtener todos los posts
app.get('/posts',getPosts);

// Ruta para insertar un nuevo post
app.post('/posts', postPost, putPost);

//Ruta para aumentar (actualizar) los likes
app.put('/posts/like/:id', putPost);

//Ruta para borrar post
app.delete('/posts/:id', deletePosts);

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor de Express escuchando en el puerto ${PORT}`);
});