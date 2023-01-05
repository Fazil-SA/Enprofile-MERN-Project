import React from 'react'
import {Login,AdminHome} from '../../pages/admin/adminPages'
import {Route , Routes} from 'react-router-dom'
import UserManagement from '../../pages/admin/UserManagement'
import ProductManagement from '../../pages/admin/ProductManagement'
import OrderManagement from '../../pages/admin/OrderManagement'

const adminRoutes = () =>  (
        <Routes>
    
            <Route path='/admin/login' element={<Login />} />
            <Route path='/adminHome' element={<AdminHome />} />
            <Route path='/adminHome/userManagement' element={<UserManagement />} />
            <Route path='/adminHome/productManagement' element={<ProductManagement />} />
            <Route path='/adminHome/orderManagement' element={<OrderManagement />} />
        </Routes>

  )


export default adminRoutes



