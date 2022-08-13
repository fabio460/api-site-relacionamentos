const rota = require('express').Router()

const multer  = require('multer')
const upload = multer({ dest: './uploads' })
const controllerUsuario = require('./Controllers/controllerUsuario')
rota.get('/usuarioslist',controllerUsuario.getUsuarios)
rota.post('/jwt',upload.single('avatar'),controllerUsuario.autenticarCliente)
module.exports = rota