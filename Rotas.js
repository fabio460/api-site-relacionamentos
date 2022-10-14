const rota = require('express').Router()

const multer  = require('multer')
const Multer = require('multer')
const FirebaseStorage = require('multer-firebase-storage')

const multer2 = Multer({
    storage: FirebaseStorage({
      bucketName: 'galeria-de-fotos-69d44.appspot.com',
      credentials: {
        clientEmail: "firebase-adminsdk-nizty@galeria-de-fotos-69d44.iam.gserviceaccount.com",
        privateKey:  "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCReikGnc8r343E\nJkY248xhvYKO4eOW0PZLG9TUOg/TD3KQrFhrRKM83jyn7jQwfVd7JXyVD3MLqzM4\noqBAbDMV9N88He40QIwvLMUPZE3K3ITpQYc/NAr4g3JfMxnG6JVN3UvPev/rPCXS\noOjxvHSWTAFUbKb5zJQAhdcWE4FREe1cAw9jn9MynxM4TXzoCx9PYFEQeMipIMQQ\nwKr/e1MKtlAUXBcdjAuNJCaWk+3nvC6H5bi/auEWUke4bvM79BPZ30A3L9ORvHPe\nmecpTuTR+AoyuW6P8s2HdtYPmQlmcqq0t17KcNvBn3qqAyAFUoavOrYQ4WtLipv+\ntTqsl6npAgMBAAECggEAFWF+5hoLeMdCbrGxYB/aygKwTY+lg2TyzdcpUIe4C60Z\niWnLFPjhhPCkuYmo4feKA+9egAnlPrHKtWgxZUaBu5hhttQvTj6uW8CYtcpoJIiE\ngEPBPOjJM/0dsiAwiatlRixgF/5b3pbYeDxuABlSiURibaYKZGxM1EbXdccoGmHv\nSnm3nQXsuO5x/7VYEqvtRgaSHv6N62/Lmps68oamlnbkz+xJIYVppSTVRj3v2JdH\ni0xxj9u6qb87gnwe8xgXxXlLwwn8peUB99ynOUEsaOW492v0vtadVueh/YdXQmK8\nXJ1MRaM9ZMk8wwW+dqbqAb9zLA2VXM7j/QY9hKFIgQKBgQDNasSai94fjhTdZlqR\ny4DXihP/hw8dGwXHxObdFMRjPfGz8hq8E1aA4jiJ15X1HL7nw7n+vWlqAlgpJfkm\nRsMz52/4O3VSJMFZVGhPfXguWyuEhRy48nowwr8hLMcEgIjDPoU1wOXGznWqLmGV\nLszwC1azipfqi2dbHxCG/7kYPwKBgQC1TNu+O1SUNGcMnrlNjmaPlf5ICItYyo0w\nwC/7emgF/VA3mAUnpJ0BdPRD//hIJBowlbZw9piS/7oxPMhCxc0T5F+DnZh+c72o\np/9v909VPVVnItmfNxwCeApkzU9XI08lkLratqH2+BcP8cigMjuT28WvuHJKCt5X\nhTf7rcBz1wKBgQCcKEdPaXaxrFRGPxIo9Xh74lbzkRu3N5y8Uf5jIO9utl9xOWKD\niXvgPJlYiJBSJskl7VAOzLU/Ror4tQpjw7WPVqhzH9g/Wvu1SgqGK07ahqpdcsfz\n/TlQqiucL6sXzBKrwnKH+51x9e/TMLE0NMDM1wHROVHllpY62jG5PtvaBwKBgQCL\n0YBOTxdFTLyEQQyLQVzbM0PtbZl5mowUosLeYGJE7DynAzhGgG8NJpMSth9WE3GX\nMn6G08aK52lCe6u9wyoLQz5eFHX8X2pO3XDjeojWJfztEzVd0nRpewYZAzVC8Foj\nkGBqOBrkiiPPCho9YUANIZptkAOkEomyWWz5TeBz9QKBgQCQOK5nmQDPnbsk/mb9\nybLETKe8AKQOFTY5+xid27AWqq3Xk5ajYQtE3OWgnPdFAV7tM51jOsKXrXJhcqQs\nFCOyS3SdstJxhycXMgLyzcPPA2bqjENz7zV6EkmFm50BJyvjntZQ466bp4NOB0/6\nCDGCgKHmJVhhP7Zq5hPJUFkGwQ==\n-----END PRIVATE KEY-----\n",
        projectId: "galeria-de-fotos-69d44",     
      },
      public:true,
      unique:true,
      contentType:'image/jpeg',
      mimeMap:{
        contentType:'image/jpeg',

      }
    })
  })

  var multerGoogleStorage = require("multer-cloud-storage");

  var uploadHandler = multer({
    storage: multerGoogleStorage.storageEngine()
  });

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
rota.post('/upload',uploadHandler.any(),controllerUsuario.uploadImagemFirebase)
module.exports = rota