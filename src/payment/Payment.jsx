import React, { useState } from 'react';
import './Payment.css';
import StripeCheckout from 'react-stripe-checkout';
import { AiOutlineCreditCard, AiOutlineMail } from 'react-icons/ai';
import { MdCalendarMonth } from 'react-icons/md';
import { BiLockAlt } from 'react-icons/bi';

const Payment = () => {
  const [Cnumber, setCnumber] = useState('');
  const [email, setEmail] = useState('');
  const [date, setdate] = useState('');
  const [cvc, setcvc] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetch('http://localhost:5000/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ Cnumber, email,date,cvc })
    })
      .then(response => response.json())
      .catch(error => console.error(error));
  }

  return (
    <>
      <div className='payment-outerlayer'>
        <div className='payment-innerlayer'>
          <h3>Payment</h3>
          <form onSubmit={handleSubmit}>
        <input
              type='email'
              id='email'
              value={email} placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            /><AiOutlineMail className='mailicon'/>
            
            <input
              type='text'
              id='cnumber'
              step="any"
              value={Cnumber} placeholder='Card-Number'
              onChange={(e) => setCnumber(e.target.value)}
            /><AiOutlineCreditCard className='cardicon'/>
            
            <input
              type='Number'
              id='date'
              value={date} placeholder='MM/YY'
              step="any"
              onChange={(e) => setdate(e.target.value)}
            /><MdCalendarMonth className='monthicon'/>

<input
              type='text'
              id='cvc'
              value={cvc} placeholder='CVC'
              step="any"
              onChange={(e) => setcvc(e.target.value)}
            /><BiLockAlt className='lockicon'/>
            <button type="submit">Submit</button>
         </form>


          <StripeCheckout
            stripeKey='pk_test_51LVwTXSHQqPVaVZrBxHBclIg6bLpncriS225U2Gdae11V0R2IDWMSeZ0hSHIxtewawx5ud2zJDT9U9bJUAJMj2RP00vKZHZCut'
            name 
            email={email}
            cardNumber={Cnumber}
            amount
            allowRememberMe
            label='Pay with Card'
            locale='auto'
            className='stripecheckout'
          />
        </div>
      </div>
    </>
  );
};

export default Payment;
