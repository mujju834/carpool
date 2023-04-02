const { default: axios } = require('axios');
const mongoose=require('mongoose')
//connect to mongoose database

  


  const registerschema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    pass: { type: String, required: true }
  });

 

  // const mymodel=mongoose.model("meramodel",myschema);
  module.exports=registerschema;

//   const product={
//     name:'hello',
//     password:124
//   }

//   mymodel.create((product)).then((product)=>{
//     console.log("this is the product you entered",product);
//   })
//  .catch((error)=>{
//   console.log(error);
//  }) 
//  .finally(()=>{
//   mongoose.disconnect();
//  })









