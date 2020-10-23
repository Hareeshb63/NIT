var mongoose= require("mongoose");

var schema= mongoose.Schema;
var userSchema= new schema({
    fName:String,
    lName:String,
    email:String,
    mobile:Number,
})
module.exports= mongoose.model('user',userSchema,'infouser');