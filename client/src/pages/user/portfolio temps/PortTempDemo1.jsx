import React from 'react'
import About from '../../../components/user/pt1Demo/About'
import Home from '../../../components/user/pt1Demo/Home'
import NavBar from '../../../components/user/pt1Demo/NavBar'
import SocialLinks from '../../../components/user/pt1Demo/SocialLinks'
import Portfolio from '../../../components/user/pt1Demo/Portfolio'
import Experience from '../../../components/user/pt1Demo/Experience'
import Contact from '../../../components/user/pt1Demo/Contact'
import SelectTemplate from '../../../components/user/pt1Demo/SelectTemplate'
import { useLocation } from 'react-router-dom'


const PortTempDemo1 = () => {
  const location = useLocation()
  const tempDataEmail = location.state.email
  const tempDataInfo = location.state
  // console.log(tempDataInfo)
  return (
    <div>
      {tempDataEmail ? '' 
      : 
      <SelectTemplate/>
      }
      <NavBar data={tempDataEmail ? tempDataInfo : ''} />
      <Home data={tempDataEmail ? tempDataInfo : ''} />
      <SocialLinks data={tempDataEmail ? tempDataInfo : ''} />
      <About data={tempDataEmail ? tempDataInfo : ''} />
      {/* <Portfolio /> */}
      {/* <Experience /> */}
      <Contact data={tempDataEmail ? tempDataInfo : ''} />
    </div>
  )
}

export default PortTempDemo1
