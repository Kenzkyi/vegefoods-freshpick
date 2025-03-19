import React, { useEffect, useState } from "react";
import "../styles/login.css"
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUserId, setUserToken } from "../global/slice";

const Login = () => {
  const [all,setAll] = useState({
    email:'',
    password:'',
    emailErr:'',
    passwordErr:''
  })
  const [isDisabled,setIsdisabled] = useState(true)
  const [loading,setLoading] = useState(false)
  const nav = useNavigate()

  const dispatch = useDispatch()

  const validateEmail = (input) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  
  const onChangeFuncEmail = (e)=>{
    let newEmail = e.target.value
    if (newEmail !== '') {
      if (validateEmail(newEmail.trim())) {
        setAll({...all,emailErr:'',email:newEmail.trim()})  
      } else {
        setAll({...all,email:newEmail.trim(),emailErr:'Please enter a valid email address'})
      }
    }else {
      setAll({...all,email:newEmail.trim(),emailErr:'Please enter a valid email address'})
    }
  }
  const onChangeFuncPassword = (e)=>{
    const { value } = e.target
    const newPassword = value
    // setAll({...all,password:newPassword.trim()})
    if(newPassword.trim() ){
      if (newPassword.trim().length < 6) {
        setAll({...all,password:newPassword.trim(),passwordErr:'Password must be at least 6 characters'})
      } else {
        setAll({...all,password:newPassword.trim(),passwordErr:''})
        
      }
    }else{
      setAll({...all,password:newPassword.trim(),passwordErr:'Please input your password!'})
    }
  }

  const baseUrl = 'https://vege-food.onrender.com/api/v1/'

  const loginUser = async (data) => {
    setIsdisabled(true)
    setLoading(true)
    try {
      const res = await axios.post(`${baseUrl}login`,data)
      dispatch(setUserId(res.data.data._id))
      dispatch(setUserToken(res.data.token))
      toast.success('Log in successfully')
      setLoading(false)
      setTimeout(() => {
        nav('/')
      }, 6000);
      setIsdisabled(false)
    } catch (error) {
      console.log(error)
      if(error.message === 'Request failed with status code 400'){
        toast.error('Please verify your email')
      }else if (error.message === 'Request failed with status code 500'){
        toast.error('Invalid login credentials')
      }
      setIsdisabled(false)
      setLoading(false)
    }
  }
  
  const handleLogin = (e,all)=>{
    e.preventDefault()
      loginUser(all)
  }


  useEffect(()=>{
    if (all.email  && all.password && all.emailErr === '' && all.passwordErr === '') {
      setIsdisabled(false)
    } else {
      setIsdisabled(true)
    }
  },[all])

  return (
    <div className='Body2'>
      <div className='LoginDiv'>
    <main>
      <form onSubmit={(e)=>handleLogin(e,all)}>
              <h2 style={{fontSize:"30px"}}>Login</h2>
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
        <div className="forgetPassword"> <NavLink style={{cursor: "pointer", textDecoration: "none"}} to="/forget-password">Forgot Password?</NavLink></div>
        <button
          style={{
            color:isDisabled ? '#707070' : 'white',
            backgroundColor: isDisabled? '#eaeaea' : 'blue',
            cursor:isDisabled? 'not-allowed' : 'pointer'
          }}
          disabled={isDisabled}
          // onClick={()=>handleLogin(all)}
        >
          {loading ? 'Loading ...' : 'Login'}
        </button>
        <p>Don't Have An Account ? <NavLink style={{cursor: "pointer", textDecoration: "none"}} to="/sign-up">Sign up</NavLink></p>

      </form>
    </main>
      </div>
    </div>
  )
}

export default Login
