import React from 'react'
import "../styles/signup.css"
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <div className='Body'>
      <div className='LeftPart'>
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
              <h2 style={{fontSize:"30px"}}>Signup</h2>
        <input
          type="text"
          name="username"
          placeholder=" userName"
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width:"80%",
            height:"10%"
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width:"80%",
            height:"10%"
          }}
        />
          <input
          type="Full name"
          name="Full name"
          placeholder="Full name"
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width:"80%",
            height:"10%"
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width:"80%",
            height:"10%"
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
          Signup
        </button>
        <p>Already Have an acoount ? <NavLink style={{cursor: "pointer", textDecoration: "none"}} to="/login"> log in</NavLink></p>
      </div>
    </div>
      </div>
      
    </div>
  )
}

export default Signup
