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



// const { uuid } = require('uuidv4');
// require('dotenv').config()
// const {Storage} = require('@google-cloud/storage');
// var multer = require("multer");
// var express = require("express");
// var multerGoogleStorage = require("multer-cloud-storage");
// var app = express();
// const crypto = require('crypto')


// const  generateRandomString = (num) => {
//     const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let result1= ' ';
//     const charactersLength = characters.length;
//     for ( let i = 0; i < num; i++ ) {
//         result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }

//     return result1.toString();
// }




// const sequelize = new Sequelize(instancia3, {dialect: 'postgres'});
// sequelize.authenticate().then(function(){
//     console.log('conectado com sucesso')
// }).catch(function(erro){
//     console.log('falha ao se conectar: '+erro)
// })

// var pg = require('pg');
// var conString = "INSERT_YOUR_POSTGRES_URL_HERE" //Can be found in the Details page
// var client = new pg.Client(process.env.instancia3);
// client.connect(function(err) {
//   if(err) {
//     return console.error('could not connect to postgres', err);
//   }
//   client.query('SELECT NOW() AS "theTime"', function(err, result) {
//     if(err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0].theTime);
    
//     // >> output: 2018-08-23T14:02:57.117Z
//     client.end();
//   });
// });

// app.get('/',(req,res)=>{
//     res.send('rodando')
// })

// var uploadHandler = multer({
//     storage: multerGoogleStorage.storageEngine({
//         acl:'publicRead',
//         contentType:'image/jpeg',
//         filename:generateRandomString(5)
//     }),

// });
// var getF =function getFilename(req, file, cb) {
// 	cb(null,`${uuid()}_${file.originalname}`);
// }

// app.post('/upload' ,uploadHandler.any(), function (req, res,cb) {

//     console.log(req.files);
//     res.json(req.files[0].linkUrl);
// });