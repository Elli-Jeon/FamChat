const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", function(request, response){
    response.sendFile(__dirname + "/chat.html");
})

app.listen(port, ()=>{
    console.log(`Listening at port : ${port}`);
})