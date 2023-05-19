const { Pool } = require('pg');
require('dotenv').config();


// Configura la conexión a la base de datos PostgreSQL a través de variables de entorno
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    allowExitOnIdle: true
});

// Callback de tipo GET que permite obtener todos los posts desde la base de datos.

const getPosts =async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM posts order by id');
        const posts = result.rows;
        res.json(posts);
        client.release();
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: `Error al obtener los posts ${process.env.DB_USER} ${process.env.DB_HOST} ${process.env.DB_NAME} ${process.env.DB_PORT}` });
    }
}

// Callback de tipo POST que permite insertar un nuevo post a la base de datos

const postPost =async (req, res) => {
    const { titulo, url, descripcion } = req.body;
    const img=url;
    //console.log(titulo, img, descripcion);
    const likes = 0;
    try {
        const client = await pool.connect();
        const result = await client.query(
            'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING id',
            [titulo, img, descripcion, likes]
        );
        const postId = result.rows[0].id;
        //console.log(result.rows[0]);
        res.json({ id: postId, titulo, img, descripcion, likes });
        client.release();
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al insertar el post' });
    }
}

// Callback de tipo PUT que permite actualizar el estado de los likes dentro de la base de datos. 

const putPost =async (req, res) => {
    const id = req.params.id;
    const client = await pool.connect();
    let likes=0;
    try {
        const result2 = await client.query('SELECT likes FROM posts where id=$1', [id]);
        const data=result2.rows[0];
        likes=data.likes+1;
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

    try {
        const result = await client.query('UPDATE posts SET likes = $1 WHERE id = $2 RETURNING *', [likes, id]);
        const updatedPost = result.rows[0];
        res.json(updatedPost);
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        client.release();
    }
}


// Callback de tipo DELETE que permite borrar post de la base de datos.

const deletePosts =async (req, res) => {
    const { id } = req.params;

    try {
        const client = await pool.connect();
        await client.query('DELETE FROM posts WHERE id = $1', [id]);
        client.release();
        res.sendStatus(204);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

// Exportación de los callbacks

module.exports ={getPosts, postPost, putPost, deletePosts};