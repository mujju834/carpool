import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
// import Payment from '../../payment/Payment'
import Ridesearch from '../ridesearch&creation/Ridesearch'
import Userlogin from '../userlogin/Userlogin'
import { useNavigate } from 'react-router-dom';
import './userregis.css'

const Userregis = () => {
const navigate = useNavigate();

  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmpass, setconfirmpass] = useState('');
  const [isChecked, setIsChecked] = useState(false);





  const handlesubmit=(e)=>{
e.preventDefault();

if(!name || !email || !password || !confirmpass){
  alert("Please fill all the input fields");
  return;
}


if(isChecked){
  
if(password === confirmpass){
  fetch('http://localhost:5000/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email,password })
})
  .then(response => {
    console.log( "this is response", response);
    return response.json();
  })
  //setting the credential validation using jsonweb token
  .then(data=>{
    if (data.accessToken) {
        localStorage.setItem('accessToken', data.accessToken);
        navigate('/ridesearch');
    
    } else {
    alert(data.message);
    }
  })
  .catch(error => console.error(error));
  }else{
    alert("Passwords doesn't match")
  }
  }
else{
alert("you have to agree to the terms and conditons");
}
}


  return (
    <>
    <div className='userregis-outerfirst'>
<div className="userregis-innerfirst">
  <h1>CarPool</h1>
  <h3>When you carpool, you don't just share a ride, you share a smile.</h3>
</div>


<div className="userregis-innersecond">

  <h2 className='userregis-register' >Register</h2>

<div className="userregis-inputs">
  <form onSubmit={handlesubmit}>
  <input type='text' className='userregis-allinputs' value={name} placeholder="Name" onChange={(e) => setname(e.target.value)} />
  <input type='email' className='userregis-allinputs' value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
  <input type='password' className='userregis-allinputs' value={password} placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
  <input type='password' className='userregis-allinputs' value={confirmpass} placeholder="ConfirmPass" onChange={(e) => setconfirmpass(e.target.value)} />

  <div className="userregis-terms">
<p className="userregis-privacypolicy">
  
<input 
          type="checkbox" name="example"  value="1"  className='userregis-check' checked={isChecked}
           onChange={(event)=>setIsChecked(event.target.checked)}
        />
I have read and agree to the Terms of Service and Privacy Policy.
</p>
  </div>

<button className="userregis-btn" type='submit'>          Register   </button>

  </form>

</div>





{/* <Link to='/ridesearch' > Register</Link> */}



<div className="userregis-already">
  <div className="userregis-alreadyregistered">
      Already registered ?
  </div>

   <Link to='/userlogin' > 
  <button className="userregis-orloginbtn">  Login      </button>     </Link> 
</div>
</div>


  </div>


  <Routes>
  <Route to='/userlogin' element={<Userlogin/>} />
  <Route to='/ridesearch' element={<Ridesearch/>} />



  </Routes>

</>

    
  )
}

export default Userregis

