const mongoose = require('mongoose');

const schema = mongoose.Schema({
    userName:String,
    email:String,
    senha:String,
    avatar:String,
    cidade:String,
    idade:String,
    descricao:String,
    capa:String,
    profissao:String
})
const modelUsuario = mongoose.model('usuario',schema)

module.exports = modelUsuario