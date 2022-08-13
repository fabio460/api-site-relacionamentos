const rota = require('express').Router()
const controllerUsuario = require('./Controllers/controllerUsuario')
rota.get('/usuarioslist',controllerUsuario.getUsuarios)
rota.post('/jwt',controllerUsuario.autenticarCliente)
module.exports = rota