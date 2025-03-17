import React, { useState } from 'react'
import "../styles/ResendVerification.css"
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';

const ResendVerification = () => {

  const [email, setEmail] = useState('')

      const baseUrl = 'https://vege-food.onrender.com/api/v1/'

  const resendEmail = async (email) => {
   if(email){
    try {
      const res = await axios.post(`${baseUrl}resendverificationemail`,{email} )
      console.log(res)
    } catch (error) {
      console.log(error)
    }
   }else{
    toast.error('Please Fill In your Email')
   }

  }

  return (
    <div className='Body4'>
   <div className='VerifyEmail'>
   <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          background: "transparent",
        }}
      >
       
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height:"70%",
            gap: "20px",
            padding: "20px",
            background: "#ffffff7a",
            alignItems:"center",
            justifyContent:"center",
            borderRadius: "8px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
            width: "70%",
          }}
        >
                <h2 style={{fontSize:"30px"}}>Resend verification Email</h2>
          <input
            type="Email"
            name="Email"
            placeholder="Enter email address"
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              width:"80%",
              height:"10%"
            }}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <button
            style={{
              padding: "10px",
              background: "blue",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              width:"80%",
              height:"50px",
              cursor: "pointer",
            }}
            onClick={()=>resendEmail(email)}
          >
            Resend
          </button>
          <p style={{textAlign:'left',width:'80%'}}>Or <NavLink style={{cursor: "pointer", textDecoration: "none"}}></NavLink></p>
  
        </div>
      </div>
   </div>
    </div>
  )
}

export default ResendVerification