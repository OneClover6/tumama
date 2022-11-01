// const path = require('path');
const express = require('express');
const colors = require ('colors');
const config = require('./app/config');

// let ruta = 'app/config/enviroments/development.env'
// const dotenv = require('dotenv').config({
//     path: path.resolve(__dirname, ruta)
// }); 

const server = express();

const port = process.env.PORT;
//const port = 3000;

server.get('/', (req, res)=>{
    res.send('Hola Mundo');
})

server.listen(port, callback());
