const ProModel = require("../Model/ProModel");






const InsertData = async(req,res)=>{
    const {name,email,number,address,password}  = req.body;
    try {
       const Customer = await ProModel.create({
        name:name,
        email:email,
        number:number,
        address:address,
        password:password
       }) 
       console.log(Customer);
       res.status(200).send({msg:"You are Added Successfully"});
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    InsertData
}