import React from 'react'
import {Login,Register,Home} from '../../pages/user/userPages'
import {Route , Routes} from 'react-router-dom'

const userRoutes = () =>  (
        <Routes>
    
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Home />} />

        </Routes>
    
  )


export default userRoutes



