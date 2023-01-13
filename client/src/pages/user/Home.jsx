import React, { useState, useEffect } from 'react'
import styles from '../../style'
import {Business,
  Custom,
  Footer,
  GetStarted,
  Hero,
  NavBar,
  Stats,
  Card,
  ServiceCard} from '../../components/user/userComponents'
import { pricing , templates , feedback } from '../../constants/user/index'
import { axiosAdminInstance } from '../../Instance/Axios';


const Home = () => {

  const [portfolioTemp, setPortfolioTemp] = useState();
  const [ecommerceTemp, setEcommerceTemp] = useState();
  const [landingTemp, setLandingTemp] = useState();

  useEffect(() => {
    getAllTemplateCards()
    async function getAllTemplateCards(){
      try {
        const response = await axiosAdminInstance
        .post('/user/templateCards')
          .then((response) => {
            setPortfolioTemp(response.data[0] || '')
            setEcommerceTemp(response.data[1] || '')
            setLandingTemp(response.data[2] || '')
          })
          .catch((err) => {
            console.log(err)
          })
      } catch (error) {
        console.log(error)
      }
    }
  },[]);


  return (
    <>
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} text-white`}>
          <NavBar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} text-white`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} text-white`}>
        <Stats />
        <Business />
        { /* pricing */ }
        {/* <Card data={pricing} styles={styles} head="Pricing Plans"/> */}
        <ServiceCard />
        {/* PortTemps */}
        <Card data={portfolioTemp} styles={styles} head="Portfolio" />
        {/* {console.log(portfolioTemp)} */}
        {/* <Card data={portfolioTemp} styles={styles} head="Portfolio" /> */}
        {/* EcomTemps */}
        <Card data={ecommerceTemp} styles={styles} head="E-Commerce" />
        {/* LandingTemps */}
        <Card data={landingTemp} styles={styles} head="Landing Page" />
        {/* <Custom /> */}
        {/* Testimonials */}
        {/* <Card data={feedback} styles={styles} head="What Our Customer Says" /> */}

        <Footer />
        </div>
      </div>

    </div>
  
  </>
  )
}





export default Home
