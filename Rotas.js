const rota = require('express').Router()
const { Uploader } = require("uploader");
const uploader = Uploader({
  apiKey: "free"
});

//  uploader.open('imagem').then(files => {
//   if (files.length === 0) {
//     console.log('No files selected.')
//   } else {
//     console.log('Files uploaded:');
//     console.log(files.map(f => f.fileUrl));
//   }
// }).catch(err => {
//   console.error(err);
// });





const multer  = require('multer')
const Multer = require('multer')
const FirebaseStorage = require('multer-firebase-storage')



  var multerGoogleStorage = require("multer-cloud-storage");

  // var uploadHandler = multer({
  //   storage: multerGoogleStorage.storageEngine()
  // });

const upload = require('./configMulter')
const controllerUsuario = require('./Controllers/controllerUsuario')
rota.get('/',(req,res)=>{
    res.send('<h1>back-end rodando ...</h1>')
})
rota.get('/getUsuarios',controllerUsuario.getUsuarios)
rota.post('/getUsuarioPorId',upload.single('imagemPerfil'),controllerUsuario.getUsuarioPorId)
rota.post('/getUsuarioPorEmail',upload.single('imagemPerfil'),controllerUsuario.getUsuarioPorEmail)
rota.post('/jwt',upload.single('avatar'),controllerUsuario.autenticarCliente)
rota.post('/setUsuario',upload.single('imagemPerfil'),controllerUsuario.setUsuarios)

rota.put('/updateUsuario',upload.single('imagemPerfil'),controllerUsuario.updateUsuario)
rota.delete('/removerConta',upload.single('imagemPerfil'),controllerUsuario.removerConta)
// rota.post('/upload',uploadHandler.any(),controllerUsuario.uploadImagemFirebase)
module.exports = rota