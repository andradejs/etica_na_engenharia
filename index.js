const express = require('express')
const path = require('path')
const app = express();

const { createServer } = require('@vercel/node');

app.use(express.static('public'));


const PORT = 3000;

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'public','home.html'))
})

app.get("/sobre",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'public','sobre.html'))
})

app.get("/impactossociais",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'public','impactossociais.html'))
})

app.get("/privacidade",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'public','privacidade.html'))
})

app.get("/responsabilidade",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'public','responsabilidade.html'))
})

app.listen(PORT,()=>{
    console.log('Servidor rodando em http://localhost:3000')
})