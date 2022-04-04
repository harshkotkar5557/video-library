import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/authContext'

const ProtechRoute = (props) => {
    const { isAuth } = useAuth()
  return (
    isAuth ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default ProtechRoute