var express= require ("express");
var bodyParser= require("body-parser");
var api= require("./routers/api")
var cors= require("cors");


var app= express();
app.use(cors());
app.use(bodyParser.json());


app.get("/",function(req,res){
    res.send("Serverr")
})
app.use("/api",api)

app.listen(4000,function(){
    console.log("server is listening at 4000 ")
})