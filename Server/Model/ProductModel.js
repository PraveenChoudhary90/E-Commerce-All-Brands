const mongoose  =require("mongoose");
const ProductSchema =new  mongoose.Schema({
    name:String,
    brand:String,
    color:String,
    description:String,
    price:String,
    defaultImage:String,
    image:[String]


})

module.exports = mongoose.model("productdata", ProductSchema);