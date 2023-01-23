import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'


const useAuth = () => {
    const token = useSelector((state) => state.authSlice.adminToken)
    console.log(token)
    const admin = token
    return admin && token
}

const AdminProtectRoute = () => {
    const isAuth = useAuth()
    return isAuth ? <Outlet /> : <Navigate to='/admin/login' />
}

export default AdminProtectRoute