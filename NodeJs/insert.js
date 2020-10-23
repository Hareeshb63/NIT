var mongoClient= require("mongodb").MongoClient;
var url= "mongodb://127.0.0.1:27017";

mongoClient.connect(url,function(err, clientObj){
    if(!err){
        var database= clientObj.db("mydatabase");
        var data= { _id:4545, FName:"Vijay",LName:"C",City:"Dwd",Mobile:97765546622, Email:"vij@gmail.com"};
        database.collection("empinfo").insert(data,function(err,result){
            if(!err){
                console.log(result);
            }else{
                console.log(err);
            }
        })
    }else{
        console.log(err);
    }
});