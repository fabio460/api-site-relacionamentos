const express = require('express')
require('dotenv').config()
const conexao = require('./conexao')
conexao()
const rota = require('./Rotas')
const app = express()
const cors = require("cors");
app.use(cors());
app.use(rota)

const WebSocket = require('./WebSocket')
WebSocket(app).listen(4000, () => {
  console.log("Servidor rodando...");
});