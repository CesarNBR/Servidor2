const { Server } = require("socket.io");

const io = new Server(8080);

io.on("connection", (socket) => {
    socket.emit("hello", "world");

    socket.on("howdy", (arg) => {
        console.log(arg);
    });
});


io.on("connection", (socket) => {
    socket.on('news_by_server', function(data){
      console.log(data, "no presionado");
    })
    });

