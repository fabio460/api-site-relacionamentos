const http = require("http");
const { Server } = require("socket.io");
const modelChat = require('./Models/modelChat')

const  WebSocket = (app)=> {
    const server = http.createServer(app);
    const io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
            allowedHeaders: ["my-custom-header"],
            credentials: false,
            allowRequest: (req, callback) => {
                const noOriginHeader = req.headers.origin === undefined;
                callback(null, noOriginHeader);
              }
        },
        // cors: {
        //     origin: "https://site-relacionamentos-fabio460.vercel.app/",
        //     methods: ["GET", "POST"],
        //     allowedHeaders: ["my-custom-header"],
        //     credentials: true
        // },
    });

    let mensagens = []

    async function getMsg(msg) {
        let model =await modelChat.find()
        
        let m = await msg
        return model
    }    

    io.on("connection",async (socket) => {
        socket.on("msg",msg=>{
           mensagens.push(msg)
           //console.log(msg)
           modelChat.create({
            room:msg.room,
            idEmissor:msg.idEmissor,
            idReceptor:msg.idReceptor,     
            enviadoPor:msg.enviadoPor,
            recebidoPor:msg.recebidoPor,
            bodyMsg:msg.bodyMsg,
           })
        })
        let mensMongo = await getMsg(mensagens)
       // console.log(mensMongo)
        socket.emit('men',mensMongo)
    });

    return server
}

module.exports = WebSocket