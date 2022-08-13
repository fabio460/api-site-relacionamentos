const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    res.send('<h1>back end rodando ...</h1>')
})
app.listen('4000')