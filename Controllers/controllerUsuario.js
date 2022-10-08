const modelUsuario = require('../Models/modelUsuario')
const jwt = require('jsonwebtoken')
exports.getUsuarios =async (req,res)=>{
    const p = await modelUsuario.find()
    res.send(p)
}

exports.setUsuarios = (req,res)=>{
  var imagem = ''
  if (req.file) {
    imagem = req.file.location
  }
  modelUsuario.create({
    nome:req.body.nome,
    email:req.body.email,
    senha:req.body.senha,
    imagemPerfil:imagem,
    cidade:req.body.cidade,
    bairro:req.body.bairro,
    estado:req.body.estado,
    logradouro:req.body.logradouro,
    cep:req.body.cep,
    rua:req.body.rua,
    complemento:req.body.complemento,

    profissao:req.body.profissao,
    telefone:req.body.telefone,
    observacoesFinais:req.body.observacoesFinais,
    outrasHabilidades:req.body.outrasHabilidades,
  })
  
  res.send('ss')
}

exports.autenticarCliente = async (req,res)=>{
  const {email,senha} = req.body;
 const user =await modelUsuario.findOne({
   email,
   senha
 })

 if(!user){
   res.send('usuario não encontrado')
 }else{
   return res.json({
     token : jwt.sign({modelUsuario:req.body.modelUsuario},'my-secret-key',{expiresIn:300}),
     usuario:user
   })
 }
}