import React, { useEffect, useState } from 'react'
import "../styles/signup.css"
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';

const Signup = () => {
  const [all,setAll] = useState({
    username:'',
    email:'',
    fullName:'',
    password:'',
    usernameErr:'',
    emailErr:'',
    fullnameErr:'',
    passwordErr:''
  })
    const [isDisabled,setIsdisabled] = useState(true)
    const [loading,setLoading] = useState(false)
  const nav = useNavigate()

  const validateEmail = (input) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const onChangeFuncUsername = (e)=>{
    const {value} = e.target
    const newUsername = value
    if(newUsername){
      setAll({...all,usernameErr:'',username:newUsername.trim()})
    }else{
      setAll({...all,username:newUsername.trim(),usernameErr:'Please enter username'})
    }
  }
  const onChangeFuncEmail = (e)=>{
    const {value} = e.target
    const newEmail = value
    if(newEmail){
      if (validateEmail(newEmail)) {
        setAll({...all,email:newEmail.trim(),emailErr:''})
      } else {
        setAll({...all,email:newEmail.trim(),emailErr:'Please enter a valid email address'})
      }
    }else{
      setAll({...all,email:newEmail.trim(),emailErr:'Please enter email address'})
    }
  }
  const onChangeFuncFullname = (e)=>{
    const {value} = e.target
    const newFullname = value
    if(newFullname){
      setAll({...all,fullName:newFullname.trim(),fullnameErr:''})
    }else{
      setAll({...all,fullName:newFullname.trim(),fullnameErr:'Please enter your fullname'})
    }
  }
  const onChangeFuncPassword = (e)=>{
    const {value} = e.target
    const newPassword = value
    if(newPassword){
      if (newPassword.length >= 6) {
        setAll({...all,password:newPassword,passwordErr:''})
      } else {
        setAll({...all,password:newPassword,passwordErr:'Password must be at least 6 characters'})
      }
    }else{
      setAll({...all,password:newPassword,passwordErr:'Please enter password'})
    }
  }


    const baseUrl = 'https://vege-food.onrender.com/api/v1/'

  const createUser = async (e,data) => {
    e.preventDefault()
    setIsdisabled(true)
    setLoading(true)
    try{
      const res = await axios.post(`${baseUrl}register`,{username:data.username,email:data.email,fullName:data.fullName,password:data.password})
      toast.success('Sign up successful. please check your Email to verify')
      setLoading(false)
      setTimeout(() => {
        nav('/login')
      }, 6000);
      setIsdisabled(false)
    }catch(error){
      console.log(error)
      if(error.message === 'Network Error'){
        toast.error('Oops network error')
      }
      setLoading(false)
      setIsdisabled(false)
    }
  }

  // const submitData = ()=>{
  //   if(all.username && all.emailErr === '' && all.fullName && all.passwordErr === ''){
  //     createUser(all)
  //   }else{
  //     toast.error('Please all input field required')
  //   }
  // }

  useEffect(()=>{
    if(all.username && all.emailErr === '' && all.fullName && all.passwordErr === '' && all.password && all.email){
      setIsdisabled(false)
    }else{
      setIsdisabled(true)
    }
  },[all])



  return (
    <div className='Body2'>
          <div className='LoginDiv'>
        <main>
          <form onSubmit={(e)=>createUser(e,all)}>
                  <h2 style={{fontSize:"30px"}}>Sign Up</h2>
            <article>
            <input
              type="name"
              name="username"
              placeholder="Username"
              style={{
                borderColor:all.usernameErr? 'red' : 'white',
                padding: "10px",
                borderRadius: "5px",
              }}
              onChange={onChangeFuncUsername}
            />
            <small >{all.usernameErr}</small>
            </article>
            <article>
            <input
              type="email"
              name="email"
              placeholder="Email"
              style={{
                borderColor:all.emailErr? 'red' : 'white',
                padding: "10px",
                borderRadius: "5px",
              }}
              onChange={onChangeFuncEmail}
            />
            <small >{all.emailErr}</small>
            </article>
            <article>
            <input
              type="name"
              name="fullName"
              placeholder="Full name"
              style={{
                borderColor:all.fullnameErr? 'red' : 'white',
                padding: "10px",
                borderRadius: "5px",
              }}
              onChange={onChangeFuncFullname}
            />
            <small >{all.fullnameErr}</small>
            </article>
            <article>
            <input
              type="password"
              name="password"
              placeholder="Password"
              style={{
                padding: "10px",
                borderColor:all.passwordErr? 'red' : 'white',
                borderRadius: "5px",
              }}
              onChange={onChangeFuncPassword}
            />
            <small >{all.passwordErr}</small>
            </article>
            <button
              style={{
                color:isDisabled ? '#707070' : 'white',
                backgroundColor: isDisabled? '#eaeaea' : 'blue',
                cursor:isDisabled? 'not-allowed' : 'pointer'
              }}
              disabled={isDisabled}
              onClick={()=>handleLogin(all)}
            >
              {loading ? 'Loading ...' : 'Sign up'}
            </button>
            <p>Already Have An Account? <NavLink style={{color:'blue',cursor: "pointer", textDecoration: "none"}} to="/login">Login</NavLink></p>
    
          </form>
        </main>
          </div>
        </div>
  )
}

export default Signup
