const express = require('express')
require('dotenv').config()
const cors = require('cors')
const conexao = require('./conexao')
conexao()
const rota = require('./Rotas')
const app = express()
app.use(cors())
app.use(rota)

app.listen('4000')
