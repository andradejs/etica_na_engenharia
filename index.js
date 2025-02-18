const express = require('express')
const path = require('path')

const app = express();


const PORT = 3000;

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'public','home.html'))
})


app.listen(PORT,()=>{
    console.log('Servidor rodando em http://localhost:3000')
})