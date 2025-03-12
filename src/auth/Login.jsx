import React from "react";
import "../styles/login.css"
import { NavLink } from "react-router-dom";

const handleChange = (e) => {

  setUser({ ...user, [e.target.name]: e.target.value });
};

const Login = () => {
  return (
    <div className='Body2'>
      <div className='LoginDiv'>
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
              <h2 style={{fontSize:"30px"}}>Login</h2>
       
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
        <div className="forgetPassword"> <NavLink style={{cursor: "pointer", textDecoration: "none"}} to="/forget-password">forgetPassword</NavLink></div>
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
          Login
        </button>
        <p>Don't Have An Account ? <NavLink style={{cursor: "pointer", textDecoration: "none"}} to="/sign-up">Sign up</NavLink></p>

      </div>
    </div>
      </div>
    </div>
  )
}

export default Login
