import React, { useState } from 'react'
import "../styles/signup.css"
import { NavLink } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const Signup = () => {
  const [all,setAll] = useState({
    username:'',
    email:'',
    fullName:'',
    password:'',
    // usernameErr:false
  })

  const onChangeFunc = (e)=>{
    const {name, value} = e.target
    const newUsername = value
    setAll({...all,[name]:newUsername.trim()})
    // if(newUsername){
    //   console.log('there is username')
    //   setAll({...all,usernameErr:false})
    // }else{
    //   setAll({...all,usernameErr:true})
    // }
  }

  console.log(all)

    const baseUrl = 'https://vege-food.onrender.com/api/v1/'

  const createUser = async (data) => {
    try{
      const res = await axios.post(`${baseUrl}register`,data)
      console.log(res)
    }catch(error){
      console.log(error)
    }
  }

  const submitData = ()=>{
    if(all.username && all.email && all.fullName && all.password){
      createUser(all)
    }else{
      toast.error('Please all input field required')
    }
  }





  return (
    <div className='Body'>
    <Toaster/>
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
          placeholder=" Username"
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width:"80%",
            height:"10%",
            outline:'none',
            borderColor:all.usernameErr?'red':'white'
          }}
          onChange={onChangeFunc}
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
          onChange={onChangeFunc}
        />
          <input
          type="name"
          name="fullName"
          placeholder="Fullname"
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
          onClick={submitData}
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
