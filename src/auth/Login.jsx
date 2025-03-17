import React, { useState } from "react";
import "../styles/login.css"
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [all,setAll] = useState({
    email:'',
    password:''
  })
  const nav = useNavigate()

  
  const onChangeFunc = (e)=>{
    const {name, value } = e.target
    // console.log(name)
    setAll({...all,[name]:value})
  }
  // console.log(all)

  const baseUrl = 'https://vege-food.onrender.com/api/v1/'

  const loginUser = async (data) => {
    try {
      const res = await axios.post(`${baseUrl}login`,data)
      console.log(res)
      localStorage.setItem('userInfo',JSON.stringify({token:res.data.token,id: res.data.data._id}))
      toast.success('Log in successfully')
      setTimeout(() => {
        nav('/')
      }, 6000);
    } catch (error) {
      // console.log(error)
      if(error.message === 'Request failed with status code 400'){
        toast.error('Please verify your email')
      }
    }
  }

  const handleLogin = (all)=>{
    if(all.email && all.password){
      loginUser(all)
    }else{
      toast.error('All input required')
    }
  }
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
          onChange={onChangeFunc}
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
          onChange={onChangeFunc}
        />
        <div className="forgetPassword"> <NavLink style={{cursor: "pointer", textDecoration: "none"}} to="/forget-password">forgetPassword</NavLink></div>
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
          onClick={()=>handleLogin(all)}
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
