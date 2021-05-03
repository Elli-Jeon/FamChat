const express = require("express");
const app = express();
const port = 3000;
const server = require("http").createServer(app);
const io = require("socket.io")(server);


app.use(express.static("public"));

app.get("/", function(request, response){
    response.sendFile(__dirname + "/chat.html");
})

io.on("connection",(socket)=>{
    console.log("socket is connected");

    socket.on("new message",(data)=>{
        socket.broadcast.emit("")
    })

})





app.listen(port, ()=>{
    console.log(`Listening at port : ${port}`);
})