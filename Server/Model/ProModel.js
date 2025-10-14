const mongoose  =require("mongoose");
const ProSchema =new  mongoose.Schema({
    name:String,
    email:String,
    number:String,
    address:String,
    password:String

})

module.exports = mongoose.model("product", ProSchema);