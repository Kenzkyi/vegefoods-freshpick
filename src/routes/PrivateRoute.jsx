import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    const userToken = JSON.parse(localStorage.getItem('userInfo'))
  return (
  <>
  
  {userToken?.token ? <Outlet/>: <Navigate to={'/login'}/>}
  </>
  )
}

export default PrivateRoute
