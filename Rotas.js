const rota = require('express').Router()

const multer  = require('multer')
const upload = require('./configMulter')
const controllerUsuario = require('./Controllers/controllerUsuario')
rota.get('/',(req,res)=>{
    res.send('<h1>back-end rodando ...</h1>')
})
rota.get('/getUsuarios',controllerUsuario.getUsuarios)
rota.post('/jwt',upload.single('avatar'),controllerUsuario.autenticarCliente)
rota.post('/setUsuario',upload.single('imagemPerfil'),controllerUsuario.setUsuarios)

rota.put('/updateUsuario',upload.single('imagemPerfil'),controllerUsuario.updateUsuario)
rota.delete('/removerConta',upload.single('imagemPerfil'),controllerUsuario.removerConta)
module.exports = rota