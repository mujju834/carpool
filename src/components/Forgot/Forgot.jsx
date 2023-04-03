import React, { useState } from 'react'
import './Forgot.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Forgot = () => {

    const[forgot,setforgot]=useState('');
    const[getdiv,setdiv]=useState(false);
    const[resetpassword,setresetpassword]=useState('');
    const[confresetpassword,setconfresetpassword]=useState('');
    const[forgotemail,setforgotemail]=useState('');
  const navigate = useNavigate();




    const forgotsearch=(e)=>{
        e.preventDefault();
        if(!forgot){
          alert("please fill the input field");
          return;
        }

        fetch('http://localhost:5000/forgot', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ forgot })
        }).then(response=>{
          console.log(response);
          return response.json();
        }).then(data=>{
          if(data.message ==="we didn't found your account"){
            alert(data.message);
            setdiv(false);
          }else{
            alert("we found your account reset your password");
            setdiv(true);
            setforgotemail(forgot); //this is used to store the email stored by the user
          }
        }).catch(error=>{
          console.log(error);
        }) 
      }



//this is different function
      const passwordchanged=(e)=>{
        e.preventDefault();
              if( !resetpassword || !confresetpassword ){
                   alert("Passwords Should not be empty");
                   return
              }
              if(resetpassword !== confresetpassword){
                alert("Passwords should match");
                return
              }

              fetch('http://localhost:5000/forgot', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ resetpassword,forgotemail  })
        }).then(response=>{
          console.log(response);
          return response.json();
        }).then(data=>{
          if(data === "Password updated Succesfully"){
            alert(data);
            navigate("/userlogin");
          }
          else{
            alert("error");
          }
        }).catch(error=>{
          console.log(error);
        })
      }



  return (
    <>
    {!getdiv &&
        <div className="login-outer ">

<div className="login-inner-seconddiv  ">

  <h3>Find your Account</h3>
  <p className='login-inner-forgot-para'> Please enter your Email to search for your account </p>
  <hr className='horizontal' />
<input type='email'  value={forgot} placeholder="Email" onChange={(e) => setforgot(e.target.value)} id='forgottext' />

 <hr className='horizontal' />

<div className="forgotbtns">
 <Link to='/userlogin' className='linked' >  <button className='cancelbtn'  >  cancel   </button>  </Link>
 {/* link these to userlogin */}
 <button className='searchbtn' onClick={forgotsearch} > search </button>
</div>
</div>
</div>
    }


{
  getdiv &&
<div className="login-outer ">

<div className="login-inner-seconddiv  ">

<h1>Reset Your Password</h1>
<input type='text'  value={resetpassword} placeholder="Enter new Password" onChange={(e) => setresetpassword(e.target.value)} id='forgottext' />
<input type='text'  value={confresetpassword} placeholder="Confirm new Password" onChange={(e) => setconfresetpassword(e.target.value)} id='forgottext' />


<div className="resetbtn">

 <Link to='/userlogin' className='resetlink'> <button className='searchbtn' > cancel </button>  </Link>
 <button className='searchbtn' onClick={passwordchanged} > Confirm </button>
</div>


</div>
</div>
}

    </>
  )
}

export default Forgot

