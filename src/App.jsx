
import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Ridesearch from './components/ridesearch&creation/Ridesearch'
import Userlogin from './components/userlogin/Userlogin'
import Userregis from './components/userregis/Userregis'
import Payment from './payment/Payment'
import Forgot from './components/Forgot/Forgot'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="*" element={<Userregis/>} />
    <Route path="/userlogin" element={<Userlogin/>} />
      <Route path="/ridesearch" element={<Ridesearch/>} />
      <Route path="/userpayment" element={<Payment/>} />
      <Route path="/forgot" element={<Forgot/>} />
    </Routes>

    </>
  )
}

export default App

