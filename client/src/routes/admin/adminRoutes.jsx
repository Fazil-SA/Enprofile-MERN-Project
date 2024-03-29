import React from 'react'
import {Login,AdminHome} from '../../pages/admin/adminPages'
import {Route , Routes} from 'react-router-dom'
import UserManagement from '../../pages/admin/UserManagement'
import ProductManagement from '../../pages/admin/ProductManagement'
import OrderManagement from '../../pages/admin/OrderManagement'
import AddProduct from '../../pages/admin/AddProduct'
import AdminProtectRoute from './AdminProtectRoute'

const adminRoutes = () =>  (
        <Routes>
            <Route path='/admin/login' element={<Login />} />
            <Route element={<AdminProtectRoute />}>
              <Route path='/admin/dashboard' element={<AdminHome />} />
              <Route path='/admin/userManagement' element={<UserManagement />} />
              <Route path='/admin/productManagement' element={<ProductManagement />} />
              <Route path='/admin/addProduct' element={<AddProduct />} />
              <Route path='/admin/orderManagement' element={<OrderManagement />} />
            </Route>
        </Routes>

  )


export default adminRoutes



