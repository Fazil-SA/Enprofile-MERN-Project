import React from 'react'
import About from '../../../components/user/pt1Demo/About'
import Home from '../../../components/user/pt1Demo/Home'
import NavBar from '../../../components/user/pt1Demo/NavBar'
import SocialLinks from '../../../components/user/pt1Demo/SocialLinks'
import Portfolio from '../../../components/user/pt1Demo/Portfolio'
import Experience from '../../../components/user/pt1Demo/Experience'
import Contact from '../../../components/user/pt1Demo/Contact'
import SelectTemplate from '../../../components/user/pt1Demo/SelectTemplate'

const PortTempDemo1 = () => {
  return (
    <div>
      <SelectTemplate />
      <NavBar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  )
}

export default PortTempDemo1
