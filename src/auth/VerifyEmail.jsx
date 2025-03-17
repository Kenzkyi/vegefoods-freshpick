import React from 'react'
import "../styles/VerifyEmail.css"
import { NavLink, useParams } from "react-router-dom";
import axios from 'axios';

const VerifyEmail = () => {

    const baseUrl = 'https://vege-food.onrender.com/api/v1/'
    const {token} = useParams()

  const verifyEmail = async () => {
    try {
      const res = await axios.get(`${baseUrl}verify/${token}`)
      console.log(res)
    } catch (error) {
      console.log(error)
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
                <h2 style={{fontSize:"30px"}}>Verify Email</h2>
          {/* <input
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
          /> */}
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
            onClick={verifyEmail}
          >
            Verify
          </button>
          <p style={{textAlign:'left',width:'80%'}}> <NavLink style={{cursor: "pointer", textDecoration: "none"}}  to="/resend-verification">Resend verification Email</NavLink></p>
  
        </div>
      </div>
   </div>
    </div>
  )
}

export default VerifyEmail