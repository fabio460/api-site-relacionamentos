const modelUsuario = require('../Models/modelUsuario')
const jwt = require('jsonwebtoken')
var aws = require('aws-sdk')

exports.getUsuarios =async (req,res)=>{
    const p = await modelUsuario.find()
    res.send(p)
}
exports.getUsuarioPorId =async (req,res)=>{
  const p = await modelUsuario.find({
    _id:req.body.id
  })
  res.send(p)
}

exports.getUsuarioPorEmail =async (req,res)=>{
  const p = await modelUsuario.find({
    email:req.body.email
  })
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

exports.updateUsuario = (req,res)=>{
  var imagem = ''
  if (req.file) {
    imagem = req.file.location
  }
   try {
    modelUsuario.findByIdAndUpdate(req.body.id,{
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
    },(err)=>{
      if (err) {
        res.send(err)
      } else {
        res.send('atualizado com sucesso')
      }
    })
    
   } catch (error) {
    res.send(error)
   }
}

exports.removerConta =async (req,res)=>{
  let s3=new aws.S3()
  const post =await modelUsuario.find({
      _id:req.body.id
  })
   
   let objeto = post[0].imagemPerfil
   let objetoArray = objeto.split('/')
   let fileName = objetoArray[3]
  try {
      const deletar = modelUsuario.findByIdAndDelete(req.body.id,err=>{
          if (err) {
              res.send(err)
          } else {
              s3.deleteObject({ Bucket: process.env.BUCKET, Key:fileName}).promise();
              res.send('deletado com sucesso')
          }
      })
  } catch (error) {
      console.log(error)
  }
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

exports.uploadImagemFirebase = (req,res)=>{
  
  res.json(req.files)
}
