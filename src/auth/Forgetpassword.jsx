import React, { useEffect, useState } from 'react'
import "../styles/forgetPassword.css"
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';

const Forgetpassword = () => {

  const [email, setEmail]=useState("")
  const [emailErr, setEmailErr]=useState("")
    const [isDisabled,setIsdisabled] = useState(true)
    const [loading,setLoading] = useState(false)
    const nav = useNavigate()

    const validateEmail = (input) => {
      // Regular expression for basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(input);
    };

   const baseUrl = 'https://vege-food.onrender.com/api/v1/'

   const forgetPassword = async (e,email) => {
    e.preventDefault()
    setLoading(true)
    setIsdisabled(true)
  try {
    const res = await axios.post(`${baseUrl}forgotpassword`,{email})
    toast.success(res.data.message)
    setLoading(false)
    setTimeout(() => {
      nav('/login')
    }, 6000);
    setIsdisabled(false)
   } catch (error) {
     if (error.message === 'Network Error'){
       toast.error('Oops network error')
      }else if (error.response.data.message === 'User not found'){
        toast.error('Invalid email address')
      }else{
      console.log(error)
    }
     setLoading(false)
     setIsdisabled(false)
   }
 }

 useEffect(()=>{
  if(email && emailErr === ''){
    setIsdisabled(false)
  }else{
    setIsdisabled(true)
  }
 },[email])

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
       
        <form
        className='forgot-form'
          style={{
            display: "flex",
            flexDirection: "column",
            height:"70%",
            gap: "20px",
            padding: "20px",
            background: "#ffffff48",
            alignItems:"center",
            justifyContent:"center",
            borderRadius: "8px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
            width: "70%",
          }}
          onSubmit={(e)=>forgetPassword(e,email)}
        >
                <h2 style={{fontFamily:'monospace',fontSize:"30px"}}>Forgot Password?</h2>
          <article style={{height:'9vh',width:'80%'}}>
          <input
            type="Email"
            name="email"
            placeholder="Enter email address"
            style={{
              padding: "10px",
              border: "2px solid",
              borderColor:emailErr ? 'red' : 'white',
              borderRadius: "5px",
              width:"100%",
              height:"7vh",
              outline:'none'
            }}
            onChange={(e)=>{
              const newEmail = e.target.value
              if(newEmail.trim()){
                if (validateEmail(newEmail)) {
                  setEmail(e.target.value)
                  setEmailErr('')
                } else {
                  setEmail(e.target.value)
                  setEmailErr('Enter a valid email address')
                }
              }else{
                setEmailErr('Please enter your email address')
                setEmail(e.target.value)
              }
            }}
          />
          <small style={{paddingInline:10,color:'red'}}>{emailErr}</small>
          </article>
          <button
            style={{
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              width:"80%",
              height:"40px",
              fontSize:15.5,
              color:isDisabled ? '#707070' : 'white',
              backgroundColor: isDisabled? '#dad7d7' : 'blue',
              cursor:isDisabled? 'not-allowed' : 'pointer'
            }}
            disabled={isDisabled}
          >
            {loading ? 'Loading...' : 'Submit'}
          </button>
          <p style={{textAlign:'left',width:'80%'}}>Or <NavLink style={{cursor: "pointer", textDecoration: "none"}} to="/login">Login</NavLink></p>
  
        </form>
      </div>
   </div>
    </div>
  )
}

export default Forgetpassword