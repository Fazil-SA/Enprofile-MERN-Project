import React from 'react'
import styles from '../../style'
import { discount, robot } from '../../assets/user/index'
import GetStarted from './GetStarted'

const Hero = () => (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
          <p className={`${styles.paragraph} ml-2 font-poppins`}>
            <span className='text-white'>20% </span>Discount For {" "}
            <span className='text-white'>First </span>Year
          </p>
        </div>
        
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text[72px] text-[52px] ss:leading-[100px] leading-[75px]'>
            Create Your <br className='sm:block hidden' />
            <span className='text-gradient'>Online Identity</span>
          </h1>

          {/* <div className='ss:flex md:mr-4 hidden lg:hidden'>
            <GetStarted />
          </div> */}
          <div className={`ss:flex md:mr-4 hidden mr-0 animate-spin-bounce`}>
            <GetStarted />
          </div>
          
        </div>
        <h1 className='font-poppins font-semibold ss:text[68px] text-[52px] ss:leading-[100px] leading-[75px] w-full'>
          In Few Minutes.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
      
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <img src={robot} alt="heroImg" className='w-[100%] h-[100%] relative z-[5]' />

          
          <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
          <div className='absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient'/>
          <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>

      </div>
      <div className={`ss:hidden ${styles.flexCenter} animate-spin-bounce`}>
        <GetStarted/>
      </div>
    </section>
    
  )


export default Hero
