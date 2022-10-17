const mongoose = require('mongoose')
module.exports = mongoose.model('chatMessage',mongoose.Schema({
    enviadoPor:String,
    recebidoPor:String,
    idEmissor:String,
    idReceptor:String,
    room:String,
    bodyMsg:String,
}))