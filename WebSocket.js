const http = require("http");
const { Server } = require("socket.io");


const  WebSocket = (app)=> {

   
    let mensagens = [
        {
            nome:'fabio oliveira',
            mensagem:'ola fabio, blz'
        },
        {
            nome:'ana',
            mensagem:'ola Ana, como vai?'
        },
    ]

    const server = http.createServer(app);
    const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
    });

    io.on("connection", (socket) => {
    
    socket.emit('men',mensagens)
    });

    return server
}

module.exports = WebSocket