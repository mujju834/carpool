import React, { useState } from 'react'
import './Ridesearch.css'
import { Link } from 'react-router-dom';
import { AiFillCar } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
import { MdOutlineLogin } from "react-icons/md";
import { BiCurrentLocation } from "react-icons/bi";
import { HiArrowsUpDown } from "react-icons/hi2";
import { BsFillPeopleFill } from "react-icons/bs";





const Ridesearch = () => {
    const[model,setmodel]=useState(false);
     
 const handleclick=()=>{
    setmodel(true);
    console.log("clicked");
    }


  return (
    <>
    <div className="ridesearch-upperlayer">
    <div className="ridesearch-upperlayerleftend">
        <h1>CarPool</h1>
       <AiFillCar className='ridesearch-icons'/>
        <h2>Ride</h2>
       <FiHelpCircle  className='ridesearch-icons'/>
        <h2>Help</h2>
        </div>

        <div className="ridesearch-upperlayerrightend">
            <MdOutlineLogin className='ridesearch-icons' />
        <button className='ridesearch-signup'>
            <Link to='/'>sign up</Link>      </button>      
         <button className='ridesearch-login'>
           <Link to='/userlogin' > Login </Link> </button>
        </div>
    </div>


{/* creating the search bar and maps */}
<div className="ridesearch-secondlayer">
    {/* embedding maps into app */}
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14298.32801307669!2d-80.10192145180663!3d26.372378483587845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91e0333f8aa69%3A0x52043ea122f5fb6a!2sFlorida%20Atlantic%20University!5e0!3m2!1sen!2sus!4v1679332441634!5m2!1sen!2sus"  allowfullscreen="" loading="lazy" className='ridesearch-secondlayer-maps' referrerpolicy="no-referrer-when-downgrade" title='maps'  ></iframe>


{/* model hook starts here */}
    {/*  */}
   {!model &&(
    <div className="ridesearch-secondlayer-search">
<h1>Hey there night owl!</h1>
    <input type="text" placeholder='Enter Pickup Location'  name="location" id="" /><BiCurrentLocation className='searchlocation-icon'/>
    <input type="text" name="destination" placeholder='Enter Destination' id="" /><HiArrowsUpDown className='updown-icon'/>
    <h3>ride history will show here</h3>
 <button  onClick={handleclick} >Ride Details</button>
    </div>
    ) } 

{ model && (
    <div className="ridesearch-secondlayer-search-available">

<h1>Rides Available</h1> 

<div className="available-firstcar">
<AiFillCar className='ridesearch-icons-available'/>

<div className="available-firstcar-makecolumn">

<div className="availabe-firstcar-firsttemp">
    <h3>Audi</h3>
</div>

<div className="availabe-firstcar-secondtemp">
    <BsFillPeopleFill className='ridesearch-icons-available-people' />
    <p className='members'>4</p>
    </div>

</div>

<div className="availabe-firstcar-thirdtemp">
    <p className='price'> $40 - 50 </p>
    <p className="time">time</p>
    </div>
</div>


<div className="available-firstcar">
<AiFillCar className='ridesearch-icons-available'/>

<div className="available-firstcar-makecolumn">

<div className="availabe-firstcar-firsttemp">
    <h3>Audi</h3>
</div>

<div className="availabe-firstcar-secondtemp">
    <BsFillPeopleFill className='ridesearch-icons-available-people' />
    <p className='members'>4</p>
    </div>

</div>

<div className="availabe-firstcar-thirdtemp">
    <p className='price'> $40 - 50 </p>
    <p className="time">time</p>
    </div>
</div>

{/* third template */}
<div className="available-firstcar">
<AiFillCar className='ridesearch-icons-available'/>

<div className="available-firstcar-makecolumn">

<div className="availabe-firstcar-firsttemp">
    <h3>Audi</h3>
</div>

<div className="availabe-firstcar-secondtemp">
    <BsFillPeopleFill className='ridesearch-icons-available-people' />
    <p className='members'>4</p>
    </div>

</div>

<div className="availabe-firstcar-thirdtemp">
    <p className='price'> $40 - 50 </p>
    <p className="time">time</p>
    </div>
</div>
{/* ended third template */}
     {/* <button> Confirm Ride   </button>   */}
     <button> <Link to='/userpayment'>Confirm Ride  </Link>  </button>  

</div>
 )} 
</div>
    </>
  )
}

export default Ridesearch



// sk_test_51LVwTXSHQqPVaVZrKBzD8LAMHm30wynkYi6XWUPAsaOIlueaFgZuburdKycBRiY4trhnXbi7E6KwxHZ3B1sf7xpx00nEnUhzHp my strip api