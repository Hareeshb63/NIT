var mongoClient= require("mongodb").MongoClient;
var url= "mongodb://127.0.0.1:27017";

var express= require("express");
var app= express();

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Method", "GET","POST","PUT");
  next();
});

app.get("/api/employeeinfo",function(req,res){
    mongoClient.connect(url,function(err,dbClient){
        if(!err){
            var database= dbClient.db("mydatabase");
            database.collection("empinfo").find({}).toArray(function(err,doc){
                if(!err){
                    res.send(doc);
                }else{
                    console.log(err);
                }
            })
         }else{
             console.log(err);
         }
       
    })
});

app.post("/api/addemployeeinfo", function (req, res) {
    mongoClient.connect(url, function (err, dbClient) {
        var database = dbClient.db("mydatabase");
        var data = {
            Emp_id: req.body.Emp_id,
            FName: req.body.FName,
            LName: req.body.LName,
            City: req.body.City,
            Mobile: req.body.Mobile
        };
        database.collection("empinfo").insertOne(data,function(err,result){
            if(!err){
                console.log("record inserted")
            }else{
                console.log(err)
            }
        })
    });
})
app.listen(4000);
console.log("server listening - 4000");