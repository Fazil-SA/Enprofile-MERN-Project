import React from 'react'
import styles from './style'
import {Login,Register,Home} from './pages/user/userPages'
import {Route , Routes} from 'react-router-dom'

const App = () =>  (
  <Routes>
    
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/' element={<Home />} />

  </Routes>
  )


export default App
