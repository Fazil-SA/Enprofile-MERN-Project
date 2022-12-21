import React from 'react'
import styles from '../../style'
import { footerLinks, socialMedia } from '../../constants/user'
import { logo } from '../../assets/user'

const Footer = () => {
  return (
    // <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    //   <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
    //     <div className='flex-1 flex flex-col justify-start mr-10'>
    //       <img src={logo} alt="enprofile.com" className='w-[266px] h-[72px] object-contain'/>
    //       <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>the beginning</p>
    //     </div>
    //     <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
    //       {footerLinks.map((footerLinks) (
    //         <div key={footerLinks.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
    //           <h4>{footerLinks.title}</h4>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <h1>footer</h1>
  )
}

export default Footer
