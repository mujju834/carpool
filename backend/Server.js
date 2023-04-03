const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose=require('mongoose')
// const mymodel = require('./Mongoose')
const bcrypt = require('bcrypt');      //this two are for authentication
const jwt = require('jsonwebtoken');

app.use(bodyParser.json())

app.use(cors({
  // origin: 'https://cerulean-centaur-03ff14.netlify.app/',
  // optionsSuccessStatus: 200
}))

mongoose.connect('mongodb://Shop:mujjumujahid786@cluster0-shard-00-00.umrqx.mongodb.net:27017,cluster0-shard-00-01.umrqx.mongodb.net:27017,cluster0-shard-00-02.umrqx.mongodb.net:27017/test?replicaSet=atlas-4pmc3y-shard-0&ssl=true&authSource=admin')
  .then(() => console.log('Connection to database successful'))
  .catch((err) => console.error('Error connecting to database', err));


  const registerschema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    pass: { type: String, required: true }
  });

app.get('/', (req, res) => {
//     const flattenedReq = flatted.stringify(res);
//   res.send(flattenedReq);
res.send("hello maze me")


  });

  const registermodel=mongoose.model("register",registerschema)


  //user registration 
app.post('/register',async (req, res) => {
  const  { name, email, password} = req.body;


  const existingUser = await registermodel.findOne( {email : email } ) ;
  if (existingUser) {
    return res.json({ message: 'Email already exists' });
  }
    
    const users = [];
  const hashedPassword = await bcrypt.hash(password, 1);

  const newUser = {
    name,
    email,
    pass: hashedPassword
  };
  users.push(newUser);

    // Generate an access token
    const accessToken = jwt.sign({ email }, 'mysecretkey#$%', { expiresIn: '1h' });
    
 const finalUser=   registermodel.create((newUser))
  .then((product)=>{
    console.log("succesfully saved  user registration",product);
    const responseobject={
      message: 'User registered successfully',
      accessToken: accessToken,
      user: product,
    }
    res.json(responseobject)
  })
  .catch(error=>{
    console.log(error);
  })
});


app.post('/login', async(req, res) => {
  const{email,password}=req.body  //retrie
  const user = await registermodel.findOne({ email: email });
  console.log(user);

if(!user){
    return res.status(401).json({message:"Email not found"});
  }

  const isPasswordValid = await bcrypt.compare(password, user.pass);
  console.log(isPasswordValid);
  
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'password doesnt match' });
  }
//generate access token
  const accessToken = jwt.sign({ email: email }, 'mysecretkey#$%', { expiresIn: '1h' });
res.status(200).json({
  message:"user logged in succesfully",
  accessToken:accessToken,
  user:user,
})
});



//this is the forgot page 
app.post('/forgot',async (req, res) => {
  const {forgot}=req.body;
  const {resetpassword}=req.body

  if(forgot){
    const user = await registermodel.findOne({ email:forgot });
    console.log("this is user in forgot",  user);
    if(!user){
      res.json({message:"we didn't found your account"});
    }else{
      res.json({message:user.password});
    }
  }
   else if(resetpassword) {
  
    const {forgotemail} = req.body  //getting the user email using usestate in react
    const resetpasswordhash=await bcrypt.hash(resetpassword,1);
console.log( "this is reset password" ,resetpasswordhash);

const updateuser =await registermodel.findOneAndUpdate({
  email:forgotemail,
  pass:resetpasswordhash,
  new:true
}).exec();

if(updateuser){
  res.json("Password updated Succesfully");
}else{
  console.log("error occured");
}
}

});


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
