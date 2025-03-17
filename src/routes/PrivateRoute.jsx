import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    const userToken = localStorage.getItem('userToken')
  return (
  <>
  
  {userToken ? <Outlet/>: <Navigate to={'/login'}/>}
  </>
  )
}

export default PrivateRoute
