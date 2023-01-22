import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'


const useAuth = () => {
    const token = useSelector((state) => state.authSlice.userToken)
    const user = token
    return user && token
}

const ProtectRoute = () => {
    const isAuth = useAuth()
    return isAuth ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectRoute