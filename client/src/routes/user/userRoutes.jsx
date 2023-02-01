import React from 'react'
import {Login,Register,Home,PortTempDemo1,SelectPortfolio,PaymentSuccess,PaymentFail,ParamsTemplateRendering,Page404Error} from '../../pages/user/userPages'
import {Route , Routes} from 'react-router-dom'
import ProtectRoute from './ProtectRoute'

const userRoutes = () =>  (
        <Routes>
    
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Home />} />
            <Route path='/portfolio-demo-1' element={<PortTempDemo1 />} />
            <Route path='/:id' element={<ParamsTemplateRendering />} />
            <Route path='/error-page' element={<Page404Error />} />
            <Route element={<ProtectRoute />}>
              <Route path='/create-your-portfolio' element={<SelectPortfolio />} />            
              <Route path='/payment-success' element={<PaymentSuccess />} />            
              <Route path='/payment-failed' element={<PaymentFail />} />            
            </Route>
            {/* <Route path='/create-your' element={<SelectPortfolio1 />} /> */}


        </Routes>
    
  )


export default userRoutes



