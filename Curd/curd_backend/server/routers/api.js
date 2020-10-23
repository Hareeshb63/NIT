var express= require("express");
var mongoose= require("mongoose");
var url= "mongodb://127.0.0.1:27017/userdb";

mongoose.connect(url, {useNewUrlParser: true ,useUnifiedTopology: true } ,err=>{
    if(err){
        console.log("Erorr in Connection", err)
    }else{
        console.log("Connected to MongoDb")
    }
})


var router= express.Router();
var User= require("./models/users");
router.get("/",function(req,res){
    res.send("response from api");
});

router.post("/register",(req,res)=>{
    let userData= req.body;
    let userdb= new User(userData);
    userdb.save((err, registeredUser)=>{
        if(err){
            console.log(err)
        }else{
            res.status(200).send(registeredUser);
        }
    })
});

router.get("/users",(req,res)=>{
    User.find({},(err,users)=>{
        if(err){
            res.status(401).send(err);
        }res.status(200).send(users)
    });
  

})

router.get("/users/:id",(req,res)=>{
    User.findById({_id:req.params.id},(err,users)=>{
        if(err){
            res.status(401).send(err)
        }else{
            res.status(200).send(users);
        }
    })
})

router.put("/update/:id",(req,res)=>{
    User.findByIdAndUpdate({_id:req.params.id},{$set:req.body},(err,user)=>{
      if(err){
          res.status(401).send(err);
      }else{
          res.status(200).send(user);
          
      }
  })
})  


router.delete("/delete/:id",(req,res)=>{
    User.findOneAndRemove({_id:req.params.id},(err,deleteuser)=>{
        if(err){
            res.status(401).send(err);
        }else{
            res.status(200).send(deleteuser)
            console.log("User Deleted")
        }
    })
})
module.exports = router;