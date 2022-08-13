const express = require('express')
const conexao = require('./conexao')
conexao()
const rota = require('./Rotas')

const app = express()
app.use(rota)
app.listen('4000')