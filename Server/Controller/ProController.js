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

const GetCustomer = async(req,res)=>{
   const {email, password} = req.body;
   try {
    const Customer = await ProModel.findOne({email:email});


    if(!Customer){
        res.status(400).send({msg:"Invalid Email!!!!!!!!!!"})
    }


    if(Customer.password!=password){
        res.status(400).send({msg:"Invalid Password!!!!!!!!!!!"})
    }

    res.status(200).send({msg:"You are login", Customer:Customer});
   } catch (error) {
    console.log(error)
   }
}


module.exports = {
    InsertData,
    GetCustomer
}