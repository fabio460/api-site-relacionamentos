const modelUsuario = require('../Models/modelUsuario')
const jwt = require('jsonwebtoken')
exports.getUsuarios =async (req,res)=>{
    const p = await modelUsuario.find()
    res.send(p)
}

exports.setUsuarios = (req,res)=>{
  modelUsuario.create({
    nome:req.body.nome,
    email:req.body.email,
    senha:req.body.senha,
    imagemPerfil:req.file.location,
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
  console.log(req.file)


  res.send(req.file)
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
     userName:user.userName,
     email:user.email,
     avatar:user.avatar,
     id:user._id,
     cidade:user.cidade,
     idade:user.idade,
     descricao:user.descricao,
     capa:user.capa,
     profissao:user.profissao
   })
 }
}