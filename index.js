const express = require('express')
const conexao = require('./conexao')
conexao()
const app = express()
app.get('/',(req,res)=>{
    res.send('<h1>back end rodando ok ...</h1>')
})
app.listen('4000')