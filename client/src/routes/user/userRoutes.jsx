import React from 'react'
import {Login,Register,Home} from '../../pages/user/userPages'
import PortTempDemo1 from '../../pages/user/portfolio temps/PortTempDemo1'
import {Route , Routes} from 'react-router-dom'

const userRoutes = () =>  (
        <Routes>
    
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Home />} />
            <Route path='/portfolio-demo-1' element={<PortTempDemo1 />} />

        </Routes>
    
  )


export default userRoutes



