import React from 'react'
import "../styles/forgetPassword.css"
import { NavLink } from "react-router-dom";

const Forgetpassword = () => {

  return (
    <div className='Body3'>
   <div className='forgetpassword'>
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
                <h2 style={{fontSize:"30px"}}>Forget Password?</h2>
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
          >
            submit
          </button>
          <p style={{textAlign:'left',width:'80%'}}>Or <NavLink style={{cursor: "pointer", textDecoration: "none"}} to="/login">Login</NavLink></p>
  
        </div>
      </div>
   </div>
    </div>
  )
}

export default Forgetpassword