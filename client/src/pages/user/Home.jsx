import React from 'react'
import styles from '../../style'
import {Business,
  Custom,
  EcomTemps,
  Footer,
  GetStarted,
  Hero,
  LandingTemps,
  NavBar,
  PortTemps,
  Stats,
  Testimonials} from '../../components/user/userComponents'

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
        <Business />
        <Custom />
        <EcomTemps />
        <GetStarted />
        <LandingTemps />
        <PortTemps />
        <Stats />
        <Testimonials />
        <Footer />
        </div>
      </div>

    </div>
  )


export default Home
