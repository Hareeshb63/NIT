var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017";
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));

//CORS

app.use(function (req, res, next) {
    res.header("Access-control-Allow-Origin", "*"),
        res.header("Access-Control-Header", "Origin, X-Requested-with, Content-Type, Access");
    res.header("Access-Control-Method", "GET,POST,PUT");
    next();
});

//

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

}).listen(4000);
console.log("listening at 4000");