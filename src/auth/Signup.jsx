import React from 'react'
import "../styles/signup.css"

const Signup = () => {
  return (
    <div className='Body'>
   
      <div className='RightPart'>
      <img className='Img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRcBwCkOG5l7Dcgy5McvOhIOvxHbH2DJ8Tgw&s" alt="" />
      </div>
      <div className='LeftPart'>
      <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#f4f4f4",
      }}
    >

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height:"70%",
          gap: "20px",
          padding: "20px",
          background: "#fff",
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
          // value={user.username}
          // onChange={handleChange}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width:"80%",
            height:"12%"
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          // value={user.email}
          // onChange={handleChange}
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
          placeholder="Password"
          // value={user.password}
          // onChange={handleChange}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width:"80%",
            height:"12%"
          }}
        />
        <button
          // onClick={handleSubmit}
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
        <p>Already Have an acoount ? <span> log in </span></p>
      </div>
    </div>
      </div>
      
    </div>
  )
}

export default Signup
