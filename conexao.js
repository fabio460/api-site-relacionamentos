const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.STRING_CONEXAO,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})

const db = mongoose.connection;


const conexao = ()=>{
    db.on('erro',error=>{console.error(error)})
    db.once("open",()=>{console.log('conectado com sucesso')});   
}
module.exports = conexao