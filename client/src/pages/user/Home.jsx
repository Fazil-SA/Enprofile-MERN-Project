import React from 'react'
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


const Home = () =>  (
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
        <Card pricing={pricing} styles={styles} head="Pricing Plans"/>
        <ServiceCard />
        {/* PortTemps */}
        <Card pricing={templates} styles={styles} head="Portfolio" />
        {/* EcomTemps */}
        <Card pricing={templates} styles={styles} head="E-Commerce" />
        {/* LandingTemps */}
        <Card pricing={templates} styles={styles} head="Landing Page" />
        <Custom />
        {/* Testimonials */}
        <Card pricing={feedback} styles={styles} head="What Our Customer Says" />

        <Footer />
        </div>
      </div>

    </div>
  )


export default Home
