import React, { useState } from 'react'
import "../styles/resetPassword.css"
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const resetPassword = () => { 
    const [all,setAll] = useState({
      password:'',
      confirmPassword:'',
    })

    const onChangeFunc =(e)=>{
      const { name, value}= e.target 
      setAll({...all,[name]:value})

    }

    const baseUrl = 'https://vege-food.onrender.com/api/v1/'

    const {token} = useParams()
    
    const nav = useNavigate()


    const resetPassword = async () => {
      try {
       const res = await axios.post(`${baseUrl}verify/${token}`,all)
        console.log(res)
        
        // setTimeout(() => {
        //   nav('/login')
        // }, 6000);
      } catch (error) {
        console.log(error)
      }
    }
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
          type="password"
          name="password"
          placeholder="New Password"
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width:"80%",
            height:"10%"
          }}
          onChange={onChangeFunc}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Comfirm Password"
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width:"80%",
            height:"10%"
          }}
          onChange={onChangeFunc}
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
          onClick={ resetPassword}
        >
          Craete Password
        </button>
        <p>Reset password ? <NavLink style={{cursor: "pointer", textDecoration: "none"}} to="/login">Login</NavLink></p>

      </div>
    </div>
   </div>
    </div>
  )
}

export default resetPassword