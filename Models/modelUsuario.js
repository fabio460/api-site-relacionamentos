const mongoose = require('mongoose');

const schema = mongoose.Schema({
    nome:String,
    email:String,
    senha:String,
    imagemPerfil:String,


    cidade:String,
    bairro:String,
    estado:String,
    logradouro:String,
    cep:String,
    rua:String,
    complemento:String,

    profissao:String,
    telefone:String,
    observacoesFinais:String,
    outrasHabilidades:String,
    
})
const modelUsuario = mongoose.model('perfilDoProfissional',schema)

module.exports = modelUsuario