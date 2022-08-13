const rota = require('express').Router()

const multer  = require('multer')
const upload = multer()
const controllerUsuario = require('./Controllers/controllerUsuario')
rota.get('/',(req,res)=>{
    res.send('<h1>back-end rodando ...</h1>')
})
rota.get('/usuarioslist',controllerUsuario.getUsuarios)
rota.post('/jwt',upload.single('avatar'),controllerUsuario.autenticarCliente)
module.exports = rota