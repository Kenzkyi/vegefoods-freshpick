import React from 'react'
import "../styles/resetPassword.css"
import { NavLink } from "react-router-dom";

const resetPassword = () => {
  return (
    <div className='Body4'>
   <div className='resetpasswordDiv'>
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
              <h2 style={{fontSize:"30px"}}>Reset Password</h2>
       
        <input
          type="email"
          name="email"
          placeholder="New Password"
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width:"80%",
            height:"12%"
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Comfirm Password"
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width:"80%",
            height:"12%"
          }}
        />
        <button
          style={{
            padding: "10px",
            background: "blue",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            width:"50%",
            height:"50px",
            cursor: "pointer",
          }}
        >
          Craete Password
        </button>
        <p>Set password  <NavLink style={{cursor: "pointer", textDecoration: "none"}} to="/login">Login</NavLink></p>

      </div>
    </div>
   </div>
    </div>
  )
}

export default resetPassword