const express = require('express');
const colors = require ('colors'); 
const dotenv = requiere('dotenv').config(); 

const server = express();

const port = process.env.PORT;

server.get('/', (req, res)=>{
    res.send('Hola Mundo');
})

server.get('/becerra',(req,res)=>{
    res.send('Hola becerra');
})

server.listen(port, ()=>{
    console.log(`Esta conectando en la url https://localhost:${port}`.bgBlue)
});