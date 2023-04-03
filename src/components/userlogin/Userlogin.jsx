import React, { useState } from 'react'
import './Userlogin.css'
import { Routes,Route,Link } from 'react-router-dom'
import Userregis from '../userregis/Userregis'
import Ridesearch from '../ridesearch&creation/Ridesearch'
import { useNavigate } from 'react-router-dom';



const Userlogin = () => {

  const[email,setemail]=useState('');
  const[password,setpassword]=useState('');
  const navigate = useNavigate();

 
  //function starts here
  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log("hello i got clicked");
    if(!email || !password ){
      alert("input fields should not be empty");
      return;
    }

    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
    if(data.message === "Email not found"){
          alert("user is not registered");
        }else if(data.message === "password doesnt match"){
          alert("invalid password");
        }else{
          // localStorage.setItem('accessToken', data.accessToken);
          navigate('/ridesearch');
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <>
  
    <div className="login-outer">

      <div className="login-inner">

        <h1>CarPool</h1>
      <form onSubmit={handlesubmit}>

  <input type='email' className='userlogin-email' value={email} placeholder="Email" onChange={(e) => setemail(e.target.value)} />
  <input type='password' className='userlogin-password' value={password} placeholder="Password" onChange={(e) => setpassword(e.target.value)} />

      <button className="userlogin-btn" type='submit' >   Login      </button>

         <div className="forgot">
          <Link  to='/forgot' >     <button className='forgotaccbtn' >Forgot account?</button>  </Link>
         </div>

      <div className="userlogin-or">
        <span>----------------</span>Or<span>----------------</span></div>
        <Link to='/' ><button className="userlogin-register">Register</button></Link>
        </form>
      </div>


    </div>






                 

{/* this code is for routing the components */}
<Routes>
    <Route to='/' element={<Userregis/>} ></Route>
    <Route to='/ridesearch' element={<Ridesearch/>} ></Route>
</Routes>
    </>
  )
}

export default Userlogin

